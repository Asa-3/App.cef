-- Issues #58 and #59: message deletion and persistent in-app notifications.

create table if not exists public.admin_audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid not null,
  action text not null,
  target_type text not null,
  target_id uuid,
  conversation_id uuid,
  result text not null default 'success',
  created_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists admin_audit_logs_created_at_idx on public.admin_audit_logs (created_at desc);
create index if not exists admin_audit_logs_actor_created_idx on public.admin_audit_logs (actor_id, created_at desc);
alter table public.admin_audit_logs enable row level security;
revoke all on public.admin_audit_logs from anon, authenticated;
grant select on public.admin_audit_logs to authenticated;
drop policy if exists "Administradores consultam auditoria" on public.admin_audit_logs;
create policy "Administradores consultam auditoria" on public.admin_audit_logs for select to authenticated using (public.is_admin_user());
comment on table public.admin_audit_logs is 'Trilha administrativa mínima; nunca armazena conteúdo de mensagens, senhas, tokens ou segredos.';

create or replace function public.delete_message(p_message_id uuid)
returns boolean language plpgsql security definer set search_path = ''
as $function$
declare
  v_user_id uuid := (select auth.uid());
  v_message public.messages%rowtype;
  v_is_author boolean;
  v_is_admin boolean;
begin
  if v_user_id is null or not public.is_active_user() then
    raise exception 'Acesso não permitido.' using errcode = '42501';
  end if;
  if p_message_id is null then raise exception 'Mensagem não encontrada.' using errcode = '22023'; end if;
  select m.* into v_message from public.messages m where m.id = p_message_id for update;
  if not found then raise exception 'Mensagem não encontrada.' using errcode = 'P0002'; end if;
  if v_message.deleted_at is not null then return false; end if;
  v_is_author := v_message.sender_id = v_user_id;
  v_is_admin := public.is_admin_user()
    and public.is_conversation_member(v_message.conversation_id)
    and public.can_read_message(v_message.conversation_id, v_message.created_at);
  if not v_is_author and not v_is_admin then
    raise exception 'Acesso não permitido.' using errcode = '42501';
  end if;
  update public.messages set deleted_at = now(),
    attachment_status = case when kind = 'file' then 'expired' else attachment_status end
  where id = p_message_id;
  if v_is_admin and not v_is_author then
    insert into public.admin_audit_logs (actor_id, action, target_type, target_id, conversation_id, result, metadata)
    values (v_user_id, 'message.delete', 'message', v_message.id, v_message.conversation_id, 'success', '{}'::jsonb);
  end if;
  return true;
end;
$function$;
revoke all on function public.delete_message(uuid) from public, anon;
grant execute on function public.delete_message(uuid) to authenticated;
comment on function public.delete_message(uuid) is 'Soft-deletes a message for all participants. Authors may delete their own messages; administrators must already be active participants. Administrative deletions are audited without message content.';

create or replace function public.list_my_conversations()
returns table (conversation_id uuid,title text,conversation_type text,last_activity_at timestamptz,last_message_body text,last_sender_id uuid,last_sender_name text,unread_count integer,avatar_path text,member_names text)
language sql stable set search_path = ''
as $function$
  select c.id, public.conversation_display_title(c.id), c.type,
    coalesce(lm.created_at, c.created_at), lm.body, lm.sender_id, p.full_name, unread.total,
    case when c.type = 'direct' then (
      select op.avatar_path from public.conversation_members om join public.profiles op on op.id = om.user_id
      where om.conversation_id = c.id and om.user_id <> (select auth.uid()) and om.left_at is null limit 1
    ) else c.avatar_path end,
    (
      select string_agg(x.full_name, ', ' order by x.full_name)
      from (
        select mp.full_name from public.conversation_members mm join public.profiles mp on mp.id = mm.user_id
        where mm.conversation_id = c.id and mm.user_id <> (select auth.uid()) and mm.left_at is null
        order by mp.full_name limit 50
      ) x
    )
  from public.conversations c
  left join public.conversation_reads r on r.conversation_id = c.id and r.user_id = (select auth.uid())
  left join lateral (
    select m.body, m.created_at, m.sender_id from public.messages m
    where m.conversation_id = c.id and m.deleted_at is null order by m.created_at desc limit 1
  ) lm on true
  left join public.profiles p on p.id = lm.sender_id
  cross join lateral (
    select count(*)::integer as total from (
      select 1 from public.messages um
      where um.conversation_id = c.id and um.sender_id <> (select auth.uid())
        and um.created_at > coalesce(r.last_read_at, '-infinity'::timestamptz)
        and um.deleted_at is null limit 100
    ) u
  ) unread
  where public.is_conversation_member(c.id)
  order by 4 desc, c.id;
$function$;

drop policy if exists "Participantes veem fotos e audios" on storage.objects;
create policy "Participantes veem fotos e audios" on storage.objects for select to authenticated
using (
  bucket_id = 'chat-media' and public.is_active_user()
  and exists (
    select 1 from public.messages m
    where m.attachment_path = objects.name
      and m.conversation_id = public.group_id_from_path(objects.name)
      and m.kind in ('image','audio') and m.deleted_at is null
      and public.can_read_message(m.conversation_id,m.created_at)
  )
);
drop policy if exists "Autores e administradores excluem mídia de mensagens" on storage.objects;
create policy "Autores e administradores excluem mídia de mensagens" on storage.objects for delete to authenticated
using (
  bucket_id = 'chat-media' and public.is_active_user()
  and exists (
    select 1 from public.messages m
    where m.attachment_path = objects.name
      and m.conversation_id = public.group_id_from_path(objects.name)
      and m.kind in ('image','audio')
      and (
        m.sender_id = (select auth.uid())
        or (public.is_admin_user() and public.is_conversation_member(m.conversation_id)
            and public.can_read_message(m.conversation_id,m.created_at))
      )
  )
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid not null references public.profiles(id) on delete cascade,
  actor_id uuid,
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  message_id uuid not null references public.messages(id) on delete cascade,
  event_type text not null,
  created_at timestamptz not null default now(),
  read_at timestamptz,
  constraint notifications_event_type_check check (event_type = 'new_message'),
  constraint notifications_recipient_event_message_key unique (recipient_id,event_type,message_id)
);
create index if not exists notifications_recipient_created_idx on public.notifications (recipient_id,created_at desc);
create index if not exists notifications_unread_idx on public.notifications (recipient_id,created_at desc) where read_at is null;
alter table public.notifications enable row level security;
revoke all on public.notifications from anon, authenticated;
grant select on public.notifications to authenticated;
drop policy if exists "Usuarios consultam suas notificacoes" on public.notifications;
create policy "Usuarios consultam suas notificacoes" on public.notifications for select to authenticated
using (recipient_id = (select auth.uid()) and public.is_active_user());

create or replace function public.persist_message_notifications()
returns trigger language plpgsql security definer set search_path = ''
as $function$
begin
  if new.deleted_at is not null then return new; end if;
  insert into public.notifications (recipient_id,actor_id,conversation_id,message_id,event_type)
  select cm.user_id,new.sender_id,new.conversation_id,new.id,'new_message'
  from public.conversation_members cm
  where cm.conversation_id = new.conversation_id and cm.user_id <> new.sender_id
    and cm.left_at is null and cm.joined_at <= new.created_at
  on conflict (recipient_id,event_type,message_id) do nothing;
  return new;
end;
$function$;
revoke all on function public.persist_message_notifications() from public, anon, authenticated;
drop trigger if exists persist_message_notification_after_insert on public.messages;
create trigger persist_message_notification_after_insert after insert on public.messages
for each row execute function public.persist_message_notifications();

create or replace function public.mark_notification_read(p_notification_id uuid)
returns boolean language plpgsql security definer set search_path = ''
as $function$
declare v_user_id uuid := (select auth.uid()); v_updated integer;
begin
  if v_user_id is null or not public.is_active_user() then
    raise exception 'Acesso não permitido.' using errcode = '42501';
  end if;
  update public.notifications set read_at = coalesce(read_at,now())
  where id = p_notification_id and recipient_id = v_user_id;
  get diagnostics v_updated = row_count;
  if v_updated = 0 then raise exception 'Notificação não encontrada.' using errcode = 'P0002'; end if;
  return true;
end;
$function$;
revoke all on function public.mark_notification_read(uuid) from public, anon;
grant execute on function public.mark_notification_read(uuid) to authenticated;
comment on table public.notifications is 'Inbox persistente por destinatário. read_at representa somente leitura da notificação, não recibo de leitura da mensagem.';
comment on function public.mark_notification_read(uuid) is 'Marca somente a notificação do usuário autenticado como lida; não altera conversation_reads.';
