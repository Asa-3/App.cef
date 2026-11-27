-- Issue #26: allow Storage RLS to evaluate group-administrator checks.
-- The group-avatar Storage policies call public.is_group_admin(uuid).
-- The function was revoked from authenticated clients, causing those policy
-- checks to fail before the authorization predicate could be evaluated.
-- This helper returns only whether the current caller may administer the
-- supplied group; the function itself derives the caller from auth.uid().
GRANT EXECUTE ON FUNCTION public.is_group_admin(uuid) TO authenticated;
