# Anexos de mensagens — issue #32

## Escopo simplificado

Permitir que participantes enviem e visualizem anexos PDF e JPEG nas conversas do App.cef. Como este é um projeto experimental/facultativo, a implementação é direta, sem scanner, fila de análise ou aprovação assíncrona.

## Configuração

- Bucket: `message-attachments`
- Visibilidade: privado
- Tipos permitidos: PDF e JPEG
- Limite de PDF: 50 MiB (limite atual do plano Free)
- Limite de JPEG: 20 MiB
- Caminho: `<conversation_id>/<sender_id>/<message_id>/<filename>`

## Regras

- O usuário precisa estar autenticado, ativo e participar da conversa.
- O upload fica associado à mensagem, ao remetente e à conversa.
- O Storage restringe tipo MIME, extensão e tamanho.
- Os arquivos ficam em bucket privado.
- A leitura respeita a participação e as regras de acesso à mensagem.
- A exclusão é permitida ao autor ou administrador participante.
- Mensagens de arquivo recebem status `approved` imediatamente pelo trigger; não existe scanner nesta versão.
- A policy de upload exige que os metadados correspondam à mensagem aprovada e ao usuário remetente.
- Não usar `upsert`; cada anexo deve ter um caminho único.

## Limites conhecidos

O plano Free limita o upload a 50 MiB por arquivo. O limite original de PDF de 2 GiB foi reduzido para 50 MiB nesta versão simplificada, sem upgrade de plano.

A validação é básica (MIME, extensão e tamanho). Não há inspeção antivírus nem validação de assinatura binária.

## Verificações

- Bucket privado e policies de INSERT, SELECT e DELETE aplicadas no Supabase Online.
- Trigger define automaticamente o status do anexo como `approved`.
- Policies de upload e download mantêm o acesso restrito a participantes autorizados.
- As migrations incrementais `20261127210000_approve_message_attachments_immediately.sql` e `20261127211500_fix_attachment_extension_policy.sql` corrigem a aprovação imediata e as verificações de extensão PDF/JPEG.
- O bucket legado `chat-media` e seus arquivos não foram alterados.

## Fora do escopo

- Scanner antivírus e análise de conteúdo.
- Links temporários vinculados à sessão e cancelamento imediato de downloads.
- Limite de PDF de 2 GiB.
- Limpeza automática de Storage ao excluir mensagens (pode ser feita junto da issue #58).
