# Adendo integrado MVP — v1.5.0

DEC-INT-M01-014-001 — aprovação integral do PO em 27/11/2026: “Aprovo integralmente a DEC-INT-M01-014-001, incluindo as nove decisões individuais, os 10 elementos normativos revisados, os nove novos elementos normativos, a classificação Must Have, os 72 cenários complementares, os critérios de validação técnica e o versionamento v1.5.0. Registre as decisões e prossiga com a atualização documental integrada.”

| Decisão | Política | Vínculos principais | PBI |
|---|---|---|---|
| DEC-LR-AUT-092-001 | Contador único por conta, todos os dispositivos; independência entre contas. | CA-AUT-014/015/029 | PBI-015 |
| DEC-LR-AUT-093-001 | Atomicidade por conta; quinta falha, bloqueio, prazo e revogação efetiva indivisíveis; limpeza local e interrupção física conforme requisitos próprios. | RF-AUT-014/015; RN-AUT-004/014 | PBI-015 |
| DEC-LR-AUT-095-001 | Respostas externas genéricas para inexistência, exclusão, bloqueio e senha incorreta; classificação interna distinta; avaliar conteúdo, códigos e tempos. Falha geral pode ser informada sem revelar conta. | RF-AUT-019; RN-AUT-017; CA-AUT-035 | PBI-010 |
| DEC-LR-AUT-096-001 | Persistir após reinício/reinstalação/indisponibilidade; não presumir zero; após restauração incerta impedir novas autenticações afetadas até recuperação segura. RPO inalterado. | RF-AUT-014; CA-AUT-029 | PBI-015 |
| DEC-LR-AUT-097-001 | Ordem efetiva das decisões do servidor, sem prioridade automática para sucesso ou falha; respeitar bloqueio, transferência, recuperação, exclusão, renovação e respostas tardias. | RF-AUT-014/015/016; RN-AUT-014 | PBI-017 |
| DEC-LR-AUT-100-001 | Mitigar automação e abuso sem substituir contador, prolongar bloqueio ou revelar contas; preservar acesso legítimo; risco residual de bloqueio intencional permanece. | RF-AUT-020; RN-AUT-018; CA-AUT-036 | PBI-015 |
| DEC-LR-AUT-101-001 | Exigir arquitetura, prova de conceito Supabase, testes integração/concorrência Android/iOS, relatório segurança e riscos, aceitação PO. Lacuna técnica aberta. | Evidências transversais | PBI-058 |
| DEC-LR-AUT-102-001 | Aplicar revogação efetiva a tokens, links emitidos, downloads ativos e fila; limpeza local após detecção; desbloqueio não restaura autorizações. | CA-AUT-030; RF-ARQ-028/029/030; RN-ARQ-007; CA-ARQ-029/030; RN-AUT-016; CA-AUT-033/034 | PBI-016 |
| DEC-LR-AUT-103-001 | Cada tentativa lógica elegível produz efeito uma vez; novas tentativas com mesma senha contam separadamente; rejeitar reutilização com credenciais diferentes e requisições antigas não verificáveis; expiração de deduplicação não permite recontagem. | RF-AUT-021; RN-AUT-019; CA-AUT-037 | PBI-017 |

Pendências: parâmetros mensuráveis de enumeração, abuso e interrupção física de downloads; retenção/identificação de duplicatas; recuperação segura após desastre; viabilidade Supabase. LR101 aberta; demais 11 políticas definidas, não necessariamente critérios completos. Não há testes executados. CA-AUT-014: 'distintas' refere-se a tentativas lógicas distintas, não a valores de senha distintos. Não se cria regra de reset por recuperação/troca de senha fora do bloqueio. Revisão de impacto RF-AUT-001/006/009/012/013 pendente. DEC-RAST-M01-014 não homologada.

Fonte: [Matriz Consolidada](../Engenharia-de-Requisitos/Matriz_Consolidada_Requisitos_v1.5.0.md). Complementa adendos anteriores; prevalece sobre MVP-03/04/05/07/08/09 nos pontos alterados.
## Escopo e priorização
RF-AUT-019/020/021 Must Have. 130 RF + 11 RNF + 69 RN + 159 CA incluindo CA-NF + 19 CON + 412 CEN = 800 MVP; 860 totais; 60 fora. 141 RF/RNF obrigatórios; 24 RF Would Have; 60 PBIs mantidos. Refinar PBI-005/010/012/014/015/016/017/043/044/058.
## Cenários complementares
| ID provisório | Cenário | Resultado esperado |
|---|---|---|
| CP-LR092-001 | Cinco falhas no mesmo dispositivo | Ativar bloqueio |
| CP-LR092-002 | Cinco falhas em dispositivos diferentes | Ativar bloqueio compartilhado |
| CP-LR092-003 | Trocar dispositivo após quatro falhas | Preservar contador |
| CP-LR092-004 | Reinstalar após quatro falhas | Preservar contador |
| CP-LR092-005 | Senha correta em outro dispositivo durante bloqueio | Rejeitar |
| CP-LR092-006 | Login bem-sucedido em outro dispositivo | Reiniciar contador se demais condições atendidas |
| CP-LR092-007 | Falhas em contas diferentes | Contadores independentes |
| CP-LR092-008 | Consultar estado em outro dispositivo | Obter estado efetivo |
| CP-LR093-001 | Duas falhas simultâneas com contador zero | Contador dois |
| CP-LR093-002 | Duas falhas simultâneas com contador três | Contador cinco e bloqueio |
| CP-LR093-003 | Duas falhas simultâneas com contador quatro | Um incremento e uma rejeição |
| CP-LR093-004 | Dez falhas simultâneas | Contador limitado a cinco |
| CP-LR093-005 | Ativações concorrentes | Uma única ativação |
| CP-LR093-006 | Falha antes do registro | Sem incremento parcial |
| CP-LR093-007 | Falha durante transição | Sem estado parcialmente autorizado |
| CP-LR093-008 | Acesso protegido concorrente | Respeitar ordem efetiva |
| CP-LR093-009 | Contas distintas simultâneas | Preservar independência |
| CP-LR093-010 | Perda de resposta após transição | Preservar estado registrado |
| CP-LR095-001 | Usuário inexistente | Não revelar inexistência |
| CP-LR095-002 | Conta excluída | Não revelar exclusão |
| CP-LR095-003 | Conta bloqueada | Não revelar bloqueio a não verificado |
| CP-LR095-004 | Senha incorreta | Resposta genérica |
| CP-LR095-005 | Comparar conteúdo | Não distinguir estados de maneira confiável |
| CP-LR095-006 | Comparar códigos | Não revelar estado |
| CP-LR095-007 | Comparar tempos | Atender protocolo aprovado |
| CP-LR095-008 | Recuperação para inexistente | Não revelar existência |
| CP-LR096-001 | Fechar aplicativo | Preservar contador |
| CP-LR096-002 | Reiniciar aplicativo | Preservar contador |
| CP-LR096-003 | Reinstalar aplicativo | Preservar contador |
| CP-LR096-004 | Reiniciar serviço | Preservar estado registrado |
| CP-LR096-005 | Banco indisponível | Não presumir zero |
| CP-LR096-006 | Estado inacessível | Impedir autenticação |
| CP-LR096-007 | Restaurar backup incerto | Recuperação segura antes de autorizar |
| CP-LR096-008 | Reiniciar serviço durante bloqueio | Preservar prazo original |
| CP-LR097-001 | Quinta falha antes de senha correta | Bloquear e rejeitar |
| CP-LR097-002 | Login bem-sucedido antes de nova falha | Reiniciar e contabilizar nova falha |
| CP-LR097-003 | Tentativa concorrente com desbloqueio | Aplicar estado efetivo |
| CP-LR097-004 | Transferência concorrente com bloqueio | Não autorizar destino durante bloqueio |
| CP-LR097-005 | Recuperação concorrente | Não antecipar desbloqueio |
| CP-LR097-006 | Exclusão concorrente com login | Não restaurar conta |
| CP-LR097-007 | Renovação após revogação | Rejeitar |
| CP-LR097-008 | Resposta atrasada de login | Não restaurar autorização |
| CP-LR097-009 | Relógios divergentes | Autoridade temporal do servidor |
| CP-LR097-010 | Respostas fora de ordem | Preservar estado efetivo |
| CP-LR100-001 | Padrão automatizado definido | Aplicar proteção prevista |
| CP-LR100-002 | Rejeição antes de validar senha | Não incrementar |
| CP-LR100-003 | Usuários legítimos na mesma rede | Atender critérios de acesso legítimo |
| CP-LR100-004 | Abuso durante bloqueio | Não prolongar |
| CP-LR100-005 | Proteção para usuário inexistente | Não revelar existência |
| CP-LR100-006 | Tentativa legítima admitida | Política normal |
| CP-LR100-007 | Falha do mecanismo | Não contornar garantias |
| CP-LR100-008 | Ataque distribuído ou lento | Avaliar eficácia e risco residual |
| CP-LR102-001 | Quinta falha com sessão ativa | Revogar autorização |
| CP-LR102-002 | Token antigo após bloqueio | Rejeitar acesso |
| CP-LR102-003 | Novo link após revogação | Impedir emissão |
| CP-LR102-004 | Link ainda válido | Rejeitar novo download |
| CP-LR102-005 | Download ativo | Interromper conforme prazo a definir |
| CP-LR102-006 | Dispositivo offline | Revogar no servidor |
| CP-LR102-007 | Reconexão revogada | Validar e limpar dados |
| CP-LR102-008 | Fila pendente revogada | Impedir envio |
| CP-LR102-009 | Desbloqueio e link antigo | Rejeitar link |
| CP-LR102-010 | Novo login | Não restaurar autorizações |
| CP-LR103-001 | Mesma tentativa duas vezes | Contabilizar uma vez |
| CP-LR103-002 | Duplicatas simultâneas | Um efeito |
| CP-LR103-003 | Repetição após perda de resposta | Preservar resultado |
| CP-LR103-004 | Tentativas distintas com mesma senha | Contabilizar ambas se elegíveis |
| CP-LR103-005 | Duplicação da quinta falha | Não reativar bloqueio |
| CP-LR103-006 | Duplicata durante bloqueio | Não alterar contador ou prazo |
| CP-LR103-007 | Duplicata após desbloqueio | Não recontar |
| CP-LR103-008 | ID reutilizado com credenciais diferentes | Não aceitar como mesma tentativa |
| CP-LR103-009 | Resposta repetida após revogação | Não restaurar sessão |
| CP-LR103-010 | Requisição antiga não verificável | Rejeitar sem tratar como nova |

72 novos registros complementares; 138 acumulados com 66 anteriores; reconciliar com 40 originais e 412 CEN. Não executados.
## Evidências obrigatórias LR-AUT-101
1. Contador único compartilhado.
2. Atomicidade sem perda de incrementos.
3. Bloqueio fixo 60s no servidor.
4. Persistência após reinício.
5. Distinção falhas de senha/operacionais.
6. Deduplicação.
7. Proteção contra enumeração.
8. Mitigação de abuso.
9. Revogação efetiva sessões/tokens.
10. Invalidação de links.
11. Interrupção de downloads.
12. Consistência concorrente.
Líder Técnico: arquitetura e riscos; Back-End: prova de conceito Supabase; Back-End e QA: integração e concorrência; Front-End e QA: Android/iOS; Líder Técnico e QA: relatório segurança; PO: aceitação das evidências. HOM-MVP-002/003 pendentes; sem autorização de produção. Issues e código inalterados.
