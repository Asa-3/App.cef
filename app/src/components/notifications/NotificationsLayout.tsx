import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Avatar } from '@/components/ui/Avatar';
import { env } from '@/config/env';
import { useAuth } from '@/hooks/useAuth';
import { useRealtimeMessages } from '@/hooks/useRealtimeMessages';
import { getMessageById, listMyConversations } from '@/services/conversationService';
import { getPushStatus, registerServiceWorker, setAppBadge } from '@/services/pushService';
import type { MessageInsertEvent } from '@/services/realtimeService';
import type { ConversationSummary } from '@/types';
import { conversationPath, ROUTES } from '@/app/routes';
import styles from './Notifications.module.css';

type NotificationsContextValue = {
  /** Total de mensagens não lidas (todas as conversas). */
  totalUnread: number;
  /** Recalcula o total (ex.: depois de ler uma conversa). */
  refresh: () => void;
};

const NotificationsContext = createContext<NotificationsContextValue>({ totalUnread: 0, refresh: () => undefined });

export function useNotifications(): NotificationsContextValue {
  return useContext(NotificationsContext);
}

type Toast = {
  id: string;
  conversationId: string;
  title: string;
  text: string;
  photoPath: string | null;
  isGroup: boolean;
};

const TOAST_MS = 5000;

/**
 * Avisos de mensagens novas em todo o app (enquanto ele está aberto):
 * contador de não lidas, aviso no topo da tela, númeֻǱ˞