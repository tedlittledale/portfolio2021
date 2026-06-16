# Architecture

## Rendering model

Static site. Every page uses `getStaticProps` to pull Sanity content at build time.
`next.config.js` sets `output: "export"`, so `pnpm build` writes plain HTML/JS straight
to `out/` (no separate export step). `images: { unoptimized: true }` is required there
because a static export has no Image Optimization server. No server runtime in production.

## The scroll system (home + case studies)

The homepage (`components/Pages.js`) and case studies (`components/CaseStudy.js`) share
the same idea: a vertical stack of full-viewport panels with an animated colour fill
("page turn") effect as you scroll.

How it works:
- `Pages` renders an intro `AnimatedFill`, one `Section` per Sanity `section`, then an
  outro `AnimatedFill` containing `Contact`.
- A scroll listener computes `currentPage` from `window.scrollY` divided by per-panel
  height, and writes it to local state **and** the MobX store
  (`pageModel.setCurrentSection`).
- Each panel gets `bgc` (its colour) and `nextColor` from the rotating palette
  `["#ef476f", "#FAC216", "#06d6a0", "#118ab2"]`. Case study pages pass their own
  palette (e.g. bot-or-not uses reds/white).
- `AnimatedFill` uses `isCurrent` / `ready` / `pagePercent` / `stackOrder` to drive the
  reveal animation and z-stacking.

Key components in the chain: `Pages` / `CaseStudy` → `Section` / `CaseStudySection` →
`AnimatedFill` / `CaseStudyFill` → `About` / `CarouselSection` / `CaseStudyBody`.

The carousel (`Carousel.js`, `CarouselSection.js`) uses `utils/hooks/useCarousel.js`
and `react-swipeable`.

## State (MobX-State-Tree)

Deliberately minimal.
- `store.js` defines `Store` with a single `pageModel` (`models/ExampleModel.js`).
- `pageModel` tracks the current section index (`setCurrentSection`).
- `pages/_app.js` creates the store with `useStore(pageProps.initialState)` and wraps
  the app in `<Provider store={store}>`.
- Components consume it with `observer` (from `mobx-react-lite`) composed with
  `withPaths([...])` (`utils/store.js`), which injects the requested store paths as
  props. Example: `compose(withPaths(["pageModel"]), observer)(Pages)`.

Decorators use legacy babel config (`.babelrc`).

## Styling

styled-components only. Global styles assembled in `styles/globals/manifest.js`:
`normalize → theme → base → app`, each a `createGlobalStyle`.

- **`theme.js`** is the design-token source: CSS custom properties in HSL
  (`--color-*`, `--font-*`, typographic rhythm). Light/dark theme blocks exist but
  note both `data-theme="light"` and `data-theme="dark"` currently apply `lightTheme`
  — dark mode is effectively not switched on. Don't assume working theme switching.
- **`base.js`** sets box-sizing, base typography, colours, smooth scroll.
- Component styles: `styled(...)` / `styled.div\`...\`` at the top of each component
  file. Reference `var(--token)` where a token exists; add new tokens to `theme.js`.

## Pages

- `pages/index.js` — homepage (scroll sections).
- `pages/case-studies/<hash>.js` — one file per case study. The `pageHash` constant in
  `getStaticProps` must equal the Sanity `caseStudyHash`. Each duplicates the `<Head>`
  block — if you add a case study, copy an existing file.
- `pages/resume.js`, `pages/security-policy.js`, `pages/og_example.js`.

## Gotchas

- Static export means no server-side anything at runtime — all dynamic data must be
  resolved in `getStaticProps` at build time (this is why tweets are pre-fetched).
- Content edits in Sanity require a redeploy to appear (build-time fetch + `useCdn`).
- Several `console.log`s remain in components; the production build strips console via
  `transform-remove-console`, but avoid adding more.
- The `<Head>` / OG meta is duplicated across pages rather than centralised.
