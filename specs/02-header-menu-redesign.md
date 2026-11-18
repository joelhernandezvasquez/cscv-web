# SPEC 02 — Header and menu redesign

> **Status:** Approved
> **Depends on:** SPEC 01
> **Date:** 2026-11-18
> **Objective:** Rebuild the site header and its mobile and desktop menus to match the Brooklyn redesign, keeping the current menu items and dropdowns and adding an ES/EN toggle that translates the menu labels.

## Why this spec exists

The homepage is being redesigned section by section. SPEC 01 did the hero; the header is next. The design is an HTML prototype (`templates/CSCV Brooklyn Redesign.dc.html`, README section 1 "Header"), not code to copy. The prototype's menu has 6 flat anchor links, but the real site has dropdowns and pages that must keep working, so the visual design is applied to the current menu structure.

## Scope

**In:**

- Rewrite `src/components/main-header/` (`MainHeader.tsx` + `style.module.css`):
  - Sticky (`position: sticky; top: 0; z-index: 20`), background `rgba(251,248,244,.96)` + `backdrop-filter: blur(12px)`, 1px bottom border `#ebe2d7`.
  - Hanken Grotesk (already configured as `heroFont` in `src/config/font.plugin.ts`), applied only inside the header.
- Desktop (≥960px): logo `logoHeader.png` at 75×100px (`object-fit: contain`); top-level links 15px/600, ink, red `#c8161d` on hover, `white-space: nowrap`, 24px gap; ES/EN toggle on the right.
- Desktop dropdowns (Quiénes Somos, Ministerios, Actividades, Oración): open on hover, keyboard focus and click; white panel with 1px `#ebe2d7` border and 14px radius; close on outside click (reuse `useOutSideClick` from `src/hooks/useClickOutside.tsx`) and on Escape.
- Mobile (<960px): logo 48×64px, ES/EN toggle, and a 48×48 round white hamburger button (1px border) whose three bars animate into an X (0.2s). It opens a full-width panel below the header with stacked links (20px/700, 14px vertical padding, divider `#efe7dd`). The panel scrolls when taller than the viewport. It closes on link tap, on tapping the button again, and when the window is resized to ≥960px.
- Mobile submenus: accordion with a rotating chevron; only one open at a time.
- Mobile panel footer: Facebook (`https://www.facebook.com/cscvbrooklyn.org`) and YouTube (`https://www.youtube.com/@comunidadsiervosdecristovi8064`) icons with real links. The X and Instagram placeholder icons (both linked to `/`) are removed.
- ES/EN toggle: segmented pill on track `#efe7dd`; active segment ink with white text, inactive transparent with `#555a66` text; on mobile the segments are at least 40×38px.
  - Clicking sets the cookie `lang=es|en` (1 year, path `/`) and calls `router.refresh()`.
  - The header reads the cookie on the server (`cookies()` from `next/headers`) and renders menu labels in that language. Default is `es`.
  - Only header/menu labels are translated.
- Menu data: add optional `itemEn` to `MenuNavigation` and `SubItems` (`src/interfaces/navigation.ts`) and fill English labels in `src/constants/menuNavigation.ts`. Merge `menuNavigation` and `desktopMenuNavigation` into one array used by both menus (including Eventos → `#event-list`).
- New header pieces live under `src/components/main-header/ui/` (`desktop-nav`, `mobile-nav`, `lang-toggle`). Delete `src/components/desktop-menu/`, `src/components/mobile-menu/`, `src/components/toggle-mobile-menu/` and `src/components/dropdown-menu/` once nothing imports them.
- Add `scroll-margin-top` to `#event-list` equal to the header height (about 121px desktop, 81px mobile) so anchor links are not hidden under the sticky header.

**Out of scope (for future specs):**

- Translating anything outside the header (hero, sections, footer, Strapi content), `<html lang>` switching, `/en` routes. A later i18n spec extends the toggle.
- The design's 6 flat anchor links and the sections they point to (`#semana`, `#videos`, etc.).
- Footer redesign and the Donate button (the design has none).
- Building the pages behind `/construction` links.
- Site-wide font or color tokens.

## Data model

```ts
// src/interfaces/navigation.ts
export interface MenuNavigation {
  id: string;
  item: string;
  itemEn?: string;      // new
  hasSubmenu: boolean;
  link?: string;
  subItems?: SubItems[];
}

export interface SubItems {
  id: string;
  item: string;
  itemEn?: string;      // new
  link: string;
}

export type Lang = 'es' | 'en'; // new
```

Label rule: `lang === 'en' && itemEn ? itemEn : item`.
Persistence: cookie `lang` (`es` | `en`), 1 year, path `/`. No other storage.

## Implementation plan

1. Add `itemEn` and `Lang` to the interfaces; merge the two menu arrays into one and add English labels; point existing imports to it. Verify: `npm run build` passes and the current menu looks unchanged.
2. Header shell: new server `MainHeader` with sticky bar, logo sizes, Hanken Grotesk, 960px breakpoint, reading the `lang` cookie. Verify at 375px and 1280px.
3. Desktop nav with dropdowns (hover, focus, click, outside click, Escape). Verify with mouse and keyboard (Tab, Escape).
4. Mobile nav: hamburger → X button, panel, accordion, Facebook/YouTube footer, close rules (link tap, button tap, resize ≥960px). Verify at 375px.
5. ES/EN toggle: set cookie + `router.refresh()`; labels switch in both menus and persist after reload. Verify.
6. Delete the old menu components, add `scroll-margin-top`, run the responsive pass at 375, 768, 960, 1280 and 1920px, then `npm run lint` and `npm run build`.

## Acceptance criteria

- [ ] The header stays visible while scrolling, with the specified background, blur and border; its font is Hanken Grotesk and no other section's font changes.
- [ ] At 959px the hamburger shows and the desktop nav is hidden; at 960px the reverse.
- [ ] Desktop shows Home, Quiénes Somos, Ministerios, Eventos, Actividades, Multimedia, Oración and Contacto with the same targets as today.
- [ ] Desktop dropdowns open on hover, keyboard focus and click, and close on outside click and Escape.
- [ ] The mobile hamburger animates into an X; the panel closes on link tap, button tap and resize to ≥960px, and scrolls when taller than the viewport.
- [ ] Mobile submenus behave as an accordion, with only one open at a time.
- [ ] The mobile panel shows Facebook and YouTube with the real URLs and no X or Instagram icons.
- [ ] Clicking EN switches all header labels to English without a full page reload; after reloading the page they stay English (cookie `lang=en`); with no cookie the default is ES.
- [ ] Clicking "Eventos" scrolls so the events section heading is not covered by the header.
- [ ] `src/components/desktop-menu/`, `mobile-menu/`, `toggle-mobile-menu/` and `dropdown-menu/` no longer exist and nothing imports them.
- [ ] No horizontal scroll at a 375px viewport.
- [ ] `npm run lint` and `npm run build` pass with no new errors.

## Decisions

- **Yes:** keep the current menu items and dropdowns, restyled to the design. The design's anchors (`#semana`, `#videos`) point to sections that do not exist yet.
- **No:** use the design's 6 flat links. Would break links to existing pages and drop the submenus.
- **Yes:** the ES/EN toggle translates menu labels only. Translating the whole site touches many areas and gets its own spec.
- **No:** a visual-only toggle that does nothing.
- **Yes:** store the language in a cookie so the server renders the right language with no flash of Spanish.
- **No:** `localStorage`. It is client-only and would flash Spanish on load.
- **Yes:** 960px breakpoint, as in the design.
- **No:** keeping today's 1240px breakpoint.
- **Yes:** sticky header and Hanken Grotesk scoped to the header only (same approach as SPEC 01).
- **Yes:** accordion on mobile; hover + focus + click on desktop.
- **Yes:** keep Facebook and YouTube icons in the mobile panel with real URLs.
- **No:** keep the X and Instagram placeholder icons that linked to `/`.
- **Yes:** one merged menu array with an optional `itemEn` field as the single source of labels.
- **No:** a separate translation dictionary file for the menu.

## Risks

| Risk | Mitigation |
| ---- | ---------- |
| Reading `cookies()` in the header makes every route dynamic (`/historia` and others lose static rendering). | Accept for now (home is already dynamic); revisit in the i18n spec. |
| Hover dropdowns do not work on touch laptops. | Click also toggles them. |
| Long English labels may not fit at 960px. | `white-space: nowrap` plus a check at 960px in step 6; reduce the gap if needed. |
| The sticky header covers anchor targets. | `scroll-margin-top` on `#event-list`. |
| The merged menu array could change which links appear on mobile versus desktop. | Acceptance criterion lists the exact desktop items; compare against both old arrays in step 1. |

## What is **not** in this spec

- Translating content outside the header, `<html lang>` switching or `/en` routes.
- The design's anchor-based nav and the sections it targets.
- Footer redesign, Donate button.
- Pages behind `/construction` links.
- Site-wide font or color changes.

Each one of those, if it lands, goes in its own spec.
