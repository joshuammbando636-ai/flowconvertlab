import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { Reveal } from "@/components/ui/Reveal";
import { cardColor, cardImage } from "@/lib/blog";

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

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="pb-20 sm:pb-24" style={{ paddingTop: "calc(var(--nav-height) + 3rem)" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="sr-only">FlowconvertLab Blog</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-12">
          {posts.map((post, i) => {
            const color = cardColor(i);
            return (
            <Reveal key={post.slug} delay={(i % 3) * 70}>
              <Link href={`/blog/${post.slug}`} className="group block">
                {/* Glass card — frosted panel floats over a vibrant photo */}
                <div
                  className="relative aspect-[4/5] rounded-[28px] overflow-hidden transition-transform duration-300 group-hover:-translate-y-1.5"
                  style={{ background: color }}
                >
                  <Image
                    src={cardImage(i)}
                    alt={post.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  {/* gentle wash so the frosted panel reads as lifted glass */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, rgba(20,20,18,0.10) 0%, rgba(20,20,18,0) 35%)" }}
                  />

                  {/* Category — translucent glass chip directly on the image */}
                  <span className="glass-chip absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]">
                    {post.category}
                  </span>

                  {/* Frosted content panel */}
                  <div className="glass-card absolute inset-x-3 bottom-3 rounded-[20px] p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs" style={{ color: "var(--text-muted)" }}>
                      <span>{post.date}</span>
                      <span aria-hidden>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2
                      className="mt-1.5 font-display font-bold text-lg sm:text-xl leading-snug"
                      style={{ color: "var(--text)" }}
                    >
                      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                        {post.title}
                      </span>
                    </h2>
                  </div>
                </div>
              </Link>
            </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
