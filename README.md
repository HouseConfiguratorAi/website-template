# Oberhall — premium automotive website template

An editorial, image-led website template for automotive businesses: luxury and
premium used-car dealers, performance and classic specialists, importers,
sourcing agents and collectors. The demo brand, **Oberhall**, is a fictional
showroom in Amsterdam; all demo copy, routes and formatting are in **Dutch**
(`nl-NL`).

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
| `/` | Homepage: hero, statement, featured vehicle, collection, name band, philosophy scene, services, magazine, location, enquiry, closing scene |
| `/aanbod` | Inventory with search, filters, sorting and shareable URLs |
| `/aanbod/[slug]` | Vehicle detail, generated for every vehicle in the data |
| `/over-ons`, `/diensten`, `/contact` | Company pages |
| `/magazine`, `/magazine/[slug]` | Editorial articles from Markdown |
| `/privacy`, `/voorwaarden`, `/404` | Legal pages and not-found page |

The earlier English URLs (`/vehicles`, `/about`, `/journal/…` …) redirect to
their Dutch equivalents; see `redirects` in `astro.config.mjs`.

### Language

The site language is set by `site.locale` and `site.lang` in
`src/config/site.ts`: prices (`€ 214.500`), numbers, dates (`12 september 2026`)
and the live opening status follow it. Visible copy lives in `content.ts`,
the data files, the journal Markdown and the page files. Power is shown in
**pk** (metric horsepower), derived from the kW value.

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

`src/config/theme.ts` ships six presets. Each defines a **dark**, a **light**
and a **signal** tone (the brand colour), because every page moves between
them:

- `rosso`: black, white and one racing red, uppercase display type, small tracked capitals for metadata — a manufacturer-grade showroom look (default)
- `corsa`: racing red, pure white and deep black, condensed grotesk display with a monospace technical layer
- `noir`: warm black, sand and cream, serif display
- `atelier`: gallery white, charcoal and bronze, light serif
- `heritage`: racing green, parchment and brass, for classic-car specialists
- `circuit`: graphite and signal orange, expanded grotesk
- `studio`: pure monochrome

Switch presets with `themeConfig.preset`, then override single values:

```ts
export const themeConfig = {
  preset: 'rosso',
  overrides: { dark: { accent: '#0057B8', accentInk: '#4D94FF' } },
};
```

Each tone separates `accent` (a fill, such as a button, which must carry white
text) from `accentInk` (the accent used as text on the background). Keep both
at a contrast of at least 4.5:1. The signal tone is used sparingly: the red
band of car names and the enquiry section on the homepage. Presets without a
signal tone get one derived from their accent.

Components only use semantic tokens (`--bg`, `--fg`, `--muted`, `--accent`,
`--accent-ink` …), so no component contains a hard-coded colour.

### Typography

- **Display:** Archivo, in capitals (Rosso), condensed and heavy (Corsa), or Newsreader (serif presets).
- **Text:** Archivo.
- **Technical layer:** small tracked capitals (Rosso) or Geist Mono (Corsa) for specifications, references and metadata. Set with `type.metaFont`.

Theme type options: `uppercase` sets display type in capitals, `emphasis:
'light'` sets `*emphasised*` words in a light weight instead of the accent colour.

### Logo

Set `site.logo.type` to `'image'` and `site.logo.src` to a file in `/public`.
The logo is sized by height, so wide and square marks both fit the header.
The default is a typeset wordmark.

### Copy

In `content.ts`, wrap a word in asterisks to emphasise it in a headline:
`'Het wachten *waard.*'` (light weight in Rosso, italic in the serif themes).

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

Motion is defined in `src/styles/motion.css` and `src/scripts/motion.ts`,
without an animation library.

- **Headlines:** each word rises out of its own mask. Screen readers get the sentence once.
- **Scroll scenes:** reveals, camera moves and layered depth are driven by a single `--p` CSS variable, computed only for scenes on screen.
- **Flow band:** a band of the collection's names flows continuously, speeds up and reverses with the scroll, and slows under the pointer.
- **Header:** it steps out of the way while reading down and returns on scroll up, with a red reading-progress line.
- **Key figures:** power, 0–100 km/h, top speed and mileage shown large and counted up once when they come into view (`src/components/vehicles/KeyFigures.astro`). Add `performance: { accel, topSpeed }` to a vehicle to show them.
- **Micro-interactions:** rolling button labels, magnetic primary buttons, card photos that drift with the pointer, and a red line drawn under a card image on hover.
- **Page transitions:** a card image expands into the vehicle page (Chrome, Edge, Safari 18.2+).

Pointer effects run only on desktop pointers. `prefers-reduced-motion` is
respected everywhere, `?motion=off` shows any page without animation, and
content is never hidden without JavaScript.

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
- Fonts: the default `rosso` theme loads only Archivo (about 90 KB). Geist Mono and Newsreader are downloaded only when a theme uses them.

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
