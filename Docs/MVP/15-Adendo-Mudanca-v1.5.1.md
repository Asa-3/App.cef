# Adendo integrado MVP — v1.5.1

Fonte: [Matriz Consolidada](../Engenharia-de-Requisitos/Matriz_Consolidada_Requisitos_v1.5.1.md). Complementa adendos anteriores e prevalece sobre MVP-04/05/07/08/09 nos pontos alterados; escopo e classificação Must Have mantidos.

## Controle de mudança v1.5.1 — DEC-INT-M01-014-002
Aprovação integral do PO em 27/11/2026: “Aprovo integralmente a DEC-INT-M01-014-002, incluindo as três alternativas B, todos os parâmetros quantitativos propostos, os nove elementos normativos revisados, os 54 cenários complementares, os protocolos de aceitação e o versionamento v1.5.1. Registre as decisões, mantenha a LR-AUT-101 aberta para validação tecnológica e prossiga com a atualização documental integrada.”
| Decisão | Alternativa | Vínculos |
|---|---|---|
| DEC-LR-AUT-095-002 | B | RF-AUT-019; RN-AUT-017; CA-AUT-035; PBI-010 |
| DEC-LR-AUT-100-002 | B | RF-AUT-020; RN-AUT-018; CA-AUT-036; PBI-015 |
| DEC-LR-AUT-102-002 | B | RF-ARQ-030; RN-ARQ-007; CA-ARQ-030; PBI-044 |

### Protocolo normativo de enumeração
Login: usuário inexistente, senha incorreta, conta excluída, bloqueada ou não habilitada (se aplicável): HTTP 401, código AUTH_FAILED, mensagem “Não foi possível entrar. Verifique suas credenciais ou tente novamente mais tarde.” Mesmos campos, esquema e tamanho funcional; metadados variáveis não podem codificar estado. Não revelar tentativas restantes, existência, exclusão, senha correta durante bloqueio, contagem regressiva, e-mail mesmo mascarado, sessões ou dispositivos. HTTP 400 para estrutura inválida, 429 para abuso, 503 para indisponibilidade geral somente se não revelarem estado. Recuperação: HTTP 202, RECOVERY_REQUEST_ACCEPTED, mensagem “Caso os dados informados correspondam a uma conta elegível, as instruções de recuperação serão enviadas ao e-mail cadastrado.” Equivalente para existente, inexistente, excluída, bloqueada e sem e-mail confirmado; envio real conforme elegibilidade vigente. Proteger endpoints diretos.
Testes: diferenças máximas de medianas 50 ms e p95 100 ms; limite superior IC 95% da AUC 0,55; mínimo 1.000 amostras por condição e rodada, três rodadas independentes, cargas de 1 e 100 usuários simultâneos. Contas controladas, infraestrutura equivalente, ordem aleatorizada, treinamento e validação separados, comparar condições equivalentes de bloqueio e abuso, medir servidor e resposta externa. Atraso aleatório isolado não comprova proteção. Não é garantia matemática de impossibilidade de enumeração.

### Protocolo normativo de abuso
| Controle | Limite | Janela deslizante |
|---|---:|---|
| Login por origem individual identificável | 20 | 60 s |
| Login por origem e identificador de usuário | 10 | 60 s |
| Recuperação por origem e identificador de usuário | 3 | 15 min |
| Recuperação por origem individual | 10 | 15 min |
| Login por IP compartilhado (indicador de risco, não bloqueio isolado) | 300 | 60 s |

Avaliar controles conjuntamente; excedentes individuais rejeitados antes da validação da senha, HTTP 429, mensagem “Limite temporário de solicitações atingido. Aguarde alguns instantes e tente novamente.” Liberação automática quando houver capacidade na janela; espera informada somente do controle complementar, sem revelar estado da conta. Origem não depende exclusivamente de identificadores livremente alteráveis pelo cliente; validar resistência à manipulação e privacidade. Duplicatas podem contar para volume, não duplicar efeito principal. Controles independentes do contador principal, não reiniciados obrigatoriamente pelo login; não ativam/prolongam bloqueio ou revogam sessões isoladamente. Indisponibilidade das garantias obrigatórias: rejeitar novas solicitações dependentes sem revogar sessões existentes exclusivamente por essa causa; avaliar impacto na disponibilidade 99,9%.
Aceitação: 100% dos excedentes individuais restringidos; zero incrementos indevidos, revogações exclusivamente pelo controle, alterações indevidas do prazo e exposições de existência nos testes; zero rejeições indevidas no cenário controlado de 100 usuários legítimos, contas distintas, credenciais válidas, IP comum e limites individuais respeitados. Risco residual aceito normativamente: cinco falhas elegíveis ainda podem provocar bloqueio intencional; não há garantia de eliminação de ataques distribuídos.

### Protocolo normativo de interrupção
T0 = revogação efetiva no servidor; T1 = encerramento pelo mecanismo de entrega e cessação de emissão de novos bytes protegidos. T1−T0 ≤ 5.000 ms. Desde T0 negar novos links, links antigos, novos downloads, novas solicitações de intervalos de bytes e reinícios. Novo login/desbloqueio não restaura autorizações. Dados já transmitidos ou em trânsito não são recuperáveis; prazo não estende autorização nem garante limite absoluto de bytes.
Eventos: quinta falha, transferência concluída, alteração/recuperação de senha concluída, alteração excepcional de e-mail concluída, logout online, exclusão definitiva, logout offline a partir da revogação efetiva no servidor. Alteração regular de e-mail, perda isolada de permissão e expiração natural de link não interrompem isoladamente transferência contínua autorizada conforme DEC-LR-AUT-091-001.
Aceitação: relógio monotônico comum ou instrumentação sincronizada com incerteza conhecida; mínimo 30 amostras por evento e condição testada; Android/iOS; PDF/JPEG incluindo limites 2 GB/20 MB; transferências individuais e concorrentes; todas as amostras válidas ≤ 5.000 ms, nenhuma ultrapassagem tolerada; incerteza que impeça comprovação torna resultado inconclusivo.

### Estado e impacto
LR-AUT-092 a 100 e 102 a 103: resolvidas normativamente no escopo das políticas aprovadas; LR-AUT-101 permanece aberta para evidências tecnológicas. Retenção de deduplicação e recuperação segura após desastre ainda requerem refinamento técnico. Nenhum teste executado. Alterações futuras de parâmetros exigem decisão formal do PO. DEC-RAST-M01-014 pendente. 860 elementos: 154 RF, 81 RN, 172 CA, 11 RNF, 11 CA-NF, 19 CON, 412 CEN; MVP 800, fora 60; 141 RF/RNF Must Have; 60 PBIs; M01 21 RF/19 RN/37 CA/19 CON/412 CEN = 508. 13/21 RF com homologação histórica de rastreabilidade, sujeitos a revisão de impacto. 54 cenários complementares provisórios (192 acumulados para RF-AUT-014), não adicionados aos 412 CEN; reconciliar duplicidades.

## Cenários complementares
| ID provisório | Cenário | Resultado esperado |
|---|---|---|
| CP-LR095-B-001 | Login com usuário inexistente | HTTP 401 e resposta genérica. |
| CP-LR095-B-002 | Login com senha incorreta | HTTP 401 e resposta equivalente. |
| CP-LR095-B-003 | Login com conta excluída | Não revelar exclusão. |
| CP-LR095-B-004 | Login com conta bloqueada | Não revelar bloqueio. |
| CP-LR095-B-005 | Senha correta durante bloqueio | Resposta genérica equivalente. |
| CP-LR095-B-006 | Comparação dos códigos HTTP | Equivalência entre estados protegidos. |
| CP-LR095-B-007 | Comparação da estrutura JSON | Mesmos campos funcionais. |
| CP-LR095-B-008 | Comparação do tamanho das respostas | Sem diferenças reveladoras do estado. |
| CP-LR095-B-009 | Comparação de mensagens visuais | Equivalência das mensagens. |
| CP-LR095-B-010 | Recuperação de conta existente | HTTP 202 e mensagem genérica. |
| CP-LR095-B-011 | Recuperação de conta inexistente | Resposta equivalente. |
| CP-LR095-B-012 | Recuperação de conta excluída | Resposta equivalente. |
| CP-LR095-B-013 | Recuperação de conta bloqueada | Resposta equivalente e recuperação elegível. |
| CP-LR095-B-014 | Recuperação sem e-mail confirmado | Não revelar condição ou endereço. |
| CP-LR095-B-015 | Comparação das medianas | Diferença máxima de 50 ms. |
| CP-LR095-B-016 | Comparação dos percentis 95 | Diferença máxima de 100 ms. |
| CP-LR095-B-017 | Classificação estatística em dados independentes | Limite superior do IC de 95% da AUC até 0,55. |
| CP-LR095-B-018 | Acesso direto aos endpoints | Não contornar proteção da interface. |
| CP-LR100-B-001 | 20 solicitações por origem individual | Não restringir exclusivamente por esse limite. |
| CP-LR100-B-002 | 21ª solicitação na janela | Restringir antes da validação. |
| CP-LR100-B-003 | 10 solicitações por origem e usuário | Não restringir exclusivamente por esse limite. |
| CP-LR100-B-004 | 11ª solicitação por origem e usuário | Restringir. |
| CP-LR100-B-005 | Três recuperações por origem e usuário | Não restringir exclusivamente por esse limite. |
| CP-LR100-B-006 | Quarta recuperação na janela | Restringir. |
| CP-LR100-B-007 | Dez recuperações por origem individual | Não restringir exclusivamente por esse limite. |
| CP-LR100-B-008 | 11ª recuperação por origem individual | Restringir. |
| CP-LR100-B-009 | 300 solicitações por IP compartilhado | Avaliar demais controles. |
| CP-LR100-B-010 | Exceder 300 solicitações por IP | Acionar avaliação de risco sem bloqueio indiscriminado. |
| CP-LR100-B-011 | 100 usuários legítimos compartilhando IP | Nenhuma rejeição indevida por IP. |
| CP-LR100-B-012 | Solicitação rejeitada antes da senha | Não incrementar contador principal. |
| CP-LR100-B-013 | Abuso durante bloqueio da conta | Não prolongar prazo. |
| CP-LR100-B-014 | Liberação da janela deslizante | Restabelecer capacidade complementar. |
| CP-LR100-B-015 | Login bem-sucedido | Não reiniciar indevidamente controles complementares. |
| CP-LR100-B-016 | Duplicatas em volume abusivo | Mitigar volume sem duplicar efeitos principais. |
| CP-LR100-B-017 | Indisponibilidade do mecanismo | Rejeitar novas solicitações dependentes. |
| CP-LR100-B-018 | Sessão existente durante falha do mecanismo | Não revogar exclusivamente por essa falha. |
| CP-LR102-B-001 | Quinta falha com download ativo | Interromper em até 5.000 ms. |
| CP-LR102-B-002 | Transferência de dispositivo concluída | Interromper download da sessão anterior. |
| CP-LR102-B-003 | Alteração de senha concluída | Interromper em até 5.000 ms. |
| CP-LR102-B-004 | Recuperação de senha concluída | Interromper em até 5.000 ms. |
| CP-LR102-B-005 | Alteração excepcional de e-mail | Interromper em até 5.000 ms. |
| CP-LR102-B-006 | Logout online | Interromper em até 5.000 ms. |
| CP-LR102-B-007 | Logout offline com revogação posterior | Contar prazo a partir da revogação efetiva. |
| CP-LR102-B-008 | Exclusão da conta | Interromper em até 5.000 ms. |
| CP-LR102-B-009 | Download de PDF de 2 GB | Respeitar prazo máximo. |
| CP-LR102-B-010 | Download de JPEG de 20 MB | Respeitar prazo máximo. |
| CP-LR102-B-011 | Transferências concorrentes | Interromper todas as vinculadas à sessão revogada. |
| CP-LR102-B-012 | Solicitação de intervalo de bytes após T0 | Rejeitar imediatamente. |
| CP-LR102-B-013 | Novo download com link antigo | Rejeitar imediatamente. |
| CP-LR102-B-014 | Reutilização de link após novo login | Rejeitar. |
| CP-LR102-B-015 | Perda isolada de permissão | Preservar regra residual anteriormente homologada. |
| CP-LR102-B-016 | Expiração natural durante transferência autorizada | Preservar continuidade prevista. |
| CP-LR102-B-017 | Interrupção medida acima de 5.000 ms | Reprovar. |
| CP-LR102-B-018 | Medição com incerteza que impede comprovação | Classificar como inconclusiva. |

54 cenários registrados, zero executados. Refinar PBI-005/010/012/014/015/016/017/039/043/044/058. Líder Técnico e Back-End: arquitetura e prova de conceito Supabase; QA: protocolos e evidências; Front-End e QA: Android/iOS; PO: aceitação e mudanças. HOM-MVP-002/003 pendentes; nenhuma autorização de produção. Issues e código inalterados.
