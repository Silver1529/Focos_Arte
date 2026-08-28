# CLAUDE.md — Briefing do Projeto Foco Arte

> **Leia este arquivo por completo antes de qualquer ação.**
> Este é o documento de contexto do projeto. Ao ser chamado neste repositório, você (Claude) já deve entender o que é o projeto, qual stack usar e o que fazer em cada fase — sem precisar de re-explicação.

---

## O que é este projeto

**Foco Arte** — plataforma digital da **Foco Arte** (construtora de drywall, forros e divisórias).
Migração de um site institucional estático (HTML) para uma aplicação **fullstack Next.js**: site público + captação de leads + painel admin, tudo no **mesmo repositório e mesmo deploy**.

Identidade visual a preservar: tema dark (`#0b0d10`), logotipo prateado (telhado + "Foco Arte"), fontes **Archivo** (títulos, uppercase, tracking largo) e **Barlow** (texto), verde WhatsApp `#25D366` nos CTAs.

> A arte-mestre da marca está em `logo-foco-arte-original.jpeg`; os assets derivados dela são `public/foco-arte-logo.png`, `public/foco-arte-symbol.png`, `src/app/icon.png`, `src/app/apple-icon.png` e `src/app/opengraph-image.png`. O projeto nasceu como "TigerHub / Tiger Gesso" e foi renomeado para Foco Arte — repo antigo (`Silver1529/tigerhub`) descontinuado.

## Ambiente do desenvolvedor

- **Windows** com **Git Bash (MINGW64)** — use comandos compatíveis com bash no Windows.
- Diretório de trabalho dos repositórios: `/c/Repository`
- O projeto deve viver em: `/c/Repository/foco-arte`

## Stack (não mudar sem alinhar antes)

| Camada | Escolha |
|---|---|
| Framework | Next.js 14+ (App Router) + TypeScript |
| Gerenciador de pacotes | **Yarn 4 (Berry)** via Corepack — `nodeLinker: node-modules` |
| Estilo | Tailwind CSS |
| Banco | PostgreSQL + Prisma (Neon ou Supabase) |
| Auth | Auth.js (NextAuth v5) |
| Validação | Zod |
| Upload de imagens | Vercel Blob (ou Cloudflare R2) |
| Deploy | Vercel (produção na `main`, preview por PR) |

## Setup inicial (Fase 0) — execute nesta ordem

```bash
# 1. Criar a pasta do projeto
cd /c/Repository
mkdir foco-arte && cd foco-arte

# 2. Habilitar Corepack e ativar Yarn 4
corepack enable
corepack prepare yarn@stable --activate
yarn init -2   # (pular se o create-next-app for usado direto)

# 3. Garantir node_modules (evita problemas de PnP com Next no Windows)
#    Criar/ajustar .yarnrc.yml com:
#    nodeLinker: node-modules

# 4. Criar o app Next.js (dentro da pasta atual)
yarn create next-app . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 5. Dependências do projeto
yarn add prisma @prisma/client zod next-auth@beta
yarn add -D prisma

# 6. Iniciar Prisma
yarn prisma init

# 7. Git
git init && git add -A && git commit -m "chore: setup inicial Foco Arte (Next.js + Yarn 4)"
```

> **Atenção (Windows/Git Bash):** se `corepack` não for reconhecido, verificar versão do Node (`node -v`, precisa ser ≥ 16.10; ideal 20+). Se `yarn create next-app` conflitar com arquivos do `yarn init -2`, preferir rodar o `create next-app` primeiro em pasta vazia e ativar o Yarn 4 em seguida.

## Estrutura alvo

```
foco-arte/
├── src/
│   ├── app/
│   │   ├── (site)/        # páginas públicas (home, /projetos, /servicos/[slug])
│   │   ├── admin/         # painel administrativo (protegido por auth)
│   │   └── api/           # rotas de API (leads, upload, auth)
│   ├── components/        # UI compartilhada
│   └── lib/               # db, auth, validações zod, helpers WhatsApp
├── prisma/                # schema + migrations
└── public/                # logo, favicon, assets
```

## Modelo de dados (Prisma)

- **Lead** — nome, telefone, serviço, mensagem, status (`NOVO | EM_CONTATO | ORCAMENTO_ENVIADO | FECHADO | PERDIDO`), notas, createdAt
- **Project** — título, slug, categoria, descrição, fotos[], ordem, publicado
- **Service** — nome, slug, descrições, ícone, ordem, ativo
- **Testimonial** — autor, texto, nota, aprovado
- **SiteConfig** — chave/valor (whatsapp, cidade, anos de mercado, textos do hero, stats)
- **User** — admin (e-mail, hash de senha)

## Regra de ouro do negócio

O formulário de contato **salva o lead no banco primeiro** e **só depois** redireciona para o WhatsApp com mensagem pré-preenchida (`wa.me`). Hoje o lead se perde se o cliente não enviar a mensagem — isso é o principal ganho da v1.

## Fases de entrega

1. **Fase 0 — Setup** *(comandos acima)*: repo, Yarn 4, Next.js, Prisma, primeiro deploy na Vercel.
2. **Fase 1 — Site público**: migrar seções do HTML original (hero, sobre, serviços, sistema de trabalho em 6 etapas, projetos, depoimentos, stats, contato), responsivo, SEO (metadata, sitemap, OG).
3. **Fase 2 — Leads**: `POST /api/leads` com Zod, integração do formulário (salvar → redirecionar WhatsApp), botão flutuante.
4. **Fase 3 — Admin**: login (Auth.js), dashboard, gestão de leads com status, CRUD de projetos com upload, depoimentos e conteúdo do site.
5. **Fase 4 — Go-live**: testes mobile, Lighthouse ≥ 90, domínio, treinamento.

## Fora do escopo (v1)

E-commerce, agendamento com calendário, app nativo, multi-idioma, API oficial do WhatsApp Business (usar apenas links `wa.me`).

## Convenções

- Commits em português, padrão convencional: `feat:`, `fix:`, `chore:`, `refactor:`.
- Branch principal: `main`. Features em branches `feat/...` com PR.
- Sempre criar/atualizar `.env.example` quando adicionar variável de ambiente.
- Componentes de servidor por padrão; `"use client"` só quando necessário.

## Ao ser chamado neste repo, sua primeira ação é:

1. Ler este arquivo inteiro.
2. Verificar o estado atual do projeto (o que já existe na pasta).
3. Identificar em qual fase estamos e continuar de onde parou.
4. Se a pasta estiver vazia: executar a **Fase 0** completa.
