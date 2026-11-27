import { useEffect, useState } from 'react';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { disablePush, enablePush, getPushStatus, type PushStatus } from '@/services/pushService';
import styles from './Notifications.module.css';

const DISMISS_KEY = 'app-cef:push-prompt-dispensado';

function errorMessage(err: unknown): string {
  if (err instanceof Error && err.name === 'PushSetupError') return err.message;
  if (!navigator.onLine) return 'Sem conexão com a internet. Tente novamente.';
  return 'Não foi possível ativar agora. Tente novamente em instantes.';
}

function usePushStatus() {
  const [status, setStatus] = useState<PushStatus | null>(null);
  useEffect(() => {
    getPushStatus()
      .then(setStatus)
      .catch(() => setStatus('unsupported'));
  }, []);
  return [status, setStatus] as const;
}

/** Cartão do Perfil: ligar ou desligar as notificações neste aparelho. */
export function PushSettingsCard() {
  const [status, setStatus] = usePushStatus();
  const [isBusy, setIsBusy] = useState(false);
  const [error, setError] = useState<string>();

  async function toggle() {
    setIsBusy(true);
    setError(undefined);
    try {
      if (status === 'on') {
        await disablePush();
        setStatus('off');
      } else {
        setStatus(await enablePush());
      }
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setIsBusy(false);
    }
  }

  if (status === null) ֻǱ˞