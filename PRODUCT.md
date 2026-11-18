# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Members of the Comunidad Siervos de Cristo Vivo (CSCV) in Brooklyn and newcomers considering a visit. Mostly Spanish-speaking Catholics, often on phones. They come to find the next event, the weekly schedule, ministries and videos, contact details, or to learn who the community is before attending.

## Product Purpose

The public website of the CSCV, a private association of Catholic faithful founded on 28 November 1982 in the Dominican Republic, here served from the Casa de la Anunciación, 207 Hendrix Street, Brooklyn, NY. It tells visitors what the community is, what is happening, and how to join in. Success: a visitor finds the next event or weekly activity and knows how to show up.

## Positioning

The site of one specific parish-rooted community (prayer, adoration of the Blessed Sacrament, evangelization, the legacy of Padre Emiliano Tardif), not a generic church template.

## Operating Context

Content is edited by the community in a headless Strapi CMS (events, notices, ministries, weekly activities, home copy). The site is a Next.js 14 App Router frontend that reads from it. A homepage redesign is under way section by section, specified in `templates/` (README.md plus the HTML prototype); the hero is the first section done (see `specs/01-home-hero-redesign.md`).

## Capabilities and Constraints

- Content owned by the CMS (events, notices, ministries, weekly schedule, videos, home title/description/cover) must stay CMS-driven, not hardcoded.
- Language: Spanish is primary. An ES/EN toggle is planned in the redesign prototype but is not built; its English copy was machine-written and needs native review before shipping.
- No donation button or donation call to action (removed on request in the redesign handoff).
- Navigation is static data in `src/constants/menu*.ts`; unbuilt pages link to `/construction`.
- Undecided: the site-wide font and global color tokens (currently scoped to the redesigned hero only), and how the rest of the homepage is redesigned.

## Brand Commitments

- Name: Comunidad Siervos de Cristo Vivo; place: Casa de la Anunciación · Brooklyn, NY.
- Logo red and gold are the binding palette; the redesign handoff (`templates/README.md`) fixes tokens (red `#c8161d`, gold `#f5b335`, ink `#2a2523`) and the Hanken Grotesk typeface.
- Tone is reverent and warm, never commercial.
- Footer credit: "Desarrollado con ❤ por Joel Hernandez".

## Evidence on Hand

- Real photos and flyers in `public/images/` and in Strapi media; logos `public/images/logoHeader.png`, `logoFooter.png`.
- Contact: cscvbrooklyn@gmail.com, (718) 647-1017, Facebook and YouTube channels.
- Not available, must not be invented: testimonials (the section is disabled in code), attendance numbers, donation figures.

## Product Principles

1. The next thing to attend is always easy to find, on a phone first.
2. Content belongs to the community and flows from the CMS; the design adapts to what editors publish.
3. Reverent, warm voice; no marketing hype or invented proof.
4. Spanish first; English is added deliberately, not machine-translated and left.
5. Redesign in small, specified steps without breaking the live site.
