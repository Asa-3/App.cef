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


## DEC-M01-010 — Recuperação de senha durante bloqueio temporário de login
- **Requisitos relacionados:** RF-AUT-006 a RF-AUT-009; RF-AUT-014 a RF-AUT-016; CA-AUT-006, CA-AUT-015, CA-AUT-016.
- **Decisão:** Durante o bloqueio temporário de **60 segundos** decorrente de cinco falhas consecutivas de autenticação, o usuário **poderá solicitar recuperação de senha** pelo e-mail de recuperação confirmado. Uma redefinição válida da senha **não encerra antecipadamente** o bloqueio de login: novas tentativas de autenticação continuam recusadas até o fim do prazo original.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) a recuperação pode ser solicitada enquanto a conta está bloqueada para login; (2) a redefinição válida altera a senha e revoga sessões conforme RF-AUT-009; (3) tentativa de login durante o prazo de 60 segundos continua recusada, mesmo com a nova senha; (4) encerrado o prazo, o desbloqueio automático permite autenticação com a nova senha.


## DEC-M01-011 — Acesso offline e revalidação da sessão
- **Requisitos relacionados:** RF-AUT-017, CA-AUT-017; interface com M06 (fila offline) e M10 (cache e sincronização).
- **Decisão:** Quando um usuário **já autenticado** perder a conexão, o aplicativo manterá acesso aos **dados locais previamente autorizados**, incluindo mensagens e arquivos armazenados no dispositivo. Operações dependentes do servidor ficarão **pendentes ou indisponíveis**, conforme as regras de sincronização. Ao restabelecer a conexão, o aplicativo deverá **revalidar a sessão** antes de permitir operações protegidas dependentes do servidor.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) perda de conexão não impede consulta a mensagens e arquivos já armazenados e autorizados localmente; (2) ações que exigem servidor não são tratadas como concluídas sem confirmação; (3) ao reconectar, a sessão é revalidada antes de operações remotas protegidas; (4) sessão revogada no servidor não autoriza novas operações remotas.
- **Ponto de atenção técnico:** Revogação de permissões no servidor não pode ser conhecida instantaneamente por um dispositivo desconectado; revisar tratamento do cache na reconexão e acesso offline a conteúdos anteriormente baixados, especialmente após remoção de grupo ou exclusão de conta.


## DEC-M01-012 — Encerramento e limpeza local após revogação detectada
- **Requisitos relacionados:** RF-AUT-011, RF-AUT-013, RF-AUT-017, RF-AUT-018; CA-AUT-011, CA-AUT-013, CA-AUT-017, CA-AUT-018; interface com M10.
- **Decisão:** Ao detectar que a sessão foi **revogada pelo servidor**, o aplicativo **encerrará automaticamente o acesso**, removerá **credenciais e dados locais da sessão revogada**, incluindo **mensagens e arquivos em cache**, e **retornará à tela de login**, sem depender de confirmação manual.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) após a revogação ser detectada, nenhuma funcionalidade protegida permanece acessível; (2) credenciais, mensagens e arquivos em cache da sessão revogada são removidos; (3) a tela de login é apresentada automaticamente; (4) o usuário não precisa confirmar a limpeza; (5) o comportamento vale após reconexão e revalidação previstas na DEC-M01-011.
- **Ponto de atenção:** Avaliar a limpeza segura de dados temporários e de itens pendentes da fila offline (M06/M10) para evitar reenvio não autorizado após revogação.


## DEC-M01-013 — Descarte da fila local após revogação de sessão
- **Requisitos relacionados:** RF-AUT-013, RF-AUT-018; interface com M06 (mensagens e fila offline) e M10 (cache e sincronização); complementa DEC-M01-012.
- **Decisão:** Ao detectar a revogação da sessão pelo servidor, o aplicativo **excluirá definitivamente a fila local de mensagens e anexos ainda não enviados**, sem tentar transmiti-los. O descarte integra a limpeza automática da sessão revogada.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) após detectar a revogação, não são disparadas tentativas de envio de itens da fila local; (2) mensagens e anexos pendentes são excluídos do armazenamento local; (3) novo login não restaura a fila descartada; (4) mensagens anteriormente confirmadas pelo servidor não são excluídas do histórico remoto por esse descarte.
- **Ponto técnico:** Garantir interrupção de processos de envio em andamento e idempotência; um envio já confirmado pelo servidor antes da detecção da revogação não pode ser tratado como não enviado.


## DEC-M01-014 — Duração do acesso offline a dados locais autorizados
- **Requisitos relacionados:** RF-AUT-017, CA-AUT-017; interface com M10; complementa DEC-M01-011, DEC-M01-012 e DEC-M01-013.
- **Decisão:** O acesso aos dados locais **previamente autorizados não terá limite fixo de tempo** enquanto o aplicativo estiver offline. A sessão deverá ser **revalidada ao restabelecer a conexão**; nesse momento, serão aplicadas as regras de **revogação, encerramento de acesso e limpeza local** já homologadas.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) sem conectividade, dados locais anteriormente autorizados continuam consultáveis sem expiração por prazo offline fixo; (2) operações dependentes do servidor não são consideradas concluídas enquanto offline; (3) ao reconectar, a sessão é revalidada antes de operações remotas protegidas; (4) caso o servidor informe revogação, o aplicativo encerra o acesso e remove credenciais, cache e fila pendente conforme DEC-M01-012/013.
- **Risco para validação técnica:** Enquanto o dispositivo estiver desconectado, revogações e mudanças de permissão remotas não podem ser detectadas; avaliar mitigação de exposição de dados em dispositivos perdidos ou compartilhados.


## DEC-M01-015 — Autenticação local ao reabrir o aplicativo offline
- **Requisitos relacionados:** RF-AUT-017, CA-AUT-017; interface com M10; complementa DEC-M01-011, DEC-M01-014.
- **Decisão:** Ao **reabrir o aplicativo offline**, o usuário deverá realizar **autenticação local por biometria ou credencial de desbloqueio do próprio dispositivo** antes de acessar os dados armazenados, **sem necessidade de conexão** com o servidor.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) ao reabrir o aplicativo sem conexão, os dados locais ficam inacessíveis até a autenticação local bem-sucedida; (2) biometria ou credencial de desbloqueio do dispositivo permite acesso aos dados previamente autorizados; (3) falha ou cancelamento da autenticação local não libera os dados; (4) autenticação local não substitui a revalidação da sessão no servidor ao reconectar; (5) revogação detectada na reconexão provoca encerramento e limpeza conforme DEC-M01-012 e DEC-M01-013.
- **Ponto de atenção técnico:** Avaliar mecanismos seguros nativos de autenticação local e proteção do armazenamento, sem tratar a autenticação local como prova de validade da sessão remota.


## DEC-M01-016 — Ausência de proteção local configurada no dispositivo
- **Requisitos relacionados:** RF-AUT-017, CA-AUT-017; complementa DEC-M01-015 e DEC-M01-014; interface com M10.
- **Decisão:** Se o dispositivo **não possuir biometria nem credencial de desbloqueio configurada**, o aplicativo **bloqueará o acesso offline aos dados locais** até que o usuário **configure uma credencial de desbloqueio no sistema operacional**. O uso de **biometria será opcional**; a credencial de desbloqueio do dispositivo é suficiente para permitir autenticação local.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) sem biometria nem credencial do sistema operacional configurada, o aplicativo não libera dados locais em modo offline; (2) após configurar credencial de desbloqueio no sistema operacional, o usuário pode realizar autenticação local e acessar dados previamente autorizados; (3) não se exige cadastro de biometria; (4) falha ou cancelamento da autenticação local mantém os dados bloqueados; (5) ao reconectar, aplica-se a revalidação de sessão e, se revogada, limpeza conforme DEC-M01-012/013.
- **Ponto de atenção técnico:** A detecção de proteção do dispositivo e o desbloqueio devem utilizar mecanismos seguros do sistema operacional; não presumir que a configuração de credencial, por si só, já autentique o usuário.


## DEC-M01-017 — Remoção posterior da credencial de desbloqueio do dispositivo
- **Requisitos relacionados:** RF-AUT-017, CA-AUT-017; complementa DEC-M01-015 e DEC-M01-016; interface com M10.
- **Decisão:** Se a **credencial de desbloqueio do dispositivo for removida** após a configuração inicial, o aplicativo **bloqueará o acesso aos dados locais** até que a proteção seja **reconfigurada no sistema operacional** e o usuário **conclua nova autenticação local**. A simples reconfiguração da credencial não libera automaticamente os dados.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) após detectar a remoção da credencial de desbloqueio, mensagens, arquivos e demais dados locais não podem ser consultados; (2) restaurar a credencial do sistema operacional sem autenticação local bem-sucedida não libera acesso; (3) após reconfiguração e autenticação local válida, o acesso aos dados previamente autorizados pode ser restabelecido, observadas as demais regras de sessão; (4) não é exigido cadastro de biometria; (5) a reconexão continua sujeita à revalidação da sessão e às regras de revogação.
- **Ponto de atenção técnico:** Avaliar se a remoção da credencial invalida chaves criptográficas do sistema operacional e como lidar com eventual impossibilidade técnica de recuperar cache local sem enfraquecer a proteção.


## DEC-M01-018 — Recuperação de acesso sem acesso ao e-mail confirmado
- **Requisitos relacionados:** RF-AUT-006, RF-AUT-010, RN-AUT-003; interface com RF-AUT-009 e gestão administrativa de contas (M02).
- **Decisão:** Quando o usuário perder acesso ao e-mail de recuperação confirmado, a recuperação deverá ocorrer mediante **solicitação à equipe de TI** e **verificação de identidade por procedimento externo ao aplicativo**. Após validação, um **Administrador poderá iniciar a substituição do e-mail**, com **revogação das sessões existentes** e **confirmação obrigatória do novo endereço antes da recuperação do acesso**.
- **Status:** Confirmada pelo PO; aguardando validação técnica e incorporação à próxima versão da matriz.
- **Critérios de aceitação propostos:** (1) sem validação externa da identidade, o Administrador não pode concluir o procedimento excepcional; (2) após validação, o Administrador inicia substituição do e-mail de recuperação; (3) as sessões existentes são revogadas no procedimento; (4) o novo e-mail não é habilitado para recuperação até confirmação válida; (5) a recuperação de acesso não é liberada antes dessa confirmação.
- **Pontos de implementação a validar:** registrar evidências e autorização da verificação externa, limitar a operação a Administradores e assegurar que o fluxo excepcional não dependa de confirmação no e-mail antigo inacessível; detalhar o instante da revogação e a emissão/expiração do link de confirmação sem contrariar as regras já aprovadas.

## Pendências da revisão
- Validar tecnicamente o fluxo de primeiro acesso e seus estados intermediários.
- Prosseguir com a revisão dos requisitos do M01, uma decisão por vez.
