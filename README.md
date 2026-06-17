# FlowconvertLab — Next.js 15 Starter

> Smart link-in-bio / resource hub tool optimized for LiveChat partners and customer support workflows.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | GSAP 3 + ScrollTrigger + @gsap/react |
| Smooth Scroll | Lenis v1 |
| Theming | next-themes (dark/light) |
| Font | Inter via next/font/google (variable, mapped to `--font-geist-sans`) |
| Icons | lucide-react |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — font, ThemeProvider, LenisProvider
│   ├── globals.css             # CSS variables, base styles, Tailwind layers
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── (marketing)/
│       ├── layout.tsx          # Marketing layout — Navbar + PageTransition + Footer
│       ├── page.tsx            # / — Home
│       ├── tools/page.tsx      # /tools — Tool showcase
│       ├── reviews/page.tsx    # /reviews — Filterable testimonials
│       ├── comparison/page.tsx # /comparison — Animated feature table
│       ├── guide/page.tsx      # /guide — Educational long-form content
│       └── blog/page.tsx       # /blog — Article index with newsletter CTA
│
├── components/
│   ├── PageTransition.tsx      # ⭐ Full-screen column wipe (GSAP timeline)
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav, mobile slide-in, theme toggle
│   │   └── Footer.tsx          # Multi-column footer, back-to-top, socials
│   ├── home/
│   │   ├── Hero.tsx            # Hero with floating orbs, mockup, proof points
│   │   ├── TrustedBy.tsx       # Partner logos + stats strip
│   │   ├── Features.tsx        # 8-card grid with GSAP hover + stagger
│   │   ├── HowItWorks.tsx      # 4-step timeline with SVG line draw
│   │   ├── Testimonials.tsx    # Featured carousel + 3-card grid
│   │   ├── Pricing.tsx         # 3-plan table with billing toggle animation
│   │   └── CTA.tsx             # Full-bleed gradient CTA section
│   ├── providers/
│   │   ├── ThemeProvider.tsx   # next-themes wrapper
│   │   └── LenisProvider.tsx   # Global smooth scroll
│   └── ui/
│       ├── Button.tsx          # Polymorphic button (renders as <a> or <button>)
│       ├── Badge.tsx           # Section label / status badges
│       └── SectionHeader.tsx   # Reusable section heading block
│
├── lib/
│   └── utils.ts                # cn(), formatDate(), truncate()
│
└── types/
    └── index.ts                # Shared TypeScript interfaces
```

---

## Color Palette

```css
/* Light mode */
--bg:         #FFFFFF
--bg-surface: #F8FAFC
--text:       #111827
--text-muted: #64748B
--border:     #E2E8F0

/* Dark mode */
--bg:         #0A0A0A
--bg-surface: #171717
--text:       #F1F5F9
--text-muted: #94A3B8
--border:     #334155

/* Accents */
Primary blue:  #3B82F6
Indigo:        #6366F1
Emerald green: #10B981
```

---

## Key Features

### ⭐ PageTransition
Located at `src/components/PageTransition.tsx`. On every route change:

1. **Phase 1 (In):** 6 full-screen columns wipe up from the bottom (right→left stagger) in `0.65s`
2. **Content swap** happens at peak coverage
3. **Phase 2 (Out):** columns retract downward (left→right stagger) revealing the new page

Colors sweep blue `#1D4ED8` → indigo `#818CF8` for a premium flowing feel. Zero jank — GSAP handles all RAF.

### Smooth Scroll
`LenisProvider` wraps the entire app and runs Lenis at 60fps via a global `requestAnimationFrame` loop. All GSAP ScrollTrigger animations are automatically synced.

### GSAP Animations
Every page section uses:
- **Entrance reveals:** `fromTo` with `opacity:0 → 1` + `y:24 → 0`
- **Stagger:** `stagger: { amount: 0.6 }` for cascading card entrances
- **ScrollTrigger:** `start: "top 85%"` for natural timing
- **Micro-interactions:** hover `scale`, `rotate`, `translateY` on feature cards and logo

### Dark / Light Mode
Toggle is in the Navbar. `next-themes` handles SSR-safe hydration via `suppressHydrationWarning` on `<html>`. All colors use CSS custom properties so transitions are smooth.

---

## Environment Variables

Create `.env.local` for any future integrations:

```env
# Analytics (optional)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_GA_ID=

# Email (newsletter / contact form)
RESEND_API_KEY=

# Database (user accounts)
DATABASE_URL=
```

---

## Deployment

### Vercel (recommended)
```bash
npx vercel --prod
```

### Docker
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## Extending the Codebase

### Add a new page
```
src/app/(marketing)/new-page/page.tsx
```
It automatically gets the Navbar + Footer + PageTransition wrapper from `(marketing)/layout.tsx`.

### Add a new home section
1. Create `src/components/home/NewSection.tsx`
2. Import and add it to `src/app/(marketing)/page.tsx`
3. Use the `useGSAP` + `ScrollTrigger` pattern from existing sections

### Add a blog post
Add an entry to the `BLOG_POSTS` array in `blog/page.tsx` and create `src/app/(marketing)/blog/[slug]/page.tsx` for dynamic routing.

---

## Performance Notes

- All GSAP imports are dynamic (`gsap/ScrollTrigger` registered on demand)
- `useGSAP` scopes all animations to their component — no memory leaks
- Lenis runs in a single global RAF loop — not per-component
- Images should use `next/image` with `priority` on hero images
- Fonts are subset to `latin` only

---

## License

Private — FlowconvertLab © 2026
