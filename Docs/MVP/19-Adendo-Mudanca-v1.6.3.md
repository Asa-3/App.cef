# 19 — Adendo de Mudança v1.6.3


## Delta normativo vigente v1.6.3 — DEC-INT-M01-017-001
Prevalece sobre redações históricas conflitantes exclusivamente nos elementos alterados. Baseline predecessora v1.6.2, commit 8cc2066e6ea33387e292380537f22bc31de83689. Homologação DEC-RAST-M01-017 pendente.
Manifestação do PO: “Aprovo integralmente a DEC-INT-M01-017-001, incluindo as quatro alternativas B das lacunas LR-AUT-133, LR-AUT-134, LR-AUT-135 e LR-AUT-136, a resolução documental das lacunas LR-AUT-132 e LR-AUT-137, a manutenção da LR-AUT-138 aberta para análise intermodular e a vinculação da LR-AUT-139 à LR-AUT-101. Aprovo as redações normativas propostas, os vínculos de rastreabilidade, a reconciliação dos 32 registros complementares, os dez invariantes, as seis categorias de evidências sujeitas à reconciliação global e o versionamento v1.6.3. Preserve o RPO específico de zero segundos, mantenha a LR-AUT-101 aberta com as lacunas LR-AUT-115, LR-AUT-131 e LR-AUT-139 vinculadas e a INC-DOC-003 aberta. Prossiga com a atualização documental integrada no GitHub, publique e verifique integralmente os três documentos e reapresente a DEC-RAST-M01-017 para homologação.”

### Decisões
| Decisão | Tratamento |
|---|---|
| DEC-LR-AUT-132-001 | Consolidar DEC-M01-011 a 017 sem alterar políticas aprovadas; resolvida documentalmente após publicação. |
| DEC-LR-AUT-133-001 | B: renovar credenciais temporárias somente com autorização comprovada, preservar identidade e unicidade da sessão, sem restaurar revogação nem reiniciar contador; prazos e mecanismos sujeitos à arquitetura. |
| DEC-LR-AUT-134-001 | B: distinguir indisponibilidade, ausência de conexão, resultado inconclusivo, autorização positiva, revogação e perda de confiabilidade; impedir operações remotas sem autorização comprovada; preservar fila e dados salvo outra condição normativa de descarte. Acesso local condicionado à política offline. |
| DEC-LR-AUT-135-001 | B: autenticação local na retomada offline após fechamento, segundo plano, bloqueio de tela, encerramento inesperado ou reinício do dispositivo; online revalidar antes de operações remotas; navegação interna preserva acesso; interfaces nativas necessárias ao fluxo não provocam solicitações recursivas. |
| DEC-LR-AUT-136-001 | B: bloquear acesso quando proteção necessária indisponível; biometria opcional, credencial válida alternativa; reconfiguração exige nova autenticação; dados irrecuperáveis informados, recuperação remota conforme permissões; itens exclusivamente locais irrecuperáveis não são representados como enviados. |
| DEC-LR-AUT-137-001 | Corrigir vínculos bidirecionais, DEC-M01-013 explícita, CA-AUT-031 direto, referências de testes e cobertura; resolvida documentalmente após publicação. |
| DEC-LR-AUT-138-001 | Aberta, encaminhar ao M10 e módulos de grupos, mensagens, arquivos e usuários: permissões remotas, remoção de integrante, cache, links, fila e reconexão. Preservar regras vigentes de perda isolada de permissão e revogação de sessão. Não introduzir política de retenção/exclusão local sem decisão intermodular. |
| DEC-LR-AUT-139-001 | Aberta, vinculada à LR-AUT-101 e PBI-058, sem encerramento. Exigir arquitetura, PoC Supabase, testes Android/iOS, integração e concorrência, relatório de segurança e riscos e aceitação PO. |

### RF-AUT-017 — Persistência da sessão autenticada
O sistema deverá preservar a sessão lógica autorizada do usuário ao fechar, reabrir ou reinicializar o aplicativo ou dispositivo, sem exigir novo login exclusivamente em decorrência desses eventos ou da expiração de credenciais temporárias.
A renovação de credenciais temporárias deverá depender da comprovação da autorização da sessão pelo servidor, preservando sua identidade, unicidade e consistência, sem restaurar autorizações anteriormente revogadas.
Em modo offline, o aplicativo deverá permitir exclusivamente o acesso aos dados locais previamente autorizados e disponíveis, sem prazo fixo de duração, observadas as condições de proteção e autenticação local estabelecidas.
Ao reabrir o aplicativo offline, retornar do segundo plano, retomar o acesso após bloqueio do dispositivo ou reiniciar após encerramento inesperado ou reinicialização do dispositivo, o usuário deverá concluir autenticação local por biometria ou credencial de desbloqueio do sistema operacional antes de acessar os dados protegidos.
A biometria será opcional. A ausência, remoção ou indisponibilidade da proteção local necessária deverá impedir o acesso aos dados protegidos até que as condições de proteção sejam restabelecidas e uma nova autenticação local seja concluída com sucesso.
A simples reconfiguração da proteção do dispositivo não deverá liberar automaticamente os dados locais. Quando os dados não puderem ser recuperados pelos mecanismos autorizados, o aplicativo deverá informar sua indisponibilidade e permitir recuperação remota somente conforme as permissões vigentes.
Ao reconectar ou retomar operações remotas, o aplicativo deverá revalidar a sessão e impedir operações dependentes de autorização não comprovada.
A indisponibilidade temporária ou a ausência de resultado conclusivo não deverá ser interpretada, isoladamente, como revogação definitiva da sessão, devendo ser preservados os dados locais e a fila pendente enquanto não houver outra condição normativa que determine seu encerramento ou descarte.
A revogação detectada deverá provocar encerramento do acesso, limpeza local e descarte definitivo da fila pendente, conforme RF-AUT-018 e RN-AUT-016.
A persistência, renovação e recuperação da sessão deverão respeitar a ordem efetiva das decisões do servidor, as regras de sessão única, bloqueio, transferência, logout, redefinição de senha, exclusão de conta e recuperação do estado crítico de segurança, sem restaurar autorizações anteriormente invalidadas.
Deverá ser preservado o RPO específico de zero segundos aplicável ao estado crítico de segurança.

### RN-AUT-015 — Persistência e acesso offline
A sessão lógica permanecerá autorizada entre utilizações do aplicativo enquanto não ocorrer evento normativamente definido de encerramento ou revogação.
A expiração de credenciais temporárias não constituirá, por si só, revogação da sessão lógica, sendo permitida sua renovação quando a autorização permanecer comprovada pelo servidor.
O acesso offline será limitado aos dados locais previamente autorizados e disponíveis, sem prazo fixo de duração, condicionado à proteção do dispositivo e à autenticação local nos eventos de retomada definidos pelo RF-AUT-017.
A biometria será opcional, sendo suficiente a autenticação válida pela credencial de desbloqueio do sistema operacional.
A ausência ou remoção da proteção necessária, a falha ou o cancelamento da autenticação local deverão impedir o acesso aos dados protegidos. O restabelecimento da proteção exigirá nova autenticação local bem-sucedida.
A autenticação local não substituirá a validação remota da sessão, não criará nova sessão e não reinicializará, por si só, o contador de falhas de autenticação.
A indisponibilidade temporária do serviço de autenticação não constituirá, isoladamente, revogação definitiva. As operações remotas e a transmissão da fila dependerão de autorização comprovada.
A revogação detectada deverá prevalecer sobre a persistência da sessão e sobre qualquer autorização local anteriormente concedida, aplicando-se a RN-AUT-016.
A persistência da sessão não implicará manutenção automática de permissões específicas sobre conteúdos, observadas as regras intermodulares aplicáveis.

### CA-AUT-017
Comprovar que:
1. O fechamento e a reabertura do aplicativo com sessão válida não exigem novo login exclusivamente em razão desses eventos.
2. A reinicialização do aplicativo ou dispositivo não encerra, por si só, uma sessão lógica autorizada.
3. A renovação de credenciais temporárias preserva a sessão lógica e não cria uma segunda sessão.
4. A expiração de credenciais temporárias não é interpretada automaticamente como revogação definitiva.
5. A renovação não restaura sessões revogadas nem reinicializa, por si só, o contador de falhas.
6. Operações remotas somente são autorizadas após comprovação da validade da sessão e das permissões aplicáveis.
7. A indisponibilidade temporária ou revalidação inconclusiva não provoca, isoladamente, exclusão definitiva dos dados locais ou da fila.
8. A revogação confirmada provoca encerramento do acesso e aplicação das regras de limpeza e descarte.
9. A recuperação do estado crítico não restaura autorizações anteriormente invalidadas e preserva o RPO específico de zero segundos.

### CA-AUT-031
Comprovar que:
1. A reabertura offline exige autenticação local antes da consulta aos dados protegidos.
2. Os eventos de retomada offline definidos pelo RF-AUT-017 exigem nova autenticação local.
3. Biometria válida ou credencial válida de desbloqueio do dispositivo permite acesso aos dados previamente autorizados e disponíveis.
4. A biometria não é obrigatória.
5. Falha ou cancelamento da autenticação local mantém os dados protegidos.
6. A ausência ou remoção da proteção necessária impede o acesso local.
7. A reconfiguração da proteção sem nova autenticação bem-sucedida não libera automaticamente os dados.
8. O tempo decorrido em modo offline não encerra, isoladamente, o acesso autorizado.
9. Dados locais indisponíveis são identificados como indisponíveis, sem recuperação não autorizada.
10. A reconexão exige revalidação remota antes da execução das operações dependentes de autorização.
11. A revogação detectada provoca encerramento e limpeza conforme CA-AUT-033 e CA-AUT-034.

### CA-AUT-034
A fila offline somente poderá ser transmitida após validação positiva da sessão pelo servidor e observância das permissões aplicáveis.
Durante indisponibilidade temporária ou revalidação inconclusiva, os itens pendentes deverão permanecer sem transmissão, observadas as demais regras de persistência, cancelamento e descarte.
A revogação detectada deverá provocar descarte definitivo dos itens pendentes vinculados à sessão encerrada.
Uma nova autenticação não deverá restaurar os itens anteriormente descartados.
O processamento autorizado deverá respeitar a ordem e as políticas de sincronização vigentes, sem duplicar operações anteriormente aceitas pelo servidor.

### Vínculos bidirecionais RF-AUT-017
Cada elemento abaixo remete ao RF-AUT-017, sem alterar classificações dos demais requisitos.
| Classe | Elementos |
|---|---|
| RN direta | RN-AUT-015 |
| RN complementares | RN-AUT-012/014/016/020 |
| RN transversal | RN-ARQ-007 |
| CA diretos | CA-AUT-017/031 |
| CA complementares | CA-AUT-009/011/012/013/015/016/018/027/028/030/033/034/038 |
| CA transversais | CA-USR-010; CA-MSG-008/009; CA-ARQ-028/029/030; CA-SINC-015 |
| RF dependentes | RF-AUT-009/011/012/013/014/015/016/018/021/022; RF-USR-010; RF-MSG-008/009; RF-ARQ-028/029/030; RF-SINC-015 |
| Decisões principais | DEC-M01-011/012/013/014/015/016/017 |
| Decisões complementares | DEC-M01-008/009/010; DEC-INT-M01-015-002; DEC-INT-M01-016-001 |
| Conflito | CON-M01-012 |
| Épico e prioridade | EP-002; Must Have |
| PBI principal | PBI-016 |
| PBIs complementares | PBI-014/015/017/036/043/044/058 |
| Testes de referência | CT-MVP-M10-001; CT-P-AUT-017/031/034 (não executados) |
| Issues documentais | #25/#66/#102, não revalidadas individualmente |

### 32 registros brutos reconciliados
| ID | Cenário | Classe | Referência | Resultado esperado |
|---|---|---|---|---|
| CP-LR132-001 | Reabertura online válida | Refinamento | CA-AUT-017 | Não exigir novo login exclusivamente pela reabertura. |
| CP-LR132-002 | Reabertura offline | Refinamento | CA-AUT-031 | Exigir autenticação local. |
| CP-LR132-003 | Credencial do dispositivo | Refinamento | DEC-M01-016 | Permitir acesso local autorizado. |
| CP-LR132-004 | Biometria válida | Refinamento | DEC-M01-015 | Permitir acesso local autorizado. |
| CP-LR132-005 | Falha ou cancelamento local | Refinamento | DEC-M01-015 | Manter dados bloqueados. |
| CP-LR132-006 | Longo período offline | Refinamento | DEC-M01-014 | Não encerrar acesso apenas pelo tempo. |
| CP-LR133-001 | Expiração com sessão autorizada | Complementação | LR-AUT-133 | Renovar sem novo login. |
| CP-LR133-002 | Expiração com sessão revogada | Regressão | RF-AUT-013 QA CP-11 | Não renovar. |
| CP-LR133-003 | Renovação interrompida | Complementação | LR-AUT-134 | Suspender operações remotas sem descarte automático. |
| CP-LR133-004 | Reabertura após renovação | Complementação | RF-AUT-017 | Preservar identidade lógica. |
| CP-LR134-001 | Reconexão com servidor indisponível | Complementação | RN-AUT-020 | Suspender operações remotas e preservar pendências. |
| CP-LR134-002 | Revalidação inconclusiva | Complementação | LR-AUT-134 | Não interpretar falha isolada como revogação. |
| CP-LR134-003 | Restabelecimento com sessão válida | Refinamento | CA-AUT-031 | Retomar após validação positiva. |
| CP-LR134-004 | Restabelecimento com sessão revogada | Regressão | CT-MVP-M10-001 | Encerrar e limpar. |
| CP-LR134-005 | Internet sem serviço de autenticação | Complementação | LR-AUT-134 | Aplicar política inconclusiva. |
| CP-LR134-006 | Fila durante revalidação | Regressão | CA-AUT-034 | Não transmitir antes de autorização. |
| CP-LR135-001 | Retorno segundo plano offline | Complementação | LR-AUT-135 | Exigir autenticação local. |
| CP-LR135-002 | Retorno após bloqueio de tela | Complementação | LR-AUT-135 | Exigir autenticação local offline. |
| CP-LR135-003 | Encerramento inesperado e reabertura offline | Refinamento | CEN-CON-M01-012-022 | Exigir autenticação local. |
| CP-LR135-004 | Reinício dispositivo offline | Complementação | LR-AUT-135 | Exigir autenticação local. |
| CP-LR135-005 | Reinício dispositivo online | Complementação | RF-AUT-017 | Revalidar antes de operações remotas. |
| CP-LR135-006 | Retomada após revogação detectada | Regressão | DEC-M01-012 | Não restaurar acesso. |
| CP-LR136-001 | Ausência de credencial | Refinamento | DEC-M01-016 | Impedir acesso offline. |
| CP-LR136-002 | Configuração sem autenticação | Refinamento | DEC-M01-016/017 | Manter bloqueio. |
| CP-LR136-003 | Remoção da credencial | Refinamento | DEC-M01-017 | Bloquear acesso local. |
| CP-LR136-004 | Reconfiguração e autenticação válida | Refinamento | DEC-M01-017 | Permitir acesso se recuperável. |
| CP-LR136-005 | Biometria indisponível com credencial válida | Complementação | LR-AUT-136 | Permitir autenticação pela credencial. |
| CP-LR136-006 | Dados locais irrecuperáveis | Complementação | LR-AUT-136 | Informar indisponibilidade e recuperar conforme autorização. |
| CP-LR137-001 | Desbloqueio após revogação | Regressão | DEC-INT-M01-016-001 | Não restaurar sessão. |
| CP-LR137-002 | Novo login após descarte | Regressão | RF-AUT-009 QA CP-25 | Não restaurar itens. |
| CP-LR137-003 | Revogação durante revalidação | Regressão | RF-AUT-013 QA CP-18/19 | Encerrar e limpar. |
| CP-LR137-004 | Revalidação positiva com fila | Regressão | CA-AUT-034; RF-MSG-009 | Processar conforme regras. |

12 complementações, 12 refinamentos, 8 regressões; reconciliação semântica, não deduplicação global. Preservar 412 CEN; CON-M01-012 possui 28 cenários históricos, refinamento por referência, não substituir resultados históricos sem reconciliação. Nenhum teste executado.

### Invariantes
- INV-017-001: Uma única sessão lógica autorizada por conta.
- INV-017-002: Renovação não cria segunda sessão.
- INV-017-003: Persistência não restaura sessão revogada.
- INV-017-004: Autenticação local não substitui autorização remota.
- INV-017-005: Autenticação local e renovação não reinicializam por si próprias o contador.
- INV-017-006: Operações remotas dependem de autorização comprovada.
- INV-017-007: Indisponibilidade temporária não constitui isoladamente revogação definitiva.
- INV-017-008: Acesso offline depende de proteção local, sem prazo fixo.
- INV-017-009: Revogação detectada encerra acesso e aplica limpeza e descarte.
- INV-017-010: Recuperação preserva efeitos críticos confirmados e RPO específico zero segundos.

### Evidências
| ID | Classe | Evidência |
|---|---|---|
| VT-017-001 | Refinamento | Persistência e renovação Android/iOS |
| VT-017-002 | Complementação | Autenticação local nativa |
| VT-017-003 | Complementação | Proteção local no ciclo de vida |
| VT-017-004 | Refinamento | Revalidação e sincronização |
| VT-017-005 | Reutilização | Encerramento e limpeza após revogação |
| VT-017-006 | Reutilização | Recuperação consistente e RPO específico |

Seis categorias sujeitas à reconciliação global com 22 grupos anteriores e oito categorias RF-AUT-016; sem aumento automático.
LR-AUT-132/137 resolvidas documentalmente; LR-AUT-133/134/135/136 resolvidas normativamente; LR-AUT-138 aberta intermodular; LR-AUT-139 aberta vinculada à LR-AUT-101. LR-AUT-101 aberta com LR-AUT-115/131/139; INC-DOC-003 aberta. RPO crítico zero segundos; RPO geral 24h; RTO 30min. Prazos RF-ARQ-030 preservados. Inventário histórico 865 elementos, 805 MVP, 60 fora, 143 RF/RNF Must Have, 60 PBIs, 412 CEN. Progresso nominal 16/22 (72,7%); 17/22 (77,3%) somente após homologação DEC-RAST-M01-017. Numeração 132–139 conferida nos quatro documentos vigentes, não em registros externos. Issues não revalidadas; tabelas históricas não reconciliadas integralmente; nenhuma prova de conceito ou teste executado. 


## Homologação DEC-RAST-M01-017 — 27/11/2026
Manifestação formal do PO: “Aprovo integralmente a DEC-RAST-M01-017 revisada, considerando a baseline v1.6.3 publicada e verificada, a resolução das quatro lacunas normativas e das duas lacunas documentais, a DEC-INT-M01-017-001 aprovada, os vínculos de rastreabilidade apresentados, a classificação Must Have, os 32 registros brutos complementares reconciliados, os dez invariantes, as seis categorias de evidências sujeitas à reconciliação global e as ressalvas documentais registradas. Preserve o RPO específico de zero segundos, mantenha a LR-AUT-138 aberta para análise intermodular, a LR-AUT-101 aberta com as lacunas LR-AUT-115, LR-AUT-131 e LR-AUT-139 vinculadas e a INC-DOC-003 aberta. Registre a homologação e os vínculos aprovados no GitHub, verifique a atualização e prossiga para o RF-AUT-018.”

RF-AUT-017 homologado documentalmente e em rastreabilidade; DEC-INT-M01-017-001 preservada. Must Have; EP-002; PBI-016 principal. Confirmados os vínculos do delta v1.6.3: RN-AUT-015 direta; RN-AUT-012/014/016/020 complementares; RN-ARQ-007 transversal; CA-AUT-017/031 diretos; CA-AUT-009/011/012/013/015/016/018/027/028/030/033/034/038 complementares; CA-USR-010, CA-MSG-008/009, CA-ARQ-028/029/030, CA-SINC-015 transversais; RF-AUT-009/011/012/013/014/015/016/018/021/022, RF-USR-010, RF-MSG-008/009, RF-ARQ-028/029/030, RF-SINC-015 dependentes; DEC-M01-011 a 017, DEC-M01-008/009/010, DEC-INT-M01-015-002 e DEC-INT-M01-016-001; CON-M01-012; PBI-014/015/017/036/043/044/058 complementares; CT-MVP-M10-001 referência de integração; CT-P-AUT-017/031/034 propostos; issues #25/#66/#102 vínculos documentais não revalidados individualmente. Vínculos RNF candidatos apresentados e aprovados como candidatos, sujeitos à confirmação específica: RNF-SEG-001/002/003, RNF-DISP-005, RNF-REC-006/007/012, RNF-BKP-008/009/010/011.

LR-AUT-132/137 resolvidas documentalmente; LR-AUT-133/134/135/136 resolvidas normativamente. LR-AUT-138 aberta intermodular; LR-AUT-101 aberta com LR-AUT-115/131/139 vinculadas; INC-DOC-003 aberta. RPO específico zero segundos, geral 24h, RTO 30min. 32 registros brutos (12 complementações, 12 refinamentos, 8 regressões), dez invariantes e seis categorias de evidências preservados, sem aumento automático dos 412 CEN ou grupos oficiais. Nenhum teste executado; nenhuma aprovação tecnológica ou de produção. Inventário histórico 865 elementos, 805 MVP, 60 fora, 143 RF/RNF Must Have, 60 PBIs. Progresso nominal M01: 17/22 (77,3%). Próximo RF-AUT-018 — Encerrar sessão e apagar dados locais no logout. Registro vigente prevalece sobre indicação histórica de homologação pendente. Preservadas ressalvas de reconciliação global e tabelas históricas.
