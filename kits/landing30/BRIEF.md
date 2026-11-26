# Landing Page Brief

You build ONE landing page for ONE small Israeli business.

## Input

A single business object from `businesses.json`:

```json
{
  "id": 1,
  "slug": "biz-01",
  "name": "...",
  "category": "...",
  "city": "...",
  "address": "...",
  "phone": "...",
  "hours": "...",
  "highlight": "...",
  "style_hint": "..."
}
```

## Output

- `sites/<slug>/index.html` — the page
- `sites/<slug>/img/` — downloaded photos
- `sites/<slug>/log.json` — timing log (see "Logging")

Write only inside `sites/<slug>/`. Do not read or modify other businesses' folders.

## Technical rules

- One self-contained HTML file: CSS in a `<style>` tag, JS (only if needed) in a `<script>` tag.
- No frameworks, no build step, no CDN libraries.
- Fonts: see "Typography" below.
- Hebrew, right-to-left: `<html lang="he" dir="rtl">`.
- Mobile-first, responsive up to desktop.
- Images: see "Images" below.

## Images

Use 2 to 4 real photos that fit the business category (hero + supporting).

1. Find photos on free-license stock sites only: Unsplash, Pexels or Pixabay. Do not take images from business websites, Google Images results, news sites or social media.
2. Download each photo into `sites/<slug>/img/` with `curl -L`, and reference it with a relative path (`img/hero.jpg`). Never hotlink.
3. Verify every file: it must exist, be a real image (`file img/hero.jpg`), and be larger than 10 KB. Request a web-sized version (about 1600px wide for hero, 800px for others) when the site supports it.
4. If a download fails, try another photo. After 3 failed attempts for a slot, drop that image and use a CSS gradient or inline SVG instead. A broken image is never acceptable.
5. No photos with recognizable logos, brand names or readable signage.
6. Never use photos that show women or girls, in whole or in part. Prefer photos of the product, the tools, the work or the place itself, without people. If a photo might show a woman, skip it and choose another.
7. Icons stay inline SVG.

## Page structure

1. **Hero** — business name, one strong headline, one-line subheadline, primary call-to-action button.
2. **Services** — 3 to 6 services that are typical for this category.
3. **Why us** — 3 short reasons, built around `highlight`.
4. **Hours and location** — `hours`, `address`, `city`.
5. **Contact** — call button (`tel:` link) and WhatsApp button (`https://wa.me/` link) using `phone`.
6. **Footer** — business name, city, current year.

## Content rules

- Write natural, short marketing Hebrew. No English headings.
- Use ONLY the facts in the business object. Typical services for the category are fine.
- Do NOT invent: customer testimonials, ratings, review counts, prices, awards, years of experience, staff names, licenses or certifications.

## Typography

Typography is the first thing people notice. Do not settle for a default.

- Use a pairing of two Google Fonts that support Hebrew: one headline font with real character, one clean body font.
- Headline fonts with character: Suez One, Secular One, Karantina, Amatic SC, Bellefair, David Libre, Frank Ruhl Libre, Noto Serif Hebrew, Fredoka, Rubik (weight 800-900).
- Body fonts: Heebo, Assistant, Rubik, Noto Sans Hebrew, IBM Plex Sans Hebrew, Open Sans, Varela Round, Alef.
- Match the pairing to the business: a garage, a pastry shop and a pilates studio should not share a headline font.
- Build a clear type scale: very large confident headline in the hero, clearly smaller section titles, comfortable body text (17-19px, line-height about 1.7).
- Load fonts with `display=swap` and only the weights you use.

## Design rules

Invest in the design. This page should look like a designer made it for this specific business, not like a template with the colors swapped.

**Concept first.** Before writing any HTML, decide on a design concept and write it as an HTML comment at the top of the file, in 2-3 lines: the mood, the palette, the font pairing, and the one visual idea that makes this page memorable.

**Palette.** Follow `style_hint` for mood and colors. If it is missing, choose a direction that fits the category and city. Use one dominant color, one accent, and neutrals. Define them as CSS variables.

**Layout.** Do not use the same structure for every section. Across the page, mix at least three different section treatments, for example:
- full-bleed photo hero with overlaid text, or split hero (text one side, photo the other), or hero with an offset framed photo
- services as cards, or as a numbered list, or as an alternating image/text rows, or as a horizontal strip
- a full-width colored band for "why us" or for hours
- an asymmetric two-column section

Pick what suits the business. A barbershop, a garage and a pastry shop must not share a layout, palette or font.

**Details that make it feel finished.**
- Generous spacing; sections must breathe.
- Buttons with a clear hover and focus state.
- Subtle CSS-only motion (a fade or slide on load, a hover lift on cards). Respect `prefers-reduced-motion`.
- A sticky call button at the bottom of the screen on mobile.
- Photos get deliberate treatment: an overlay, a frame, a shape or a crop that fits the concept.
- Decorative elements (dividers, shapes, patterns) made with CSS or inline SVG, matching the concept.
- 4 to 6 services, each with one or two sentences.

No lorem ipsum, no placeholder boxes, no "image here" blocks.

## Logging

1. Before anything else, run `date -u +%Y-%m-%dT%H:%M:%SZ` and remember the result.
2. After `index.html` is written, run the same command again.
3. Write `sites/<slug>/log.json`:

```json
{
  "slug": "biz-01",
  "name": "...",
  "started_at": "...",
  "finished_at": "...",
  "images_used": 3,
  "images_failed": 0
}
```

## Behavior

- Do not ask questions. Make decisions and finish.
- Do not run audits, linters or tests on the page.
- When done, reply with one line: `<slug> done`.
