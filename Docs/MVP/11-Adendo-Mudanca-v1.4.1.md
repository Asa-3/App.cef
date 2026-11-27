# Adendo normativo MVP — baseline v1.4.1

DEC-LR-AUT-099-001 — aprovada pelo PO em 27/11/2026. Alternativa A: contador sem expiração por inatividade. Manifestação: “Aprovo integralmente a DEC-LR-AUT-099-001, incluindo a alternativa A, as alterações normativas propostas e o versionamento v1.4.1. Registre a decisão e prossiga com a atualização documental.”
Prevalece sobre MVP-04/05/07/08/09 e complementa o [adendo v1.4.0](10-Adendo-Mudanca-v1.4.0.md), preservado. Fonte: [matriz vigente](../Engenharia-de-Requisitos/Matriz_Consolidada_Requisitos_v1.4.1.md).
## MVP-04
Revisados RF-AUT-014/016, RN-AUT-014, CA-AUT-014/016/029 conforme matriz vigente. RF-AUT-015 inalterado. Inventário 127 RF, 11 RNF, 66 RN, 156 CA incluindo CA-NF, 19 CON, 412 CEN = 791 elementos MVP; 851 totais. MoSCoW inalterado.
## MVP-05
PBI-015: contador persistente por conta, compartilhado entre dispositivos, sem expiração por inatividade; reinicialização após login bem-sucedido ou término do bloqueio. 60 PBIs mantidos.
## MVP-07
| ID provisório | Cenário | Resultado esperado |
|---|---|---|
| CP-LR099-001 | Uma falha e 1h de inatividade | Contador 1 |
| CP-LR099-002 | Duas falhas e 24h | Contador 2 |
| CP-LR099-003 | Três falhas e 7 dias | Contador 3 |
| CP-LR099-004 | Quatro falhas e 30 dias | Contador 4 |
| CP-LR099-005 | Quinta falha após longa inatividade | Bloqueio e revogação |
| CP-LR099-006 | Login bem-sucedido após quatro falhas antigas | Contador 0 |
| CP-LR099-007 | Nova falha após login bem-sucedido | Contador 1 |
| CP-LR099-008 | Cinco falhas em dispositivos e dias distintos | Bloqueio |
| CP-LR099-009 | Alterar relógio do dispositivo | Preservar contador |
| CP-LR099-010 | Reiniciar servidor | Preservar contador persistido |
| CP-LR099-011 | Fim dos 60 segundos de bloqueio | Contador 0 |
| CP-LR099-012 | Nova falha após bloqueio | Contador 1 |
CP-39 RF-AUT-014 definido: bloquear e revogar. CP-40 pendente. Reconciliar 12 cenários com 40 propostos e 412 CEN; não executados.
## MVP-08
RF-AUT-014/016 ↔ RN-AUT-014 ↔ CA-AUT-014/016/029 ↔ PBI-015 ↔ CT-MVP-M01-001 (referência, não evidência). RF-AUT-015 relacionado. Issues candidatas #25/#66/#90/#102, não alteradas.
## MVP-09
Baseline v1.4.1, gates e escopo inalterados. Validar persistência e concorrência no Supabase. LR-AUT-098/100/101/103 e demais lacunas preservadas. Nenhuma homologação técnica ou operacional atestada. Não autoriza produção.
