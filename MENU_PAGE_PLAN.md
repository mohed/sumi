# Plan: Fine Dining Menu Page

## Context

The current `/menu` page renders a basic Radix accordion list — functional but not fitting for a fine-dining concept. The goal is a complete redesign into an editorial menu layout that uses the three category images (Maki, Nigiri, Omakase) as visual anchors, presents dishes in the classic dotted-leader style used by Michelin-starred restaurants, and maintains the calm, restrained Sumi aesthetic.

---

## Files to Change

| File | Action |
|------|--------|
| `data/restaurant.json` | Restructure `menu.sections`, add maki items, add `menu.omakase` object |
| `src/pages/menu.tsx` | Full rewrite — editorial layout replacing accordion |
| `src/components/menu-item-row.tsx` | New component — dotted leader item row |

---

## Step 1 — Update `data/restaurant.json`

### Changes:
- **Remove** the `recommended` section (only relevant on the home page, already served by `featuredItems`)
- **Add** `menu.sections[0]` as a new `maki` section with 4 items, each with a `description` field
- **Add** `menu.omakase` as a standalone object (not an items array — the omakase is a single experience)
- Keep `nigiri`, `bowls`, `sides` sections unchanged

### New `maki` section:
```json
{
  "id": "maki",
  "title": "Maki",
  "items": [
    {
      "name": "Signature Roll",
      "description": "Salmon, avocado, cucumber, chilli mayo, crispy onion, trout roe",
      "price": 149,
      "formattedPrice": "149 kr"
    },
    {
      "name": "Torched Yellowtail",
      "description": "Yellowtail, jalapeño, ponzu, sesame, yuzu zest",
      "price": 159,
      "formattedPrice": "159 kr"
    },
    {
      "name": "Nordic Crunch",
      "description": "Cold-smoked salmon, dill cream, capers, pickled red onion",
      "price": 155,
      "formattedPrice": "155 kr"
    },
    {
      "name": "Spicy Tuna",
      "description": "Bluefin tuna tartare, sriracha mayo, cucumber, toasted sesame",
      "price": 165,
      "formattedPrice": "165 kr"
    }
  ]
}
```

### New `menu.omakase` object (top-level alongside `sections`):
```json
"omakase": {
  "id": "omakase",
  "title": "Omakase Set",
  "tagline": "Trust the kitchen.",
  "description": "A curated progression of nigiri, maki, and seasonal selections composed by the chef each evening. Perfect to share or to eat alone in full.",
  "price": 249,
  "formattedPrice": "249 kr",
  "badge": "Signature"
}
```

### Final `menu.sections` order: `[maki, nigiri, bowls, sides]`

---

## Step 2 — Create `src/components/menu-item-row.tsx`

A small typed component for the dotted-leader row used in all menu sections.

```tsx
interface MenuItemRowProps {
  name: string;
  description?: string;
  formattedPrice: string;
}
```

Layout:
- `<motion.li>` with named variants `hidden`/`visible` (participates in parent stagger)
- Line 1: `name` (serif text-primary) + flex-1 dotted spacer (`border-b border-dotted border-white/18`) + `formattedPrice` (sans text-accent)
- Line 2 (optional): `description` in `text-text-muted text-xs`

Item variants: `hidden: { opacity: 0, x: -8 }` → `visible: { opacity: 1, x: 0 }` duration 0.4s

---

## Step 3 — Rewrite `src/pages/menu.tsx`

### Section order:

**1. Page Header** (`bg-bg-deepest pt-28 pb-10 text-center`)
- Eyebrow + `menu.title` in serif h1 + `menu.subtitle`
- Motion: `animate` (not `whileInView`) — visible immediately on load
- Horizontal rule below: `border-t border-white/8 max-w-6xl mx-auto mt-10`

**2. Full-Bleed Menu Banner** (`relative h-[38vh] lg:h-[45vh] max-h-[520px] overflow-hidden`)
- `<picture>` from `assets.menuBanner` (768w/1280w/1600w, AVIF+WebP)
- Gradient overlay: `bg-gradient-to-b from-black/55 via-black/20 to-black/55`
- Centered italic serif quote: *"Handcrafted with care, served in stillness."* `text-xl lg:text-3xl`
- `loading="eager"` on the `<img>` (above the fold)

**3. Maki Section** (`bg-bg-deepest border-b border-white/6`)
- `max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-20 px-6`
- Left col: `<picture>` from `assets.featuredMenu[0]` (rolls, 480/768/960w) — `aspect-[4/3] overflow-hidden`
- Right col: eyebrow + `<h2>` + 8px accent underline + `<motion.ul stagger>` of `<MenuItemRow>` × 4 (with descriptions)
- Motion: image `whileInView fadeUp`, list container `whileInView staggerChildren 0.06s`

**4. Nigiri Section** (`bg-bg-raised border-b border-white/6`) — columns reversed
- Same grid, but items left / image right via `order` classes:
  - Text col: `order-2 lg:order-1`
  - Image col: `order-1 lg:order-2`
- Image from `assets.featuredMenu[1]` (nigiri, 480/768/960w)
- 9 items, no descriptions
- `bg-bg-raised` (#15181C) for tonal alternation

**5. Omakase Section** (`bg-bg-deepest`)
- Centered eyebrow "Chef's Table"
- `grid grid-cols-1 lg:grid-cols-[55fr_45fr] min-h-[420px]`
- Left: full-height image from `assets.featuredMenu[2]` (omakase, 480/768/960w) — `w-full h-full object-cover`
- Right: `bg-bg-raised lg:-ml-12 self-center` dark card with:
  - Accent "Signature" badge (small caps)
  - Serif h2 "Omakase Set"
  - Italic tagline "Trust the kitchen."
  - `omakase.description` paragraph
  - Price as large serif numeral `font-serif text-3xl text-accent` + `kr / person`
  - Inline link: "Reserve for the omakase experience →"
- Mobile: `-ml-12` removed, image stacks above card

**6. Bowls & Sides** (`bg-bg-deepest border-b border-white/6`)
- `max-w-4xl mx-auto py-20 px-6`
- Centered section header: "To accompany" eyebrow + "Bowls & Sides" serif h2
- `grid grid-cols-1 md:grid-cols-[1fr_1px_1fr]` with `bg-accent/30 self-stretch` vertical divider
- Bowls column `md:pr-12`: sans uppercase subheader + `<motion.ul stagger>` × 6
- Sides column `md:pl-12`: sans uppercase subheader + `<motion.ul stagger>` × 6
- Mobile: columns stack with `<hr class="border-white/8 my-10">` replacing the vertical divider

**7. `<ReserveCta />`** (existing, unchanged)

**8. `<Footer />`** (existing, unchanged)

### Data access pattern:
```ts
import restaurantData from '@data/restaurant.json';
const { menu, assets } = restaurantData;
const maki    = menu.sections.find(s => s.id === 'maki')!;
const nigiri  = menu.sections.find(s => s.id === 'nigiri')!;
const bowls   = menu.sections.find(s => s.id === 'bowls')!;
const sides   = menu.sections.find(s => s.id === 'sides')!;
const omakase = menu.omakase;
const banner  = assets.menuBanner;
const [rollsImg, nigiriImg, omakaseImg] = assets.featuredMenu;
```

### Animation summary:
- Page header: `animate` (immediate, not scroll-triggered)
- All other sections: `whileInView` with `viewport={{ once: true, amount: 0.15 }}`
- List containers: `initial="hidden" whileInView="visible"` with `staggerChildren: 0.06`
- `MenuItemRow`: named variants `hidden`/`visible` with `x: -8 → 0` slide

---

## Verification

1. `npm run dev` → visit `http://localhost:3010/menu`
2. Banner image loads eagerly, all 3 category images lazy-load correctly
3. Maki = image-left on desktop, Nigiri = image-right on desktop; both stack correctly on mobile
4. Omakase card overlaps image on desktop, stacks cleanly on mobile
5. Bowls & Sides two-column layout collapses to single column below `md` breakpoint
6. Reduce-motion: disable animations in DevTools → all content still readable and visible
7. `npm run build` — no TypeScript errors
