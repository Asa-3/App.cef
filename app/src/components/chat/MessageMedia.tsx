import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAvatarUrl } from '@/hooks/useAvatarUrl';
import { formatDuration } from '@/hooks/useVoiceRecorder';
import type { MessageAttachment } from '@/types';
import styles from './MessageMedia.module.css';

/** Foto dentro do balão. Tocar abre em tela cheia. */
export function ImageMessage({ attachment }: { attachment: MessageAttachment }) {
  const url = useAvatarUrl(attachment.path, 'chat-media');
  const [isOpen, setIsOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  // Reserva o espaço certo antes da foto carregar (a conversa não "pula")
  const ratio = attachment.width && attachment.height ? `${attachment.width} / ${attachment.height}` : '4 / 3';

  return (
    <>
      <button
        type="button"
        className={styles.imageButton}
        style={{ aspectRatio: ratio }}
        onClick={() => url && setIsOpen(true)}
        aria-label="Abrir foto em tela cheia"
        disabled={!url || failed}
      >
        {failed ? (
          <span className={styles.imageError}>Não foi possível carregar a foto</span>
        ) : url ? (
          <img className={styles.image} src={url} alt="Foto enviada na conversa" loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <span className={styles.imageLoading} aria-hidden="true" />
        )}
      </button>
      {isOpen && url && <ImageViewer url={url} onClose={() => setIsOpen(falsֻǱ˞