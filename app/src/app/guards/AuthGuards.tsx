import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router';
import { LoadingState } from '@/components/feedback';
import { useAuth } from '@/hooks/useAuth';
import { initialAuthLinkError, initialAuthLinkType } from '@/lib/supabase';
import { ROUTES } from '@/app/routes';

export type RedirectState = { from?: string };

/** Rota raiz: se o app foi aberto por um link de convite/recuperação, leva para criar a senha. */
export function RootRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const isPasswordLink = initialAuthLinkType === 'recovery' || initialAuthLinkType === 'invite';
    if ((isPasswordLink || initialAuthLinkError) && window.location.pathname !== ROUTES.resetPassword) {
      navigate(ROUTES.resetPassword, { replace: true });
    }
  }, [navigate]);

  return <Outlet />;
}

/** Só deixa passar usuários logados. Os demais vão para o login e voltam depois. */
export function RequireAuth() {
  const { session, isInitializing } = useAuth();
  const location = useLocation();

  if (isInitializing) return <LoadingState message="Abrindo o App.cef..." />;
  if (!session) {
    const state: RedirectState = { from: location.pathname + location.search };
    return <Navigate to={ROUTES.login} replace state={state} />;
  }
  return <Outlet />;
}

/** Primeiro acesso: antes de usar o app, a pessoa passa uma única vez pelas boas-vindas. */
export function RequireOnboarding() {
  const { profile, isProfileֻǱ˞