# Samuraj Sushi — Layout Specification (Revised)

Single-page layout using full-size production assets.

---

## Available Assets

| File | Dimensions | Style | Assigned To |
|------|------------|-------|-------------|
| `5-maki-rolles-on-black-platter.png` | 2550x1664 | Dark, dramatic, cinematic | **Hero background** |
| `tuna-salmon-ika-nigiri-round-platter.png` | 2520x1664 | Elegant variety, balanced | **Menu section header** |
| `vibrant-salmon-sushi-rolls-on-dark-wood.png` | ~2500x1664 | Warm, colorful, appetizing | **Menu card 1** |
| `nigri-closeup-in-varied-plate.png` | 2528x1684 | Detail, texture, craft | **Menu card 2** |
| `assorted-sushi-on-marble-platter-wood-table.png` | ~2500x1664 | Premium, approachable | **About section** |
| `omakase-set-assorted-rectangular-plate.png` | 2390x1792 | Clean, curated, premium centerpiece | **Menu card 3** |

**Production rule:** these PNGs now live under `/public/backup/source-images/` as source masters only. The real site should use the responsive AVIF/WebP outputs in `/public/images/`.

---

## Section Layouts

### Section 1: Hero

**Purpose:** Immediate premium impact. Establish darkness and quality.

**Image:** `5-maki-rolles-on-black-platter.png`
- Dark slate surface, dramatic side lighting
- Maki rolls in precise arrangement
- Perfect for full-bleed hero

**Structure:**
```
┌─────────────────────────────────────────┐
│                                         │
│     [Full-bleed background]             │
│     5-maki-rolles-on-black-platter      │
│                                         │
│     ┌─────────────────────────────┐    │
│     │                             │    │
│     │        OMAKASE              │    │
│     │                             │    │
│     │  Handcrafted sushi.         │    │
│     │  Intimate atmosphere.       │    │
│     │                             │    │
│     │  [View Menu] [Reserve]      │    │
│     │                             │    │
│     └─────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

**Specs:**
- Height: 100vh
- Background: image with dark overlay (rgba(0,0,0,0.35))
- Text: centered, warm white (#F5F1EA)
- Headline: 72-96px, serif, font-weight 400
- Subhead: 20-24px, sans-serif, muted
- CTAs: side by side, min 48px height
- Scroll indicator: subtle chevron, bottom center

---

### Section 2: About

**Purpose:** Tell the story. Show craft without breaking the dark mood.

**Image:** `assorted-sushi-on-marble-platter-wood-table.png`
- Marble surface adds sophistication
- Wood texture warms the composition
- Shows variety and care in preparation

**Structure:**
```
┌─────────────────────────────────────────┐
│                                         │
│  ┌──────────────────┬────────────────┐  │
│  │                  │                │  │
│  │   [Image]        │    OUR         │  │
│  │   assorted-      │    CRAFT       │  │
│  │   sushi-on-      │                │  │
│  │   marble-        │    Every piece │  │
│  │   platter        │    is prepared │  │
│  │                  │    with        │  │
│  │                  │    intention.  │  │
│  │                  │                │  │
│  │                  │    [Our Story] │  │
│  │                  │                │  │
│  └──────────────────┴────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

**Specs:**
- Layout: two-column (50/50), image left
- Mobile: stack, image first
- Image: object-fit cover, slight shadow or border
- Background: `#0B0B0D` (deepest black)
- Text block: generous padding (80px+)
- Headline: "Our Craft" or "About Omakase"
- Body: 2-3 short paragraphs, line-height 1.7

---

### Section 3: Menu

**Layout Philosophy:** The menu section uses a **card-based navigation** pattern. Three featured menu cards sit on the landing page (`/`), acting as appetizing entry points. A "View Full Menu" button navigates to a dedicated `/menu` page for the complete menu. This keeps the landing page scannable while giving curious visitors a proper page to explore all offerings.

The newly added omakase set image upgrades this section significantly. We now have three real product cards instead of two cards plus a placeholder, which makes the menu feel more credible, premium, and conversion-ready.

**Header Image:** `tuna-salmon-ika-nigiri-round-platter.png`
- Round platter shows variety
- Multiple fish types = abundance
- Elegant arrangement suitable for wide banner

**Structure:**
```
┌─────────────────────────────────────────┐
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │  [Header Image]                     │ │
│  │  tuna-salmon-ika-nigiri-            │ │
│  │  round-platter                      │ │
│  │  (full-width band, 40vh)            │ │
│  └─────────────────────────────────────┘ │
│                                         │
│           SIGNATURE OFFERINGS           │
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐│
│  │ [Image]  │  │ [Image]  │  │ [Image]  ││
│  │ vibrant- │  │ nigri-   │  │ omakase- ││
│  │ salmon   │  │ closeup  │  │ set-     ││
│  │ rolls    │  │          │  │ assorted ││
│  │          │  │          │  │          ││
│  │ Signature│  │ Chef's   │  │ Omakase  ││
│  │ Rolls    │  │ Selection│  │ Set      ││
│  │ $28      │  │ $42      │  │ $85      ││
│  └──────────┘  └──────────┘  └──────────┘│
│                                         │
│         [View Full Menu]                │
│                                         │
└─────────────────────────────────────────┘
```

**Specs:**
- Header: full-width, 35-45vh height, object-position center
- Section title: centered, 40-48px, serif
- Grid: 3 columns desktop, 1 column mobile
- Cards: consistent aspect ratio (4:3 or 3:4)
- Card images: `vibrant-salmon-sushi-rolls-on-dark-wood.png`, `nigri-closeup-in-varied-plate.png`, `omakase-set-assorted-rectangular-plate.png`
- The omakase card should be treated as the premium anchor item in the grid
- Prices: prominent, accent color or muted
- Card hover: subtle lift (translateY -4px) + shadow

---

### Section 4: Full Menu Page (`/menu`)

**Purpose:** Dedicated page for the complete menu. Replaces the planned leather modal.

**Design notes:**
- Same header image and dark aesthetic as the landing page menu section
- Expanded layout: full menu categories (Rolls, Nigiri, Sashimi, Omakase, Drinks)
- Pricing shown clearly, grouped by category
- Responsive table or card layout for menu items
- "Back to Home" link in navbar or subtle return option

**Structure:**
```
┌─────────────────────────────────────────┐
│  [Same Navbar as landing page]          │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │  [Header Image — same as landing]   │ │
│  │  tuna-salmon-ika-nigiri-round-      │ │
│  └─────────────────────────────────────┘ │
│                                         │
│           OUR MENU                      │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │ ROLLS                            │  │
│  │ • California Roll        $12     │  │
│  │ • Spicy Tuna Roll        $14     │  │
│  │ • Dragon Roll            $18     │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │ NIGIRI                           │  │
│  │ • Salmon Nigiri          $6      │  │
│  │ • Tuna Nigiri            $7      │  │
│  │ • Eel Nigiri             $8      │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │ OMAKASE                          │  │
│  │ Seasonal chef's selection        │  │
│  │ Starting from $85                │  │
│  └──────────────────────────────────┘  │
│                                         │
│         [Reserve a Table]               │
│                                         │
└─────────────────────────────────────────┘
```

**Specs:**
- Route: `/menu`
- Same dark color system as landing page
- Category sections as cards or bordered lists
- Clear typography hierarchy for item name, description, price
- "Reserve" CTA at bottom to convert menu browsers

---

### Section 5: Reserve CTA

**Purpose:** Conversion push. Clear action without visual distraction.

**Image:** None (solid background)

**Structure:**
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│         JOIN US THIS EVENING            │
│                                         │
│         Intimate seating for            │
│         those who appreciate            │
│         the craft of sushi.             │
│                                         │
│         [Reserve a Table]               │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

**Specs:**
- Height: 50-60vh
- Background: `#15181C` (slightly lifted from hero)
- Text: centered, maximum contrast
- Single strong CTA button (accent color, filled)
- No secondary actions — focus on reservation

---

### Section 5: Visit / Contact

**Purpose:** Practical information. Close the loop.

**Image:** None

**Structure:**
```
┌─────────────────────────────────────────┐
│                                         │
│  ┌─────────────────────────────────┐   │
│  │                                 │   │
│  │        VISIT OMAKASE            │   │
│  │                                 │   │
│  │  ┌──────────┐ ┌──────────────┐ │   │
│  │  │ 📍       │ │ 🕐           │ │   │
│  │  │ Address  │ │ Hours        │ │   │
│  │  │          │ │              │ │   │
│  │  │ 123      │ │ Mon–Thu      │ │   │
│  │  │ Sushi St │ │ 5pm – 10pm   │ │   │
│  │  │ City     │ │              │ │   │
│  │  │          │ │ Fri–Sat      │ │   │
│  │  │ [Map]    │ │ 5pm – 11pm   │ │   │
│  │  │          │ │              │ │   │
│  │  │          │ │ Sun          │ │   │
│  │  │          │ │ Closed       │ │   │
│  │  └──────────┘ └──────────────┘ │   │
│  │                                 │   │
│  │  📞 +1 (555) 123-4567           │   │
│  │  ✉️  reservations@omakase.com   │   │
│  │                                 │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

**Specs:**
- Background: `#0B0B0D` (back to deepest)
- Layout: contained width (max 900px), centered
- Two-column grid for address + hours
- Contact details: stacked below
- Icons: Lucide, 20px, muted color
- Typography: clear hierarchy, generous spacing

---

### Section 6: Footer

**Structure:**
```
┌─────────────────────────────────────────┐
│                                         │
│     OMAKASE          [Instagram] [Map]   │
│                                         │
│     © 2026 Omakase. All rights reserved.│
│                                         │
└─────────────────────────────────────────┘
```

**Specs:**
- Background: same as Visit or slightly darker
- Minimal: name, social links, copyright
- Padding: generous vertical (60px+)

---

## Page Structure

| Page | Route | Sections |
|------|-------|----------|
| Home | `/` | Hero, About, Menu Highlights (cards), Reserve CTA, Visit, Footer |
| Full Menu | `/menu` | Navbar, Header Banner, Menu Categories, Reserve CTA, Footer |

**Navigation Pattern:** The landing page features three menu cards as appetizing entry points. A "View Full Menu" button navigates to `/menu` for the complete menu. This keeps the landing page scannable while giving interested visitors a dedicated page to explore all offerings.

---

## Image Placement Summary

| Section | Source Image | Default Optimized Asset | Responsive Set |
|---------|--------------|-------------------------|----------------|
| Hero | `public/backup/source-images/5-maki-rolles-on-black-platter.png` | `/images/hero/hero-1280.avif` | `768 / 1280 / 1920` |
| About | `public/backup/source-images/assorted-sushi-on-marble-platter-wood-table.png` | `/images/about/about-960.avif` | `640 / 960 / 1280` |
| Menu banner | `public/backup/source-images/tuna-salmon-ika-nigiri-round-platter.png` | `/images/menu/menu-banner-1280.avif` | `768 / 1280 / 1600` (used on both Home and `/menu`) |
| Menu card 1 | `public/backup/source-images/vibrant-salmon-sushi-rolls-on-dark-wood.png` | `/images/menu/menu-card-rolls-768.avif` | `480 / 768 / 960` |
| Menu card 2 | `public/backup/source-images/nigri-closeup-in-varied-plate.png` | `/images/menu/menu-card-nigiri-768.avif` | `480 / 768 / 960` |
| Menu card 3 | `public/backup/source-images/omakase-set-assorted-rectangular-plate.png` | `/images/menu/menu-card-omakase-768.avif` | `480 / 768 / 960` |
| Reserve CTA | None | Solid background | — |
| Visit | None | Solid background | — |
| Footer | None | Solid background | — |

**Note:** The leather modal background was removed. Full menu now lives at `/menu` route.

---

## Responsive Behavior

### Desktop (>1024px)
- Two-column layouts as specified
- Large hero typography (72-96px)
- Three-column menu grid
- Full navigation visible

### Tablet (768px-1024px)
- Maintain two-column where possible
- Reduce hero text size (56-64px)
- Menu grid: 2 columns + 1 centered below

### Mobile (<768px)
- Single column throughout
- Hero: 40-48px headline, stacked CTAs
- About: image stacks above text
- Menu: single-column card stack
- Navigation: hamburger menu

---

## Typography Scale

| Element | Desktop | Tablet | Mobile | Weight | Font Family |
|---------|---------|--------|--------|--------|-------------|
| Hero H1 | 96px | 72px | 48px | 400 | Playfair Display |
| Section H2 | 48px | 40px | 32px | 400 | Playfair Display |
| Card H3 | 24px | 22px | 20px | 500 | Inter |
| Body | 18px | 17px | 16px | 400 | Inter |
| Caption | 14px | 14px | 14px | 500 | Inter |
| Price | 20px | 20px | 18px | 600 | Inter |
| Button | 16px | 16px | 16px | 500 | Inter |

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-deepest` | `#0B0B0D` | Page background, Hero, Visit |
| `--bg-raised` | `#15181C` | Cards, Reserve CTA |
| `--text-primary` | `#F5F1EA` | Headlines, important text |
| `--text-secondary` | `#9CA3AF` | Body, descriptions |
| `--text-muted` | `#6B7280` | Captions, labels |
| `--accent` | `#A63A3A` | CTAs, links, highlights |
| `--accent-hover` | `#C44545` | Button hover states |
| `--border` | `rgba(255,255,255,0.1)` | Dividers, card borders |

---

## Animation & Motion

### On Load
- Hero image: subtle zoom (scale 1.0 → 1.05 over 20s)
- Hero text: fade in + slide up (staggered)

### On Scroll
- Sections: fade in when entering viewport (opacity 0→1, y: 30→0)
- Menu cards: staggered reveal (50ms delay between cards)

### Interactions
- Buttons: scale 1.02 on hover, transition 200ms ease
- Cards: translateY -4px + shadow increase on hover
- Links: color transition to accent on hover

### Performance
- Use `transform` and `opacity` only for animations
- Add `will-change` on hero image
- Respect `prefers-reduced-motion`

---

## Image Optimization

The optimized set has already been generated with `sharp-cli`.

### Formats
- **Primary:** AVIF
- **Fallback:** WebP
- **Source-only masters:** original PNGs in `/public/backup/source-images/`
- **Brand mark:** PNG default from `/public/brand/`, with optional WebP variants
- **Favicon/app icons:** PNG assets from `/public/icons/`

### Chosen sizes by role
- **Hero:** `768`, `1280`, `1920`
- **About:** `640`, `960`, `1280`
- **Menu banner:** `768`, `1280`, `1600`
- **Menu cards:** `480`, `768`, `960`

### Why these choices
- Hero needs the highest ceiling because it covers the viewport.
- About image sits in a constrained content column, so anything larger than `1280` is wasted.
- Menu banner is wide but shorter, so `1600` is enough for large screens.
- Menu cards are compact and should stay extremely lightweight.

### Delivery rules
- Prefer `<picture>` or Next.js `Image` with AVIF/WebP-aware source selection.
- Use the defaults from `data/image-manifest.json` unless a component specifically needs another width.
- Lazy-load everything below the fold.
- Keep the hero eager/high priority.
- Do not ship anything from `/public/backup/` in the rendered UI.
- Use `/brand/sumi-mark-64.png` as the default navbar/header logo icon.
- Use `/icons/favicon/favicon-32x32.png`, `/icons/apple-touch-icon.png`, and `/site.webmanifest` in site metadata.

---

## Content Checklist

- [ ] Restaurant name (Omakase?)
- [ ] Tagline/subhead for Hero
- [ ] About section copy (2-3 paragraphs)
- [ ] Menu items with prices (at least 3 featured items matching the three menu images)
- [ ] Full address
- [ ] Phone number
- [ ] Email for reservations
- [ ] Opening hours (all days)
- [ ] Social media links
- [ ] Optional: Google Maps embed or link

---

## Component Checklist

- [ ] Navbar (sticky, transparent → solid)
- [ ] Hero section with full-bleed image
- [ ] About section with two-column layout
- [ ] Menu section with header image
- [ ] Menu card component (reusable)
- [ ] Reserve CTA section
- [ ] Visit/Contact section
- [ ] Footer
- [ ] Mobile menu overlay
- [ ] Smooth scroll navigation
- [ ] Scroll-triggered animations

---

## File Structure

```
sumi/
├── README.md
├── LAYOUT.md (this file)
├── data/
│   ├── restaurant.json
│   └── image-manifest.json
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── menu.tsx
│   │   ├── menu-card.tsx
│   │   ├── reserve-cta.tsx
│   │   ├── visit.tsx
│   │   └── footer.tsx
│   ├── hooks/
│   │   └── use-scroll-animation.ts
│   └── lib/
│       └── utils.ts
├── public/
│   ├── backup/
│   │   ├── source-images/
│   │   ├── source-icons/
│   │   └── windows-metadata/
│   ├── images/
│   │   ├── hero/
│   │   ├── about/
│   │   └── menu/
│   ├── brand/
│   │   └── sumi-mark-*.{png,webp}
│   ├── icons/
│   │   ├── apple-touch-icon.png
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── favicon/
│   │       ├── favicon-16x16.png
│   │       ├── favicon-32x32.png
│   │       └── favicon-48x48.png
│   └── site.webmanifest
└── next.config.js
```

---

## Notes

- All images started as high-resolution (~2400–2550px wide) source masters and are now archived under `public/backup/source-images/`.
- The dark, moody aesthetic is consistent across all food photography.
- The rectangular omakase set image completes the menu grid and adds a strong premium centerpiece.
- The Reserve CTA can remain image-free; the visual story is already strong enough.
- The optimized outputs are already comfortably web-safe in size, so implementation can move straight to UI work.
- `data/image-manifest.json` is the canonical mapping between layout role and production asset files.
- `/brand/sumi-mark-64.png` is the default UI logo mark.
- `/icons/` contains the browser and device icon set for metadata wiring.
