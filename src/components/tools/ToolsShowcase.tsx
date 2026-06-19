"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AFFILIATE_URL, AFFILIATE_REL } from "@/lib/constants";

interface Tool {
  label: string;
  title: string;
  desc: string;
  img: string;
}

const TOOLS: Tool[] = [
  {
    label: "Real-time chat",
    title: "LiveChat",
    desc: "The core platform. Talk to visitors the moment they have a question, watch who's browsing, and turn conversations into sales with proactive invitations and goal tracking. Best for any business that wants to capture leads in real time.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "AI · 24/7",
    title: "ChatBot",
    desc: "Automate answers to repetitive questions, qualify leads, and stay responsive even when you're offline. Connects to LiveChat in a few clicks — no coding. Best for teams drowning in the same questions over and over.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Ticketing",
    title: "HelpDesk",
    desc: "Turn emails and chats into organized tickets, route them to the right person, and track resolution. Best for teams that need email support alongside live chat.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Self-service",
    title: "KnowledgeBase",
    desc: "Publish help articles your customers (and your AI bot) can pull answers from instantly. Fewer repeat questions, faster resolutions. Best for businesses wanting customers to help themselves.",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
  },
];

function Card({ tool, active, onActivate }: { tool: Tool; active: boolean; onActivate: () => void }) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel={AFFILIATE_REL}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      style={{ flexGrow: active ? 1.6 : 1, transition: "flex-grow 0.55s cubic-bezier(0.4, 0, 0.2, 1)" }}
      className="group relative block min-w-0 h-[400px] md:basis-0 md:h-[440px] focus:outline-none"
    >
      {/* Soft rounded image card */}
      <div className="absolute inset-0 rounded-[36px] overflow-hidden">
        <Image src={tool.img} alt={tool.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(20,20,18,0.25) 0%, rgba(20,20,18,0.20) 45%, rgba(20,20,18,0.82) 100%)" }}
        />
        <div className="absolute inset-0 p-6 sm:p-7 flex flex-col">
          <span className="glass-chip self-start rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
            {tool.label}
          </span>
          <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mt-4 max-w-[14ch]">{tool.title}</h3>
          <p
            className={cn(
              "mt-auto text-sm leading-relaxed text-white/90",
              // Mobile: always show, clamped so it never overflows the card.
              "pr-20 line-clamp-4",
              // Desktop: arrow is outside, reveal on hover.
              "md:pr-0 md:line-clamp-none md:overflow-hidden md:transition-all md:duration-500",
              active ? "md:max-h-48 md:opacity-100" : "md:max-h-0 md:opacity-0"
            )}
          >
            {tool.desc}
          </p>
        </div>
      </div>

      {/* Arrow — inside on mobile (solid accent), outside the corner on desktop */}
      <span
        className={cn(
          "absolute w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300",
          "bottom-5 right-5 md:bottom-0 md:right-0 md:translate-x-[20%] md:translate-y-[20%]",
          active
            ? "bg-[var(--accent)] text-white"
            : "bg-[var(--accent)] text-white md:bg-[var(--bg)] md:text-[var(--text)] md:border md:border-black/20"
        )}
      >
        {active ? <ArrowRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
      </span>
    </a>
  );
}

function Row({ pair }: { pair: Tool[] }) {
  // No card expanded at rest — only on hover/focus
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="flex flex-col md:flex-row gap-5" onMouseLeave={() => setActive(null)}>
      {pair.map((tool, i) => (
        <Card key={tool.title} tool={tool} active={active === i} onActivate={() => setActive(i)} />
      ))}
    </div>
  );
}

export function ToolsShowcase() {
  const rows = [TOOLS.slice(0, 2), TOOLS.slice(2, 4)];
  return (
    <div className="flex flex-col gap-5">
      {rows.map((pair, i) => (
        <Row key={i} pair={pair} />
      ))}
    </div>
  );
}
