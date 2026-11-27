# MVP-08 — Matriz de Rastreabilidade do MVP
Versão 1.0.0 | 27/11/2026 | Homologado pelo PO | Validação PO, QA e Líder Técnico.
Referências: MVP-01 a MVP-07; Matriz Consolidada v1.3.0.
## Objetivo e estrutura
Rastreabilidade bidirecional: objetivos ↔ RF/RNF/RN ↔ CA/CA-NF/CON/CEN ↔ épicos/PBIs/issues ↔ UML ↔ PRs/commits/versões ↔ testes/resultados/evidências ↔ aceite PO.
E: explícito na documentação; P: proposto; V: verificado por evidência; L: lacuna. Vínculo documental não prova implementação.
## Inventário
| Elemento | Produto | MVP | Postergado |
|---|---:|---:|---:|
| RF | 148 | 124 | 24 |
| RNF | 11 | 11 | 0 |
| RN | 77 | 65 | 12 |
| CA | 166 | 142 | 24 |
| CA-NF | 11 | 11 | 0 |
| CON | 19 | 19 | 0 |
| CEN | 412 | 412 | 0 |
| Total | 844 | 784 | 60 |
92,9% do inventário documental, não progresso de implementação.
## Índice por módulo
| Módulo | Prefixo | RF/RNF | RN | CA | EP proposto | PBI principal proposto | Etapa | Issues candidatas |
|---|---|---:|---:|---:|---|---|---|---|
| M01 | AUT | 18 | 16 | 34 | 002 | 010–017 | E02 | 25,39,47,60,66,102 |
| M02 | USR | 16 | 4 | 16 | 003 | 018–022 | E02 | 27,57,62,100 |
| M03 | CON | 5 | 3 | 5 | 004 | 023–024 | E03 | 40,51,61 |
| M04 | CVI | 4 | 3 | 4 | 005 | 025–027 | E03 | 29,48,69,103 |
| M05 | GRP | 17 | 9 | 19 | 006 | 028–032 | E04 | 29,42,53,71 |
| M06 | MSG | 14 | 5 | 14 | 007 | 033–038 | E03/E06 | 19,30,49,67,68,103 |
| M07 | ARQ | 27 | 6 | 27 | 008 | 039–045 | E00/E05 | 20,32,72,98,106 |
| M08 | NOT | 3 | 2 | 3 | 009 | 046–047 | E06 | 7,43,55,59,70 |
| M10 | SINC | 12 | 5 | 12 | 010 | 048–051 | E06 | 18,21,30,68 |
| M11 | AUD | 8 | 5 | 8 | 011 | 052–054 | E02/E06 | 97,100 |
| M12 | INF | 11 | 7 | 11 | 001 | 001–009 | E00/E01 | 86,90,91,93,99,101 |
EP-012 e PBIs 055–060 transversais. Família CT-MVP-MXX-NNN. Vínculos individuais em refinamento, evidências não verificadas.
## Objetivos (P)
OBJ-MVP-001 M01/M12; 002 M02; 003 M03; 004 M04/M05/M06; 005 M06/M07; 006 M08; 007 M01/M02/M04/M05/M07/M10/M11/M12; 008 todos; 009 EP-012/PBI-059.
## Exemplos RF–CA (E) e PBI (P)
- RF-AUT-001 → CA-AUT-001 → PBI-010
- RF-AUT-002 → CA-AUT-002 → PBI-011
- RF-AUT-011 → CA-AUT-011 → PBI-014
- RF-AUT-015 → CA-AUT-015 → PBI-015
- RF-USR-001 → CA-USR-001 → PBI-018
- RF-USR-008 → CA-USR-008 → PBI-020
- RF-CON-005 → CA-CON-005 → PBI-023
- RF-CVI-003 → CA-CVI-003 → PBI-027
- RF-GRP-013 → CA-GRP-014 → PBI-031
- RF-GRP-014 → CA-GRP-015/016 → PBI-031/032
- RF-MSG-005 → CA-MSG-005 → PBI-035
- RF-MSG-012 → CA-MSG-012 → PBI-037
- RF-ARQ-002 → CA-ARQ-002 → PBI-043
- RF-NOT-001 → CA-NOT-001 → PBI-046
- RF-SINC-014 → CA-SINC-014 → PBI-051
- RF-AUD-009 → CA-AUD-009 → PBI-054
## RNF
- RNF-SEG-001 → CA-NF-001 (E) → CT-MVP-M12-001 (referência) → PBI 005 (P)
- RNF-SEG-002 → CA-NF-002 (E) → CT-MVP-M12-002 (referência) → PBI 005 (P)
- RNF-SEG-003 → CA-NF-003 (E) → CT-MVP-M12-003 (referência) → PBI 048,051 (P)
- RNF-DES-004 → CA-NF-004 (E) → CT-MVP-M12-004 (referência) → PBI 007,034,058 (P)
- RNF-DISP-005 → CA-NF-005 (E) → CT-MVP-M12-005 (referência) → PBI 001,058 (P)
- RNF-REC-006 → CA-NF-006 (E) → CT-MVP-M12-006 (referência) → PBI 006,058 (P)
- RNF-REC-007 → CA-NF-007 (E) → CT-MVP-M12-007 (referência) → PBI 006,058 (P)
- RNF-BKP-008 → CA-NF-008 (E) → CT-MVP-M12-008 (referência) → PBI 006 (P)
- RNF-BKP-009 → CA-NF-009 (E) → CT-MVP-M12-009 (referência) → PBI 006 (P)
- RNF-BKP-010 → CA-NF-010 (E) → CT-MVP-M12-010 (referência) → PBI 006 (P)
- RNF-BKP-011 → CA-NF-011 (E) → CT-MVP-M12-011 (referência) → PBI 006,058 (P)
INC-DOC-005 pendente. Execução não comprovada.
## RN (P)
RN-MSG-001 PBI-033/035 teste negativo; RN-MSG-002 PBI-033/034 teste negativo; RN-MSG-003 RF-CVI-004; RN-MSG-004 PBI-036/038 teste negativo; RN-CVI-002 M06; RN-CVI-003 M07/M10; RN-AUD-003 PBI-053 teste negativo; RN-INF-007 RNF-DES-004. Regras sem CA suficiente são lacunas.
## Consistência
| CON-M01 | Cenários | PBIs propostos |
|---|---:|---|
| 001 | 10 | 016 |
| 002 | 12 | 012,017 |
| 003 | 18 | 013,017 |
| 004 | 18 | 012,014,017 |
| 005 | 18 | 013,014,017 |
| 006 | 18 | 012,013,017 |
| 007 | 20 | 012,017 |
| 008 | 24 | 013,017 |
| 009 | 24 | 012,013,017 |
| 010 | 20 | 014,015,017 |
| 011 | 24 | 015,016,017 |
| 012 | 28 | 016,036,049 |
| 013 | 30 | 014,036,037 |
| 014 | 26 | 014,016 |
| 015 | 28 | 016,037,049 |
| 016 | 20 | 011,014 |
| 017 | 24 | 011,013 |
| 018 | 26 | 012,013,014 |
| 019 | 24 | 012,013,014 |
412 cenários: preservar IDs, associar CON e testes; refinamento individual pendente (INC-DOC-004).
## UML (P)
Casos de uso M01–M08/M10/M11; atividades M01–M07; sequência M01/M04–M08/M10; comunicação M04–M08; temporização M01/M06/M07/M10/M12; componentes todos. Localização, versão e elementos dos diagramas não confirmados.
## Registro individual
ID, módulo, origem v1.3.0, Must Have, objetivo, RN, CA, CON, CEN, EP, PBI, issue, etapa, UML, PR, commit, versão, CT, resultado, evidência, defeito, classe E/P/V/L, responsável, revisão, aceite, lacunas.
## Indicadores (meta 100%)
- IR-001: RF/RNF com CA /135
- IR-002: RN com validação /65
- IR-003: RF/RNF com PBI confirmado /135
- IR-004: CA com testes especificados /153
- IR-005: CON com testes /19
- IR-006: CEN refinados e rastreados /412
- IR-007: RF/RNF com evidência aprovada /135
- IR-008: PBI com justificativa /60
IR-001: 135/135 referências explícitas, sem atestar suficiência. Demais não apurados.
## Lacunas
- LR-MVP-001: RF–RN individual | PO | P0
- LR-MVP-002: RF/RNF–PBI individual | PO/TL | P0
- LR-MVP-003: Reconciliação issues | PO | P0
- LR-MVP-004: UML | equipe/PO | P0
- LR-MVP-005: Catálogo testes | QA | P0
- LR-MVP-006: Refinar 412 cenários | PO/QA | P0
- LR-MVP-007: Mensuração latência | PO/QA | P0
- LR-MVP-008: IDs históricos | PO | P0
- LR-MVP-009: Código/PR/commit | dev | P1
- LR-MVP-010: Evidências | QA | P1
- LR-MVP-011: Funcionalidades fora do escopo | PO/QA | P1
- LR-MVP-012: Aceite final | PO | P3
INC-DOC-003 parcial; 004 e 005 pendentes. Nenhuma encerrada pela homologação deste documento.
## Governança e conclusão
Atualizar em refinamentos, mudanças aprovadas, integração, testes e aceite. PO mantém objetivos/requisitos/escopo; PO/TL PBIs; equipe UML; dev código; QA testes/evidências; PO aprovação. Conclusão exige 135 requisitos, 65 RN, 153 CA, 19 CON, 412 CEN, 60 PBIs individualmente rastreados; issues reconciliadas, UML, PR/commit/versão, resultados/evidências, lacunas impeditivas resolvidas e revisão da equipe com aceite PO.
## Homologação
DEC-MVP-031 rastreabilidade bidirecional; 032 classes E/P/V/L; 033 preservar 784 elementos e 60 PBIs; 034 oito indicadores e 12 lacunas; 035 governança contínua e validação individual.
Manifestação: “Aprovo integralmente o MVP-08 v1.0.0 e as decisões DEC-MVP-031 a DEC-MVP-035. Publique o documento no GitHub e prossiga para o MVP-09 — Termo de Homologação do MVP.”
Redação compactada da proposta aprovada. Não é matriz individual completa nem comprovação de implementação. Associações propostas precisam de revisão.
