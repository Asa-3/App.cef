# Controle de consolidação documental — M01 v1.3.0

**Projeto:** Asa-3/App.cef  
**Data:** 23/11/2026  
**Última atualização:** 27/11/2026  
**Situação:** M01 homologado pelo PO; consolidação documental publicada na matriz v1.3.0 em 23/11/2026, com redação reconstruída autorizada. Validação técnica, refinamento dos cenários e rastreabilidade individual permanecem pendentes. Este arquivo é um controle complementar à matriz.

## Inventário aprovado

- RF-AUT-001 a RF-AUT-018: 18 requisitos funcionais.
- RN-AUT-001 a RN-AUT-016: 16 regras de negócio (5 na base v1.2.1; 11 adicionais).
- CA-AUT-001 a CA-AUT-034: 34 critérios de aceitação (18 na base; 16 adicionais).
- CON-M01-001 a CON-M01-019: 19 resoluções de consistência homologadas e inventário de 412 cenários. A redação reconstruída dos cenários foi autorizada pelo PO; não equivale à transcrição literal nem à validação individual pelo QA.

## Distribuição de cenários por resolução

| CON | Cenários | CON | Cenários |
|---|---:|---|---:|
| CON-M01-001 | 10 | CON-M01-002 | 12 |
| CON-M01-003 | 18 | CON-M01-004 | 18 |
| CON-M01-005 | 18 | CON-M01-006 | 18 |
| CON-M01-007 | 20 | CON-M01-008 | 24 |
| CON-M01-009 | 24 | CON-M01-010 | 20 |
| CON-M01-011 | 24 | CON-M01-012 | 28 |
| CON-M01-013 | 30 | CON-M01-014 | 26 |
| CON-M01-015 | 28 | CON-M01-016 | 20 |
| CON-M01-017 | 24 | CON-M01-018 | 26 |
| CON-M01-019 | 24 | **TOTAL** | **412** |

## Referências

- [Matriz consolidada v1.3.0](Matriz_Consolidada_Requisitos_v1.3.0.md): versão publicada, com ampliação M01 e 412 cenários reconstruídos.

- [Matriz v1.2.1](Matriz_Consolidada_Requisitos_v1.2.1.md): textos originais dos 18 RF, 5 RN e 18 CA.
- [Registro de decisões](Registro-Decisoes-Homologacao-v1.2.1.md): DEC-M01-001 em diante.
- [Termo de homologação M01–M12](Homologacao_Consolidada_PO_M01_a_M12_2026-11-23.md): aprovação documental.

## Controle de conclusão e pendências

### Concluído

- [x] Homologação documental do M01 pelo PO, integrada à homologação M01–M12.
- [x] Autorização expressa do PO para reconstruir os 412 cenários a partir das decisões aprovadas, sem alegar transcrição literal.
- [x] Incorporação de 11 RN e 16 CA adicionais em redação consolidada.
- [x] Publicação da matriz v1.3.0 em 23/11/2026 ([commit de criação](https://github.com/Asa-3/App.cef/commit/2ebd9ca1055592245cd79248f86621088cccc661)).
- [x] Conferência de 412 identificadores de cenário únicos e distribuição conforme as 19 resoluções.
- [x] Correção da data de criação da matriz ([commit](https://github.com/Asa-3/App.cef/commit/96752140fed78f17dc2669e5a0341584ff25a3cc)).

### Pendente

- [ ] PO e QA: conferir rastreabilidade individual entre RF, RN, CA, CON, cenários e decisões, inclusive referências legadas quando disponíveis.
- [ ] QA e desenvolvimento: refinar os cenários genéricos, remover combinações não aplicáveis, definir precondições, dados, ações e resultados esperados específicos; registrar cobertura efetiva.
- [ ] Líder Técnico e QA: validar viabilidade técnica e executar testes, registrando evidências e resultados.
- [ ] PO e QA: resolver pendências de mensuração de desempenho registradas na matriz.

## Histórico de atualização

| Data | Registro |
|---|---|
| 23/11/2026 | Controle inicial e publicação da matriz v1.3.0 com reconstrução autorizada. |
| 27/11/2026 | Atualização do controle para refletir a publicação, substituição da exigência de transcrição literal pela reconstrução autorizada e registro das pendências remanescentes (INC-DOC-002). |

**A homologação documental do PO permanece válida.** A contagem de cenários não comprova cobertura, execução de testes ou aceite técnico. A ausência dos enunciados originais impede afirmar equivalência literal; a recuperação deles deixou de ser condição para publicação por autorização expressa do PO.
