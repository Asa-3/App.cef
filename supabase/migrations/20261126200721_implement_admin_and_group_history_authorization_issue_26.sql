-- Issue #26: apply the homologated Employee / Administrator authorization model.
-- The existing database values map "colaborador" to Employee and "admin_ti" to Administrator.

CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO ''
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles p
    WHERE p.id = (SELECT auth.uid())
      AND p.is_active
      AND p.role = 'admin_ti'
  );
$function$;

REVOKE EXECUTE ON FUNCTION public.is_admin_user() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_admin_user() TO authenticated;

-- A global Administrator can administer any group. A group-local admin can
-- administer only the group where they hold the admin membership.
CREATE OR REPLACE FUNCTION public.is_group_admin(p_conversation_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
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

REVOKE EXECUTE ON FUNCTION public.is_group_admin(uuid) FROM PUBLIC, anon, authenticated;

-- Group history is scoped to the latest active membership period.
CREATE OR REPLACE FUNCTION public.can_read_message(
  p_conversation_id uuid,
  p_created_at timestamptz
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO ''
AS $function$
  SELECT public.is_active_user() AND EXISTS (
    SELECT 1
    FROM public.conversation_members cm
    JOIN public.conversations c ON c.id = cm.conversation_id
    WHERE cm.conversation_id = p_conversation_id
      AND cm.user_id = (SELECT auth.uid())
      AND cm.left_at IS NULL
      AND (c.type <> 'group' OR p_created_at >= cm.joined_at)
  );
$function$;

REVOKE EXECUTE ON FUNCTION public.can_read_message(uuid, timestamptz) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.can_read_message(uuid, timestamptz) TO authenticated;

DROP POLICY IF EXISTS "Participantes leem mensagens" ON public.messages;
CREATE POLICY "Participantes leem mensagens"
ON public.messages
FOR SELECT
TO authenticated
USING (
  deleted_at IS NULL
  AND public.can_read_message(conversation_id, created_at)
);

DROP POLICY IF EXISTS "Administradores veem grupos" ON public.conversations;
CREATE POLICY "Administradores veem grupos"
ON public.conversations
FOR SELECT
TO authenticated
USING (
  type = 'group'
  AND public.is_admin_user()
);

DROP POLICY IF EXISTS "Administradores veem membros dos grupos" ON public.conversation_members;
CREATE POLICY "Administradores veem membros dos grupos"
ON public.conversation_members
FOR SELECT
TO authenticated
USING (
  public.is_admin_user()
  AND EXISTS (
    SELECT 1
    FROM public.conversations c
    WHERE c.id = conversation_members.conversation_id
      AND c.type = 'group'
  )
);

-- Only system Administrators may create groups, as required by M05.
CREATE OR REPLACE FUNCTION public.create_group(p_title text, p_member_ids uuid[])
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
DECLARE
  v_me uuid := (SELECT auth.uid());
  v_title text := trim(regexp_replace(coalesce(p_title, ''), '\s+', ' ', 'g'));
  v_members uuid[];
  v_conversation uuid;
BEGIN
  IF v_me IS NULL OR NOT public.is_active_user() THEN
    RAISE EXCEPTION 'Acesso não permitido' USING errcode = '42501';
  END IF;
  IF NOT public.is_admin_user() THEN
    RAISE EXCEPTION 'Somente Administradores podem criar grupos.' USING errcode = '42501';
  END IF;
  IF char_length(v_title) < 1 OR char_length(v_title) > 60 THEN
    RAISE EXCEPTION 'Dê um nome ao grupo (até 60 caracteres).' USING errcode = '22023';
  END IF;
  IF cardinality(coalesce(p_member_ids, '{}')) > 1000 THEN
    RAISE EXCEPTION 'Um grupo pode ter no máximo 256 participantes.' USING errcode = '22023';
  END IF;

  SELECT coalesce(array_agg(DISTINCT u.member_id), '{}')
  INTO v_members
  FROM unnest(coalesce(p_member_ids, '{}')) AS u(member_id)
  WHERE u.member_id IS NOT NULL AND u.member_id <> v_me;

  IF cardinality(v_members) < 1 THEN
    RAISE EXCEPTION 'Escolha pelo menos um participante.' USING errcode = '22023';
  END IF;
  IF cardinality(v_members) > 255 THEN
    RAISE EXCEPTION 'Um grupo pode ter no máximo 256 participantes.' USING errcode = '22023';
  END IF;
  IF EXISTS (
    SELECT 1
    FROM unnest(v_members) AS u(member_id)
    WHERE NOT EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = u.member_id AND p.is_active
    )
  ) THEN
    RAISE EXCEPTION 'Algum colaborador escolhido não está disponível.' USING errcode = '22023';
  END IF;

  INSERT INTO public.conversations (type, title, created_by)
  VALUES ('group', v_title, v_me)
  RETURNING id INTO v_conversation;

  INSERT INTO public.conversation_members (conversation_id, user_id, role, added_by)
  VALUES (v_conversation, v_me, 'admin', v_me);

  INSERT INTO public.conversation_members (conversation_id, user_id, role, added_by)
  SELECT v_conversation, u.member_id, 'member', v_me
  FROM unnest(v_members) AS u(member_id);

  RETURN v_conversation;
END;
$function$;
