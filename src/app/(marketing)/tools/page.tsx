import type { Metadata } from "next";
import { MessageCircle, Bot, Inbox, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tools — the complete customer conversation toolkit",
  description:
    "LiveChat and its add-ons — ChatBot, HelpDesk, and KnowledgeBase — work as one. Start with live chat, then layer on automation, ticketing, and self-service as you grow.",
  alternates: { canonical: "https://www.flowconvertlab.com/tools" },
  openGraph: {
    title: "Tools — the complete customer conversation toolkit",
    description:
      "LiveChat and its add-ons work as one. Start with live chat, then layer on automation, ticketing, and self-service.",
    url: "https://www.flowconvertlab.com/tools",
    siteName: "FlowconvertLab",
    type: "website",
  },
};

const TOOLS = [
  {
    icon: MessageCircle,
    name: "LiveChat",
    tagline: "Real-time chat that converts",
    desc: "The core platform. Talk to visitors the moment they have a question, watch who's browsing, and turn conversations into sales with proactive invitations and goal tracking.",
    bestFor: "Any business that wants to capture leads in real time.",
  },
  {
    icon: Bot,
    name: "ChatBot",
    tagline: "AI that works 24/7",
    desc: "Automate answers to repetitive questions, qualify leads, and stay responsive even when you're offline. Connects to LiveChat in a few clicks — no coding.",
    bestFor: "Teams drowning in the same questions over and over.",
  },
  {
    icon: Inbox,
    name: "HelpDesk",
    tagline: "Ticketing that keeps nothing falling through the cracks",
    desc: "Turn emails and chats into organized tickets, route them to the right person, and track resolution.",
    bestFor: "Teams that need email support alongside live chat.",
  },
  {
    icon: BookOpen,
    name: "KnowledgeBase",
    tagline: "Self-service that saves you hours",
    desc: "Publish help articles your customers (and your AI bot) can pull answers from instantly. Fewer repeat questions, faster resolutions.",
    bestFor: "Businesses wanting customers to help themselves.",
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The LiveChat suite"
        title="The complete customer conversation toolkit"
        subtitle="LiveChat and its add-ons work as one. Start with live chat, then layer on automation, ticketing, and self-service as you grow."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {TOOLS.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <Reveal key={tool.name} delay={(i % 2) * 100}>
                <div className="card h-full p-7 sm:p-8 flex flex-col">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--accent-soft)" }}>
                    <Icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
                  </span>
                  <h2 className="font-display font-bold text-xl" style={{ color: "var(--text)" }}>
                    {tool.name} <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>— {tool.tagline}</span>
                  </h2>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {tool.desc}
                  </p>
                  <p className="mt-4 text-sm" style={{ color: "var(--text)" }}>
                    <span className="font-semibold">Best for:</span> {tool.bestFor}
                  </p>
                  <div className="mt-6 pt-2">
                    <CTAButton size="md">Start free trial</CTAButton>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Closing band */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10 sm:py-16 text-center" style={{ background: "#0B1220" }}>
            <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 70% at 50% 0%, var(--accent-glow) 0%, transparent 70%)" }} />
            <div className="relative">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: "1.15" }}>
                Better together
              </h2>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-8">
                Connect all four into one dashboard and one smooth conversation flow.
              </p>
              <CTAButton size="lg" />
              <p className="text-xs text-white/40 mt-4">{AFFILIATE_DISCLOSURE_SHORT}</p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
