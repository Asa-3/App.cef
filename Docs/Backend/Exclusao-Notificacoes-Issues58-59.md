# Exclusão de mensagens e notificações — issues #58 e #59

## Issue #58 — exclusão de mensagens

- A função `public.delete_message(uuid)` permite que o autor exclua a própria mensagem sem limite de tempo.
- Um usuário com papel `admin_ti` só pode excluir mensagens em conversas das quais seja participante ativo e tenha acesso à mensagem.
- Exclusão é lógica (`deleted_at`), idempotente e propagada pela política RLS existente, que deixa de retornar mensagens excluídas.
- Mensagens PDF/JPEG têm o status do anexo alterado para `expired`, bloqueando o download privado.
- A política de leitura de `chat-media` também exige mensagem não excluída.
- A política DELETE de `chat-media` permite que o autor ou Administrador participante remova o objeto via Supabase Storage API.
- Exclusões administrativas registram somente ator, ação, identificador do alvo, conversa, resultado e horário em `admin_audit_logs`. O conteúdo da mensagem não é copiado para a auditoria.
- A função não implementa edição de mensagens.

**Limite da entrega backend:** o objeto físico do Storage precisa ser removido pelo cliente usando a Storage API (`storage.remove`) com a policy de DELETE. A função SQL revoga imediatamente a leitura, mas não chama diretamente o serviço de Storage. O cliente deve executar a remoção física ao concluir a exclusão.

## Issue #59 — notificações persistentes

- A tabela `notifications` persiste eventos `new_message` para os demais participantes ativos da conversa.
- A chave única por destinatário/evento/mensagem evita duplicidade.
- RLS permite consultar somente notificações do próprio usuário.
- A listagem é paginável pela consulta padrão do Supabase usando `order(created_at, desc)`, `range()` ou `limit/offset`.
- `public.mark_notification_read(uuid)` marca somente a notificação do usuário autenticado.
- `read_at` é independente de `conversation_reads`; nenhum recibo individual de leitura de mensagem é criado.

## Testes transacionais (rollback)

- Autor exclui a própria mensagem.
- Repetição da exclusão retorna sem duplicar efeitos.
- Administrador participante exclui mensagem e gera auditoria sem conteúdo.
- Administrador não participante recebe acesso negado.
- Mensagem cria notificações para os demais participantes.
- Destinatário marca a própria notificação como lida.

Os dados de teste foram revertidos ao final da transação.
