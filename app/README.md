# App.cef

Aplicativo de comunicação interna, no estilo WhatsApp, com experiência 100% mobile (web app / PWA).

## Infraestrutura (somente nuvem)

| Serviço | Papel |
|---|---|
| **GitHub** | Repositório do código. Cada push na `main` dispara a publicação. |
| **Vercel** | Build e hospedagem. Gera um link de preview para cada branch/PR. |
| **Supabase** | Banco de dados, login, arquivos e mensagens em tempo real. |

Nada roda em servidor próprio da empresa (on-premises). O ambiente de teste é o
**preview da Vercel**, não a máquina do desenvolvedor.

## Variáveis de ambiente (configuradas na Vercel)

Vercel > Project > Settings > Environment Variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`: só a chave **publishable/anon**, nunca a secreta

## Fluxo de trabalho

1. Cada história do backlog vira uma branch: `feat/nome-curto`.
2. Abrir um Pull Request no GitHub, e a Vercel publica um link de preview.
3. Testar o preview no celular e aprovar.
4. Fazer o merge na `main`, e a Vercel publica em produção.

Stack: React + TypeScript + Vite + React Router + Supabase.
Padrões do código: [docs/CONVENCOES.md](docs/CONVENCOES.md) · Backlog: [docs/BACKLOG.md](docs/BACKLOG.md)
