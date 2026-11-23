# Registro de decisões — Homologação da Matriz v1.2.1

**Documento de referência:** `Matriz_Consolidada_Requisitos_v1.2.1.md`  
**Status da matriz:** Em revisão; não homologada  
**Método:** Revisão módulo a módulo, uma decisão por vez.

## DEC-HOM-001 — Governança da homologação
- **Decisão:** Toda a equipe participa da revisão; aprovação final compete ao Product Owner (PO).
- **Status:** Confirmada pelo PO.

## DEC-M01-001 — Ordem do primeiro acesso
- **Requisitos relacionados:** RF-AUT-002, RF-AUT-003, CA-AUT-002, CA-AUT-003; interface com RF-USR-004.
- **Decisão:** Após autenticação com a senha inicial, o usuário deve **primeiro preencher o perfil obrigatório** (nome completo, cargo e setor) e **depois alterar a senha inicial**. O acesso às demais funcionalidades somente será liberado após ambas as etapas.
- **Status:** Confirmada pelo PO; aguardando revisão técnica e incorporação à próxima versão da matriz.
- **Observação:** A Matriz v1.2.1 original permanece inalterada enquanto a homologação estiver em andamento.


## DEC-M01-002 — Retomada do primeiro acesso interrompido
- **Requisitos relacionados:** RF-AUT-002, RF-AUT-003, CA-AUT-002, CA-AUT-003; RF-USR-004.
- **Decisão:** Se o usuário fechar o aplicativo após preencher o perfil obrigatório e antes de alterar a senha inicial, os dados do perfil serão preservados. Após nova autenticação, ele continuará na etapa de alteração da senha inicial, sem acesso às demais funcionalidades até concluir a troca.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Verificação proposta:** Após salvar o perfil e interromper o aplicativo, autenticar novamente com a credencial inicial; confirmar que os campos persistem, a troca de senha é exigida e as demais funções permanecem bloqueadas.


## DEC-M01-003 — Política de comprimento e composição da senha
- **Requisitos relacionados:** RF-AUT-004 e CA-AUT-004.
- **Decisão:** A senha deverá ter **no mínimo 8 caracteres**, sem exigência de categorias específicas de caracteres (letras maiúsculas, minúsculas, números ou símbolos). A regra se aplica à definição e à alteração de senhas.
- **Status:** Confirmada pelo PO; aguardando revisão técnica e incorporação à versão homologável da matriz.
- **Verificação proposta:** Recusar senha com 7 caracteres; aceitar, quanto a esta regra, senha com 8 ou mais caracteres mesmo sem misturar categorias. Outras verificações de segurança eventualmente aplicáveis devem ser avaliadas separadamente, sem pressupor novas restrições.


## DEC-M01-004 — Confirmação para alteração de senha autenticada
- **Requisitos relacionados:** RF-AUT-005, CA-AUT-005, RN-AUT-003; interface com RF-AUT-006 a RF-AUT-010.
- **Decisão:** A alteração de senha solicitada por usuário autenticado exige confirmação por link enviado ao e-mail de recuperação cadastrado e confirmado, **sem solicitar a senha anterior**. Após a alteração efetiva, todas as sessões existentes serão revogadas e será exigida nova autenticação.
- **Status:** Confirmada pelo PO; pendente de validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) Sem confirmação válida pelo link, a senha não é alterada; (2) após confirmação válida, a nova senha é aplicada; (3) sessões anteriores são revogadas; (4) novo login é obrigatório; (5) não é exigida senha anterior.
- **Pontos ainda não decididos:** Prazo de validade, uso único e invalidação de links anteriores especificamente para a confirmação de alteração de senha autenticada. Não presumir que as regras do fluxo de recuperação de senha se aplicam automaticamente.


## DEC-M01-005 — Validade e invalidação do link de confirmação da troca de senha
- **Requisitos relacionados:** RF-AUT-005, CA-AUT-005; alinhamento com RF-AUT-007, RF-AUT-008, RN-AUT-005.
- **Decisão:** O link de confirmação da alteração de senha solicitada por usuário autenticado será **de uso único**, válido por **15 minutos** a partir da emissão. Uma nova solicitação invalidará **todos os links anteriores ainda não utilizados** para essa finalidade.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) link utilizado uma vez não pode ser reutilizado; (2) link expirado após 15 minutos é recusado; (3) emissão de novo link invalida os anteriores, mesmo que não expirados; (4) apenas confirmação válida autoriza concluir a troca de senha, com revogação das sessões conforme DEC-M01-004.


## DEC-M01-006 — Confirmação dupla na alteração do e-mail de recuperação
- **Requisitos relacionados:** RF-AUT-010, CA-AUT-010, RN-AUT-003; interface com RF-AUT-006 e RF-AUT-012.
- **Decisão:** A alteração do e-mail de recuperação exige confirmação tanto no **endereço atual** quanto no **novo endereço**. O novo e-mail somente será ativado após **ambas** as confirmações válidas. Até então, o endereço atual permanece como e-mail de recuperação vigente.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) confirmação apenas do endereço atual não ativa o novo; (2) confirmação apenas do novo endereço não o ativa; (3) ambas as confirmações válidas ativam o novo endereço; (4) antes da ativação, o endereço anterior continua vigente para recuperação.
- **Pendente de decisão:** Prazo de validade e política de invalidação dos links de confirmação de alteração de e-mail; não presumir que herdam automaticamente as regras dos links de senha.


## DEC-M01-007 — Validade dos links de confirmação de alteração do e-mail de recuperação
- **Requisitos relacionados:** RF-AUT-010, CA-AUT-010, RN-AUT-003; complementa DEC-M01-006.
- **Decisão:** Os **dois links** de confirmação, um enviado ao e-mail de recuperação atual e outro ao novo endereço, serão **de uso único** e terão validade de **15 minutos** a partir da respectiva emissão. Uma **nova solicitação** de alteração do e-mail de recuperação invalidará todos os links da solicitação anterior e **quaisquer confirmações parciais** já realizadas. O novo endereço somente será ativado após ambas as confirmações válidas da mesma solicitação.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) links expirados ou reutilizados são rejeitados; (2) apenas uma confirmação não altera o e-mail vigente; (3) nova solicitação invalida ambos os links e confirmações parciais anteriores; (4) somente duas confirmações válidas da solicitação atual ativam o novo e-mail.


## DEC-M01-008 — Sessão anterior durante confirmação de novo dispositivo
- **Requisitos relacionados:** RF-AUT-011, RF-AUT-012, RF-AUT-013; CA-AUT-011, CA-AUT-012, CA-AUT-013.
- **Decisão:** Enquanto a confirmação de acesso ao **novo dispositivo** estiver pendente, a sessão do **dispositivo anterior permanecerá ativa**. A sessão anterior será revogada **somente após confirmação válida** do novo dispositivo. O novo dispositivo não obtém sessão ativa antes da confirmação.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) solicitação pendente não interrompe a sessão anterior; (2) novo dispositivo não acessa funcionalidades protegidas antes da confirmação; (3) confirmação válida ativa a nova sessão e revoga a anterior; (4) ausência de confirmação mantém a sessão anterior conforme suas demais regras de validade.


## DEC-M01-009 — Solicitações concorrentes de acesso em novo dispositivo
- **Requisitos relacionados:** RF-AUT-011, RF-AUT-012, RF-AUT-013; CA-AUT-011 a CA-AUT-013; complementa DEC-M01-008.
- **Decisão:** **Somente a solicitação mais recente** de acesso em novo dispositivo permanecerá válida. Uma nova solicitação **invalidará as solicitações anteriores ainda pendentes**. A sessão atualmente ativa será mantida até que a solicitação mais recente receba **confirmação válida**; somente então a sessão anterior será revogada e o novo dispositivo autorizado.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) com sessão ativa no dispositivo A, solicitar acesso em B e depois em C invalida a confirmação pendente de B; (2) tentar confirmar B após solicitação de C não ativa B; (3) A continua autorizado enquanto C aguarda confirmação; (4) confirmar C validamente ativa C e revoga A; (5) a confirmação de C não mantém sessões paralelas.

## Pendências da revisão
- Validar tecnicamente o fluxo de primeiro acesso e seus estados intermediários.
- Prosseguir com a revisão dos requisitos do M01, uma decisão por vez.
