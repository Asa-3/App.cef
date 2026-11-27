/* App.cef: service worker das notificações.
 * Mostra a notificação quando chega mensagem com o app fechado ou em segundo plano,
 * e abre a conversa certa ao tocar nela. Não guarda nada em cache.
 */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

/** Só abre endereços de conversa do próprio app (nunca links externos). */
function safeUrl(url) {
  return typeof url === 'string' && /^\/conversas\/[0-9a-f-]{36}$/.test(url) ? url : '/mensagens';
}

self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = {};
  }

  event.waitUntil(
    (async () => {
      // Com o app aberto e visível, o próprio app avisa (sem notificação duplicada)
      const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      if (windows.some((client) => client.visibilityState === 'visible')) return;

      await self.registration.showNotification(String(data.title || 'App.cef').slice(0, 80), {
        body: String(data.body || 'Nova mensagem').slice(0, 200),
        tag: typeof data.tag === 'string' ? data.tag : 'app-cef',
        renotify: true,
        icon: '/icon.svg',
        badge: '/icon.svg',
        data: { url: safeUrl(data.url) },
      });
    })(),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = safeUrlֻǱ˞