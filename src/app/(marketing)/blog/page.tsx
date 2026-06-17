import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";

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

export const metadata = {
  title: "Blog — Convert Conversations into Revenue",
  description: "Tactics and strategies to help you convert more chats into loyal customers. LiveChat tips, chatbot guides, and customer support insights.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="pt-[var(--nav-height)] bg-[var(--bg)]">
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3 sm:mb-4" style={{ color: "var(--text)" }}>
            Turn conversations into{" "}
            <span style={{ color: "#FF6B00" }}>revenue</span>
          </h1>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Tactics and strategies to help you convert more chats into loyal customers.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div 
                className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-lg"
                style={{ borderLeftWidth: "4px", borderLeftColor: post.color }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span 
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: `${post.color}15`, color: post.color }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs sm:text-sm flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl leading-tight mb-3 sm:mb-4" style={{ color: "var(--text)" }}>
                  {post.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-5 sm:mb-6" style={{ color: "var(--text-muted)" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium flex items-center gap-2" style={{ color: post.color }}>
                    Read article <ArrowRight className="w-4 h-4" />
                  </div>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}