import { useEffect, useRef, useState } from 'react';
import type { ConnectionStatus } from '@/types';
import styles from './ConnectionBanner.module.css';

const DELAY_MS = 1500; // não mostra nada em conexões rápidas (evita piscar)
const RECONNECTED_MS = 2000;

type ProblemStatus = Exclude<ConnectionStatus, 'connected'>;

const MESSAGES: Record<ProblemStatus, string> = {
  connecting: 'Conectando...',
  reconnecting: 'Conexão instável. Reconectando...',
  offline: 'Sem internet. As mensagens novas aparecem quando a conexão voltar.',
};

/** Faixa discreta sobre o estado da conexão em tempo real. Só aparece quando necessário. */
export function ConnectionBanner({ status }: { status: ConnectionStatus }) {
  const [visibleStatus, setVisibleStatus] = useState<ProblemStatus | 'reconnected' | null>(null);
  const wasShowingProblem = useRef(false);

  useEffect(() => {
    if (status === 'connected') {
      if (!wasShowingProblem.current) {
        setVisibleStatus(null);
        return;
      }
      wasShowingProblem.current = false;
      setVisibleStatus('reconnected');
      const timer = setTimeout(() => setVisibleStatus(null), RECONNECTED_MS);
      return () => clearTimeout(timer);
    }
    const problem: ProblemStatus = status;
    const timer = setTimeout(
      () => {
        wasShowingProblem.current = true;
        setVisibleStatus(problem);
      },
      status === 'offline' ? 0 : DELAY_MS,
    );
    return () => clearTimeout(timer);
  }, [status]);

  ifֻǱ˞