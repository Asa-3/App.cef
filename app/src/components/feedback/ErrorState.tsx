import { Button } from '@/components/ui/Button';
import styles from './Feedback.module.css';

type ErrorStateProps = {
  title?: string;
  error?: Error | string;
  onRetry?: () => void;
};

export function ErrorState({ title = 'Algo deu errado', error, onRetry }: ErrorStateProps) {
  const message = typeof error === 'string' ? error : error?.message;
  return (
    <div className={styles.wrapper} role="alert">
      <span className={styles.icon} aria-hidden="true">⚠️</span>
      <h2 className={styles.errorTitle}>{title}</h2>
      {message && <p className={styles.description}>{message}</p>}
      {onRetry && <Button onClick={onRetry}>Tentar novamente</Button>}
    </div>
  );
}
