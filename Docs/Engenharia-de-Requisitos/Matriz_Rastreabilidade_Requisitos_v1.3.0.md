# Matriz de Rastreabilidade — App.cef v1.3.0

Data: 27/11/2026. Status: inventário integral dos IDs encontrados; revisão de vínculos e evidências pendente. Fonte: [Matriz v1.3.0](Matriz_Consolidada_Requisitos_v1.3.0.md), blob 65b12d140621838d1d7708072373deee23314fc0; [decisões](Registro-Decisoes-Homologacao-v1.2.1.md); [homologação](Homologacao_Consolidada_PO_M01_a_M12_2026-11-23.md); [issues](https://github.com/Asa-3/App.cef/issues) (100 resultados consultados).

E = explícito na fonte; P = proposto, requer revisão; L = lacuna. Menção literal em issue não prova cobertura. CT-P é ID de planejamento, não teste executado. UML é proposta por tipo, não arquivo verificado. Não se altera a linha de base homologada.

## 1. Inventário e divergência

148 RF, 77 RN, **166 CA funcionais únicos**, 11 RNF, 11 CA-NF, 19 CON, 412 cenários: **844 elementos rastreáveis**. M05 possui 19 CA únicos (001–011 e 013–020); CA-GRP-012 foi migrado para CA-GRP-020. Errata INC-DOC-006 de 27/11/2026: inventário da matriz vigente corrigido de 20 para 19 no M05 e de 167 para 166 no total, sem mudança de escopo. 

## 2. Índice de módulos

| Módulo | Issues candidatas (P) | UML a localizar (L) |
|---|---|---|
| M01 AUT | [#25](https://github.com/Asa-3/App.cef/issues/25), [#39](https://github.com/Asa-3/App.cef/issues/39), [#47](https://github.com/Asa-3/App.cef/issues/47), [#60](https://github.com/Asa-3/App.cef/issues/60), [#66](https://github.com/Asa-3/App.cef/issues/66), [#90](https://github.com/Asa-3/App.cef/issues/90), [#102](https://github.com/Asa-3/App.cef/issues/102) | Atividades; sequência; componentes |
| M02 USR | [#27](https://github.com/Asa-3/App.cef/issues/27), [#40](https://github.com/Asa-3/App.cef/issues/40), [#57](https://github.com/Asa-3/App.cef/issues/57), [#62](https://github.com/Asa-3/App.cef/issues/62), [#100](https://github.com/Asa-3/App.cef/issues/100) | Casos de uso; atividades |
| M03 CON | [#27](https://github.com/Asa-3/App.cef/issues/27), [#40](https://github.com/Asa-3/App.cef/issues/40), [#51](https://github.com/Asa-3/App.cef/issues/51), [#61](https://github.com/Asa-3/App.cef/issues/61) | Casos de uso; atividades |
| M04 CVI | [#29](https://github.com/Asa-3/App.cef/issues/29), [#48](https://github.com/Asa-3/App.cef/issues/48), [#69](https://github.com/Asa-3/App.cef/issues/69), [#103](https://github.com/Asa-3/App.cef/issues/103) | Casos de uso; sequência; comunicação |
| M05 GRP | [#29](https://github.com/Asa-3/App.cef/issues/29), [#42](https://github.com/Asa-3/App.cef/issues/42), [#53](https://github.com/Asa-3/App.cef/issues/53), [#71](https://github.com/Asa-3/App.cef/issues/71) | Casos de uso; atividades; sequência |
| M06 MSG | [#19](https://github.com/Asa-3/App.cef/issues/19), [#30](https://github.com/Asa-3/App.cef/issues/30), [#49](https://github.com/Asa-3/App.cef/issues/49), [#67](https://github.com/Asa-3/App.cef/issues/67), [#68](https://github.com/Asa-3/App.cef/issues/68), [#103](https://github.com/Asa-3/App.cef/issues/103) | Sequência; comunicação; temporização |
| M07 ARQ | [#20](https://github.com/Asa-3/App.cef/issues/20), [#32](https://github.com/Asa-3/App.cef/issues/32), [#72](https://github.com/Asa-3/App.cef/issues/72), [#98](https://github.com/Asa-3/App.cef/issues/98) | Sequência; componentes |
| M08 NOT | [#7](https://github.com/Asa-3/App.cef/issues/7), [#43](https://github.com/Asa-3/App.cef/issues/43), [#55](https://github.com/Asa-3/App.cef/issues/55), [#59](https://github.com/Asa-3/App.cef/issues/59), [#70](https://github.com/Asa-3/App.cef/issues/70) | Sequência; componentes |
| M09 AVI | [#96](https://github.com/Asa-3/App.cef/issues/96), [#106](https://github.com/Asa-3/App.cef/issues/106) | Casos de uso; atividades; sequência |
| M10 SINC | [#18](https://github.com/Asa-3/App.cef/issues/18), [#21](https://github.com/Asa-3/App.cef/issues/21), [#30](https://github.com/Asa-3/App.cef/issues/30), [#68](https://github.com/Asa-3/App.cef/issues/68) | Sequência; temporização |
| M11 AUD | [#97](https://github.com/Asa-3/App.cef/issues/97), [#100](https://github.com/Asa-3/App.cef/issues/100) | Casos de uso; componentes |
| M12 INF | [#86](https://github.com/Asa-3/App.cef/issues/86), [#90](https://github.com/Asa-3/App.cef/issues/90), [#91](https://github.com/Asa-3/App.cef/issues/91), [#93](https://github.com/Asa-3/App.cef/issues/93), [#98](https://github.com/Asa-3/App.cef/issues/98), [#99](https://github.com/Asa-3/App.cef/issues/99), [#101](https://github.com/Asa-3/App.cef/issues/101), [#102](https://github.com/Asa-3/App.cef/issues/102) | Componentes; temporização |

## 3. RF e RNF

| ID | Enunciado | CA explícito (E) | CA adicional (P) | RN (P) | DEC/CON (E) | Issue com ID literal (E) |
|---|---|---|---|---|---|---|
| RF-AUT-001 | Permitir autenticação com nome de usuário único e senha. | CA-AUT-001 | L | RN-AUT-001 | L | [#90](https://github.com/Asa-3/App.cef/issues/90) |
| RF-AUT-002 | Exigir alteração da senha inicial no primeiro acesso. | CA-AUT-002 | CA-AUT-019, CA-AUT-020 | RN-AUT-002, RN-AUT-006, RN-AUT-007 | DEC-M01-001, DEC-M01-002, DEC-M01-019, CON-M01-016 | L |
| RF-AUT-003 | Exigir preenchimento do perfil inicial antes de liberar o aplicativo. | CA-AUT-003 | CA-AUT-019, CA-AUT-020 | RN-AUT-002, RN-AUT-006, RN-AUT-007 | DEC-M01-001, DEC-M01-002, DEC-M01-019, CON-M01-016 | L |
| RF-AUT-004 | Validar senha com pelo menos oito caracteres. | CA-AUT-004 | CA-AUT-021 | RN-AUT-008 | DEC-M01-003 | L |
| RF-AUT-005 | Permitir troca de senha por usuário autenticado sem solicitar a senha anterior. | CA-AUT-005 | CA-AUT-022 | RN-AUT-009 | DEC-M01-004, DEC-M01-005, DEC-M01-020, CON-M01-004, CON-M01-007, CON-M01-009 | L |
| RF-AUT-006 | Permitir recuperação de senha por e-mail de recuperação confirmado. | CA-AUT-006 | CA-AUT-023, CA-AUT-024 | RN-AUT-003, RN-AUT-010 | DEC-M01-004, DEC-M01-006, DEC-M01-010, DEC-M01-018, CON-M01-002, CON-M01-006 | L |
| RF-AUT-007 | Emitir link de recuperação de uso único com validade de 15 minutos. | CA-AUT-007 | CA-AUT-023 | RN-AUT-005 | DEC-M01-005, CON-M01-018, CON-M01-019 | L |
| RF-AUT-008 | Invalidar links de recuperação anteriores quando novo link for emitido. | CA-AUT-008 | CA-AUT-023 | RN-AUT-005 | DEC-M01-005, CON-M01-018, CON-M01-019 | L |
| RF-AUT-009 | Revogar todas as sessões após redefinição de senha. | CA-AUT-009 | CA-AUT-022, CA-AUT-023, CA-AUT-024, CA-AUT-033 | RN-AUT-009, RN-AUT-010, RN-AUT-016 | DEC-M01-010, DEC-M01-018, DEC-M01-020, CON-M01-002, CON-M01-004, CON-M01-007 | L |
| RF-AUT-010 | Permitir alteração de e-mail de recuperação mediante confirmação. | CA-AUT-010 | CA-AUT-025, CA-AUT-026 | RN-AUT-003, RN-AUT-011 | DEC-M01-004, DEC-M01-006, DEC-M01-007, DEC-M01-018, CON-M01-003, CON-M01-005, CON-M01-006, CON-M01-008, CON-M01-009, CON-M01-017 | L |
| RF-AUT-011 | Manter uma única sessão/dispositivo ativo por conta. | CA-AUT-011 | CA-AUT-027 | RN-AUT-012 | DEC-M01-008, DEC-M01-009, DEC-M01-012, DEC-M01-021, CON-M01-013 | L |
| RF-AUT-012 | Exigir confirmação por link de e-mail ao iniciar sessão em outro dispositivo. | CA-AUT-012 | CA-AUT-028 | RN-AUT-005, RN-AUT-013 | DEC-M01-006, DEC-M01-008, DEC-M01-009, DEC-M01-021, CON-M01-010 | L |
| RF-AUT-013 | Revogar sessão anterior após confirmar novo dispositivo. | CA-AUT-013 | CA-AUT-027, CA-AUT-028, CA-AUT-033 | RN-AUT-012, RN-AUT-013, RN-AUT-016 | DEC-M01-008, DEC-M01-009, DEC-M01-012, DEC-M01-013, DEC-M01-021, CON-M01-013, CON-M01-014, CON-M01-015 | L |
| RF-AUT-014 | Contar falhas consecutivas de autenticação por conta no servidor. | CA-AUT-014 | CA-AUT-029, CA-AUT-030 | RN-AUT-004, RN-AUT-014 | DEC-M01-010, CON-M01-011 | L |
| RF-AUT-015 | Bloquear novas tentativas de login por 60 segundos após cinco falhas. | CA-AUT-015 | CA-AUT-030, CA-AUT-033 | RN-AUT-004, RN-AUT-014, RN-AUT-016 | CON-M01-010, CON-M01-011 | L |
| RF-AUT-016 | Desbloquear automaticamente após 60 segundos e reiniciar contador; zerá-lo após login bem-sucedido. | CA-AUT-016 | CA-AUT-030 | RN-AUT-004, RN-AUT-014 | DEC-M01-010 | L |
| RF-AUT-017 | Manter sessão ativa ao fechar e reabrir o aplicativo, salvo revogação. | CA-AUT-017 | CA-AUT-031, CA-AUT-034 | RN-AUT-015 | DEC-M01-011, DEC-M01-012, DEC-M01-014, DEC-M01-015, DEC-M01-016, DEC-M01-017, CON-M01-012 | L |
| RF-AUT-018 | Encerrar sessão e apagar dados locais no logout. | CA-AUT-018 | CA-AUT-032, CA-AUT-033, CA-AUT-034 | RN-AUT-016 | DEC-M01-012, DEC-M01-013, CON-M01-001, CON-M01-012, CON-M01-014, CON-M01-015 | L |
| RF-USR-001 | Permitir somente a Administradores criar contas de Funcionários e Administradores. | CA-USR-001 | L | L | L | L |
| RF-USR-002 | Cadastrar nome de usuário único e permanente. | CA-USR-002 | L | L | L | L |
| RF-USR-003 | Cadastrar senha inicial para conta nova. | CA-USR-003 | L | L | L | L |
| RF-USR-004 | Exigir nome completo, cargo e setor no preenchimento inicial do perfil. | CA-USR-004 | L | L | DEC-M01-001, DEC-M01-002 | L |
| RF-USR-005 | Impedir alteração de nome completo, cargo e setor após conclusão inicial. | CA-USR-005 | L | L | L | L |
| RF-USR-006 | Permitir que titular edite seu e-mail corporativo opcional. | CA-USR-006 | L | L | L | L |
| RF-USR-007 | Permitir visualizar as abas Perfil do Funcionário e Perfil do Administrador. | CA-USR-007 | L | L | L | L |
| RF-USR-008 | Restringir edição dos campos permitidos do perfil ao próprio titular. | CA-USR-008 | L | L | L | L |
| RF-USR-009 | Permitir ao Administrador excluir permanentemente contas após verificação externa ao aplicativo. | CA-USR-009 | L | RN-USR-001 | L | L |
| RF-USR-010 | Revogar sessões e impedir login de conta excluída. | CA-USR-010 | L | RN-USR-001, RN-USR-003 | L | L |
| RF-USR-011 | Preservar mensagens existentes após exclusão de conta, exceto exclusões de conteúdo previstas em outras regras. | CA-USR-011 | L | RN-USR-004 | L | L |
| RF-USR-012 | Preservar avisos históricos existentes após exclusão do autor. | CA-USR-012 | L | RN-USR-004 | L | L |
| RF-USR-013 | Preservar nome completo original do autor nas mensagens históricas. | CA-USR-013 | L | RN-USR-002, RN-USR-004 | L | L |
| RF-USR-014 | Preservar nome completo original do autor em avisos históricos. | CA-USR-014 | L | RN-USR-002, RN-USR-004 | L | L |
| RF-USR-015 | Preservar identificação histórica em registros de auditoria durante a retenção. | CA-USR-015 | L | RN-USR-002, RN-USR-004 | L | L |
| RF-USR-016 | Manter autoria histórica distinta de credenciais de autenticação. | CA-USR-016 | L | RN-USR-003, RN-USR-004 | L | L |
| RF-USR-017 | Permitir readmissão somente por nova conta e novo nome de usuário. | CA-USR-017 | L | RN-USR-001 | L | L |
| RF-USR-018 | Manter autoria antiga vinculada ao identificador histórico anterior após readmissão. | CA-USR-018 | L | RN-USR-003 | L | L |
| RF-USR-019 | Impedir edição ou exclusão global de avisos cujo autor tenha sido excluído. | CA-USR-019 | L | RN-USR-004 | L | L |
| RF-CON-001 | Exibir lista pessoal de contatos. | CA-CON-001 | L | RN-CON-001 | L | L |
| RF-CON-002 | Adicionar usuário ativo cadastrado à lista pessoal. | CA-CON-002 | L | RN-CON-001 | L | L |
| RF-CON-003 | Editar apelido local de contato. | CA-CON-003 | L | RN-CON-001, RN-CON-002 | L | L |
| RF-CON-004 | Remover contato da lista pessoal. | CA-CON-004 | L | RN-CON-001, RN-CON-003 | L | L |
| RF-CON-005 | Pesquisar usuários ativos cadastrados por parte do nome. | CA-CON-005 | L | L | L | L |
| RF-CVI-001 | Iniciar conversa individual entre dois usuários ativos cadastrados, independentemente da lista de contatos. | CA-CVI-001 | L | RN-CVI-001 | L | L |
| RF-CVI-002 | Permitir aos dois participantes consultar mensagens autorizadas da conversa. | CA-CVI-002 | L | RN-CVI-001, RN-CVI-002, RN-CVI-003 | L | L |
| RF-CVI-003 | Impedir acesso à conversa por terceiros, inclusive Administradores não participantes. | CA-CVI-003 | L | RN-CVI-001 | L | L |
| RF-CVI-004 | Manter histórico de conversa individual sem função de exclusão integral. | CA-CVI-004 | L | RN-CVI-002 | L | L |
| RF-GRP-001 | Permitir somente a Administradores criar grupos. | CA-GRP-001 | L | RN-GRP-001 | L | L |
| RF-GRP-002 | Permitir a Administradores adicionar membros. | CA-GRP-002 | L | RN-GRP-001 | L | L |
| RF-GRP-003 | Permitir a Administradores remover membros. | CA-GRP-003 | L | RN-GRP-001 | L | L |
| RF-GRP-004 | Permitir a qualquer Administrador administrar grupos existentes. | CA-GRP-004 | L | RN-GRP-001 | L | L |
| RF-GRP-005 | Permitir a Administradores excluir grupo mediante confirmação. | CA-GRP-005 | L | RN-GRP-001, RN-GRP-003 | L | L |
| RF-GRP-006 | Excluir permanentemente mensagens e anexos ao excluir grupo. | CA-GRP-006 | L | RN-GRP-003 | L | L |
| RF-GRP-007 | Permitir mensagens entre integrantes autorizados. | CA-GRP-007 | L | L | L | L |
| RF-GRP-008 | Registrar no servidor entrada e saída de cada período de participação. | CA-GRP-008 | L | RN-GRP-002, RN-GRP-013 | L | L |
| RF-GRP-009 | Filtrar mensagens conforme o início do período de participação autorizado. | CA-GRP-009 | L | RN-GRP-002 | L | L |
| RF-GRP-010 | Impedir acesso a anexos anteriores à entrada. | CA-GRP-010 | L | RN-GRP-002 | L | L |
| RF-GRP-011 | Aplicar autorização temporal no servidor em consulta e sincronização. | CA-GRP-011 | L | RN-GRP-002 | L | L |
| RF-GRP-012 | Registrar a data e hora de cada nova entrada do usuário no grupo, usando horário do servidor. | CA-GRP-013 | L | RN-GRP-004, RN-GRP-012, RN-GRP-013 | L | L |
| RF-GRP-013 | Disponibilizar ao usuário readicionado somente mensagens enviadas a partir da nova entrada. | CA-GRP-014 | L | RN-GRP-004, RN-GRP-014, RN-GRP-015 | L | L |
| RF-GRP-014 | Impedir a recuperação de mensagens e anexos de participações anteriores após readição. | CA-GRP-015, CA-GRP-016 | L | RN-GRP-004, RN-GRP-014, RN-GRP-015, RN-GRP-016 | L | L |
| RF-GRP-015 | Impedir acesso a mensagens e anexos enviados enquanto o usuário esteve removido do grupo. | CA-GRP-018 | L | RN-GRP-004, RN-GRP-015, RN-GRP-016 | L | L |
| RF-GRP-016 | Aplicar a restrição de readição no servidor, inclusive em consultas, sincronização e download. | CA-GRP-017, CA-GRP-019 | L | RN-GRP-004, RN-GRP-014, RN-GRP-015, RN-GRP-016 | L | L |
| RF-GRP-017 | Impedir saída voluntária de Funcionários dos grupos. | CA-GRP-020 | L | RN-GRP-001 | L | L |
| RF-MSG-001 | Enviar mensagens de texto em conversas autorizadas. | CA-MSG-001 | L | RN-MSG-001, RN-MSG-002 | L | L |
| RF-MSG-002 | Receber mensagens de texto de conversas autorizadas. | CA-MSG-002 | L | RN-MSG-002 | L | L |
| RF-MSG-003 | Associar anexos autorizados a mensagens. | CA-MSG-003 | L | RN-MSG-005 | L | L |
| RF-MSG-004 | Armazenar mensagens no servidor. | CA-MSG-004 | L | L | L | L |
| RF-MSG-005 | Permitir ao autor excluir sua mensagem para todos sem prazo limite. | CA-MSG-005 | L | RN-MSG-001, RN-MSG-003 | L | L |
| RF-MSG-006 | Permitir a Administrador excluir qualquer mensagem apenas em conversas às quais já tem acesso. | CA-MSG-006 | L | L | L | L |
| RF-MSG-007 | Excluir anexos associados a mensagens excluídas. | CA-MSG-007 | L | L | L | L |
| RF-MSG-008 | Enfileirar textos e arquivos enviados offline de modo persistente. | CA-MSG-008 | L | RN-MSG-004, RN-MSG-005 | L | L |
| RF-MSG-009 | Enviar fila automaticamente ao reconectar, respeitando ordem. | CA-MSG-009 | L | RN-MSG-004, RN-MSG-005 | L | L |
| RF-MSG-010 | Realizar no máximo três tentativas automáticas por item com falha. | CA-MSG-010 | L | RN-MSG-004 | L | L |
| RF-MSG-011 | Permitir retomada manual da fila após falha. | CA-MSG-011 | L | RN-MSG-004 | L | L |
| RF-MSG-012 | Evitar duplicidade de mensagens em reenvios. | CA-MSG-012 | L | L | L | L |
| RF-MSG-013 | Alertar antes de logout com fila pendente e descartá-la após confirmação. | CA-MSG-013 | L | L | L | L |
| RF-MSG-014 | Informar falha de envio ao usuário. | CA-MSG-014 | L | L | L | L |
| RF-ARQ-001 | Autorizar acesso a cada anexo no servidor antes de emitir link. | CA-ARQ-001 | L | RN-ARQ-004 | L | L |
| RF-ARQ-002 | Emitir link temporário de download com validade de cinco minutos. | CA-ARQ-002 | L | RN-ARQ-004 | L | L |
| RF-ARQ-003 | Bloquear novos links imediatamente após revogação de permissão. | CA-ARQ-003 | L | RN-ARQ-004 | L | L |
| RF-ARQ-004 | Permitir que link já emitido permaneça utilizável até expirar, mesmo após revogação. | CA-ARQ-004 | L | RN-ARQ-004 | L | L |
| RF-ARQ-005 | Permitir continuidade de transferência ativa após expiração do link, se ininterrupta. | CA-ARQ-005 | L | RN-ARQ-004 | L | L |
| RF-ARQ-006 | Analisar segurança do anexo antes de liberá-lo. | CA-ARQ-006 | L | RN-ARQ-002 | L | L |
| RF-ARQ-007 | Manter anexo pendente quando serviço de análise estiver indisponível. | CA-ARQ-007 | L | RN-ARQ-003 | L | L |
| RF-ARQ-008 | Repetir análise pendente a cada cinco minutos. | CA-ARQ-008 | L | RN-ARQ-003 | L | L |
| RF-ARQ-009 | Encerrar tentativas após no máximo 24 horas desde recebimento no servidor. | CA-ARQ-009 | L | RN-ARQ-003, RN-ARQ-006 | L | L |
| RF-ARQ-010 | Parar novas tentativas assim que a análise concluir. | CA-ARQ-010 | L | RN-ARQ-003 | L | L |
| RF-ARQ-011 | Notificar remetente quando prazo de análise expirar. | CA-ARQ-011 | L | RN-ARQ-006 | L | L |
| RF-ARQ-012 | Executar tentativas de análise no servidor mesmo com app fechado. | CA-ARQ-012 | L | RN-ARQ-003 | L | L |
| RF-ARQ-013 | Permitir reenvio manual após expiração, com nova análise. | CA-ARQ-013 | L | L | L | L |
| RF-ARQ-014 | Detectar interrupção de download. | CA-ARQ-014 | L | RN-ARQ-005 | L | L |
| RF-ARQ-015 | Informar usuário sobre interrupção de download. | CA-ARQ-015 | L | RN-ARQ-005 | L | L |
| RF-ARQ-016 | Permitir reinício manual desde o primeiro byte. | CA-ARQ-016 | L | RN-ARQ-005 | L | L |
| RF-ARQ-017 | Revalidar permissão antes de reiniciar download. | CA-ARQ-017 | L | RN-ARQ-005 | L | L |
| RF-ARQ-018 | Emitir novo link temporário para reinício. | CA-ARQ-018 | L | RN-ARQ-005 | L | L |
| RF-ARQ-019 | Descartar dados parciais de download interrompido. | CA-ARQ-019 | L | RN-ARQ-005 | L | L |
| RF-ARQ-020 | Disponibilizar arquivo apenas após download integral. | CA-ARQ-020 | L | RN-ARQ-005 | L | L |
| RF-ARQ-021 | Validar assinatura e estrutura real do arquivo no servidor. | CA-ARQ-021 | L | RN-ARQ-001, RN-ARQ-002 | L | L |
| RF-ARQ-022 | Validar tipo e tamanho do anexo. | CA-ARQ-022 | L | RN-ARQ-001 | L | L |
| RF-ARQ-023 | Armazenar anexos aprovados em armazenamento privado. | CA-ARQ-023 | L | L | L | L |
| RF-ARQ-024 | Bloquear acesso de destinatários a arquivos pendentes ou rejeitados. | CA-ARQ-024 | L | RN-ARQ-002 | L | L |
| RF-ARQ-025 | Eliminar cópias temporárias rejeitadas ou expiradas, com nova tentativa de limpeza se necessário. | CA-ARQ-025 | L | RN-ARQ-006 | L | L |
| RF-ARQ-026 | Permitir nova seleção de arquivo local para reenvio após falha. | CA-ARQ-026 | L | L | L | L |
| RF-ARQ-027 | Informar falta de espaço local ao baixar arquivo. | CA-ARQ-027 | L | L | L | L |
| RF-NOT-001 | Solicitar notificação de nova mensagem individual. | CA-NOT-001 | L | RN-NOT-001 | L | L |
| RF-NOT-002 | Solicitar notificação de nova mensagem em grupo. | CA-NOT-002 | L | RN-NOT-001 | L | L |
| RF-NOT-003 | Solicitar notificação de novo aviso ou lembrete. | CA-NOT-003 | L | RN-NOT-001, RN-NOT-002 | L | L |
| RF-NOT-004 | Manter conteúdo acessível no aplicativo independentemente da exibição do push. | CA-NOT-004 | L | RN-NOT-001, RN-NOT-003 | L | L |
| RF-AVI-001 | Permitir apenas a Administradores criar e enviar avisos imediatamente. | CA-AVI-001 | L | RN-AVI-002 | L | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-002 | Permitir selecionar destinatários específicos no envio. | CA-AVI-002 | L | RN-AVI-001 | L | L |
| RF-AVI-003 | Permitir texto de até 2.000 caracteres e opcionalmente um anexo. | CA-AVI-003 | L | RN-AVI-002 | L | L |
| RF-AVI-004 | Exigir texto ou um anexo; impedir aviso vazio. | CA-AVI-004 | L | L | L | L |
| RF-AVI-005 | Restringir a um anexo PDF ou JPEG por aviso. | CA-AVI-005 | L | L | L | L |
| RF-AVI-006 | Disponibilizar aviso no histórico dos destinatários. | CA-AVI-006 | L | L | L | L |
| RF-AVI-007 | Permitir exclusão individual online por destinatário. | CA-AVI-007 | L | RN-AVI-005 | L | L |
| RF-AVI-008 | Permitir edição online somente pelo autor original. | CA-AVI-008 | L | RN-AVI-003, RN-AVI-005, RN-AVI-007, RN-AVI-009 | L | L |
| RF-AVI-009 | Permitir exclusão global online somente pelo autor original após confirmação. | CA-AVI-009 | L | RN-AVI-006, RN-AVI-007 | L | L |
| RF-AVI-010 | Disponibilizar aba Avisos Enviados para todos os Administradores. | CA-AVI-010 | L | RN-AVI-007 | L | L |
| RF-AVI-011 | Permitir somente ao autor consultar a lista completa de destinatários. | CA-AVI-011 | L | RN-AVI-001 | L | L |
| RF-AVI-012 | Validar versão ao salvar edição e rejeitar alteração desatualizada. | CA-AVI-012 | L | RN-AVI-003, RN-AVI-008, RN-AVI-009 | L | L |
| RF-AVI-013 | Preservar formulário preenchido após falha online enquanto tela permanecer aberta. | CA-AVI-013 | L | RN-AVI-004, RN-AVI-008 | L | L |
| RF-AVI-014 | Solicitar confirmação antes de descartar alterações não salvas. | CA-AVI-014 | L | L | L | L |
| RF-AVI-015 | Bloquear criar, editar ou excluir avisos offline. | CA-AVI-015 | L | RN-AVI-004 | L | L |
| RF-AVI-016 | Permitir ao autor substituir anexo na edição, sujeito à nova análise. | CA-AVI-016 | L | L | L | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-SINC-001 | Exibir imediatamente dados previamente carregados no cache. | CA-SINC-001 | L | RN-SINC-001, RN-SINC-004, RN-SINC-007 | L | L |
| RF-SINC-002 | Sincronizar histórico aberto automaticamente ao obter conexão. | CA-SINC-002 | L | RN-SINC-001, RN-SINC-005 | L | L |
| RF-SINC-003 | Sincronizar histórico aberto ao retornar ao primeiro plano. | CA-SINC-003 | L | RN-SINC-001, RN-SINC-005 | L | L |
| RF-SINC-004 | Permitir pull-to-refresh nos históricos de avisos. | CA-SINC-004 | L | RN-SINC-005 | L | L |
| RF-SINC-005 | Paginar históricos de avisos em 20 registros. | CA-SINC-005 | L | RN-SINC-002 | L | L |
| RF-SINC-006 | Carregar páginas seguintes ao rolar. | CA-SINC-006 | L | RN-SINC-002 | L | L |
| RF-SINC-007 | Deduplicar registros durante sincronização e paginação. | CA-SINC-007 | L | L | L | L |
| RF-SINC-008 | Preservar cache existente quando atualização falhar. | CA-SINC-008 | L | L | L | L |
| RF-SINC-009 | Exibir data e hora da última sincronização bem-sucedida após erro. | CA-SINC-009 | L | RN-SINC-003 | L | L |
| RF-SINC-010 | Permitir tentar novamente após falha de atualização. | CA-SINC-010 | L | L | L | L |
| RF-SINC-011 | Disponibilizar textos e avisos previamente carregados offline. | CA-SINC-011 | L | RN-SINC-004 | L | L |
| RF-SINC-012 | Disponibilizar offline anexos previamente baixados. | CA-SINC-012 | L | RN-SINC-004, RN-SINC-006, RN-SINC-007 | L | L |
| RF-SINC-013 | Permitir remover anexos do cache local sem apagar servidor. | CA-SINC-013 | L | RN-SINC-006 | L | L |
| RF-SINC-014 | Aplicar exclusões remotas ao cache na sincronização. | CA-SINC-014 | L | RN-SINC-001 | L | L |
| RF-SINC-015 | Limpar cache e dados de sincronização ao fazer logout. | CA-SINC-015 | L | RN-SINC-004, RN-SINC-007 | L | L |
| RF-AUD-001 | Registrar criação e exclusão de contas por Administradores. | CA-AUD-001 | L | RN-AUD-001, RN-AUD-004, RN-AUD-005 | L | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUD-002 | Registrar criação e exclusão de grupos. | CA-AUD-002 | L | RN-AUD-001, RN-AUD-005 | L | L |
| RF-AUD-003 | Registrar adição e remoção de membros de grupos. | CA-AUD-003 | L | RN-AUD-001, RN-AUD-005 | L | L |
| RF-AUD-004 | Registrar exclusão de mensagens feita por Administradores. | CA-AUD-004 | L | RN-AUD-001, RN-AUD-005 | L | L |
| RF-AUD-005 | Registrar criação, edição e exclusão global de avisos. | CA-AUD-005 | L | RN-AUD-001, RN-AUD-005 | L | L |
| RF-AUD-006 | Permitir consulta de auditoria somente por Administradores. | CA-AUD-006 | L | RN-AUD-003 | L | L |
| RF-AUD-007 | Permitir filtros por período, ação e Administrador responsável. | CA-AUD-007 | L | RN-AUD-003 | L | L |
| RF-AUD-008 | Exibir registros do mais recente para o mais antigo. | CA-AUD-008 | L | RN-AUD-003 | L | L |
| RF-AUD-009 | Excluir registros após retenção de um ano. | CA-AUD-009 | L | RN-AUD-002, RN-AUD-004 | L | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RNF-SEG-001 | Proteger comunicação em trânsito com TLS 1.2 ou superior. | CA-NF-001 | L | RN-INF-001 | L | L |
| RNF-SEG-002 | Aplicar autenticação e autorização no servidor em todos os recursos. | CA-NF-002 | L | RN-INF-002 | L | L |
| RNF-SEG-003 | Proteger cache local com isolamento do sistema operacional. | CA-NF-003 | L | L | L | L |
| RNF-DES-004 | Disponibilizar mensagens de texto em até 1 segundo com 100 usuários simultâneos em condições normais. | CA-NF-004 | L | RN-INF-007 | L | [#101](https://github.com/Asa-3/App.cef/issues/101) |
| RNF-DISP-005 | Garantir disponibilidade mensal mínima de 99,9%, excluída manutenção programada. | CA-NF-005 | L | RN-INF-006 | L | L |
| RNF-REC-006 | Garantir RTO de no máximo 30 minutos. | CA-NF-006 | L | RN-INF-005 | L | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| RNF-REC-007 | Garantir RPO de no máximo 24 horas. | CA-NF-007 | L | RN-INF-005 | L | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| RNF-BKP-008 | Executar backup válido pelo menos diariamente. | CA-NF-008 | L | RN-INF-003 | L | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| RNF-BKP-009 | Reter backups por 30 dias. | CA-NF-009 | L | RN-INF-003 | L | L |
| RNF-BKP-010 | Armazenar backups fora do ambiente produtivo. | CA-NF-010 | L | RN-INF-003 | L | L |
| RNF-BKP-011 | Testar restauração mensalmente fora da produção. | CA-NF-011 | L | RN-INF-004 | L | [#99](https://github.com/Asa-3/App.cef/issues/99) |

## 4. RN

| ID | Regra | RF/RNF (P) | DEC/CON (E) | Issue literal (E) |
|---|---|---|---|---|
| RN-AUT-001 | Identificador de login é único e permanente por conta. | RF-AUT-001 | L | [#90](https://github.com/Asa-3/App.cef/issues/90) |
| RN-AUT-002 | Somente o Administrador cria a conta e fornece senha inicial. | RF-AUT-002, RF-AUT-003 | L | L |
| RN-AUT-003 | E-mail de recuperação é obrigatório e precisa ser confirmado. | RF-AUT-006, RF-AUT-010 | DEC-M01-004, DEC-M01-006, DEC-M01-007, DEC-M01-018, DEC-M01-019, CON-M01-017 | L |
| RN-AUT-004 | Bloqueio e revogação são aplicados pelo servidor. | RF-AUT-014, RF-AUT-015, RF-AUT-016 | L | L |
| RN-AUT-005 | Links de recuperação e de troca de dispositivo expiram em 15 minutos. | RF-AUT-007, RF-AUT-008, RF-AUT-012 | DEC-M01-005, CON-M01-018, CON-M01-019 | L |
| RN-USR-001 | A exclusão de conta é irreversível. | RF-USR-009, RF-USR-010, RF-USR-017 | L | L |
| RN-USR-002 | O nome histórico preservado corresponde ao último nome completo registrado antes da exclusão. | RF-USR-013, RF-USR-014, RF-USR-015 | L | L |
| RN-USR-003 | A preservação de autoria não mantém conta ativa. | RF-USR-010, RF-USR-016, RF-USR-018 | L | L |
| RN-USR-004 | A retenção de dados históricos deverá ser revisada quanto à finalidade, necessidade e LGPD. | RF-USR-011, RF-USR-012, RF-USR-013, RF-USR-014, RF-USR-015, RF-USR-016, RF-USR-019 | L | L |
| RN-CON-001 | Cada usuário administra apenas sua lista. | RF-CON-001, RF-CON-002, RF-CON-003, RF-CON-004 | L | L |
| RN-CON-002 | Apelidos locais não alteram perfis globais. | RF-CON-003 | L | L |
| RN-CON-003 | Remover contato não exclui conversa ou mensagens. | RF-CON-004 | L | L |
| RN-CVI-001 | Conversa individual possui exatamente dois participantes. | RF-CVI-001, RF-CVI-002, RF-CVI-003 | L | L |
| RN-CVI-002 | Envio/exclusão de mensagens são definidos em M06. | RF-CVI-002, RF-CVI-004 | L | L |
| RN-CVI-003 | Anexos são definidos em M07; sincronização em M10. | RF-CVI-002 | L | L |
| RN-GRP-001 | Somente Administradores criam, administram e excluem grupos. | RF-GRP-001, RF-GRP-002, RF-GRP-003, RF-GRP-004, RF-GRP-005, RF-GRP-017 | L | L |
| RN-GRP-002 | Novo integrante não vê mensagens nem anexos anteriores à entrada. | RF-GRP-008, RF-GRP-009, RF-GRP-010, RF-GRP-011 | L | L |
| RN-GRP-003 | Exclusão de grupo é irreversível e apaga mensagens e anexos. | RF-GRP-005, RF-GRP-006 | L | L |
| RN-GRP-004 | Após remoção e readição, o acesso é reiniciado: conteúdos anteriores à última entrada não são recuperáveis pelo integrante readicionado. | RF-GRP-012, RF-GRP-013, RF-GRP-014, RF-GRP-015, RF-GRP-016 | L | L |
| RN-GRP-012 | Cada readição inicia novo período de participação. | RF-GRP-012 | L | L |
| RN-GRP-013 | O horário de início do novo período é definido pelo servidor. | RF-GRP-008, RF-GRP-012 | L | L |
| RN-GRP-014 | A readição não restaura permissões de períodos anteriores. | RF-GRP-013, RF-GRP-014, RF-GRP-016 | L | L |
| RN-GRP-015 | Somente mensagens e anexos enviados a partir da nova entrada podem ser consultados pelo readicionado. | RF-GRP-013, RF-GRP-014, RF-GRP-015, RF-GRP-016 | L | L |
| RN-GRP-016 | O histórico anterior permanece armazenado para demais participantes autorizados, sem ser recuperado pelo readicionado. | RF-GRP-014, RF-GRP-015, RF-GRP-016 | L | L |
| RN-MSG-001 | Não existe edição de mensagens enviadas. | RF-MSG-001, RF-MSG-005 | L | L |
| RN-MSG-002 | Não há indicadores de entregue ou lido. | RF-MSG-001, RF-MSG-002 | L | L |
| RN-MSG-003 | Não há exclusão integral de conversa individual. | RF-MSG-005 | L | L |
| RN-MSG-004 | Não se permite cancelar individualmente item da fila offline. | RF-MSG-008, RF-MSG-009, RF-MSG-010, RF-MSG-011 | L | L |
| RN-MSG-005 | Fila offline é diferente de anexo já recebido pelo servidor aguardando análise. | RF-MSG-003, RF-MSG-008, RF-MSG-009 | L | L |
| RN-ARQ-001 | Apenas PDF até 2 GB e JPEG até 20 MB. | RF-ARQ-021, RF-ARQ-022 | L | L |
| RN-ARQ-002 | Assinatura, estrutura e análise de segurança são verificadas no servidor. | RF-ARQ-006, RF-ARQ-021, RF-ARQ-024 | L | L |
| RN-ARQ-003 | Análise indisponível: repetir a cada cinco minutos até 24 horas, sem processamento simultâneo do mesmo anexo. | RF-ARQ-007, RF-ARQ-008, RF-ARQ-009, RF-ARQ-010, RF-ARQ-012 | L | L |
| RN-ARQ-004 | Links temporários duram cinco minutos; revogação bloqueia novos links, não necessariamente os emitidos. | RF-ARQ-001, RF-ARQ-002, RF-ARQ-003, RF-ARQ-004, RF-ARQ-005 | L | L |
| RN-ARQ-005 | Download interrompido recomeça desde o início, com nova autorização e novo link. | RF-ARQ-014, RF-ARQ-015, RF-ARQ-016, RF-ARQ-017, RF-ARQ-018, RF-ARQ-019, RF-ARQ-020 | L | L |
| RN-ARQ-006 | Falha por expiração elimina cópia temporária e preserva apenas metadados mínimos. | RF-ARQ-009, RF-ARQ-011, RF-ARQ-025 | L | L |
| RN-NOT-001 | Apresentação de push depende do sistema operacional, rede e permissões. | RF-NOT-001, RF-NOT-002, RF-NOT-003, RF-NOT-004 | L | L |
| RN-NOT-002 | Edição de aviso não dispara novo push. | RF-NOT-003 | L | L |
| RN-NOT-003 | Não há confirmação de leitura. | RF-NOT-004 | L | L |
| RN-AVI-001 | Destinatários são fixados no envio. | RF-AVI-002, RF-AVI-011 | L | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-AVI-002 | Sem título e sem agendamento. | RF-AVI-001, RF-AVI-003 | L | L |
| RN-AVI-003 | Edição mantém data e posição originais, sem indicador de edição nem novo push. | RF-AVI-008, RF-AVI-012 | L | L |
| RN-AVI-004 | Não há novas tentativas automáticas após falha de criação/edição/exclusão. | RF-AVI-013, RF-AVI-015 | L | L |
| RN-AVI-005 | Exclusão individual não é revertida por edição posterior. | RF-AVI-007, RF-AVI-008 | L | L |
| RN-AVI-006 | Exclusão global remove aviso e anexo de todos os históricos e caches na sincronização, sem marcador. | RF-AVI-009 | L | L |
| RN-AVI-007 | Autor excluído: aviso histórico somente leitura. | RF-AVI-008, RF-AVI-009, RF-AVI-010 | L | L |
| RN-AVI-008 | Conflito de versão exige revisão manual, sem mesclagem automática. | RF-AVI-012, RF-AVI-013 | L | L |
| RN-AVI-009 | Se aviso foi excluído durante edição, salvamento não pode recriá-lo. | RF-AVI-008, RF-AVI-012 | L | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-SINC-001 | Servidor é fonte de verdade. | RF-SINC-001, RF-SINC-002, RF-SINC-003, RF-SINC-014 | L | L |
| RN-SINC-002 | Históricos de avisos ordenados do mais recente ao mais antigo. | RF-SINC-005, RF-SINC-006 | L | L |
| RN-SINC-003 | Horário de última sincronização é independente para avisos recebidos e enviados. | RF-SINC-009 | L | L |
| RN-SINC-004 | Cache permanece até logout ou exclusão da conta, sujeito à sincronização. | RF-SINC-001, RF-SINC-011, RF-SINC-012, RF-SINC-015 | L | L |
| RN-SINC-005 | Não executar sincronizações equivalentes simultaneamente. | RF-SINC-002, RF-SINC-003, RF-SINC-004 | L | L |
| RN-SINC-006 | Anexo removido apenas localmente pode ser baixado sob demanda. | RF-SINC-012, RF-SINC-013 | L | L |
| RN-SINC-007 | Isolamento de cache pelo sistema operacional; sem criptografia adicional própria. | RF-SINC-001, RF-SINC-012, RF-SINC-015 | L | L |
| RN-AUD-001 | Registro inclui responsável histórico, instante, tipo, alvo e resultado, sem conteúdo de mensagens/avisos. | RF-AUD-001, RF-AUD-002, RF-AUD-003, RF-AUD-004, RF-AUD-005 | L | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RN-AUD-002 | Registros são imutáveis por um ano. | RF-AUD-009 | L | L |
| RN-AUD-003 | Sem exportação pela interface. | RF-AUD-006, RF-AUD-007, RF-AUD-008 | L | L |
| RN-AUD-004 | Excluir conta não apaga antecipadamente auditoria. | RF-AUD-001, RF-AUD-009 | L | L |
| RN-AUD-005 | Registrar falhas administrativas relevantes sem registrar segredos. | RF-AUD-001, RF-AUD-002, RF-AUD-003, RF-AUD-004, RF-AUD-005 | L | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RN-INF-001 | Usar TLS 1.2 ou superior. | RNF-SEG-001 | L | L |
| RN-INF-002 | Autorização deve ser aplicada no servidor, inclusive para acesso direto a arquivos. | RNF-SEG-002 | L | L |
| RN-INF-003 | Backup diário e retenção de 30 dias em ambiente separado. | RNF-BKP-008, RNF-BKP-009, RNF-BKP-010 | L | L |
| RN-INF-004 | Teste mensal de restauração fora da produção. | RNF-BKP-011 | L | L |
| RN-INF-005 | RPO ≤ 24 horas e RTO ≤ 30 minutos. | RNF-REC-006, RNF-REC-007 | L | L |
| RN-INF-006 | Disponibilidade mensal ≥ 99,9% excluída manutenção programada. | RNF-DISP-005 | L | L |
| RN-INF-007 | Tempo de visibilidade de mensagem de texto ≤ 1 segundo com 100 usuários simultâneos em condições normais. | RNF-DES-004 | L | L |
| RN-AUT-006 | Primeiro acesso obrigatório na ordem: preencher perfil, trocar senha inicial e confirmar e-mail de recuperação, antes de liberar funções protegidas. | RF-AUT-002, RF-AUT-003 | CON-M01-016 | L |
| RN-AUT-007 | Preservar progresso do primeiro acesso entre interrupções, reinicializações e reinstalações. | RF-AUT-002, RF-AUT-003 | CON-M01-016 | L |
| RN-AUT-008 | Senhas têm no mínimo oito caracteres, sem exigência de combinação de categorias. | RF-AUT-004 | L | L |
| RN-AUT-009 | Troca de senha autenticada dispensa senha anterior, requer confirmação no e-mail confirmado e revoga todas as sessões após conclusão. | RF-AUT-005, RF-AUT-009 | CON-M01-007, CON-M01-009 | L |
| RN-AUT-010 | Recuperação regular usa e-mail confirmado; excepcional requer verificação de identidade pela TI e aprovação do Administrador; revogação ocorre após conclusão. | RF-AUT-006, RF-AUT-009 | CON-M01-002, CON-M01-006, CON-M01-007 | L |
| RN-AUT-011 | Mudança regular do e-mail exige confirmação do endereço atual e do novo e preserva sessão; excepcional exige TI, Administrador e confirmação do novo e revoga após conclusão. | RF-AUT-010 | CON-M01-003, CON-M01-005, CON-M01-006, CON-M01-008, CON-M01-009, CON-M01-017 | L |
| RN-AUT-012 | Uma única sessão autorizada por conta; durante transferência, a origem permanece autorizada até troca atômica; revogação detectada exige limpeza. | RF-AUT-011, RF-AUT-013 | CON-M01-004, CON-M01-013, CON-M01-014, CON-M01-015 | L |
| RN-AUT-013 | Transferência requer link ao e-mail confirmado, válido por 15 minutos e uso único; nova emissão invalida anteriores; destino fica autorizado após confirmação sem redigitar credenciais. | RF-AUT-012, RF-AUT-013 | CON-M01-004, CON-M01-005, CON-M01-010, CON-M01-013, CON-M01-016 | L |
| RN-AUT-014 | Cinco senhas erradas consecutivas entre dispositivos acionam bloqueio de login de 60 segundos e revogação de sessões; recuperação não encerra bloqueio. | RF-AUT-014, RF-AUT-015, RF-AUT-016 | CON-M01-010, CON-M01-011 | L |
| RN-AUT-015 | Sessão persiste ao fechar aplicativo; acesso offline local exige desbloqueio do dispositivo, não tem prazo fixo e requer revalidação ao reconectar. | RF-AUT-017 | CON-M01-012 | L |
| RN-AUT-016 | Logout e revogação detectada removem credenciais, mensagens, cache de PDF/JPEG e fila pendente; operações remotas exigem validação da sessão. | RF-AUT-018, RF-AUT-009, RF-AUT-013, RF-AUT-015 | CON-M01-001, CON-M01-011, CON-M01-012, CON-M01-014, CON-M01-015 | L |

## 5. CA e CA-NF

| ID | Critério | RF/RNF | Teste proposto | Evidência |
|---|---|---|---|---|
| CA-AUT-001 | Credenciais válidas autenticam; inválidas são recusadas. | RF-AUT-001 (E) | CT-P-AUT-001 | Não verificada |
| CA-AUT-002 | Acesso às demais funções é bloqueado até trocar a senha. | RF-AUT-002 (E) | CT-P-AUT-002 | Não verificada |
| CA-AUT-003 | Sem nome completo, cargo e setor, acesso funcional permanece bloqueado. | RF-AUT-003 (E) | CT-P-AUT-003 | Não verificada |
| CA-AUT-004 | Senha com sete caracteres é recusada; com oito ou mais passa nessa regra. | RF-AUT-004 (E) | CT-P-AUT-004 | Não verificada |
| CA-AUT-005 | Troca válida revoga sessões existentes e exige nova autenticação. | RF-AUT-005 (E) | CT-P-AUT-005 | Não verificada |
| CA-AUT-006 | Solicitação válida envia link ao e-mail confirmado. | RF-AUT-006 (E) | CT-P-AUT-006 | Não verificada |
| CA-AUT-007 | Link usado ou expirado é rejeitado. | RF-AUT-007 (E) | CT-P-AUT-007 | Não verificada |
| CA-AUT-008 | Somente o link mais recente pode ser usado. | RF-AUT-008 (E) | CT-P-AUT-008 | Não verificada |
| CA-AUT-009 | Sessões anteriores não autorizam novas operações. | RF-AUT-009 (E) | CT-P-AUT-009 | Não verificada |
| CA-AUT-010 | Novo endereço só substitui o anterior após confirmação. | RF-AUT-010 (E) | CT-P-AUT-010 | Não verificada |
| CA-AUT-011 | Não permanecem duas sessões simultaneamente autorizadas. | RF-AUT-011 (E) | CT-P-AUT-011 | Não verificada |
| CA-AUT-012 | Sem confirmação, novo dispositivo não recebe sessão ativa. | RF-AUT-012 (E) | CT-P-AUT-012 | Não verificada |
| CA-AUT-013 | Dispositivo antigo perde autorização. | RF-AUT-013 (E) | CT-P-AUT-013 | Não verificada |
| CA-AUT-014 | Cinco senhas incorretas consecutivas acionam bloqueio. | RF-AUT-014 (E) | CT-P-AUT-014 | Não verificada |
| CA-AUT-015 | Tentativa durante bloqueio é rejeitada mesmo após reiniciar o app. | RF-AUT-015 (E) | CT-P-AUT-015 | Não verificada |
| CA-AUT-016 | Após prazo, login válido funciona; falhas anteriores não permanecem no contador. | RF-AUT-016 (E) | CT-P-AUT-016 | Não verificada |
| CA-AUT-017 | Reabertura não exige novo login com sessão válida. | RF-AUT-017 (E) | CT-P-AUT-017 | Não verificada |
| CA-AUT-018 | Credenciais de sessão e cache deixam de estar disponíveis. | RF-AUT-018 (E) | CT-P-AUT-018 | Não verificada |
| CA-USR-001 | Funcionário tentando criar conta recebe acesso negado. | RF-USR-001 (E) | CT-P-USR-001 | Não verificada |
| CA-USR-002 | Nome duplicado é recusado e nome existente não pode ser alterado. | RF-USR-002 (E) | CT-P-USR-002 | Não verificada |
| CA-USR-003 | Conta criada possui credencial inicial para primeiro acesso. | RF-USR-003 (E) | CT-P-USR-003 | Não verificada |
| CA-USR-004 | Ausência de qualquer campo obrigatório impede conclusão. | RF-USR-004 (E) | CT-P-USR-004 | Não verificada |
| CA-USR-005 | Tentativas de alteração posteriores são recusadas. | RF-USR-005 (E) | CT-P-USR-005 | Não verificada |
| CA-USR-006 | Edição do titular persiste; terceiros são bloqueados. | RF-USR-006 (E) | CT-P-USR-006 | Não verificada |
| CA-USR-007 | Ambos os perfis conseguem consultar ambas as abas. | RF-USR-007 (E) | CT-P-USR-007 | Não verificada |
| CA-USR-008 | Outro usuário não altera o perfil. | RF-USR-008 (E) | CT-P-USR-008 | Não verificada |
| CA-USR-009 | Exclusão autorizada remove acesso; verificação é registrada no procedimento operacional. | RF-USR-009 (E) | CT-P-USR-009 | Não verificada |
| CA-USR-010 | Token anterior e novo login são recusados. | RF-USR-010 (E) | CT-P-USR-010 | Não verificada |
| CA-USR-011 | Mensagem anterior permanece em conversa autorizada. | RF-USR-011 (E) | CT-P-USR-011 | Não verificada |
| CA-USR-012 | Aviso continua visível aos destinatários, sem edição pelo autor excluído. | RF-USR-012 (E) | CT-P-USR-012 | Não verificada |
| CA-USR-013 | Nome exibido não vira “Usuário excluído”. | RF-USR-013 (E) | CT-P-USR-013 | Não verificada |
| CA-USR-014 | Aviso mantém nome original após exclusão. | RF-USR-014 (E) | CT-P-USR-014 | Não verificada |
| CA-USR-015 | Consulta autorizada mantém autoria por um ano. | RF-USR-015 (E) | CT-P-USR-015 | Não verificada |
| CA-USR-016 | Remoção da conta não causa perda de referências históricas. | RF-USR-016 (E) | CT-P-USR-016 | Não verificada |
| CA-USR-017 | Conta antiga não é reativada. | RF-USR-017 (E) | CT-P-USR-017 | Não verificada |
| CA-USR-018 | Mensagens antigas não passam a pertencer à conta nova. | RF-USR-018 (E) | CT-P-USR-018 | Não verificada |
| CA-USR-019 | Aviso histórico permanece somente para leitura. | RF-USR-019 (E) | CT-P-USR-019 | Não verificada |
| CA-CON-001 | Titular vê somente sua lista. | RF-CON-001 (E) | CT-P-CON-001 | Não verificada |
| CA-CON-002 | Usuário válido aparece na lista. | RF-CON-002 (E) | CT-P-CON-002 | Não verificada |
| CA-CON-003 | Apelido só muda na lista do titular. | RF-CON-003 (E) | CT-P-CON-003 | Não verificada |
| CA-CON-004 | Contato desaparece sem excluir mensagens. | RF-CON-004 (E) | CT-P-CON-004 | Não verificada |
| CA-CON-005 | Busca parcial retorna correspondências autorizadas. | RF-CON-005 (E) | CT-P-CON-005 | Não verificada |
| CA-CVI-001 | Dois usuários ativos iniciam conversa sem aceite prévio. | RF-CVI-001 (E) | CT-P-CVI-001 | Não verificada |
| CA-CVI-002 | Participante vê histórico; terceiro recebe acesso negado. | RF-CVI-002 (E) | CT-P-CVI-002 | Não verificada |
| CA-CVI-003 | Requisição direta de terceiro é rejeitada. | RF-CVI-003 (E) | CT-P-CVI-003 | Não verificada |
| CA-CVI-004 | Não há comando de excluir conversa inteira. | RF-CVI-004 (E) | CT-P-CVI-004 | Não verificada |
| CA-GRP-001 | Funcionário recebe acesso negado. | RF-GRP-001 (E) | CT-P-GRP-001 | Não verificada |
| CA-GRP-002 | Inclusão autorizada registra novo período de participação. | RF-GRP-002 (E) | CT-P-GRP-002 | Não verificada |
| CA-GRP-003 | Remoção encerra período de participação. | RF-GRP-003 (E) | CT-P-GRP-003 | Não verificada |
| CA-GRP-004 | Administrador distinto do criador consegue gerenciar. | RF-GRP-004 (E) | CT-P-GRP-004 | Não verificada |
| CA-GRP-005 | Confirmação exclui; cancelamento preserva. | RF-GRP-005 (E) | CT-P-GRP-005 | Não verificada |
| CA-GRP-006 | Histórico e arquivos do grupo deixam de ser acessíveis. | RF-GRP-006 (E) | CT-P-GRP-006 | Não verificada |
| CA-GRP-007 | Integrante ativo envia e recebe conteúdo permitido. | RF-GRP-007 (E) | CT-P-GRP-007 | Não verificada |
| CA-GRP-008 | Cada inclusão/remoção gera marcos temporais. | RF-GRP-008 (E) | CT-P-GRP-008 | Não verificada |
| CA-GRP-009 | Novo integrante não acessa mensagens anteriores à entrada. | RF-GRP-009 (E) | CT-P-GRP-009 | Não verificada |
| CA-GRP-010 | Solicitação direta de arquivo anterior é rejeitada. | RF-GRP-010 (E) | CT-P-GRP-010 | Não verificada |
| CA-GRP-011 | Alterar cliente não contorna restrição. | RF-GRP-011 (E) | CT-P-GRP-011 | Não verificada |
| CA-GRP-013 | Usuário é removido e readicionado. — Registrar novo período de participação. | RF-GRP-012 (E) | CT-P-GRP-013 | Não verificada |
| CA-GRP-014 | Usuário readicionado abre histórico. — Exibir somente mensagens da nova entrada em diante. | RF-GRP-013 (E) | CT-P-GRP-014 | Não verificada |
| CA-GRP-015 | Usuário tenta acessar mensagem da primeira participação. — Negar acesso. | RF-GRP-014 (E) | CT-P-GRP-015 | Não verificada |
| CA-GRP-016 | Usuário tenta baixar anexo de período anterior. — Negar acesso. | RF-GRP-014 (E) | CT-P-GRP-016 | Não verificada |
| CA-GRP-018 | Usuário sincroniza histórico após readição. — Não restaurar mensagens de períodos anteriores ou de intervalo de remoção. | RF-GRP-015 (E) | CT-P-GRP-018 | Não verificada |
| CA-GRP-017 | Usuário readicionado recebe nova mensagem. — Permitir visualização. | RF-GRP-016 (E) | CT-P-GRP-017 | Não verificada |
| CA-GRP-019 | Usuário tenta consultar conteúdo antigo diretamente pela API. — Negar acesso no servidor. | RF-GRP-016 (E) | CT-P-GRP-019 | Não verificada |
| CA-GRP-020 | Funcionário não encontra ou não executa saída voluntária. | RF-GRP-017 (E) | CT-P-GRP-020 | Não verificada |
| CA-MSG-001 | Mensagem válida é persistida e disponibilizada. | RF-MSG-001 (E) | CT-P-MSG-001 | Não verificada |
| CA-MSG-002 | Destinatário autorizado obtém nova mensagem. | RF-MSG-002 (E) | CT-P-MSG-002 | Não verificada |
| CA-MSG-003 | Arquivo aprovado aparece associado à mensagem. | RF-MSG-003 (E) | CT-P-MSG-003 | Não verificada |
| CA-MSG-004 | Reabertura da conversa recupera mensagens não excluídas. | RF-MSG-004 (E) | CT-P-MSG-004 | Não verificada |
| CA-MSG-005 | Mensagem desaparece para todos após sincronização. | RF-MSG-005 (E) | CT-P-MSG-005 | Não verificada |
| CA-MSG-006 | Admin não participante é bloqueado. | RF-MSG-006 (E) | CT-P-MSG-006 | Não verificada |
| CA-MSG-007 | Arquivo deixa de estar disponível e é removido do armazenamento. | RF-MSG-007 (E) | CT-P-MSG-007 | Não verificada |
| CA-MSG-008 | Fechar/reabrir aplicativo preserva fila antes do logout. | RF-MSG-008 (E) | CT-P-MSG-008 | Não verificada |
| CA-MSG-009 | Itens seguem ordem original. | RF-MSG-009 (E) | CT-P-MSG-009 | Não verificada |
| CA-MSG-010 | Após terceira falha, fila para. | RF-MSG-010 (E) | CT-P-MSG-010 | Não verificada |
| CA-MSG-011 | Usuário aciona nova tentativa; processamento retoma. | RF-MSG-011 (E) | CT-P-MSG-011 | Não verificada |
| CA-MSG-012 | Falha de resposta não gera segunda mensagem. | RF-MSG-012 (E) | CT-P-MSG-012 | Não verificada |
| CA-MSG-013 | Cancelamento preserva fila; confirmação limpa fila. | RF-MSG-013 (E) | CT-P-MSG-013 | Não verificada |
| CA-MSG-014 | Erro é exibido sem informar envio bem-sucedido. | RF-MSG-014 (E) | CT-P-MSG-014 | Não verificada |
| CA-ARQ-001 | Usuário não autorizado não recebe link. | RF-ARQ-001 (E) | CT-P-ARQ-001 | Não verificada |
| CA-ARQ-002 | Link expira após cinco minutos. | RF-ARQ-002 (E) | CT-P-ARQ-002 | Não verificada |
| CA-ARQ-003 | Usuário removido não obtém novo link. | RF-ARQ-003 (E) | CT-P-ARQ-003 | Não verificada |
| CA-ARQ-004 | Link emitido antes da revogação não é prometido como revogado imediatamente. | RF-ARQ-004 (E) | CT-P-ARQ-004 | Não verificada |
| CA-ARQ-005 | Download iniciado no prazo pode terminar depois. | RF-ARQ-005 (E) | CT-P-ARQ-005 | Não verificada |
| CA-ARQ-006 | Arquivo não analisado permanece inacessível. | RF-ARQ-006 (E) | CT-P-ARQ-006 | Não verificada |
| CA-ARQ-007 | Destinatário não consegue acessar arquivo pendente. | RF-ARQ-007 (E) | CT-P-ARQ-007 | Não verificada |
| CA-ARQ-008 | Nova tentativa ocorre no intervalo estabelecido. | RF-ARQ-008 (E) | CT-P-ARQ-008 | Não verificada |
| CA-ARQ-009 | Arquivo não aprovado dentro do prazo falha. | RF-ARQ-009 (E) | CT-P-ARQ-009 | Não verificada |
| CA-ARQ-010 | Aprovação/rejeição não produz novas tentativas. | RF-ARQ-010 (E) | CT-P-ARQ-010 | Não verificada |
| CA-ARQ-011 | Remetente recebe estado de falha. | RF-ARQ-011 (E) | CT-P-ARQ-011 | Não verificada |
| CA-ARQ-012 | Processamento continua sem app aberto. | RF-ARQ-012 (E) | CT-P-ARQ-012 | Não verificada |
| CA-ARQ-013 | Nova submissão inicia processo independente. | RF-ARQ-013 (E) | CT-P-ARQ-013 | Não verificada |
| CA-ARQ-014 | Falha é reconhecida e não marcada como sucesso. | RF-ARQ-014 (E) | CT-P-ARQ-014 | Não verificada |
| CA-ARQ-015 | Interface apresenta erro. | RF-ARQ-015 (E) | CT-P-ARQ-015 | Não verificada |
| CA-ARQ-016 | Nova tentativa não usa offset anterior. | RF-ARQ-016 (E) | CT-P-ARQ-016 | Não verificada |
| CA-ARQ-017 | Revogação bloqueia reinício. | RF-ARQ-017 (E) | CT-P-ARQ-017 | Não verificada |
| CA-ARQ-018 | Não reutiliza link anterior. | RF-ARQ-018 (E) | CT-P-ARQ-018 | Não verificada |
| CA-ARQ-019 | Arquivo incompleto não fica disponível. | RF-ARQ-019 (E) | CT-P-ARQ-019 | Não verificada |
| CA-ARQ-020 | Arquivo incompleto não é aberto como concluído. | RF-ARQ-020 (E) | CT-P-ARQ-020 | Não verificada |
| CA-ARQ-021 | Extensão falsificada é recusada. | RF-ARQ-021 (E) | CT-P-ARQ-021 | Não verificada |
| CA-ARQ-022 | PDF acima de 2 GB e JPEG acima de 20 MB são rejeitados. | RF-ARQ-022 (E) | CT-P-ARQ-022 | Não verificada |
| CA-ARQ-023 | Arquivo não fica público por URL permanente. | RF-ARQ-023 (E) | CT-P-ARQ-023 | Não verificada |
| CA-ARQ-024 | Requisição direta não entrega arquivo. | RF-ARQ-024 (E) | CT-P-ARQ-024 | Não verificada |
| CA-ARQ-025 | Objeto temporário deixa de existir. | RF-ARQ-025 (E) | CT-P-ARQ-025 | Não verificada |
| CA-ARQ-026 | Nova submissão passa novamente por todas as validações. | RF-ARQ-026 (E) | CT-P-ARQ-026 | Não verificada |
| CA-ARQ-027 | Usuário recebe erro; arquivo incompleto não é disponibilizado. | RF-ARQ-027 (E) | CT-P-ARQ-027 | Não verificada |
| CA-NOT-001 | Evento válido aciona serviço de push. | RF-NOT-001 (E) | CT-P-NOT-001 | Não verificada |
| CA-NOT-002 | Evento para integrante autorizado aciona push. | RF-NOT-002 (E) | CT-P-NOT-002 | Não verificada |
| CA-NOT-003 | Destinatários definidos recebem solicitação de push. | RF-NOT-003 (E) | CT-P-NOT-003 | Não verificada |
| CA-NOT-004 | Push bloqueado não causa perda de mensagem. | RF-NOT-004 (E) | CT-P-NOT-004 | Não verificada |
| CA-AVI-001 | Funcionário é bloqueado; envio não é agendado. | RF-AVI-001 (E) | CT-P-AVI-001 | Não verificada |
| CA-AVI-002 | Somente selecionados recebem aviso. | RF-AVI-002 (E) | CT-P-AVI-002 | Não verificada |
| CA-AVI-003 | Texto acima do limite é recusado. | RF-AVI-003 (E) | CT-P-AVI-003 | Não verificada |
| CA-AVI-004 | Formulário sem ambos é rejeitado. | RF-AVI-004 (E) | CT-P-AVI-004 | Não verificada |
| CA-AVI-005 | Segundo anexo é recusado. | RF-AVI-005 (E) | CT-P-AVI-005 | Não verificada |
| CA-AVI-006 | Destinatário selecionado vê aviso. | RF-AVI-006 (E) | CT-P-AVI-006 | Não verificada |
| CA-AVI-007 | Exclusão afeta somente seu histórico. | RF-AVI-007 (E) | CT-P-AVI-007 | Não verificada |
| CA-AVI-008 | Outro administrador não consegue editar. | RF-AVI-008 (E) | CT-P-AVI-008 | Não verificada |
| CA-AVI-009 | Remoção afeta todos os históricos e anexo. | RF-AVI-009 (E) | CT-P-AVI-009 | Não verificada |
| CA-AVI-010 | Todos consultam avisos existentes. | RF-AVI-010 (E) | CT-P-AVI-010 | Não verificada |
| CA-AVI-011 | Outro admin não acessa lista. | RF-AVI-011 (E) | CT-P-AVI-011 | Não verificada |
| CA-AVI-012 | Conflito não sobrescreve alteração mais recente. | RF-AVI-012 (E) | CT-P-AVI-012 | Não verificada |
| CA-AVI-013 | Falha não apaga texto/anexo selecionado. | RF-AVI-013 (E) | CT-P-AVI-013 | Não verificada |
| CA-AVI-014 | Cancelar mantém formulário. | RF-AVI-014 (E) | CT-P-AVI-014 | Não verificada |
| CA-AVI-015 | Sem conexão, operação não é executada. | RF-AVI-015 (E) | CT-P-AVI-015 | Não verificada |
| CA-AVI-016 | Novo arquivo não é liberado sem aprovação. | RF-AVI-016 (E) | CT-P-AVI-016 | Não verificada |
| CA-SINC-001 | Histórico abre com dados locais sem aguardar rede. | RF-SINC-001 (E) | CT-P-SINC-001 | Não verificada |
| CA-SINC-002 | Novos dados são incorporados sem duplicação. | RF-SINC-002 (E) | CT-P-SINC-002 | Não verificada |
| CA-SINC-003 | Mudanças remotas são recuperadas. | RF-SINC-003 (E) | CT-P-SINC-003 | Não verificada |
| CA-SINC-004 | Gesto inicia atualização. | RF-SINC-004 (E) | CT-P-SINC-004 | Não verificada |
| CA-SINC-005 | Primeira página contém até 20. | RF-SINC-005 (E) | CT-P-SINC-005 | Não verificada |
| CA-SINC-006 | Próximos registros aparecem sem duplicação. | RF-SINC-006 (E) | CT-P-SINC-006 | Não verificada |
| CA-SINC-007 | Mesmo identificador aparece uma vez. | RF-SINC-007 (E) | CT-P-SINC-007 | Não verificada |
| CA-SINC-008 | Erro não esvazia histórico. | RF-SINC-008 (E) | CT-P-SINC-008 | Não verificada |
| CA-SINC-009 | Horário não muda em falha. | RF-SINC-009 (E) | CT-P-SINC-009 | Não verificada |
| CA-SINC-010 | Nova requisição é iniciada pelo usuário. | RF-SINC-010 (E) | CT-P-SINC-010 | Não verificada |
| CA-SINC-011 | Conteúdo cacheado abre sem rede. | RF-SINC-011 (E) | CT-P-SINC-011 | Não verificada |
| CA-SINC-012 | Arquivo local completo abre sem rede. | RF-SINC-012 (E) | CT-P-SINC-012 | Não verificada |
| CA-SINC-013 | Arquivo pode ser baixado novamente. | RF-SINC-013 (E) | CT-P-SINC-013 | Não verificada |
| CA-SINC-014 | Mensagem/aviso globalmente excluído some do cache. | RF-SINC-014 (E) | CT-P-SINC-014 | Não verificada |
| CA-SINC-015 | Dados locais não persistem após logout. | RF-SINC-015 (E) | CT-P-SINC-015 | Não verificada |
| CA-AUD-001 | Ação deixa registro com responsável, data e resultado. | RF-AUD-001 (E) | CT-P-AUD-001 | Não verificada |
| CA-AUD-002 | Operação deixa registro de metadados. | RF-AUD-002 (E) | CT-P-AUD-002 | Não verificada |
| CA-AUD-003 | Alteração deixa registro de responsável e alvo. | RF-AUD-003 (E) | CT-P-AUD-003 | Não verificada |
| CA-AUD-004 | Registro não copia texto da mensagem. | RF-AUD-004 (E) | CT-P-AUD-004 | Não verificada |
| CA-AUD-005 | Evento registra metadados e resultado. | RF-AUD-005 (E) | CT-P-AUD-005 | Não verificada |
| CA-AUD-006 | Funcionário é bloqueado. | RF-AUD-006 (E) | CT-P-AUD-006 | Não verificada |
| CA-AUD-007 | Consulta retorna correspondências. | RF-AUD-007 (E) | CT-P-AUD-007 | Não verificada |
| CA-AUD-008 | Ordem decrescente é mantida. | RF-AUD-008 (E) | CT-P-AUD-008 | Não verificada |
| CA-AUD-009 | Registros vencidos são removidos conforme política. | RF-AUD-009 (E) | CT-P-AUD-009 | Não verificada |
| CA-NF-001 | Teste de negociação TLS e rejeição de conexão insegura. | RNF-SEG-001 (E) | CT-P-NF-001 | Não verificada |
| CA-NF-002 | Chamadas diretas não autorizadas são rejeitadas. | RNF-SEG-002 (E) | CT-P-NF-002 | Não verificada |
| CA-NF-003 | Dados não são acessíveis por outro usuário do dispositivo em teste. | RNF-SEG-003 (E) | CT-P-NF-003 | Não verificada |
| CA-NF-004 | Teste de carga reproduzível comprova limite no percentil acordado [PENDENTE: percentil]. | RNF-DES-004 (E) | CT-P-NF-004 | Não verificada |
| CA-NF-005 | Relatório mensal de monitoramento demonstra a meta. | RNF-DISP-005 (E) | CT-P-NF-005 | Não verificada |
| CA-NF-006 | Exercício de recuperação conclui dentro do limite. | RNF-REC-006 (E) | CT-P-NF-006 | Não verificada |
| CA-NF-007 | Exercício comprova perda máxima tolerada de 24 horas. | RNF-REC-007 (E) | CT-P-NF-007 | Não verificada |
| CA-NF-008 | Evidência diária de backup bem-sucedido. | RNF-BKP-008 (E) | CT-P-NF-008 | Não verificada |
| CA-NF-009 | Política e amostra comprovam retenção. | RNF-BKP-009 (E) | CT-P-NF-009 | Não verificada |
| CA-NF-010 | Verificação demonstra separação. | RNF-BKP-010 (E) | CT-P-NF-010 | Não verificada |
| CA-NF-011 | Relatório mensal registra restauração e integridade. | RNF-BKP-011 (E) | CT-P-NF-011 | Não verificada |
| CA-AUT-019 | Primeiro acesso exige perfil, depois senha inicial nova e, por fim, confirmação de e-mail; outras funções permanecem bloqueadas até completar. | RF-AUT-002, RF-AUT-003 (P) | CT-P-AUT-019 | Não verificada |
| CA-AUT-020 | Interromper/reinstalar durante primeiro acesso preserva etapas concluídas e retoma da etapa correta. | RF-AUT-002, RF-AUT-003 (P) | CT-P-AUT-020 | Não verificada |
| CA-AUT-021 | Senha de sete caracteres é recusada; oito caracteres passam na regra de tamanho, sem obrigatoriedade de categorias distintas. | RF-AUT-004 (P) | CT-P-AUT-021 | Não verificada |
| CA-AUT-022 | Troca autenticada sem senha anterior requer link confirmado; conclusão altera senha, revoga sessões e exige novo login. | RF-AUT-005, RF-AUT-009 (P) | CT-P-AUT-022 | Não verificada |
| CA-AUT-023 | Recuperação regular usa e-mail confirmado e link válido de uso único; conclusão redefine senha e revoga sessões. | RF-AUT-006, RF-AUT-007, RF-AUT-008, RF-AUT-009 (P) | CT-P-AUT-023 | Não verificada |
| CA-AUT-024 | Recuperação excepcional exige verificação TI e aprovação administrativa; revoga sessões somente após conclusão da nova senha. | RF-AUT-006, RF-AUT-009 (P) | CT-P-AUT-024 | Não verificada |
| CA-AUT-025 | Mudança regular de e-mail só se efetiva após confirmações atual e nova; mantém sessão vigente. | RF-AUT-010 (P) | CT-P-AUT-025 | Não verificada |
| CA-AUT-026 | Mudança excepcional exige TI, Administrador e novo e-mail confirmado; revoga sessões somente após efetivação. | RF-AUT-010 (P) | CT-P-AUT-026 | Não verificada |
| CA-AUT-027 | No máximo uma sessão autorizada; origem permanece até confirmação e substituição atômica. | RF-AUT-011, RF-AUT-013 (P) | CT-P-AUT-027 | Não verificada |
| CA-AUT-028 | Transferência de dispositivo só se completa com link confirmado e válido; origem é revogada e destino autorizado. | RF-AUT-012, RF-AUT-013 (P) | CT-P-AUT-028 | Não verificada |
| CA-AUT-029 | Falhas consecutivas de senha são contabilizadas por conta no servidor, inclusive entre dispositivos. | RF-AUT-014 (P) | CT-P-AUT-029 | Não verificada |
| CA-AUT-030 | Cinco falhas ativam bloqueio de 60 segundos, inclusive contra senha correta; recuperação não antecipa desbloqueio. | RF-AUT-014, RF-AUT-015, RF-AUT-016 (P) | CT-P-AUT-030 | Não verificada |
| CA-AUT-031 | Sessão persiste ao fechar; offline exige desbloqueio local e revalidação remota ao reconectar. | RF-AUT-017 (P) | CT-P-AUT-031 | Não verificada |
| CA-AUT-032 | Logout voluntário encerra acesso e limpa dados locais; offline limpa imediatamente e sincroniza revogação quando possível. | RF-AUT-018 (P) | CT-P-AUT-032 | Não verificada |
| CA-AUT-033 | Revogação detectada encerra acesso, remove cache e credenciais e impede reenvio de itens pendentes. | RF-AUT-009, RF-AUT-013, RF-AUT-015, RF-AUT-018 (P) | CT-P-AUT-033 | Não verificada |
| CA-AUT-034 | Fila offline só é enviada após validação positiva da sessão no servidor; sessão revogada implica descarte. | RF-AUT-017, RF-AUT-018 (P) | CT-P-AUT-034 | Não verificada |

## 6. Decisões

| Decisão | IDs mencionados no registro (E) |
|---|---|
| DEC-HOM-001 — Governança da homologação | L |
| DEC-M01-001 — Ordem do primeiro acesso | RF-AUT-002, RF-AUT-003, CA-AUT-002, CA-AUT-003, RF-USR-004 |
| DEC-M01-002 — Retomada do primeiro acesso interrompido | RF-AUT-002, RF-AUT-003, CA-AUT-002, CA-AUT-003, RF-USR-004 |
| DEC-M01-003 — Política de comprimento e composição da senha | RF-AUT-004, CA-AUT-004 |
| DEC-M01-004 — Confirmação para alteração de senha autenticada | RF-AUT-005, CA-AUT-005, RN-AUT-003, RF-AUT-006, RF-AUT-010 |
| DEC-M01-005 — Validade e invalidação do link de confirmação da troca de senha | RF-AUT-005, CA-AUT-005, RF-AUT-007, RF-AUT-008, RN-AUT-005 |
| DEC-M01-006 — Confirmação dupla na alteração do e-mail de recuperação | RF-AUT-010, CA-AUT-010, RN-AUT-003, RF-AUT-006, RF-AUT-012 |
| DEC-M01-007 — Validade dos links de confirmação de alteração do e-mail de recuperação | RF-AUT-010, CA-AUT-010, RN-AUT-003 |
| DEC-M01-008 — Sessão anterior durante confirmação de novo dispositivo | RF-AUT-011, RF-AUT-012, RF-AUT-013, CA-AUT-011, CA-AUT-012, CA-AUT-013 |
| DEC-M01-009 — Solicitações concorrentes de acesso em novo dispositivo | RF-AUT-011, RF-AUT-012, RF-AUT-013, CA-AUT-011, CA-AUT-013 |
| DEC-M01-010 — Recuperação de senha durante bloqueio temporário de login | RF-AUT-006, RF-AUT-009, RF-AUT-014, RF-AUT-016, CA-AUT-006, CA-AUT-015, CA-AUT-016 |
| DEC-M01-011 — Acesso offline e revalidação da sessão | RF-AUT-017, CA-AUT-017 |
| DEC-M01-012 — Encerramento e limpeza local após revogação detectada | RF-AUT-011, RF-AUT-013, RF-AUT-017, RF-AUT-018, CA-AUT-011, CA-AUT-013, CA-AUT-017, CA-AUT-018 |
| DEC-M01-013 — Descarte da fila local após revogação de sessão | RF-AUT-013, RF-AUT-018 |
| DEC-M01-014 — Duração do acesso offline a dados locais autorizados | RF-AUT-017, CA-AUT-017 |
| DEC-M01-015 — Autenticação local ao reabrir o aplicativo offline | RF-AUT-017, CA-AUT-017 |
| DEC-M01-016 — Ausência de proteção local configurada no dispositivo | RF-AUT-017, CA-AUT-017 |
| DEC-M01-017 — Remoção posterior da credencial de desbloqueio do dispositivo | RF-AUT-017, CA-AUT-017 |
| DEC-M01-018 — Recuperação de acesso sem acesso ao e-mail confirmado | RF-AUT-006, RF-AUT-010, RN-AUT-003, RF-AUT-009 |
| DEC-M01-019 — Cadastro e confirmação do e-mail de recuperação no primeiro acesso | RF-AUT-002, RF-AUT-003, RN-AUT-003, CA-AUT-002, CA-AUT-003 |
| DEC-M01-020 — Invalidação cruzada de links após mudança efetiva de senha | RF-AUT-005, RF-AUT-009, CA-AUT-005, CA-AUT-009 |
| DEC-M01-021 — Ativação de sessão após confirmação de novo dispositivo | RF-AUT-011, RF-AUT-012, RF-AUT-013, CA-AUT-011, CA-AUT-012, CA-AUT-013 |

## 7. CON

| Resolução | IDs declarados (E; revisar pertinência) | Cenários |
|---|---|---:|
| CON-M01-001 — Logout voluntário offline | RF-AUT-018, RN-AUT-016, CA-AUT-032 | 10 |
| CON-M01-002 — Recuperação excepcional de senha | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | 12 |
| CON-M01-003 — Mudança excepcional de e-mail | RF-AUT-010, RN-AUT-011, CA-AUT-026 | 18 |
| CON-M01-004 — Senha concluída versus transferência pendente | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | 18 |
| CON-M01-005 — E-mail alterado versus transferência pendente | RF-AUT-010, RN-AUT-011, RN-AUT-013 | 18 |
| CON-M01-006 — E-mail alterado versus recuperação pendente | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | 18 |
| CON-M01-007 — Conflito entre alterações de senha | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | 20 |
| CON-M01-008 — Conflito entre alterações de e-mail | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | 24 |
| CON-M01-009 — Conflito cruzado senha e e-mail | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | 24 |
| CON-M01-010 — Bloqueio versus transferência | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | 20 |
| CON-M01-011 — Bloqueio versus sessão existente | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | 24 |
| CON-M01-012 — Fila offline versus revogação | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | 28 |
| CON-M01-013 — Transferência versus fila de origem | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | 30 |
| CON-M01-014 — Logout versus transferência | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | 26 |
| CON-M01-015 — Respostas tardias de sessão revogada | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | 28 |
| CON-M01-016 — Transferência versus primeiro acesso | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | 20 |
| CON-M01-017 — Substituição de e-mail inicial não confirmado | RF-AUT-010, RN-AUT-003, RN-AUT-011 | 24 |
| CON-M01-018 — Validação final de links de segurança | RF-AUT-007, RF-AUT-008, RN-AUT-005 | 26 |
| CON-M01-019 — Reemissão e ordem de links | RF-AUT-007, RF-AUT-008, RN-AUT-005 | 24 |

## 8. Cenários individuais

Vínculos herdados da CON são P quanto à aplicabilidade individual. Todos aguardam refinamento QA.

| Cenário | CON (E) | RF/RN/CA (P) | Evidência |
|---|---|---|---|
| CEN-CON-M01-001-001 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-001-002 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-001-003 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-001-004 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-001-005 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-001-006 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-001-007 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-001-008 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-001-009 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-001-010 | CON-M01-001 | RF-AUT-018, RN-AUT-016, CA-AUT-032 | Não verificada |
| CEN-CON-M01-002-001 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-002 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-003 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-004 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-005 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-006 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-007 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-008 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-009 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-010 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-011 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-002-012 | CON-M01-002 | RF-AUT-006, RF-AUT-009, RN-AUT-010, CA-AUT-024 | Não verificada |
| CEN-CON-M01-003-001 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-002 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-003 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-004 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-005 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-006 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-007 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-008 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-009 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-010 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-011 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-012 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-013 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-014 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-015 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-016 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-017 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-003-018 | CON-M01-003 | RF-AUT-010, RN-AUT-011, CA-AUT-026 | Não verificada |
| CEN-CON-M01-004-001 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-002 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-003 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-004 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-005 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-006 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-007 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-008 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-009 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-010 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-011 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-012 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-013 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-014 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-015 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-016 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-017 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-004-018 | CON-M01-004 | RF-AUT-005, RF-AUT-009, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-001 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-002 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-003 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-004 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-005 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-006 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-007 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-008 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-009 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-010 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-011 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-012 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-013 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-014 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-015 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-016 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-017 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-005-018 | CON-M01-005 | RF-AUT-010, RN-AUT-011, RN-AUT-013 | Não verificada |
| CEN-CON-M01-006-001 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-002 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-003 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-004 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-005 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-006 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-007 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-008 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-009 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-010 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-011 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-012 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-013 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-014 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-015 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-016 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-017 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-006-018 | CON-M01-006 | RF-AUT-006, RF-AUT-010, RN-AUT-010, RN-AUT-011 | Não verificada |
| CEN-CON-M01-007-001 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-002 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-003 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-004 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-005 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-006 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-007 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-008 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-009 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-010 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-011 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-012 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-013 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-014 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-015 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-016 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-017 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-018 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-019 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-007-020 | CON-M01-007 | RF-AUT-005, RF-AUT-009, RN-AUT-009, RN-AUT-010 | Não verificada |
| CEN-CON-M01-008-001 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-002 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-003 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-004 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-005 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-006 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-007 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-008 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-009 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-010 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-011 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-012 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-013 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-014 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-015 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-016 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-017 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-018 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-019 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-020 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-021 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-022 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-023 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-008-024 | CON-M01-008 | RF-AUT-010, RN-AUT-011, CA-AUT-025, CA-AUT-026 | Não verificada |
| CEN-CON-M01-009-001 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-002 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-003 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-004 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-005 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-006 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-007 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-008 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-009 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-010 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-011 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-012 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-013 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-014 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-015 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-016 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-017 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-018 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-019 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-020 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-021 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-022 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-023 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-009-024 | CON-M01-009 | RF-AUT-005, RF-AUT-010, RN-AUT-009, RN-AUT-011 | Não verificada |
| CEN-CON-M01-010-001 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-002 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-003 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-004 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-005 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-006 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-007 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-008 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-009 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-010 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-011 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-012 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-013 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-014 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-015 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-016 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-017 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-018 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-019 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-010-020 | CON-M01-010 | RF-AUT-012, RF-AUT-015, RN-AUT-013, RN-AUT-014 | Não verificada |
| CEN-CON-M01-011-001 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-002 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-003 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-004 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-005 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-006 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-007 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-008 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-009 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-010 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-011 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-012 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-013 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-014 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-015 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-016 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-017 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-018 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-019 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-020 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-021 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-022 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-023 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-011-024 | CON-M01-011 | RF-AUT-014, RF-AUT-015, RN-AUT-014, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-001 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-002 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-003 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-004 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-005 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-006 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-007 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-008 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-009 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-010 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-011 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-012 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-013 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-014 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-015 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-016 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-017 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-018 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-019 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-020 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-021 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-022 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-023 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-024 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-025 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-026 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-027 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-012-028 | CON-M01-012 | RF-AUT-017, RF-AUT-018, RN-AUT-015, RN-AUT-016 | Não verificada |
| CEN-CON-M01-013-001 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-002 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-003 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-004 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-005 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-006 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-007 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-008 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-009 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-010 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-011 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-012 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-013 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-014 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-015 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-016 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-017 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-018 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-019 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-020 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-021 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-022 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-023 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-024 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-025 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-026 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-027 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-028 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-029 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-013-030 | CON-M01-013 | RF-AUT-011, RF-AUT-013, RN-AUT-012, RN-AUT-013 | Não verificada |
| CEN-CON-M01-014-001 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-002 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-003 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-004 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-005 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-006 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-007 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-008 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-009 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-010 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-011 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-012 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-013 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-014 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-015 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-016 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-017 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-018 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-019 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-020 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-021 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-022 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-023 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-024 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-025 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-014-026 | CON-M01-014 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-001 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-002 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-003 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-004 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-005 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-006 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-007 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-008 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-009 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-010 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-011 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-012 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-013 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-014 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-015 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-016 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-017 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-018 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-019 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-020 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-021 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-022 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-023 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-024 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-025 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-026 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-027 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-015-028 | CON-M01-015 | RF-AUT-013, RF-AUT-018, RN-AUT-012, RN-AUT-016 | Não verificada |
| CEN-CON-M01-016-001 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-002 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-003 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-004 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-005 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-006 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-007 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-008 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-009 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-010 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-011 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-012 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-013 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-014 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-015 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-016 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-017 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-018 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-019 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-016-020 | CON-M01-016 | RF-AUT-002, RF-AUT-003, RN-AUT-006, RN-AUT-007, RN-AUT-013 | Não verificada |
| CEN-CON-M01-017-001 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-002 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-003 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-004 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-005 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-006 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-007 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-008 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-009 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-010 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-011 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-012 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-013 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-014 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-015 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-016 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-017 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-018 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-019 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-020 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-021 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-022 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-023 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-017-024 | CON-M01-017 | RF-AUT-010, RN-AUT-003, RN-AUT-011 | Não verificada |
| CEN-CON-M01-018-001 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-002 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-003 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-004 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-005 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-006 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-007 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-008 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-009 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-010 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-011 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-012 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-013 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-014 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-015 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-016 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-017 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-018 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-019 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-020 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-021 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-022 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-023 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-024 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-025 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-018-026 | CON-M01-018 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-001 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-002 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-003 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-004 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-005 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-006 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-007 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-008 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-009 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-010 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-011 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-012 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-013 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-014 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-015 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-016 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-017 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-018 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-019 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-020 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-021 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-022 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-023 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |
| CEN-CON-M01-019-024 | CON-M01-019 | RF-AUT-007, RF-AUT-008, RN-AUT-005 | Não verificada |

## 9. Lacunas e ações

| Lacuna | Ação | Issue |
|---|---|---|
| IDs legados | Recuperar originais e reconciliar sem presumir correspondência 1:1 | [#105](https://github.com/Asa-3/App.cef/issues/105) |
| UML | Localizar diagramas e vincular elementos e versões | [#80](https://github.com/Asa-3/App.cef/issues/80), [#81](https://github.com/Asa-3/App.cef/issues/81) |
| Testes | Refinar cenários, validar CT-P e anexar evidências | [#84](https://github.com/Asa-3/App.cef/issues/84), [#65](https://github.com/Asa-3/App.cef/issues/65), [#74](https://github.com/Asa-3/App.cef/issues/74) |
| Backlog conflitante | Reconciliar escopo e duplicidades | [#103](https://github.com/Asa-3/App.cef/issues/103), [#104](https://github.com/Asa-3/App.cef/issues/104) |
| Desempenho | Definir métrica | [#101](https://github.com/Asa-3/App.cef/issues/101) |
| Anexo em análise | Resolver R-02 | [#106](https://github.com/Asa-3/App.cef/issues/106) |
| Contagem CA | Inventário corrigido em 27/11/2026 (INC-DOC-006) | Resolvida |

Migração: RF-GRP-012 v1.2 → RF-GRP-017; CA-GRP-012 v1.2 → CA-GRP-020. RN-GRP-005 a 011 reservados. INC-DOC-003 parcialmente tratada: inventário e vínculos internos estruturados; validação de relações propostas, legados, UML e evidências ainda pendente.


## 10. Revisão complementar INC-DOC-003 — 27/11/2026

### Conferência referencial

Foram conferidos os IDs RF/RN/CA/RNF contra a linha de base vigente. Referências não presentes como IDs atuais: CA-GRP-012, RN-GRP-005. IDs históricos não constituem novos requisitos; demais referências ausentes exigem revisão. A conferência é sintática, não valida pertinência semântica.

### Índice de issues por ID, incluindo intervalos declarados

Expansão apenas de intervalos explícitos com prefixo igual, intersectados com IDs vigentes. Menção não implica cobertura integral nem implementação. Foram consultadas 100 issues; sem garantia de exaustividade.

| ID | Issues que mencionam ID ou intervalo (E) |
|---|---|
| CA-ARQ-001 | L — sem menção explícita localizada |
| CA-ARQ-002 | L — sem menção explícita localizada |
| CA-ARQ-003 | L — sem menção explícita localizada |
| CA-ARQ-004 | L — sem menção explícita localizada |
| CA-ARQ-005 | L — sem menção explícita localizada |
| CA-ARQ-006 | L — sem menção explícita localizada |
| CA-ARQ-007 | L — sem menção explícita localizada |
| CA-ARQ-008 | L — sem menção explícita localizada |
| CA-ARQ-009 | L — sem menção explícita localizada |
| CA-ARQ-010 | L — sem menção explícita localizada |
| CA-ARQ-011 | L — sem menção explícita localizada |
| CA-ARQ-012 | L — sem menção explícita localizada |
| CA-ARQ-013 | L — sem menção explícita localizada |
| CA-ARQ-014 | L — sem menção explícita localizada |
| CA-ARQ-015 | L — sem menção explícita localizada |
| CA-ARQ-016 | L — sem menção explícita localizada |
| CA-ARQ-017 | L — sem menção explícita localizada |
| CA-ARQ-018 | L — sem menção explícita localizada |
| CA-ARQ-019 | L — sem menção explícita localizada |
| CA-ARQ-020 | L — sem menção explícita localizada |
| CA-ARQ-021 | L — sem menção explícita localizada |
| CA-ARQ-022 | L — sem menção explícita localizada |
| CA-ARQ-023 | L — sem menção explícita localizada |
| CA-ARQ-024 | L — sem menção explícita localizada |
| CA-ARQ-025 | L — sem menção explícita localizada |
| CA-ARQ-026 | L — sem menção explícita localizada |
| CA-ARQ-027 | L — sem menção explícita localizada |
| CA-AUD-001 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| CA-AUD-002 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| CA-AUD-003 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| CA-AUD-004 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| CA-AUD-005 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| CA-AUD-006 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| CA-AUD-007 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| CA-AUD-008 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| CA-AUD-009 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| CA-AUT-001 | [#90](https://github.com/Asa-3/App.cef/issues/90) |
| CA-AUT-002 | L — sem menção explícita localizada |
| CA-AUT-003 | L — sem menção explícita localizada |
| CA-AUT-004 | L — sem menção explícita localizada |
| CA-AUT-005 | L — sem menção explícita localizada |
| CA-AUT-006 | L — sem menção explícita localizada |
| CA-AUT-007 | L — sem menção explícita localizada |
| CA-AUT-008 | L — sem menção explícita localizada |
| CA-AUT-009 | L — sem menção explícita localizada |
| CA-AUT-010 | L — sem menção explícita localizada |
| CA-AUT-011 | L — sem menção explícita localizada |
| CA-AUT-012 | L — sem menção explícita localizada |
| CA-AUT-013 | L — sem menção explícita localizada |
| CA-AUT-014 | L — sem menção explícita localizada |
| CA-AUT-015 | L — sem menção explícita localizada |
| CA-AUT-016 | L — sem menção explícita localizada |
| CA-AUT-017 | L — sem menção explícita localizada |
| CA-AUT-018 | L — sem menção explícita localizada |
| CA-AUT-019 | L — sem menção explícita localizada |
| CA-AUT-020 | L — sem menção explícita localizada |
| CA-AUT-021 | L — sem menção explícita localizada |
| CA-AUT-022 | L — sem menção explícita localizada |
| CA-AUT-023 | L — sem menção explícita localizada |
| CA-AUT-024 | L — sem menção explícita localizada |
| CA-AUT-025 | L — sem menção explícita localizada |
| CA-AUT-026 | L — sem menção explícita localizada |
| CA-AUT-027 | L — sem menção explícita localizada |
| CA-AUT-028 | L — sem menção explícita localizada |
| CA-AUT-029 | L — sem menção explícita localizada |
| CA-AUT-030 | L — sem menção explícita localizada |
| CA-AUT-031 | L — sem menção explícita localizada |
| CA-AUT-032 | L — sem menção explícita localizada |
| CA-AUT-033 | L — sem menção explícita localizada |
| CA-AUT-034 | L — sem menção explícita localizada |
| CA-AVI-001 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-002 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-003 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-004 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-005 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-006 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-007 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-008 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-009 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-010 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-011 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-012 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-013 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-014 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-015 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-AVI-016 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| CA-CON-001 | L — sem menção explícita localizada |
| CA-CON-002 | L — sem menção explícita localizada |
| CA-CON-003 | L — sem menção explícita localizada |
| CA-CON-004 | L — sem menção explícita localizada |
| CA-CON-005 | L — sem menção explícita localizada |
| CA-CVI-001 | L — sem menção explícita localizada |
| CA-CVI-002 | L — sem menção explícita localizada |
| CA-CVI-003 | L — sem menção explícita localizada |
| CA-CVI-004 | L — sem menção explícita localizada |
| CA-GRP-001 | L — sem menção explícita localizada |
| CA-GRP-002 | L — sem menção explícita localizada |
| CA-GRP-003 | L — sem menção explícita localizada |
| CA-GRP-004 | L — sem menção explícita localizada |
| CA-GRP-005 | L — sem menção explícita localizada |
| CA-GRP-006 | L — sem menção explícita localizada |
| CA-GRP-007 | L — sem menção explícita localizada |
| CA-GRP-008 | L — sem menção explícita localizada |
| CA-GRP-009 | L — sem menção explícita localizada |
| CA-GRP-010 | L — sem menção explícita localizada |
| CA-GRP-011 | L — sem menção explícita localizada |
| CA-GRP-013 | L — sem menção explícita localizada |
| CA-GRP-014 | L — sem menção explícita localizada |
| CA-GRP-015 | L — sem menção explícita localizada |
| CA-GRP-016 | L — sem menção explícita localizada |
| CA-GRP-017 | L — sem menção explícita localizada |
| CA-GRP-018 | L — sem menção explícita localizada |
| CA-GRP-019 | L — sem menção explícita localizada |
| CA-GRP-020 | L — sem menção explícita localizada |
| CA-MSG-001 | L — sem menção explícita localizada |
| CA-MSG-002 | L — sem menção explícita localizada |
| CA-MSG-003 | L — sem menção explícita localizada |
| CA-MSG-004 | L — sem menção explícita localizada |
| CA-MSG-005 | L — sem menção explícita localizada |
| CA-MSG-006 | L — sem menção explícita localizada |
| CA-MSG-007 | L — sem menção explícita localizada |
| CA-MSG-008 | L — sem menção explícita localizada |
| CA-MSG-009 | L — sem menção explícita localizada |
| CA-MSG-010 | L — sem menção explícita localizada |
| CA-MSG-011 | L — sem menção explícita localizada |
| CA-MSG-012 | L — sem menção explícita localizada |
| CA-MSG-013 | L — sem menção explícita localizada |
| CA-MSG-014 | L — sem menção explícita localizada |
| CA-NF-001 | L — sem menção explícita localizada |
| CA-NF-002 | L — sem menção explícita localizada |
| CA-NF-003 | L — sem menção explícita localizada |
| CA-NF-004 | [#101](https://github.com/Asa-3/App.cef/issues/101) |
| CA-NF-005 | L — sem menção explícita localizada |
| CA-NF-006 | L — sem menção explícita localizada |
| CA-NF-007 | L — sem menção explícita localizada |
| CA-NF-008 | L — sem menção explícita localizada |
| CA-NF-009 | L — sem menção explícita localizada |
| CA-NF-010 | L — sem menção explícita localizada |
| CA-NF-011 | L — sem menção explícita localizada |
| CA-NOT-001 | L — sem menção explícita localizada |
| CA-NOT-002 | L — sem menção explícita localizada |
| CA-NOT-003 | L — sem menção explícita localizada |
| CA-NOT-004 | L — sem menção explícita localizada |
| CA-SINC-001 | L — sem menção explícita localizada |
| CA-SINC-002 | L — sem menção explícita localizada |
| CA-SINC-003 | L — sem menção explícita localizada |
| CA-SINC-004 | L — sem menção explícita localizada |
| CA-SINC-005 | L — sem menção explícita localizada |
| CA-SINC-006 | L — sem menção explícita localizada |
| CA-SINC-007 | L — sem menção explícita localizada |
| CA-SINC-008 | L — sem menção explícita localizada |
| CA-SINC-009 | L — sem menção explícita localizada |
| CA-SINC-010 | L — sem menção explícita localizada |
| CA-SINC-011 | L — sem menção explícita localizada |
| CA-SINC-012 | L — sem menção explícita localizada |
| CA-SINC-013 | L — sem menção explícita localizada |
| CA-SINC-014 | L — sem menção explícita localizada |
| CA-SINC-015 | L — sem menção explícita localizada |
| CA-USR-001 | L — sem menção explícita localizada |
| CA-USR-002 | L — sem menção explícita localizada |
| CA-USR-003 | L — sem menção explícita localizada |
| CA-USR-004 | L — sem menção explícita localizada |
| CA-USR-005 | L — sem menção explícita localizada |
| CA-USR-006 | L — sem menção explícita localizada |
| CA-USR-007 | L — sem menção explícita localizada |
| CA-USR-008 | L — sem menção explícita localizada |
| CA-USR-009 | L — sem menção explícita localizada |
| CA-USR-010 | L — sem menção explícita localizada |
| CA-USR-011 | L — sem menção explícita localizada |
| CA-USR-012 | L — sem menção explícita localizada |
| CA-USR-013 | L — sem menção explícita localizada |
| CA-USR-014 | L — sem menção explícita localizada |
| CA-USR-015 | L — sem menção explícita localizada |
| CA-USR-016 | L — sem menção explícita localizada |
| CA-USR-017 | L — sem menção explícita localizada |
| CA-USR-018 | L — sem menção explícita localizada |
| CA-USR-019 | L — sem menção explícita localizada |
| RF-ARQ-001 | L — sem menção explícita localizada |
| RF-ARQ-002 | L — sem menção explícita localizada |
| RF-ARQ-003 | L — sem menção explícita localizada |
| RF-ARQ-004 | L — sem menção explícita localizada |
| RF-ARQ-005 | L — sem menção explícita localizada |
| RF-ARQ-006 | L — sem menção explícita localizada |
| RF-ARQ-007 | L — sem menção explícita localizada |
| RF-ARQ-008 | L — sem menção explícita localizada |
| RF-ARQ-009 | L — sem menção explícita localizada |
| RF-ARQ-010 | L — sem menção explícita localizada |
| RF-ARQ-011 | L — sem menção explícita localizada |
| RF-ARQ-012 | L — sem menção explícita localizada |
| RF-ARQ-013 | L — sem menção explícita localizada |
| RF-ARQ-014 | L — sem menção explícita localizada |
| RF-ARQ-015 | L — sem menção explícita localizada |
| RF-ARQ-016 | L — sem menção explícita localizada |
| RF-ARQ-017 | L — sem menção explícita localizada |
| RF-ARQ-018 | L — sem menção explícita localizada |
| RF-ARQ-019 | L — sem menção explícita localizada |
| RF-ARQ-020 | L — sem menção explícita localizada |
| RF-ARQ-021 | L — sem menção explícita localizada |
| RF-ARQ-022 | L — sem menção explícita localizada |
| RF-ARQ-023 | L — sem menção explícita localizada |
| RF-ARQ-024 | L — sem menção explícita localizada |
| RF-ARQ-025 | L — sem menção explícita localizada |
| RF-ARQ-026 | L — sem menção explícita localizada |
| RF-ARQ-027 | L — sem menção explícita localizada |
| RF-AUD-001 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUD-002 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUD-003 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUD-004 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUD-005 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUD-006 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUD-007 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUD-008 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUD-009 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RF-AUT-001 | [#90](https://github.com/Asa-3/App.cef/issues/90) |
| RF-AUT-002 | L — sem menção explícita localizada |
| RF-AUT-003 | L — sem menção explícita localizada |
| RF-AUT-004 | L — sem menção explícita localizada |
| RF-AUT-005 | L — sem menção explícita localizada |
| RF-AUT-006 | L — sem menção explícita localizada |
| RF-AUT-007 | L — sem menção explícita localizada |
| RF-AUT-008 | L — sem menção explícita localizada |
| RF-AUT-009 | L — sem menção explícita localizada |
| RF-AUT-010 | L — sem menção explícita localizada |
| RF-AUT-011 | L — sem menção explícita localizada |
| RF-AUT-012 | L — sem menção explícita localizada |
| RF-AUT-013 | L — sem menção explícita localizada |
| RF-AUT-014 | L — sem menção explícita localizada |
| RF-AUT-015 | L — sem menção explícita localizada |
| RF-AUT-016 | L — sem menção explícita localizada |
| RF-AUT-017 | L — sem menção explícita localizada |
| RF-AUT-018 | L — sem menção explícita localizada |
| RF-AVI-001 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-002 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-003 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-004 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-005 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-006 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-007 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-008 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-009 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-010 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-011 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-012 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-013 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-014 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-015 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-AVI-016 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RF-CON-001 | L — sem menção explícita localizada |
| RF-CON-002 | L — sem menção explícita localizada |
| RF-CON-003 | L — sem menção explícita localizada |
| RF-CON-004 | L — sem menção explícita localizada |
| RF-CON-005 | L — sem menção explícita localizada |
| RF-CVI-001 | L — sem menção explícita localizada |
| RF-CVI-002 | L — sem menção explícita localizada |
| RF-CVI-003 | L — sem menção explícita localizada |
| RF-CVI-004 | L — sem menção explícita localizada |
| RF-GRP-001 | L — sem menção explícita localizada |
| RF-GRP-002 | L — sem menção explícita localizada |
| RF-GRP-003 | L — sem menção explícita localizada |
| RF-GRP-004 | L — sem menção explícita localizada |
| RF-GRP-005 | L — sem menção explícita localizada |
| RF-GRP-006 | L — sem menção explícita localizada |
| RF-GRP-007 | L — sem menção explícita localizada |
| RF-GRP-008 | L — sem menção explícita localizada |
| RF-GRP-009 | L — sem menção explícita localizada |
| RF-GRP-010 | L — sem menção explícita localizada |
| RF-GRP-011 | L — sem menção explícita localizada |
| RF-GRP-012 | L — sem menção explícita localizada |
| RF-GRP-013 | L — sem menção explícita localizada |
| RF-GRP-014 | L — sem menção explícita localizada |
| RF-GRP-015 | L — sem menção explícita localizada |
| RF-GRP-016 | L — sem menção explícita localizada |
| RF-GRP-017 | L — sem menção explícita localizada |
| RF-MSG-001 | L — sem menção explícita localizada |
| RF-MSG-002 | L — sem menção explícita localizada |
| RF-MSG-003 | L — sem menção explícita localizada |
| RF-MSG-004 | L — sem menção explícita localizada |
| RF-MSG-005 | L — sem menção explícita localizada |
| RF-MSG-006 | L — sem menção explícita localizada |
| RF-MSG-007 | L — sem menção explícita localizada |
| RF-MSG-008 | L — sem menção explícita localizada |
| RF-MSG-009 | L — sem menção explícita localizada |
| RF-MSG-010 | L — sem menção explícita localizada |
| RF-MSG-011 | L — sem menção explícita localizada |
| RF-MSG-012 | L — sem menção explícita localizada |
| RF-MSG-013 | L — sem menção explícita localizada |
| RF-MSG-014 | L — sem menção explícita localizada |
| RF-NOT-001 | L — sem menção explícita localizada |
| RF-NOT-002 | L — sem menção explícita localizada |
| RF-NOT-003 | L — sem menção explícita localizada |
| RF-NOT-004 | L — sem menção explícita localizada |
| RF-SINC-001 | L — sem menção explícita localizada |
| RF-SINC-002 | L — sem menção explícita localizada |
| RF-SINC-003 | L — sem menção explícita localizada |
| RF-SINC-004 | L — sem menção explícita localizada |
| RF-SINC-005 | L — sem menção explícita localizada |
| RF-SINC-006 | L — sem menção explícita localizada |
| RF-SINC-007 | L — sem menção explícita localizada |
| RF-SINC-008 | L — sem menção explícita localizada |
| RF-SINC-009 | L — sem menção explícita localizada |
| RF-SINC-010 | L — sem menção explícita localizada |
| RF-SINC-011 | L — sem menção explícita localizada |
| RF-SINC-012 | L — sem menção explícita localizada |
| RF-SINC-013 | L — sem menção explícita localizada |
| RF-SINC-014 | L — sem menção explícita localizada |
| RF-SINC-015 | L — sem menção explícita localizada |
| RF-USR-001 | L — sem menção explícita localizada |
| RF-USR-002 | L — sem menção explícita localizada |
| RF-USR-003 | L — sem menção explícita localizada |
| RF-USR-004 | L — sem menção explícita localizada |
| RF-USR-005 | L — sem menção explícita localizada |
| RF-USR-006 | L — sem menção explícita localizada |
| RF-USR-007 | L — sem menção explícita localizada |
| RF-USR-008 | L — sem menção explícita localizada |
| RF-USR-009 | L — sem menção explícita localizada |
| RF-USR-010 | L — sem menção explícita localizada |
| RF-USR-011 | L — sem menção explícita localizada |
| RF-USR-012 | L — sem menção explícita localizada |
| RF-USR-013 | L — sem menção explícita localizada |
| RF-USR-014 | L — sem menção explícita localizada |
| RF-USR-015 | L — sem menção explícita localizada |
| RF-USR-016 | L — sem menção explícita localizada |
| RF-USR-017 | L — sem menção explícita localizada |
| RF-USR-018 | L — sem menção explícita localizada |
| RF-USR-019 | L — sem menção explícita localizada |
| RN-ARQ-001 | L — sem menção explícita localizada |
| RN-ARQ-002 | L — sem menção explícita localizada |
| RN-ARQ-003 | L — sem menção explícita localizada |
| RN-ARQ-004 | L — sem menção explícita localizada |
| RN-ARQ-005 | L — sem menção explícita localizada |
| RN-ARQ-006 | L — sem menção explícita localizada |
| RN-AUD-001 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RN-AUD-002 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RN-AUD-003 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RN-AUD-004 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RN-AUD-005 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| RN-AUT-001 | [#90](https://github.com/Asa-3/App.cef/issues/90) |
| RN-AUT-002 | L — sem menção explícita localizada |
| RN-AUT-003 | L — sem menção explícita localizada |
| RN-AUT-004 | L — sem menção explícita localizada |
| RN-AUT-005 | L — sem menção explícita localizada |
| RN-AUT-006 | L — sem menção explícita localizada |
| RN-AUT-007 | L — sem menção explícita localizada |
| RN-AUT-008 | L — sem menção explícita localizada |
| RN-AUT-009 | L — sem menção explícita localizada |
| RN-AUT-010 | L — sem menção explícita localizada |
| RN-AUT-011 | L — sem menção explícita localizada |
| RN-AUT-012 | L — sem menção explícita localizada |
| RN-AUT-013 | L — sem menção explícita localizada |
| RN-AUT-014 | L — sem menção explícita localizada |
| RN-AUT-015 | L — sem menção explícita localizada |
| RN-AUT-016 | L — sem menção explícita localizada |
| RN-AVI-001 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-AVI-002 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-AVI-003 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-AVI-004 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-AVI-005 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-AVI-006 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-AVI-007 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-AVI-008 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-AVI-009 | [#96](https://github.com/Asa-3/App.cef/issues/96) |
| RN-CON-001 | L — sem menção explícita localizada |
| RN-CON-002 | L — sem menção explícita localizada |
| RN-CON-003 | L — sem menção explícita localizada |
| RN-CVI-001 | L — sem menção explícita localizada |
| RN-CVI-002 | L — sem menção explícita localizada |
| RN-CVI-003 | L — sem menção explícita localizada |
| RN-GRP-001 | L — sem menção explícita localizada |
| RN-GRP-002 | L — sem menção explícita localizada |
| RN-GRP-003 | L — sem menção explícita localizada |
| RN-GRP-004 | L — sem menção explícita localizada |
| RN-GRP-012 | L — sem menção explícita localizada |
| RN-GRP-013 | L — sem menção explícita localizada |
| RN-GRP-014 | L — sem menção explícita localizada |
| RN-GRP-015 | L — sem menção explícita localizada |
| RN-GRP-016 | L — sem menção explícita localizada |
| RN-INF-001 | L — sem menção explícita localizada |
| RN-INF-002 | L — sem menção explícita localizada |
| RN-INF-003 | L — sem menção explícita localizada |
| RN-INF-004 | L — sem menção explícita localizada |
| RN-INF-005 | L — sem menção explícita localizada |
| RN-INF-006 | L — sem menção explícita localizada |
| RN-INF-007 | L — sem menção explícita localizada |
| RN-MSG-001 | L — sem menção explícita localizada |
| RN-MSG-002 | L — sem menção explícita localizada |
| RN-MSG-003 | L — sem menção explícita localizada |
| RN-MSG-004 | L — sem menção explícita localizada |
| RN-MSG-005 | L — sem menção explícita localizada |
| RN-NOT-001 | L — sem menção explícita localizada |
| RN-NOT-002 | L — sem menção explícita localizada |
| RN-NOT-003 | L — sem menção explícita localizada |
| RN-SINC-001 | L — sem menção explícita localizada |
| RN-SINC-002 | L — sem menção explícita localizada |
| RN-SINC-003 | L — sem menção explícita localizada |
| RN-SINC-004 | L — sem menção explícita localizada |
| RN-SINC-005 | L — sem menção explícita localizada |
| RN-SINC-006 | L — sem menção explícita localizada |
| RN-SINC-007 | L — sem menção explícita localizada |
| RN-USR-001 | L — sem menção explícita localizada |
| RN-USR-002 | L — sem menção explícita localizada |
| RN-USR-003 | L — sem menção explícita localizada |
| RN-USR-004 | L — sem menção explícita localizada |
| RNF-BKP-008 | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| RNF-BKP-009 | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| RNF-BKP-010 | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| RNF-BKP-011 | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| RNF-DES-004 | [#101](https://github.com/Asa-3/App.cef/issues/101) |
| RNF-DISP-005 | L — sem menção explícita localizada |
| RNF-REC-006 | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| RNF-REC-007 | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| RNF-SEG-001 | L — sem menção explícita localizada |
| RNF-SEG-002 | L — sem menção explícita localizada |
| RNF-SEG-003 | L — sem menção explícita localizada |

**Resultado:** 413 IDs RF/RN/CA/RNF/CA-NF conferidos; 75 com menção explícita em issue (incluindo intervalos), 338 sem menção localizada. Os vínculos candidatos por módulo continuam disponíveis.

### Bloqueios de encerramento

- Busca no repositório por diagrama, UML, casos de uso, RF-001, RN-001 e test não retornou arquivos. Isso não comprova ausência. PO/equipe devem fornecer caminhos ou arquivos UML e originais legados (issue #105).
- QA deve fornecer casos de teste reais e evidências; CT-P e cenários reconstruídos não equivalem a execução.
- PO/QA devem revisar pertinência dos vínculos P; nenhuma aprovação adicional foi presumida.

**Status INC-DOC-003: parcial, com revisão referencial e índice de issues ampliado.**

## 11. Integração individual com MVP homologado — 27/11/2026
Fontes: MVP-04/05/07/08/09 em ../MVP. M/W: seleção explícita; P: proposta; E: explícito; V: verificado; L: lacuna. Esta revisão complementa e corrige propostas anteriores, sem mudar requisitos. UML, código, execução e evidências: L para todos até comprovação.
### RF/RNF
| ID | MVP E | CA base E | RN P | PBI principal P | Teste de referência parcial P |
|---|---|---|---|---|---|
| RF-AUT-001 | M | CA-AUT-001 | RN-AUT-001 | PBI-010 | L |
| RF-AUT-002 | M | CA-AUT-002 | RN-AUT-002, RN-AUT-006, RN-AUT-007 | PBI-011 | L |
| RF-AUT-003 | M | CA-AUT-003 | RN-AUT-006, RN-AUT-007 | PBI-011 | L |
| RF-AUT-004 | M | CA-AUT-004 | RN-AUT-008 | PBI-012 | L |
| RF-AUT-005 | M | CA-AUT-005 | RN-AUT-009 | PBI-012 | L |
| RF-AUT-006 | M | CA-AUT-006 | RN-AUT-003, RN-AUT-010 | PBI-012 | L |
| RF-AUT-007 | M | CA-AUT-007 | RN-AUT-005 | PBI-012 | L |
| RF-AUT-008 | M | CA-AUT-008 | RN-AUT-005 | PBI-012 | L |
| RF-AUT-009 | M | CA-AUT-009 | RN-AUT-009, RN-AUT-010, RN-AUT-016 | PBI-016 | L |
| RF-AUT-010 | M | CA-AUT-010 | RN-AUT-003, RN-AUT-011 | PBI-013 | L |
| RF-AUT-011 | M | CA-AUT-011 | RN-AUT-012 | PBI-014 | CT-MVP-M01-002 |
| RF-AUT-012 | M | CA-AUT-012 | RN-AUT-005, RN-AUT-013 | PBI-014 | CT-MVP-M01-002 |
| RF-AUT-013 | M | CA-AUT-013 | RN-AUT-012, RN-AUT-013, RN-AUT-016 | PBI-014 | CT-MVP-M01-002 |
| RF-AUT-014 | M | CA-AUT-014 | RN-AUT-004, RN-AUT-014 | PBI-015 | CT-MVP-M01-001 |
| RF-AUT-015 | M | CA-AUT-015 | RN-AUT-004, RN-AUT-014, RN-AUT-016 | PBI-015 | CT-MVP-M01-001 |
| RF-AUT-016 | M | CA-AUT-016 | RN-AUT-004, RN-AUT-014 | PBI-015 | CT-MVP-M01-001 |
| RF-AUT-017 | M | CA-AUT-017 | RN-AUT-015 | PBI-016 | L |
| RF-AUT-018 | M | CA-AUT-018 | RN-AUT-016 | PBI-016 | CT-MVP-M10-001 |
| RF-USR-001 | M | CA-USR-001 | RN-AUT-002 | PBI-018 | L |
| RF-USR-002 | M | CA-USR-002 | RN-AUT-001 | PBI-018 | L |
| RF-USR-003 | M | CA-USR-003 | RN-AUT-002 | PBI-018 | L |
| RF-USR-004 | M | CA-USR-004 | L | PBI-019 | L |
| RF-USR-005 | M | CA-USR-005 | L | PBI-019 | L |
| RF-USR-006 | M | CA-USR-006 | L | PBI-020 | L |
| RF-USR-007 | M | CA-USR-007 | L | PBI-020 | L |
| RF-USR-008 | M | CA-USR-008 | L | PBI-020 | L |
| RF-USR-009 | M | CA-USR-009 | RN-USR-001 | PBI-021 | L |
| RF-USR-010 | M | CA-USR-010 | RN-USR-001, RN-USR-003 | PBI-021 | L |
| RF-USR-011 | M | CA-USR-011 | RN-USR-004 | PBI-022 | L |
| RF-USR-012 | W | CA-USR-012 | RN-USR-004 | — | L |
| RF-USR-013 | M | CA-USR-013 | RN-USR-002, RN-USR-004 | PBI-022 | L |
| RF-USR-014 | W | CA-USR-014 | RN-USR-002, RN-USR-004 | — | L |
| RF-USR-015 | M | CA-USR-015 | RN-USR-002, RN-USR-004 | PBI-022 | L |
| RF-USR-016 | M | CA-USR-016 | RN-USR-003, RN-USR-004 | PBI-022 | L |
| RF-USR-017 | M | CA-USR-017 | RN-USR-001 | PBI-021 | L |
| RF-USR-018 | M | CA-USR-018 | RN-USR-003 | PBI-022 | L |
| RF-USR-019 | W | CA-USR-019 | RN-USR-004 | — | L |
| RF-CON-001 | M | CA-CON-001 | RN-CON-001 | PBI-023 | L |
| RF-CON-002 | M | CA-CON-002 | RN-CON-001 | PBI-024 | L |
| RF-CON-003 | M | CA-CON-003 | RN-CON-001, RN-CON-002 | PBI-024 | L |
| RF-CON-004 | M | CA-CON-004 | RN-CON-001, RN-CON-003 | PBI-024 | L |
| RF-CON-005 | M | CA-CON-005 | L | PBI-023 | L |
| RF-CVI-001 | M | CA-CVI-001 | RN-CVI-001 | PBI-025 | L |
| RF-CVI-002 | M | CA-CVI-002 | RN-CVI-001 | PBI-026 | L |
| RF-CVI-003 | M | CA-CVI-003 | RN-CVI-001 | PBI-027 | L |
| RF-CVI-004 | M | CA-CVI-004 | RN-MSG-003 | PBI-025 | L |
| RF-GRP-001 | M | CA-GRP-001 | RN-GRP-001 | PBI-028 | L |
| RF-GRP-002 | M | CA-GRP-002 | RN-GRP-001 | PBI-029 | L |
| RF-GRP-003 | M | CA-GRP-003 | RN-GRP-001 | PBI-029 | L |
| RF-GRP-004 | M | CA-GRP-004 | RN-GRP-001 | PBI-028 | L |
| RF-GRP-005 | M | CA-GRP-005 | RN-GRP-001, RN-GRP-003 | PBI-030 | L |
| RF-GRP-006 | M | CA-GRP-006 | RN-GRP-003 | PBI-030 | L |
| RF-GRP-007 | M | CA-GRP-007 | L | PBI-032 | L |
| RF-GRP-008 | M | CA-GRP-008 | RN-GRP-002, RN-GRP-013 | PBI-031 | L |
| RF-GRP-009 | M | CA-GRP-009 | RN-GRP-002 | PBI-031 | L |
| RF-GRP-010 | M | CA-GRP-010 | RN-GRP-002 | PBI-031 | L |
| RF-GRP-011 | M | CA-GRP-011 | RN-GRP-002 | PBI-031 | L |
| RF-GRP-012 | M | CA-GRP-013 | RN-GRP-004, RN-GRP-012, RN-GRP-013 | PBI-031 | L |
| RF-GRP-013 | M | CA-GRP-014 | RN-GRP-004, RN-GRP-014, RN-GRP-015 | PBI-031 | CT-MVP-M05-001 |
| RF-GRP-014 | M | CA-GRP-015, CA-GRP-016 | RN-GRP-004, RN-GRP-014, RN-GRP-015, RN-GRP-016 | PBI-031 | CT-MVP-M05-001 |
| RF-GRP-015 | M | CA-GRP-018 | RN-GRP-004, RN-GRP-015, RN-GRP-016 | PBI-031 | L |
| RF-GRP-016 | M | CA-GRP-017, CA-GRP-019 | RN-GRP-004, RN-GRP-014, RN-GRP-015, RN-GRP-016 | PBI-031 | L |
| RF-GRP-017 | M | CA-GRP-020 | RN-GRP-001 | PBI-029 | L |
| RF-MSG-001 | M | CA-MSG-001 | RN-CVI-002, RN-MSG-001, RN-MSG-002 | PBI-033 | L |
| RF-MSG-002 | M | CA-MSG-002 | RN-MSG-002 | PBI-034 | L |
| RF-MSG-003 | M | CA-MSG-003 | RN-CVI-003, RN-MSG-005 | PBI-033 | L |
| RF-MSG-004 | M | CA-MSG-004 | L | PBI-033 | L |
| RF-MSG-005 | M | CA-MSG-005 | RN-CVI-002, RN-MSG-001 | PBI-035 | CT-MVP-M06-001 |
| RF-MSG-006 | M | CA-MSG-006 | RN-CVI-002 | PBI-035 | L |
| RF-MSG-007 | M | CA-MSG-007 | L | PBI-035 | L |
| RF-MSG-008 | M | CA-MSG-008 | RN-MSG-004, RN-MSG-005 | PBI-036 | L |
| RF-MSG-009 | M | CA-MSG-009 | RN-MSG-004, RN-MSG-005 | PBI-036 | L |
| RF-MSG-010 | M | CA-MSG-010 | RN-MSG-004 | PBI-037 | L |
| RF-MSG-011 | M | CA-MSG-011 | RN-MSG-004 | PBI-037 | L |
| RF-MSG-012 | M | CA-MSG-012 | L | PBI-037 | L |
| RF-MSG-013 | M | CA-MSG-013 | L | PBI-038 | L |
| RF-MSG-014 | M | CA-MSG-014 | L | PBI-038 | L |
| RF-ARQ-001 | M | CA-ARQ-001 | RN-CVI-003, RN-ARQ-004 | PBI-043 | L |
| RF-ARQ-002 | M | CA-ARQ-002 | RN-ARQ-004 | PBI-043 | L |
| RF-ARQ-003 | M | CA-ARQ-003 | RN-ARQ-004 | PBI-043 | L |
| RF-ARQ-004 | M | CA-ARQ-004 | RN-ARQ-004 | PBI-043 | L |
| RF-ARQ-005 | M | CA-ARQ-005 | RN-ARQ-004 | PBI-043 | L |
| RF-ARQ-006 | M | CA-ARQ-006 | RN-ARQ-002 | PBI-041 | L |
| RF-ARQ-007 | M | CA-ARQ-007 | RN-ARQ-003 | PBI-041 | L |
| RF-ARQ-008 | M | CA-ARQ-008 | RN-ARQ-003 | PBI-041 | L |
| RF-ARQ-009 | M | CA-ARQ-009 | RN-ARQ-003, RN-ARQ-006 | PBI-041 | L |
| RF-ARQ-010 | M | CA-ARQ-010 | RN-ARQ-003 | PBI-041 | L |
| RF-ARQ-011 | M | CA-ARQ-011 | RN-ARQ-006 | PBI-041 | L |
| RF-ARQ-012 | M | CA-ARQ-012 | RN-ARQ-003 | PBI-041 | L |
| RF-ARQ-013 | M | CA-ARQ-013 | L | PBI-041 | L |
| RF-ARQ-014 | M | CA-ARQ-014 | RN-ARQ-005 | PBI-044 | L |
| RF-ARQ-015 | M | CA-ARQ-015 | RN-ARQ-005 | PBI-044 | L |
| RF-ARQ-016 | M | CA-ARQ-016 | RN-ARQ-005 | PBI-044 | L |
| RF-ARQ-017 | M | CA-ARQ-017 | RN-ARQ-005 | PBI-043 | L |
| RF-ARQ-018 | M | CA-ARQ-018 | RN-ARQ-005 | PBI-043 | L |
| RF-ARQ-019 | M | CA-ARQ-019 | RN-ARQ-005 | PBI-044 | L |
| RF-ARQ-020 | M | CA-ARQ-020 | RN-ARQ-005 | PBI-044 | L |
| RF-ARQ-021 | M | CA-ARQ-021 | RN-ARQ-001, RN-ARQ-002 | PBI-040 | CT-MVP-M07-001 |
| RF-ARQ-022 | M | CA-ARQ-022 | RN-ARQ-001 | PBI-040 | L |
| RF-ARQ-023 | M | CA-ARQ-023 | L | PBI-042 | L |
| RF-ARQ-024 | M | CA-ARQ-024 | RN-ARQ-002 | PBI-042 | L |
| RF-ARQ-025 | M | CA-ARQ-025 | RN-ARQ-006 | PBI-042 | L |
| RF-ARQ-026 | M | CA-ARQ-026 | L | PBI-044 | L |
| RF-ARQ-027 | M | CA-ARQ-027 | L | PBI-044 | L |
| RF-NOT-001 | M | CA-NOT-001 | RN-NOT-001 | PBI-046 | L |
| RF-NOT-002 | M | CA-NOT-002 | RN-NOT-001 | PBI-046 | L |
| RF-NOT-003 | W | CA-NOT-003 | RN-NOT-001, RN-NOT-002, RN-AVI-003 | — | L |
| RF-NOT-004 | M | CA-NOT-004 | RN-NOT-001, RN-NOT-003 | PBI-047 | L |
| RF-AVI-001 | W | CA-AVI-001 | RN-AVI-002 | — | L |
| RF-AVI-002 | W | CA-AVI-002 | RN-AVI-001 | — | L |
| RF-AVI-003 | W | CA-AVI-003 | RN-AVI-002 | — | L |
| RF-AVI-004 | W | CA-AVI-004 | L | — | L |
| RF-AVI-005 | W | CA-AVI-005 | L | — | L |
| RF-AVI-006 | W | CA-AVI-006 | L | — | L |
| RF-AVI-007 | W | CA-AVI-007 | RN-AVI-005 | — | L |
| RF-AVI-008 | W | CA-AVI-008 | RN-AVI-003, RN-AVI-005, RN-AVI-007, RN-AVI-009 | — | L |
| RF-AVI-009 | W | CA-AVI-009 | RN-AVI-006, RN-AVI-007 | — | L |
| RF-AVI-010 | W | CA-AVI-010 | RN-AVI-007 | — | L |
| RF-AVI-011 | W | CA-AVI-011 | RN-AVI-001 | — | L |
| RF-AVI-012 | W | CA-AVI-012 | RN-AVI-003, RN-AVI-008, RN-AVI-009 | — | L |
| RF-AVI-013 | W | CA-AVI-013 | RN-AVI-004, RN-AVI-008 | — | L |
| RF-AVI-014 | W | CA-AVI-014 | L | — | L |
| RF-AVI-015 | W | CA-AVI-015 | RN-AVI-004 | — | L |
| RF-AVI-016 | W | CA-AVI-016 | L | — | L |
| RF-SINC-001 | M | CA-SINC-001 | RN-CVI-003, RN-SINC-001, RN-SINC-004 | PBI-048 | L |
| RF-SINC-002 | M | CA-SINC-002 | RN-SINC-001 | PBI-049 | L |
| RF-SINC-003 | M | CA-SINC-003 | RN-SINC-001 | PBI-049 | L |
| RF-SINC-004 | W | CA-SINC-004 | L | — | L |
| RF-SINC-005 | W | CA-SINC-005 | RN-SINC-002 | — | L |
| RF-SINC-006 | W | CA-SINC-006 | RN-SINC-002 | — | L |
| RF-SINC-007 | M | CA-SINC-007 | RN-SINC-005 | PBI-049 | L |
| RF-SINC-008 | M | CA-SINC-008 | L | PBI-049 | L |
| RF-SINC-009 | M | CA-SINC-009 | RN-SINC-003 | PBI-049 | L |
| RF-SINC-010 | M | CA-SINC-010 | RN-SINC-005 | PBI-049 | L |
| RF-SINC-011 | M | CA-SINC-011 | RN-SINC-004 | PBI-048 | L |
| RF-SINC-012 | M | CA-SINC-012 | RN-CVI-003, RN-SINC-004, RN-SINC-006 | PBI-050 | L |
| RF-SINC-013 | M | CA-SINC-013 | RN-SINC-006 | PBI-050 | L |
| RF-SINC-014 | M | CA-SINC-014 | RN-SINC-001 | PBI-051 | L |
| RF-SINC-015 | M | CA-SINC-015 | RN-SINC-004, RN-SINC-007 | PBI-051 | L |
| RF-AUD-001 | M | CA-AUD-001 | RN-AUD-001, RN-AUD-004, RN-AUD-005 | PBI-052 | L |
| RF-AUD-002 | M | CA-AUD-002 | RN-AUD-001, RN-AUD-005 | PBI-052 | L |
| RF-AUD-003 | M | CA-AUD-003 | RN-AUD-001, RN-AUD-005 | PBI-052 | L |
| RF-AUD-004 | M | CA-AUD-004 | RN-AUD-001, RN-AUD-005 | PBI-052 | L |
| RF-AUD-005 | W | CA-AUD-005 | RN-AUD-001, RN-AUD-005 | — | L |
| RF-AUD-006 | M | CA-AUD-006 | RN-AUD-003 | PBI-053 | L |
| RF-AUD-007 | M | CA-AUD-007 | RN-AUD-003 | PBI-053 | L |
| RF-AUD-008 | M | CA-AUD-008 | RN-AUD-003 | PBI-053 | L |
| RF-AUD-009 | M | CA-AUD-009 | RN-AUD-002, RN-AUD-004 | PBI-054 | L |
| RNF-SEG-001 | M | CA-NF-001 | RN-INF-001 | PBI-005 | CT-MVP-M12-001 |
| RNF-SEG-002 | M | CA-NF-002 | RN-INF-002 | PBI-005 | CT-MVP-M12-002 |
| RNF-SEG-003 | M | CA-NF-003 | RN-SINC-007 | PBI-048 | CT-MVP-M12-003 |
| RNF-DES-004 | M | CA-NF-004 | RN-INF-007 | PBI-007 | CT-MVP-M12-004 |
| RNF-DISP-005 | M | CA-NF-005 | RN-INF-006 | PBI-001 | CT-MVP-M12-005 |
| RNF-REC-006 | M | CA-NF-006 | RN-INF-005 | PBI-006 | CT-MVP-M12-006 |
| RNF-REC-007 | M | CA-NF-007 | RN-INF-005 | PBI-006 | CT-MVP-M12-007 |
| RNF-BKP-008 | M | CA-NF-008 | RN-INF-003 | PBI-006 | CT-MVP-M12-008 |
| RNF-BKP-009 | M | CA-NF-009 | RN-INF-003 | PBI-006 | CT-MVP-M12-009 |
| RNF-BKP-010 | M | CA-NF-010 | RN-INF-003 | PBI-006 | CT-MVP-M12-010 |
| RNF-BKP-011 | M | CA-NF-011 | RN-INF-004 | PBI-006 | CT-MVP-M12-011 |
### RN
| ID | MVP E | RF/RNF P | PBI derivado P |
|---|---|---|---|
| RN-AUT-001 | M | RF-AUT-001, RF-USR-002 | PBI-010, PBI-018 |
| RN-AUT-002 | M | RF-USR-001, RF-USR-003, RF-AUT-002 | PBI-018, PBI-011 |
| RN-AUT-003 | M | RF-AUT-006, RF-AUT-010 | PBI-012, PBI-013 |
| RN-AUT-004 | M | RF-AUT-014, RF-AUT-015, RF-AUT-016 | PBI-015 |
| RN-AUT-005 | M | RF-AUT-007, RF-AUT-008, RF-AUT-012 | PBI-012, PBI-014 |
| RN-USR-001 | M | RF-USR-009, RF-USR-010, RF-USR-017 | PBI-021 |
| RN-USR-002 | M | RF-USR-013, RF-USR-014, RF-USR-015 | PBI-022 |
| RN-USR-003 | M | RF-USR-010, RF-USR-016, RF-USR-018 | PBI-021, PBI-022 |
| RN-USR-004 | M | RF-USR-011, RF-USR-012, RF-USR-013, RF-USR-014, RF-USR-015, RF-USR-016, RF-USR-019 | PBI-022 |
| RN-CON-001 | M | RF-CON-001, RF-CON-002, RF-CON-003, RF-CON-004 | PBI-023, PBI-024 |
| RN-CON-002 | M | RF-CON-003 | PBI-024 |
| RN-CON-003 | M | RF-CON-004 | PBI-024 |
| RN-CVI-001 | M | RF-CVI-001, RF-CVI-002, RF-CVI-003 | PBI-025, PBI-026, PBI-027 |
| RN-CVI-002 | M | RF-MSG-001, RF-MSG-005, RF-MSG-006 | PBI-033, PBI-035 |
| RN-CVI-003 | M | RF-MSG-003, RF-ARQ-001, RF-SINC-001, RF-SINC-012 | PBI-033, PBI-043, PBI-048, PBI-050 |
| RN-GRP-001 | M | RF-GRP-001, RF-GRP-002, RF-GRP-003, RF-GRP-004, RF-GRP-005, RF-GRP-017 | PBI-028, PBI-029, PBI-030 |
| RN-GRP-002 | M | RF-GRP-008, RF-GRP-009, RF-GRP-010, RF-GRP-011 | PBI-031 |
| RN-GRP-003 | M | RF-GRP-005, RF-GRP-006 | PBI-030 |
| RN-GRP-004 | M | RF-GRP-012, RF-GRP-013, RF-GRP-014, RF-GRP-015, RF-GRP-016 | PBI-031 |
| RN-GRP-012 | M | RF-GRP-012 | PBI-031 |
| RN-GRP-013 | M | RF-GRP-008, RF-GRP-012 | PBI-031 |
| RN-GRP-014 | M | RF-GRP-013, RF-GRP-014, RF-GRP-016 | PBI-031 |
| RN-GRP-015 | M | RF-GRP-013, RF-GRP-014, RF-GRP-015, RF-GRP-016 | PBI-031 |
| RN-GRP-016 | M | RF-GRP-014, RF-GRP-015, RF-GRP-016 | PBI-031 |
| RN-MSG-001 | M | RF-MSG-001, RF-MSG-005 | PBI-033, PBI-035 |
| RN-MSG-002 | M | RF-MSG-001, RF-MSG-002 | PBI-033, PBI-034 |
| RN-MSG-003 | M | RF-CVI-004 | PBI-025 |
| RN-MSG-004 | M | RF-MSG-008, RF-MSG-009, RF-MSG-010, RF-MSG-011 | PBI-036, PBI-037 |
| RN-MSG-005 | M | RF-MSG-003, RF-MSG-008, RF-MSG-009 | PBI-033, PBI-036 |
| RN-ARQ-001 | M | RF-ARQ-021, RF-ARQ-022 | PBI-040 |
| RN-ARQ-002 | M | RF-ARQ-006, RF-ARQ-021, RF-ARQ-024 | PBI-041, PBI-040, PBI-042 |
| RN-ARQ-003 | M | RF-ARQ-007, RF-ARQ-008, RF-ARQ-009, RF-ARQ-010, RF-ARQ-012 | PBI-041 |
| RN-ARQ-004 | M | RF-ARQ-001, RF-ARQ-002, RF-ARQ-003, RF-ARQ-004, RF-ARQ-005 | PBI-043 |
| RN-ARQ-005 | M | RF-ARQ-014, RF-ARQ-015, RF-ARQ-016, RF-ARQ-017, RF-ARQ-018, RF-ARQ-019, RF-ARQ-020 | PBI-044, PBI-043 |
| RN-ARQ-006 | M | RF-ARQ-009, RF-ARQ-011, RF-ARQ-025 | PBI-041, PBI-042 |
| RN-NOT-001 | M | RF-NOT-001, RF-NOT-002, RF-NOT-003, RF-NOT-004 | PBI-046, PBI-047 |
| RN-NOT-002 | W | RF-NOT-003 | — |
| RN-NOT-003 | M | RF-NOT-004 | PBI-047 |
| RN-AVI-001 | W | RF-AVI-002, RF-AVI-011 | — |
| RN-AVI-002 | W | RF-AVI-001, RF-AVI-003 | — |
| RN-AVI-003 | W | RF-AVI-008, RF-AVI-012, RF-NOT-003 | — |
| RN-AVI-004 | W | RF-AVI-013, RF-AVI-015 | — |
| RN-AVI-005 | W | RF-AVI-007, RF-AVI-008 | — |
| RN-AVI-006 | W | RF-AVI-009 | — |
| RN-AVI-007 | W | RF-AVI-008, RF-AVI-009, RF-AVI-010 | — |
| RN-AVI-008 | W | RF-AVI-012, RF-AVI-013 | — |
| RN-AVI-009 | W | RF-AVI-008, RF-AVI-012 | — |
| RN-SINC-001 | M | RF-SINC-001, RF-SINC-002, RF-SINC-003, RF-SINC-014 | PBI-048, PBI-049, PBI-051 |
| RN-SINC-002 | W | RF-SINC-005, RF-SINC-006 | — |
| RN-SINC-003 | W | RF-SINC-009 | — |
| RN-SINC-004 | M | RF-SINC-001, RF-SINC-011, RF-SINC-012, RF-SINC-015 | PBI-048, PBI-050, PBI-051 |
| RN-SINC-005 | M | RF-SINC-007, RF-SINC-010 | PBI-049 |
| RN-SINC-006 | M | RF-SINC-012, RF-SINC-013 | PBI-050 |
| RN-SINC-007 | M | RNF-SEG-003, RF-SINC-015 | PBI-048, PBI-051 |
| RN-AUD-001 | M | RF-AUD-001, RF-AUD-002, RF-AUD-003, RF-AUD-004, RF-AUD-005 | PBI-052 |
| RN-AUD-002 | M | RF-AUD-009 | PBI-054 |
| RN-AUD-003 | M | RF-AUD-006, RF-AUD-007, RF-AUD-008 | PBI-053 |
| RN-AUD-004 | M | RF-AUD-001, RF-AUD-009 | PBI-052, PBI-054 |
| RN-AUD-005 | M | RF-AUD-001, RF-AUD-002, RF-AUD-003, RF-AUD-004, RF-AUD-005 | PBI-052 |
| RN-INF-001 | M | RNF-SEG-001 | PBI-005 |
| RN-INF-002 | M | RNF-SEG-002 | PBI-005 |
| RN-INF-003 | M | RNF-BKP-008, RNF-BKP-009, RNF-BKP-010 | PBI-006 |
| RN-INF-004 | M | RNF-BKP-011 | PBI-006 |
| RN-INF-005 | M | RNF-REC-006, RNF-REC-007 | PBI-006 |
| RN-INF-006 | M | RNF-DISP-005 | PBI-001 |
| RN-INF-007 | M | RNF-DES-004 | PBI-007 |
| RN-AUT-006 | M | RF-AUT-002, RF-AUT-003 | PBI-011 |
| RN-AUT-007 | M | RF-AUT-002, RF-AUT-003 | PBI-011 |
| RN-AUT-008 | M | RF-AUT-004 | PBI-012 |
| RN-AUT-009 | M | RF-AUT-005, RF-AUT-009 | PBI-012, PBI-016 |
| RN-AUT-010 | M | RF-AUT-006, RF-AUT-009 | PBI-012, PBI-016 |
| RN-AUT-011 | M | RF-AUT-010 | PBI-013 |
| RN-AUT-012 | M | RF-AUT-011, RF-AUT-013 | PBI-014 |
| RN-AUT-013 | M | RF-AUT-012, RF-AUT-013 | PBI-014 |
| RN-AUT-014 | M | RF-AUT-014, RF-AUT-015, RF-AUT-016 | PBI-015 |
| RN-AUT-015 | M | RF-AUT-017 | PBI-016 |
| RN-AUT-016 | M | RF-AUT-018, RF-AUT-009, RF-AUT-013, RF-AUT-015 | PBI-016, PBI-014, PBI-015 |
Regras negativas e concorrência exigem testes específicos; vínculo não comprova cobertura.
### CA
| ID | MVP E | RF/RNF conforme índice anterior | PBI derivado P | Teste |
|---|---|---|---|---|
| CA-AUT-001 | M | RF-AUT-001 (E) | PBI-010 | L |
| CA-AUT-002 | M | RF-AUT-002 (E) | PBI-011 | L |
| CA-AUT-003 | M | RF-AUT-003 (E) | PBI-011 | L |
| CA-AUT-004 | M | RF-AUT-004 (E) | PBI-012 | L |
| CA-AUT-005 | M | RF-AUT-005 (E) | PBI-012 | L |
| CA-AUT-006 | M | RF-AUT-006 (E) | PBI-012 | L |
| CA-AUT-007 | M | RF-AUT-007 (E) | PBI-012 | L |
| CA-AUT-008 | M | RF-AUT-008 (E) | PBI-012 | L |
| CA-AUT-009 | M | RF-AUT-009 (E) | PBI-016 | L |
| CA-AUT-010 | M | RF-AUT-010 (E) | PBI-013 | L |
| CA-AUT-011 | M | RF-AUT-011 (E) | PBI-014 | L |
| CA-AUT-012 | M | RF-AUT-012 (E) | PBI-014 | L |
| CA-AUT-013 | M | RF-AUT-013 (E) | PBI-014 | L |
| CA-AUT-014 | M | RF-AUT-014 (E) | PBI-015 | L |
| CA-AUT-015 | M | RF-AUT-015 (E) | PBI-015 | L |
| CA-AUT-016 | M | RF-AUT-016 (E) | PBI-015 | L |
| CA-AUT-017 | M | RF-AUT-017 (E) | PBI-016 | L |
| CA-AUT-018 | M | RF-AUT-018 (E) | PBI-016 | L |
| CA-USR-001 | M | RF-USR-001 (E) | PBI-018 | L |
| CA-USR-002 | M | RF-USR-002 (E) | PBI-018 | L |
| CA-USR-003 | M | RF-USR-003 (E) | PBI-018 | L |
| CA-USR-004 | M | RF-USR-004 (E) | PBI-019 | L |
| CA-USR-005 | M | RF-USR-005 (E) | PBI-019 | L |
| CA-USR-006 | M | RF-USR-006 (E) | PBI-020 | L |
| CA-USR-007 | M | RF-USR-007 (E) | PBI-020 | L |
| CA-USR-008 | M | RF-USR-008 (E) | PBI-020 | L |
| CA-USR-009 | M | RF-USR-009 (E) | PBI-021 | L |
| CA-USR-010 | M | RF-USR-010 (E) | PBI-021 | L |
| CA-USR-011 | M | RF-USR-011 (E) | PBI-022 | L |
| CA-USR-012 | W | RF-USR-012 (E) | — | L |
| CA-USR-013 | M | RF-USR-013 (E) | PBI-022 | L |
| CA-USR-014 | W | RF-USR-014 (E) | — | L |
| CA-USR-015 | M | RF-USR-015 (E) | PBI-022 | L |
| CA-USR-016 | M | RF-USR-016 (E) | PBI-022 | L |
| CA-USR-017 | M | RF-USR-017 (E) | PBI-021 | L |
| CA-USR-018 | M | RF-USR-018 (E) | PBI-022 | L |
| CA-USR-019 | W | RF-USR-019 (E) | — | L |
| CA-CON-001 | M | RF-CON-001 (E) | PBI-023 | L |
| CA-CON-002 | M | RF-CON-002 (E) | PBI-024 | L |
| CA-CON-003 | M | RF-CON-003 (E) | PBI-024 | L |
| CA-CON-004 | M | RF-CON-004 (E) | PBI-024 | L |
| CA-CON-005 | M | RF-CON-005 (E) | PBI-023 | L |
| CA-CVI-001 | M | RF-CVI-001 (E) | PBI-025 | L |
| CA-CVI-002 | M | RF-CVI-002 (E) | PBI-026 | L |
| CA-CVI-003 | M | RF-CVI-003 (E) | PBI-027 | L |
| CA-CVI-004 | M | RF-CVI-004 (E) | PBI-025 | L |
| CA-GRP-001 | M | RF-GRP-001 (E) | PBI-028 | L |
| CA-GRP-002 | M | RF-GRP-002 (E) | PBI-029 | L |
| CA-GRP-003 | M | RF-GRP-003 (E) | PBI-029 | L |
| CA-GRP-004 | M | RF-GRP-004 (E) | PBI-028 | L |
| CA-GRP-005 | M | RF-GRP-005 (E) | PBI-030 | L |
| CA-GRP-006 | M | RF-GRP-006 (E) | PBI-030 | L |
| CA-GRP-007 | M | RF-GRP-007 (E) | PBI-032 | L |
| CA-GRP-008 | M | RF-GRP-008 (E) | PBI-031 | L |
| CA-GRP-009 | M | RF-GRP-009 (E) | PBI-031 | L |
| CA-GRP-010 | M | RF-GRP-010 (E) | PBI-031 | L |
| CA-GRP-011 | M | RF-GRP-011 (E) | PBI-031 | L |
| CA-GRP-013 | M | RF-GRP-012 (E) | PBI-031 | L |
| CA-GRP-014 | M | RF-GRP-013 (E) | PBI-031 | L |
| CA-GRP-015 | M | RF-GRP-014 (E) | PBI-031 | L |
| CA-GRP-016 | M | RF-GRP-014 (E) | PBI-031 | L |
| CA-GRP-018 | M | RF-GRP-015 (E) | PBI-031 | L |
| CA-GRP-017 | M | RF-GRP-016 (E) | PBI-031 | L |
| CA-GRP-019 | M | RF-GRP-016 (E) | PBI-031 | L |
| CA-GRP-020 | M | RF-GRP-017 (E) | PBI-029 | L |
| CA-MSG-001 | M | RF-MSG-001 (E) | PBI-033 | L |
| CA-MSG-002 | M | RF-MSG-002 (E) | PBI-034 | L |
| CA-MSG-003 | M | RF-MSG-003 (E) | PBI-033 | L |
| CA-MSG-004 | M | RF-MSG-004 (E) | PBI-033 | L |
| CA-MSG-005 | M | RF-MSG-005 (E) | PBI-035 | L |
| CA-MSG-006 | M | RF-MSG-006 (E) | PBI-035 | L |
| CA-MSG-007 | M | RF-MSG-007 (E) | PBI-035 | L |
| CA-MSG-008 | M | RF-MSG-008 (E) | PBI-036 | L |
| CA-MSG-009 | M | RF-MSG-009 (E) | PBI-036 | L |
| CA-MSG-010 | M | RF-MSG-010 (E) | PBI-037 | L |
| CA-MSG-011 | M | RF-MSG-011 (E) | PBI-037 | L |
| CA-MSG-012 | M | RF-MSG-012 (E) | PBI-037 | L |
| CA-MSG-013 | M | RF-MSG-013 (E) | PBI-038 | L |
| CA-MSG-014 | M | RF-MSG-014 (E) | PBI-038 | L |
| CA-ARQ-001 | M | RF-ARQ-001 (E) | PBI-043 | L |
| CA-ARQ-002 | M | RF-ARQ-002 (E) | PBI-043 | L |
| CA-ARQ-003 | M | RF-ARQ-003 (E) | PBI-043 | L |
| CA-ARQ-004 | M | RF-ARQ-004 (E) | PBI-043 | L |
| CA-ARQ-005 | M | RF-ARQ-005 (E) | PBI-043 | L |
| CA-ARQ-006 | M | RF-ARQ-006 (E) | PBI-041 | L |
| CA-ARQ-007 | M | RF-ARQ-007 (E) | PBI-041 | L |
| CA-ARQ-008 | M | RF-ARQ-008 (E) | PBI-041 | L |
| CA-ARQ-009 | M | RF-ARQ-009 (E) | PBI-041 | L |
| CA-ARQ-010 | M | RF-ARQ-010 (E) | PBI-041 | L |
| CA-ARQ-011 | M | RF-ARQ-011 (E) | PBI-041 | L |
| CA-ARQ-012 | M | RF-ARQ-012 (E) | PBI-041 | L |
| CA-ARQ-013 | M | RF-ARQ-013 (E) | PBI-041 | L |
| CA-ARQ-014 | M | RF-ARQ-014 (E) | PBI-044 | L |
| CA-ARQ-015 | M | RF-ARQ-015 (E) | PBI-044 | L |
| CA-ARQ-016 | M | RF-ARQ-016 (E) | PBI-044 | L |
| CA-ARQ-017 | M | RF-ARQ-017 (E) | PBI-043 | L |
| CA-ARQ-018 | M | RF-ARQ-018 (E) | PBI-043 | L |
| CA-ARQ-019 | M | RF-ARQ-019 (E) | PBI-044 | L |
| CA-ARQ-020 | M | RF-ARQ-020 (E) | PBI-044 | L |
| CA-ARQ-021 | M | RF-ARQ-021 (E) | PBI-040 | L |
| CA-ARQ-022 | M | RF-ARQ-022 (E) | PBI-040 | L |
| CA-ARQ-023 | M | RF-ARQ-023 (E) | PBI-042 | L |
| CA-ARQ-024 | M | RF-ARQ-024 (E) | PBI-042 | L |
| CA-ARQ-025 | M | RF-ARQ-025 (E) | PBI-042 | L |
| CA-ARQ-026 | M | RF-ARQ-026 (E) | PBI-044 | L |
| CA-ARQ-027 | M | RF-ARQ-027 (E) | PBI-044 | L |
| CA-NOT-001 | M | RF-NOT-001 (E) | PBI-046 | L |
| CA-NOT-002 | M | RF-NOT-002 (E) | PBI-046 | L |
| CA-NOT-003 | W | RF-NOT-003 (E) | — | L |
| CA-NOT-004 | M | RF-NOT-004 (E) | PBI-047 | L |
| CA-AVI-001 | W | RF-AVI-001 (E) | — | L |
| CA-AVI-002 | W | RF-AVI-002 (E) | — | L |
| CA-AVI-003 | W | RF-AVI-003 (E) | — | L |
| CA-AVI-004 | W | RF-AVI-004 (E) | — | L |
| CA-AVI-005 | W | RF-AVI-005 (E) | — | L |
| CA-AVI-006 | W | RF-AVI-006 (E) | — | L |
| CA-AVI-007 | W | RF-AVI-007 (E) | — | L |
| CA-AVI-008 | W | RF-AVI-008 (E) | — | L |
| CA-AVI-009 | W | RF-AVI-009 (E) | — | L |
| CA-AVI-010 | W | RF-AVI-010 (E) | — | L |
| CA-AVI-011 | W | RF-AVI-011 (E) | — | L |
| CA-AVI-012 | W | RF-AVI-012 (E) | — | L |
| CA-AVI-013 | W | RF-AVI-013 (E) | — | L |
| CA-AVI-014 | W | RF-AVI-014 (E) | — | L |
| CA-AVI-015 | W | RF-AVI-015 (E) | — | L |
| CA-AVI-016 | W | RF-AVI-016 (E) | — | L |
| CA-SINC-001 | M | RF-SINC-001 (E) | PBI-048 | L |
| CA-SINC-002 | M | RF-SINC-002 (E) | PBI-049 | L |
| CA-SINC-003 | M | RF-SINC-003 (E) | PBI-049 | L |
| CA-SINC-004 | W | RF-SINC-004 (E) | — | L |
| CA-SINC-005 | W | RF-SINC-005 (E) | — | L |
| CA-SINC-006 | W | RF-SINC-006 (E) | — | L |
| CA-SINC-007 | M | RF-SINC-007 (E) | PBI-049 | L |
| CA-SINC-008 | M | RF-SINC-008 (E) | PBI-049 | L |
| CA-SINC-009 | M | RF-SINC-009 (E) | PBI-049 | L |
| CA-SINC-010 | M | RF-SINC-010 (E) | PBI-049 | L |
| CA-SINC-011 | M | RF-SINC-011 (E) | PBI-048 | L |
| CA-SINC-012 | M | RF-SINC-012 (E) | PBI-050 | L |
| CA-SINC-013 | M | RF-SINC-013 (E) | PBI-050 | L |
| CA-SINC-014 | M | RF-SINC-014 (E) | PBI-051 | L |
| CA-SINC-015 | M | RF-SINC-015 (E) | PBI-051 | L |
| CA-AUD-001 | M | RF-AUD-001 (E) | PBI-052 | L |
| CA-AUD-002 | M | RF-AUD-002 (E) | PBI-052 | L |
| CA-AUD-003 | M | RF-AUD-003 (E) | PBI-052 | L |
| CA-AUD-004 | M | RF-AUD-004 (E) | PBI-052 | L |
| CA-AUD-005 | W | RF-AUD-005 (E) | — | L |
| CA-AUD-006 | M | RF-AUD-006 (E) | PBI-053 | L |
| CA-AUD-007 | M | RF-AUD-007 (E) | PBI-053 | L |
| CA-AUD-008 | M | RF-AUD-008 (E) | PBI-053 | L |
| CA-AUD-009 | M | RF-AUD-009 (E) | PBI-054 | L |
| CA-NF-001 | M | RNF-SEG-001 (E) | PBI-005 | CT-MVP-M12-001 |
| CA-NF-002 | M | RNF-SEG-002 (E) | PBI-005 | CT-MVP-M12-002 |
| CA-NF-003 | M | RNF-SEG-003 (E) | PBI-048 | CT-MVP-M12-003 |
| CA-NF-004 | M | RNF-DES-004 (E) | PBI-007 | CT-MVP-M12-004 |
| CA-NF-005 | M | RNF-DISP-005 (E) | PBI-001 | CT-MVP-M12-005 |
| CA-NF-006 | M | RNF-REC-006 (E) | PBI-006 | CT-MVP-M12-006 |
| CA-NF-007 | M | RNF-REC-007 (E) | PBI-006 | CT-MVP-M12-007 |
| CA-NF-008 | M | RNF-BKP-008 (E) | PBI-006 | CT-MVP-M12-008 |
| CA-NF-009 | M | RNF-BKP-009 (E) | PBI-006 | CT-MVP-M12-009 |
| CA-NF-010 | M | RNF-BKP-010 (E) | PBI-006 | CT-MVP-M12-010 |
| CA-NF-011 | M | RNF-BKP-011 (E) | PBI-006 | CT-MVP-M12-011 |
| CA-AUT-019 | M | RF-AUT-002, RF-AUT-003 (P) | PBI-011 | L |
| CA-AUT-020 | M | RF-AUT-002, RF-AUT-003 (P) | PBI-011 | L |
| CA-AUT-021 | M | RF-AUT-004 (P) | PBI-012 | L |
| CA-AUT-022 | M | RF-AUT-005, RF-AUT-009 (P) | PBI-012, PBI-016 | L |
| CA-AUT-023 | M | RF-AUT-006, RF-AUT-007, RF-AUT-008, RF-AUT-009 (P) | PBI-012, PBI-016 | L |
| CA-AUT-024 | M | RF-AUT-006, RF-AUT-009 (P) | PBI-012, PBI-016 | L |
| CA-AUT-025 | M | RF-AUT-010 (P) | PBI-013 | L |
| CA-AUT-026 | M | RF-AUT-010 (P) | PBI-013 | L |
| CA-AUT-027 | M | RF-AUT-011, RF-AUT-013 (P) | PBI-014 | L |
| CA-AUT-028 | M | RF-AUT-012, RF-AUT-013 (P) | PBI-014 | L |
| CA-AUT-029 | M | RF-AUT-014 (P) | PBI-015 | L |
| CA-AUT-030 | M | RF-AUT-014, RF-AUT-015, RF-AUT-016 (P) | PBI-015 | L |
| CA-AUT-031 | M | RF-AUT-017 (P) | PBI-016 | L |
| CA-AUT-032 | M | RF-AUT-018 (P) | PBI-016 | L |
| CA-AUT-033 | M | RF-AUT-009, RF-AUT-013, RF-AUT-015, RF-AUT-018 (P) | PBI-016, PBI-014, PBI-015 | L |
| CA-AUT-034 | M | RF-AUT-017, RF-AUT-018 (P) | PBI-016 | L |
### CON e CEN
| ID | MVP E | CON origem E | PBI P | Teste individual |
|---|---|---|---|---|
| CON-M01-001 | M | — | PBI-016 | L |
| CON-M01-002 | M | — | PBI-012, PBI-017 | L |
| CON-M01-003 | M | — | PBI-013, PBI-017 | L |
| CON-M01-004 | M | — | PBI-012, PBI-014, PBI-017 | L |
| CON-M01-005 | M | — | PBI-013, PBI-014, PBI-017 | L |
| CON-M01-006 | M | — | PBI-012, PBI-013, PBI-017 | L |
| CON-M01-007 | M | — | PBI-012, PBI-017 | L |
| CON-M01-008 | M | — | PBI-013, PBI-017 | L |
| CON-M01-009 | M | — | PBI-012, PBI-013, PBI-017 | L |
| CON-M01-010 | M | — | PBI-014, PBI-015, PBI-017 | L |
| CON-M01-011 | M | — | PBI-015, PBI-016, PBI-017 | L |
| CON-M01-012 | M | — | PBI-016, PBI-036, PBI-049 | L |
| CON-M01-013 | M | — | PBI-014, PBI-036, PBI-037 | L |
| CON-M01-014 | M | — | PBI-014, PBI-016 | L |
| CON-M01-015 | M | — | PBI-016, PBI-037, PBI-049 | L |
| CON-M01-016 | M | — | PBI-011, PBI-014 | L |
| CON-M01-017 | M | — | PBI-011, PBI-013 | L |
| CON-M01-018 | M | — | PBI-012, PBI-013, PBI-014 | L |
| CON-M01-019 | M | — | PBI-012, PBI-013, PBI-014 | L |
| CEN-CON-M01-001-001 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-001-002 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-001-003 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-001-004 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-001-005 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-001-006 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-001-007 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-001-008 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-001-009 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-001-010 | M | CON-M01-001 | PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-002-001 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-002 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-003 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-004 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-005 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-006 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-007 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-008 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-009 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-010 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-011 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-002-012 | M | CON-M01-002 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-001 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-002 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-003 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-004 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-005 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-006 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-007 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-008 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-009 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-010 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-011 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-012 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-013 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-014 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-015 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-016 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-017 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-003-018 | M | CON-M01-003 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-001 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-002 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-003 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-004 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-005 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-006 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-007 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-008 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-009 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-010 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-011 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-012 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-013 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-014 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-015 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-016 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-017 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-004-018 | M | CON-M01-004 | PBI-012, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-001 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-002 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-003 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-004 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-005 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-006 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-007 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-008 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-009 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-010 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-011 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-012 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-013 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-014 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-015 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-016 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-017 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-005-018 | M | CON-M01-005 | PBI-013, PBI-014, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-001 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-002 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-003 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-004 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-005 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-006 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-007 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-008 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-009 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-010 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-011 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-012 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-013 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-014 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-015 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-016 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-017 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-006-018 | M | CON-M01-006 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-001 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-002 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-003 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-004 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-005 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-006 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-007 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-008 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-009 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-010 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-011 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-012 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-013 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-014 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-015 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-016 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-017 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-018 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-019 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-007-020 | M | CON-M01-007 | PBI-012, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-001 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-002 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-003 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-004 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-005 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-006 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-007 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-008 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-009 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-010 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-011 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-012 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-013 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-014 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-015 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-016 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-017 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-018 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-019 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-020 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-021 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-022 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-023 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-008-024 | M | CON-M01-008 | PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-001 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-002 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-003 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-004 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-005 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-006 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-007 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-008 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-009 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-010 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-011 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-012 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-013 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-014 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-015 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-016 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-017 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-018 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-019 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-020 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-021 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-022 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-023 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-009-024 | M | CON-M01-009 | PBI-012, PBI-013, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-001 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-002 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-003 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-004 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-005 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-006 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-007 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-008 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-009 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-010 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-011 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-012 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-013 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-014 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-015 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-016 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-017 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-018 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-019 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-010-020 | M | CON-M01-010 | PBI-014, PBI-015, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-001 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-002 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-003 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-004 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-005 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-006 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-007 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-008 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-009 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-010 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-011 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-012 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-013 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-014 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-015 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-016 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-017 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-018 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-019 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-020 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-021 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-022 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-023 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-011-024 | M | CON-M01-011 | PBI-015, PBI-016, PBI-017 | L — INC-DOC-004 |
| CEN-CON-M01-012-001 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-002 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-003 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-004 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-005 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-006 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-007 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-008 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-009 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-010 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-011 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-012 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-013 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-014 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-015 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-016 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-017 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-018 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-019 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-020 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-021 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-022 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-023 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-024 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-025 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-026 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-027 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-012-028 | M | CON-M01-012 | PBI-016, PBI-036, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-013-001 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-002 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-003 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-004 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-005 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-006 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-007 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-008 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-009 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-010 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-011 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-012 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-013 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-014 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-015 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-016 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-017 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-018 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-019 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-020 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-021 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-022 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-023 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-024 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-025 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-026 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-027 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-028 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-029 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-013-030 | M | CON-M01-013 | PBI-014, PBI-036, PBI-037 | L — INC-DOC-004 |
| CEN-CON-M01-014-001 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-002 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-003 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-004 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-005 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-006 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-007 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-008 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-009 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-010 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-011 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-012 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-013 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-014 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-015 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-016 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-017 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-018 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-019 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-020 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-021 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-022 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-023 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-024 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-025 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-014-026 | M | CON-M01-014 | PBI-014, PBI-016 | L — INC-DOC-004 |
| CEN-CON-M01-015-001 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-002 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-003 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-004 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-005 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-006 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-007 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-008 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-009 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-010 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-011 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-012 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-013 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-014 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-015 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-016 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-017 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-018 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-019 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-020 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-021 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-022 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-023 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-024 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-025 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-026 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-027 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-015-028 | M | CON-M01-015 | PBI-016, PBI-037, PBI-049 | L — INC-DOC-004 |
| CEN-CON-M01-016-001 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-002 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-003 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-004 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-005 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-006 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-007 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-008 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-009 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-010 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-011 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-012 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-013 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-014 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-015 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-016 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-017 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-018 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-019 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-016-020 | M | CON-M01-016 | PBI-011, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-017-001 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-002 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-003 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-004 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-005 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-006 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-007 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-008 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-009 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-010 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-011 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-012 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-013 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-014 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-015 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-016 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-017 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-018 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-019 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-020 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-021 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-022 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-023 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-017-024 | M | CON-M01-017 | PBI-011, PBI-013 | L — INC-DOC-004 |
| CEN-CON-M01-018-001 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-002 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-003 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-004 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-005 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-006 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-007 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-008 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-009 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-010 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-011 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-012 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-013 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-014 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-015 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-016 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-017 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-018 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-019 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-020 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-021 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-022 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-023 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-024 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-025 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-018-026 | M | CON-M01-018 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-001 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-002 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-003 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-004 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-005 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-006 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-007 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-008 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-009 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-010 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-011 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-012 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-013 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-014 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-015 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-016 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-017 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-018 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-019 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-020 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-021 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-022 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-023 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
| CEN-CON-M01-019-024 | M | CON-M01-019 | PBI-012, PBI-013, PBI-014 | L — INC-DOC-004 |
### Índice reverso PBI
| PBI | RF/RNF principal P | Issues candidatas MVP-05 |
|---|---|---|
| PBI-001 | RNF-DISP-005 | [#86](https://github.com/Asa-3/App.cef/issues/86), [#92](https://github.com/Asa-3/App.cef/issues/92), [#95](https://github.com/Asa-3/App.cef/issues/95) |
| PBI-002 | Atividade complementar/transversal; ver MVP-05 | [#87](https://github.com/Asa-3/App.cef/issues/87), [#88](https://github.com/Asa-3/App.cef/issues/88), [#93](https://github.com/Asa-3/App.cef/issues/93), [#94](https://github.com/Asa-3/App.cef/issues/94) |
| PBI-003 | Atividade complementar/transversal; ver MVP-05 | [#14](https://github.com/Asa-3/App.cef/issues/14), [#24](https://github.com/Asa-3/App.cef/issues/24), [#89](https://github.com/Asa-3/App.cef/issues/89) |
| PBI-004 | Atividade complementar/transversal; ver MVP-05 | [#22](https://github.com/Asa-3/App.cef/issues/22), [#91](https://github.com/Asa-3/App.cef/issues/91) |
| PBI-005 | RNF-SEG-001, RNF-SEG-002 | [#15](https://github.com/Asa-3/App.cef/issues/15), [#26](https://github.com/Asa-3/App.cef/issues/26), [#90](https://github.com/Asa-3/App.cef/issues/90) |
| PBI-006 | RNF-REC-006, RNF-REC-007, RNF-BKP-008, RNF-BKP-009, RNF-BKP-010, RNF-BKP-011 | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| PBI-007 | RNF-DES-004 | [#101](https://github.com/Asa-3/App.cef/issues/101) |
| PBI-008 | Atividade complementar/transversal; ver MVP-05 | [#100](https://github.com/Asa-3/App.cef/issues/100) |
| PBI-009 | Atividade complementar/transversal; ver MVP-05 | [#13](https://github.com/Asa-3/App.cef/issues/13), [#35](https://github.com/Asa-3/App.cef/issues/35), [#36](https://github.com/Asa-3/App.cef/issues/36), [#37](https://github.com/Asa-3/App.cef/issues/37), [#38](https://github.com/Asa-3/App.cef/issues/38), [#45](https://github.com/Asa-3/App.cef/issues/45), [#46](https://github.com/Asa-3/App.cef/issues/46) |
| PBI-010 | RF-AUT-001 | [#25](https://github.com/Asa-3/App.cef/issues/25), [#39](https://github.com/Asa-3/App.cef/issues/39), [#47](https://github.com/Asa-3/App.cef/issues/47), [#60](https://github.com/Asa-3/App.cef/issues/60) |
| PBI-011 | RF-AUT-002, RF-AUT-003 | [#25](https://github.com/Asa-3/App.cef/issues/25), [#39](https://github.com/Asa-3/App.cef/issues/39), [#60](https://github.com/Asa-3/App.cef/issues/60) |
| PBI-012 | RF-AUT-004, RF-AUT-005, RF-AUT-006, RF-AUT-007, RF-AUT-008 | [#25](https://github.com/Asa-3/App.cef/issues/25), [#47](https://github.com/Asa-3/App.cef/issues/47), [#60](https://github.com/Asa-3/App.cef/issues/60) |
| PBI-013 | RF-AUT-010 | [#25](https://github.com/Asa-3/App.cef/issues/25), [#60](https://github.com/Asa-3/App.cef/issues/60) |
| PBI-014 | RF-AUT-011, RF-AUT-012, RF-AUT-013 | [#25](https://github.com/Asa-3/App.cef/issues/25), [#102](https://github.com/Asa-3/App.cef/issues/102) |
| PBI-015 | RF-AUT-014, RF-AUT-015, RF-AUT-016 | [#25](https://github.com/Asa-3/App.cef/issues/25), [#66](https://github.com/Asa-3/App.cef/issues/66) |
| PBI-016 | RF-AUT-009, RF-AUT-017, RF-AUT-018 | [#25](https://github.com/Asa-3/App.cef/issues/25), [#66](https://github.com/Asa-3/App.cef/issues/66), [#102](https://github.com/Asa-3/App.cef/issues/102) |
| PBI-017 | Atividade complementar/transversal; ver MVP-05 | [#66](https://github.com/Asa-3/App.cef/issues/66), [#102](https://github.com/Asa-3/App.cef/issues/102) |
| PBI-018 | RF-USR-001, RF-USR-002, RF-USR-003 | [#27](https://github.com/Asa-3/App.cef/issues/27) |
| PBI-019 | RF-USR-004, RF-USR-005 | [#27](https://github.com/Asa-3/App.cef/issues/27), [#57](https://github.com/Asa-3/App.cef/issues/57), [#62](https://github.com/Asa-3/App.cef/issues/62) |
| PBI-020 | RF-USR-006, RF-USR-007, RF-USR-008 | [#27](https://github.com/Asa-3/App.cef/issues/27), [#40](https://github.com/Asa-3/App.cef/issues/40), [#57](https://github.com/Asa-3/App.cef/issues/57), [#62](https://github.com/Asa-3/App.cef/issues/62) |
| PBI-021 | RF-USR-009, RF-USR-010, RF-USR-017 | [#27](https://github.com/Asa-3/App.cef/issues/27), [#100](https://github.com/Asa-3/App.cef/issues/100) |
| PBI-022 | RF-USR-011, RF-USR-013, RF-USR-015, RF-USR-016, RF-USR-018 | [#27](https://github.com/Asa-3/App.cef/issues/27), [#100](https://github.com/Asa-3/App.cef/issues/100) |
| PBI-023 | RF-CON-001, RF-CON-005 | [#40](https://github.com/Asa-3/App.cef/issues/40), [#51](https://github.com/Asa-3/App.cef/issues/51), [#61](https://github.com/Asa-3/App.cef/issues/61) |
| PBI-024 | RF-CON-002, RF-CON-003, RF-CON-004 | [#51](https://github.com/Asa-3/App.cef/issues/51), [#61](https://github.com/Asa-3/App.cef/issues/61) |
| PBI-025 | RF-CVI-001, RF-CVI-004 | [#29](https://github.com/Asa-3/App.cef/issues/29), [#48](https://github.com/Asa-3/App.cef/issues/48), [#103](https://github.com/Asa-3/App.cef/issues/103) |
| PBI-026 | RF-CVI-002 | [#18](https://github.com/Asa-3/App.cef/issues/18), [#30](https://github.com/Asa-3/App.cef/issues/30) |
| PBI-027 | RF-CVI-003 | [#26](https://github.com/Asa-3/App.cef/issues/26), [#69](https://github.com/Asa-3/App.cef/issues/69) |
| PBI-028 | RF-GRP-001, RF-GRP-004 | [#29](https://github.com/Asa-3/App.cef/issues/29), [#42](https://github.com/Asa-3/App.cef/issues/42), [#53](https://github.com/Asa-3/App.cef/issues/53) |
| PBI-029 | RF-GRP-002, RF-GRP-003, RF-GRP-017 | [#29](https://github.com/Asa-3/App.cef/issues/29), [#53](https://github.com/Asa-3/App.cef/issues/53) |
| PBI-030 | RF-GRP-005, RF-GRP-006 | [#29](https://github.com/Asa-3/App.cef/issues/29), [#53](https://github.com/Asa-3/App.cef/issues/53) |
| PBI-031 | RF-GRP-008, RF-GRP-009, RF-GRP-010, RF-GRP-011, RF-GRP-012, RF-GRP-013, RF-GRP-014, RF-GRP-015, RF-GRP-016 | [#29](https://github.com/Asa-3/App.cef/issues/29), [#71](https://github.com/Asa-3/App.cef/issues/71) |
| PBI-032 | RF-GRP-007 | [#71](https://github.com/Asa-3/App.cef/issues/71) |
| PBI-033 | RF-MSG-001, RF-MSG-003, RF-MSG-004 | [#9](https://github.com/Asa-3/App.cef/issues/9), [#19](https://github.com/Asa-3/App.cef/issues/19), [#30](https://github.com/Asa-3/App.cef/issues/30), [#49](https://github.com/Asa-3/App.cef/issues/49) |
| PBI-034 | RF-MSG-002 | [#16](https://github.com/Asa-3/App.cef/issues/16), [#31](https://github.com/Asa-3/App.cef/issues/31), [#33](https://github.com/Asa-3/App.cef/issues/33), [#50](https://github.com/Asa-3/App.cef/issues/50) |
| PBI-035 | RF-MSG-005, RF-MSG-006, RF-MSG-007 | [#58](https://github.com/Asa-3/App.cef/issues/58), [#103](https://github.com/Asa-3/App.cef/issues/103) |
| PBI-036 | RF-MSG-008, RF-MSG-009 | [#19](https://github.com/Asa-3/App.cef/issues/19), [#21](https://github.com/Asa-3/App.cef/issues/21), [#67](https://github.com/Asa-3/App.cef/issues/67) |
| PBI-037 | RF-MSG-010, RF-MSG-011, RF-MSG-012 | [#19](https://github.com/Asa-3/App.cef/issues/19), [#67](https://github.com/Asa-3/App.cef/issues/67), [#68](https://github.com/Asa-3/App.cef/issues/68) |
| PBI-038 | RF-MSG-013, RF-MSG-014 | [#19](https://github.com/Asa-3/App.cef/issues/19), [#21](https://github.com/Asa-3/App.cef/issues/21), [#67](https://github.com/Asa-3/App.cef/issues/67) |
| PBI-039 | Atividade complementar/transversal; ver MVP-05 | [#98](https://github.com/Asa-3/App.cef/issues/98) |
| PBI-040 | RF-ARQ-021, RF-ARQ-022 | [#20](https://github.com/Asa-3/App.cef/issues/20), [#32](https://github.com/Asa-3/App.cef/issues/32), [#34](https://github.com/Asa-3/App.cef/issues/34) |
| PBI-041 | RF-ARQ-006, RF-ARQ-007, RF-ARQ-008, RF-ARQ-009, RF-ARQ-010, RF-ARQ-011, RF-ARQ-012, RF-ARQ-013 | [#32](https://github.com/Asa-3/App.cef/issues/32), [#98](https://github.com/Asa-3/App.cef/issues/98) |
| PBI-042 | RF-ARQ-023, RF-ARQ-024, RF-ARQ-025 | [#20](https://github.com/Asa-3/App.cef/issues/20), [#32](https://github.com/Asa-3/App.cef/issues/32), [#34](https://github.com/Asa-3/App.cef/issues/34) |
| PBI-043 | RF-ARQ-001, RF-ARQ-002, RF-ARQ-003, RF-ARQ-004, RF-ARQ-005, RF-ARQ-017, RF-ARQ-018 | [#32](https://github.com/Asa-3/App.cef/issues/32), [#98](https://github.com/Asa-3/App.cef/issues/98) |
| PBI-044 | RF-ARQ-014, RF-ARQ-015, RF-ARQ-016, RF-ARQ-019, RF-ARQ-020, RF-ARQ-026, RF-ARQ-027 | [#20](https://github.com/Asa-3/App.cef/issues/20), [#72](https://github.com/Asa-3/App.cef/issues/72), [#98](https://github.com/Asa-3/App.cef/issues/98) |
| PBI-045 | Atividade complementar/transversal; ver MVP-05 | [#106](https://github.com/Asa-3/App.cef/issues/106) |
| PBI-046 | RF-NOT-001, RF-NOT-002 | [#7](https://github.com/Asa-3/App.cef/issues/7), [#43](https://github.com/Asa-3/App.cef/issues/43), [#55](https://github.com/Asa-3/App.cef/issues/55), [#59](https://github.com/Asa-3/App.cef/issues/59) |
| PBI-047 | RF-NOT-004 | [#70](https://github.com/Asa-3/App.cef/issues/70) |
| PBI-048 | RF-SINC-001, RF-SINC-011, RNF-SEG-003 | [#18](https://github.com/Asa-3/App.cef/issues/18), [#21](https://github.com/Asa-3/App.cef/issues/21), [#30](https://github.com/Asa-3/App.cef/issues/30) |
| PBI-049 | RF-SINC-002, RF-SINC-003, RF-SINC-007, RF-SINC-008, RF-SINC-009, RF-SINC-010 | [#21](https://github.com/Asa-3/App.cef/issues/21), [#30](https://github.com/Asa-3/App.cef/issues/30), [#68](https://github.com/Asa-3/App.cef/issues/68) |
| PBI-050 | RF-SINC-012, RF-SINC-013 | [#20](https://github.com/Asa-3/App.cef/issues/20), [#21](https://github.com/Asa-3/App.cef/issues/21) |
| PBI-051 | RF-SINC-014, RF-SINC-015 | [#21](https://github.com/Asa-3/App.cef/issues/21), [#30](https://github.com/Asa-3/App.cef/issues/30), [#102](https://github.com/Asa-3/App.cef/issues/102) |
| PBI-052 | RF-AUD-001, RF-AUD-002, RF-AUD-003, RF-AUD-004 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| PBI-053 | RF-AUD-006, RF-AUD-007, RF-AUD-008 | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| PBI-054 | RF-AUD-009 | [#97](https://github.com/Asa-3/App.cef/issues/97), [#100](https://github.com/Asa-3/App.cef/issues/100) |
| PBI-055 | Atividade complementar/transversal; ver MVP-05 | [#80](https://github.com/Asa-3/App.cef/issues/80), [#85](https://github.com/Asa-3/App.cef/issues/85), [#105](https://github.com/Asa-3/App.cef/issues/105) |
| PBI-056 | Atividade complementar/transversal; ver MVP-05 | [#82](https://github.com/Asa-3/App.cef/issues/82), [#103](https://github.com/Asa-3/App.cef/issues/103), [#104](https://github.com/Asa-3/App.cef/issues/104) |
| PBI-057 | Atividade complementar/transversal; ver MVP-05 | [#65](https://github.com/Asa-3/App.cef/issues/65), [#84](https://github.com/Asa-3/App.cef/issues/84) |
| PBI-058 | Atividade complementar/transversal; ver MVP-05 | [#66](https://github.com/Asa-3/App.cef/issues/66), [#67](https://github.com/Asa-3/App.cef/issues/67), [#68](https://github.com/Asa-3/App.cef/issues/68), [#69](https://github.com/Asa-3/App.cef/issues/69), [#70](https://github.com/Asa-3/App.cef/issues/70), [#71](https://github.com/Asa-3/App.cef/issues/71), [#72](https://github.com/Asa-3/App.cef/issues/72), [#74](https://github.com/Asa-3/App.cef/issues/74) |
| PBI-059 | Atividade complementar/transversal; ver MVP-05 | [#44](https://github.com/Asa-3/App.cef/issues/44), [#73](https://github.com/Asa-3/App.cef/issues/73) |
| PBI-060 | Atividade complementar/transversal; ver MVP-05 | [#83](https://github.com/Asa-3/App.cef/issues/83), [#84](https://github.com/Asa-3/App.cef/issues/84), [#85](https://github.com/Asa-3/App.cef/issues/85) |
### Controle
RF-NOT-004, RF-SINC-011, RF-SINC-014, RN-AUD-001 e RN-USR-004: aplicação compartilhada limitada ao MVP. W não recebe PBI do MVP. #96 referência candidata de M09. Revisar propostas com PO/QA/TL; confirmar UML, testes, issues e IDs legados (#105). INC-DOC-003 parcial; INC-DOC-004/005 abertas. Nenhum teste executado.

## 12. Homologação individual M01
### DEC-RAST-M01-001 — aprovada pelo PO em 27/11/2026
RF-AUT-001 ↔ RN-AUT-001 ↔ CA-AUT-001; vínculo transversal RF-USR-002 e CA-USR-002, este último sujeito à conferência da cobertura integral da unicidade e permanência. Preservados IDs e enunciados. Aprovação documental não comprova execução. Manifestação: “Aprovo integralmente a DEC-RAST-M01-001. Registre a decisão e prossiga para o RF-AUT-002.”

### DEC-RAST-M01-002 — aprovada pelo PO em 27/11/2026
RF-AUT-002: RN diretas RN-AUT-006/007; complementares RN-AUT-002/008; CA direto CA-AUT-002; complementares CA-AUT-019/020/021 e CA-USR-003. RF relacionados RF-AUT-003/004 e RF-USR-001/003. Sequência obrigatória preservada. Referências DEC-M01-001/002/003, CON-M01-016, EP-002/PBI-011 sujeitas à revisão nas etapas próprias. LR-AUT-001 cobertura da sequência complementada por CA-AUT-019; LR-AUT-002 política de senha associada; LR-AUT-003 rejeição da senha inicial após substituição a verificar pelo QA. IDs e enunciados preservados. Manifestação: “Aprovo integralmente a DEC-RAST-M01-002. Registre a decisão e prossiga para o RF-AUT-003.”
