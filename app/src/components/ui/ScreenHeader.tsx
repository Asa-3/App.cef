import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ROUTES } from '@/app/routes';
import styles from './ScreenHeader.module.css';

type ScreenHeaderProps = {
  children: ReactNode;
  /** Para onde ir se não houver tela anterior (ex.: link aberto direto). */
  fallbackTo?: string;
  /** Substitui o "voltar" padrão (ex.: voltar um passo dentro da mesma tela). */
  onBack?: () => void;
};

/** Cabeçalho de tela cheia com botão Voltar (telas de busca e conversa). */
export function ScreenHeader({ children, fallbackTo = ROUTES.home, onBack }: ScreenHeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  function goBack() {
    if (onBack) return onBack();
    // 'default' = primeira tela aberta nesta aba: não há para onde voltar
    if (location.key === 'default') navigate(fallbackTo, { replace: true });
    else navigate(-1);
  }

  return (
    <header className={styles.header}>
      <button type="button" className={styles.back} onClick={goBack} aria-label="Voltar">
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={styles.content}>{children}</div>
    </header>
  );
}
