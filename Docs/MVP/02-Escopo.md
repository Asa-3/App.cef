# MVP-02 — Definição e Delimitação do Escopo

## 1. Identificação
Projeto App.cef | Versão 1.0.0 | Data 27/11/2026 | Responsável Product Owner | Status: homologado pelo PO.
Referências: [MVP-01](01-Visao-e-Objetivos.md) e [Matriz v1.3.0](../Engenharia-de-Requisitos/Matriz_Consolidada_Requisitos_v1.3.0.md).

## 2. Objetivo
Definir o escopo funcional, técnico e operacional da primeira versão, garantindo funcionalidades necessárias para validar a proposta de valor.

## 3. Escopo funcional
| ID | Módulo | Escopo |
|---|---|---|
| ESC-MVP-001 | M01 | Autenticação por usuário e senha; primeiro acesso obrigatório; alteração e recuperação de senha; e-mail de recuperação; tentativas; sessão única e transferência; logout e limpeza local. |
| ESC-MVP-002 | M02 | Criação administrativa de contas; perfil inicial; visualização; edição autorizada do próprio perfil; exclusão administrativa; preservação da autoria histórica. |
| ESC-MVP-003 | M03 | Lista pessoal; pesquisa de colaboradores; adição, edição e remoção de contatos. |
| ESC-MVP-004 | M04 | Conversas individuais; histórico autorizado; comunicação entre setores e níveis; acesso restrito aos participantes. |
| ESC-MVP-005 | M05 | Criação e gestão administrativa de grupos; adição e remoção de integrantes; comunicação coletiva; exclusão administrativa; histórico conforme período de participação. |
| ESC-MVP-006 | M06 | Envio e recebimento de texto; atualização de conversas; exclusão autorizada; fila; falhas e reenvio. |
| ESC-MVP-007 | M07 | PDF até 2 GB e JPEG até 20 MB; validação de formato; antimalware; armazenamento privado; acesso e download autorizados. |
| ESC-MVP-008 | M08 | Notificações de novas mensagens; controle de acesso ao conteúdo; tratamento conforme regras homologadas. |
| ESC-MVP-009 | M09 | Módulo completo postergado, mantido no escopo geral. |
| ESC-MVP-010 | M10 | Histórico autorizado; offline de dados carregados; sincronização ao reconectar; falhas; segurança do cache. Funções exclusivas de M09 postergadas. |
| ESC-MVP-011 | M11 | Auditoria de operações incluídas; consulta administrativa; proteção; retenção e exclusão. Eventos exclusivos de funções postergadas acompanham essas funções. |
| ESC-MVP-012 | M12 | Autenticação e autorização no servidor; proteção em trânsito e local; persistência; desempenho e disponibilidade; backup e recuperação; RNF aplicáveis. |

## 4. Escopo técnico
Android e iOS; Supabase (autenticação, banco, Realtime e Storage); GitHub (versionamento, Projects e Actions); Vercel (componentes web compatíveis); Vibe Coding. Arquitetura definitiva sujeita à validação do Líder Técnico.

## 5. Entregas posteriores
M09, histórico específico de avisos, sincronização específica de avisos e auditoria exclusiva dessas funções. Seleção individual no MVP-03.

## 6. Fora do escopo geral
Chamadas de voz/vídeo, mensagens de áudio, formatos diferentes de PDF/JPEG, edição de mensagens, confirmação de leitura, comunicação entre organizações, criação de grupos por Funcionários, exclusão integral de conversas individuais e saída voluntária de Funcionários de grupos. Inclusão exige aprovação formal.

## 7. Requisitos não funcionais
| Indicador | Meta |
|---|---|
| Texto em condições normais | Até 1 segundo |
| Usuários simultâneos | 100 |
| Disponibilidade mensal | 99,9% |
| RTO | 30 minutos |
| RPO | 24 horas |
| Backup | Diário |
| Retenção de backup | 30 dias |
| Teste de restauração | Mensal |
| Retenção de auditoria | 1 ano |
| Critérios obrigatórios aprovados | 100% |
| Defeitos críticos/bloqueantes em aberto | Zero |
| Conclusão de tarefas essenciais | Mínimo 90% |
| Satisfação | Mínimo 80% |

Mensuração da latência pendente na INC-DOC-005.

## 8. Entregáveis
| ID | Entregável |
|---|---|
| ENT-MVP-001 | Aplicativo mobile funcional |
| ENT-MVP-002 | Serviços de autenticação e comunicação |
| ENT-MVP-003 | Banco configurado |
| ENT-MVP-004 | Armazenamento seguro |
| ENT-MVP-005 | Repositório versionado |
| ENT-MVP-006 | Pipeline CI/CD |
| ENT-MVP-007 | Engenharia de requisitos |
| ENT-MVP-008 | UML aplicável |
| ENT-MVP-009 | Plano de testes e evidências |
| ENT-MVP-010 | Manual de utilização |
| ENT-MVP-011 | Termo de homologação |

## 9. Dependências e riscos
| ID | Risco | Tratamento |
|---|---|---|
| RISC-MVP-001 | PDF 2 GB | Validar limites e viabilidade |
| RISC-MVP-002 | Realtime | Testes de integração e carga |
| RISC-MVP-003 | Revogação e offline | Validar consistência e segurança |
| RISC-MVP-004 | Antimalware | Validar antes de liberar anexos |
| RISC-MVP-005 | Rastreabilidade | Concluir INC-DOC-003 |
| RISC-MVP-006 | Cenários genéricos | Corrigir INC-DOC-004 |
| RISC-MVP-007 | Latência | Corrigir INC-DOC-005 |
| RISC-MVP-008 | Android/iOS | Validar compilação e distribuição |
| RISC-MVP-009 | Capacidade e prazo | Estimar antes do compromisso |

## 10. Controle de mudanças
Registrar alteração, analisar impacto, avaliar com equipe e Líder Técnico, obter aprovação do PO e atualizar documentos e backlog. Postergação não exclui requisitos da matriz consolidada.

## 11. Critérios de conclusão documental
Escopo definido, postergações identificadas, restrições e dependências registradas, limites preservados e aprovação formal do PO.

## 12. Homologação
Aprovado integralmente pelo PO em 27/11/2026. Próximo: MVP-03.
| Decisão | Aprovação |
|---|---|
| DEC-MVP-001 | Postergar M09 |
| DEC-MVP-002 | Manter PDF 2 GB e JPEG 20 MB, sujeitos à validação técnica |
| DEC-MVP-003 | Manter cache, sincronização e fila aplicáveis |
| DEC-MVP-004 | Manter segurança, auditoria e RNF aplicáveis |
| DEC-MVP-005 | Manter Android e iOS |

Manifestação: “Aprovo integralmente o MVP-02 v1.0.0 e as decisões DEC-MVP-001 a DEC-MVP-005. Publique o documento no GitHub e prossiga para o MVP-03 — Matriz de Priorização MoSCoW.”

## 13. Histórico
1.0.0 — 27/11/2026 — elaboração e homologação documental. Redação compactada em tabelas, preservando as decisões; não constitui aceite de implementação.
