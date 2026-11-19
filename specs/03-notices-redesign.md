# SPEC 03 — "Avisos importantes" notices section redesign

> **Status:** Approved
> **Depends on:** SPEC 01, SPEC 02
> **Date:** 2026-11-19
> **Objective:** Restyle the home page notices section (`FeatureAnnouncements`) to match the Brooklyn redesign: a cream band with a red kicker, a Strapi title and intro, and a grid of static flyer cards that open the full-size image.

## Why this spec exists

The homepage is being redesigned section by section. SPEC 01 did the hero and SPEC 02 did the header. The notices section ("Avisos importantes", README section 3) comes next. The design is an HTML prototype (`templates/CSCV Brooklyn Redesign.dc.html`, `<section id="avisos">`), not code to copy. The README says flyers "should be driven by the CMS". The Strapi side is deferred, so this spec keeps the flyers static in a single constant that is easy to edit.

## Scope

**In:**

- Rewrite `src/components/announcements/FeatureAnnouncements.tsx` and `src/components/announcements/style.module.css` in place, keeping the same file names and the default export.
  - Section: `id="avisos"`, background cream `#f5eee6`, full width.
  - Inner container: `max-width: 1280px`, `margin: 0 auto`, padding `80px 24px`.
  - Head row: flex, `justify-content: space-between`, `align-items: end`, gap 20px, wraps, margin-bottom 32px.
    - Left: red kicker pill reading "Avisos importantes" (hardcoded): background `#c8161d`, white text, padding `6px 12px`, radius 999px, 13px/700, margin-bottom 16px. Below it an H2 from Strapi `anuncios.title`: `clamp(36px, 4.4vw, 60px)`/800, letter-spacing -0.03em, line-height 1, ink `#2a2523`.
    - Right: intro from Strapi `anuncios.description` (blocks via `BlocksRenderer`), 17px, line-height 1.55, `#555a66`, max-width 420px, left-aligned.
  - Grid: `repeat(auto-fit, minmax(min(100%, 340px), 1fr))`, gap 20px.
  - Card: `<a>` with `href` = the flyer `src`, `target="_blank"` and `rel="noopener noreferrer"`. White background, 1px border `#ebe2d7`, radius 20px, `overflow: hidden`, `display: block`. On hover, `transform: translateY(-3px)` with a 0.2s transition, disabled under `prefers-reduced-motion`.
  - Image: plain `<img>` at natural height (`width: 100%; height: auto; display: block`) with `loading="lazy"`, keeping the existing `eslint-disable @next/next/no-img-element`.
- Hanken Grotesk (`heroFont` from `src/config/font.plugin.ts`) applies to this section only.
- Design tokens are CSS variables scoped to the module (same approach as SPEC 01).
- The flyers come from a new constant `src/constants/notices.ts` with a descriptive Spanish alt per flyer. It starts with today's two images in `public/images/`.
- `scroll-margin-top` on `#avisos` uses the same values as `#event-list` in `src/components/ui/events-list/style.module.css` (117px base, 121px desktop).
- Missing Strapi data: with no `anuncios.title` the H2 is hidden, and with an empty or missing `anuncios.description` the paragraph is hidden. The kicker and the grid always render.
- Remove the old red gradient, the `Title` component usage, the centered text, the `leadText` font and the dead video/overlay CSS from this section.

**Out of scope (for future specs):**

- Loading flyers from Strapi: adding an image field to the `anuncios` collection or to `Home.anuncios`, and reworking `src/actions/get-anuncios.ts`.
- Deleting `src/actions/get-anuncios.ts` and `src/interfaces/anuncios.ts`. They stay untouched.
- A lightbox or modal viewer.
- English translation of this section (the SPEC 02 toggle covers the header only).
- A menu entry pointing to `#avisos`.
- Moving the component to `src/components/home/`.
- Expiry or date filtering of notices.

## Data model

```ts
// src/constants/notices.ts
export interface Notice {
  id: string;   // stable React key, e.g. 'vigilia-pentecostes-2026'
  src: string;  // public path, e.g. '/images/PHOTO-2026-05-15-06-45-19.jpg'
  alt: string;  // descriptive Spanish alt text
}

export const NOTICES: Notice[] = [
  {
    id: 'vigilia-pentecostes-2026',
    src: '/images/PHOTO-2026-05-15-06-45-19.jpg',
    alt: 'Gran Vigilia de Pentecostés "Nacer de Nuevo", sábado 23 de mayo de 2026, 5:00 PM a 10:00 PM, Gimnasio de San Malaquías, 220 Hendrix St, Brooklyn',
  },
  {
    id: 'veranear-con-jesus-2026',
    src: '/images/PHOTO-2026-05-15-06-45-07.jpg',
    alt: 'Veranear con Jesús, paseo en el barco Liberty Bell I, domingo 14 de junio de 2026, embarque 1:30 PM en Brooklyn Army Terminal, $100 por persona',
  },
];
```

Order in the array is the display order. The component's props are unchanged: `{ anuncios: Block }` from `getHomeInfo()`.

## Implementation plan

1. Create `src/constants/notices.ts` with `Notice` and `NOTICES`. Make `FeatureAnnouncements` map over `NOTICES` instead of the two hardcoded `<img>`s, still with the old styles. Verify: the home page shows both flyers.
2. Rewrite `style.module.css` and the JSX: section shell, cream background, container, head row (kicker, H2, intro), `heroFont`, scoped tokens and `id="avisos"` with `scroll-margin-top`. Verify at 375px and 1280px.
3. Flyer grid and cards: link to the full image in a new tab, border, radius, hover lift, reduced-motion guard and lazy loading. Verify that clicking a card opens the image in a new tab.
4. Missing-data guards: hide the H2 or the paragraph when Strapi lacks them. Remove the dead CSS and the `Title`/`leadText` imports. Do a responsive pass at 375, 768, 960, 1280 and 1920px, then run `npm run lint` and `npm run build`.

## Acceptance criteria

- [ ] The section has `id="avisos"`, a `#f5eee6` background, and a content width of at most 1280px.
- [ ] A red pill reading "Avisos importantes" appears above the H2.
- [ ] The H2 text equals Strapi `Home.anuncios.title`, and the intro renders Strapi `Home.anuncios.description`.
- [ ] With the title missing, no empty H2 is rendered. With the description empty, no empty paragraph is rendered. The kicker and the grid still show.
- [ ] Both flyers from `NOTICES` render in array order, each with its alt text from the constant.
- [ ] Clicking a flyer opens the full-size image in a new tab, with `rel="noopener noreferrer"`.
- [ ] At 1280px the two flyers sit side by side. At 375px they stack in 1 column. There is no horizontal scroll at 375px.
- [ ] Flyers display at natural height with no cropping.
- [ ] Hovering a card lifts it 3px. With `prefers-reduced-motion: reduce` it does not move.
- [ ] The section's font is Hanken Grotesk, and no other section's font or color changes.
- [ ] Adding a third object to `NOTICES` makes a third card appear with no other code change.
- [ ] `src/actions/get-anuncios.ts` and `src/interfaces/anuncios.ts` are unchanged.
- [ ] `npm run lint` and `npm run build` pass with no new errors.

## Decisions

- **Yes:** keep the flyers static in `src/constants/notices.ts`. It ships without a Strapi schema change. A notice is one array entry.
- **No:** a Strapi image field (collection or `Home.anuncios`). It is the better long-term fit, but it needs CMS work outside this repo, so it goes in its own spec.
- **Yes:** the kicker is hardcoded, while the H2 and intro come from Strapi `Home.anuncios`. Editors keep control of the copy they already manage.
- **No:** hardcoding the design's H2 and intro copy, and no fallback copy when Strapi is empty. Missing parts are hidden instead.
- **Yes:** open the full-size image in a new tab, as in the design. No JavaScript is needed.
- **No:** a lightbox. It adds a client component, a focus trap and Escape handling for little gain.
- **Yes:** Spanish only, `id="avisos"` with `scroll-margin-top`, and no menu item.
- **No:** translating this section. SPEC 02 limits the toggle to the header.
- **Yes:** rewrite in place at `src/components/announcements/`, so the `page.tsx` import does not change.
- **No:** moving the component to `src/components/home/notices/`.
- **Yes:** a descriptive alt per flyer. The flyers carry the event info, and screen readers need it.
- **No:** a generic `alt="Aviso"`.
- **Yes:** leave `get-anuncios.ts` and `interfaces/anuncios.ts` untouched. A future Strapi spec may reuse them.

## Risks

| Risk | Mitigation |
| ---- | ---------- |
| The flyers advertise May and June 2026 events that are already past (today is 2026-11-19). | Out of scope for code. The editor updates `NOTICES` and `public/images/`, which is one array edit. |
| Static flyers drift from the CMS-driven intent in the README. | Recorded as an explicit out-of-scope item for a future Strapi spec. |
| Large flyer JPGs slow the page on mobile. | `loading="lazy"`. Converting to `next/image` stays out of this spec. |
| A single flyer stretches full width on wide screens. | `auto-fit` with a 340px minimum makes one card fill the row, as the design does. Acceptable for now. |

## What is **not** in this spec

- Flyers from Strapi or changes to `get-anuncios.ts`.
- A lightbox viewer.
- English translation or a menu entry for `#avisos`.
- Moving the component to `src/components/home/`.
- Notice expiry or date filtering.

Each one of those, if it lands, goes in its own spec.
