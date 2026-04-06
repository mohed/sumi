# Sumi — Concept Site

A starter-tier "window front" website concept for **SamurajStudio**.

## Goal

Create a visually striking **multi-page website** for a small sushi restaurant. The purpose is to showcase what SamurajStudio can deliver in the **starter tier**: a polished, high-conversion digital storefront for local businesses that need a beautiful online presence without custom backoffice systems.

---

## Concept Summary

**Working concept:** a small sushi place with a premium, modern, welcoming feel.

This should feel like:
- high quality
- intimate
- elegant
- appetizing
- mobile-friendly
- fast and easy to maintain

Not a large restaurant platform. Not an app. Not online ordering.
This is a **brand-forward showcase site** with a landing page + dedicated menu page.

---

## Page Structure

| Page | Route | Purpose |
|------|-------|---------|
| **Home** | `/` | Landing page with hero, about, menu highlights (cards), CTA, visit info |
| **Full Menu** | `/menu` | Dedicated menu page showing complete offerings |

The "View Full Menu" button on the landing page navigates to `/menu` instead of opening a modal.

---

## Design Spec

### 1. Positioning

This site should communicate:
- "This place is worth visiting"
- "The food looks amazing"
- "The experience feels premium"
- "Everything important is easy to find"

It should work especially well for:
- local restaurants
- cafés
- bakeries
- salons
- barbers
- clinics
- other small businesses that mainly need a beautiful front-facing site

---

### 2. Visual Direction

**Style:** modern Japanese minimalism with warmth

**Mood keywords:**
- dark
- refined
- cinematic
- handcrafted
- calm
- premium

**Visual inspiration:**
- charcoal / black base
- warm wood tones
- subtle red accents
- soft lighting
- elegant spacing
- large food photography

---

### 3. Color Palette

Suggested palette:
- **Background:** deep charcoal / near-black
- **Surface:** dark slate
- **Primary accent:** muted crimson or warm red
- **Secondary accent:** soft gold / warm beige
- **Text primary:** off-white
- **Text secondary:** muted gray

Example direction:
- `#0B0B0D`
- `#15181C`
- `#A63A3A`
- `#D6B98C`
- `#F5F1EA`
- `#9CA3AF`

---

### 4. Typography

Typography should feel clean and premium.

Suggested pairing:
- **Headings:** elegant serif or refined display font
- **Body/UI text:** modern sans-serif

Possible options:
- Headings: Cormorant Garamond / Playfair Display
- Body: Inter / Manrope / Plus Jakarta Sans

Rules:
- large, dramatic hero headline
- clean readable menu typography
- generous whitespace
- avoid overly decorative "fake Japanese" fonts

---

### 5. Layout Structure

Single-page layout with clear scrolling sections.

#### Hero Section
Purpose: immediate emotional impact

Include:
- strong restaurant name/logo
- short value proposition
- hero image of sushi platter or chef-crafted dish
- primary CTA: `View Menu`
- secondary CTA: `Visit Us` or `Reserve a Table`

Sample messaging:
- "Handcrafted sushi. Quiet atmosphere. Memorable evenings."
- "Fresh ingredients. Thoughtful presentation. Local favorite."

#### About / Story Section
Purpose: create trust and personality

Include:
- short brand story
- focus on freshness, craftsmanship, and atmosphere
- optional chef or restaurant philosophy note

#### Menu Highlights Section
Purpose: show the offering clearly

Include:
- featured rolls
- sashimi / nigiri
- omakase set
- drinks or tea
- pricing samples

Design notes:
- three strong visual cards anchored by real photography
- strong hierarchy between category, item, description, price
- dedicated hero-style menu banner above the cards
- the omakase set should feel like the premium centerpiece

#### Experience / Gallery Section
Purpose: sell the vibe

Include:
- 3–6 imagery blocks
- food closeups
- interior atmosphere
- plating detail

#### Visit Section
Purpose: conversion

Include:
- address
- opening hours
- phone number
- map embed or map link
- reservation CTA

#### Footer
Include:
- logo/name
- social links
- address
- contact details
- copyright

---

### 6. UX Principles

The site should be:
- mobile-first
- fast-loading
- simple to navigate
- easy to scan
- visually rich without becoming cluttered

Important UX rules:
- sticky navigation on scroll
- CTA visible early
- menu section easy to skim on mobile
- high contrast for accessibility
- minimal animation, but tasteful

---

### 7. Motion & Interaction

Animation should feel smooth and understated.

Use:
- soft fade-ins
- slight image parallax or reveal
- subtle hover states on menu cards/buttons
- smooth scroll between sections

Avoid:
- flashy effects
- heavy animation libraries unless justified
- anything that slows down page load

---

### 8. Photography Direction

Photography is central to the concept.

Image style should be:
- dark and moody
- high contrast
- premium food styling
- close-up texture shots
- warm highlights
- clean plating with intentional negative space

Confirmed asset direction:
- **Hero source:** `public/backup/source-images/5-maki-rolles-on-black-platter.png`
- **About source:** `public/backup/source-images/assorted-sushi-on-marble-platter-wood-table.png`
- **Menu banner source:** `public/backup/source-images/tuna-salmon-ika-nigiri-round-platter.png`
- **Menu card source:** `public/backup/source-images/vibrant-salmon-sushi-rolls-on-dark-wood.png`
- **Menu card source:** `public/backup/source-images/nigri-closeup-in-varied-plate.png`
- **Menu card / premium centerpiece source:** `public/backup/source-images/omakase-set-assorted-rectangular-plate.png`
- **Logo mark source:** `public/backup/source-icons/sumi-icon.png`

Optimized production assets now exist under `public/images/`, `public/brand/`, and `public/icons/`.
Use those production files in the site and treat everything under `public/backup/` as archived source material only.

What the new omakase image changes:
- it gives us a proper premium third card instead of a placeholder
- it reinforces a curated, chef-led feel
- it makes the menu section feel complete and more believable as a real restaurant site

Need at least:
- one strong hero image
- 4–6 supporting menu/detail images

---

### 9. Brand Feel

This should feel like a business SamurajStudio could confidently pitch as:
- elegant
- modern
- conversion-aware
- premium but approachable
- designed for small businesses that want to look expensive

---

## Brand Identity Direction

This section is the brand guidance a developer or design agent should treat as **intentional product direction**, not filler copy.

### Primary Brand Choice

**Name:** `Sumi`

**Why this name:**
- short and memorable
- elegant rather than trendy
- Japanese-inspired without feeling cliché
- visually strong in a premium serif wordmark
- fits the calm, dark, refined visual system already defined for the site

### Brand Soul

Sumi should feel like:
- calm, not flashy
- precise, not cold
- premium, but not stiff
- intimate, not cramped
- welcoming, but not casual-fast-food
- craft-led, but not pretentious

Working emotional framing:

> A quiet sushi place in central Gävle for people who want one good hour at the end of the day.

This means the site should communicate:
- thoughtful atmosphere
- careful preparation
- low-stress hospitality
- strong aesthetic taste
- a small but special local destination

### Brand Promise

> Carefully prepared sushi in a calm setting, right in the city.

### Tone of Voice

All UI copy, section headings, and marketing text should feel:
- restrained
- warm
- confident
- concise
- tasteful

Avoid:
- hype-heavy copy
- loud luxury language
- nightclub energy
- generic "fusion experience" wording
- exaggerated claims

Good copy should sound like:
- composed
- clear
- crafted
- slightly editorial

### Positioning Guidance

Sumi is **not**:
- a conveyor-belt sushi chain
- a fast-food takeaway brand
- a loud nightlife concept
- a techy restaurant startup
- an over-designed luxury brand

Sumi **is**:
- a small premium sushi restaurant
- a warm modern local destination
- a place for lunch that feels elevated
- a place for evenings that feel intentional
- a believable independent restaurant in central Gävle

### Visual Translation for Implementation

A developer/designer implementing the site should translate the brand soul into:
- generous spacing
- dark surfaces with warm contrast
- restrained typography
- minimal decorative elements
- strong food photography
- subtle motion only
- premium-feeling CTAs without aggressive styling

The interface should feel:
- quiet
- high taste
- easy to trust
- slightly editorial

### Logo / Wordmark Direction

Default logo treatment should be simple:
- wordmark only: `Sumi`
- serif heading font or refined custom type treatment
- optional small sublabel beneath:
  - `SUSHI & OMAKASE`
  - or `GÄVLE`

Do not invent:
- fake Japanese brush fonts
- mascot graphics
- overcomplicated crests
- decorative symbols unless they are extremely subtle

### Brand Story Seed

Use this as the narrative base for future copywriting:

> In the middle of Gävle, Sumi offers a quieter kind of dining experience — one built on precision, balance, and warmth.
>
> The menu is focused rather than endless. The room is calm rather than crowded. Every dish is prepared with attention to texture, temperature, and presentation.
>
> Sumi is for lunch that feels elevated, and evenings that deserve a little more care.

### Developer AI Instructions

When generating copy, UI, or component styling for this project:
- prefer understatement over performance
- prefer elegance over trendiness
- prefer clarity over feature density
- prefer atmosphere over gimmicks
- preserve the feeling of a small, carefully run restaurant

If a design or content choice feels flashy, noisy, over-branded, or too mass-market, it is probably wrong for Sumi.

## Feature Scope

### In Scope
- landing page
- hero section
- restaurant story
- menu preview
- gallery
- contact / visit block
- responsive design
- simple CTA flow
- polished transitions

### Out of Scope
- online ordering
- account system
- CMS setup
- reservation backend
- payment integration
- admin dashboard
- multilingual support for v1

---

## Tech Stack

This is a concept site, so the stack should optimize for:
- speed
- beauty
- maintainability
- easy deployment

### Recommended Stack

#### Frontend
- **Next.js**
- **React**
- **TypeScript**

Why:
- fast development
- excellent component model
- easy deployment
- good SEO defaults
- scalable if the starter concept grows later

#### Styling
- **Tailwind CSS**

Why:
- fast visual iteration
- easy to keep a premium design system consistent
- ideal for landing pages and marketing sites

#### UI / Animation
- **Framer Motion** for subtle animations

Why:
- polished motion
- easy section reveals and hover interactions
- enough power without overengineering

#### Icons
- **Lucide React**

#### Fonts
- **next/font** with Google fonts or carefully selected web fonts

#### Images
- Next.js `Image` component
- optimized local assets or high-quality licensed stock during concept phase

#### Deployment
- **Vercel**

Why:
- quickest deployment path
- ideal for frontend showcase sites
- simple previews

---

## Planned Content-to-Image Mapping

| Section | Source Image | Default Optimized Asset |
|---------|--------------|-------------------------|
| Hero | `public/backup/source-images/5-maki-rolles-on-black-platter.png` | `/images/hero/hero-1280.avif` |
| About | `public/backup/source-images/assorted-sushi-on-marble-platter-wood-table.png` | `/images/about/about-960.avif` |
| Menu banner | `public/backup/source-images/tuna-salmon-ika-nigiri-round-platter.png` | `/images/menu/menu-banner-1280.avif` |
| Menu card 1 | `public/backup/source-images/vibrant-salmon-sushi-rolls-on-dark-wood.png` | `/images/menu/menu-card-rolls-768.avif` |
| Menu card 2 | `public/backup/source-images/nigri-closeup-in-varied-plate.png` | `/images/menu/menu-card-nigiri-768.avif` |
| Menu card 3 | `public/backup/source-images/omakase-set-assorted-rectangular-plate.png` | `/images/menu/menu-card-omakase-768.avif` |
| (Removed — using dedicated menu page instead of modal) | — | — |
| Reserve CTA | no image, solid dark conversion section | — |
| Visit / Contact | no image, clean information section | — |

This gives the page a strong rhythm:
- **full-bleed impact** in the hero
- **editorial craft** in the about section
- **structured abundance** in the menu banner
- **three concrete food offers** in the menu grid
- **quiet clarity** in the conversion and contact sections

## Image Delivery Strategy

The site should ship with **responsive AVIF first, WebP fallback**.

Chosen output sizes by layout role:
- **Hero:** `768`, `1280`, `1920`
- **About:** `640`, `960`, `1280`
- **Menu banner:** `768`, `1280`, `1600`
- **Menu cards:** `480`, `768`, `960`

Why this split:
- the hero needs the largest ceiling because it fills the viewport
- the menu banner is wide but not as demanding as the hero
- the about image sits inside a two-column layout
- the menu cards are compact and should stay very light

Implementation note:
- use `/data/image-manifest.json` and `data/restaurant.json` as the source of truth for asset paths
- do **not** wire anything from `public/backup/` into the production UI
- use `/brand/sumi-mark-64.png` as the default navbar logo mark
- use `/icons/favicon/favicon-32x32.png`, `/icons/apple-touch-icon.png`, and `/site.webmanifest` for site icon metadata

## Public Asset Structure

This structure is now intentional and should be preserved:

```txt
public/
  backup/
    source-images/      # original food/source PNGs
    source-icons/       # original sumi icon source
    windows-metadata/   # archived :Zone.Identifier files
  images/
    hero/               # production hero AVIF/WebP variants
    about/              # production about AVIF/WebP variants
    menu/               # production menu/banner/card AVIF/WebP variants
    (removed menu-modal/ — using dedicated /menu page instead)
  brand/
    sumi-mark-32|48|64|96|128|160.(png|webp)
  icons/
    apple-touch-icon.png
    icon-192.png
    icon-512.png
    favicon/
      favicon-16x16.png
      favicon-32x32.png
      favicon-48x48.png
  site.webmanifest
```

Rules:
- `public/backup/` is archival only
- `public/images/` is for production content imagery
- ~~`public/images/menu-modal/`~~ (removed — using dedicated `/menu` page instead of modal)
- `public/brand/` is for the logo mark used inside the UI
- `public/icons/` is for browser/device icons

## Suggested File / Component Structure

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    navbar.tsx
    hero.tsx
    story.tsx
    menu-highlights.tsx
    gallery.tsx
    visit-us.tsx
    footer.tsx
  data/
    menu.ts
  lib/
    constants.ts
public/
  images/
```

---

## Content Model

### Core Content Needed
- restaurant name
- short tagline
- about text
- menu categories
- menu items with prices
- address
- phone number
- opening hours
- social links
- photo assets

---

## Success Criteria

This concept succeeds if:
- it looks premium at first glance
- the food visuals carry the experience
- the menu section feels complete with three believable featured offers
- the optimized images and icon system keep the page fast without sacrificing the premium look
- the logo mark feels quiet, distinctive, and integrated into the brand
- the site feels believable as a real client project
- it clearly demonstrates the SamurajStudio starter tier offer
- it works beautifully on mobile

---

## SamurajStudio Starter Tier Framing

This project should represent the kind of website SamurajStudio can offer as a **starter-tier window front website**:
- beautiful landing page
- clear business information
- strong first impression
- lightweight and affordable
- fast turnaround

A potential offer framing could be:
- one-page premium website
- mobile optimized
- menu/services section
- contact and visit info
- deployed and ready to share

---

## Next Step

Build the first version as a polished concept prototype with:
1. homepage structure
2. visual system
3. sample menu content
4. strong imagery
5. smooth motion and responsive layout
