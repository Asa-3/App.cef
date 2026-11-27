/** Caminhos das rotas em um só lugar. Use sempre ROUTES.x em vez de escrever a URL. */
export const ROUTES = {
  // Públicas (autenticação)
  login: '/entrar',
  forgotPassword: '/esqueci-senha',
  resetPassword: '/redefinir-senha',
  // Privadas (exigem login)
  welcome: '/bem-vindo',
  home: '/',
  messages: '/mensagens',
  profile: '/perfil',
  people: '/pessoas',
  colleague: '/pessoas/:userId',
  search: '/busca',
  conversation: '/conversas/:conversationId',
  newChat: '/nova-conversa',
  newGroup: '/grupos/novo',
  groupInfo: '/conversas/:conversationId/grupo',
  groupAddMembers: '/conversas/:conversationId/grupo/adicionar',
} as const;

/** Dados e participantes de um grupo. */
export function groupInfoPath(conversationId: string): string {
  return `/conversas/${encodeURIComponent(conversationId)}/grupo`;
}

/** Tela para adicionar participantes a um grupo. */
export function groupAddMembersPath(conversationId: string): string {
  return `${groupInfoPath(conversationId)}/adicionar`;
}

/** Endereço de uma conversa; com messageId, abre no ponto da mensagem. */
export function conversationPath(conversationId: string, messageId?: string): string {
  const path = `/conversas/${encodeURIComponent(conversationId)}`;
  return messageId ? `${path}?mensagem=${encodeURIComponent(messageId)}` : path;
}

/** Endereço do perfil de um colega. */
export function colleaguePath(userId: string): string {
  return `/pessoas/${encodeURIComponent(userId)}`;
}
