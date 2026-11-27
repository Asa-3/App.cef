import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { isSupabaseConfigured } from '@/config/env';
import { getCurrentSession, onAuthChange } from '@/services/authService';
import { getMyProfile } from '@/services/profileService';
import { closeAllSubscriptions } from '@/services/realtimeService';
import type { Profile } from '@/types';

export type AuthContextValue = {
  session: Session | null;
  user: User | null;
  /** Dados do colaborador (nome, setor, nascimento...). Null enquanto carrega ou se não existir. */
  profile: Profile | null;
  /** Recarrega o perfil (ex.: depois de editar). */
  refreshProfile: () => Promise<void>;
  /** true enquanto o perfil do usuário logado ainda não foi carregado pela primeira vez */
  isProfileLoading: boolean;
  /** true enquanto a sessão salva ainda está sendo restaurada */
  isInitializing: boolean;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/** Restaura a sessão salva, acompanha login/logout e carrega o perfil do colaborador. */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadedProfileFor, setLoadedProfileFor] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(isSupabaseConfiֻǱ˞