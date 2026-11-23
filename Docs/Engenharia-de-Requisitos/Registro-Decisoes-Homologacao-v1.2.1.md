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

## Pendências da revisão
- Validar tecnicamente o fluxo de primeiro acesso e seus estados intermediários.
- Prosseguir com a revisão dos requisitos do M01, uma decisão por vez.
