# SPEC 01 — Home page Hero redesign

> **Status:** Approved
> **Depends on:** None
> **Date:** 2026-11-17
> **Objective:** Restyle the home page `Hero` component to match the Brooklyn redesign (`templates/CSCV Brooklyn Redesign.dc.html`) while keeping title, description and cover coming from Strapi, and adding a "next event" card fed by the existing events list.

## Why this spec exists

The homepage is being redesigned section by section. The hero is the first one. The design is an HTML prototype (`templates/`), not code to copy; it must be recreated with the project's patterns (Next.js App Router, CSS Modules, Strapi fetchers in `src/actions/`).

## Scope

**In:**

- Rewrite `src/components/home/hero/Hero.tsx` and `src/components/home/hero/style.module.css` to match the design's hero section (README section 2 "Hero"):
  - Full-bleed section, `min-height: min(86vh, 760px)`, background `#2a2523`, content aligned to the bottom.
  - Background image (Strapi `cover`) with `object-fit: cover`, opacity `.62`, plus bottom gradient `linear-gradient(180deg, rgba(42,37,35,0) 30%, rgba(42,37,35,.85) 100%)`.
  - Container `max-width: 1280px`, padding `120px 24px 56px`, two-column grid `repeat(auto-fit, minmax(min(100%, 420px), 1fr))`, gap 40px, `align-items: end`.
  - Left column: frosted pill (static text "Casa de la Anunciación · Brooklyn, NY", `rgba(255,255,255,.14)`, blur 6px, 13px/600), H1 from Strapi `title` (`clamp(32px, 4.2vw, 60px)` (reduced from the design's 44–92px at the user's request), weight 800, letter-spacing -0.035em, line-height .96), description from Strapi `description` (blocks, 19px, `#e9eaee`, max-width 560px).
  - Right column: white "next event" card (radius 20px, max-width 420px, image on top at 16:9 then text, hover `translateY(-2px)`; changed from the handoff's 120px side column because event flyers are landscape and were unreadable when cropped) linking to `#event-list`.
- Next-event card data comes from `getEventList()` (`src/actions/get-events.ts`): the first event returned by Strapi. Fields used: `graphicUrl`, `name`, `eventDates` (blocks).
- Card labels (Spanish, hardcoded): kicker "Próximo evento", link text "Ver eventos →".
- Load Hanken Grotesk (weights 400–800) with `next/font/google`, applied only inside the hero.
- Remove the "Ver Actividades" button.
- Remove the hero's client-side background component (`src/components/home/hero/ui/hero-image/`) and its use of `useDevice`/`LARGE_SCREEN_IMAGE`. The background is chosen with CSS only: `comteplacion.jpeg` at ≤768px, `comunidad.jpeg` above (see Decisions).
- Hide the card when there are no events or the events fetch fails; the rest of the hero still renders.
- Use design tokens from `templates/README.md` (red `#c8161d`, gold `#f5b335`, ink `#2a2523`, body `#555a66`, etc.) as CSS variables scoped to the hero module (not global).

**Out of scope (for future specs):**

- Header, mobile menu, ES/EN language toggle (the hero stays Spanish only).
- Any other section of the redesign (notices, events grid, weekly schedule, ministries, about, videos, footer).
- Strapi schema changes (e.g. a `startDate` field on events, or a "featured event" on Home).
- Sorting or computing the "soonest" event by date.
- Site-wide font change or global color tokens.
- Deleting `LARGE_SCREEN_IMAGE` from `src/constants/constant.ts` if used elsewhere.

## Data model

This feature introduces no new data structures and no Strapi changes. It reuses:

```ts
// src/interfaces/homeInfo.ts (unchanged) — provided via getHomeInfo()
{ title: string; description: BlocksContent; image: string /* cover URL */ }

// src/interfaces/events.ts (unchanged) — provided via getEventList()
{ name: string; eventDates: BlocksContent; graphicUrl: string; ... }
```

Hero props change from `{ title, description, image }` to the same three props plus an optional next-event value:

```ts
interface Props {
  title: string;
  description: BlocksContent;
  image: string;
  nextEvent?: Pick<Events, 'name' | 'eventDates' | 'graphicUrl'>;
}
```

Where the event is fetched (inside `Hero` as an async server component, or in `src/app/page.tsx` and passed down) is decided in step 3 of the plan. Either way, `getEventList()` failures must not break the page.

## Implementation plan

1. Create the hero-scoped Hanken Grotesk font config and CSS variables for the design tokens in `src/components/home/hero/style.module.css`. Verify with `npm run dev`: home page still renders.
2. Rewrite `Hero.tsx` + `style.module.css` for the left column and background (pill, H1, description, cover image with overlay and gradient), keeping Strapi props. Remove the "Ver Actividades" button and the `ClientOnly`/`HeroImage` usage; delete `src/components/home/hero/ui/hero-image/`. Verify: hero shows Strapi title, description and cover at mobile and desktop widths.
3. Add the next-event data path: fetch the first event with `getEventList()` wrapped in try/catch (returns `undefined` on error or empty list) and pass it to `Hero` as `nextEvent`. Verify: `npm run build` passes and home still loads.
4. Render the next-event card (image, kicker, name, `eventDates` via `BlocksRenderer`, "Ver eventos →"), linking to `#event-list`; render nothing when `nextEvent` is undefined. Verify: card visible with events; hidden when the events fetch is forced to fail.
5. Responsive and polish pass: check widths 375, 768, 1280, 1920 against the prototype (grid wrap at ~420px column, heading clamp, hover lift). Run `npm run lint` and `npm run build`.

## Acceptance criteria

- [ ] The hero H1 text equals the Strapi Home `title`, and the description renders the Strapi Home `description` blocks.
- [ ] The background image is `/images/comteplacion.jpeg` (constant `HERO_IMAGE_MOBILE`) at viewport widths ≤768px (e.g. 375px) and the About Us image `/images/comunidad.jpeg` (`HERO_IMAGE`) above 768px (e.g. 1440px), switched with CSS only (no client JS, no `useDevice`).
- [ ] Hero `min-height` is `min(86vh, 760px)`, background `#2a2523`, with image opacity `.62` and the bottom gradient from the README.
- [ ] H1 uses `clamp(32px, 4.2vw, 60px)`, weight 800, and the font is Hanken Grotesk; no other section's font changes.
- [ ] The pill "Casa de la Anunciación · Brooklyn, NY" is shown above the H1.
- [ ] The "Ver Actividades" button no longer exists in the hero.
- [ ] The next-event card shows the first event's image, name and `eventDates`, and clicking it scrolls to `#event-list`.
- [ ] When `getEventList()` returns `[]` or throws, the home page returns HTTP 200, the hero renders, and no card is shown.
- [ ] On a 375px viewport the two columns stack (left content, then card) with no horizontal scroll.
- [ ] `src/components/home/hero/ui/hero-image/` no longer exists and nothing imports it.
- [ ] `npm run lint` and `npm run build` pass with no new errors.
- [ ] `getHomeInfo()` and the `HomeInfo` interface are unchanged.

## Decisions

- **Yes (changed during implementation):** the hero background is the About Us image `/images/comunidad.jpeg` (`HERO_IMAGE` in `src/constants/constant.ts`) at all sizes, as in the design. Replaces the earlier Strapi `cover` / `casa.jpeg` choices at the user's request. The `image` prop stays in the interface but is unused. This also sidesteps the dev-only `//uploads/` URL bug in `getHomeInfo()`.
- **Yes (changed at the user's request):** mobile/desktop image split, `/images/comteplacion.jpeg` at ≤768px and `/images/comunidad.jpeg` above. Implemented in CSS only (`<picture>` with a media-query `<source>`, or a media query), with no client JS, no `useDevice`, no hydration-only component. Replaces the earlier "No" on the split, which rejected the old client-side `HeroImage` approach.
- **Yes:** next-event card uses the first event from `getEventList()`. The `Events` data has no sortable date (`eventDates` is rich text), so "soonest" can't be computed; ordering is controlled in Strapi.
- **No:** parsing Spanish dates out of `eventDates`. Fragile.
- **No (for now):** adding a `startDate` field to Strapi. Requires CMS work outside this repo; can be its own spec.
- **Yes:** hide the card on empty or failed events. The hero must never fail because of events.
- **Yes:** remove the "Ver Actividades" button. The design has none; the card is the link to `#event-list`.
- **Yes:** Hanken Grotesk scoped to the hero only. The rest of the page is not redesigned yet; a site-wide change belongs to the final spec of the redesign.
- **Yes:** pill and card labels hardcoded in Spanish. The language toggle is out of scope and the site is Spanish.
- **Yes:** design tokens as CSS variables in the hero module. Avoids touching global styles before the redesign is complete.

## Risks

| Risk | Mitigation |
| ---- | ---------- |
| `getEventList()` is also called by `EventList`, so the page makes two events requests. | Accept for now (events request has no `revalidate: 0`); optionally dedupe later by passing events down from the page. |
| First event in Strapi may not be the soonest one. | Document that ordering is controlled in Strapi; a `startDate` field is a possible follow-up spec. |
| `eventDates` is rich text of unknown length and may overflow the card. | Clamp/truncate the card text (e.g. line clamp) in step 4. |
| Strapi `cover` may be low-resolution or have a light tone, hurting text contrast. | Gradient overlay from the design; check contrast of the white H1 against the real cover in step 5. |
| Image URLs: dev prefixes `STRAPI_HOST`, prod uses them as-is. In dev `getEventList()` built `//uploads/...` (HTTP 400), so the card image did not load. | Fixed during implementation in `src/actions/get-events.ts` (`${STRAPI_HOST}${graphic.url}`). `getHomeInfo()` has the same pattern but its `image` is no longer used by the hero, so it is left untouched. |

## What is **not** in this spec

- Header, nav, mobile menu, language toggle.
- Notices, events grid, weekly schedule, ministries, about, videos, footer sections.
- Strapi schema changes or new fetchers.
- Date-based event sorting.
- Site-wide font or color changes.

Each one of those, if it lands, goes in its own spec.
