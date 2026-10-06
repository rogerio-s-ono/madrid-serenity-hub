# Backlog — Madrid Serenity Hub (taniaono.com)

Tracked backlog for the website. Items are grouped by priority. Done items are
checked off with the PR that resolved them.

Legend: 🔴 critical · 🟠 high · 🟡 medium · 🟢 low · ⬜ open · ✅ done

---

## ✅ Done

- ✅ **P0 — Consultation form reliability** (PR #2, then replaced by real backend in PR #5)
- ✅ **P0 — Navigation broken on detail pages** (PR #2)
- ✅ **P0 — NotFound "Return to Home" broken link** (PR #2)
- ✅ **P0 — Back button stranded deep-link visitors** (PR #2)
- ✅ **P1 — Specialty & Approach cards keyboard-accessible** (PR #3)
- ✅ **P1 — ConsultationModal focus trap / Escape / ARIA / labels** (PR #3)
- ✅ **P1 — SpecialtyModal focus trap / Escape / ARIA** (PR #3)
- ✅ **P1 — Testimonial carousel pause + prefers-reduced-motion** (PR #3)
- ✅ **P1 — Low-contrast text improvements** (PR #3)
- ✅ **P1 — Mobile menu aria-expanded + inert when closed** (PR #3)
- ✅ **Pre-launch — noindex / robots stealth mode** (PR #4)
- ✅ **Contact form backend — Web3Forms integration** (PR #5)
  - Real submission, loading/success/error states, honeypot spam protection
  - Delivers to `consulta@taniaono.com` + archived in Web3Forms dashboard
- ✅ **P2 #11 — Dynamic `<html lang>`** — syncs to active language (PR #7)
- ✅ **P2 #16 — Remove Lovable placeholder metadata** (PR #7)
- ✅ **P2 #18 — Persist language selection** (localStorage) (PR #7)
- ✅ **P2 #20 — Deduplicate language-picking logic** (`pick()` helper) (PR #7)
- ✅ **P3 #28 — Delete dead App.css** (PR #7)
- ✅ **P3 #29 — Remove unused NavLink.tsx** (PR #7)
- ✅ **P3 #30 — Remove dual toast systems** (+ orphaned deps) (PR #7)
- ✅ **P3 #31 — Delete placeholder.svg** (PR #7)
- ✅ **P3 #32 — Deduplicate ApproachSection vs approaches.ts** (PR #7)
- ✅ **P3 #33 — Enable TypeScript strict mode** (PR #7)
- ✅ **P3 #34 — ESLint: no-unused-vars + jsx-a11y plugin** (PR #7)
- ✅ **P3 #35 — Fix the 3 lint errors** (PR #7)
- ✅ **P3 #36 — Add meaningful test coverage** (13 tests) (PR #7)
- ✅ **P3 #21 — Optimize hero image** 1.28 MB → 50 KB WebP (PR #8)
- ✅ **P3 #22 — Logo PNG → WebP** 163 KB → 40 KB (PR #8)
- ✅ **P3 #23 — Code-split bundle** (lazy-load routes) (PR #8)
- ✅ **P3 #24 — Remove unused shadcn/ui components** (44 of 45 removed) (PR #8)
- ✅ **P3 #25 — Remove unused dependencies** (~37 packages pruned) (PR #8)
- ✅ **P3 #26 — Preconnect/preload fonts** (no more blocking @import) (PR #8)
- *(also: all specialty + profile photos converted to WebP; CSS 71 KB → 28 KB)*

---

## ⬜ Open

### Contact form

- ⬜ 🟡 **Client confirmation email (autoresponder)** — *deferred, revisit before launch*
  - **Goal:** when a prospective client submits the consultation form, they
    automatically receive a confirmation/acknowledgement email (not just the
    on-screen success message).
  - **Why deferred:** Web3Forms autoresponder is a PRO-only feature
    (~$49/year special plan, or ~$12/mo standard). Not worth paying during the
    quiet testing phase.
  - **Options evaluated:**
    1. **Web3Forms Pro** (~$49/yr) — native autoresponder, configured in the
       dashboard, zero code change. Cleanest. *Recommended for launch.*
    2. **Switch to Formspree** (free tier) — has a native autoresponder on the
       free plan (50 submissions/mo). Reliable, ~30 min to re-wire.
    3. **Zoho Flow** (free) — detect the Web3Forms notification, parse the
       client email from the body, send a confirmation. Works but fragile.
    4. **Zoho filter auto-reply** (free) — ❌ not viable: replies to the
       Web3Forms sender, not the client's Reply-To.
  - **Current behaviour:** on-screen "Message sent / Thank you for your trust"
    confirmation only. The client does NOT get an email.
  - **Decision for launch:** choose Web3Forms Pro OR Formspree (both give a
    reliable, professional confirmation email). Avoid the Zoho-parsing hacks.

### Launch readiness (blockers before going public on taniaono.com)

- ⬜ 🟠 **Privacy policy / legal notice / cookie notice** (P2 #38) — required in
  Spain for a health practice; the site repeatedly promises GDPR compliance but
  has no legal pages. Add footer links too.
- ⬜ 🟠 **Replace fictional testimonials with real ones** — current testimonials
  are placeholders.
- ⬜ 🟠 **Fix/remove the hardcoded "Trustpilot 5.0" widget** (P3 #37) — currently
  a static 5-star rating with no link to a real profile (misleading-advertising
  risk for a regulated profession).
- ⬜ 🟠 **Point `taniaono.com` DNS → website** — go live on the custom domain
  (currently served from the github.io URL).
- ⬜ 🟠 **Remove noindex / restore crawl policy** — undo PR #4: delete the robots
  meta tags from `index.html` + `404.html`, restore an Allow policy in
  `robots.txt`, and add a `Sitemap:` directive. Do this ONLY at public launch.

### SEO & discoverability (P2) — *deferred until launch (conflict with noindex)*

- ⬜ 🟠 **Per-page titles/meta/canonical** (P2 #12) — all routes share one static
  title; SpecialtyPage/ApproachPage need unique SEO tags (e.g. react-helmet).
- ⬜ 🟠 **Cards are not crawlable `<a>` links** (P2 #13) — detail pages only
  reachable via JS onClick; add real anchors for crawlers.
- ⬜ 🟡 **sitemap.xml** (P2 #14) — none exists; add + reference in robots.txt.
- ⬜ 🟡 **Structured data (JSON-LD)** (P2 #15) — add LocalBusiness/MedicalBusiness
  schema for local SEO.
- ⬜ 🟡 **Enrich OG/Twitter metadata** (part of P2 #16) — add a branded og:image,
  og:url, og:site_name at launch (placeholder removal already done in PR #7).
- ⬜ 🟢 **Canonical link** (P2 #17).

### Performance (P3)

- ⬜ 🟡 **Lighten specialty card hover animations** (P3 #27) — *pending; user wants
  to discuss this one before changing.* Only remaining P3 performance item.

### Code quality (P3) — *all done in PR #7 ✅ (see Done section)*

### Nice-to-have (P4)

- ⬜ 🟢 **Make contact email/phone clickable** (P4 #39) — mailto:/tel: links,
  map link for address.
- ⬜ 🟢 **Explicit favicon/apple-touch-icon/manifest** (P4 #40).
- ⬜ 🟢 **prefers-reduced-motion for all animations** (P4 #41).
- ⬜ 🟢 **Wire up or remove dark mode** (P4 #42) — unused .dark palette.
- ⬜ 🟢 **`<noscript>` fallback** (P4 #43).
- ⬜ 🟢 **Clean up README** (P4 #44) — Lovable boilerplate.
- ⬜ 🟢 **Upgrade deploy workflow to Node 22** (P4 #45) — Node 20 deprecated in CI.
