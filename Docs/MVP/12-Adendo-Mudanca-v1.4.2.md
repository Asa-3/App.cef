# Adendo normativo MVP — baseline v1.4.2

DEC-LR-AUT-098-001 — aprovada pelo PO em 27/11/2026. Manifestação: “Aprovo integralmente a DEC-LR-AUT-098-001, incluindo a alternativa A, as alterações normativas propostas, os 24 cenários complementares e o versionamento v1.4.2. Registre a decisão e prossiga com a atualização documental.”
Alternativa A: bloqueio fixo de 60 segundos a partir da ativação efetiva pelo servidor na quinta falha. Durante o bloqueio, rejeitar todas as tentativas de login, sem necessidade de verificar a senha, manter contador em cinco, não reiniciar nem prolongar prazo e não repetir revogação pela mera rejeição. Antes de 60s, inclusive 59,999s, rejeitar; a partir de 60s, desbloquear e zerar contador independentemente de aplicativo aberto ou nova tentativa. Usar estado efetivo no momento da decisão de autenticação no servidor; concorrência permanece LR-AUT-097. Recuperação não antecipa desbloqueio; transferência não autoriza destino durante bloqueio; sessões e links revogados não são restaurados. Preservar regras v1.4.0/v1.4.1.
Complementa [adendo v1.4.1](11-Adendo-Mudanca-v1.4.1.md) e prevalece nos pontos alterados de MVP-04/05/07/08/09. Fonte: [matriz vigente](../Engenharia-de-Requisitos/Matriz_Consolidada_Requisitos_v1.4.2.md).
## MVP-04
Revisados RF-AUT-014/015/016, RN-AUT-014, CA-AUT-016/029/030. Inventário 127 RF, 11 RNF, 66 RN, 156 CA incluindo CA-NF, 19 CON, 412 CEN = 791 elementos MVP; 851 totais. MoSCoW inalterado.
## MVP-05
PBI-015: bloqueio fixo pelo servidor, contador cinco durante bloqueio, rejeitar sem incremento ou extensão, desbloquear aos 60s e zerar contador, sem restaurar sessões. 60 PBIs mantidos.
## MVP-07
| ID provisório | Cenário | Resultado esperado |
|---|---|---|
| CP-LR098-001 | Senha incorreta durante bloqueio | Rejeitar e manter contador em 5 |
| CP-LR098-002 | Senha correta durante bloqueio | Rejeitar e manter contador em 5 |
| CP-LR098-003 | Dez tentativas consecutivas durante bloqueio | Rejeitar todas; manter contador em 5 |
| CP-LR098-004 | Tentativas em dispositivos distintos | Preservar bloqueio e contador compartilhados |
| CP-LR098-005 | Tentativas simultâneas durante bloqueio | Não incrementar contador |
| CP-LR098-006 | Tentativa em outra conta disponível | Não afetar conta bloqueada |
| CP-LR098-007 | Nova tentativa após 1 segundo | Preservar prazo original |
| CP-LR098-008 | Nova tentativa após 30 segundos | Preservar prazo original |
| CP-LR098-009 | Nova tentativa após 59 segundos | Preservar prazo original |
| CP-LR098-010 | Tentativa processada aos 59,999 segundos | Rejeitar login |
| CP-LR098-011 | Senha correta processada aos 60 segundos | Permitir autenticação se demais condições atendidas |
| CP-LR098-012 | Senha incorreta após desbloqueio | Contador igual a 1 |
| CP-LR098-013 | Alteração do relógio do dispositivo | Não modificar prazo |
| CP-LR098-014 | Reinicialização ou reinstalação do aplicativo | Preservar prazo original |
| CP-LR098-015 | Reinicialização do servidor durante bloqueio | Preservar instante de término registrado |
| CP-LR098-016 | Aplicativo fechado durante 60 segundos | Desbloquear independentemente da abertura |
| CP-LR098-017 | Solicitar recuperação durante bloqueio | Permitir conforme regras vigentes |
| CP-LR098-018 | Concluir recuperação durante bloqueio | Não antecipar desbloqueio |
| CP-LR098-019 | Confirmar transferência durante bloqueio | Impedir autorização do destino |
| CP-LR098-020 | Encerrar bloqueio com sessão revogada | Não restaurar sessão |
| CP-LR098-021 | Usar link revogado após desbloqueio | Rejeitar acesso |
| CP-LR098-022 | Cinco novas falhas após desbloqueio | Acionar novo bloqueio independente de 60 segundos |
| CP-LR098-023 | Enviar fila de sessão revogada após desbloqueio | Impedir envio e descartar fila após detecção |
| CP-LR098-024 | Enviar tentativa antes do término e processar após desbloqueio | Aplicar estado efetivo no momento da decisão de autenticação no servidor |
CP-39 e CP-40 RF-AUT-014 definidos. Reconciliar 24 cenários com 40 do RF-AUT-014, 12 da LR-AUT-099 e 412 CEN. Não executados. CP-LR098-024 não encerra LR-AUT-097.
## MVP-08
RF-AUT-014/015/016 ↔ RN-AUT-004/014 ↔ CA-AUT-014/015/016/029/030 ↔ PBI-015 ↔ CT-MVP-M01-001 (referência, não evidência). CON-M01-010/011/012/015, RN-ARQ-007; issues candidatas #25/#66/#90/#102, não alteradas.
## MVP-09
Baseline v1.4.2, gates e escopo inalterados. Validar persistência, relógio, atomicidade e concorrência no Supabase. LR-AUT-092/093/094/095/096/097/100/101/102/103 preservadas. Não atesta homologação técnica ou operacional, nem autoriza produção.
