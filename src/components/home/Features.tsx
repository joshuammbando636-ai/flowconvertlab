import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Bot, MessageCircle, Send, BarChart3, Plug, Inbox } from "lucide-react";

const FEATURES = [
  {
    icon: Bot,
    title: "AI Chatbot, around the clock",
    desc: "Answer common questions instantly, qualify leads, and capture details 24/7 — even outside business hours.",
  },
  {
    icon: MessageCircle,
    title: "Live chat for the moments that matter",
    desc: "Real human agents jump in for complex questions, with full context handed over from the bot. Backed by an AI Copilot that suggests replies in real time.",
  },
  {
    icon: Send,
    title: "Proactive chat invitations",
    desc: "Trigger a message based on what visitors do — pages viewed, time on site, or cart value — and reach them before they bounce.",
  },
  {
    icon: BarChart3,
    title: "Visitor insights dashboard",
    desc: "See who's on your site, where they came from, and track real goals like sales, signups, and captured leads.",
  },
  {
    icon: Plug,
    title: "200+ integrations",
    desc: "Connect Shopify, WordPress, Mailchimp, Slack and more. Your tools, working together in the background.",
  },
  {
    icon: Inbox,
    title: "One inbox for every channel",
    desc: "Chat, email tickets (HelpDesk), and a self-service KnowledgeBase — managed from a single, clean dashboard.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <div className="card h-full p-6">
                <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--accent-soft)" }}>
                  <Icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
                </span>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--text)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {f.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
