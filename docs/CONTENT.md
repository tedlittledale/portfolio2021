# Content — Sanity CMS

Most of the site's words and images live in **Sanity**, not in this repo. Code defines
layout and behaviour; content is fetched at build time with GROQ.

## Connection

`utils/sanityClient.js`:

```js
projectId: "9heam37m"
dataset:   "production"
useCdn:    true          // set false if you need fresh (uncached) data
```

The Sanity Studio (where copy is edited) is a separate project — edit content there,
then trigger a rebuild/redeploy here to pull the new content into the static export.
There is no preview/draft pipeline wired into this repo.

## Content types

### `section` — drives the homepage

Each homepage panel is one `section` document. Query (in `pages/index.js`):

```groq
*[_type == 'section']{ _id, sectionTitle, sectionHash, sectionbody, carouselItems } | order(sortOrder)
```

Fields:
- `sectionTitle` — heading shown on the panel
- `sectionHash` — used as the element `id` (anchor / nav target)
- `sortOrder` — controls vertical order of panels
- `sectionbody` — Portable Text (rich text) → rendered by `components/About.js`
- `carouselItems` — optional array → rendered by `components/CarouselSection.js`

A section renders body text, a carousel, or both. See `components/Section.js`.

### `caseStudy` — drives `/case-studies/*`

Query (in each `pages/case-studies/<hash>.js`):

```groq
*[_type == 'caseStudy' && caseStudyHash == $caseStudyHash]{
  _id, caseStudyTitle, caseStudyHash, caseStudySections
}
```

Fields:
- `caseStudyTitle`
- `caseStudyHash` — must match the `pageHash` hardcoded in the page file
- `caseStudySections[]` — each has `caseStudySectionBody` (Portable Text)

## Portable Text

Rich text is Sanity Portable Text, rendered with `@portabletext/react` /
`@sanity/block-content-to-react`. To change how a block type or mark renders, edit the
serializers in the relevant component (`About.js`, `CaseStudyBody.js`, `Content.js`).

## Embedded tweets (case studies only)

Case study pages post-process Portable Text in `getStaticProps`: any link mark whose
`href` starts with `https://x.com/...` is converted into an embedded tweet. The tweet
is fetched at build time via `getTweet` from `react-tweet/api`, serialized to JSON, and
rendered with `<EmbeddedTweet>`. See `pages/case-studies/bot-or-not.js` for the pattern.

- `react-tweet` is in `transpilePackages` (`next.config.js`) — keep it there.
- To add a tweet to a case study: in Sanity, link some text to the `x.com` tweet URL.

## Images

- Static images (favicons, splash, screenshots) live in `public/`.
- Some content images come from Cloudinary / Sanity image URLs (see OG meta in
  `pages/index.js`). Sanity images use `@sanity/image-url` / `next-sanity-image`.
