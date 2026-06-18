import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import fs from "fs";
import path from "path";
import { BlogToc } from "@/components/blog/BlogToc";
import { BlogSidebarCta } from "@/components/blog/BlogSidebarCta";
import { cardColor, cardImage } from "@/lib/blog";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  color: string;
  content: string;
}

async function getBlogPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "public/data/blog-posts.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

// Parse the post's <h2> headings, inject stable ids into the HTML, and return
// the list used to build the left "Contents" sidebar.
function buildToc(html: string): { html: string; toc: { id: string; text: string }[] } {
  const toc: { id: string; text: string }[] = [];
  const used: Record<string, number> = {};

  const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (match, attrs: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!text) return match;

    let id = slugify(text) || "section";
    if (used[id]) {
      used[id] += 1;
      id = `${id}-${used[id]}`;
    } else {
      used[id] = 1;
    }
    toc.push({ id, text });

    if (/\sid=/.test(attrs)) return match;
    return `<h2 id="${id}"${attrs}>${inner}</h2>`;
  });

  return { html: out, toc };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  const post = posts[idx];

  if (!post) {
    return notFound();
  }

  const { html, toc } = buildToc(post.content);

  // "You may also like" — next 3 posts (wraps around)
  const related = [1, 2, 3].map((o) => {
    const j = (idx + o) % posts.length;
    return { post: posts[j], j };
  });

  return (
    <article className="pt-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[250px_minmax(0,1fr)_300px] lg:gap-10 xl:gap-14">
          {/* Left: pinned Contents sidebar */}
          <aside className="hidden lg:block">
            {toc.length > 0 && (
              <div className="sticky top-[100px]">
                <BlogToc items={toc} />
              </div>
            )}
          </aside>

          {/* Center: the only part that scrolls */}
          <div className="min-w-0 max-w-3xl mx-auto w-full">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium mb-8 transition-colors hover:bg-[var(--bg-alt)]"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>

            <h1
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4"
              style={{ color: "var(--text)" }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm mb-10" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <div
              className="blog-article prose prose-lg max-w-none"
              style={{
                color: "var(--text)",
                // @ts-ignore
                "--tw-prose-headings": "var(--text)",
                "--tw-prose-links": "var(--accent)",
                "--tw-prose-bold": "var(--text)",
              }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          {/* Right: pinned CTA */}
          <aside className="hidden lg:block">
            <div className="sticky top-[100px]">
              <BlogSidebarCta />
            </div>
          </aside>
        </div>

        {/* You may also like */}
        <section className="mt-20 sm:mt-28">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: "var(--text)" }}>
            You may also like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {related.map(({ post: rp, j }) => {
              const color = cardColor(j);
              return (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ background: color }}
                  >
                    <Image
                      src={cardImage(j)}
                      alt={rp.title}
                      fill
                      sizes="(max-width:640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span
                      className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]"
                      style={{ color }}
                    >
                      {rp.category}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span>{rp.date}</span>
                    <span aria-hidden>·</span>
                    <span>{rp.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-display font-bold text-lg sm:text-xl leading-snug" style={{ color: "var(--text)" }}>
                    {rp.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </article>
  );
}
