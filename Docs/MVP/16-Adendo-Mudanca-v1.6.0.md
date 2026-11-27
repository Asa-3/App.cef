# 16 — Adendo de mudança v1.6.0


## Controle v1.6.0 — DEC-INT-M01-015-001 (27/11/2026)
PO aprovou integralmente as três alternativas B, dez elementos revisados, cinco novos, Must Have, 48 cenários, protocolos e revisão de impacto DEC-RAST-M01-014. LR113: precedência estrutural 400, proteção indisponível 503, limite excedido 429, elegibilidade/credenciais 401 ou indisponibilidade 503 sem divulgação; controles independentes. LR114: RPO crítico zero, RPO geral 24h, RTO 30min; segurança prevalece, registrar violação do RTO. LR115 vinculada à LR101 aberta. Inventário vigente 865 (155 RF,82 RN,173 CA,12 RNF,12 CA-NF,19 CON,412 CEN); MVP 805, fora 60, 143 RF/RNF Must Have, 60 PBIs; M01 22 RF/20 RN/38 CA/19 CON/412 CEN=511. Histórico anterior preservado. Retenção de deduplicação e latência máxima de detecção da perda de confiabilidade permanecem residuais; não declarar resolução integral desses parâmetros. Nenhum teste executado. Ver adendo MVP 16.

## Protocolos aprovados
Precedência: 100% correta; zero incrementos, revogações ou alterações indevidas; zero diferenças reveladoras; diferença mediana ≤50ms, p95 ≤100ms, limite superior IC95% AUC ≤0,55; três rodadas, 1000 amostras por condição/rodada, carga 1 e 100. Preservar demais parâmetros v1.5.1. Recuperação: três rodadas independentes por classe de falha, mínimo 100 eventos críticos confirmados por rodada, todas classes representadas, carga 1/100, Android/iOS, ambiente isolado, mensal, falhas antes/durante/depois do registro. Evidências de eventos, estados, tempos e resultados. Zero perda/duplicidade/autorizações indevidas; interrupção até 5000ms após detecção da perda de capacidade de autorização; latência máxima de detecção pendente. RPO medido por efeitos confirmados preservados ou legitimamente sucedidos, inclusive resposta perdida. Validar integridade, completude, ordem, unicidade, contadores, credenciais, sessões/links, contas excluídas, relógio, controles abuso, autorização e registro verificável. Não apagar cache nem revogar definitivamente apenas por indisponibilidade. Impedir operações dependentes (login, token, recuperação, senha, email, transferência, mensagens, fila, links/download). Preservar identidade, credenciais, email, contadores, bloqueios, sessões, transferências, links, deduplicação, janelas abuso e exclusões. Retenção deduplicação pendente. RTO não justifica liberação insegura.

## Cenários complementares
- CP-LR113-001: Conta disponível com limite excedido: 429 sem incremento
- CP-LR113-002: Conta bloqueada: 429 equivalente
- CP-LR113-003: Conta inexistente: 429 equivalente
- CP-LR113-004: Conta excluída: 429 equivalente
- CP-LR113-005: Conta não habilitada: 429 equivalente
- CP-LR113-006: Senha correta: rejeitar antes da validação
- CP-LR113-007: Senha incorreta: sem contabilização
- CP-LR113-008: Bloqueada sem excesso: 401
- CP-LR113-009: Inexistente sem excesso: 401 equivalente
- CP-LR113-010: Estrutura inválida: 400
- CP-LR113-011: Proteção indisponível: 503
- CP-LR113-012: Restrição termina primeiro: preservar bloqueio
- CP-LR113-013: Bloqueio termina primeiro: preservar restrição
- CP-LR113-014: Bloqueio termina com restrição ativa: zerar contador legitimamente
- CP-LR113-015: Duplicatas abusivas: restringir sem duplicar efeitos
- CP-LR113-016: Concorrência: consistência
- CP-LR113-017: Comparação estrutural 429: sem divulgação
- CP-LR113-018: Comparação temporal: limites homologados
- CP-LR114-001: Primeira falha: preservar 1
- CP-LR114-002: Quarta falha: preservar 4
- CP-LR114-003: Quinta antes do registro: sem efeitos parciais
- CP-LR114-004: Quinta confirmada: preservar bloqueio/revogação
- CP-LR114-005: Resposta perdida: preservar registro
- CP-LR114-006: Antes do término: prazo original
- CP-LR114-007: No término: desbloqueio legítimo
- CP-LR114-008: Após término: sem novo bloqueio
- CP-LR114-009: Tempo não confiável: impedir operações
- CP-LR114-010: Login confirmado: preservar reset
- CP-LR114-011: Senha substituída: não restaurar antiga
- CP-LR114-012: Email alterado: preservar confirmado
- CP-LR114-013: Sessão revogada por bloqueio: não restaurar
- CP-LR114-014: Revogada por transferência: não restaurar
- CP-LR114-015: Revogada por logout: não restaurar
- CP-LR114-016: Conta excluída: não reativar
- CP-LR114-017: Link recuperação usado: não reativar
- CP-LR114-018: Link transferência invalidado: não reativar
- CP-LR114-019: Link download revogado: rejeitar
- CP-LR114-020: Transferência ativa sem autorização verificável: interromper até 5000ms após detecção
- CP-LR114-021: Duplicata registrada: sem novos efeitos
- CP-LR114-022: Janela abuso vigente: preservar efeitos relevantes
- CP-LR114-023: Backup íntegro incompleto: manter não confiável
- CP-LR114-024: Eventos fora de ordem: reconciliar antes de liberar
- CP-LR114-025: Registro corrompido: impedir operações
- CP-LR114-026: Sessão offline revogada: rejeitar e limpar ao detectar
- CP-LR114-027: Indisponibilidade sem revogação: não apagar dados locais por essa causa
- CP-LR114-028: Recuperação segura até 30min: aprovar se todas garantias atendidas
- CP-LR114-029: Recuperação insegura até 30min: reprovar
- CP-LR114-030: Recuperação segura acima de 30min: liberar e registrar violação RTO

## Impacto MVP
Prevalece sobre MVP 03/04/05/07/08/09 e adendos anteriores nos pontos alterados. RF-AUT-022 e RNF-REC-012 Must Have; PBI-017 e 006 principais, demais vínculos na matriz v1.6.0. 60 PBIs mantidos. LR101 aberta, LR115 vinculada; EV013–018 conforme matriz. 48 registros provisórios reconciliar com 36 RF015, 192 RF014 e 412 CEN. Nenhuma issue alterada, nenhum teste executado. Homologação técnica/operacional pendente.
