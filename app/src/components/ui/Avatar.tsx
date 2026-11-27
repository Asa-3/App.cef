import { useState } from 'react';
import { useAvatarUrl } from '@/hooks/useAvatarUrl';
import type { PhotoBucket } from '@/services/profileService';
import { getInitials } from '@/utils/format';
import styles from './Avatar.module.css';

const GRADIENTS = [
  'linear-gradient(135deg, #3483fa, #2968c8)',
  'linear-gradient(135deg, #2d3277, #3483fa)',
  'linear-gradient(135deg, #00a650, #00875a)',
  'linear-gradient(135deg, #ff7733, #f04449)',
  'linear-gradient(135deg, #7a5af8, #2d3277)',
];

type AvatarProps = {
  name: string;
  size?: number;
  /** Caminho da foto no Storage. Sem foto (ou se falhar), mostra as iniciais. */
  photoPath?: string | null;
  /** Foto já carregada localmente (ex.: prévia logo após escolher). */
  photoUrl?: string | null;
  /** Onde a foto está guardada: 'avatars' (pessoas, padrão) ou 'group-avatars' (grupos). */
  photoBucket?: PhotoBucket;
};

/** Foto de perfil, ou um círculo com as iniciais (a cor é sempre a mesma para o mesmo nome). */
export function Avatar({ name, size = 44, photoPath, photoUrl, photoBucket = 'avatars' }: AvatarProps) {
  const signedUrl = useAvatarUrl(photoUrl ? null : photoPath, photoBucket);
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const src = photoUrl ?? signedUrl;
  const hash = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return (
    <span
      className={styles.avatar}
      style={{ width: size, height: size, fontSize: size * 0.38, background: GRADIENTS[hash ֻǱ˞