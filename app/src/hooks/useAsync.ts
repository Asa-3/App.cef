import { useCallback, useEffect, useState } from 'react';

type AsyncState<T> = {
  data: T | undefined;
  error: Error | undefined;
  isLoading: boolean;
  reload: () => void;
};

/**
 * Executa uma função assíncrona (normalmente de um service) e expõe
 * os estados de carregamento, erro e dados. Use com LoadingState/ErrorState/EmptyState.
 */
export function useAsync<T>(fn: () => Promise<T>, deps: unknown[] = []): AsyncState<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);
  const [attempt, setAttempt] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const run = useCallback(fn, deps);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setError(undefined);
    run()
      .then((result) => active && setData(result))
      .catch((err: unknown) => active && setError(err instanceof Error ? err : new Error(String(err))))
      .finally(() => active && setIsLoading(false));
    return () => {
      active = false;
    };
  }, [run, attempt]);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);

  return { data, error, isLoading, reload };
}
