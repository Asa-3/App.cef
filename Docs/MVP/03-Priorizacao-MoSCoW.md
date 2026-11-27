# MVP-03 — Matriz de Priorização MoSCoW

Versão 1.0.0 | 27/11/2026 | Homologado integralmente pelo PO.

Referências: [MVP-01](01-Visao-e-Objetivos.md), [MVP-02](02-Escopo.md), [matriz v1.3.0](../Engenharia-de-Requisitos/Matriz_Consolidada_Requisitos_v1.3.0.md), blob 65b12d140621838d1d7708072373deee23314fc0.

M: obrigatório; S: importante; C: desejável; W: postergado nesta entrega. Não há S ou C nesta versão. W não exclui o requisito da linha de base.

| ID | Enunciado da linha de base | Prioridade | Justificativa |
|---|---|---|---|
| RF-AUT-001 | Permitir autenticação com nome de usuário único e senha. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-002 | Exigir alteração da senha inicial no primeiro acesso. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-003 | Exigir preenchimento do perfil inicial antes de liberar o aplicativo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-004 | Validar senha com pelo menos oito caracteres. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-005 | Permitir troca de senha por usuário autenticado sem solicitar a senha anterior. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-006 | Permitir recuperação de senha por e-mail de recuperação confirmado. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-007 | Emitir link de recuperação de uso único com validade de 15 minutos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-008 | Invalidar links de recuperação anteriores quando novo link for emitido. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-009 | Revogar todas as sessões após redefinição de senha. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-010 | Permitir alteração de e-mail de recuperação mediante confirmação. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-011 | Manter uma única sessão/dispositivo ativo por conta. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-012 | Exigir confirmação por link de e-mail ao iniciar sessão em outro dispositivo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-013 | Revogar sessão anterior após confirmar novo dispositivo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-014 | Contar falhas consecutivas de autenticação por conta no servidor. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-015 | Bloquear novas tentativas de login por 60 segundos após cinco falhas. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-016 | Desbloquear automaticamente após 60 segundos e reiniciar contador; zerá-lo após login bem-sucedido. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-017 | Manter sessão ativa ao fechar e reabrir o aplicativo, salvo revogação. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUT-018 | Encerrar sessão e apagar dados locais no logout. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-001 | Permitir somente a Administradores criar contas de Funcionários e Administradores. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-002 | Cadastrar nome de usuário único e permanente. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-003 | Cadastrar senha inicial para conta nova. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-004 | Exigir nome completo, cargo e setor no preenchimento inicial do perfil. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-005 | Impedir alteração de nome completo, cargo e setor após conclusão inicial. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-006 | Permitir que titular edite seu e-mail corporativo opcional. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-007 | Permitir visualizar as abas Perfil do Funcionário e Perfil do Administrador. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-008 | Restringir edição dos campos permitidos do perfil ao próprio titular. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-009 | Permitir ao Administrador excluir permanentemente contas após verificação externa ao aplicativo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-010 | Revogar sessões e impedir login de conta excluída. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-011 | Preservar mensagens existentes após exclusão de conta, exceto exclusões de conteúdo previstas em outras regras. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-012 | Preservar avisos históricos existentes após exclusão do autor. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-USR-013 | Preservar nome completo original do autor nas mensagens históricas. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-014 | Preservar nome completo original do autor em avisos históricos. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-USR-015 | Preservar identificação histórica em registros de auditoria durante a retenção. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-016 | Manter autoria histórica distinta de credenciais de autenticação. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-017 | Permitir readmissão somente por nova conta e novo nome de usuário. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-018 | Manter autoria antiga vinculada ao identificador histórico anterior após readmissão. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-USR-019 | Impedir edição ou exclusão global de avisos cujo autor tenha sido excluído. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-CON-001 | Exibir lista pessoal de contatos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-CON-002 | Adicionar usuário ativo cadastrado à lista pessoal. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-CON-003 | Editar apelido local de contato. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-CON-004 | Remover contato da lista pessoal. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-CON-005 | Pesquisar usuários ativos cadastrados por parte do nome. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-CVI-001 | Iniciar conversa individual entre dois usuários ativos cadastrados, independentemente da lista de contatos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-CVI-002 | Permitir aos dois participantes consultar mensagens autorizadas da conversa. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-CVI-003 | Impedir acesso à conversa por terceiros, inclusive Administradores não participantes. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-CVI-004 | Manter histórico de conversa individual sem função de exclusão integral. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-001 | Permitir somente a Administradores criar grupos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-002 | Permitir a Administradores adicionar membros. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-003 | Permitir a Administradores remover membros. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-004 | Permitir a qualquer Administrador administrar grupos existentes. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-005 | Permitir a Administradores excluir grupo mediante confirmação. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-006 | Excluir permanentemente mensagens e anexos ao excluir grupo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-007 | Permitir mensagens entre integrantes autorizados. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-008 | Registrar no servidor entrada e saída de cada período de participação. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-009 | Filtrar mensagens conforme o início do período de participação autorizado. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-010 | Impedir acesso a anexos anteriores à entrada. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-011 | Aplicar autorização temporal no servidor em consulta e sincronização. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-012 | Registrar a data e hora de cada nova entrada do usuário no grupo, usando horário do servidor. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-013 | Disponibilizar ao usuário readicionado somente mensagens enviadas a partir da nova entrada. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-014 | Impedir a recuperação de mensagens e anexos de participações anteriores após readição. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-015 | Impedir acesso a mensagens e anexos enviados enquanto o usuário esteve removido do grupo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-016 | Aplicar a restrição de readição no servidor, inclusive em consultas, sincronização e download. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-GRP-017 | Impedir saída voluntária de Funcionários dos grupos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-001 | Enviar mensagens de texto em conversas autorizadas. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-002 | Receber mensagens de texto de conversas autorizadas. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-003 | Associar anexos autorizados a mensagens. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-004 | Armazenar mensagens no servidor. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-005 | Permitir ao autor excluir sua mensagem para todos sem prazo limite. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-006 | Permitir a Administrador excluir qualquer mensagem apenas em conversas às quais já tem acesso. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-007 | Excluir anexos associados a mensagens excluídas. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-008 | Enfileirar textos e arquivos enviados offline de modo persistente. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-009 | Enviar fila automaticamente ao reconectar, respeitando ordem. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-010 | Realizar no máximo três tentativas automáticas por item com falha. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-011 | Permitir retomada manual da fila após falha. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-012 | Evitar duplicidade de mensagens em reenvios. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-013 | Alertar antes de logout com fila pendente e descartá-la após confirmação. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-MSG-014 | Informar falha de envio ao usuário. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-001 | Autorizar acesso a cada anexo no servidor antes de emitir link. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-002 | Emitir link temporário de download com validade de cinco minutos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-003 | Bloquear novos links imediatamente após revogação de permissão. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-004 | Permitir que link já emitido permaneça utilizável até expirar, mesmo após revogação. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-005 | Permitir continuidade de transferência ativa após expiração do link, se ininterrupta. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-006 | Analisar segurança do anexo antes de liberá-lo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-007 | Manter anexo pendente quando serviço de análise estiver indisponível. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-008 | Repetir análise pendente a cada cinco minutos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-009 | Encerrar tentativas após no máximo 24 horas desde recebimento no servidor. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-010 | Parar novas tentativas assim que a análise concluir. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-011 | Notificar remetente quando prazo de análise expirar. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-012 | Executar tentativas de análise no servidor mesmo com app fechado. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-013 | Permitir reenvio manual após expiração, com nova análise. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-014 | Detectar interrupção de download. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-015 | Informar usuário sobre interrupção de download. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-016 | Permitir reinício manual desde o primeiro byte. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-017 | Revalidar permissão antes de reiniciar download. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-018 | Emitir novo link temporário para reinício. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-019 | Descartar dados parciais de download interrompido. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-020 | Disponibilizar arquivo apenas após download integral. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-021 | Validar assinatura e estrutura real do arquivo no servidor. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-022 | Validar tipo e tamanho do anexo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-023 | Armazenar anexos aprovados em armazenamento privado. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-024 | Bloquear acesso de destinatários a arquivos pendentes ou rejeitados. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-025 | Eliminar cópias temporárias rejeitadas ou expiradas, com nova tentativa de limpeza se necessário. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-026 | Permitir nova seleção de arquivo local para reenvio após falha. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-ARQ-027 | Informar falta de espaço local ao baixar arquivo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-NOT-001 | Solicitar notificação de nova mensagem individual. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-NOT-002 | Solicitar notificação de nova mensagem em grupo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-NOT-003 | Solicitar notificação de novo aviso ou lembrete. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-NOT-004 | Manter conteúdo acessível no aplicativo independentemente da exibição do push. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AVI-001 | Permitir apenas a Administradores criar e enviar avisos imediatamente. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-002 | Permitir selecionar destinatários específicos no envio. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-003 | Permitir texto de até 2.000 caracteres e opcionalmente um anexo. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-004 | Exigir texto ou um anexo; impedir aviso vazio. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-005 | Restringir a um anexo PDF ou JPEG por aviso. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-006 | Disponibilizar aviso no histórico dos destinatários. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-007 | Permitir exclusão individual online por destinatário. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-008 | Permitir edição online somente pelo autor original. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-009 | Permitir exclusão global online somente pelo autor original após confirmação. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-010 | Disponibilizar aba Avisos Enviados para todos os Administradores. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-011 | Permitir somente ao autor consultar a lista completa de destinatários. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-012 | Validar versão ao salvar edição e rejeitar alteração desatualizada. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-013 | Preservar formulário preenchido após falha online enquanto tela permanecer aberta. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-014 | Solicitar confirmação antes de descartar alterações não salvas. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-015 | Bloquear criar, editar ou excluir avisos offline. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AVI-016 | Permitir ao autor substituir anexo na edição, sujeito à nova análise. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-SINC-001 | Exibir imediatamente dados previamente carregados no cache. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-002 | Sincronizar histórico aberto automaticamente ao obter conexão. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-003 | Sincronizar histórico aberto ao retornar ao primeiro plano. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-004 | Permitir pull-to-refresh nos históricos de avisos. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-SINC-005 | Paginar históricos de avisos em 20 registros. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-SINC-006 | Carregar páginas seguintes ao rolar. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-SINC-007 | Deduplicar registros durante sincronização e paginação. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-008 | Preservar cache existente quando atualização falhar. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-009 | Exibir data e hora da última sincronização bem-sucedida após erro. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-010 | Permitir tentar novamente após falha de atualização. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-011 | Disponibilizar textos e avisos previamente carregados offline. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-012 | Disponibilizar offline anexos previamente baixados. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-013 | Permitir remover anexos do cache local sem apagar servidor. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-014 | Aplicar exclusões remotas ao cache na sincronização. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-SINC-015 | Limpar cache e dados de sincronização ao fazer logout. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUD-001 | Registrar criação e exclusão de contas por Administradores. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUD-002 | Registrar criação e exclusão de grupos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUD-003 | Registrar adição e remoção de membros de grupos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUD-004 | Registrar exclusão de mensagens feita por Administradores. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUD-005 | Registrar criação, edição e exclusão global de avisos. | W | DEC-MVP-001/008: avisos ou dependência exclusiva |
| RF-AUD-006 | Permitir consulta de auditoria somente por Administradores. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUD-007 | Permitir filtros por período, ação e Administrador responsável. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUD-008 | Exibir registros do mais recente para o mais antigo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RF-AUD-009 | Excluir registros após retenção de um ano. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-SEG-001 | Proteger comunicação em trânsito com TLS 1.2 ou superior. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-SEG-002 | Aplicar autenticação e autorização no servidor em todos os recursos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-SEG-003 | Proteger cache local com isolamento do sistema operacional. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-DES-004 | Disponibilizar mensagens de texto em até 1 segundo com 100 usuários simultâneos em condições normais. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-DISP-005 | Garantir disponibilidade mensal mínima de 99,9%, excluída manutenção programada. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-REC-006 | Garantir RTO de no máximo 30 minutos. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-REC-007 | Garantir RPO de no máximo 24 horas. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-BKP-008 | Executar backup válido pelo menos diariamente. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-BKP-009 | Reter backups por 30 dias. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-BKP-010 | Armazenar backups fora do ambiente produtivo. | M | Escopo aprovado e DEC-MVP-006/007 |
| RNF-BKP-011 | Testar restauração mensalmente fora da produção. | M | Escopo aprovado e DEC-MVP-006/007 |

## Consolidado
124 RF M, 11 RNF M, 24 RF W; total 159. M = 135 (84,9%); S = 0; C = 0; W = 24 (15,1%). RF-SINC-006 postergado como dependência da paginação de avisos, interpretação aprovada pelo PO.

## Decisões
- DEC-MVP-006: manter 124 RF obrigatórios.
- DEC-MVP-007: manter 11 RNF obrigatórios.
- DEC-MVP-008: postergar 24 RF identificados.
- DEC-MVP-009: não utilizar S e C nesta versão.
- DEC-MVP-010: preservar regras, critérios e cenários aplicáveis, inclusive dependências compartilhadas.

77 RN, 166 CA funcionais, 11 CA-NF, 19 CON e 412 cenários na linha de base; seleção individual no MVP-04. Cenários requerem refinamento. Escopo amplo; viabilidade, estimativas e validações técnicas pendentes. INC-DOC-003/004/005 permanecem abertas.

## Homologação
Manifestação do PO: “Aprovo integralmente o MVP-03 v1.0.0 e as decisões DEC-MVP-006 a DEC-MVP-010. Publique o documento no GitHub e prossiga para o MVP-04 — Matriz de Requisitos do MVP.”

Aprovação documental em 27/11/2026; não atesta implementação. Histórico: v1.0.0 — elaboração e homologação; intervalos expandidos individualmente, sem mudança de prioridade.
