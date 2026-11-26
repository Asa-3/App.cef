-- Issue #26: harden direct table and function privileges.
-- RLS policies remain the source of row-level authorization.
-- Client writes are routed through the existing SECURITY DEFINER RPCs,
-- except message creation, which has an explicit INSERT policy.

REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM anon;
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM authenticated;

GRANT SELECT ON
  public.profiles,
  public.conversations,
  public.conversation_members,
  public.conversation_reads,
  public.messages,
  public.push_subscriptions
TO authenticated;

GRANT INSERT ON public.messages TO authenticated;

-- These functions are invoked by database triggers, not by client RPC calls.
-- Trigger execution does not require callers to retain EXECUTE on the function.
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated, service_role;
REVOKE EXECUTE ON FUNCTION public.notify_push_on_message() FROM PUBLIC, anon, authenticated, service_role;
REVOKE EXECUTE ON FUNCTION public.touch_conversation_last_message() FROM PUBLIC, anon, authenticated, service_role;

-- Internal authorization helpers: keep execution for authenticated requests
-- because the existing RLS policies call them; unauthenticated clients do not.
REVOKE EXECUTE ON FUNCTION public.is_active_user() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_active_user() TO authenticated;

REVOKE EXECUTE ON FUNCTION public.is_conversation_member(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_conversation_member(uuid) TO authenticated;

-- Group-admin check is only called internally by privileged RPC functions.
REVOKE EXECUTE ON FUNCTION public.is_group_admin(uuid) FROM PUBLIC, anon, authenticated;
