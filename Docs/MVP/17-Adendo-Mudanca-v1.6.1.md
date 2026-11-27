# Adendo de mudança v1.6.1 — App.cef
Complementa e prevalece nos pontos alterados dos documentos MVP 04/05/07/08/09. Fonte: matriz consolidada v1.6.1.


## DEC-INT-M01-015-002 — aprovação integral do PO, 27/11/2026
Aprovadas alternativa B DEC-LR-AUT-114-002 e DEC-LR-AUT-103-002 revisada, todos os parâmetros, 12 elementos revisados, nenhum novo, Must Have, 72 cenários, protocolos, quatro grupos de evidência, revisão de impacto e publicação v1.6.1. LR101 aberta; LR115 vinculada. RPO crítico zero segundos; RPO geral 24h; RTO 30min. Bloqueio 60s, cinco falhas, contador sem expiração por inatividade. Inventário 865, MVP 805, fora 60, 143 RF/RNF Must Have, 60 PBIs; 14/22 RF homologados, RF015 pendente. LR104–114 cobertas normativamente, LR103 complementada; não equivale a validação técnica. 156 registros brutos RF015 sujeitos a reconciliação; 412 CEN inalterados.

### Política consolidada
T0 ocorrência efetiva de perda de confiabilidade, T1 detecção, T2 cessação de emissão de bytes: T1−T0 ≤ 2000 ms, T2−T1 ≤ 5000 ms, T2−T0 ≤ 7000 ms; todos cumulativos. Revogação efetiva mantém limite próprio 5000 ms; vence prazo mais cedo. Falha parcial restringe impacto comprovável; alcance incerto protege todas operações potencialmente afetadas; falha transitória e do detector tratadas; recuperação não cancela interrupção; não apagar dados locais apenas por indisponibilidade. Rejeitar novas operações dependentes sem autorização comprovada. Novo download manual, novo link, primeiro byte. Perda isolada de permissão e expiração natural mantêm regras anteriores quando autorização comprovada.
Identificador emitido pelo servidor, validade 300s, decisão efetiva antes da expiração; retenção sete dias (604800s) após expiração, limpeza até 24h adicionais, máximo regular 691500s desde emissão. Repetições não renovam prazos. Nova tentativa após expiração exige ação explícita. Decisão definitiva de rejeição mantém-se após desbloqueio; login bem-sucedido com resposta perdida não cria outra sessão nem reemite credenciais indevidamente; resultado desconhecido não presumido. Emissão sujeita a controles complementares sem incremento principal; suficiência e recuperação segura do login pendentes LR101. Não armazenar senhas, hash simples de senha para comparação, tokens reutilizáveis, corpo integral com credenciais, mensagens ou arquivos; limitar a identificador, referência pseudonimizada necessária, instantes, estado, referência a efeitos e evidência protegida necessária. Acesso interno autorizado. Precedência HTTP: estrutura inválida 400; mecanismo obrigatório indisponível 503; limite complementar 429; identificador inválido/expirado 400; conflito/reutilização incompatível 409 genérico se não revelar estado; credenciais/conta inelegível 401. Preservar protocolo de enumeração v1.5.1.

### CE-DUP — condições cumulativas
001 expirado definitivamente; 002 retenção mínima cumprida; 003 ausência de operações pendentes dependentes; 004 efeitos preservados ou legitimamente sucedidos; 005 RPO específico preservado; 006 referência temporal confiável; 007 impossibilidade de reaplicação; 008 recuperação não comprometida; 009 eliminação verificável e consistente. Rotina ao menos a cada 24h; exceção registrada, reavaliada a cada 24h, comunicar equipe até 24h após ultrapassar prazo regular e escalonar PO após sete dias consecutivos de exceção; nunca eliminação forçada insegura; limpar até 24h após restabelecer condições. Registros restaurados não reativados e sujeitos à limpeza vigente. DUP-REV-001 rejeição definitiva; 002 exceções; 003 emissão abusiva; 004 registros restaurados; 005 resposta perdida de sucesso. 003/005 exigem validação tecnológica.

### Protocolos
PROT-AUT-015-001: 30 amostras por combinação aplicável, três rodadas, 1/100 usuários, Android/iOS, PDF/JPEG inclusive 2GB/20MB, ambiente isolado, incerteza máxima 10ms por intervalo, avaliar medição + incerteza, zero ultrapassagens, inconclusivo não aprovado.
PROT-AUT-015-002: três rodadas, 1000 tentativas lógicas por rodada/perfil, dez repetições por tentativa selecionada, 1/100 usuários, relógio controlado e persistência/recuperação/limpeza reais; zero duplicidade, reativação, eliminação prematura, restauração indevida de sessão, exposição de credenciais, alteração indevida de contador.
PROT-AUT-015-003: RPO crítico zero, RTO 30min, 100 eventos críticos confirmados por rodada, três rodadas por classe de falha, exercícios mensais, zero autorização indevida e efeitos duplicados. Enumeração: medianas ≤50ms, p95 ≤100ms, limite superior IC95% AUC ≤0,55; 1000 amostras por condição/rodada, três rodadas, zero diferenças estruturais reveladoras; manter protocolo anterior integralmente.

## Redações complementares
- RF-AUT-014: A expiração, eliminação ou recuperação dos registros operacionais de deduplicação não deverá reiniciar o contador principal, invalidar falhas anteriormente registradas ou permitir a reaplicação de seus efeitos. Identificadores expirados, inválidos, incompatíveis ou definitivamente decididos não produzem novos efeitos de contabilização.
- RF-AUT-019: As respostas de emissão, validação, expiração, conflito e repetição de identificadores preservam as garantias estruturais, temporais e estatísticas contra enumeração. A emissão sujeita-se aos controles complementares vigentes sem incrementar o contador principal.
- RF-AUT-021: Associar cada tentativa lógica a identificador único com identidade, contexto e validade verificáveis pelo servidor, válido por 300 segundos desde emissão. Impedir novos efeitos de tentativas definitivamente decididas, expiradas, adulteradas, incompatíveis ou reutilizadas indevidamente, inclusive após eliminação dos registros. Preservar registros por sete dias após expiração e eliminar em até 24 horas adicionais se satisfeitas as nove condições CE-DUP. Repetições não prolongam validade ou retenção, restauram autorizações ou se convertem automaticamente em novas tentativas.
- RF-AUT-022: Detectar perda de confiabilidade aplicável a transferências ativas em até 2.000 ms desde ocorrência efetiva. Preservar deduplicação, validade, retenção e eliminação segura na recuperação, sem reativar identificadores expirados ou efeitos invalidados. Reaplicar retenção aos registros restaurados, inclusive anteriormente eliminados.
- RF-ARQ-030: Interromper transferências cuja autorização não possa ser comprovada por perda de confiabilidade: detecção até 2.000 ms, interrupção até 5.000 ms após detecção, total até 7.000 ms. Preservar limite de cinco segundos desde revogação efetiva.
- RN-AUT-017: Respostas de deduplicação independentes do estado protegido da conta. Preservada a precedência dos controles, identificadores inválidos ou expirados: HTTP 400 genérico; conflitos de processamento ou reutilização incompatível: HTTP 409 genérico somente sem comprometimento da proteção contra enumeração.
- RN-AUT-019: Validade fixa de 300 segundos desde emissão pelo servidor; inelegibilidade definitiva na expiração. Retenção sete dias após expiração, limpeza até 24 horas adicionais, salvo exceção de segurança registrada. Nove condições CE-DUP cumulativas. Reavaliar exceções a cada 24 horas, comunicar equipe técnica até 24 horas após ultrapassar prazo regular, escalonar ao PO após sete dias consecutivos de exceção. Limpar até 24 horas após restabelecer condições. Eliminação não reinicia contador, reaplica efeitos ou restaura autorizações.
- RN-AUT-020: Detectar perda efetiva de confiabilidade que afete transferências ativas em até 2 s; interromper até 5 s após detecção e 7 s totais. Recuperação não cancela interrupção nem permite retomada automática. Coexistindo revogação e perda de confiabilidade, prevalece o prazo que vencer primeiro.
- RN-ARQ-007: Perda de confiabilidade da autorização prevalece sobre continuidade e validade residual dos links. Recuperação não permite retomada automática; novo download exige revalidação, novo link e início do primeiro byte. Prevalece o prazo que vencer primeiro.
- CA-AUT-037: Comprovar validade exclusiva de 300 s sem renovação, retenção sete dias e limpeza até 24 horas adicionais sob as nove condições, tratamento de exceções nos prazos, zero efeitos duplicados após desbloqueio, restauração ou eliminação, preservação dos efeitos críticos e RPO específico; ausência de senhas, tokens reutilizáveis e conteúdos proibidos.
- CA-AUT-038: Comprovar detecção até 2.000 ms, interrupção até 5.000 ms após detecção e total até 7.000 ms em todas as transferências afetadas. Recuperação preserva deduplicação e prazos inclusive falhas durante limpeza e restauração de registros eliminados.
- CA-ARQ-030: Comprovar os três limites da perda de confiabilidade, cessação de emissão de bytes após prazo aplicável em todas as amostras válidas; falhas do detector não permitem continuidade insegura.
### Delta bidirecional (RF ↔ RN ↔ CA ↔ PBI)
| RF/RNF | RN | CA | PBI principal |
|---|---|---|---|
| RF-AUT-014 | RN-AUT-014/019/020 | CA-AUT-029/037/038 | PBI-015 |
| RF-AUT-015 | RN-AUT-004/014/020 | CA-AUT-014/015/030/038 | PBI-015 |
| RF-AUT-019 | RN-AUT-017 | CA-AUT-035 | PBI-010 |
| RF-AUT-021 | RN-AUT-019/020 | CA-AUT-037/038 | PBI-017 |
| RF-AUT-022 | RN-AUT-019/020 | CA-AUT-038 | PBI-017 |
| RF-ARQ-030 | RN-ARQ-007 | CA-ARQ-030 | PBI-044 |
| RNF-REC-012 | RN-AUT-020 | CA-NF-012 | PBI-006 |
PBIs afetados 005/006/010/015/016/017/039/043/044/057/058; manter vínculos históricos não substituídos. Impacto DEC-RAST-M01-014 registrado sem cancelar homologação. DEC-LR091/098/099 e DEC-INT014-001/002 preservadas e complementadas. EV-AUT-101-019 detecção inclusive falhas transitórias/detector; 020 interrupção; 021 validade/retenção/limpeza/exceções/emissão; 022 RPO zero/deduplicação/login resposta perdida. 22 grupos previstos, nenhum validado nesta atualização. INC-DOC-003 aberta. Tabelas históricas não reconciliadas integralmente; adendo vigente prevalece. Issues não alteradas; nenhum teste executado.

## 72 cenários complementares — não executados
- CP-LR114-B-001: Detecção 1999ms: comprovar limite
- CP-LR114-B-002: Detecção 2000ms: incerteza deve permitir comprovação
- CP-LR114-B-003: Detecção 2001ms: reprovar
- CP-LR114-B-004: Interrupção 4999ms: comprovar
- CP-LR114-B-005: Interrupção 5000ms: comprovar
- CP-LR114-B-006: Interrupção 5001ms: reprovar
- CP-LR114-B-007: Total 7000ms: comprovar três limites
- CP-LR114-B-008: Total 7001ms: reprovar
- CP-LR114-B-009: Detecção tardia e interrupção rápida: reprovar
- CP-LR114-B-010: Detecção rápida e interrupção tardia: reprovar
- CP-LR114-B-011: Perda de comunicação com autorização: proteger
- CP-LR114-B-012: Falha parcial: proteger afetadas
- CP-LR114-B-013: Falha completa: proteger potencialmente afetadas
- CP-LR114-B-014: Falha detector: encerramento seguro e comprovação
- CP-LR114-B-015: Relógio não confiável: impedir dependentes
- CP-LR114-B-016: Recuperação após detecção: interromper
- CP-LR114-B-017: Recuperação antes detecção: tratar perda transitória
- CP-LR114-B-018: Concorrência: todos limites
- CP-LR114-B-019: PDF2GB: limites
- CP-LR114-B-020: JPEG20MB: limites
- CP-LR114-B-021: Revogação simultânea: prazo mais restritivo
- CP-LR114-B-022: Novo download na perda: rejeitar
- CP-LR114-B-023: Novo download após recuperação: revalidar, novo link, primeiro byte
- CP-LR114-B-024: Indisponibilidade sem revogação: não limpar local exclusivamente
- CP-LR103-B-001: Recém emitido: avaliar elegibilidade
- CP-LR103-B-002: 299s: avaliar se elegível
- CP-LR103-B-003: 299,999s: decisão antes expiração
- CP-LR103-B-004: 300s: impedir efeitos
- CP-LR103-B-005: Após 300s: rejeitar
- CP-LR103-B-006: Envio antes e decisão depois: impedir efeitos
- CP-LR103-B-007: Resposta perdida: não duplicar
- CP-LR103-B-008: Dez repetições: efeito único
- CP-LR103-B-009: Duplicatas concorrentes: impedir duplicação
- CP-LR103-B-010: Conteúdo diferente: rejeitar conflito
- CP-LR103-B-011: Adulterado: rejeitar genericamente
- CP-LR103-B-012: Ausente: precedência normativa
- CP-LR103-B-013: Relógio dispositivo alterado: referência servidor
- CP-LR103-B-014: Repetição expirada: não renovar
- CP-LR103-B-015: Antes sete dias: preservar
- CP-LR103-B-016: Sete dias: avaliar limpeza
- CP-LR103-B-017: Oito dias: comprovar limpeza regular
- CP-LR103-B-018: Repetição após limpeza: rejeitar efeitos
- CP-LR103-B-019: Após reset legítimo contador: não duplicar
- CP-LR103-B-020: Após revogação: não restaurar
- CP-LR103-B-021: Falha durante limpeza: consistência e registro
- CP-LR103-B-022: Inspeção registros: sem credenciais proibidas
- CP-LR103-B-023: Expirado no app: nova ação explícita
- CP-LR103-B-024: Estados de conta: proteção contra enumeração
- CP-INT015-001: Backup antes quinta falha: preservar bloqueio/revogação
- CP-INT015-002: Backup antes limpeza: não reativar
- CP-INT015-003: Backup com expirados: inelegíveis
- CP-INT015-004: Perda registro necessário: impedir dependentes
- CP-INT015-005: Relógio incorreto: não liberar
- CP-INT015-006: Eventos fora de ordem: reconciliar
- CP-INT015-007: Quatro falhas e registros eliminados: manter quatro
- CP-INT015-008: Repetição antiga após restauração: não duplicar
- CP-INT015-009: Falha contabilização/deduplicação: atomicidade/unicidade
- CP-INT015-010: Recuperação 30min com perda crítica: reprovar RPO e impedir liberação
- CP-INT015-011: Recuperação segura acima 30min: violação RTO
- CP-INT015-012: Perda confiabilidade durante recuperação: limites interrupção
- CP-DUP-REV-001: 299,999s: decisão antes expiração
- CP-DUP-REV-002: 300s: impedir efeitos
- CP-DUP-REV-003: Rejeitada durante bloqueio repetida após desbloqueio: não contar
- CP-DUP-REV-004: Menos sete dias: impedir limpeza
- CP-DUP-REV-005: Sete dias: avaliar nove condições
- CP-DUP-REV-006: Oito dias condições satisfeitas: limpar
- CP-DUP-REV-007: Oito dias recuperação pendente: suspender e registrar
- CP-DUP-REV-008: Exceção 24h: reavaliar e comunicar
- CP-DUP-REV-009: Exceção sete dias: escalonar PO
- CP-DUP-REV-010: Condições restabelecidas: limpar até 24h
- CP-DUP-REV-011: Emissão repetitiva sem login: proteção sem incremento
- CP-DUP-REV-012: Resposta sucesso perdida e sessão revogada: não restaurar ou reemitir indevidamente