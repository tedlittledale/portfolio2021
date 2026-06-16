# CLAUDE.md — tedspace.me portfolio

Personal portfolio for Ted Littledale, live at **https://tedspace.me**. This file is
the entry point for Claude Code. Read it before making changes, and read the linked
docs in `docs/` when a task touches content, architecture, or deployment.

## ⚠️ Stack exception (read this first)

My global `~/.claude/CLAUDE.md` mandates CSS Modules + design tokens and forbids
styled-components / CSS-in-JS / MobX. **This project predates those rules and is
deliberately exempt.** It uses styled-components and MobX-State-Tree throughout.

- **Match the existing patterns in this repo.** Do NOT migrate components to CSS
  Modules, do NOT swap styled-components for anything else, do NOT add Tailwind.
- Only change the styling/state approach if I explicitly ask for a migration.
- Everything else in the global rules (clarity, plan mode for big changes, phased
  work, ask before destructive actions) still applies.

## What this is

A single-page scroll-driven portfolio plus a handful of long-form case study pages.
Content (section copy, carousels, case studies) lives in **Sanity CMS**, not in the
repo. Code changes alter layout/behaviour; copy changes usually happen in Sanity.

## Tech stack

- **Next.js** (pages router, `pages/`) — statically exported, not server-run
- **styled-components** — all styling; global styles in `styles/globals/`
- **MobX-State-Tree** — light global store (`store.js`, `models/`)
- **Sanity** — headless CMS, fetched with GROQ at build time via `utils/sanityClient.js`
- **react-tweet** — embedded tweets inside case studies
- **@vercel/analytics** — analytics
- Package manager: **pnpm**

## Commands

```bash
pnpm install      # install
pnpm dev          # local dev at http://localhost:3000
pnpm build        # production build → static export to out/
```

`next.config.js` sets `output: "export"`, so `pnpm build` produces the static `out/`
directory directly — there is no separate export step.

There are **no tests** and no linter configured. Prettier config exists
(`.prettierrc`); keep formatting consistent with surrounding code.

## Deployment

- Hosted on **Vercel**. Vercel auto-detects Next.js + `pnpm-lock.yaml`; with
  `output: "export"` the build produces a fully static site. No deploy config file in
  the repo.
- Because it's a static export, all data fetching uses `getStaticProps`
  (build-time). There is no server runtime — don't add API routes or
  `getServerSideProps`; they won't run on the deployed static site.
- Git remote: `github.com/tedlittledale/portfolio2021`, branch `main`.

## Project map

```
pages/
  index.js              # home — scroll-snapping sections from Sanity `section` docs
  case-studies/*.js     # one file per case study (bot-or-not, millionaire, yorkshire-tea)
  resume.js, security-policy.js, og_example.js
components/             # ~23 styled-components React components
styles/globals/         # global styled-components: manifest → normalize/theme/base/app
  theme.js              # CSS custom properties (HSL colors, fonts) — the closest thing to tokens
store.js, models/       # MobX-State-Tree store + PageModel
utils/                  # sanityClient, store helpers (withPaths), hooks/, small helpers
public/                 # images, favicons, manifest
```

## Reference docs

- `docs/CONTENT.md` — how Sanity content is shaped and how to add a section / case study
- `docs/ARCHITECTURE.md` — the scroll/animation system, state flow, styling conventions
- `docs/COMMON-TASKS.md` — step-by-step recipes for the changes I actually make

## Conventions to follow

- New components: a single `.js` file in `components/`, styled-components defined at
  the top of the file, default export at the bottom. Match neighbours.
- Colors and fonts come from CSS custom properties defined in `styles/globals/theme.js`
  (HSL values). Reference `var(--token-name)` rather than hardcoding where one exists;
  add new ones to `theme.js` first.
- Components that read the store wrap with `observer` and `withPaths([...])` (see
  `components/Pages.js`).
- Remove stray `console.log` calls when editing a file (several exist; production
  build strips them via babel, but don't add more).
- Prefer small, surgical changes. This is a personal site, not a product — don't
  introduce frameworks, build steps, or abstractions it doesn't already have.
