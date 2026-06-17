"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  MessageSquare, Bot, Headset, Database,
  Sparkles, Smartphone, ArrowRight
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const TOOLS = [
  {
    id: "live-chat",
    icon: MessageSquare,
    title: "Live Chat",
    tagline: "Be there when it matters most.",
    description:
      "Connect with customers in real-time when they're actively browsing and ready to buy. No forms, no waiting, no lost opportunities.",
    features: ["Real-time messaging", "File sharing", "Chat transcripts", "Mobile app"],
    bestFor: "E-commerce • SaaS • Service businesses",
    solves: "I'm interested but have a quick question before I buy",
    color: "#FF6B00",
    ctaLink: "https://www.livechat.com/?a=w9-h_vpDg&utm_campaign=pp_livechat-default&utm_source=PP",
  },
  {
    id: "chatbot",
    icon: Bot,
    title: "Chatbot",
    tagline: "Never sleep on a lead again.",
    description:
      "Automate conversations 24/7. Qualify leads, answer FAQs, and book meetings while you sleep. Your best sales rep that never clocks out.",
    features: ["Lead qualification", "24/7 availability", "Custom flows", "Human handoff"],
    bestFor: "High-traffic sites • Agencies • Startups",
    solves: "We're losing leads overnight and on weekends",
    color: "#FF6B00",
    ctaLink: "https://www.chatbot.com/?a=w9-h_vpDg&utm_campaign=pp_chatbot-default&utm_source=PP",
  },
  {
    id: "helpdesk",
    icon: Headset,
    title: "Helpdesk",
    tagline: "Turn support chaos into clarity.",
    description:
      "Stop losing requests in email threads. One unified inbox for all customer conversations. Assign, track, and resolve tickets with ease.",
    features: ["Shared inbox", "Ticket routing", "SLAs & priorities", "Performance reports"],
    bestFor: "Support teams • SaaS • E-commerce",
    solves: "Customer emails are getting lost and response times are slow",
    color: "#FF6B00",
    ctaLink: "https://www.helpdesk.com/?a=w9-h_vpDg&utm_campaign=pp_helpdesk-default&utm_source=PP",
  },
  {
    id: "knowledge-base",
    icon: Database,
    title: "Knowledge Base",
    tagline: "Let customers help themselves.",
    description:
      "Reduce repetitive questions by 60%. Create help articles, FAQs, and guides that customers can search anytime. Empower your users.",
    features: ["Searchable articles", "Categories & tags", "SEO optimized", "Feedback tracking"],
    bestFor: "Product companies • SaaS • Education",
    solves: "My team keeps answering the same questions over and over",
    color: "#FF6B00",
  },
  {
    id: "open-widget",
    icon: Sparkles,
    title: "Open Widget",
    tagline: "Start conversations before they bounce.",
    description:
      "Proactively engage visitors based on behavior. Trigger chat invitations at the perfect moment to capture attention and drive conversions.",
    features: ["Behavior triggers", "Custom messages", "Targeted campaigns", "A/B testing"],
    bestFor: "Landing pages • E-commerce • Lead gen",
    solves: "Visitors are leaving without saying anything",
    color: "#FF6B00",
  },
  {
    id: "text-platform",
    icon: Smartphone,
    title: "Text Platform",
    tagline: "Meet customers where they are.",
    description:
      "Connect via SMS, WhatsApp, and Messenger. Your customers prefer texting - give them a familiar, convenient way to reach you.",
    features: ["SMS integration", "WhatsApp Business", "Multi-channel inbox", "Automated replies"],
    bestFor: "Local businesses • Service providers • Retail",
    solves: "My customers hate email and prefer texting",
    color: "#FF6B00",
    ctaLink: "https://www.text.com/?a=w9-h_vpDg&utm_source=PP",
  },
];

export default function ToolsContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-content > *",
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.2 }
    );

    const cards = pageRef.current?.querySelectorAll(".tool-card") ?? [];
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.65, ease: "power3.out",
        stagger: { amount: 0.4 },
        scrollTrigger: { trigger: ".tools-grid", start: "top 85%" },
      }
    );
  }, { scope: pageRef });

  return (
    <div ref={pageRef} style={{ background: "var(--bg)" }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,107,0,0.08) 0%, transparent 70%)",
        }} />
        
        <div className="hero-content relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              color: "var(--text)",
            }}
          >
            🤔 Not sure which tool you need?{" "}
            <span style={{ color: "#FF6B00" }}>We got you.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
            Live Chat. Chatbot. Helpdesk. Knowledge Base. Open Widget. Text Platform. 
            Pick the right tool for your business — no guesswork required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding tools-grid" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              
              return (
                <div
                  key={tool.id}
                  className="tool-card p-6 rounded-2xl h-full flex flex-col"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${tool.color}15`,
                        border: `1px solid ${tool.color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: tool.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
                        {tool.title}
                      </h3>
                      <p className="text-sm" style={{ color: tool.color }}>
                        {tool.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {tool.description}
                  </p>

                  <div className="mb-4 p-3 rounded-lg" style={{ background: `${tool.color}08`, borderLeft: `3px solid ${tool.color}` }}>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: tool.color }}>
                      ✅ Solves
                    </p>
                    <p className="text-sm" style={{ color: "var(--text)" }}>
                      "{tool.solves}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium"
                        style={{
                          background: `${tool.color}10`,
                          color: tool.color,
                          border: `1px solid ${tool.color}25`,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                      🎯 Perfect for
                    </p>
                    <p className="text-sm font-medium mb-4" style={{ color: tool.color }}>
                      {tool.bestFor}
                    </p>
                    
                    {"ctaLink" in tool && tool.ctaLink && (
                      <Link
                        href={tool.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                        style={{ background: tool.color }}
                      >
                        Try {tool.title} Free <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}