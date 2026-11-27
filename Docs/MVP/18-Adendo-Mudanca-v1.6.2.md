# Adendo de mudança v1.6.2 — App.cef
Complementa os documentos MVP 04/05/07/08/09; fonte: matriz consolidada v1.6.2. Preserva v1.6.1 nos pontos não alterados.


## Delta vigente v1.6.2 — DEC-INT-M01-016-001 (27/11/2026)
Manifestação do PO: “Aprovo integralmente a DEC-INT-M01-016-001, incluindo as cinco alternativas B, a vinculação da LR-AUT-131 à LR-AUT-101, as alterações normativas propostas, os 40 cenários complementares, os dez invariantes de segurança, os oito grupos complementares de evidências sujeitos à reconciliação e o versionamento v1.6.2. Preserve o RPO específico de zero segundos, mantenha a LR-AUT-101 aberta com as lacunas vinculadas e prossiga com a atualização documental integrada no GitHub. Após a publicação e verificação dos três documentos, reapresente a DEC-RAST-M01-016 para homologação.”

| Decisão | Política aprovada | Vínculos propostos e aprovados |
|---|---|---|
| DEC-LR-AUT-119-001 (B) | Reiniciar somente após conclusão efetiva registrada pelo servidor, não mera validação de senha; perda de resposta não desfaz efeito confirmado. | RF-AUT-014/016/021; RN-AUT-014/019; CA-AUT-016/037 |
| DEC-LR-AUT-120-001 (B) | Alteração voluntária de senha não reinicia contador nem altera prazo; preservar revogação e nova autenticação. | RF-AUT-009/014/015/016; RN-AUT-014/016; CA-AUT-016 |
| DEC-LR-AUT-121-001 (B) | Solicitação, confirmação e conclusão da recuperação não reiniciam contador nem antecipam, prolongam ou reiniciam bloqueio; recuperação permitida durante bloqueio. | RF-AUT-006/007/008/009/014/015/016; RN-AUT-014; CA-AUT-016/030; DEC-M01-010 |
| DEC-LR-AUT-122-001 (B) | Reiniciar apenas na conclusão válida da transferência, com revogação da origem e autorização do destino; etapas pendentes, canceladas, expiradas, rejeitadas ou invalidadas não reiniciam; impedir nova autorização durante bloqueio ou estado não confiável. | RF-AUT-011/012/013/014/015/016; RN-AUT-012/013/014; CA-AUT-027/028 |
| DEC-LR-AUT-125-001 (B) | Desbloqueio e reinicialização indivisíveis, idempotentes; efeito lógico no prazo mesmo sem nova tentativa; tarefa física agendada não obrigatória se comportamento equivalente; repetição não elimina falhas posteriores. | RF-AUT-014/015/016/021/022; RN-AUT-004/014/019/020; CA-AUT-016/030/038 |
| DEC-LR-AUT-131-001 | Vincular LR-AUT-131 à LR-AUT-101, mantendo ambas pendentes de validação tecnológica, junto à LR-AUT-115. | PBI-058 |

LR-AUT-119/120/121/122/125 resolvidas normativamente no escopo aprovado; LR-AUT-101 aberta, LR-AUT-115 e LR-AUT-131 vinculadas e tecnicamente pendentes. RPO crítico zero segundos, RPO geral 24h, RTO 30min. Preservar todas as políticas v1.6.1, inclusive deduplicação, retenção, revogação, enumeração e recuperação. Nenhum teste executado. INC-DOC-003 aberta. 865 elementos, 805 MVP, 60 fora, 143 RF/RNF Must Have, 60 PBIs, 412 CEN inalterados. 15/22 RF homologados (68,2%); DEC-RAST-M01-016 pendente. 40 registros brutos complementares RF016 sujeitos a reconciliação, não somados aos CEN. Os enunciados originais das seis lacunas não foram localizados nos documentos consultados; escopo normativo definido pela decisão aprovada pelo PO, sem afirmar transcrição histórica. Tabelas históricas não reconciliadas integralmente; delta vigente prevalece nos pontos alterados.

### Redações vigentes (preservar demais cláusulas não conflitantes)
**RF-AUT-016:** O sistema deverá desbloquear automaticamente a conta quando transcorrerem 60 segundos desde a ativação efetiva do bloqueio pelo servidor, utilizando referência temporal confiável. O desbloqueio e a reinicialização do contador de falhas consecutivas deverão constituir uma transição lógica atômica, consistente e idempotente, independentemente da existência de novas tentativas de autenticação. O contador deverá ser reiniciado também após a conclusão efetiva e consistente de uma autenticação bem-sucedida pelo servidor, incluindo a conclusão válida da transferência de dispositivo. A simples validação de credenciais, a existência de etapas obrigatórias pendentes, a alteração ou recuperação de senha, a inatividade e os fluxos de transferência não concluídos não deverão, por si próprios, reiniciar o contador. As operações concorrentes deverão respeitar a ordem efetiva das decisões registradas pelo servidor. A repetição de operações anteriormente concluídas não deverá eliminar falhas posteriores ou produzir reinicializações adicionais. O desbloqueio não deverá restaurar sessões ou autorizações anteriormente revogadas. Após falhas, desastres ou restaurações, o desbloqueio e a reinicialização deverão ocorrer somente quando os eventos registrados e a referência temporal confiável comprovarem o atendimento das condições normativas, preservando o prazo original do bloqueio e o RPO específico de zero segundos aplicável ao estado crítico de segurança.

**RN-AUT-014:** Cinco falhas consecutivas de autenticação por senha incorreta, efetivamente registradas pelo servidor para uma mesma conta, independentemente do dispositivo utilizado ou do intervalo entre as tentativas, deverão acionar bloqueio de login por 60 segundos e revogação efetiva das autorizações de sessão. O contador deverá ser reiniciado exclusivamente pelo encerramento válido do bloqueio ou pela conclusão efetiva de uma autenticação bem-sucedida. A alteração de senha, a recuperação de senha, a inatividade, as tentativas rejeitadas durante o bloqueio e os fluxos de autenticação ou transferência não concluídos não deverão, por si próprios, reiniciar o contador. O encerramento do bloqueio e a reinicialização correspondente deverão ser atômicos e idempotentes, preservando a ordem efetiva das operações e impedindo a eliminação de falhas registradas posteriormente. O desbloqueio não deverá restaurar autorizações anteriormente revogadas.

**CA-AUT-016:**
1. Ao término dos 60 segundos, a conta é automaticamente desbloqueada e o contador retorna a zero mediante transição lógica indivisível.
2. A autenticação efetivamente concluída reinicia o contador.
3. A validação isolada de credenciais não reinicia o contador quando existem etapas obrigatórias pendentes.
4. A alteração e a recuperação de senha não reiniciam o contador por si próprias.
5. A transferência de dispositivo reinicia o contador somente após sua conclusão efetiva e válida.
6. A inatividade não reinicia o contador.
7. Operações concorrentes respeitam a ordem efetiva das decisões do servidor.
8. A repetição de operações concluídas não elimina falhas posteriores.
9. O desbloqueio não restaura sessões ou autorizações revogadas.
10. A recuperação do estado de segurança preserva o prazo original, os eventos confirmados e o RPO específico de zero segundos.
11. Estados de segurança não confiáveis impedem novas autenticações afetadas até o restabelecimento comprovado de sua consistência.

### Rastreabilidade bidirecional
RF-AUT-016 ↔ RN-AUT-004/014 ↔ CA-AUT-016/030 ↔ EP-002/PBI-015 (principal); PBI-017 e PBI-058 complementares; CT-MVP-M01-001 referência, não evidência. Must Have. Dependências RF-AUT-014/015/021/022 e demais vínculos da tabela de decisões, em ambos os sentidos; preservar vínculos históricos não substituídos. Análise de impacto complementar necessária antes de homologar rastreabilidade; não alterar homologações anteriores automaticamente. Issues não modificadas.

### Invariantes de segurança (não são novos requisitos)
- INV-016-001: O contador permanece entre zero e cinco.
- INV-016-002: O bloqueio possui duração normativa de 60 segundos.
- INV-016-003: O prazo original não é alterado por tentativas rejeitadas.
- INV-016-004: A reinicialização ocorre exclusivamente por eventos autorizados.
- INV-016-005: O desbloqueio e a reinicialização correspondente são indivisíveis.
- INV-016-006: Eventos repetidos não eliminam falhas posteriores.
- INV-016-007: Sessões revogadas não são restauradas pelo desbloqueio.
- INV-016-008: O relógio do dispositivo não determina o desbloqueio.
- INV-016-009: Estados não confiáveis impedem novas autenticações afetadas.
- INV-016-010: Nenhum evento crítico confirmado pode ser perdido na recuperação.

### Evidências tecnológicas complementares (PBI-058)
- VT-016-001: Atomicidade entre desbloqueio e reinicialização. Pendente.
- VT-016-002: Consistência de autenticações concorrentes. Pendente.
- VT-016-003: Idempotência e tratamento de respostas tardias. Pendente.
- VT-016-004: Confiabilidade da referência temporal do servidor. Pendente.
- VT-016-005: Recuperação após falha durante a transição de estado. Pendente.
- VT-016-006: Preservação do RPO específico de zero segundos. Pendente.
- VT-016-007: Integração com alteração e recuperação de senha. Pendente.
- VT-016-008: Integração com transferência de dispositivo e revogação de sessão. Pendente.
Reconciliar com os 22 grupos EV-AUT-101 existentes antes de ampliar a contagem oficial. Exigir arquitetura, prova de conceito Supabase, integração e concorrência Android/iOS, relatório de segurança e riscos e aceitação PO. Não constitui comprovação tecnológica.

### 40 cenários complementares — propostos, não executados
- CP-LR119-001: Senha correta e autenticação concluída — Reiniciar contador.
- CP-LR119-002: Senha correta com etapa obrigatória pendente — Preservar contador.
- CP-LR119-003: Autenticação cancelada antes da conclusão — Preservar contador.
- CP-LR119-004: Falha operacional antes da conclusão — Preservar contador.
- CP-LR119-005: Perda da resposta após conclusão registrada — Manter reinicialização efetivada.
- CP-LR119-006: Repetição de autenticação já concluída — Não eliminar falhas posteriores.
- CP-LR119-007: Login válido concorrente com falha anterior — Respeitar ordem efetiva; reiniciar após a falha.
- CP-LR119-008: Falha posterior ao login válido — Contabilizar nova falha.
- CP-LR120-001: Alteração com contador igual a 1 — Preservar contador em 1.
- CP-LR120-002: Alteração com contador igual a 4 — Preservar contador em 4.
- CP-LR120-003: Alteração durante bloqueio, quando autorizada — Preservar prazo original.
- CP-LR120-004: Alteração cancelada — Não reiniciar contador.
- CP-LR120-005: Link de confirmação expirado — Não reiniciar contador.
- CP-LR120-006: Falha operacional na alteração — Preservar contador.
- CP-LR120-007: Alteração concluída seguida de login inválido — Contabilizar falha elegível.
- CP-LR120-008: Alteração concluída seguida de login válido — Reiniciar somente após autenticação concluída.
- CP-LR121-001: Solicitação com contador igual a 4 — Preservar contador.
- CP-LR121-002: Solicitação durante bloqueio — Permitir recuperação conforme regras vigentes.
- CP-LR121-003: Redefinição concluída durante bloqueio — Preservar prazo original.
- CP-LR121-004: Login com nova senha antes do prazo — Rejeitar sem incrementar.
- CP-LR121-005: Link de recuperação expirado — Não reiniciar contador.
- CP-LR121-006: Recuperação interrompida — Preservar contador.
- CP-LR121-007: Login válido após desbloqueio — Permitir autenticação conforme regras vigentes.
- CP-LR121-008: Recuperação concorrente com falha elegível — Preservar contabilização da falha.
- CP-LR122-001: Credenciais corretas no novo dispositivo — Preservar contador enquanto pendente.
- CP-LR122-002: Emissão do link de transferência — Não reiniciar contador.
- CP-LR122-003: Confirmação válida e transferência concluída — Reiniciar contador.
- CP-LR122-004: Link expirado — Preservar contador.
- CP-LR122-005: Transferência cancelada — Preservar contador.
- CP-LR122-006: Solicitação anterior invalidada — Não produzir reinicialização.
- CP-LR122-007: Confirmação durante bloqueio vigente — Não concluir nova autorização.
- CP-LR122-008: Repetição de confirmação já processada — Não eliminar falhas posteriores.
- CP-LR125-001: Tentativa imediatamente anterior ao prazo — Rejeitar sem incrementar.
- CP-LR125-002: Término exato do prazo de 60 segundos — Desbloquear e reiniciar atomicamente.
- CP-LR125-003: Prazo encerrado sem aplicativo aberto — Produzir efeito lógico do desbloqueio.
- CP-LR125-004: Primeira senha incorreta após desbloqueio — Contabilizar uma falha.
- CP-LR125-005: Tentativas concorrentes no encerramento — Respeitar ordem efetiva do servidor.
- CP-LR125-006: Repetição do processamento de desbloqueio — Não reiniciar novamente.
- CP-LR125-007: Recuperação com estado e tempo confiáveis — Preservar prazo e eventos confirmados.
- CP-LR125-008: Recuperação com estado ou tempo não confiável — Impedir autenticações afetadas.
