---
name: CSCV Brooklyn
description: A warm, reverent, photo-led community site in logo red and gold on ink, with big heavy type and soft pill shapes.
colors:
  red: "#c8161d"
  gold: "#f5b335"
  gold-light: "#ffd27a"
  red-tint: "#ffe1d6"
  ink: "#2a2523"
  ink-line: "#453d3a"
  ink-border: "#5a514d"
  body: "#555a66"
  muted: "#8a8f99"
  text-on-dark: "#e9eaee"
  page-bg: "#fbf8f4"
  cream: "#f5eee6"
  sand: "#efe7dd"
  border: "#ebe2d7"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(32px, 4.2vw, 60px)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 60px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    letterSpacing: "0.1em"
rounded:
  pill: "999px"
  card-lg: "24px"
  card: "20px"
  tile: "18px"
  badge: "14px"
spacing:
  container: "1280px"
  gutter: "24px"
  section: "80px"
  gap: "40px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  pill-frosted:
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  event-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    width: "420px"
---

# Design System: CSCV Brooklyn

## Overview

**Creative North Star: "The Open Door"**

The site is a threshold. A visitor, usually on a phone, arrives and sees the community's own faces first, under a dark ink wash, and the next thing to attend one tap away. It is reverent and confident: big, heavy type states who the community is without hype, and the warmth comes from real photography and from logo red and gold, not from decoration.

The system is flat. Depth comes from photos, dark ink sections and thin warm borders, never from shadows. Shapes are soft and sized for thumbs: pills for actions and labels, generously rounded cards for content.

This document describes the redesign handoff (`templates/README.md` and the prototype) and the hero that ships it. Other sections of the homepage are not yet redesigned and still carry the older Quicksand look.

**Key Characteristics:**
- Photo-led, ink-grounded hero with a bottom gradient.
- Heavy Hanken Grotesk (800) with tight negative tracking for headings.
- Red is the action color, gold is its hover on dark.
- Pills and 20-24px rounded cards; no shadows.
- Responsive by grid wrapping, not breakpoints.

## Colors

Logo red and gold on warm ink and cream neutrals. Warm neutrals are tinted toward the red-brown of the logo, never pure gray.

### Primary
- **Candle Red** (#c8161d): buttons, links, kickers on light backgrounds, the weekly band. The single action color.

### Secondary
- **Altar Gold** (#f5b335): hover color on dark backgrounds and kickers on dark.
- **Pale Gold** (#ffd27a): day names and small highlights on red.
- **Blush Tint** (#ffe1d6): secondary text on red.

### Neutral
- **Warm Ink** (#2a2523): primary text, dark sections, the hero ground.
- **Ink Line** (#453d3a) and **Ink Border** (#5a514d): dividers and outline buttons on dark.
- **Slate Body** (#555a66): paragraph text on light.
- **Mist Gray** (#8a8f99): labels and meta text.
- **Moonlit Text** (#e9eaee): paragraph text on the dark hero.
- **Parchment** (#fbf8f4): page background.
- **Cream** (#f5eee6) and **Sand** (#efe7dd): notice and about backgrounds, toggle tracks, inner dividers.
- **Warm Border** (#ebe2d7): card borders and header rule.
- **White** (#ffffff): cards.

### Named Rules
**The One Action Rule.** Red is the only action color. Gold appears as hover or kicker on dark, never as a second button color on light.
**The Warm Neutral Rule.** Every neutral leans warm toward the logo; no cool or pure gray surfaces.

## Typography

**Display Font:** Hanken Grotesk (with system-ui, sans-serif)
**Body Font:** Hanken Grotesk (same family, lighter weights)

**Character:** One family at weights 400-800. Hierarchy comes from size and weight contrast, not from a second typeface. Headings are heavy and tightly tracked; body is calm and open.

### Hierarchy
- **Display** (800, clamp(32px, 4.2vw, 60px), 0.96): the hero H1. Reduced from the handoff's 44-92px at the owner's request.
- **Headline** (800, clamp(36px, 4.4vw, 60px), 1): section H2s in the handoff.
- **Title** (800, 22px, 1.2): card titles such as the event name.
- **Body** (400, 19px on dark hero, 1.55; 15-17px elsewhere): max-width 560px in the hero.
- **Label** (800, 12px, 0.1em, uppercase): card kickers like "Próximo evento".

### Named Rules
**The Heavy and Tight Rule.** Headings are weight 800 with negative tracking (-0.03 to -0.035em); body never goes below 400.

## Layout

A centered container (max-width 1280px, 24px gutters) on a CSS grid built from `repeat(auto-fit, minmax(min(100%, Xpx), 1fr))`, so columns wrap on their own and only the header uses a breakpoint. The hero is full-bleed, `min-height: min(86vh, 760px)`, content bottom-aligned with `120px 24px 56px` padding and a 40px column gap. Section vertical padding is 80-96px. Photos sit under a dark gradient so white text stays legible.

## Elevation & Depth

Flat. No shadows anywhere. Depth is created by photography, dark ink sections against light cream, 1px warm borders, and a gradient (`linear-gradient(180deg, rgba(42,37,35,0) 30%, rgba(42,37,35,.85) 100%)`) over the hero photo. State change is a small lift.

### Named Rules
**The Flat-By-Default Rule.** Surfaces carry no shadow. Hover lifts a card 2-3px (`translateY`) and nothing else.

## Shapes

Soft and tappable. Pills (999px) for buttons and labels; 24px for event cards, 20px for ministry, pillar and notice cards and the hero event card, 18px for tiles and video frames, 14px for gallery images and the date badge. The frosted pill uses `rgba(255,255,255,.14)` with a 6px blur.

## Components

### Buttons
- **Shape:** full pill (999px).
- **Primary:** Candle Red fill, white text, 13px 26px, 14-15px/700.
- **Hover:** fill swaps (ink to red on light; red to gold on dark), with a 200ms ease.

### Frosted Pill
A small label over the photo: 13px/600 white on `rgba(255,255,255,.14)` with backdrop blur. Used for "Casa de la Anunciación · Brooklyn, NY".

### Event Card (hero)
- **Corner Style:** 20px. White background, ink text, max-width 420px.
- **Layout:** image on top at 16:9 (event flyers are landscape), then text; text padding 20px; gap 6px.
- **Type:** red 12px/800 uppercase kicker, 22px/800 title, 15px Slate Body dates, 14px/700 "Ver eventos →".
- **State:** lifts 2px on hover. Links to `#event-list`. Hidden when there is no event.

## Do's and Don'ts

### Do:
- **Do** use Candle Red (#c8161d) for every primary action and Warm Ink (#2a2523) for dark grounds.
- **Do** keep headings at weight 800 with negative tracking.
- **Do** let photos carry warmth and place white text only over the ink gradient.
- **Do** size touch targets for thumbs: pills and generous card padding.

### Don't:
- **Don't** add shadows; use borders, photos or ink sections for depth.
- **Don't** add a donation button or call to action.
- **Don't** introduce cool or pure gray neutrals, or a second action color.
- **Don't** invent testimonials, numbers or other proof.
