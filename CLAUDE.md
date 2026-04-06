# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sumi** is a concept "window front" website for a fictional sushi restaurant ("Omakase Gävle"), built as a SamurajStudio starter-tier showcase. It is a static multi-page Next.js site — no backend, no CMS, no ordering system.

## Planned Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Google Fonts** (Playfair Display + Inter) via `<link>` in `index.html`
- **shadcn/ui** for base components (Button, Dialog, Sheet, etc.)
- Static site — no backend, no CMS, no ordering system

> The Next.js application has not been scaffolded yet. The repo currently contains only specs, data, and optimized assets. The first step is `npx create-next-app@latest . --typescript --tailwind --app`.

## Commands

```bash
npm run dev       # start dev server at localhost:3010
npm run build     # production build
npm run preview   # preview production build
npm run lint      # ESLint
```

## Data Sources

All content is driven by two files — treat them as the single source of truth:

- **`data/restaurant.json`** — restaurant name, copy, menu items, prices, contact, hours, CTA text, SEO metadata, asset paths. `menu.sections` drives both the full menu page and the menu modal.
- **`data/image-manifest.json`** — canonical mapping of layout roles to production AVIF/WebP asset paths with responsive size sets

Never hardcode copy, prices, addresses, or image paths in components. Import from these JSON files.

## Asset Rules

- `public/images/` — **production content images** (AVIF primary, WebP fallback)
- `public/brand/` — logo mark variants (`sumi-mark-{32|48|64|96|128|160}.{png|webp}`)
- `public/icons/` — browser/device icons and `site.webmanifest`
- `public/backup/` — **archival only**, never reference from UI code

Default navbar logo: `/brand/sumi-mark-64.png`

To regenerate optimized images from source PNGs (requires `sharp-cli`):
```bash
bash scripts/optimize-images.sh
```

## Page Structure

| Page | Route | Sections |
|------|-------|----------|
| **Home** | `/` | Navbar → Hero → About → Menu Highlights (3 cards) → Reserve CTA → Visit → Footer |
| **Full Menu** | `/menu` | Navbar → Header Banner → Menu Categories → Reserve CTA → Footer |

**Navigation Pattern:** Card-based navigation. Three featured menu cards on the landing page act as appetizing entry points. "View Full Menu" navigates to `/menu` for the complete menu. This keeps the landing page scannable while giving interested visitors a dedicated page.

Planned component files: `navbar.tsx`, `hero.tsx`, `about.tsx`, `menu.tsx`, `menu-card.tsx`, `menu-page.tsx`, `reserve-cta.tsx`, `visit.tsx`, `footer.tsx` under `src/components/`.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background deepest | `#0B0B0D` | Page base, Hero, Visit |
| Background raised | `#15181C` | Cards, Reserve CTA |
| Text primary | `#F5F1EA` | Headlines |
| Text secondary | `#9CA3AF` | Body, descriptions |
| Accent | `#A63A3A` | CTAs, links, highlights |
| Accent hover | `#C44545` | Button hover |

Typography: `Playfair Display` (headings, weight 400) + `Inter` (body/UI). Hero H1: 96px desktop → 48px mobile.

## Brand Tone

Sumi is calm, precise, and restrained. All copy, component styling, and UX decisions should favor understatement over performance, elegance over trendiness, and atmosphere over gimmicks. If a design choice feels flashy, noisy, or mass-market — it is wrong for this brand.

## Image Delivery

Use `<picture>` elements or Next.js `Image` with AVIF sources + WebP fallback. The hero image should be `priority` (eager load); everything else lazy. Use `data/image-manifest.json` for all `srcset` construction. Sizes per role:

- Hero: `768w / 1280w / 1920w`
- About: `640w / 960w / 1280w`
- Menu banner: `768w / 1280w / 1600w`
- Menu cards: `480w / 768w / 960w`

## Animation

Use Framer Motion. Keep motion subtle: fade-in + slide-up on scroll entry, staggered card reveals (50ms between), hero image slow zoom (`scale 1.0 → 1.05` over 20s). Always respect `prefers-reduced-motion`. Animate only `transform` and `opacity`.
