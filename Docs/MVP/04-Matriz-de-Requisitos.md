# MVP-04 — Matriz de Requisitos do MVP

Versão 1.0.0 | 27/11/2026 | Homologado pelo PO.

Referências: [MVP-01](01-Visao-e-Objetivos.md), [MVP-02](02-Escopo.md), [MVP-03](03-Priorizacao-MoSCoW.md), [matriz v1.3.0](../Engenharia-de-Requisitos/Matriz_Consolidada_Requisitos_v1.3.0.md), blob 65b12d140621838d1d7708072373deee23314fc0.

## Inventário
124 RF, 11 RNF, 65 RN, 142 CA, 11 CA-NF, 19 CON, 412 cenários = 784 elementos. Postergados: 24 RF, 12 RN, 24 CA = 60. Total da base: 844. Seleção não comprova implementação.

## Requisitos e critérios obrigatórios (texto da fonte)
| ID | Enunciado | CA | Aceite |
|---|---|---|---|
| RF-AUT-001 | Permitir autenticação com nome de usuário único e senha. | CA-AUT-001 | Credenciais válidas autenticam; inválidas são recusadas. |
| RF-AUT-002 | Exigir alteração da senha inicial no primeiro acesso. | CA-AUT-002 | Acesso às demais funções é bloqueado até trocar a senha. |
| RF-AUT-003 | Exigir preenchimento do perfil inicial antes de liberar o aplicativo. | CA-AUT-003 | Sem nome completo, cargo e setor, acesso funcional permanece bloqueado. |
| RF-AUT-004 | Validar senha com pelo menos oito caracteres. | CA-AUT-004 | Senha com sete caracteres é recusada; com oito ou mais passa nessa regra. |
| RF-AUT-005 | Permitir troca de senha por usuário autenticado sem solicitar a senha anterior. | CA-AUT-005 | Troca válida revoga sessões existentes e exige nova autenticação. |
| RF-AUT-006 | Permitir recuperação de senha por e-mail de recuperação confirmado. | CA-AUT-006 | Solicitação válida envia link ao e-mail confirmado. |
| RF-AUT-007 | Emitir link de recuperação de uso único com validade de 15 minutos. | CA-AUT-007 | Link usado ou expirado é rejeitado. |
| RF-AUT-008 | Invalidar links de recuperação anteriores quando novo link for emitido. | CA-AUT-008 | Somente o link mais recente pode ser usado. |
| RF-AUT-009 | Revogar todas as sessões após redefinição de senha. | CA-AUT-009 | Sessões anteriores não autorizam novas operações. |
| RF-AUT-010 | Permitir alteração de e-mail de recuperação mediante confirmação. | CA-AUT-010 | Novo endereço só substitui o anterior após confirmação. |
| RF-AUT-011 | Manter uma única sessão/dispositivo ativo por conta. | CA-AUT-011 | Não permanecem duas sessões simultaneamente autorizadas. |
| RF-AUT-012 | Exigir confirmação por link de e-mail ao iniciar sessão em outro dispositivo. | CA-AUT-012 | Sem confirmação, novo dispositivo não recebe sessão ativa. |
| RF-AUT-013 | Revogar sessão anterior após confirmar novo dispositivo. | CA-AUT-013 | Dispositivo antigo perde autorização. |
| RF-AUT-014 | Contar falhas consecutivas de autenticação por conta no servidor. | CA-AUT-014 | Cinco senhas incorretas consecutivas acionam bloqueio. |
| RF-AUT-015 | Bloquear novas tentativas de login por 60 segundos após cinco falhas. | CA-AUT-015 | Tentativa durante bloqueio é rejeitada mesmo após reiniciar o app. |
| RF-AUT-016 | Desbloquear automaticamente após 60 segundos e reiniciar contador; zerá-lo após login bem-sucedido. | CA-AUT-016 | Após prazo, login válido funciona; falhas anteriores não permanecem no contador. |
| RF-AUT-017 | Manter sessão ativa ao fechar e reabrir o aplicativo, salvo revogação. | CA-AUT-017 | Reabertura não exige novo login com sessão válida. |
| RF-AUT-018 | Encerrar sessão e apagar dados locais no logout. | CA-AUT-018 | Credenciais de sessão e cache deixam de estar disponíveis. |
| RF-USR-001 | Permitir somente a Administradores criar contas de Funcionários e Administradores. | CA-USR-001 | Funcionário tentando criar conta recebe acesso negado. |
| RF-USR-002 | Cadastrar nome de usuário único e permanente. | CA-USR-002 | Nome duplicado é recusado e nome existente não pode ser alterado. |
| RF-USR-003 | Cadastrar senha inicial para conta nova. | CA-USR-003 | Conta criada possui credencial inicial para primeiro acesso. |
| RF-USR-004 | Exigir nome completo, cargo e setor no preenchimento inicial do perfil. | CA-USR-004 | Ausência de qualquer campo obrigatório impede conclusão. |
| RF-USR-005 | Impedir alteração de nome completo, cargo e setor após conclusão inicial. | CA-USR-005 | Tentativas de alteração posteriores são recusadas. |
| RF-USR-006 | Permitir que titular edite seu e-mail corporativo opcional. | CA-USR-006 | Edição do titular persiste; terceiros são bloqueados. |
| RF-USR-007 | Permitir visualizar as abas Perfil do Funcionário e Perfil do Administrador. | CA-USR-007 | Ambos os perfis conseguem consultar ambas as abas. |
| RF-USR-008 | Restringir edição dos campos permitidos do perfil ao próprio titular. | CA-USR-008 | Outro usuário não altera o perfil. |
| RF-USR-009 | Permitir ao Administrador excluir permanentemente contas após verificação externa ao aplicativo. | CA-USR-009 | Exclusão autorizada remove acesso; verificação é registrada no procedimento operacional. |
| RF-USR-010 | Revogar sessões e impedir login de conta excluída. | CA-USR-010 | Token anterior e novo login são recusados. |
| RF-USR-011 | Preservar mensagens existentes após exclusão de conta, exceto exclusões de conteúdo previstas em outras regras. | CA-USR-011 | Mensagem anterior permanece em conversa autorizada. |
| RF-USR-013 | Preservar nome completo original do autor nas mensagens históricas. | CA-USR-013 | Nome exibido não vira “Usuário excluído”. |
| RF-USR-015 | Preservar identificação histórica em registros de auditoria durante a retenção. | CA-USR-015 | Consulta autorizada mantém autoria por um ano. |
| RF-USR-016 | Manter autoria histórica distinta de credenciais de autenticação. | CA-USR-016 | Remoção da conta não causa perda de referências históricas. |
| RF-USR-017 | Permitir readmissão somente por nova conta e novo nome de usuário. | CA-USR-017 | Conta antiga não é reativada. |
| RF-USR-018 | Manter autoria antiga vinculada ao identificador histórico anterior após readmissão. | CA-USR-018 | Mensagens antigas não passam a pertencer à conta nova. |
| RF-CON-001 | Exibir lista pessoal de contatos. | CA-CON-001 | Titular vê somente sua lista. |
| RF-CON-002 | Adicionar usuário ativo cadastrado à lista pessoal. | CA-CON-002 | Usuário válido aparece na lista. |
| RF-CON-003 | Editar apelido local de contato. | CA-CON-003 | Apelido só muda na lista do titular. |
| RF-CON-004 | Remover contato da lista pessoal. | CA-CON-004 | Contato desaparece sem excluir mensagens. |
| RF-CON-005 | Pesquisar usuários ativos cadastrados por parte do nome. | CA-CON-005 | Busca parcial retorna correspondências autorizadas. |
| RF-CVI-001 | Iniciar conversa individual entre dois usuários ativos cadastrados, independentemente da lista de contatos. | CA-CVI-001 | Dois usuários ativos iniciam conversa sem aceite prévio. |
| RF-CVI-002 | Permitir aos dois participantes consultar mensagens autorizadas da conversa. | CA-CVI-002 | Participante vê histórico; terceiro recebe acesso negado. |
| RF-CVI-003 | Impedir acesso à conversa por terceiros, inclusive Administradores não participantes. | CA-CVI-003 | Requisição direta de terceiro é rejeitada. |
| RF-CVI-004 | Manter histórico de conversa individual sem função de exclusão integral. | CA-CVI-004 | Não há comando de excluir conversa inteira. |
| RF-GRP-001 | Permitir somente a Administradores criar grupos. | CA-GRP-001 | Funcionário recebe acesso negado. |
| RF-GRP-002 | Permitir a Administradores adicionar membros. | CA-GRP-002 | Inclusão autorizada registra novo período de participação. |
| RF-GRP-003 | Permitir a Administradores remover membros. | CA-GRP-003 | Remoção encerra período de participação. |
| RF-GRP-004 | Permitir a qualquer Administrador administrar grupos existentes. | CA-GRP-004 | Administrador distinto do criador consegue gerenciar. |
| RF-GRP-005 | Permitir a Administradores excluir grupo mediante confirmação. | CA-GRP-005 | Confirmação exclui; cancelamento preserva. |
| RF-GRP-006 | Excluir permanentemente mensagens e anexos ao excluir grupo. | CA-GRP-006 | Histórico e arquivos do grupo deixam de ser acessíveis. |
| RF-GRP-007 | Permitir mensagens entre integrantes autorizados. | CA-GRP-007 | Integrante ativo envia e recebe conteúdo permitido. |
| RF-GRP-008 | Registrar no servidor entrada e saída de cada período de participação. | CA-GRP-008 | Cada inclusão/remoção gera marcos temporais. |
| RF-GRP-009 | Filtrar mensagens conforme o início do período de participação autorizado. | CA-GRP-009 | Novo integrante não acessa mensagens anteriores à entrada. |
| RF-GRP-010 | Impedir acesso a anexos anteriores à entrada. | CA-GRP-010 | Solicitação direta de arquivo anterior é rejeitada. |
| RF-GRP-011 | Aplicar autorização temporal no servidor em consulta e sincronização. | CA-GRP-011 | Alterar cliente não contorna restrição. |
| RF-GRP-012 | Registrar a data e hora de cada nova entrada do usuário no grupo, usando horário do servidor. | CA-GRP-013 | Após remoção e readição, há novo registro temporal de entrada. |
| RF-GRP-013 | Disponibilizar ao usuário readicionado somente mensagens enviadas a partir da nova entrada. | CA-GRP-014 | Histórico apresenta apenas mensagens a partir da nova entrada. |
| RF-GRP-014 | Impedir a recuperação de mensagens e anexos de participações anteriores após readição. | CA-GRP-015, CA-GRP-016 | Mensagem e anexo de participação anterior têm acesso negado. |
| RF-GRP-015 | Impedir acesso a mensagens e anexos enviados enquanto o usuário esteve removido do grupo. | CA-GRP-018 | Sincronização não recupera conteúdos do intervalo de remoção. |
| RF-GRP-016 | Aplicar a restrição de readição no servidor, inclusive em consultas, sincronização e download. | CA-GRP-017, CA-GRP-019 | Nova mensagem é permitida; consulta direta a conteúdo antigo é negada. |
| RF-GRP-017 | Impedir saída voluntária de Funcionários dos grupos. | CA-GRP-020 | Funcionário não encontra ou não executa saída voluntária. |
| RF-MSG-001 | Enviar mensagens de texto em conversas autorizadas. | CA-MSG-001 | Mensagem válida é persistida e disponibilizada. |
| RF-MSG-002 | Receber mensagens de texto de conversas autorizadas. | CA-MSG-002 | Destinatário autorizado obtém nova mensagem. |
| RF-MSG-003 | Associar anexos autorizados a mensagens. | CA-MSG-003 | Arquivo aprovado aparece associado à mensagem. |
| RF-MSG-004 | Armazenar mensagens no servidor. | CA-MSG-004 | Reabertura da conversa recupera mensagens não excluídas. |
| RF-MSG-005 | Permitir ao autor excluir sua mensagem para todos sem prazo limite. | CA-MSG-005 | Mensagem desaparece para todos após sincronização. |
| RF-MSG-006 | Permitir a Administrador excluir qualquer mensagem apenas em conversas às quais já tem acesso. | CA-MSG-006 | Admin não participante é bloqueado. |
| RF-MSG-007 | Excluir anexos associados a mensagens excluídas. | CA-MSG-007 | Arquivo deixa de estar disponível e é removido do armazenamento. |
| RF-MSG-008 | Enfileirar textos e arquivos enviados offline de modo persistente. | CA-MSG-008 | Fechar/reabrir aplicativo preserva fila antes do logout. |
| RF-MSG-009 | Enviar fila automaticamente ao reconectar, respeitando ordem. | CA-MSG-009 | Itens seguem ordem original. |
| RF-MSG-010 | Realizar no máximo três tentativas automáticas por item com falha. | CA-MSG-010 | Após terceira falha, fila para. |
| RF-MSG-011 | Permitir retomada manual da fila após falha. | CA-MSG-011 | Usuário aciona nova tentativa; processamento retoma. |
| RF-MSG-012 | Evitar duplicidade de mensagens em reenvios. | CA-MSG-012 | Falha de resposta não gera segunda mensagem. |
| RF-MSG-013 | Alertar antes de logout com fila pendente e descartá-la após confirmação. | CA-MSG-013 | Cancelamento preserva fila; confirmação limpa fila. |
| RF-MSG-014 | Informar falha de envio ao usuário. | CA-MSG-014 | Erro é exibido sem informar envio bem-sucedido. |
| RF-ARQ-001 | Autorizar acesso a cada anexo no servidor antes de emitir link. | CA-ARQ-001 | Usuário não autorizado não recebe link. |
| RF-ARQ-002 | Emitir link temporário de download com validade de cinco minutos. | CA-ARQ-002 | Link expira após cinco minutos. |
| RF-ARQ-003 | Bloquear novos links imediatamente após revogação de permissão. | CA-ARQ-003 | Usuário removido não obtém novo link. |
| RF-ARQ-004 | Permitir que link já emitido permaneça utilizável até expirar, mesmo após revogação. | CA-ARQ-004 | Link emitido antes da revogação não é prometido como revogado imediatamente. |
| RF-ARQ-005 | Permitir continuidade de transferência ativa após expiração do link, se ininterrupta. | CA-ARQ-005 | Download iniciado no prazo pode terminar depois. |
| RF-ARQ-006 | Analisar segurança do anexo antes de liberá-lo. | CA-ARQ-006 | Arquivo não analisado permanece inacessível. |
| RF-ARQ-007 | Manter anexo pendente quando serviço de análise estiver indisponível. | CA-ARQ-007 | Destinatário não consegue acessar arquivo pendente. |
| RF-ARQ-008 | Repetir análise pendente a cada cinco minutos. | CA-ARQ-008 | Nova tentativa ocorre no intervalo estabelecido. |
| RF-ARQ-009 | Encerrar tentativas após no máximo 24 horas desde recebimento no servidor. | CA-ARQ-009 | Arquivo não aprovado dentro do prazo falha. |
| RF-ARQ-010 | Parar novas tentativas assim que a análise concluir. | CA-ARQ-010 | Aprovação/rejeição não produz novas tentativas. |
| RF-ARQ-011 | Notificar remetente quando prazo de análise expirar. | CA-ARQ-011 | Remetente recebe estado de falha. |
| RF-ARQ-012 | Executar tentativas de análise no servidor mesmo com app fechado. | CA-ARQ-012 | Processamento continua sem app aberto. |
| RF-ARQ-013 | Permitir reenvio manual após expiração, com nova análise. | CA-ARQ-013 | Nova submissão inicia processo independente. |
| RF-ARQ-014 | Detectar interrupção de download. | CA-ARQ-014 | Falha é reconhecida e não marcada como sucesso. |
| RF-ARQ-015 | Informar usuário sobre interrupção de download. | CA-ARQ-015 | Interface apresenta erro. |
| RF-ARQ-016 | Permitir reinício manual desde o primeiro byte. | CA-ARQ-016 | Nova tentativa não usa offset anterior. |
| RF-ARQ-017 | Revalidar permissão antes de reiniciar download. | CA-ARQ-017 | Revogação bloqueia reinício. |
| RF-ARQ-018 | Emitir novo link temporário para reinício. | CA-ARQ-018 | Não reutiliza link anterior. |
| RF-ARQ-019 | Descartar dados parciais de download interrompido. | CA-ARQ-019 | Arquivo incompleto não fica disponível. |
| RF-ARQ-020 | Disponibilizar arquivo apenas após download integral. | CA-ARQ-020 | Arquivo incompleto não é aberto como concluído. |
| RF-ARQ-021 | Validar assinatura e estrutura real do arquivo no servidor. | CA-ARQ-021 | Extensão falsificada é recusada. |
| RF-ARQ-022 | Validar tipo e tamanho do anexo. | CA-ARQ-022 | PDF acima de 2 GB e JPEG acima de 20 MB são rejeitados. |
| RF-ARQ-023 | Armazenar anexos aprovados em armazenamento privado. | CA-ARQ-023 | Arquivo não fica público por URL permanente. |
| RF-ARQ-024 | Bloquear acesso de destinatários a arquivos pendentes ou rejeitados. | CA-ARQ-024 | Requisição direta não entrega arquivo. |
| RF-ARQ-025 | Eliminar cópias temporárias rejeitadas ou expiradas, com nova tentativa de limpeza se necessário. | CA-ARQ-025 | Objeto temporário deixa de existir. |
| RF-ARQ-026 | Permitir nova seleção de arquivo local para reenvio após falha. | CA-ARQ-026 | Nova submissão passa novamente por todas as validações. |
| RF-ARQ-027 | Informar falta de espaço local ao baixar arquivo. | CA-ARQ-027 | Usuário recebe erro; arquivo incompleto não é disponibilizado. |
| RF-NOT-001 | Solicitar notificação de nova mensagem individual. | CA-NOT-001 | Evento válido aciona serviço de push. |
| RF-NOT-002 | Solicitar notificação de nova mensagem em grupo. | CA-NOT-002 | Evento para integrante autorizado aciona push. |
| RF-NOT-004 | Manter conteúdo acessível no aplicativo independentemente da exibição do push. | CA-NOT-004 | Push bloqueado não causa perda de mensagem. |
| RF-SINC-001 | Exibir imediatamente dados previamente carregados no cache. | CA-SINC-001 | Histórico abre com dados locais sem aguardar rede. |
| RF-SINC-002 | Sincronizar histórico aberto automaticamente ao obter conexão. | CA-SINC-002 | Novos dados são incorporados sem duplicação. |
| RF-SINC-003 | Sincronizar histórico aberto ao retornar ao primeiro plano. | CA-SINC-003 | Mudanças remotas são recuperadas. |
| RF-SINC-007 | Deduplicar registros durante sincronização e paginação. | CA-SINC-007 | Mesmo identificador aparece uma vez. |
| RF-SINC-008 | Preservar cache existente quando atualização falhar. | CA-SINC-008 | Erro não esvazia histórico. |
| RF-SINC-009 | Exibir data e hora da última sincronização bem-sucedida após erro. | CA-SINC-009 | Horário não muda em falha. |
| RF-SINC-010 | Permitir tentar novamente após falha de atualização. | CA-SINC-010 | Nova requisição é iniciada pelo usuário. |
| RF-SINC-011 | Disponibilizar textos e avisos previamente carregados offline. | CA-SINC-011 | Conteúdo cacheado abre sem rede. |
| RF-SINC-012 | Disponibilizar offline anexos previamente baixados. | CA-SINC-012 | Arquivo local completo abre sem rede. |
| RF-SINC-013 | Permitir remover anexos do cache local sem apagar servidor. | CA-SINC-013 | Arquivo pode ser baixado novamente. |
| RF-SINC-014 | Aplicar exclusões remotas ao cache na sincronização. | CA-SINC-014 | Mensagem/aviso globalmente excluído some do cache. |
| RF-SINC-015 | Limpar cache e dados de sincronização ao fazer logout. | CA-SINC-015 | Dados locais não persistem após logout. |
| RF-AUD-001 | Registrar criação e exclusão de contas por Administradores. | CA-AUD-001 | Ação deixa registro com responsável, data e resultado. |
| RF-AUD-002 | Registrar criação e exclusão de grupos. | CA-AUD-002 | Operação deixa registro de metadados. |
| RF-AUD-003 | Registrar adição e remoção de membros de grupos. | CA-AUD-003 | Alteração deixa registro de responsável e alvo. |
| RF-AUD-004 | Registrar exclusão de mensagens feita por Administradores. | CA-AUD-004 | Registro não copia texto da mensagem. |
| RF-AUD-006 | Permitir consulta de auditoria somente por Administradores. | CA-AUD-006 | Funcionário é bloqueado. |
| RF-AUD-007 | Permitir filtros por período, ação e Administrador responsável. | CA-AUD-007 | Consulta retorna correspondências. |
| RF-AUD-008 | Exibir registros do mais recente para o mais antigo. | CA-AUD-008 | Ordem decrescente é mantida. |
| RF-AUD-009 | Excluir registros após retenção de um ano. | CA-AUD-009 | Registros vencidos são removidos conforme política. |
| RNF-SEG-001 | Proteger comunicação em trânsito com TLS 1.2 ou superior. | CA-NF-001 | Teste de negociação TLS e rejeição de conexão insegura. |
| RNF-SEG-002 | Aplicar autenticação e autorização no servidor em todos os recursos. | CA-NF-002 | Chamadas diretas não autorizadas são rejeitadas. |
| RNF-SEG-003 | Proteger cache local com isolamento do sistema operacional. | CA-NF-003 | Dados não são acessíveis por outro usuário do dispositivo em teste. |
| RNF-DES-004 | Disponibilizar mensagens de texto em até 1 segundo com 100 usuários simultâneos em condições normais. | CA-NF-004 | Teste de carga reproduzível comprova limite no percentil acordado [PENDENTE: percentil]. |
| RNF-DISP-005 | Garantir disponibilidade mensal mínima de 99,9%, excluída manutenção programada. | CA-NF-005 | Relatório mensal de monitoramento demonstra a meta. |
| RNF-REC-006 | Garantir RTO de no máximo 30 minutos. | CA-NF-006 | Exercício de recuperação conclui dentro do limite. |
| RNF-REC-007 | Garantir RPO de no máximo 24 horas. | CA-NF-007 | Exercício comprova perda máxima tolerada de 24 horas. |
| RNF-BKP-008 | Executar backup válido pelo menos diariamente. | CA-NF-008 | Evidência diária de backup bem-sucedido. |
| RNF-BKP-009 | Reter backups por 30 dias. | CA-NF-009 | Política e amostra comprovam retenção. |
| RNF-BKP-010 | Armazenar backups fora do ambiente produtivo. | CA-NF-010 | Verificação demonstra separação. |
| RNF-BKP-011 | Testar restauração mensalmente fora da produção. | CA-NF-011 | Relatório mensal registra restauração e integridade. |

## Regras obrigatórias
| ID | Regra |
|---|---|
| RN-AUT-001 | Identificador de login é único e permanente por conta. |
| RN-AUT-002 | Somente o Administrador cria a conta e fornece senha inicial. |
| RN-AUT-003 | E-mail de recuperação é obrigatório e precisa ser confirmado. |
| RN-AUT-004 | Bloqueio e revogação são aplicados pelo servidor. |
| RN-AUT-005 | Links de recuperação e de troca de dispositivo expiram em 15 minutos. |
| RN-USR-001 | A exclusão de conta é irreversível. |
| RN-USR-002 | O nome histórico preservado corresponde ao último nome completo registrado antes da exclusão. |
| RN-USR-003 | A preservação de autoria não mantém conta ativa. |
| RN-USR-004 | A retenção de dados históricos deverá ser revisada quanto à finalidade, necessidade e LGPD. |
| RN-CON-001 | Cada usuário administra apenas sua lista. |
| RN-CON-002 | Apelidos locais não alteram perfis globais. |
| RN-CON-003 | Remover contato não exclui conversa ou mensagens. |
| RN-CVI-001 | Conversa individual possui exatamente dois participantes. |
| RN-CVI-002 | Envio/exclusão de mensagens são definidos em M06. |
| RN-CVI-003 | Anexos são definidos em M07; sincronização em M10. |
| RN-GRP-001 | Somente Administradores criam, administram e excluem grupos. |
| RN-GRP-002 | Novo integrante não vê mensagens nem anexos anteriores à entrada. |
| RN-GRP-003 | Exclusão de grupo é irreversível e apaga mensagens e anexos. |
| RN-GRP-004 | Após remoção e readição, o acesso é reiniciado: conteúdos anteriores à última entrada não são recuperáveis pelo integrante readicionado. |
| RN-GRP-012 | Cada readição inicia novo período de participação. |
| RN-GRP-013 | O horário de início do novo período é definido pelo servidor. |
| RN-GRP-014 | A readição não restaura permissões de períodos anteriores. |
| RN-GRP-015 | Somente mensagens e anexos enviados a partir da nova entrada podem ser consultados pelo readicionado. |
| RN-GRP-016 | O histórico anterior permanece armazenado para demais participantes autorizados, sem ser recuperado pelo readicionado. |
| RN-MSG-001 | Não existe edição de mensagens enviadas. |
| RN-MSG-002 | Não há indicadores de entregue ou lido. |
| RN-MSG-003 | Não há exclusão integral de conversa individual. |
| RN-MSG-004 | Não se permite cancelar individualmente item da fila offline. |
| RN-MSG-005 | Fila offline é diferente de anexo já recebido pelo servidor aguardando análise. |
| RN-ARQ-001 | Apenas PDF até 2 GB e JPEG até 20 MB. |
| RN-ARQ-002 | Assinatura, estrutura e análise de segurança são verificadas no servidor. |
| RN-ARQ-003 | Análise indisponível: repetir a cada cinco minutos até 24 horas, sem processamento simultâneo do mesmo anexo. |
| RN-ARQ-004 | Links temporários duram cinco minutos; revogação bloqueia novos links, não necessariamente os emitidos. |
| RN-ARQ-005 | Download interrompido recomeça desde o início, com nova autorização e novo link. |
| RN-ARQ-006 | Falha por expiração elimina cópia temporária e preserva apenas metadados mínimos. |
| RN-NOT-001 | Apresentação de push depende do sistema operacional, rede e permissões. |
| RN-NOT-003 | Não há confirmação de leitura. |
| RN-SINC-001 | Servidor é fonte de verdade. |
| RN-SINC-004 | Cache permanece até logout ou exclusão da conta, sujeito à sincronização. |
| RN-SINC-005 | Não executar sincronizações equivalentes simultaneamente. |
| RN-SINC-006 | Anexo removido apenas localmente pode ser baixado sob demanda. |
| RN-SINC-007 | Isolamento de cache pelo sistema operacional; sem criptografia adicional própria. |
| RN-AUD-001 | Registro inclui responsável histórico, instante, tipo, alvo e resultado, sem conteúdo de mensagens/avisos. |
| RN-AUD-002 | Registros são imutáveis por um ano. |
| RN-AUD-003 | Sem exportação pela interface. |
| RN-AUD-004 | Excluir conta não apaga antecipadamente auditoria. |
| RN-AUD-005 | Registrar falhas administrativas relevantes sem registrar segredos. |
| RN-INF-001 | Usar TLS 1.2 ou superior. |
| RN-INF-002 | Autorização deve ser aplicada no servidor, inclusive para acesso direto a arquivos. |
| RN-INF-003 | Backup diário e retenção de 30 dias em ambiente separado. |
| RN-INF-004 | Teste mensal de restauração fora da produção. |
| RN-INF-005 | RPO ≤ 24 horas e RTO ≤ 30 minutos. |
| RN-INF-006 | Disponibilidade mensal ≥ 99,9% excluída manutenção programada. |
| RN-INF-007 | Tempo de visibilidade de mensagem de texto ≤ 1 segundo com 100 usuários simultâneos em condições normais. |
| RN-AUT-006 | Primeiro acesso obrigatório na ordem: preencher perfil, trocar senha inicial e confirmar e-mail de recuperação, antes de liberar funções protegidas. |
| RN-AUT-007 | Preservar progresso do primeiro acesso entre interrupções, reinicializações e reinstalações. |
| RN-AUT-008 | Senhas têm no mínimo oito caracteres, sem exigência de combinação de categorias. |
| RN-AUT-009 | Troca de senha autenticada dispensa senha anterior, requer confirmação no e-mail confirmado e revoga todas as sessões após conclusão. |
| RN-AUT-010 | Recuperação regular usa e-mail confirmado; excepcional requer verificação de identidade pela TI e aprovação do Administrador; revogação ocorre após conclusão. |
| RN-AUT-011 | Mudança regular do e-mail exige confirmação do endereço atual e do novo e preserva sessão; excepcional exige TI, Administrador e confirmação do novo e revoga após conclusão. |
| RN-AUT-012 | Uma única sessão autorizada por conta; durante transferência, a origem permanece autorizada até troca atômica; revogação detectada exige limpeza. |
| RN-AUT-013 | Transferência requer link ao e-mail confirmado, válido por 15 minutos e uso único; nova emissão invalida anteriores; destino fica autorizado após confirmação sem redigitar credenciais. |
| RN-AUT-014 | Cinco senhas erradas consecutivas entre dispositivos acionam bloqueio de login de 60 segundos e revogação de sessões; recuperação não encerra bloqueio. |
| RN-AUT-015 | Sessão persiste ao fechar aplicativo; acesso offline local exige desbloqueio do dispositivo, não tem prazo fixo e requer revalidação ao reconectar. |
| RN-AUT-016 | Logout e revogação detectada removem credenciais, mensagens, cache de PDF/JPEG e fila pendente; operações remotas exigem validação da sessão. |

## Critérios complementares
Os critérios abaixo preservam a redação original; CA-GRP-012 é histórico, não contado.
| CA-GRP-013 | Usuário é removido e readicionado. | Registrar novo período de participação. |
| CA-GRP-014 | Usuário readicionado abre histórico. | Exibir somente mensagens da nova entrada em diante. |
| CA-GRP-015 | Usuário tenta acessar mensagem da primeira participação. | Negar acesso. |
| CA-GRP-016 | Usuário tenta baixar anexo de período anterior. | Negar acesso. |
| CA-GRP-017 | Usuário readicionado recebe nova mensagem. | Permitir visualização. |
| CA-GRP-018 | Usuário sincroniza histórico após readição. | Não restaurar mensagens de períodos anteriores ou de intervalo de remoção. |
| CA-GRP-019 | Usuário tenta consultar conteúdo antigo diretamente pela API. | Negar acesso no servidor. |
| CA-AUT-019 | Primeiro acesso exige perfil, depois senha inicial nova e, por fim, confirmação de e-mail; outras funções permanecem bloqueadas até completar. |
| CA-AUT-020 | Interromper/reinstalar durante primeiro acesso preserva etapas concluídas e retoma da etapa correta. |
| CA-AUT-021 | Senha de sete caracteres é recusada; oito caracteres passam na regra de tamanho, sem obrigatoriedade de categorias distintas. |
| CA-AUT-022 | Troca autenticada sem senha anterior requer link confirmado; conclusão altera senha, revoga sessões e exige novo login. |
| CA-AUT-023 | Recuperação regular usa e-mail confirmado e link válido de uso único; conclusão redefine senha e revoga sessões. |
| CA-AUT-024 | Recuperação excepcional exige verificação TI e aprovação administrativa; revoga sessões somente após conclusão da nova senha. |
| CA-AUT-025 | Mudança regular de e-mail só se efetiva após confirmações atual e nova; mantém sessão vigente. |
| CA-AUT-026 | Mudança excepcional exige TI, Administrador e novo e-mail confirmado; revoga sessões somente após efetivação. |
| CA-AUT-027 | No máximo uma sessão autorizada; origem permanece até confirmação e substituição atômica. |
| CA-AUT-028 | Transferência de dispositivo só se completa com link confirmado e válido; origem é revogada e destino autorizado. |
| CA-AUT-029 | Falhas consecutivas de senha são contabilizadas por conta no servidor, inclusive entre dispositivos. |
| CA-AUT-030 | Cinco falhas ativam bloqueio de 60 segundos, inclusive contra senha correta; recuperação não antecipa desbloqueio. |
| CA-AUT-031 | Sessão persiste ao fechar; offline exige desbloqueio local e revalidação remota ao reconectar. |
| CA-AUT-032 | Logout voluntário encerra acesso e limpa dados locais; offline limpa imediatamente e sincroniza revogação quando possível. |
| CA-AUT-033 | Revogação detectada encerra acesso, remove cache e credenciais e impede reenvio de itens pendentes. |
| CA-AUT-034 | Fila offline só é enviada após validação positiva da sessão no servidor; sessão revogada implica descarte. |

## Índice de critérios selecionados
CA-ARQ-001, CA-ARQ-002, CA-ARQ-003, CA-ARQ-004, CA-ARQ-005, CA-ARQ-006, CA-ARQ-007, CA-ARQ-008, CA-ARQ-009, CA-ARQ-010, CA-ARQ-011, CA-ARQ-012, CA-ARQ-013, CA-ARQ-014, CA-ARQ-015, CA-ARQ-016, CA-ARQ-017, CA-ARQ-018, CA-ARQ-019, CA-ARQ-020, CA-ARQ-021, CA-ARQ-022, CA-ARQ-023, CA-ARQ-024, CA-ARQ-025, CA-ARQ-026, CA-ARQ-027, CA-AUD-001, CA-AUD-002, CA-AUD-003, CA-AUD-004, CA-AUD-006, CA-AUD-007, CA-AUD-008, CA-AUD-009, CA-AUT-001, CA-AUT-002, CA-AUT-003, CA-AUT-004, CA-AUT-005, CA-AUT-006, CA-AUT-007, CA-AUT-008, CA-AUT-009, CA-AUT-010, CA-AUT-011, CA-AUT-012, CA-AUT-013, CA-AUT-014, CA-AUT-015, CA-AUT-016, CA-AUT-017, CA-AUT-018, CA-AUT-019, CA-AUT-020, CA-AUT-021, CA-AUT-022, CA-AUT-023, CA-AUT-024, CA-AUT-025, CA-AUT-026, CA-AUT-027, CA-AUT-028, CA-AUT-029, CA-AUT-030, CA-AUT-031, CA-AUT-032, CA-AUT-033, CA-AUT-034, CA-CON-001, CA-CON-002, CA-CON-003, CA-CON-004, CA-CON-005, CA-CVI-001, CA-CVI-002, CA-CVI-003, CA-CVI-004, CA-GRP-001, CA-GRP-002, CA-GRP-003, CA-GRP-004, CA-GRP-005, CA-GRP-006, CA-GRP-007, CA-GRP-008, CA-GRP-009, CA-GRP-010, CA-GRP-011, CA-GRP-013, CA-GRP-014, CA-GRP-015, CA-GRP-016, CA-GRP-017, CA-GRP-018, CA-GRP-019, CA-GRP-020, CA-MSG-001, CA-MSG-002, CA-MSG-003, CA-MSG-004, CA-MSG-005, CA-MSG-006, CA-MSG-007, CA-MSG-008, CA-MSG-009, CA-MSG-010, CA-MSG-011, CA-MSG-012, CA-MSG-013, CA-MSG-014, CA-NF-001, CA-NF-002, CA-NF-003, CA-NF-004, CA-NF-005, CA-NF-006, CA-NF-007, CA-NF-008, CA-NF-009, CA-NF-010, CA-NF-011, CA-NOT-001, CA-NOT-002, CA-NOT-004, CA-SINC-001, CA-SINC-002, CA-SINC-003, CA-SINC-007, CA-SINC-008, CA-SINC-009, CA-SINC-010, CA-SINC-011, CA-SINC-012, CA-SINC-013, CA-SINC-014, CA-SINC-015, CA-USR-001, CA-USR-002, CA-USR-003, CA-USR-004, CA-USR-005, CA-USR-006, CA-USR-007, CA-USR-008, CA-USR-009, CA-USR-010, CA-USR-011, CA-USR-013, CA-USR-015, CA-USR-016, CA-USR-017, CA-USR-018.

## Postergados
RF-USR-012, RF-USR-014, RF-USR-019, RF-NOT-003, RF-AVI-001, RF-AVI-002, RF-AVI-003, RF-AVI-004, RF-AVI-005, RF-AVI-006, RF-AVI-007, RF-AVI-008, RF-AVI-009, RF-AVI-010, RF-AVI-011, RF-AVI-012, RF-AVI-013, RF-AVI-014, RF-AVI-015, RF-AVI-016, RF-SINC-004, RF-SINC-005, RF-SINC-006, RF-AUD-005.

RN: RN-NOT-002, RN-AVI-001, RN-AVI-002, RN-AVI-003, RN-AVI-004, RN-AVI-005, RN-AVI-006, RN-AVI-007, RN-AVI-008, RN-AVI-009, RN-SINC-002, RN-SINC-003.

CA: CA-USR-012, CA-USR-014, CA-USR-019, CA-NOT-003, CA-AVI-001, CA-AVI-002, CA-AVI-003, CA-AVI-004, CA-AVI-005, CA-AVI-006, CA-AVI-007, CA-AVI-008, CA-AVI-009, CA-AVI-010, CA-AVI-011, CA-AVI-012, CA-AVI-013, CA-AVI-014, CA-AVI-015, CA-AVI-016, CA-SINC-004, CA-SINC-005, CA-SINC-006, CA-AUD-005.

## Consistência M01
- CON-M01-001 — Logout voluntário offline
- CON-M01-002 — Recuperação excepcional de senha
- CON-M01-003 — Mudança excepcional de e-mail
- CON-M01-004 — Senha concluída versus transferência pendente
- CON-M01-005 — E-mail alterado versus transferência pendente
- CON-M01-006 — E-mail alterado versus recuperação pendente
- CON-M01-007 — Conflito entre alterações de senha
- CON-M01-008 — Conflito entre alterações de e-mail
- CON-M01-009 — Conflito cruzado senha e e-mail
- CON-M01-010 — Bloqueio versus transferência
- CON-M01-011 — Bloqueio versus sessão existente
- CON-M01-012 — Fila offline versus revogação
- CON-M01-013 — Transferência versus fila de origem
- CON-M01-014 — Logout versus transferência
- CON-M01-015 — Respostas tardias de sessão revogada
- CON-M01-016 — Transferência versus primeiro acesso
- CON-M01-017 — Substituição de e-mail inicial não confirmado
- CON-M01-018 — Validação final de links de segurança
- CON-M01-019 — Reemissão e ordem de links

Todos os 412 cenários da fonte são incluídos por referência integral, sem alteração de texto; índice individual:
CEN-CON-M01-001-001, CEN-CON-M01-001-002, CEN-CON-M01-001-003, CEN-CON-M01-001-004, CEN-CON-M01-001-005, CEN-CON-M01-001-006, CEN-CON-M01-001-007, CEN-CON-M01-001-008, CEN-CON-M01-001-009, CEN-CON-M01-001-010, CEN-CON-M01-002-001, CEN-CON-M01-002-002, CEN-CON-M01-002-003, CEN-CON-M01-002-004, CEN-CON-M01-002-005, CEN-CON-M01-002-006, CEN-CON-M01-002-007, CEN-CON-M01-002-008, CEN-CON-M01-002-009, CEN-CON-M01-002-010, CEN-CON-M01-002-011, CEN-CON-M01-002-012, CEN-CON-M01-003-001, CEN-CON-M01-003-002, CEN-CON-M01-003-003, CEN-CON-M01-003-004, CEN-CON-M01-003-005, CEN-CON-M01-003-006, CEN-CON-M01-003-007, CEN-CON-M01-003-008, CEN-CON-M01-003-009, CEN-CON-M01-003-010, CEN-CON-M01-003-011, CEN-CON-M01-003-012, CEN-CON-M01-003-013, CEN-CON-M01-003-014, CEN-CON-M01-003-015, CEN-CON-M01-003-016, CEN-CON-M01-003-017, CEN-CON-M01-003-018, CEN-CON-M01-004-001, CEN-CON-M01-004-002, CEN-CON-M01-004-003, CEN-CON-M01-004-004, CEN-CON-M01-004-005, CEN-CON-M01-004-006, CEN-CON-M01-004-007, CEN-CON-M01-004-008, CEN-CON-M01-004-009, CEN-CON-M01-004-010, CEN-CON-M01-004-011, CEN-CON-M01-004-012, CEN-CON-M01-004-013, CEN-CON-M01-004-014, CEN-CON-M01-004-015, CEN-CON-M01-004-016, CEN-CON-M01-004-017, CEN-CON-M01-004-018, CEN-CON-M01-005-001, CEN-CON-M01-005-002, CEN-CON-M01-005-003, CEN-CON-M01-005-004, CEN-CON-M01-005-005, CEN-CON-M01-005-006, CEN-CON-M01-005-007, CEN-CON-M01-005-008, CEN-CON-M01-005-009, CEN-CON-M01-005-010, CEN-CON-M01-005-011, CEN-CON-M01-005-012, CEN-CON-M01-005-013, CEN-CON-M01-005-014, CEN-CON-M01-005-015, CEN-CON-M01-005-016, CEN-CON-M01-005-017, CEN-CON-M01-005-018, CEN-CON-M01-006-001, CEN-CON-M01-006-002, CEN-CON-M01-006-003, CEN-CON-M01-006-004, CEN-CON-M01-006-005, CEN-CON-M01-006-006, CEN-CON-M01-006-007, CEN-CON-M01-006-008, CEN-CON-M01-006-009, CEN-CON-M01-006-010, CEN-CON-M01-006-011, CEN-CON-M01-006-012, CEN-CON-M01-006-013, CEN-CON-M01-006-014, CEN-CON-M01-006-015, CEN-CON-M01-006-016, CEN-CON-M01-006-017, CEN-CON-M01-006-018, CEN-CON-M01-007-001, CEN-CON-M01-007-002, CEN-CON-M01-007-003, CEN-CON-M01-007-004, CEN-CON-M01-007-005, CEN-CON-M01-007-006, CEN-CON-M01-007-007, CEN-CON-M01-007-008, CEN-CON-M01-007-009, CEN-CON-M01-007-010, CEN-CON-M01-007-011, CEN-CON-M01-007-012, CEN-CON-M01-007-013, CEN-CON-M01-007-014, CEN-CON-M01-007-015, CEN-CON-M01-007-016, CEN-CON-M01-007-017, CEN-CON-M01-007-018, CEN-CON-M01-007-019, CEN-CON-M01-007-020, CEN-CON-M01-008-001, CEN-CON-M01-008-002, CEN-CON-M01-008-003, CEN-CON-M01-008-004, CEN-CON-M01-008-005, CEN-CON-M01-008-006, CEN-CON-M01-008-007, CEN-CON-M01-008-008, CEN-CON-M01-008-009, CEN-CON-M01-008-010, CEN-CON-M01-008-011, CEN-CON-M01-008-012, CEN-CON-M01-008-013, CEN-CON-M01-008-014, CEN-CON-M01-008-015, CEN-CON-M01-008-016, CEN-CON-M01-008-017, CEN-CON-M01-008-018, CEN-CON-M01-008-019, CEN-CON-M01-008-020, CEN-CON-M01-008-021, CEN-CON-M01-008-022, CEN-CON-M01-008-023, CEN-CON-M01-008-024, CEN-CON-M01-009-001, CEN-CON-M01-009-002, CEN-CON-M01-009-003, CEN-CON-M01-009-004, CEN-CON-M01-009-005, CEN-CON-M01-009-006, CEN-CON-M01-009-007, CEN-CON-M01-009-008, CEN-CON-M01-009-009, CEN-CON-M01-009-010, CEN-CON-M01-009-011, CEN-CON-M01-009-012, CEN-CON-M01-009-013, CEN-CON-M01-009-014, CEN-CON-M01-009-015, CEN-CON-M01-009-016, CEN-CON-M01-009-017, CEN-CON-M01-009-018, CEN-CON-M01-009-019, CEN-CON-M01-009-020, CEN-CON-M01-009-021, CEN-CON-M01-009-022, CEN-CON-M01-009-023, CEN-CON-M01-009-024, CEN-CON-M01-010-001, CEN-CON-M01-010-002, CEN-CON-M01-010-003, CEN-CON-M01-010-004, CEN-CON-M01-010-005, CEN-CON-M01-010-006, CEN-CON-M01-010-007, CEN-CON-M01-010-008, CEN-CON-M01-010-009, CEN-CON-M01-010-010, CEN-CON-M01-010-011, CEN-CON-M01-010-012, CEN-CON-M01-010-013, CEN-CON-M01-010-014, CEN-CON-M01-010-015, CEN-CON-M01-010-016, CEN-CON-M01-010-017, CEN-CON-M01-010-018, CEN-CON-M01-010-019, CEN-CON-M01-010-020, CEN-CON-M01-011-001, CEN-CON-M01-011-002, CEN-CON-M01-011-003, CEN-CON-M01-011-004, CEN-CON-M01-011-005, CEN-CON-M01-011-006, CEN-CON-M01-011-007, CEN-CON-M01-011-008, CEN-CON-M01-011-009, CEN-CON-M01-011-010, CEN-CON-M01-011-011, CEN-CON-M01-011-012, CEN-CON-M01-011-013, CEN-CON-M01-011-014, CEN-CON-M01-011-015, CEN-CON-M01-011-016, CEN-CON-M01-011-017, CEN-CON-M01-011-018, CEN-CON-M01-011-019, CEN-CON-M01-011-020, CEN-CON-M01-011-021, CEN-CON-M01-011-022, CEN-CON-M01-011-023, CEN-CON-M01-011-024, CEN-CON-M01-012-001, CEN-CON-M01-012-002, CEN-CON-M01-012-003, CEN-CON-M01-012-004, CEN-CON-M01-012-005, CEN-CON-M01-012-006, CEN-CON-M01-012-007, CEN-CON-M01-012-008, CEN-CON-M01-012-009, CEN-CON-M01-012-010, CEN-CON-M01-012-011, CEN-CON-M01-012-012, CEN-CON-M01-012-013, CEN-CON-M01-012-014, CEN-CON-M01-012-015, CEN-CON-M01-012-016, CEN-CON-M01-012-017, CEN-CON-M01-012-018, CEN-CON-M01-012-019, CEN-CON-M01-012-020, CEN-CON-M01-012-021, CEN-CON-M01-012-022, CEN-CON-M01-012-023, CEN-CON-M01-012-024, CEN-CON-M01-012-025, CEN-CON-M01-012-026, CEN-CON-M01-012-027, CEN-CON-M01-012-028, CEN-CON-M01-013-001, CEN-CON-M01-013-002, CEN-CON-M01-013-003, CEN-CON-M01-013-004, CEN-CON-M01-013-005, CEN-CON-M01-013-006, CEN-CON-M01-013-007, CEN-CON-M01-013-008, CEN-CON-M01-013-009, CEN-CON-M01-013-010, CEN-CON-M01-013-011, CEN-CON-M01-013-012, CEN-CON-M01-013-013, CEN-CON-M01-013-014, CEN-CON-M01-013-015, CEN-CON-M01-013-016, CEN-CON-M01-013-017, CEN-CON-M01-013-018, CEN-CON-M01-013-019, CEN-CON-M01-013-020, CEN-CON-M01-013-021, CEN-CON-M01-013-022, CEN-CON-M01-013-023, CEN-CON-M01-013-024, CEN-CON-M01-013-025, CEN-CON-M01-013-026, CEN-CON-M01-013-027, CEN-CON-M01-013-028, CEN-CON-M01-013-029, CEN-CON-M01-013-030, CEN-CON-M01-014-001, CEN-CON-M01-014-002, CEN-CON-M01-014-003, CEN-CON-M01-014-004, CEN-CON-M01-014-005, CEN-CON-M01-014-006, CEN-CON-M01-014-007, CEN-CON-M01-014-008, CEN-CON-M01-014-009, CEN-CON-M01-014-010, CEN-CON-M01-014-011, CEN-CON-M01-014-012, CEN-CON-M01-014-013, CEN-CON-M01-014-014, CEN-CON-M01-014-015, CEN-CON-M01-014-016, CEN-CON-M01-014-017, CEN-CON-M01-014-018, CEN-CON-M01-014-019, CEN-CON-M01-014-020, CEN-CON-M01-014-021, CEN-CON-M01-014-022, CEN-CON-M01-014-023, CEN-CON-M01-014-024, CEN-CON-M01-014-025, CEN-CON-M01-014-026, CEN-CON-M01-015-001, CEN-CON-M01-015-002, CEN-CON-M01-015-003, CEN-CON-M01-015-004, CEN-CON-M01-015-005, CEN-CON-M01-015-006, CEN-CON-M01-015-007, CEN-CON-M01-015-008, CEN-CON-M01-015-009, CEN-CON-M01-015-010, CEN-CON-M01-015-011, CEN-CON-M01-015-012, CEN-CON-M01-015-013, CEN-CON-M01-015-014, CEN-CON-M01-015-015, CEN-CON-M01-015-016, CEN-CON-M01-015-017, CEN-CON-M01-015-018, CEN-CON-M01-015-019, CEN-CON-M01-015-020, CEN-CON-M01-015-021, CEN-CON-M01-015-022, CEN-CON-M01-015-023, CEN-CON-M01-015-024, CEN-CON-M01-015-025, CEN-CON-M01-015-026, CEN-CON-M01-015-027, CEN-CON-M01-015-028, CEN-CON-M01-016-001, CEN-CON-M01-016-002, CEN-CON-M01-016-003, CEN-CON-M01-016-004, CEN-CON-M01-016-005, CEN-CON-M01-016-006, CEN-CON-M01-016-007, CEN-CON-M01-016-008, CEN-CON-M01-016-009, CEN-CON-M01-016-010, CEN-CON-M01-016-011, CEN-CON-M01-016-012, CEN-CON-M01-016-013, CEN-CON-M01-016-014, CEN-CON-M01-016-015, CEN-CON-M01-016-016, CEN-CON-M01-016-017, CEN-CON-M01-016-018, CEN-CON-M01-016-019, CEN-CON-M01-016-020, CEN-CON-M01-017-001, CEN-CON-M01-017-002, CEN-CON-M01-017-003, CEN-CON-M01-017-004, CEN-CON-M01-017-005, CEN-CON-M01-017-006, CEN-CON-M01-017-007, CEN-CON-M01-017-008, CEN-CON-M01-017-009, CEN-CON-M01-017-010, CEN-CON-M01-017-011, CEN-CON-M01-017-012, CEN-CON-M01-017-013, CEN-CON-M01-017-014, CEN-CON-M01-017-015, CEN-CON-M01-017-016, CEN-CON-M01-017-017, CEN-CON-M01-017-018, CEN-CON-M01-017-019, CEN-CON-M01-017-020, CEN-CON-M01-017-021, CEN-CON-M01-017-022, CEN-CON-M01-017-023, CEN-CON-M01-017-024, CEN-CON-M01-018-001, CEN-CON-M01-018-002, CEN-CON-M01-018-003, CEN-CON-M01-018-004, CEN-CON-M01-018-005, CEN-CON-M01-018-006, CEN-CON-M01-018-007, CEN-CON-M01-018-008, CEN-CON-M01-018-009, CEN-CON-M01-018-010, CEN-CON-M01-018-011, CEN-CON-M01-018-012, CEN-CON-M01-018-013, CEN-CON-M01-018-014, CEN-CON-M01-018-015, CEN-CON-M01-018-016, CEN-CON-M01-018-017, CEN-CON-M01-018-018, CEN-CON-M01-018-019, CEN-CON-M01-018-020, CEN-CON-M01-018-021, CEN-CON-M01-018-022, CEN-CON-M01-018-023, CEN-CON-M01-018-024, CEN-CON-M01-018-025, CEN-CON-M01-018-026, CEN-CON-M01-019-001, CEN-CON-M01-019-002, CEN-CON-M01-019-003, CEN-CON-M01-019-004, CEN-CON-M01-019-005, CEN-CON-M01-019-006, CEN-CON-M01-019-007, CEN-CON-M01-019-008, CEN-CON-M01-019-009, CEN-CON-M01-019-010, CEN-CON-M01-019-011, CEN-CON-M01-019-012, CEN-CON-M01-019-013, CEN-CON-M01-019-014, CEN-CON-M01-019-015, CEN-CON-M01-019-016, CEN-CON-M01-019-017, CEN-CON-M01-019-018, CEN-CON-M01-019-019, CEN-CON-M01-019-020, CEN-CON-M01-019-021, CEN-CON-M01-019-022, CEN-CON-M01-019-023, CEN-CON-M01-019-024.

## Aplicabilidade compartilhada
RF-NOT-004, RF-SINC-011, RF-SINC-014, RN-AUD-001 e RN-USR-004 preservam enunciados; aplicar às funcionalidades incluídas, postergando parcelas exclusivas de avisos. Dependências: infraestrutura e segurança transversais; autenticação e contas precedem recursos protegidos; conversas e grupos suportam mensagens; anexos, notificações e sincronização integram mensagens; auditoria acompanha operações desde o início. Arquitetura sujeita a validação técnica.

## Decisões e homologação
- DEC-MVP-011: 784 elementos selecionados.
- DEC-MVP-012: 65 RN, 12 postergadas.
- DEC-MVP-013: 142 CA e 11 CA-NF.
- DEC-MVP-014: 19 CON e 412 cenários, sujeitos a refinamento.
- DEC-MVP-015: preservar IDs e delimitar aplicação compartilhada sem alterar a base.

Manifestação do PO: “Aprovo integralmente o MVP-04 v1.0.0 e as decisões DEC-MVP-011 a DEC-MVP-015. Publique o documento no GitHub e prossiga para o MVP-05 — Product Backlog Priorizado.”

Controle: mudanças exigem aprovação PO e atualização dos documentos afetados. INC-DOC-003, 004 e 005 permanecem abertas. CA-NF-004 depende de definição da mensuração. Homologação documental não atesta testes ou implementação.
