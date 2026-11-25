# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — `next lint` (ESLint with `next` config)

No test framework is configured.

## Architecture

Next.js 14 App Router (TypeScript, CSS Modules, React 18) frontend for the Comunidad Siervos de Cristo Vivo (CSCV) website. Content is in Spanish. Content is served by a headless **Strapi** CMS; the `cms/` directory is empty (Strapi lives elsewhere).

- **Path alias:** `@/*` → `src/*`.
- **Data fetching:** `src/actions/get-*.ts` are server-side fetchers that call `${STRAPI_HOST}/api/<collection>?populate=*` with `Authorization: Bearer ${STRAPI_TOKEN}`. Response shapes are typed in `src/interfaces/`. Follow this pattern for new Strapi collections.
- **Environment:** `.env.local` defines `STRAPI_HOST` / `STRAPI_TOKEN` plus `*_PROD` variants. The actions read only the non-`_PROD` names. In development, media URLs from Strapi are relative and get prefixed with `STRAPI_HOST` (see `IsCurrentEnvironmentDevelopment()` in `src/util/getCurrentEnvironment.ts`); in production they are used as-is.
- **Rich text:** Strapi blocks content is rendered with `@strapi/blocks-react-renderer` (types in `src/interfaces/block.ts`).
- **Navigation:** Menus are static data in `src/constants/menu*.ts` (typed by `src/interfaces/navigation.ts`), consumed by `main-header`, `desktop-menu`, `mobile-menu`, and `dropdown-menu`. New pages must be added here to appear in the nav; unbuilt pages link to `/construction`.
- **Layout:** `src/app/layout.tsx` wraps all pages with `MainHeader` and `Footer` and holds the site-wide metadata.
- **Pages/components:** Routes live in `src/app/<route>/page.tsx` with a colocated `style.module.css` (e.g. `historia`, `fundadores`, `course/[slug]`). Home-page sections are in `src/components/home/`; reusable pieces in `src/components/ui/`. Static images go in `public/images/`.

## Home page redesign

The home page is being rebuilt section by section from `templates/CSCV Brooklyn Redesign.dc.html` (`templates/README.md` describes each section). The design is a prototype, not code to copy: recreate it in the existing patterns.

- **Order on `src/app/page.tsx`:** Hero, Avisos (`#avisos`), Events (`#event-list`), Cada semana (`#semana`), Ministerios (`#ministerios`), Nosotros (`#nosotros`), Evento más reciente (`#evento-reciente`). The Videos section (README section 9) is not built yet.
- **Section conventions** (followed by every redesigned section):
  - Hanken Grotesk via `heroFont` from `src/config/font.plugin.ts`, applied to that section only.
  - Design tokens are CSS variables scoped to the section's module (e.g. `--about_ink`, `--recent_red`), not global.
  - Container `max-width: 1280px`, padding `96px 24px`.
  - `scroll-margin-top` is 117px, and 121px from 960px, so anchors clear the sticky header.
  - Section headings and kickers are hardcoded Spanish copy. Only collection content (events, ministries, carismas, event images) comes from Strapi. The SPEC 02 language toggle covers the header only.
  - Sections that read Strapi data are async server components. `RecentEvent` hides itself (returns `null`) if its fetch fails or has no data.
- **Static data in `src/constants/`:** `notices.ts` (Avisos flyers), `weekly-schedule.ts` (Cada semana), `ministry-times.ts` (Strapi ministry slug to the time pill text).
- **Header:** `main-header` has a Spanish/English toggle (`ui/lang-toggle`) with `desktop-nav` and `mobile-nav` (SPEC 02). The toggle covers the header only, not page sections.
- **Unused but kept:** `src/components/media/` (old event video block, removed from the home page by SPEC 09), `src/components/home/weekly-activities/` (with `src/actions/get-weekly-activities.ts`), `src/components/ui/carismas-card/` and `src/components/ui/activity-card/` are not rendered on the home page. They stay on disk for future specs (the Videos spec may reuse `media`). Don't delete them without a spec.
- **Recent event gallery:** `RecentEvent` uses the first `event-images` entry from Strapi (`getEventImages()`). Its gallery is 3 square columns from 600px and one full-width column below 600px (SPEC 10). Its H2 is the entry's `eventName`, so the headline changes with the CMS.

## Spec workflow

Work is driven by specs in `specs/NN-slug.md` (numbered, written in English, status `Draft` then `Approved` then `Implemented`).

- `/spec <description>` writes a new spec. It asks clarifying questions first and never writes code.
- `/spec-impl NN-slug` implements an `Approved` spec on branch `spec-NN-slug`, one plan step at a time, pausing after each. Only a human changes a spec's status to `Approved`.
- `specs/.spec-config.yml` sets `AutoCreateBranch` (true) and `AutoCommitSteps` (false). With the default, nothing is committed until the user asks.
- Implement what the spec says. A change of scope goes into a new spec, not into the code.
- Existing specs: 01 hero, 02 header/menu, 03 notices, 04 upcoming events, 05 weekly schedule, 06 ministries, 07 about, 08 recent event, 09 remove old Media block, 10 recent event mobile gallery.
