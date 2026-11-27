-- Simplified issue #32: files are immediately available after upload.
-- Scope: private PDF/JPEG attachments for the experimental app.
-- No antivirus scanner or asynchronous approval workflow is required.

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

comment on column public.messages.attachment_status is
  'Simple attachment workflow for the experimental app: new PDF/JPEG file messages are immediately available to conversation participants. MIME, extension and size are checked by Storage policies; no antivirus scanner is part of this scope.';
