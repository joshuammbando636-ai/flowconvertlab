"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FAQS = [
  {
    q: "Is there really a free trial?",
    a: "Yes — 14 days, full features, no credit card required.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. Paste one snippet or use a plugin. Most teams are live in about 10 minutes.",
  },
  {
    q: "Will AI replace my team?",
    a: "No — it supports them. The bot handles repetitive questions and hands real conversations to your agents with full context.",
  },
  {
    q: "What can I connect it to?",
    a: "Over 200 tools, including Shopify, WordPress, Mailchimp, and Slack.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Start on the free trial and choose a plan only if it's working for you.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section width="narrow" id="faq">
      <SectionHeader title="Questions, answered" />

      <div className="space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
              >
                <span className="font-semibold text-base" style={{ color: "var(--text)" }}>
                  {item.q}
                </span>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                  style={{ color: "var(--accent)", transform: isOpen ? "rotate(180deg)" : "none" }}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
