import { useCallback, useEffect, useRef, useState } from 'react';
import { listMyConversations } from '@/services/conversationService';
import type { MessageInsertEvent } from '@/services/realtimeService';
import type { ConversationSummary } from '@/types';
import { useAuth } from './useAuth';
import { useRealtimeMessages } from './useRealtimeMessages';

/** Lista de conversas que se atualiza sozinha quando chega mensagem nova. */
export function useConversationList() {
  const [items, setItems] = useState<ConversationSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const refreshTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const { user } = useAuth();
  const myIdRef = useRef(user?.id);
  useEffect(() => {
    myIdRef.current = user?.id;
  }, [user?.id]);

  const load = useCallback(async (silent: boolean) => {
    if (!silent) {
      setIsLoading(true);
      setError(undefined);
    }
    try {
      setItems(await listMyConversations());
      setError(undefined);
    } catch (err) {
      if (!silent) setError(err);
    } finally {
      if (!silent) setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void load(false);
    return () => clearTimeout(refreshTimer.current);
  }, [load]);

  /** Junta vários eventos seguidos numa única atualização. */
  const scheduleRefresh = useCallback(() => {
    clearTimeout(refreshTimer.current);
    refreshTimer.current = setTimeout(() =>ֻǱ˞