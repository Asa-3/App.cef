# Adendo normativo MVP — baseline v1.4.3

DEC-LR-AUT-094-001 — aprovada pelo PO em 27/11/2026. Manifestação: “Aprovo integralmente a DEC-LR-AUT-094-001, incluindo a alternativa A, as alterações normativas propostas, os 30 cenários complementares e o versionamento v1.4.3. Registre a decisão e prossiga com a atualização documental.”
Alternativa A: contabilizar exclusivamente senha incorreta confirmada e registrada pelo servidor para conta existente e habilitada fora do bloqueio. Não incrementar nem reiniciar por falhas operacionais, comunicação, requisições inválidas, conta inexistente/excluída ou falhas de outros fluxos. Cancelamento antes da validação não contabiliza; perda de resposta após registro preserva incremento e eventual bloqueio/revogação. Aplicativo não presume resultado desconhecido. Preservar v1.4.0–v1.4.2. LR-AUT-103 trata duplicidade e reconciliação; LR-AUT-095 trata exposição de existência de contas. Nenhuma arquitetura, código HTTP, CAPTCHA ou contador adicional definido.
Complementa [adendo v1.4.2](12-Adendo-Mudanca-v1.4.2.md) e prevalece nos pontos alterados de MVP-04/05/07/08/09. Fonte: [matriz vigente](../Engenharia-de-Requisitos/Matriz_Consolidada_Requisitos_v1.4.3.md).
## MVP-04
Revisados RF-AUT-014, RN-AUT-014, CA-AUT-029. Inventário 127 RF, 11 RNF, 66 RN, 156 CA incluindo CA-NF, 19 CON, 412 CEN = 791 elementos MVP; 851 totais. MoSCoW inalterado.
## MVP-05
PBI-015: Alternativa A: contabilizar exclusivamente senha incorreta confirmada e registrada pelo servidor para conta existente e habilitada fora do bloqueio. Não incrementar nem reiniciar por falhas operacionais, comunicação, requisições inválidas, conta inexistente/excluída ou falhas de outros fluxos. Cancelamento antes da validação não contabiliza; perda de resposta após registro preserva incremento e eventual bloqueio/revogação. Aplicativo não presume resultado desconhecido. Preservar v1.4.0–v1.4.2. LR-AUT-103 trata duplicidade e reconciliação; LR-AUT-095 trata exposição de existência de contas. Nenhuma arquitetura, código HTTP, CAPTCHA ou contador adicional definido. 60 PBIs mantidos.
## MVP-07
| ID provisório | Cenário | Resultado esperado |
|---|---|---|
| CP-LR094-001 | Senha incorreta para conta habilitada | Incrementar contador |
| CP-LR094-002 | Login bem-sucedido após falhas | Zerar contador |
| CP-LR094-003 | Nome de usuário inexistente | Não incrementar contador de nenhuma conta |
| CP-LR094-004 | Tentativa para conta excluída | Rejeitar sem contabilização |
| CP-LR094-005 | Campo de usuário ausente | Não incrementar contador |
| CP-LR094-006 | Campo de senha ausente | Não incrementar contador |
| CP-LR094-007 | Requisição malformada | Não incrementar contador |
| CP-LR094-008 | Senha incorreta durante bloqueio | Rejeitar sem incremento |
| CP-LR094-009 | Dispositivo sem internet | Preservar contador |
| CP-LR094-010 | Falha de DNS | Preservar contador |
| CP-LR094-011 | Falha de conexão TLS | Preservar contador |
| CP-LR094-012 | Servidor indisponível antes da validação | Preservar contador |
| CP-LR094-013 | Banco de dados indisponível antes da validação | Preservar contador |
| CP-LR094-014 | Erro interno antes do registro da falha | Não contabilizar falha não registrada |
| CP-LR094-015 | Requisição não recebida pelo servidor | Preservar contador |
| CP-LR094-016 | Cancelamento antes da validação | Preservar contador |
| CP-LR094-017 | Quatro falhas seguidas de erro operacional | Contador permanece em quatro |
| CP-LR094-018 | Senha incorreta após quatro falhas e erro operacional intermediário | Acionar bloqueio e revogação |
| CP-LR094-019 | Link de recuperação inválido | Preservar contador |
| CP-LR094-020 | Link de recuperação expirado | Preservar contador |
| CP-LR094-021 | Link de recuperação já utilizado | Preservar contador |
| CP-LR094-022 | Link de transferência inválido | Preservar contador |
| CP-LR094-023 | Link de transferência expirado | Preservar contador |
| CP-LR094-024 | Falha no envio de e-mail de recuperação | Preservar contador |
| CP-LR094-025 | Senha incorreta registrada, com resposta perdida | Manter incremento registrado |
| CP-LR094-026 | Quinta falha registrada, com resposta perdida | Preservar bloqueio e revogação |
| CP-LR094-027 | Erro operacional durante bloqueio | Preservar contador e prazo original |
| CP-LR094-028 | Indisponibilidade prolongada antes da quinta falha | Preservar falhas acumuladas |
| CP-LR094-029 | Falha operacional em dispositivo diferente | Não alterar contador compartilhado |
| CP-LR094-030 | Resultado desconhecido pelo aplicativo | Não presumir resultado; preservar autoridade do servidor |
Reconciliar 30 cenários com 40 do RF-AUT-014, 36 das LR-AUT-098/099 e 412 CEN. Não executados.
## MVP-08
RF-AUT-014 ↔ RN-AUT-004/014 ↔ CA-AUT-014/029/030 ↔ PBI-015 ↔ CT-MVP-M01-001 (referência, não evidência). CON-M01-010/011/015; issues candidatas #25/#66/#90/#102, não alteradas.
## MVP-09
Baseline v1.4.3, gates e escopo inalterados. Validar classificação de falhas no Supabase, persistência e atomicidade. LR-AUT-092/093/095/096/097/100/101/102/103 preservadas. Não atesta homologação técnica ou operacional, nem autoriza produção.
