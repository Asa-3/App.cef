# MVP-06 — Plano de Implementação e Entregas

Versão 1.0.0 | 27/11/2026 | Product Owner | Scrum | Homologado pelo PO.
Referências: [MVP-05](05-Product-Backlog.md), [MVP-04](04-Matriz-de-Requisitos.md) e matriz consolidada v1.3.0.

## Estratégia e etapas
| Etapa | Entrega | PBIs | Entregável e critério de liberação |
|---|---|---|---|
| E00 | Preparação e viabilidade | 001–004, 006–008, 039, 045, 055–057 | Ambiente inicial, riscos avaliados, backlog refinado; bloqueios impeditivos resolvidos antes das funções afetadas. |
| E01 | Fundação técnica | 005, 009 | Autorização, RLS, TLS, navegação e design system; acessos indevidos bloqueados e pipeline funcional. |
| E02 | Autenticação, contas e perfis | 010–022, 052 | Primeiro acesso, recuperação, sessão única, revogação, perfis, autoria e auditoria inicial; CA aplicáveis aprovados. |
| E03 | Comunicação individual e contatos | 023–027, 033–035 | Contatos, conversas, texto, realtime e exclusão; transmissão e isolamento verificados. |
| E04 | Comunicação em grupo | 028–032 | Gestão administrativa, integrantes, exclusão e histórico temporal; permissões verificadas. |
| E05 | Anexos e downloads | 040–044 | PDF/JPEG, validação, antimalware, storage privado e links; arquivos não autorizados, pendentes ou rejeitados inacessíveis. |
| E06 | Offline, notificações e auditoria | 036–038, 046–051, 053–054 | Fila, cache, sincronização, push e auditoria; todos requisitos obrigatórios implementados e inicialmente validados. |
| E07 | Estabilização e homologação | 058–060 | Integração, regressão, segurança, desempenho, recuperação, usabilidade, documentação e aceite PO. |

60 PBIs, cada um com uma etapa principal. Segurança, auditoria, QA e documentação transversais desde o início. Roadmap ilustrativo de oito ciclos de duas semanas (16 semanas), não compromisso. Uma etapa pode ocupar várias Sprints.

## Marcos
v0.1.0 fundação; v0.2.0 acesso e usuários; v0.3.0 comunicação individual; v0.4.0 grupos; v0.5.0 anexos; v0.6.0 integração funcional; v1.0.0-rc.1 candidata; v1.0.0 após homologação. Versionamento do aplicativo independente dos documentos.

## RACI
R execução, A responsabilidade final, C consultado, I informado.
| Atividade | PO | TL | FE | BE | FS | UX | QA |
|---|---|---|---|---|---|---|---|
| Escopo e prioridades | A/R | C | I | I | I | C | C |
| Arquitetura | C | A | C | R | R | I | C |
| Infraestrutura | I | A | C | R | R | I | C |
| Interface | C | C | R | I | R | A | C |
| Backend | I | A | C | R | R | I | C |
| Segurança | C | A | R | R | R | I | C |
| Testes | C | C | C | C | C | C | A/R |
| Documentação | A | R | R | R | R | R | R |
| Deploy | I | A | R | R | R | I | C |
| Homologação | A | C | C | C | C | C | R |

TL Líder Técnico; FE Frontend; BE Backend; FS Full Stack; UX UX/UI; QA Quality Assurance. Atribuições individuais no Sprint Planning.

## Scrum
Planning no início; Daily diariamente; Refinement semanal; Review e Retrospective no final. Review não substitui homologação final.

## Ambientes e branches
DEV → CI (GitHub Actions) → HML → PRD após aprovação. Isolar configurações e credenciais; evitar dados corporativos reais indiscriminadamente; validar recursos dos planos.
main estável; develop integração; feature/PBI-XXX; fix/PBI-XXX; release/vX.Y.Z; hotfix/descricao. Pull Requests, revisão e verificações automatizadas. Estratégia sujeita à validação do TL.

## Capacidade
Sprints de duas semanas. Estimativas pela equipe. Simulação: Sprints = teto(pontos totais / (velocidade × (1 − reserva))); prazo = Sprints × duração. Exemplo ilustrativo: 240 pontos, 30 por Sprint, reserva 15% → 10 Sprints, 20 semanas. Não é estimativa homologada; revisar a cada Sprint e considerar dependências.

## Riscos
| ID | Risco | Impacto preliminar | Tratamento |
|---|---|---|---|
| RI-001 | PDF 2 GB | Alto | Prova de conceito |
| RI-002 | Revogação de sessões | Crítico | Testes de consistência e segurança |
| RI-003 | Acesso indevido | Crítico | RLS e autorização |
| RI-004 | Perda/duplicidade de mensagens | Alto | Sincronização e reenvio |
| RI-005 | Antimalware indisponível | Alto | Processamento e retentativas |
| RI-006 | Latência | Alto | Métrica e carga |
| RI-007 | Backup e restauração | Crítico | Exercícios de recuperação |
| RI-008 | Limites das ferramentas | Alto | Validar planos |
| RI-009 | Android/iOS | Alto | Testar ambas |
| RI-010 | Prazo insuficiente | Alto | Estimar capacidade |
| RI-011 | Rastreabilidade | Alto | INC-DOC-003 |
| RI-012 | Cenários genéricos | Alto | INC-DOC-004 |
| RI-013 | Retenção inadequada | Alto | LGPD |
| RI-014 | Falhas em código gerado por IA | Alto | Revisão e testes |
Probabilidade e exposição a avaliar pela equipe.

## Critérios de liberação
- 124 RF implementados e aceitos; 11 RNF atendidos; 65 RN respeitadas.
- 142 CA funcionais e 11 CA-NF aprovados.
- 19 CON verificadas; 412 cenários refinados e validados conforme plano de testes.
- Zero defeitos críticos/bloqueantes abertos; segurança aprovada; desempenho, disponibilidade e recuperação comprovados.
- Conclusão de tarefas essenciais ≥90%; satisfação ≥80%; Android e iOS validados.
- Documentação e rastreabilidade atualizadas; aceite final formal do PO.
Disponibilidade mensal 99,9% exige observação adequada; teste pontual não comprova.

## Homologação
DEC-MVP-021: oito etapas e 60 PBIs.
DEC-MVP-022: Sprints de duas semanas sem quantidade fixa.
DEC-MVP-023: marcos e versionamento incremental.
DEC-MVP-024: RACI, ambientes isolados, revisão e branches sujeitos à validação técnica.
DEC-MVP-025: liberação condicionada a evidências, documentação e aceite PO.

Manifestação: “Aprovo integralmente o MVP-06 v1.0.0 e as decisões DEC-MVP-021 a DEC-MVP-025. Publique o documento no GitHub e prossiga para o MVP-07 — Plano de Testes e Critérios de Aceite.”

Limitações: capacidade, prazo acadêmico, estimativas e viabilidade técnica pendentes. Redação compactada preservando decisões. Não constitui aceite de implementação; nenhuma issue, branch ou ambiente alterado.
