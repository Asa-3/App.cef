# Convenções do App.cef (frontend)

## Estrutura de pastas

```
src/
  app/           App, rotas (routes.ts) e configuração do roteador (router.tsx)
  config/        env.ts: ÚNICO lugar que lê variáveis de ambiente
  lib/           Clientes de bibliotecas externas (supabase.ts)
  services/      Funções que falam com o Supabase/API. Nada de JSX aqui.
  hooks/         Hooks reutilizáveis (useAsync, useAuth, ...)
  layouts/       Estruturas de tela (MainLayout: cabeçalho + navegação inferior)
  pages/         Uma pasta por tela, ligada a uma rota
  components/
    feedback/    LoadingState, ErrorState, EmptyState
    ui/          Peças visuais genéricas (Button, Input, Card, ...)
  styles/        tokens.css (cores, espaços) e global.css
  types/         Tipos compartilhados do domínio
```

Regra de dependência: `pages → components/hooks → services → lib/config`.
Uma página nunca chama o Supabase direto; ela usa um service.

## Nomenclatura

| O quê | Padrão | Exemplo |
|---|---|---|
| Componente / página | PascalCase, sufixo `Page` em telas | `MessageCard.tsx`, `MessagesPage.tsx` |
| Estilo do componente | mesmo nome + `.module.css` | `MessageCard.module.css` |
| Hook | camelCase com `use` | `useMessages.ts` |
| Service | camelCase com sufixo `Service` | `messageService.ts` |
| Função de service | verbo + recurso | `listMessages`, `sendMessage` |
| Tipo | PascalCase, sem prefixo `I` | `Message`, `Employee` |
| Constante global | UPPER_SNAKE_CASE | `ֻǱ˞