import type { Metadata } from "next";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
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

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="The FlowconvertLab Blog"
        subtitle="Practical guides on live chat, AI chatbots, and converting more of your website traffic."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 80}>
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <article className="card h-full p-6 sm:p-7 flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl leading-snug mb-3" style={{ color: "var(--text)" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-sm font-semibold inline-flex items-center gap-1.5" style={{ color: "var(--accent)" }}>
                      Read article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{post.date}</span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
