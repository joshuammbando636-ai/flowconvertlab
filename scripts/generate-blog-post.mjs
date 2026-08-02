#!/usr/bin/env node
// Generates one new FlowconvertLab blog post via the Claude API and prepends
// it to public/data/blog-posts.json. Run by
// .github/workflows/weekly-blog-post.yml — not part of the Next.js build.
//
// Card images/colors are assigned by post index (see src/lib/blog.ts
// cardImage()/cardColor()), so a new post automatically cycles into the
// existing image pool — no new image URLs need to be sourced here.

import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";

const ROOT = process.cwd();
const POSTS_PATH = path.join(ROOT, "public/data/blog-posts.json");

function loadPosts() {
  return JSON.parse(fs.readFileSync(POSTS_PATH, "utf8"));
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not set");
  }

  const posts = loadPosts();
  const existingSlugs = new Set(posts.map((p) => p.slug));
  const categories = [...new Set(posts.map((p) => p.category))];
  const recentTitles = posts
    .slice(0, 40)
    .map((p) => `- ${p.title} (${p.category})`)
    .join("\n");

  const schema = {
    type: "object",
    properties: {
      slug: {
        type: "string",
        description: "lowercase-hyphenated-url-slug, no spaces, 3-8 words",
      },
      title: { type: "string" },
      excerpt: {
        type: "string",
        description: "one sentence, under 160 characters",
      },
      category: {
        type: "string",
        description: `One of the existing categories if it fits: ${categories.join(
          ", "
        )}. Otherwise a new one-to-two word category.`,
      },
      readTime: { type: "string", description: 'e.g. "4 min read"' },
      content: {
        type: "string",
        description:
          "Article body as HTML using only <p> and <h2> tags (no <h1>, no markdown, no code fences). 500-800 words. Start with a <p> intro, then 3-5 <h2> sections.",
      },
    },
    required: ["slug", "title", "excerpt", "category", "readTime", "content"],
    additionalProperties: false,
  };

  const client = new Anthropic({ apiKey });

  const response = await client.messages.create({
    model: "claude-opus-5",
    max_tokens: 4096,
    system:
      "You are the blog writer for FlowconvertLab, a live-chat / AI chatbot / customer-support tool for small businesses. Write practical, specific, no-fluff articles a small business owner would actually finish reading. Use concrete numbers and examples, short paragraphs, and a direct tone. Avoid generic AI-blog filler like 'In today's fast-paced world'. Never claim to endorse or badmouth a named competitor product.",
    output_config: { format: { type: "json_schema", schema } },
    messages: [
      {
        role: "user",
        content: `Write one new blog post for the FlowconvertLab blog.

Existing post titles (pick a different angle — don't repeat a topic already covered):
${recentTitles}

Existing categories: ${categories.join(", ")}

Pick a topic in this niche (live chat, AI chatbots, customer support, small business sales/marketing/ecommerce) not already covered above. Return only the fields in the schema.`,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock) {
    throw new Error("No text content block in the API response");
  }
  const draft = JSON.parse(textBlock.text);

  const baseSlug = slugify(draft.slug || draft.title);
  let finalSlug = baseSlug;
  let suffix = 2;
  while (existingSlugs.has(finalSlug)) {
    finalSlug = `${baseSlug}-${suffix++}`;
  }

  const newPost = {
    slug: finalSlug,
    title: draft.title,
    excerpt: draft.excerpt,
    category: draft.category,
    readTime: draft.readTime,
    date: formatDate(new Date()),
    color: "#4F7CFF",
    content: draft.content,
  };

  posts.unshift(newPost);
  fs.writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 2) + "\n");

  console.log(`Created post "${newPost.title}" (${finalSlug})`);

  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(
      process.env.GITHUB_OUTPUT,
      `title=${newPost.title}\nslug=${finalSlug}\n`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
