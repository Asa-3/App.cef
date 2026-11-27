-- Issue #32: secure metadata and RLS for private PDF/JPEG message attachments.
--
-- Prerequisite provisioned in Supabase Storage:
--   bucket: message-attachments
--   public: false
--   max file size: 50 MiB (current Free-plan global ceiling)
--   allowed MIME types: application/pdf, image/jpeg
--
-- The bucket was created separately through the Storage SQL API because the
-- Supabase migration runner used for this deployment is not the owner of
-- storage.buckets. See Docs/Backend/Storage-Anexos-Issue32.md.
--
-- Product requirement: PDF up to 2 GiB and JPEG up to 20 MiB. The current
-- project plan prevents the PDF limit from being configured above 50 MiB.
-- No attachment is downloadable until a trusted scanner marks it approved.

alter table public.messages
  add column if not exists attachment_status text not null default 'not_applicable';

alter table public.messages
  alter column attachment_size type bigint
  using attachment_size::bigint;

alter table public.messages
  drop constraint if exists messages_kind_check,
  drop constraint if exists messages_attachment_check;

alter table public.messages
  add constraint messages_kind_check
    check (kind = any (array['text'::text, 'image'::text, 'audio'::text, 'file'::text])),
  add constraint messages_attachment_check
    check (
      (
        kind = 'text'
        and attachment_path is null
        and attachment_mime is null
        and attachment_size is null
        and attachment_status = 'not_applicable'
      )
      or
      (
        kind in ('image', 'audio')
        and attachment_path is not null
        and split_part(attachment_path, '/', 1) = conversation_id::text
        and split_part(attachment_path, '/', 2) = sender_id::text
        and attachment_status = 'not_applicable'
        and (attachment_size is null or (attachment_size >= 1 and attachment_size <= 15728640))
        and (audio_duration_ms is null or (audio_duration_ms >= 0 and audio_duration_ms <= 600000))
      )
      or
      (
        kind = 'file'
        and attachment_path ~ (
          '^' || conversation_id::text || '/' || sender_id::text || '/' || id::text || '/[^/]+$'
        )
        and attachment_mime in ('application/pdf', 'image/jpeg')
        and attachment_size between 1 and
          case
            when attachment_mime = 'image/jpeg' then 20971520
            else 52428800
          end
        and (
          (attachment_mime = 'application/pdf' and lower(attachment_path) ~ '\\.pdf$')
          or
          (attachment_mime = 'image/jpeg' and lower(attachment_path) ~ '\\.(jpg|jpeg)$')
        )
        and attachment_status in ('pending_scan', 'approved', 'rejected', 'expired')
        and audio_duration_ms is null
      )
    );

create or replace function public.set_message_attachment_status()
returns trigger
language plpgsql
set search_path = ''
as $function$
begin
  if new.kind = 'file' then
    new.attachment_status := 'pending_scan';
  else
    new.attachment_status := 'not_applicable';
  end if;
  return new;
end;
$function$;

revoke all on function public.set_message_attachment_status() from public, anon, authenticated;

drop trigger if exists set_message_attachment_status_before_insert on public.messages;
create trigger set_message_attachment_status_before_insert
before insert on public.messages
for each row
execute function public.set_message_attachment_status();

create unique index if not exists messages_attachment_path_unique
  on public.messages (attachment_path)
  where attachment_path is not null;

drop policy if exists "Participantes enviam anexos PDF e JPEG" on storage.objects;
create policy "Participantes enviam anexos PDF e JPEG"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'message-attachments'
  and public.is_active_user()
  and public.is_conversation_member(public.group_id_from_path(name))
  and split_part(name, '/', 2) = (select auth.uid())::text
  and name ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/[^/]+$'
  and metadata->>'mimetype' in ('application/pdf', 'image/jpeg')
  and (metadata->>'size') ~ '^[0-9]+$'
  and (metadata->>'size')::bigint between 1 and
    case
      when metadata->>'mimetype' = 'image/jpeg' then 20971520
      else 52428800
    end
  and (
    (metadata->>'mimetype' = 'application/pdf' and lower(name) ~ '\\.pdf$')
    or
    (metadata->>'mimetype' = 'image/jpeg' and lower(name) ~ '\\.(jpg|jpeg)$')
  )
  and exists (
    select 1
    from public.messages m
    where m.id::text = split_part(name, '/', 3)
      and m.conversation_id = public.group_id_from_path(name)
      and m.sender_id = (select auth.uid())
      and m.kind = 'file'
      and m.attachment_path = name
      and m.attachment_mime = metadata->>'mimetype'
      and m.attachment_size = (metadata->>'size')::bigint
      and m.attachment_status = 'pending_scan'
      and m.deleted_at is null
  )
);

drop policy if exists "Participantes baixam anexos aprovados" on storage.objects;
create policy "Participantes baixam anexos aprovados"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'message-attachments'
  and public.is_active_user()
  and exists (
    select 1
    from public.messages m
    where m.attachment_path = storage.objects.name
      and m.conversation_id = public.group_id_from_path(storage.objects.name)
      and m.kind = 'file'
      and m.attachment_status = 'approved'
      and m.deleted_at is null
      and public.can_read_message(m.conversation_id, m.created_at)
  )
);

drop policy if exists "Autores e administradores participantes excluem anexos" on storage.objects;
create policy "Autores e administradores participantes excluem anexos"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'message-attachments'
  and public.is_active_user()
  and public.is_conversation_member(public.group_id_from_path(name))
  and (
    split_part(name, '/', 2) = (select auth.uid())::text
    or (
      public.is_admin_user()
      and public.is_conversation_member(public.group_id_from_path(name))
    )
  )
);

comment on column public.messages.attachment_status is
  'Security workflow for file attachments. New file messages are forced to pending_scan; only a trusted server-side scanner may transition to approved.';
