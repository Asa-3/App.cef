import { useEffect, useState } from 'react';
import { getAvatarUrl, type PhotoBucket } from '@/services/profileService';

const CACHE_MS = 50 * 60 * 1000; // um pouco menos que a validade do link (1 h)
const cache = new Map<string, { url: string; expiresAt: number }>();

/** Link para exibir uma foto (de pessoa ou de grupo). Guarda em memória para não pedir de novo a cada tela. */
export function useAvatarUrl(path: string | null | undefined, bucket: PhotoBucket = 'avatars'): string | null {
  const key = path ? `${bucket}:${path}` : null;
  const cached = key ? cache.get(key) : undefined;
  const [url, setUrl] = useState<string | null>(cached && cached.expiresAt > Date.now() ? cached.url : null);

  useEffect(() => {
    if (!path || !key) {
      setUrl(null);
      return;
    }
    const hit = cache.get(key);
    if (hit && hit.expiresAt > Date.now()) {
      setUrl(hit.url);
      return;
    }
    let active = true;
    getAvatarUrl(path, bucket)
      .then((signedUrl) => {
        cache.set(key, { url: signedUrl, expiresAt: Date.now() + CACHE_MS });
        if (active) setUrl(signedUrl);
      })
      .catch(() => active && setUrl(null)); // sem foto, mostra as iniciais
    return () => {
      active = false;
    };
  }, [path, bucket, key]);

  return url;
}
