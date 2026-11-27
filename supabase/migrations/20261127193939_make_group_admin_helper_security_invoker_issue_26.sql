-- Issue #26: keep the group-admin helper safe for Storage RLS.
-- Storage policies call this predicate. SECURITY INVOKER ensures it evaluates
-- with the caller's normal RLS visibility. Calls made inside existing
-- SECURITY DEFINER RPCs still execute with the outer function's effective
-- role. The function returns only a caller-scoped authorization boolean.
CREATE OR REPLACE FUNCTION public.is_group_admin(p_conversation_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path TO ''
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.conversations c
    WHERE c.id = p_conversation_id
      AND c.type = 'group'
      AND (
        public.is_admin_user()
        OR EXISTS (
          SELECT 1
          FROM public.conversation_members m
          WHERE m.conversation_id = c.id
            AND m.user_id = (SELECT auth.uid())
            AND m.left_at IS NULL
            AND m.role = 'admin'
        )
      )
  );
$function$;

REVOKE EXECUTE ON FUNCTION public.is_group_admin(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_group_admin(uuid) TO authenticated;
