# Tania Ono — Psychotherapy (taniaono.com)

Trilingual (ES / EN / PT) marketing website for **Tania Eustaquio Ono**, a
psychotherapist in Madrid serving international families.

> 📄 See [`PROJECT_STATUS.md`](./PROJECT_STATUS.md) for the full working context
> (infra, phase, decisions) and [`BACKLOG.md`](./BACKLOG.md) for what's done and
> what's left.

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (tooltip only) + **framer-motion**
- **React Router** (client-side routing)
- Contact form backend: **Web3Forms**
- Hosting: **GitHub Pages** (auto-deploy via GitHub Actions on push to `main`)

## Local development

Requires Node.js (22 recommended) & npm.

```sh
npm install
npm run dev        # http://localhost:8080
```

## Scripts

```sh
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run test       # run unit tests (vitest)
npm run lint       # eslint
```

## Deployment

Every push to `main` triggers the **Deploy to GitHub Pages** workflow
(`.github/workflows/deploy-pages.yml`), which builds and publishes `dist/`.

Current (test) URL: https://rogerio-s-ono.github.io/madrid-serenity-hub/

> **Note:** the site is currently in a pre-launch/stealth phase and is blocked
> from search-engine indexing (`noindex` + `robots.txt`). See `PROJECT_STATUS.md`
> for the launch checklist.

## Project structure

```
src/
  assets/        images (WebP)
  components/    section components + ui/ (tooltip)
  contexts/      LanguageContext (ES/EN/PT), ConsultationContext
  data/          specialties.ts, approaches.ts (content source of truth)
  hooks/         use-go-back
  lib/           utils, web3forms config
  pages/         Index, SpecialtyPage, ApproachPage, NotFound
  test/          vitest unit tests
```
