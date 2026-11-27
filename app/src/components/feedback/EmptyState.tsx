import type { ReactNode } from 'react';
import styles from './Feedback.module.css';

type EmptyStateProps = {
  title?: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
};

export function EmptyState({ title = 'Nada por aqui ainda', description, icon = '📭', action }: EmptyStateProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      {action}
    </div>
  );
}
