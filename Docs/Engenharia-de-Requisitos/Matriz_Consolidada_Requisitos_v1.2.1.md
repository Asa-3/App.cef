# Matriz Consolidada de Requisitos — Versão 1.2.1 (atualização da 1.2)
**Projeto:** Aplicativo mobile de comunicação interna empresarial (Funcionário e Administrador)  
**Data:** 12/11/2026  
**Status:** Base consolidada para revisão do PO; não homologada tecnicamente  
**Ferramentas previstas:** GitHub, Supabase, Vercel e desenvolvimento assistido por IA.

## 1. Convenções e controle de mudanças
Cada requisito tem identificador estável por módulo (`RF-XXX-###`), uma regra de verificação (`CA-XXX-###`) e regras de negócio complementares (`RN-XXX-###`). Os critérios abaixo descrevem resultados observáveis; testes detalhados podem desdobrá-los em múltiplos casos. `RNF` identifica requisitos não funcionais. Os IDs são novos e **não comprovam correspondência com os RF/RN originais**.
**Atualização v1.2.1 (12/11/2026):** decisão D-01 aprovada: readição de integrante reinicia integralmente o acesso ao histórico do grupo. Incluídos RF-GRP-012 a 016, RN-GRP-012 a 016 e CA-GRP-013 a 019. Para evitar colisão com identificadores existentes na v1.2, o antigo RF-GRP-012 foi renumerado para RF-GRP-017 e seu CA-GRP-012 para CA-GRP-020; a tabela de migração está no M05. Inventário atualizado.
**Correções da v1.2:** contagem recalculada; M03/M04/M06/M07/M10 com responsabilidades separadas; requisitos de arquivo individualizados; controles de primeiro acesso e bloqueio de login explicitados; períodos de grupo registrados; concorrência de avisos explicitada; requisitos de qualidade com pendências de medição.
**Escopo negativo:** sem envio de imagens como função independente; JPEG é permitido exclusivamente como tipo de anexo aprovado. Sem ligações, edição de mensagens, recibos de leitura, saída voluntária de grupos por Funcionários ou exclusão integral de conversas individuais.

## 2. Inventário
| Módulo | RF | RN | CA |
|---|---:|---:|---:|
| M01 — Autenticação e sessões | 18 | 5 | 18 |
| M02 — Contas e perfis | 19 | 4 | 19 |
| M03 — Contatos | 5 | 3 | 5 |
| M04 — Conversas individuais | 4 | 3 | 4 |
| M05 — Grupos | 17 | 9 | 20 |
| M06 — Mensagens e fila de envio | 14 | 5 | 14 |
| M07 — Anexos e downloads | 27 | 6 | 27 |
| M08 — Notificações | 4 | 3 | 4 |
| M09 — Avisos e lembretes | 16 | 9 | 16 |
| M10 — Histórico, cache e sincronização | 15 | 7 | 15 |
| M11 — Auditoria | 9 | 5 | 9 |
| M12 — Infraestrutura, segurança e qualidade | 0 | 7 | 0 |
| **Total funcional** | **148** | **66** | **151** |
| **M12 — RNF** | **11 RNF** | — | **11 CA-NF** |

## 3. Matriz de requisitos funcionais, regras e aceitação

### M01 — Autenticação e sessões
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
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

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-AUT-001 | Identificador de login é único e permanente por conta. |
| RN-AUT-002 | Somente o Administrador cria a conta e fornece senha inicial. |
| RN-AUT-003 | E-mail de recuperação é obrigatório e precisa ser confirmado. |
| RN-AUT-004 | Bloqueio e revogação são aplicados pelo servidor. |
| RN-AUT-005 | Links de recuperação e de troca de dispositivo expiram em 15 minutos. |

### M02 — Contas e perfis
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
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
| RF-USR-012 | Preservar avisos históricos existentes após exclusão do autor. | CA-USR-012 | Aviso continua visível aos destinatários, sem edição pelo autor excluído. |
| RF-USR-013 | Preservar nome completo original do autor nas mensagens históricas. | CA-USR-013 | Nome exibido não vira “Usuário excluído”. |
| RF-USR-014 | Preservar nome completo original do autor em avisos históricos. | CA-USR-014 | Aviso mantém nome original após exclusão. |
| RF-USR-015 | Preservar identificação histórica em registros de auditoria durante a retenção. | CA-USR-015 | Consulta autorizada mantém autoria por um ano. |
| RF-USR-016 | Manter autoria histórica distinta de credenciais de autenticação. | CA-USR-016 | Remoção da conta não causa perda de referências históricas. |
| RF-USR-017 | Permitir readmissão somente por nova conta e novo nome de usuário. | CA-USR-017 | Conta antiga não é reativada. |
| RF-USR-018 | Manter autoria antiga vinculada ao identificador histórico anterior após readmissão. | CA-USR-018 | Mensagens antigas não passam a pertencer à conta nova. |
| RF-USR-019 | Impedir edição ou exclusão global de avisos cujo autor tenha sido excluído. | CA-USR-019 | Aviso histórico permanece somente para leitura. |

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-USR-001 | A exclusão de conta é irreversível. |
| RN-USR-002 | O nome histórico preservado corresponde ao último nome completo registrado antes da exclusão. |
| RN-USR-003 | A preservação de autoria não mantém conta ativa. |
| RN-USR-004 | A retenção de dados históricos deverá ser revisada quanto à finalidade, necessidade e LGPD. |

### M03 — Contatos
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
| RF-CON-001 | Exibir lista pessoal de contatos. | CA-CON-001 | Titular vê somente sua lista. |
| RF-CON-002 | Adicionar usuário ativo cadastrado à lista pessoal. | CA-CON-002 | Usuário válido aparece na lista. |
| RF-CON-003 | Editar apelido local de contato. | CA-CON-003 | Apelido só muda na lista do titular. |
| RF-CON-004 | Remover contato da lista pessoal. | CA-CON-004 | Contato desaparece sem excluir mensagens. |
| RF-CON-005 | Pesquisar usuários ativos cadastrados por parte do nome. | CA-CON-005 | Busca parcial retorna correspondências autorizadas. |

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-CON-001 | Cada usuário administra apenas sua lista. |
| RN-CON-002 | Apelidos locais não alteram perfis globais. |
| RN-CON-003 | Remover contato não exclui conversa ou mensagens. |

### M04 — Conversas individuais
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
| RF-CVI-001 | Iniciar conversa individual entre dois usuários ativos cadastrados, independentemente da lista de contatos. | CA-CVI-001 | Dois usuários ativos iniciam conversa sem aceite prévio. |
| RF-CVI-002 | Permitir aos dois participantes consultar mensagens autorizadas da conversa. | CA-CVI-002 | Participante vê histórico; terceiro recebe acesso negado. |
| RF-CVI-003 | Impedir acesso à conversa por terceiros, inclusive Administradores não participantes. | CA-CVI-003 | Requisição direta de terceiro é rejeitada. |
| RF-CVI-004 | Manter histórico de conversa individual sem função de exclusão integral. | CA-CVI-004 | Não há comando de excluir conversa inteira. |

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-CVI-001 | Conversa individual possui exatamente dois participantes. |
| RN-CVI-002 | Envio/exclusão de mensagens são definidos em M06. |
| RN-CVI-003 | Anexos são definidos em M07; sincronização em M10. |

### M05 — Grupos
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
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

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-GRP-001 | Somente Administradores criam, administram e excluem grupos. |
| RN-GRP-002 | Novo integrante não vê mensagens nem anexos anteriores à entrada. |
| RN-GRP-003 | Exclusão de grupo é irreversível e apaga mensagens e anexos. |
| RN-GRP-004 | Após remoção e readição, o acesso é reiniciado: conteúdos anteriores à última entrada não são recuperáveis pelo integrante readicionado. |
| RN-GRP-012 | Cada readição inicia novo período de participação. |
| RN-GRP-013 | O horário de início do novo período é definido pelo servidor. |
| RN-GRP-014 | A readição não restaura permissões de períodos anteriores. |
| RN-GRP-015 | Somente mensagens e anexos enviados a partir da nova entrada podem ser consultados pelo readicionado. |
| RN-GRP-016 | O histórico anterior permanece armazenado para demais participantes autorizados, sem ser recuperado pelo readicionado. |

**Critérios de aceitação adicionais — readição**
| ID CA | Cenário | Resultado esperado |
|---|---|---|
| CA-GRP-013 | Usuário é removido e readicionado. | Registrar novo período de participação. |
| CA-GRP-014 | Usuário readicionado abre histórico. | Exibir somente mensagens da nova entrada em diante. |
| CA-GRP-015 | Usuário tenta acessar mensagem da primeira participação. | Negar acesso. |
| CA-GRP-016 | Usuário tenta baixar anexo de período anterior. | Negar acesso. |
| CA-GRP-017 | Usuário readicionado recebe nova mensagem. | Permitir visualização. |
| CA-GRP-018 | Usuário sincroniza histórico após readição. | Não restaurar mensagens de períodos anteriores ou de intervalo de remoção. |
| CA-GRP-019 | Usuário tenta consultar conteúdo antigo diretamente pela API. | Negar acesso no servidor. |

**Compatibilidade de IDs:** v1.2 `RF-GRP-012` → v1.2.1 `RF-GRP-017`; v1.2 `CA-GRP-012` → v1.2.1 `CA-GRP-020`. Os demais IDs de M05 permanecem inalterados. `RN-GRP-005` a `RN-GRP-011` estão reservados, não representam requisitos aprovados. A restrição também vale para Administradores quando atuam como integrantes, sem conceder acesso irrestrito ao histórico.

### M06 — Mensagens e fila de envio
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
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

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-MSG-001 | Não existe edição de mensagens enviadas. |
| RN-MSG-002 | Não há indicadores de entregue ou lido. |
| RN-MSG-003 | Não há exclusão integral de conversa individual. |
| RN-MSG-004 | Não se permite cancelar individualmente item da fila offline. |
| RN-MSG-005 | Fila offline é diferente de anexo já recebido pelo servidor aguardando análise. |

### M07 — Anexos e downloads
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
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

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-ARQ-001 | Apenas PDF até 2 GB e JPEG até 20 MB. |
| RN-ARQ-002 | Assinatura, estrutura e análise de segurança são verificadas no servidor. |
| RN-ARQ-003 | Análise indisponível: repetir a cada cinco minutos até 24 horas, sem processamento simultâneo do mesmo anexo. |
| RN-ARQ-004 | Links temporários duram cinco minutos; revogação bloqueia novos links, não necessariamente os emitidos. |
| RN-ARQ-005 | Download interrompido recomeça desde o início, com nova autorização e novo link. |
| RN-ARQ-006 | Falha por expiração elimina cópia temporária e preserva apenas metadados mínimos. |

### M08 — Notificações
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
| RF-NOT-001 | Solicitar notificação de nova mensagem individual. | CA-NOT-001 | Evento válido aciona serviço de push. |
| RF-NOT-002 | Solicitar notificação de nova mensagem em grupo. | CA-NOT-002 | Evento para integrante autorizado aciona push. |
| RF-NOT-003 | Solicitar notificação de novo aviso ou lembrete. | CA-NOT-003 | Destinatários definidos recebem solicitação de push. |
| RF-NOT-004 | Manter conteúdo acessível no aplicativo independentemente da exibição do push. | CA-NOT-004 | Push bloqueado não causa perda de mensagem. |

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-NOT-001 | Apresentação de push depende do sistema operacional, rede e permissões. |
| RN-NOT-002 | Edição de aviso não dispara novo push. |
| RN-NOT-003 | Não há confirmação de leitura. |

### M09 — Avisos e lembretes
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
| RF-AVI-001 | Permitir apenas a Administradores criar e enviar avisos imediatamente. | CA-AVI-001 | Funcionário é bloqueado; envio não é agendado. |
| RF-AVI-002 | Permitir selecionar destinatários específicos no envio. | CA-AVI-002 | Somente selecionados recebem aviso. |
| RF-AVI-003 | Permitir texto de até 2.000 caracteres e opcionalmente um anexo. | CA-AVI-003 | Texto acima do limite é recusado. |
| RF-AVI-004 | Exigir texto ou um anexo; impedir aviso vazio. | CA-AVI-004 | Formulário sem ambos é rejeitado. |
| RF-AVI-005 | Restringir a um anexo PDF ou JPEG por aviso. | CA-AVI-005 | Segundo anexo é recusado. |
| RF-AVI-006 | Disponibilizar aviso no histórico dos destinatários. | CA-AVI-006 | Destinatário selecionado vê aviso. |
| RF-AVI-007 | Permitir exclusão individual online por destinatário. | CA-AVI-007 | Exclusão afeta somente seu histórico. |
| RF-AVI-008 | Permitir edição online somente pelo autor original. | CA-AVI-008 | Outro administrador não consegue editar. |
| RF-AVI-009 | Permitir exclusão global online somente pelo autor original após confirmação. | CA-AVI-009 | Remoção afeta todos os históricos e anexo. |
| RF-AVI-010 | Disponibilizar aba Avisos Enviados para todos os Administradores. | CA-AVI-010 | Todos consultam avisos existentes. |
| RF-AVI-011 | Permitir somente ao autor consultar a lista completa de destinatários. | CA-AVI-011 | Outro admin não acessa lista. |
| RF-AVI-012 | Validar versão ao salvar edição e rejeitar alteração desatualizada. | CA-AVI-012 | Conflito não sobrescreve alteração mais recente. |
| RF-AVI-013 | Preservar formulário preenchido após falha online enquanto tela permanecer aberta. | CA-AVI-013 | Falha não apaga texto/anexo selecionado. |
| RF-AVI-014 | Solicitar confirmação antes de descartar alterações não salvas. | CA-AVI-014 | Cancelar mantém formulário. |
| RF-AVI-015 | Bloquear criar, editar ou excluir avisos offline. | CA-AVI-015 | Sem conexão, operação não é executada. |
| RF-AVI-016 | Permitir ao autor substituir anexo na edição, sujeito à nova análise. | CA-AVI-016 | Novo arquivo não é liberado sem aprovação. |

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-AVI-001 | Destinatários são fixados no envio. |
| RN-AVI-002 | Sem título e sem agendamento. |
| RN-AVI-003 | Edição mantém data e posição originais, sem indicador de edição nem novo push. |
| RN-AVI-004 | Não há novas tentativas automáticas após falha de criação/edição/exclusão. |
| RN-AVI-005 | Exclusão individual não é revertida por edição posterior. |
| RN-AVI-006 | Exclusão global remove aviso e anexo de todos os históricos e caches na sincronização, sem marcador. |
| RN-AVI-007 | Autor excluído: aviso histórico somente leitura. |
| RN-AVI-008 | Conflito de versão exige revisão manual, sem mesclagem automática. |
| RN-AVI-009 | Se aviso foi excluído durante edição, salvamento não pode recriá-lo. |

### M10 — Histórico, cache e sincronização
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
| RF-SINC-001 | Exibir imediatamente dados previamente carregados no cache. | CA-SINC-001 | Histórico abre com dados locais sem aguardar rede. |
| RF-SINC-002 | Sincronizar histórico aberto automaticamente ao obter conexão. | CA-SINC-002 | Novos dados são incorporados sem duplicação. |
| RF-SINC-003 | Sincronizar histórico aberto ao retornar ao primeiro plano. | CA-SINC-003 | Mudanças remotas são recuperadas. |
| RF-SINC-004 | Permitir pull-to-refresh nos históricos de avisos. | CA-SINC-004 | Gesto inicia atualização. |
| RF-SINC-005 | Paginar históricos de avisos em 20 registros. | CA-SINC-005 | Primeira página contém até 20. |
| RF-SINC-006 | Carregar páginas seguintes ao rolar. | CA-SINC-006 | Próximos registros aparecem sem duplicação. |
| RF-SINC-007 | Deduplicar registros durante sincronização e paginação. | CA-SINC-007 | Mesmo identificador aparece uma vez. |
| RF-SINC-008 | Preservar cache existente quando atualização falhar. | CA-SINC-008 | Erro não esvazia histórico. |
| RF-SINC-009 | Exibir data e hora da última sincronização bem-sucedida após erro. | CA-SINC-009 | Horário não muda em falha. |
| RF-SINC-010 | Permitir tentar novamente após falha de atualização. | CA-SINC-010 | Nova requisição é iniciada pelo usuário. |
| RF-SINC-011 | Disponibilizar textos e avisos previamente carregados offline. | CA-SINC-011 | Conteúdo cacheado abre sem rede. |
| RF-SINC-012 | Disponibilizar offline anexos previamente baixados. | CA-SINC-012 | Arquivo local completo abre sem rede. |
| RF-SINC-013 | Permitir remover anexos do cache local sem apagar servidor. | CA-SINC-013 | Arquivo pode ser baixado novamente. |
| RF-SINC-014 | Aplicar exclusões remotas ao cache na sincronização. | CA-SINC-014 | Mensagem/aviso globalmente excluído some do cache. |
| RF-SINC-015 | Limpar cache e dados de sincronização ao fazer logout. | CA-SINC-015 | Dados locais não persistem após logout. |

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-SINC-001 | Servidor é fonte de verdade. |
| RN-SINC-002 | Históricos de avisos ordenados do mais recente ao mais antigo. |
| RN-SINC-003 | Horário de última sincronização é independente para avisos recebidos e enviados. |
| RN-SINC-004 | Cache permanece até logout ou exclusão da conta, sujeito à sincronização. |
| RN-SINC-005 | Não executar sincronizações equivalentes simultaneamente. |
| RN-SINC-006 | Anexo removido apenas localmente pode ser baixado sob demanda. |
| RN-SINC-007 | Isolamento de cache pelo sistema operacional; sem criptografia adicional própria. |

### M11 — Auditoria
| ID RF | Requisito funcional verificável | ID CA | Critério de aceitação |
|---|---|---|---|
| RF-AUD-001 | Registrar criação e exclusão de contas por Administradores. | CA-AUD-001 | Ação deixa registro com responsável, data e resultado. |
| RF-AUD-002 | Registrar criação e exclusão de grupos. | CA-AUD-002 | Operação deixa registro de metadados. |
| RF-AUD-003 | Registrar adição e remoção de membros de grupos. | CA-AUD-003 | Alteração deixa registro de responsável e alvo. |
| RF-AUD-004 | Registrar exclusão de mensagens feita por Administradores. | CA-AUD-004 | Registro não copia texto da mensagem. |
| RF-AUD-005 | Registrar criação, edição e exclusão global de avisos. | CA-AUD-005 | Evento registra metadados e resultado. |
| RF-AUD-006 | Permitir consulta de auditoria somente por Administradores. | CA-AUD-006 | Funcionário é bloqueado. |
| RF-AUD-007 | Permitir filtros por período, ação e Administrador responsável. | CA-AUD-007 | Consulta retorna correspondências. |
| RF-AUD-008 | Exibir registros do mais recente para o mais antigo. | CA-AUD-008 | Ordem decrescente é mantida. |
| RF-AUD-009 | Excluir registros após retenção de um ano. | CA-AUD-009 | Registros vencidos são removidos conforme política. |

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-AUD-001 | Registro inclui responsável histórico, instante, tipo, alvo e resultado, sem conteúdo de mensagens/avisos. |
| RN-AUD-002 | Registros são imutáveis por um ano. |
| RN-AUD-003 | Sem exportação pela interface. |
| RN-AUD-004 | Excluir conta não apaga antecipadamente auditoria. |
| RN-AUD-005 | Registrar falhas administrativas relevantes sem registrar segredos. |

### M12 — Infraestrutura, segurança e qualidade
Este módulo contém requisitos não funcionais, apresentados na seção 4.

**Regras de negócio**
| ID RN | Regra |
|---|---|
| RN-INF-001 | Usar TLS 1.2 ou superior. |
| RN-INF-002 | Autorização deve ser aplicada no servidor, inclusive para acesso direto a arquivos. |
| RN-INF-003 | Backup diário e retenção de 30 dias em ambiente separado. |
| RN-INF-004 | Teste mensal de restauração fora da produção. |
| RN-INF-005 | RPO ≤ 24 horas e RTO ≤ 30 minutos. |
| RN-INF-006 | Disponibilidade mensal ≥ 99,9% excluída manutenção programada. |
| RN-INF-007 | Tempo de visibilidade de mensagem de texto ≤ 1 segundo com 100 usuários simultâneos em condições normais. |

## 4. Requisitos não funcionais e testes de qualidade — M12
| ID RNF | Requisito mensurável | ID CA | Evidência de aceitação |
|---|---|---|---|
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

## 5. Rastreabilidade entre módulos
| Capacidade / decisão | Dono | Dependências |
|---|---|---|
| Login, sessão, recuperação, bloqueio | M01 | M02; M12 |
| Conta, perfis, exclusão, autoria | M02 | M01; M11 |
| Lista e apelidos pessoais | M03 | M02; M04 |
| Conversa individual e participantes | M04 | M02; M06 |
| Grupos e períodos de participação | M05 | M02; M06; M07 |
| Mensagens e fila offline | M06 | M04; M05; M07; M10 |
| Anexos, análise e download | M07 | M05; M06; M09; M10; M12 |
| Push de mensagens e avisos | M08 | M06; M09 |
| Avisos e lembretes | M09 | M07; M08; M10; M11 |
| Cache, paginação e sincronização | M10 | M04; M06; M09 |
| Auditoria administrativa | M11 | M02; M05; M06; M09 |
| Segurança, qualidade, backup | M12 | Todos |

### Rastreabilidade com requisitos anteriores
**Pendente de reconciliação documental.** A numeração original RF-001…RF-485 e RN-001…RN-566 representa limites de sequência relatados anteriormente, não uma lista validada de 485/566 requisitos. Sem o texto integral, não é possível atestar cobertura, exclusões ou correspondência 1:1. Para cada requisito original, registrar: ID original, texto original, decisão associada, ID 1.2, tipo de transformação (mantido/mesclado/desdobrado/descartado), justificativa, responsável e aceite do PO.

## 6. Pendências e decisões não inventadas
| ID | Tipo | Pendência / ação | Responsável sugerido |
|---|---|---|---|
| D-01 | Resolvida em 12/11/2026 | Após readição, somente conteúdo desde a nova entrada é acessível; histórico de períodos anteriores não é restaurado. | PO |
| D-02 | Decisão de mensuração | Definir percentil (por exemplo, p95) e início/fim da medição do tempo de visibilidade de 1 segundo. | PO + QA |
| T-01 | Validação técnica | Comprovar upload e download de PDF de 2 GB no Supabase e no aplicativo, incluindo limites do plano e dispositivos. | Tech Lead |
| T-02 | Validação técnica | Comprovar comportamento de links de 5 minutos em download contínuo, revogação e reinício. | Tech Lead + QA |
| T-03 | Validação técnica | Definir execução confiável no servidor de verificações de segurança a cada cinco minutos por até 24 horas. | Tech Lead |
| T-04 | Validação técnica | Comprovar backups de banco de dados E arquivos do Storage, RPO de 24 h e RTO de 30 min. | DevOps |
| T-05 | Segurança e privacidade | Revisar base legal, necessidade, retenção e exclusão de nomes e metadados históricos segundo LGPD. | PO + responsável por privacidade |
| T-06 | Validação técnica | Testar revogação efetiva de sessões e troca de dispositivo no provedor de autenticação. | Tech Lead |
| R-01 | Rastreabilidade | Confrontar cada ID original com a versão 1.2 e resolver divergências. | PO + QA |
| R-02 | Consistência | Verificar política de exclusão de mensagens e avisos quando anexos estiverem em análise pendente. | PO + Tech Lead |

## 7. Critérios para homologação da matriz
- [ ] Conferir todos os requisitos originais e registrar rastreabilidade completa.
- [x] Resolver D-01: readição inicia novo histórico autorizado.
- [ ] Resolver D-02 sem introduzir regra presumida.
- [ ] Revisar formalmente todos os critérios de aceitação com QA e desenvolvimento.
- [ ] Executar provas técnicas T-01 a T-06 e documentar evidências.
- [ ] Revisar LGPD, retenção e tratamento de exclusões.
- [ ] Obter aceite do PO e registrar versão aprovada no GitHub.

## 8. Notas de integridade
A versão 1.2.1 atualiza a linha de base da versão 1.2 (143 RF) para 148 RF da matriz preliminar com cinco requisitos funcionais adicionais no M05. A diferença numérica não implica remoção de escopo sem análise; qualquer perda de requisito identificada na reconciliação com a documentação original deve gerar correção da matriz e nova versão. Os critérios de aceitação apresentados não significam testes executados.
