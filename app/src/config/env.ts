/**
 * Único ponto de leitura das variáveis de ambiente.
 * Nenhum outro arquivo deve acessar import.meta.env diretamente.
 */
export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'App.cef',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
  isDev: import.meta.env.DEV,
} as const;

export const isSupabaseConfigured =
  env.supabaseUrl.startsWith('https://') && env.supabaseAnonKey.length > 0;
