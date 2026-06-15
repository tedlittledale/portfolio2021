# Common tasks

Step-by-step recipes for the changes most often made to this site. Always run
`pnpm dev` and check `http://localhost:3000` before considering a change done.

## Edit homepage copy or a section's text

This is **content** — edit the `section` document in Sanity, not the repo. Code only
changes if the *layout/behaviour* needs to change. After editing in Sanity, redeploy to
pull it into the static export. See `docs/CONTENT.md`.

## Add a new homepage section

1. In Sanity, create a new `section` doc (set `sectionTitle`, `sectionHash`,
   `sortOrder`, and `sectionbody` and/or `carouselItems`).
2. No code change needed — `pages/index.js` maps over all `section` docs by `sortOrder`.
3. Redeploy.

## Add a new case study

1. In Sanity, create a `caseStudy` doc with a unique `caseStudyHash` (e.g. `my-study`).
2. Copy an existing page file, e.g. `pages/case-studies/bot-or-not.js`, to
   `pages/case-studies/my-study.js`.
3. Change the `pageHash` constant in `getStaticProps` to match `caseStudyHash`.
4. Update the `<Head>` title/meta and the `colors` palette passed to `<CaseStudy>`.
5. Link to it from wherever case studies are surfaced.
6. `pnpm dev`, visit `/case-studies/my-study`, then redeploy.

## Embed a tweet in a case study

In Sanity, link some text in the case study body to the tweet's `https://x.com/...`
URL. The build step auto-converts it to an embedded tweet (see `docs/CONTENT.md`).
No code change required.

## Change a colour, font, or spacing token

1. Edit `styles/globals/theme.js` — add or change the relevant CSS custom property
   (use HSL, matching the existing values).
2. Reference it in components as `var(--token-name)`.
3. Don't hardcode the literal value in component styles if a token exists.

Note: the per-panel scroll palette is a JS array in `components/Pages.js`
(`colors = [...]`), separate from the CSS tokens — change it there for homepage panels,
or via the `colors` prop for a case study.

## Update resume content

Edit `pages/resume.js` (and `components/Resume.js`). Check whether the data is inline or
pulled from Sanity before editing.

## Update favicons / OG image / site metadata

- Favicons and manifest: files in `public/` (`favicon-*.png`, `site.webmanifest`, etc.).
- OG / Twitter meta: the `<Head>` block, duplicated in `pages/index.js` and each case
  study page — update each one you care about.

## Deploy

Push to `main` on `github.com/tedlittledale/portfolio2021`. **Vercel** auto-builds from
the push (detects Next.js + `pnpm-lock.yaml`). The static export is produced by
`output: "export"` in `next.config.js` during the build — there is no separate export
step. To verify the static output locally:

```bash
pnpm build   # outputs static site to out/
```

## Things NOT to do

- Don't add `getServerSideProps`, API routes, or anything needing a server runtime —
  the deploy is a static export.
- Don't migrate styled-components → CSS Modules or swap out MobX unless explicitly asked
  (see the stack exception in `CLAUDE.md`).
- Don't hardcode content that belongs in Sanity.
