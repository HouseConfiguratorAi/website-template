# Oberhall — premium automotive website template

An editorial, image-led website template for automotive businesses: luxury and
premium used-car dealers, performance and classic specialists, importers,
sourcing agents and collectors. The demo brand, **Oberhall**, is fictional.

Built with [Astro](https://astro.build): static HTML, almost no JavaScript,
responsive AVIF/WebP images and generated SEO metadata.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the build
npm run check     # type-check .astro and .ts files
```

Node 20+ is recommended.

---

## Pages

| Route | What it is |
| --- | --- |
| `/` | Homepage: hero, statement, featured vehicle, collection, philosophy scene, services, journal, location, enquiry, closing scene |
| `/vehicles` | Inventory with search, filters, sorting and shareable URLs |
| `/vehicles/[slug]` | Vehicle detail, generated for every vehicle in the data |
| `/about`, `/services`, `/contact` | Company pages |
| `/journal`, `/journal/[slug]` | Editorial articles from Markdown |
| `/privacy`, `/terms`, `/404` | Legal pages and not-found page |

---

## Make it yours (the "client switch")

You never need to edit a component to rebrand. Everything lives in five places:

| Change | File |
| --- | --- |
| Name, logo, URL, contact details, opening hours, navigation, form endpoint | `src/config/site.ts` |
| Colours, display typeface, corner radius | `src/config/theme.ts` |
| Headlines and page copy | `src/config/content.ts` |
| Vehicles | `src/data/vehicles.ts` (or your own source, see below) |
| Services | `src/data/services.ts` |
| Journal articles | `src/content/journal/*.md` |
| Photography | `src/assets/media/` |

### Themes

`src/config/theme.ts` ships five presets. Each defines a **dark** and a
**light** tone, because every page alternates between the two:

- `noir`: warm black, sand and cream, serif display (default)
- `atelier`: gallery white, charcoal and bronze, light serif
- `heritage`: racing green, parchment and brass, for classic-car specialists
- `circuit`: graphite and signal orange, expanded grotesk display, for performance
- `studio`: pure monochrome, grotesk display, for a minimal studio

Switch presets with `themeConfig.preset`, then override single values:

```ts
export const themeConfig = {
  preset: 'heritage',
  overrides: { dark: { accent: '#B8C4A0' } },
};
```

Components only use semantic tokens (`--bg`, `--fg`, `--muted`, `--accent` …),
so no component contains a hard-coded colour.

### Logo

Set `site.logo.type` to `'image'` and `site.logo.src` to a file in `/public`.
The logo is sized by height, so wide and square marks both fit the header.
The default is a typeset wordmark.

### Copy

In `content.ts`, wrap a word in asterisks to set it as the italic accent in a
headline: `'Cars worth *stopping* for.'`

---

## Vehicle data and connecting a real inventory

Each vehicle follows the `Vehicle` type in `src/data/vehicles.ts`: brand, model,
variant, year, price (`null` = price on request), mileage, fuel, transmission,
body type, power, colours, description, equipment groups, images, location and
status (`available`, `reserved`, `incoming` or `sold`).

Pages never import the data file directly. They call `src/lib/inventory.ts`.
To use a CMS, a dealer management system or an inventory feed, change
`getAllVehicles()` to fetch and map your data. Everything else keeps working.

- **Sold** cars disappear from listings, but their pages remain (`noindex`) so old links do not break.
- **Incoming** cars without photographs show an elegant placeholder.
- A missing or unknown image never breaks a layout.

Remote images from a CMS work too: use absolute `https://` URLs and add the
host to `image.domains` in `astro.config.mjs`.

---

## Images

Images live in `src/assets/media/` and are referenced by file name without
extension (`'f458-rosso-cover'`). At build time every image becomes AVIF and
WebP at several widths. The `<Media>` component supports:

- a separate **mobile crop** (`mobileSrc`) served below 768px
- **focal points** (`focal="40% 60%"`) for art-directed cropping
- shared-element **page transitions**: a card image expands into the vehicle page (Chrome, Edge, Safari 18.2+)

Recommended shots per vehicle: `cover` (3:2, front three-quarter),
`portrait` (4:5), `profile` (16:9), `rear` (4:5), `wheel` (4:5 detail),
`detail` (3:2). Keep one coherent style (location, light, grade) across the whole site.

> **Demo imagery.** The demo photographs are 3D renders made for this template
> (see `CREDITS.md`). They exist to show the art direction and **must be
> replaced with your own photography before commercial use.**

---

## Enquiry form

The form validates in the browser, includes a honeypot against spam bots and
posts `multipart/form-data` to `contact.formEndpoint` in `src/config/site.ts`.
While that value is empty, the form runs in **demo mode**: it validates, then
says clearly that nothing was sent.

Point it at your own API route or at a form service. The endpoint URL is
public, so never put secret keys in it, and always validate and escape the
data again on the server.

---

## Motion

Motion is defined in `src/styles/motion.css` and `src/scripts/motion.ts`
(IntersectionObserver reveals, scroll scenes driven by a single `--p` CSS
variable, no animation library).

- `prefers-reduced-motion` is respected everywhere.
- Add `?motion=off` to any URL to review the site without animation.
- Content is never hidden without JavaScript.
- A small "View / Drag" cursor companion appears on desktop pointers only.

---

## SEO

Every page has a title, description, canonical URL, OpenGraph and Twitter
tags, plus a generated 1200×630 social image. Structured data:

- `AutoDealer` (LocalBusiness) on the homepage and contact page
- `Car` with an `Offer` on vehicle pages
- `Article` on journal posts
- `BreadcrumbList` on inner pages

`sitemap-index.xml` is generated at build. Update `public/robots.txt` with your domain.

---

## Performance

- About 2 KB of JavaScript per page, with no framework runtime.
- Images are served as AVIF/WebP at the right width, lazy-loaded below the fold, with fixed dimensions (no layout shift).
- Scroll effects run only while their section is on screen, and animate `transform`, `opacity` and `clip-path` only.
- Fonts account for most of the first-load weight (~360 KB). Newsreader keeps its optical-size axis, so large headlines stay refined. If you need a lighter build, import `@fontsource-variable/newsreader/wght.css` instead of `standard.css` in `src/styles/global.css` (about 190 KB smaller, slightly heavier display type).

## Deployment

The build output in `dist/` is static and works on any static host (Netlify,
Vercel, Cloudflare Pages, S3 and others). Set `site.url` first.

---

## Project structure

```
src/
  config/        site, theme and copy — edit these first
  data/          vehicles and services
  content/       journal articles (Markdown)
  assets/media/  photography
  lib/           data access, formatting, SEO helpers
  components/
    layout/      header, mobile menu, footer
    home/        homepage-only sections
    sections/    reusable sections (story, services, contact, location…)
    vehicles/    card, filters, gallery, rail
    ui/          media, logo, arrow, section heading, cursor
  layouts/       base HTML shell
  pages/         routes
  styles/        tokens, base, motion
  scripts/       motion engine
```
