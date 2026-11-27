import { Fragment } from 'react';
import styles from './HighlightedText.module.css';

/**
 * Mostra o trecho vindo da busca destacando o que está entre ⟦ e ⟧.
 * Não usa HTML do servidor (evita injeção de código).
 */
export function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(⟦[^⟧]*⟧)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith('⟦') && part.endsWith('⟧') ? (
          <mark key={index} className={styles.mark}>
            {part.slice(1, -1)}
          </mark>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
