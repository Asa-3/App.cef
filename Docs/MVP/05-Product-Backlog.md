# MVP-05 — Product Backlog Priorizado

Versão 1.0.0 | 27/11/2026 | Product Owner | Scrum | Homologado pelo PO.
Referências: [MVP-04](04-Matriz-de-Requisitos.md), [MVP-03](03-Priorizacao-MoSCoW.md), [CEF Asa 3](https://github.com/orgs/Asa-3/projects/3/views/1).

## Objetivos e prioridades
Organizar os 135 requisitos obrigatórios, ordenar por valor, dependências e risco, reutilizar issues, rastrear requisitos e testes e evitar escopo não homologado.
P0 bloqueante; P1 alta/base segura; P2 integração e expansão essencial; P3 finalização obrigatória. Prioridade de execução não altera MoSCoW.

## Épicos
- EP-001 — Infraestrutura e segurança (M12)
- EP-002 — Autenticação e sessões (M01)
- EP-003 — Contas e perfis (M02)
- EP-004 — Contatos (M03)
- EP-005 — Conversas individuais (M04)
- EP-006 — Grupos (M05)
- EP-007 — Mensagens e fila (M06)
- EP-008 — Anexos e downloads (M07)
- EP-009 — Notificações (M08)
- EP-010 — Histórico e sincronização (M10)
- EP-011 — Auditoria (M11)
- EP-012 — Validação e entrega (Transversal)

## Backlog inicial
| ID | Épico | Módulo | Atividade | Prioridade | Papel sugerido | Issues candidatas |
|---|---|---|---|---|---|---|
| PBI-001 | EP-001 | M12 | Definir arquitetura e estratégia de distribuição | P0 | Tech Lead | [#86](https://github.com/Asa-3/App.cef/issues/86), [#92](https://github.com/Asa-3/App.cef/issues/92), [#95](https://github.com/Asa-3/App.cef/issues/95) |
| PBI-002 | EP-001 | M12 | Configurar repositório e padrões de desenvolvimento | P0 | Tech Lead | [#87](https://github.com/Asa-3/App.cef/issues/87), [#88](https://github.com/Asa-3/App.cef/issues/88), [#93](https://github.com/Asa-3/App.cef/issues/93), [#94](https://github.com/Asa-3/App.cef/issues/94) |
| PBI-003 | EP-001 | M12 | Modelar banco de dados e relacionamentos | P0 | Backend | [#14](https://github.com/Asa-3/App.cef/issues/14), [#24](https://github.com/Asa-3/App.cef/issues/24), [#89](https://github.com/Asa-3/App.cef/issues/89) |
| PBI-004 | EP-001 | M12 | Configurar CI/CD e testes automatizados | P0 | Tech Lead / QA | [#22](https://github.com/Asa-3/App.cef/issues/22), [#91](https://github.com/Asa-3/App.cef/issues/91) |
| PBI-005 | EP-001 | M12 | Implementar TLS, autorização e RLS | P0 | Backend | [#15](https://github.com/Asa-3/App.cef/issues/15), [#26](https://github.com/Asa-3/App.cef/issues/26), [#90](https://github.com/Asa-3/App.cef/issues/90) |
| PBI-006 | EP-001 | M12 | Validar backup, retenção e recuperação | P0 | Tech Lead | [#99](https://github.com/Asa-3/App.cef/issues/99) |
| PBI-007 | EP-001 | M12 | Definir mensuração de desempenho | P0 | PO / QA | [#101](https://github.com/Asa-3/App.cef/issues/101) |
| PBI-008 | EP-001 | M12 | Revisar retenção de dados e LGPD | P0 | PO / Tech Lead | [#100](https://github.com/Asa-3/App.cef/issues/100) |
| PBI-009 | EP-001 | M12 | Preparar interface, navegação e design system | P1 | UX/UI / Frontend | [#13](https://github.com/Asa-3/App.cef/issues/13), [#35](https://github.com/Asa-3/App.cef/issues/35), [#36](https://github.com/Asa-3/App.cef/issues/36), [#37](https://github.com/Asa-3/App.cef/issues/37), [#38](https://github.com/Asa-3/App.cef/issues/38), [#45](https://github.com/Asa-3/App.cef/issues/45), [#46](https://github.com/Asa-3/App.cef/issues/46) |
| PBI-010 | EP-002 | M01 | Implementar login e validação de credenciais | P1 | Full Stack | [#25](https://github.com/Asa-3/App.cef/issues/25), [#39](https://github.com/Asa-3/App.cef/issues/39), [#47](https://github.com/Asa-3/App.cef/issues/47), [#60](https://github.com/Asa-3/App.cef/issues/60) |
| PBI-011 | EP-002 | M01 | Implementar primeiro acesso obrigatório | P1 | Full Stack | [#25](https://github.com/Asa-3/App.cef/issues/25), [#39](https://github.com/Asa-3/App.cef/issues/39), [#60](https://github.com/Asa-3/App.cef/issues/60) |
| PBI-012 | EP-002 | M01 | Implementar alteração e recuperação de senha | P1 | Full Stack | [#25](https://github.com/Asa-3/App.cef/issues/25), [#47](https://github.com/Asa-3/App.cef/issues/47), [#60](https://github.com/Asa-3/App.cef/issues/60) |
| PBI-013 | EP-002 | M01 | Implementar gerenciamento do e-mail de recuperação | P1 | Full Stack | [#25](https://github.com/Asa-3/App.cef/issues/25), [#60](https://github.com/Asa-3/App.cef/issues/60) |
| PBI-014 | EP-002 | M01 | Implementar sessão única e transferência de dispositivo | P1 | Backend | [#25](https://github.com/Asa-3/App.cef/issues/25), [#102](https://github.com/Asa-3/App.cef/issues/102) |
| PBI-015 | EP-002 | M01 | Implementar controle de tentativas e bloqueio | P1 | Backend | [#25](https://github.com/Asa-3/App.cef/issues/25), [#66](https://github.com/Asa-3/App.cef/issues/66) |
| PBI-016 | EP-002 | M01 | Implementar persistência, revogação e logout seguro | P1 | Full Stack | [#25](https://github.com/Asa-3/App.cef/issues/25), [#66](https://github.com/Asa-3/App.cef/issues/66), [#102](https://github.com/Asa-3/App.cef/issues/102) |
| PBI-017 | EP-002 | M01 | Validar consistência dos fluxos de autenticação | P1 | QA | [#66](https://github.com/Asa-3/App.cef/issues/66), [#102](https://github.com/Asa-3/App.cef/issues/102) |
| PBI-018 | EP-003 | M02 | Implementar criação administrativa de contas | P1 | Backend | [#27](https://github.com/Asa-3/App.cef/issues/27) |
| PBI-019 | EP-003 | M02 | Implementar preenchimento inicial de perfil | P1 | Full Stack | [#27](https://github.com/Asa-3/App.cef/issues/27), [#57](https://github.com/Asa-3/App.cef/issues/57), [#62](https://github.com/Asa-3/App.cef/issues/62) |
| PBI-020 | EP-003 | M02 | Implementar visualização e edição autorizada | P1 | Full Stack | [#27](https://github.com/Asa-3/App.cef/issues/27), [#40](https://github.com/Asa-3/App.cef/issues/40), [#57](https://github.com/Asa-3/App.cef/issues/57), [#62](https://github.com/Asa-3/App.cef/issues/62) |
| PBI-021 | EP-003 | M02 | Implementar exclusão e readmissão de contas | P1 | Backend | [#27](https://github.com/Asa-3/App.cef/issues/27), [#100](https://github.com/Asa-3/App.cef/issues/100) |
| PBI-022 | EP-003 | M02 | Preservar autoria histórica e identificação | P1 | Backend | [#27](https://github.com/Asa-3/App.cef/issues/27), [#100](https://github.com/Asa-3/App.cef/issues/100) |
| PBI-023 | EP-004 | M03 | Implementar lista pessoal e pesquisa de usuários | P2 | Full Stack | [#40](https://github.com/Asa-3/App.cef/issues/40), [#51](https://github.com/Asa-3/App.cef/issues/51), [#61](https://github.com/Asa-3/App.cef/issues/61) |
| PBI-024 | EP-004 | M03 | Implementar adição, edição e remoção de contatos | P2 | Full Stack | [#51](https://github.com/Asa-3/App.cef/issues/51), [#61](https://github.com/Asa-3/App.cef/issues/61) |
| PBI-025 | EP-005 | M04 | Implementar início de conversa individual | P1 | Full Stack | [#29](https://github.com/Asa-3/App.cef/issues/29), [#48](https://github.com/Asa-3/App.cef/issues/48), [#103](https://github.com/Asa-3/App.cef/issues/103) |
| PBI-026 | EP-005 | M04 | Implementar histórico autorizado | P1 | Full Stack | [#18](https://github.com/Asa-3/App.cef/issues/18), [#30](https://github.com/Asa-3/App.cef/issues/30) |
| PBI-027 | EP-005 | M04 | Garantir isolamento entre participantes | P1 | Backend / QA | [#26](https://github.com/Asa-3/App.cef/issues/26), [#69](https://github.com/Asa-3/App.cef/issues/69) |
| PBI-028 | EP-006 | M05 | Implementar criação e administração de grupos | P2 | Full Stack | [#29](https://github.com/Asa-3/App.cef/issues/29), [#42](https://github.com/Asa-3/App.cef/issues/42), [#53](https://github.com/Asa-3/App.cef/issues/53) |
| PBI-029 | EP-006 | M05 | Implementar gerenciamento de integrantes | P2 | Full Stack | [#29](https://github.com/Asa-3/App.cef/issues/29), [#53](https://github.com/Asa-3/App.cef/issues/53) |
| PBI-030 | EP-006 | M05 | Implementar exclusão de grupos e conteúdos | P2 | Backend | [#29](https://github.com/Asa-3/App.cef/issues/29), [#53](https://github.com/Asa-3/App.cef/issues/53) |
| PBI-031 | EP-006 | M05 | Implementar períodos de participação e readição | P2 | Backend | [#29](https://github.com/Asa-3/App.cef/issues/29), [#71](https://github.com/Asa-3/App.cef/issues/71) |
| PBI-032 | EP-006 | M05 | Validar permissões e histórico temporal | P2 | QA | [#71](https://github.com/Asa-3/App.cef/issues/71) |
| PBI-033 | EP-007 | M06 | Implementar envio, recebimento e persistência | P1 | Full Stack | [#9](https://github.com/Asa-3/App.cef/issues/9), [#19](https://github.com/Asa-3/App.cef/issues/19), [#30](https://github.com/Asa-3/App.cef/issues/30), [#49](https://github.com/Asa-3/App.cef/issues/49) |
| PBI-034 | EP-007 | M06 | Integrar comunicação em tempo real | P1 | Full Stack | [#16](https://github.com/Asa-3/App.cef/issues/16), [#31](https://github.com/Asa-3/App.cef/issues/31), [#33](https://github.com/Asa-3/App.cef/issues/33), [#50](https://github.com/Asa-3/App.cef/issues/50) |
| PBI-035 | EP-007 | M06 | Implementar exclusão autorizada de mensagens | P1 | Backend | [#58](https://github.com/Asa-3/App.cef/issues/58), [#103](https://github.com/Asa-3/App.cef/issues/103) |
| PBI-036 | EP-007 | M06 | Implementar fila persistente de envio offline | P2 | Full Stack | [#19](https://github.com/Asa-3/App.cef/issues/19), [#21](https://github.com/Asa-3/App.cef/issues/21), [#67](https://github.com/Asa-3/App.cef/issues/67) |
| PBI-037 | EP-007 | M06 | Implementar tentativas, reenvio e deduplicação | P2 | Full Stack | [#19](https://github.com/Asa-3/App.cef/issues/19), [#67](https://github.com/Asa-3/App.cef/issues/67), [#68](https://github.com/Asa-3/App.cef/issues/68) |
| PBI-038 | EP-007 | M06 | Implementar tratamento de falhas e descarte no logout | P2 | Full Stack | [#19](https://github.com/Asa-3/App.cef/issues/19), [#21](https://github.com/Asa-3/App.cef/issues/21), [#67](https://github.com/Asa-3/App.cef/issues/67) |
| PBI-039 | EP-008 | M07 | Validar viabilidade técnica dos anexos | P0 | Tech Lead | [#98](https://github.com/Asa-3/App.cef/issues/98) |
| PBI-040 | EP-008 | M07 | Implementar upload e validação de formato e tamanho | P2 | Backend | [#20](https://github.com/Asa-3/App.cef/issues/20), [#32](https://github.com/Asa-3/App.cef/issues/32), [#34](https://github.com/Asa-3/App.cef/issues/34) |
| PBI-041 | EP-008 | M07 | Implementar análise antimalware e novas tentativas | P2 | Backend | [#32](https://github.com/Asa-3/App.cef/issues/32), [#98](https://github.com/Asa-3/App.cef/issues/98) |
| PBI-042 | EP-008 | M07 | Implementar armazenamento privado e limpeza | P2 | Backend | [#20](https://github.com/Asa-3/App.cef/issues/20), [#32](https://github.com/Asa-3/App.cef/issues/32), [#34](https://github.com/Asa-3/App.cef/issues/34) |
| PBI-043 | EP-008 | M07 | Implementar autorização e links temporários | P2 | Backend | [#32](https://github.com/Asa-3/App.cef/issues/32), [#98](https://github.com/Asa-3/App.cef/issues/98) |
| PBI-044 | EP-008 | M07 | Implementar download, interrupção e reinício | P2 | Full Stack | [#20](https://github.com/Asa-3/App.cef/issues/20), [#72](https://github.com/Asa-3/App.cef/issues/72), [#98](https://github.com/Asa-3/App.cef/issues/98) |
| PBI-045 | EP-008 | M07 | Resolver exclusão com anexo em análise pendente | P0 | PO / Tech Lead | [#106](https://github.com/Asa-3/App.cef/issues/106) |
| PBI-046 | EP-009 | M08 | Implementar notificações de mensagens | P2 | Full Stack | [#7](https://github.com/Asa-3/App.cef/issues/7), [#43](https://github.com/Asa-3/App.cef/issues/43), [#55](https://github.com/Asa-3/App.cef/issues/55), [#59](https://github.com/Asa-3/App.cef/issues/59) |
| PBI-047 | EP-009 | M08 | Validar acesso ao conteúdo e comportamento do push | P2 | QA | [#70](https://github.com/Asa-3/App.cef/issues/70) |
| PBI-048 | EP-010 | M10 | Implementar cache e consulta offline | P2 | Full Stack | [#18](https://github.com/Asa-3/App.cef/issues/18), [#21](https://github.com/Asa-3/App.cef/issues/21), [#30](https://github.com/Asa-3/App.cef/issues/30) |
| PBI-049 | EP-010 | M10 | Implementar sincronização e deduplicação | P2 | Full Stack | [#21](https://github.com/Asa-3/App.cef/issues/21), [#30](https://github.com/Asa-3/App.cef/issues/30), [#68](https://github.com/Asa-3/App.cef/issues/68) |
| PBI-050 | EP-010 | M10 | Implementar gestão local de anexos | P2 | Frontend | [#20](https://github.com/Asa-3/App.cef/issues/20), [#21](https://github.com/Asa-3/App.cef/issues/21) |
| PBI-051 | EP-010 | M10 | Aplicar exclusões remotas e limpeza do cache | P2 | Full Stack | [#21](https://github.com/Asa-3/App.cef/issues/21), [#30](https://github.com/Asa-3/App.cef/issues/30), [#102](https://github.com/Asa-3/App.cef/issues/102) |
| PBI-052 | EP-011 | M11 | Implementar registro de operações administrativas | P1 | Backend | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| PBI-053 | EP-011 | M11 | Implementar consulta, filtros e ordenação | P2 | Full Stack | [#97](https://github.com/Asa-3/App.cef/issues/97) |
| PBI-054 | EP-011 | M11 | Implementar retenção e exclusão automática | P2 | Backend | [#97](https://github.com/Asa-3/App.cef/issues/97), [#100](https://github.com/Asa-3/App.cef/issues/100) |
| PBI-055 | EP-012 | Transversal | Reconciliar documentação, UML e rastreabilidade | P0 | PO | [#80](https://github.com/Asa-3/App.cef/issues/80), [#85](https://github.com/Asa-3/App.cef/issues/85), [#105](https://github.com/Asa-3/App.cef/issues/105) |
| PBI-056 | EP-012 | Transversal | Reconciliar issues e remover conflitos de escopo | P0 | PO / Tech Lead | [#82](https://github.com/Asa-3/App.cef/issues/82), [#103](https://github.com/Asa-3/App.cef/issues/103), [#104](https://github.com/Asa-3/App.cef/issues/104) |
| PBI-057 | EP-012 | Transversal | Refinar cenários e preparar plano de testes | P0 | PO / QA | [#65](https://github.com/Asa-3/App.cef/issues/65), [#84](https://github.com/Asa-3/App.cef/issues/84) |
| PBI-058 | EP-012 | Transversal | Validar integração, segurança, desempenho e regressão | P3 | QA | [#66](https://github.com/Asa-3/App.cef/issues/66), [#67](https://github.com/Asa-3/App.cef/issues/67), [#68](https://github.com/Asa-3/App.cef/issues/68), [#69](https://github.com/Asa-3/App.cef/issues/69), [#70](https://github.com/Asa-3/App.cef/issues/70), [#71](https://github.com/Asa-3/App.cef/issues/71), [#72](https://github.com/Asa-3/App.cef/issues/72), [#74](https://github.com/Asa-3/App.cef/issues/74) |
| PBI-059 | EP-012 | Transversal | Validar usabilidade e satisfação dos usuários | P3 | UX/UI / QA | [#44](https://github.com/Asa-3/App.cef/issues/44), [#73](https://github.com/Asa-3/App.cef/issues/73) |
| PBI-060 | EP-012 | Transversal | Consolidar documentação e homologar o MVP | P3 | PO / Equipe | [#83](https://github.com/Asa-3/App.cef/issues/83), [#84](https://github.com/Asa-3/App.cef/issues/84), [#85](https://github.com/Asa-3/App.cef/issues/85) |

## Ordem proposta
Preparação e bloqueios; base funcional; expansão funcional; integração e estabilização; validação e homologação. Segurança e auditoria transversais. Não são Sprints definidas.

## Reconciliação
Possíveis duplicidades: #14/#24/#89 banco; #15/#26 RLS; #16/#31/#33 Realtime; #20/#32/#34 anexos; #47/#60 autenticação; #51/#61 contatos; #57/#62 perfil. Conferir conteúdo e preservar contribuições; não encerrar por título.
Conflitos: #28 verificar equipes versus grupos; #52/#63 retirar solicitações de conversa não homologadas; #54 retirar presença/digitação; #56/#64 revisar busca; #58 manter exclusão e retirar edição; #96 postergar avisos. Revisar preferências de notificações e indicadores de não lidas sem correspondência confirmada.
Bloqueios candidatos: #98 anexos; #99 backup; #100 LGPD; #101 latência; #102 sessões; #105 IDs originais; #106 exclusão com anexo pendente.

## GitHub Projects
Campos propostos: Status (Backlog, Ready, In Progress, In Review, Testing, Done); Prioridade P0–P3; MoSCoW M/S/C/W; Épico EP-001–012; Módulo M01–M12/Transversal; PBI texto; Story Points número; Sprint iteração; Responsável assignee; Bloqueado Sim/Não; Requisitos texto. Conferir configuração atual antes de alterar.

## Definition of Ready
- Descrição clara; objetivo/valor; requisitos associados; critérios de aceitação; dependências identificadas e bloqueios impeditivos resolvidos; estimativa pela equipe; tamanho executável; responsabilidades compreendidas.

## Definition of Done
- Implementação conforme requisitos; código versionado; revisão técnica; pipeline aprovado; CA atendidos; testes funcionais e segurança aprovados; zero defeitos críticos/bloqueantes associados em aberto; documentação e rastreabilidade atualizadas; evidências registradas; aceite funcional PO quando aplicável.

## Estimativas
Story Points Fibonacci 1, 2, 3, 5, 8, 13; avaliar decomposição acima de 13. Desenvolvedores estimam colaborativamente; nenhuma estimativa individual atribuída.

## Homologação
DEC-MVP-016: 12 épicos e 60 PBIs iniciais.
DEC-MVP-017: P0–P3 por dependências, valor e riscos.
DEC-MVP-018: reaproveitar e reconciliar issues.
DEC-MVP-019: fluxo, campos, DoR e DoD após conferência do board.
DEC-MVP-020: Story Points Fibonacci, estimativa pela equipe.

Manifestação: “Aprovo integralmente o MVP-05 v1.0.0 e as decisões DEC-MVP-016 a DEC-MVP-020. Publique o documento no GitHub e prossiga para o MVP-06 — Plano de Implementação e Entregas.”

Limitações: consulta de até 100 issues não garante inventário exaustivo; vínculos candidatos, refinamento, estimativas e associação explícita a requisitos pendentes; configuração do board não verificada. Nenhuma issue alterada. Aprovação documental, não aceite de implementação. Redação compactada, preservando os 60 PBIs e decisões.
