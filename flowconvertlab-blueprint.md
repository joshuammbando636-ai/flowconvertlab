# FlowconvertLab — Project Blueprint

> A premium affiliate marketing website that turns content into LiveChat sign-ups.
> Built with Next.js 15, React 19 & TypeScript, with motion-driven UX and a fully
> tokenized design system.

**Type:** Marketing / affiliate website · **Status:** Production-ready
**Domain:** www.flowconvertlab.com

---

## Overview

FlowconvertLab is an independent affiliate site that promotes **LiveChat** and its
sister products (**ChatBot, HelpDesk, KnowledgeBase**). Every page is engineered
around a single business goal: get the visitor to start a LiveChat free trial through
a tracked affiliate link, earning commission on each sign-up.

The site pairs a calm, editorial visual style with purposeful motion — a floating
"bubble" navigation, a logo loader, scroll-reveal sections, an expanding card gallery,
and a Linktree-style blog — while staying fast and accessible on mid-range phones.

---

## My Role

End-to-end design & front-end engineering:

- Information architecture and page structure
- A reusable, tokenized **design system** (color, type, spacing, motion)
- All UI components and page layouts
- Content modelling for the blog (JSON-driven, statically generated)
- Motion & micro-interactions (GSAP, Lenis, Framer Motion)
- Performance, responsiveness, accessibility, and SEO
- Affiliate-compliance patterns (disclosures + correct link attributes)

---

## Tech Stack

| Area | Choice |
|---|---|
| Framework | **Next.js 15** (App Router, RSC, static generation) |
| Language | **TypeScript**, **React 19** |
| Styling | **Tailwind CSS** + CSS custom properties (design tokens) |
| Motion | **GSAP** (+ SplitText), **Lenis** (smooth scroll), **Framer Motion** (nav morph) |
| Type | **Space Grotesk** (display) + **Inter** (body) via `next/font` |
| Icons | **lucide-react** |
| Email/API | Route handler (`/api/contact`) with Resend/Mailtrap |
| Tooling | ESLint, Vercel (deploy), Git |

---

## Design System

Everything is driven by CSS variables, so the whole site can be re-themed by changing
a handful of values.

**Color** — a warm, neutral base with one swappable brand accent:

```
--bg:        #EFEFEC   /* neutral greige base (not white, not brown) */
--bg-alt:    #E7E7E3   /* subtle alternating tone */
--surface:   #F6F6F3   /* lifted cards */
--bg-dark:   #1C1C1A   /* dark bands / footer */
--text:      #1C1C1A   /* near-black ink */
--text-muted:#6B6B66
--accent:    #C75B39   /* single brand accent — change once to rebrand */
--border:    rgba(28,28,26,0.08)
```

**Type** — distinctive display + highly readable body, big confident headlines.

**Motion principles**
- Animate **transform/opacity only** for 60fps on mid-range devices
- Soft scroll reveals via `IntersectionObserver`
- Spring physics for the nav morph; smooth easing for page/loader transitions
- Full **`prefers-reduced-motion`** fallbacks everywhere

---

## Key Features

### Floating "bubble" navigation
A compact top-right pill that **morphs open** into a notification-style panel with a
spring transition. Three-`<span>` hamburger that animates into an X (transform only),
dimmed **backdrop blur**, click-outside + **Escape** to close, focus moved into the
panel, body-scroll lock (Lenis paused), and a reduced-motion fade fallback.

### Logo loader & page transitions
A minimalist loading/transition treatment with the brand logo centered on a warm dark
panel that glides away to reveal the page — giving navigation a polished, app-like feel.

### Home page
Full-screen hero with a background photo and a **headline that animates in word-by-word**
(GSAP SplitText), followed by capability cards and an honest LiveChat review section —
trimmed to the essentials for a focused first impression.

### Tools page — expanding card gallery
A pair of image cards per row where **hovering one widens it while its partner shrinks**
(animated `flex-grow`), revealing body copy and morphing the corner arrow from an outline
to a solid accent state. Fully reworked for mobile so cards never clip or collapse.

### Comparison page
An honest **LiveChat vs Intercom vs Tidio vs Zendesk** table (no hard-coded prices —
links out to live pricing), an "Our take" verdict, and a full-bleed image CTA band.

### Blog
- **Linktree-style index**: a responsive grid of image cards (one **unique image per post**),
  category pill, meta row, and an animated underline on hover.
- **Article view**: a pinned **"Contents" sidebar** (scroll-spy table of contents) on the
  left and a pinned affiliate CTA on the right — only the article column scrolls.
- **"You may also like"** internal-link section for discovery and SEO.
- Content is **JSON-driven** and **statically generated** (`generateStaticParams`), with
  headings auto-IDed to build the TOC.

### Conversion & compliance
- Every CTA points to the exact affiliate URL with `target="_blank"` and
  `rel="sponsored nofollow noopener"`.
- Affiliate **disclosure** site-wide in the footer + short notes near major CTAs.
- No invented statistics or fabricated testimonials.

---

## Architecture & Data

- **App Router** with a `(marketing)` route group; shared layout (nav + footer) wraps
  every page.
- Blog posts live in a single `blog-posts.json`, rendered as **static HTML at build time**
  for instant loads and SEO; article TOCs are derived from the post's `<h2>` headings.
- Reusable primitives: `Section`, `SectionHeader`, `PageHeader`, `Reveal`, `CTAButton`,
  `ImageCtaBand` — composed across pages for consistency.
- A single `constants.ts` holds the affiliate URL, link attributes, and disclosure copy,
  so conversion-critical values have one source of truth.

---

## Performance, Accessibility & SEO

- **next/image** with AVIF/WebP, responsive `sizes`, lazy-loading below the fold, and an
  aggressive CDN cache; image domains warmed via `preconnect`.
- Motion limited to compositor-friendly properties; reduced-motion respected throughout.
- Mobile-first, fluid layouts (verified down to 375px with no horizontal scroll).
- Per-page metadata, Open Graph, a single canonical domain (`www`), and a generated
  `sitemap.xml`.
- Keyboard-accessible navigation with `aria-expanded`, focus management, and visible focus.

---

## Engineering Challenges & Solutions

- **Sticky sidebars wouldn't pin** → root cause was `overflow-x: hidden` on `html/body`
  silently creating a scroll container; switched to `overflow-x: clip` to preserve
  `position: sticky` while still preventing horizontal overflow.
- **Smooth scroll vs. programmatic scroll** → exposed the Lenis instance so the blog TOC
  could drive `lenis.scrollTo()` instead of fighting it.
- **Image reliability** → every external image URL is validated (HTTP 200) before use, and
  the blog set is curated so no image repeats across posts or pages.
- **Reduced-motion & 60fps** → all entrance/morph animations gate on
  `prefers-reduced-motion` and stick to transform/opacity.

---

## Pages

`/` Home · `/tools` Tools · `/comparison` Comparison · `/blog` Blog (+ `/blog/[slug]`) ·
`/privacy` Privacy Policy · `/terms` Terms

---

## Outcomes

- A cohesive, premium brand experience with a **single-variable re-theme** capability.
- Conversion paths (affiliate CTAs) present on every page, correctly attributed and disclosed.
- Fast, statically-generated content with a scalable, JSON-driven blog.
- Clean production build (TypeScript passes; all routes prerender), ready for Vercel.

---

*Built by [Your Name] — front-end engineering & UI/UX design.*
