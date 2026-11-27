-- Issue #32: simplify attachment approval for the experimental project.
-- No scanner or asynchronous review exists in this scope, so file messages
-- are approved on insert while Storage access remains participant-restricted.

create or replace function public.set_message_attachment_status()
returns trigger
language plpgsql
set search_path = ''
as $function$
begin
  if new.kind = 'file' then
    new.attachment_status := 'approved';
  else
    new.attachment_status := 'not_applicable';
  end if;
  return new;
end;
$function$;

revoke all on function public.set_message_attachment_status() from public, anon, authenticated;

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
    (metadata->>'mimetype' = 'application/pdf' and lower(name) ~ '\\\\.pdf$')
    or
    (metadata->>'mimetype' = 'image/jpeg' and lower(name) ~ '\\\\.(jpg|jpeg)$')
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
      and m.attachment_status = 'approved'
      and m.deleted_at is null
  )
);

comment on column public.messages.attachment_status is
  'File attachments are approved immediately in this experimental scope; Storage access remains restricted by participant policies.';
