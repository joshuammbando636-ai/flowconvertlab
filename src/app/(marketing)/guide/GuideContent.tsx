"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  BookOpen, CheckCircle2, ChevronRight, MessageSquare,
  Bot, Headset, Database, Zap
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  {
    id: "why-live-chat-matters",
    icon: MessageSquare,
    title: "Why your live chat strategy is leaving money on the table",
    color: "#FF6B00",
    content: `Most businesses think live chat is just about answering questions quickly. But the real opportunity is converting curious visitors into paying customers while they're actively engaged.

When you rely on basic chat responses without the right tools, you're missing out on:
• Capturing leads when your team is offline
• Automating responses to common questions that eat up agent time
• Providing instant answers from your knowledge base without making customers wait
• Tracking conversation insights that reveal what your customers actually want

A complete live chat + chatbot + helpdesk + knowledge base system changes everything.`,
    tip: "Websites using an integrated live chat and chatbot system see 3.8x higher lead conversion rates.",
  },
  {
    id: "chatbot-automation",
    icon: Bot,
    title: "How chatbots turn after-hours traffic into qualified leads",
    color: "#FF6B00",
    content: `The best chatbot setups follow a simple but powerful framework. Think of your chatbot as your best sales rep — one who never sleeps and never misses a follow-up.

Every high-converting chatbot needs:
1. A warm, branded greeting
2. Smart routing options
3. Lead capture flow
4. Instant answers from your knowledge base
5. Seamless handoff to human agents

Your chatbot qualifies leads while you sleep, and your live chat agents only handle conversations that truly need a human touch.`,
    tip: "Businesses using AI chatbots reduce support costs by 30% while increasing lead capture by 45%.",
  },
  {
    id: "knowledge-base-power",
    icon: Database,
    title: "Why your knowledge base is your secret sales weapon",
    color: "#FF6B00",
    content: `A well-organized knowledge base doesn't just reduce support tickets — it actively drives sales.

Before they ever talk to sales:
• Product comparison articles that help visitors choose
• Pricing breakdowns that answer "Is it worth it?"
• Getting started guides that show how easy onboarding is

During the buying decision:
• Case studies organized by industry
• Feature deep-dives showing your product in action
• Integration guides proving you work with their tools

Every article is an SEO opportunity that brings new customers to your site through search.`,
    tip: "Companies with a robust knowledge base see 40% fewer pre-sales questions.",
  },
  {
    id: "helpdesk-efficiency",
    icon: Headset,
    title: "The helpdesk advantage: turning support into sales",
    color: "#FF6B00",
    content: `Most companies treat their helpdesk as a cost center. The smart ones treat it as a revenue engine.

The old way:
• Support agent answers question
• Ticket gets closed
• No follow-up
• Missed opportunity

The new way:
• Support agent resolves issue AND identifies upgrade opportunity
• Helpdesk automatically tags customers based on conversation topics
• Marketing gets lists for targeted campaigns
• Sales gets notified when enterprise accounts have issues`,
    tip: "Customers who receive proactive support are 3x more likely to upgrade within 60 days.",
  },
  {
    id: "full-stack-integration",
    icon: Zap,
    title: "Why the full stack beats piecemeal tools",
    color: "#FF6B00",
    content: `When your live chat, chatbot, helpdesk, and knowledge base all work together, magic happens.

1. Smart escalation — Chatbot can't answer? Creates helpdesk ticket with full context
2. Intent-based routing — "Pricing" questions go to sales, not support
3. Self-improving knowledge base — Most-shared articles surface higher
4. 24/7 lead qualification — Chatbot qualifies leads overnight
5. Churn prediction — Flag accounts with multiple tickets before they cancel

One system. Complete visibility. Better results.`,
    tip: "Integrated platforms see 2.5x higher customer lifetime value.",
  },
];

export default function GuideContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".hero-content", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, { scope: pageRef });

  return (
    <div ref={pageRef} style={{ background: "var(--bg)" }}>
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="hero-content relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="font-display font-bold mb-4 sm:mb-6"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Turn customer conversations{" "}
            <span style={{ color: "#FF6B00" }}>into revenue</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            A practical guide for businesses ready to transform support into sales.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16" style={{ background: "#FDF8F0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "rgba(255,107,0,0.15)", background: "var(--bg-surface)" }}>
            <h2 className="font-semibold mb-6 text-sm uppercase tracking-widest" style={{ color: "#A67B5C" }}>
              Table of Contents
            </h2>
            
            <ol className="space-y-1 sm:space-y-2">
              {SECTIONS.map((section, i) => {
                const Icon = section.icon;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all duration-200 hover:bg-white/50 group"
                    >
                      <span className="text-base sm:text-lg font-bold w-6 sm:w-8" style={{ color: section.color }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: section.color }} />
                      <span className="text-sm sm:text-base font-medium flex-1" style={{ color: "#5C3E2B" }}>
                        {section.title}
                      </span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#A67B5C" }} />
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--bg)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          {SECTIONS.map((section, i) => {
            const Icon = section.icon;
            return (
              <div key={section.id} id={section.id}>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${section.color}15`, border: `1px solid ${section.color}25` }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: section.color }} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest" style={{ color: section.color }}>
                    Chapter {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2
                  className="font-display font-bold mb-4 sm:mb-6"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                    lineHeight: "1.3",
                    letterSpacing: "-0.015em",
                    color: "var(--text)",
                  }}
                >
                  {section.title}
                </h2>

                <div className="prose-custom space-y-4">
                  {section.content.split("\n\n").map((para, pi) => (
                    <div key={pi}>
                      {para.includes("•") || para.match(/^\d+\./) ? (
                        <div className="space-y-2 sm:space-y-3">
                          {para.split("\n").map((line, li) => {
                            const cleaned = line.replace(/^[•\d+\.]\s*/, "");
                            const isBullet = line.startsWith("•") || line.match(/^\d+\./);
                            return isBullet ? (
                              <div key={li} className="flex items-start gap-2 sm:gap-3">
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: section.color }} />
                                <span className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text)" }}>
                                  {cleaned}
                                </span>
                              </div>
                            ) : (
                              <p key={li} className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text)" }}>
                                {line}
                              </p>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text)" }}>
                          {para}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl"
                  style={{
                    background: `${section.color}08`,
                    border: `1px solid ${section.color}20`,
                  }}
                >
                  <div className="flex gap-3 sm:gap-4">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: section.color }} />
                    <div>
                      <p className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-1 sm:mb-2" style={{ color: section.color }}>
                        Key Insight
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text)" }}>
                        {section.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}