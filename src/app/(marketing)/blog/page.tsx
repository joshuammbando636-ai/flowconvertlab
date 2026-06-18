import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { Reveal } from "@/components/ui/Reveal";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  color: string;
}

async function getBlogPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "public/data/blog-posts.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export const metadata: Metadata = {
  title: "The FlowconvertLab Blog",
  description:
    "Practical guides on live chat, AI chatbots, and converting more of your website traffic.",
  alternates: { canonical: "https://www.flowconvertlab.com/blog" },
};

// Varied, Linktree-style card colors (cycled per card)
const CARD_COLORS = [
  "#4F7CFF", // blue
  "#7C2D3A", // maroon
  "#E84C8A", // pink
  "#2FBF71", // green
  "#C026D3", // magenta
  "#C75B39", // terracotta
  "#6D28D9", // purple
  "#0EA5A4", // teal
  "#E8A23D", // amber
];

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="pb-20 sm:pb-24" style={{ paddingTop: "calc(var(--nav-height) + 3rem)" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="sr-only">FlowconvertLab Blog</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-12">
          {posts.map((post, i) => {
            const color = CARD_COLORS[i % CARD_COLORS.length];
            return (
            <Reveal key={post.slug} delay={(i % 3) * 70}>
              <Link href={`/blog/${post.slug}`} className="group block">
                {/* Color card (Linktree-style) */}
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: color }}
                >
                  <span
                    className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span>{post.date}</span>
                  <span aria-hidden>·</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h2
                  className="mt-2 font-display font-bold text-xl sm:text-2xl leading-snug transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                    {post.title}
                  </span>
                </h2>
              </Link>
            </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
