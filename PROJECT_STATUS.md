# Project Status & Handoff — Madrid Serenity Hub (taniaono.com)

Last updated: 2026-10-06. This document captures the full working context so
anyone (or a new session) can resume without losing state. All work is committed
to `main` and deployed.

---

## 1. What this is

A trilingual (ES/EN/PT) marketing website for **Tania Eustaquio Ono**, a
psychotherapist in Madrid serving international families.

- **Stack:** Vite + React 18 + TypeScript + Tailwind + shadcn/ui + framer-motion
- **Repo:** `rogerio-s-ono/madrid-serenity-hub` (GitHub, public)
- **Hosting:** GitHub Pages via GitHub Actions (`.github/workflows/deploy-pages.yml`)
- **Live (test) URL:** https://rogerio-s-ono.github.io/madrid-serenity-hub/
- **Every push to `main` auto-deploys.**

---

## 2. Current phase: STEALTH / TESTING

The site is intentionally **hidden from search engines** while testing, before
legal pages + real testimonials are ready. Do NOT undo this until launch:
- `index.html` + `public/404.html` have `<meta name="robots" content="noindex, nofollow">`
- `public/robots.txt` is `Disallow: /`

**Reason:** a therapist's real name on an indexed site making clinical claims,
without a privacy policy / real colegiado number / real testimonials, is a
regulatory risk. Stay hidden until launch-ready.

---

## 3. Infrastructure set up (DONE, working)

- **Domain:** `taniaono.com` registered on **Porkbun** (auto-renew recommended).
  - NOT yet pointed at the website (deliberate — see launch checklist).
- **Email:** **Zoho Mail Free**, EU data center.
  - `tania@taniaono.com` (admin) + `consulta@taniaono.com` (alias) — one inbox.
  - DNS in Porkbun: MX → `mx.zoho.eu` (10), `mx2.zoho.eu` (20), `mx3.zoho.eu` (50);
    SPF `v=spf1 include:zoho.eu ~all`; Zoho verification TXT. Send+receive tested OK.
- **Contact form backend:** **Web3Forms** (free, 250 submissions/mo).
  - Access key (PUBLIC, safe in client) in `src/lib/web3forms.ts`,
    overridable via `VITE_WEB3FORMS_KEY`. Delivers to `consulta@taniaono.com`.
  - Tested end-to-end by the user: notification email + dashboard archive both work.
  - Web3Forms only accepts submissions from a browser (blocks curl) — expected.

---

## 4. Work completed (merged PRs)

- **#2** — All P0 critical fixes: form reliability, cross-route nav, NotFound
  link, deep-link back button.
- **#3** — All P1 a11y: keyboard-accessible cards, modal focus traps + Escape +
  ARIA + labels, carousel pause/reduced-motion, contrast, mobile menu inert.
- **#4** — noindex / robots stealth mode.
- **#5** — Web3Forms contact backend (loading/success/error, honeypot).
- **#6** — `BACKLOG.md` added.
- **#7** — P2 (safe) + P3 code quality:
  - P2: dynamic `<html lang>`, persist language (localStorage), `pick()` helper
    dedupe, removed Lovable placeholder metadata.
  - P3: deleted dead code (App.css, NavLink, placeholder.svg, dual toast systems
    + orphan deps), dedupe ApproachSection↔approaches.ts, **TypeScript strict
    mode on (0 errors)**, ESLint no-unused-vars + jsx-a11y (0 errors), 3 lint
    errors fixed, **13 real tests** (was 1 placeholder).

**Health:** build OK · 13/13 tests pass · lint 0 errors · tsc strict 0 errors.

Also done earlier: Tania's profile photo updated; lockfile fix.

---

## 5. What's LEFT (see BACKLOG.md for full detail)

### Launch blockers (do before pointing taniaono.com at the site)
- Privacy policy / legal notice / cookie notice (Spain + GDPR) + footer links
- Replace fictional testimonials with real ones
- Fix/remove the hardcoded "Trustpilot 5.0" widget (misleading-ad risk)
- Point `taniaono.com` DNS → website (A/CNAME; add CNAME file / Pages custom domain)
- Remove noindex + restore crawl policy + add sitemap (ONLY at launch)

### Deferred decision
- **Client confirmation email (autoresponder):** not in Web3Forms free. At launch
  choose Web3Forms Pro (~$49/yr) OR switch to Formspree (free autoresponder).
  Currently the client only sees the on-screen success message.

### SEO (P2) — deferred until launch (conflicts with noindex)
- Per-page titles/meta/canonical (#12), crawlable `<a>` links (#13),
  sitemap.xml (#14), JSON-LD LocalBusiness (#15), enrich OG image/url (#16), canonical (#17)

### Performance (P3) — safe to do during testing, good quick wins
- Optimize hero image 1.28 MB → WebP/responsive/preload (#21)  ← highest impact
- Logo PNG → SVG/WebP (#22), code-split bundle (#23),
  remove unused shadcn ui components (#24) + remaining unused deps (#25),
  preconnect/preload fonts (#26), lighten card hover animations (#27)

### Nice-to-have (P4)
- Clickable email/phone (#39), favicon/manifest (#40), global reduced-motion (#41),
  dark mode wire-or-remove (#42), `<noscript>` (#43), README cleanup (#44),
  CI Node 20→22 (#45)
- (New idea) visible version marker in footer/HTML

---

## 6. How to resume / useful commands

```sh
# dev
npm install && npm run dev          # http://localhost:8080

# checks
npm run build && npm run test && npm run lint
npx tsc -p tsconfig.app.json --noEmit   # strict type-check

# deploy = push to main (Actions does the rest)
```

- Node is via nvm in the sandbox: `export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"`
- Open/merge PRs with `gh api` (gh pr subcommands fail in this env).

---

## 7. Known notes / gotchas

- CI logs a Node 20 deprecation warning (harmless; backlog #45 to bump to 22).
- "Reconnecting" during sessions is an environment/session artifact, NOT the
  site — the deployed site is stable (HTTP 200).
- The Web3Forms access key is a public key by design; safe in the repo.
- Backlog of record: `BACKLOG.md` (kept in sync with merged PRs).
