import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import fs from "fs";
import path from "path";
import { BlogToc } from "@/components/blog/BlogToc";
import { BlogSidebarCta } from "@/components/blog/BlogSidebarCta";

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

    if (/\sid=/.test(attrs)) return match; // keep an existing id if present
    return `<h2 id="${id}"${attrs}>${inner}</h2>`;
  });

  return { html: out, toc };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const { html, toc } = buildToc(post.content);

  return (
    <article className="pt-[var(--nav-height)] bg-[var(--bg)]">
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

          {/* Center: article */}
          <div className="min-w-0 max-w-3xl mx-auto w-full">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>

            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: `${post.color}15`, color: post.color }}
            >
              {post.category}
            </span>

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
                "--tw-prose-links": "#FF6B00",
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
      </div>
    </article>
  );
}
