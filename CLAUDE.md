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
