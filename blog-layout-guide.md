# Blog Layout — Reusable Build Guide

A portable spec + full code for the FlowconvertLab blog: a **Linktree-style index**
(image cards) and an **article page** with a pinned scroll-spy "Contents" sidebar, a
pinned CTA, and a "You may also like" section — where only the article column scrolls.

Stack assumed: **Next.js (App Router) + TypeScript + Tailwind CSS**. Smooth scroll
(Lenis) is optional. Adapt paths/imports to your project.

---

## 0. Design tokens (required)

The components read CSS variables. Put these in your global stylesheet `:root`:

```css
:root {
  --bg: #EFEFEC;
  --bg-surface: #F6F6F3;   /* card/sidebar surface */
  --bg-dark: #1C1C1A;      /* dark CTA card */
  --text: #1C1C1A;
  --text-muted: #6B6B66;
  --border: rgba(28,28,26,0.08);
  --accent: #C75B39;       /* your brand accent */
}
```

Fonts: a display font (headings) + readable body font. `font-display` below = your
display family; swap for whatever you use.

---

## 1. Data model

Blog posts live in one JSON file (`public/data/blog-posts.json`). Content is HTML with
`<h2>` headings (used to auto-build the table of contents).

```json
[
  {
    "slug": "my-first-post",
    "title": "My first post",
    "excerpt": "One-line summary.",
    "category": "Guide",
    "readTime": "2 min read",
    "date": "Jun 18, 2026",
    "color": "#4F7CFF",
    "content": "<p>Intro…</p><h2>Section one</h2><p>…</p><h2>Section two</h2><p>…</p>"
  }
]
```

---

## 2. Card colors + images helper — `lib/blog.ts`

Cycles a varied palette + one image per card. Give it as many images as you have posts
if you want each post to be unique.

```ts
export const CARD_COLORS = [
  "#4F7CFF", "#7C2D3A", "#E84C8A", "#2FBF71", "#C026D3",
  "#C75B39", "#6D28D9", "#0EA5A4", "#E8A23D",
];

export const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  // …one per post; add more so none repeat
];

export const cardColor = (i: number) => CARD_COLORS[i % CARD_COLORS.length];
export const cardImage = (i: number) => CARD_IMAGES[i % CARD_IMAGES.length];
```

> Using `next/image` with remote URLs? Add the host to `next.config.js`
> `images.remotePatterns` (e.g. `{ protocol: "https", hostname: "images.unsplash.com" }`).

---

## 3. Blog index (Linktree-style cards) — `app/blog/page.tsx`

Responsive grid of image cards: image on top, category pill, meta row, bold title with
an animated underline on hover.

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { cardColor, cardImage } from "@/lib/blog";

interface Post {
  slug: string; title: string; excerpt: string;
  category: string; readTime: string; date: string; color: string;
}

async function getPosts(): Promise<Post[]> {
  const file = path.join(process.cwd(), "public/data/blog-posts.json");
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export const metadata: Metadata = { title: "The Blog" };

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="pb-20" style={{ paddingTop: "6rem" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="sr-only">Blog</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-12">
          {posts.map((post, i) => {
            const color = cardColor(i);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: color }}
                >
                  <Image
                    src={cardImage(i)} alt={post.title} fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span>{post.date}</span><span aria-hidden>·</span><span>{post.readTime}</span>
                </div>
                <h2 className="mt-2 font-display font-bold text-xl sm:text-2xl leading-snug" style={{ color: "var(--text)" }}>
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                    {post.title}
                  </span>
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

---

## 4. Article page — `app/blog/[slug]/page.tsx`

Three-column layout: **pinned Contents (left) · scrolling article (center) · pinned CTA
(right)** + a "You may also like" grid. `buildToc` injects `id`s into the `<h2>`s and
returns the TOC list.

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { BlogToc } from "@/components/BlogToc";
import { cardColor, cardImage } from "@/lib/blog";

interface Post { slug: string; title: string; category: string; readTime: string; date: string; content: string; }

async function getPosts(): Promise<Post[]> {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), "public/data/blog-posts.json"), "utf8"));
}

const slugify = (t: string) =>
  t.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);

function buildToc(html: string) {
  const toc: { id: string; text: string }[] = [];
  const used: Record<string, number> = {};
  const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (m, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!text) return m;
    let id = slugify(text) || "section";
    if (used[id]) { used[id]++; id = `${id}-${used[id]}`; } else used[id] = 1;
    toc.push({ id, text });
    return /\sid=/.test(attrs) ? m : `<h2 id="${id}"${attrs}>${inner}</h2>`;
  });
  return { html: out, toc };
}

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  const post = posts[idx];
  if (!post) return notFound();

  const { html, toc } = buildToc(post.content);
  const related = [1, 2, 3].map((o) => { const j = (idx + o) % posts.length; return { post: posts[j], j }; });

  return (
    <article style={{ paddingTop: "4.5rem" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[250px_minmax(0,1fr)_300px] lg:gap-10 xl:gap-14">
          {/* LEFT — pinned contents */}
          <aside className="hidden lg:block">
            {toc.length > 0 && <div className="sticky top-[100px]"><BlogToc items={toc} /></div>}
          </aside>

          {/* CENTER — the only column that scrolls */}
          <div className="min-w-0 max-w-3xl mx-auto w-full">
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium mb-8"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}>← Back to blog</Link>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4" style={{ color: "var(--text)" }}>{post.title}</h1>
            <div className="flex items-center gap-4 text-sm mb-10" style={{ color: "var(--text-muted)" }}>
              <span>{post.date}</span><span>{post.readTime}</span>
            </div>
            <div className="blog-article prose prose-lg max-w-none"
              style={{ color: "var(--text)", ["--tw-prose-links" as any]: "var(--accent)" }}
              dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          {/* RIGHT — pinned CTA (drop in your own component) */}
          <aside className="hidden lg:block">
            <div className="sticky top-[100px]">{/* <YourCta /> */}</div>
          </aside>
        </div>

        {/* You may also like */}
        <section className="mt-20 sm:mt-28">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: "var(--text)" }}>You may also like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {related.map(({ post: rp, j }) => {
              const color = cardColor(j);
              return (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group-hover:-translate-y-1 transition-transform duration-300" style={{ background: color }}>
                    <Image src={cardImage(j)} alt={rp.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color }}>{rp.category}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}><span>{rp.date}</span><span aria-hidden>·</span><span>{rp.readTime}</span></div>
                  <h3 className="mt-2 font-display font-bold text-lg sm:text-xl leading-snug" style={{ color: "var(--text)" }}>{rp.title}</h3>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </article>
  );
}
```

---

## 5. Contents sidebar (scroll-spy) — `components/BlogToc.tsx`

Highlights the section you're reading and smooth-scrolls on click. Uses Lenis if
present (`window.lenis`), else native smooth scroll.

```tsx
"use client";
import { useEffect, useState, useCallback } from "react";

interface TocItem { id: string; text: string; }

export function BlogToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = 140;
        let current = items[0].id;
        for (const item of items) {
          const el = document.getElementById(item.id);
          if (!el) continue;
          if (el.getBoundingClientRect().top - offset <= 0) current = item.id; else break;
        }
        setActiveId(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [items]);

  const scrollTo = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    const lenis = (window as any).lenis;
    if (lenis) lenis.scrollTo(el, { offset: -110 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
  }, []);

  return (
    <nav className="rounded-2xl p-5 sm:p-6" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
      <p className="font-display font-bold text-lg mb-4" style={{ color: "var(--text)" }}>Contents</p>
      <ul className="space-y-1">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id} className="flex items-start gap-2">
              <span className="mt-[9px] flex-shrink-0 rounded-full transition-all duration-200"
                style={{ width: active ? 6 : 0, height: active ? 6 : 0, background: "var(--accent)" }} />
              <a href={`#${item.id}`} onClick={(e) => scrollTo(e, item.id)}
                className="block text-sm leading-snug py-1 transition-colors duration-200"
                style={{ color: active ? "var(--text)" : "var(--text-muted)", fontWeight: active ? 600 : 400 }}>
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
```

---

## 6. Required global CSS

```css
/* Article headings clear the fixed nav when jumped to */
.blog-article h2 { scroll-margin-top: 110px; }

/* If your post HTML repeats its own title / meta / tag labels, hide them */
.blog-article h1,
.blog-article .meta,
.blog-article .tag { display: none; }

/* CRITICAL: use `clip`, not `hidden`, or position: sticky breaks.
   overflow-x: hidden turns the page into a scroll container and the
   left/right sidebars stop pinning. */
html, body { max-width: 100vw; overflow-x: clip; }
```

Article typography uses Tailwind's `@tailwindcss/typography` (`prose`). Install it and
add `require("@tailwindcss/typography")` to your Tailwind plugins, or replace `prose`
with your own article styles.

---

## 7. Gotchas / checklist

- [ ] **Sticky not pinning?** It's almost always an ancestor with `overflow: hidden`
  (or `overflow-x: hidden`). Use `overflow-x: clip`. Sidebars must sit in a grid/flex
  column that's *taller* than the sticky element (the article column provides that).
- [ ] **TOC anchors hide under a fixed header** → set `scroll-margin-top` on the headings.
- [ ] **Remote images 404 in prod** → whitelist the host in `next.config` `remotePatterns`.
- [ ] **Give each post a unique image** → make `CARD_IMAGES` at least as long as your
  post count (cycling repeats otherwise).
- [ ] **Smooth scroll**: the TOC works with or without Lenis; if you use Lenis, expose the
  instance on `window.lenis` so `scrollTo` cooperates instead of fighting it.
- [ ] `dangerouslySetInnerHTML` renders trusted, self-authored HTML only. Sanitize if the
  content is user-generated.

---

*Copy sections 0–6 into any Next.js App Router project, adjust the import paths and tokens,
and you have the same blog layout.*
