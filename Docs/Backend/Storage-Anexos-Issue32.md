# Armazenamento seguro de anexos — issue #32

## Provisionamento do bucket

O bucket `message-attachments` foi criado no projeto Supabase App.cef com:

| Propriedade | Valor |
|---|---|
| Bucket | `message-attachments` |
| Visibilidade | Privado |
| MIME permitidos | `application/pdf`, `image/jpeg` |
| Limite configurado | 50 MiB |

O bucket foi provisionado pelo SQL API do Supabase. O usuário de execução de migrations usado pelo conector não é proprietário de `storage.buckets`, por isso o provisionamento do bucket é documentado separadamente da migration de schema.

## Estrutura de objetos

O caminho esperado é:

```
<conversation_id>/<sender_id>/<message_id>/<filename>
```

A mensagem deve ser criada primeiro com `kind = 'file'`, caminho, MIME e tamanho correspondentes. O trigger força `attachment_status = 'pending_scan'`, independentemente do valor enviado pelo cliente.

## Controles implementados

- Bucket privado, sem URL pública permanente.
- Tipos permitidos: somente PDF e JPEG.
- JPEG limitado a 20 MiB.
- PDF limitado atualmente a 50 MiB por causa do plano Free e do limite global do Storage.
- Tamanho de metadados alterado para BIGINT para comportar o requisito de 2 GiB quando o plano permitir.
- Caminho do objeto vinculado à conversa, remetente e ID da mensagem.
- Upload exige usuário ativo, participação na conversa e mensagem correspondente criada pelo próprio remetente.
- Download exige status `approved`, mensagem não excluída e autorização temporal de leitura da mensagem.
- Exclusão limitada ao remetente ou a Administrador com participação na conversa.
- Nenhuma policy de UPDATE/upsert foi criada; os objetos devem usar caminhos imutáveis.
- O bucket `chat-media` existente e seus três anexos históricos foram preservados sem alteração.

## Estado da análise de segurança

O status inicial de qualquer mensagem do tipo `file` é `pending_scan`. A policy de leitura só libera objetos cujo status seja `approved`. Não há, nesta entrega, serviço antivírus/inspeção de conteúdo implantado que faça essa transição. Portanto, anexos novos permanecem inacessíveis até a integração de um scanner confiável e a implementação do fluxo de aprovação.

A validação de assinatura binária/estrutura real, reprocessamento a cada cinco minutos por até 24 horas, emissão de links de cinco minutos vinculados à sessão e interrupção física de downloads após revogação pertencem à validação técnica M07/M12 registrada na issue #98. Não foram declarados concluídos nesta entrega.

## Limitação do plano

A organização está no plano Free. O limite global de upload de Storage não pode ultrapassar 50 MiB nesse plano. O requisito de PDF até 2 GiB não pode ser comprovado nem habilitado sem upgrade e validação de configuração. A regra de 50 MiB atual é uma limitação operacional temporária, não uma alteração aprovada do requisito de produto.

Referência: https://supabase.com/docs/guides/storage/uploads/file-limits

## Verificações executadas

- Migration aplicada no Supabase Online: `implement_secure_message_attachments_issue_32`.
- Teste transacional como `authenticated`: inserção de mensagem `kind = 'file'` em conversa da qual o usuário é participante; trigger retornou `pending_scan`; transação revertida.
- Três anexos históricos do bucket `chat-media` foram identificados antes da mudança e preservados.
- Policies de INSERT, SELECT e DELETE do novo bucket confirmadas no catálogo `pg_policies`.
- Security Advisor reexecutado; os avisos anteriores de funções `SECURITY DEFINER`, tabelas internas sem policies e proteção contra senhas vazadas permanecem fora do escopo desta issue.

## Pendências para conclusão integral

1. Integrar o fluxo de upload no código da aplicação. A branch `main` consultada não contém fontes da aplicação; contém documentação e migrations.
2. Integrar scanner de segurança confiável e transição server-side de `pending_scan` para `approved/rejected`.
3. Validar assinatura/estrutura do arquivo no servidor.
4. Resolver a limitação de 50 MiB para cumprir o limite de PDF de 2 GiB.
5. Implementar e testar links temporários vinculados à sessão e interrupção de downloads após revogação (issue #98).
6. Testar exclusão de mensagens e limpeza de objetos em conjunto com a issue #58.

A issue #32 deve permanecer aberta até que os fluxos de aplicação e as pendências impeditivas tenham evidências de QA.
