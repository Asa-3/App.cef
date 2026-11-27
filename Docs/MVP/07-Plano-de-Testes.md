# MVP-07 — Plano de Testes e Critérios de Aceite
Versão 1.0.0 | 27/11/2026 | Homologado pelo PO | Coordenação QA.
Referências: MVP-01 a MVP-06; matriz v1.3.0.
## Escopo
124 RF, 11 RNF, 65 RN, 142 CA funcionais, 11 CA-NF, 19 CON e 412 cenários: 784 elementos, não quantidade de testes. M09 e dependências exclusivas postergados.
## Estratégia
TT-001 unitário; 002 integração; 003 funcional; 004 segurança; 005 desempenho; 006 carga; 007 recuperação; 008 compatibilidade; 009 usabilidade; 010 regressão; 011 smoke; 012 consistência; 013 conectividade; 014 aceitação.
## Validação por módulo
M01 18 RF/34 CA: primeiro acesso, senha, bloqueio, sessão única, transferência, revogação e consistência. M02 16/16: contas, perfis, exclusão e autoria. M03 5/5: pesquisa e contatos pessoais. M04 4/4: conversas e isolamento. M05 17/19: grupos, integrantes, exclusão e histórico temporal. M06 14/14: texto, exclusão, proibição de edição, fila e reenvio. M07 27/27: formatos, limites, antimalware, armazenamento, links e downloads. M08 3/3: push de mensagens. M10 12/12: cache, sincronização e exclusões. M11 8/8: auditoria, filtros, retenção. M12 11 RNF/11 CA-NF: segurança, desempenho, disponibilidade e recuperação.
## Caso de teste
CT-MVP-MXX-NNN; título, módulo, RF/RN/RNF/CA/CON/PBI, categoria, prioridade, precondições, dados, passos, esperado, obtido, ambiente, status, evidência, defeito, executor, data.
## Exemplos não executados
| ID | Precondição e procedimento | Esperado | Referência |
|---|---|---|---|
| CT-MVP-M01-001 | Conta ativa; cinco senhas incorretas; tentar senha correta durante bloqueio; aguardar 60 s e repetir | Bloqueio durante prazo; novo login permitido após prazo | RN-AUT-014, CA-AUT-029/030 |
| CT-MVP-M01-002 | A autorizado, e-mail confirmado; solicitar B; verificar A; confirmar link; tentar operação em A | A ativo até confirmação; B autorizado e A revogado após conclusão | RN-AUT-012/013, CA-AUT-027/028 |
| CT-MVP-M05-001 | Funcionário removido; enviar durante ausência; readicionar; enviar nova mensagem; consultar histórico | Apenas conteúdo desde nova entrada | M05 |
| CT-MVP-M06-001 | Dois funcionários; segundo tenta excluir mensagem do primeiro pela interface e servidor | Negado; mensagem preservada | M06 |
| CT-MVP-M07-001 | Usuário autorizado; arquivo incompatível renomeado PDF; enviar e consultar processamento | Rejeitado e indisponível | M07 |
| CT-MVP-M10-001 | Dispositivo offline com fila e sessão revogada; reconectar; observar validação e cache | Não enviar operações pendentes não aceitas; bloquear e limpar | RN-AUT-016, CON-M01-012 |
Vínculos por módulo precisam de IDs específicos.
## RNF
- CT-MVP-M12-001 / CA-NF-001: TLS ≥1.2 e rejeição de conexão insegura.
- CT-MVP-M12-002 / CA-NF-002: Chamadas diretas não autorizadas rejeitadas.
- CT-MVP-M12-003 / CA-NF-003: Isolamento de cache local.
- CT-MVP-M12-004 / CA-NF-004: Carga 100 simultâneos, texto até 1 s; percentil e pontos de medição pendentes (#101).
- CT-MVP-M12-005 / CA-NF-005: Relatório mensal ≥99,9%, excluída manutenção programada.
- CT-MVP-M12-006 / CA-NF-006: RTO ≤30 min.
- CT-MVP-M12-007 / CA-NF-007: RPO ≤24 h.
- CT-MVP-M12-008 / CA-NF-008: Backup válido diário.
- CT-MVP-M12-009 / CA-NF-009: Retenção 30 dias.
- CT-MVP-M12-010 / CA-NF-010: Backup fora de produção.
- CT-MVP-M12-011 / CA-NF-011: Restauração mensal fora de produção.
## Consistência
19 CON-M01, distribuição: 10,12,18,18,18,18,20,24,24,20,24,28,30,26,28,20,24,26,24 (412). Refinar precondições, passos, resultados, concorrência e falhas; INC-DOC-004 aberta.
## Ambientes e massa
DEV unitários; CI automação; HML integração, carga, segurança e aceite; PRD monitoramento controlado. Dados fictícios/anonimizados. Mínimos: 2 administradores, 6 funcionários, 3 setores, 3 grupos, 2 dispositivos por plataforma Android/iOS, PDF/JPEG válidos, inválidos e limites, online/offline/instável/reconexão, carga 100 usuários.
## Ciclo
Planejar, preparar, executar, analisar, corrigir/retestar, regressão, relatório, aceite PO. E00 viabilidade; E01 infraestrutura; E02 autenticação; E03 contatos e texto; E04 grupos; E05 anexos; E06 offline/push/auditoria; E07 regressão/carga/recuperação/usabilidade/aceite. QA contínuo.
## Status e defeitos
Não executado, em execução, aprovado, reprovado, bloqueado, não aplicável (justificado e aprovado; não dispensa requisito obrigatório). SEV-01 bloqueante, 02 crítica, 03 alta, 04 média, 05 baixa. Prioridade P0–P3 separada. Qualquer violação obrigatória impede aceite.
Issue BUG: título, CT, requisitos, CA, PBI, severidade, prioridade, ambiente, versão, plataforma, autor/data, descrição, precondições, passos, esperado/obtido, evidências sem segredos. Encerrar após correção revisada, reteste, regressão e evidências.
## Automação e critérios
GitHub Actions: priorizar unitários, integração reproduzível, autorização positiva/negativa, regressão essencial, smoke e concorrência viável; usabilidade humana e aceite PO. Frameworks pelo TL. Entrada: requisitos, casos refinados, ambiente, dados, versão, dependências. Saída: CA aprovados, evidências, defeitos impeditivos resolvidos, retestes, regressão, relatório.
## Indicadores
IQ-001 cobertura obrigatória 100%; 002 CA aprovados 100%; 003 cenários refinados 100%; 004 cenários validados 100%; 005 bloqueantes zero; 006 críticos zero; 007 conclusão ≥90%; 008 satisfação ≥80%; 009 plataformas 2/2; 010 evidências rastreáveis 100%.
Usabilidade: mínimo 10 participantes dos dois perfis; tarefas conforme permissões. TC=concluídas/atribuídas ×100; TS=respondentes com nota 4 ou 5/total respondentes ×100, escala 1–5. Amostra acadêmica, não representativa estatisticamente.
## Responsabilidades
PO critérios; QA casos, execução e evidências; PO/QA aderência; dev unitários/correções; TL/QA segurança; UX/QA usabilidade; equipe homologação com aprovação final PO.
## Entregáveis
- ET-001: Plano homologado
- ET-002: Catálogo de testes
- ET-003: Massa de dados
- ET-004: Matriz de rastreabilidade
- ET-005: Scripts automatizados
- ET-006: Registro de execuções
- ET-007: Registro de defeitos
- ET-008: Relatório funcional
- ET-009: Relatório segurança
- ET-010: Relatório desempenho/carga
- ET-011: Relatório backup/recuperação
- ET-012: Relatório usabilidade
- ET-013: Relatório regressão
- ET-014: Relatório consolidado
- ET-015: Termo de homologação
## Aceite
124 RF, 65 RN, 142 CA; 11 RNF/11 CA-NF; 19 CON/412 cenários refinados e validados; segurança; zero críticos/bloqueantes e nenhuma violação obrigatória; desempenho; disponibilidade mensal comprovada; recuperação; usabilidade; Android/iOS; rastreabilidade; documentação; aceite formal PO. Evidências versionadas sem credenciais/dados pessoais.
## Homologação
DEC-MVP-026 estratégia e padronização; 027 qualidade, defeitos e evidências; 028 metodologia de usabilidade; 029 RNF e consistência preservados, pendências resolvidas antes do aceite; 030 indicadores, 15 entregáveis e aceite PO.
Manifestação: “Aprovo integralmente o MVP-07 v1.0.0 e as decisões DEC-MVP-026 a DEC-MVP-030. Publique o documento no GitHub e prossiga para o MVP-08 — Matriz de Rastreabilidade do MVP.”
Redação compactada; exemplos e simuladores não são evidências. INC-DOC-003/004/005 abertas. Nenhum teste executado.
