import type { Metadata } from "next";
import { Check, X, Star, Quote } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "LiveChat review (2026): honest pros, cons & verdict",
  description:
    "A straight look at where LiveChat shines and where it doesn't — so you can decide before you spend a cent. Rating: 4.6/5.",
  alternates: { canonical: "https://www.flowconvertlab.com/reviews" },
  openGraph: {
    title: "LiveChat review (2026): honest pros, cons & verdict",
    description: "A straight look at where LiveChat shines and where it doesn't — before you spend a cent.",
    url: "https://www.flowconvertlab.com/reviews",
    siteName: "FlowconvertLab",
    type: "website",
  },
};

const LOVE = [
  "Genuinely fast setup — live in around 10 minutes, no developer.",
  "Strong AI chatbot that hands off to humans without dropping context.",
  "Huge integration library (200+), including Shopify and WordPress.",
  "Clean, modern dashboard with real analytics and goal tracking.",
  "14-day free trial with no credit card.",
];

const SHORT = [
  "Pricing is per-agent and adds up as your team grows — not the budget option.",
  "The AI ChatBot add-on is priced separately from the core live chat plan.",
  "Smaller teams on a tight budget may find cheaper tools that cover the basics.",
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="LiveChat review · 2026"
        title="LiveChat review (2026): honest pros, cons & verdict"
        subtitle="A straight look at where LiveChat shines and where it doesn't — so you can decide before you spend a cent."
      />

      <Section width="narrow">
        {/* Quick verdict */}
        <Reveal>
          <div className="rounded-2xl border p-7 sm:p-8" style={{ background: "var(--accent-soft)", borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex" aria-label="4.6 out of 5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5" style={{ color: "var(--accent)", fill: i < 4 ? "var(--accent)" : "none" }} />
                ))}
              </div>
              <span className="font-display font-bold text-lg" style={{ color: "var(--text)" }}>4.6 / 5</span>
            </div>
            <h2 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text)" }}>Quick verdict</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
              LiveChat is a premium, polished platform with one of the best AI + human
              combinations available. It&apos;s not the cheapest, but for teams serious about
              turning conversations into revenue, it&apos;s worth it.
            </p>
          </div>
        </Reveal>

        {/* Pros / cons */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mt-8">
          <Reveal>
            <div className="card h-full p-6 sm:p-7">
              <h3 className="font-display font-bold text-lg mb-4" style={{ color: "var(--text)" }}>What we love</h3>
              <ul className="space-y-3">
                {LOVE.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full p-6 sm:p-7">
              <h3 className="font-display font-bold text-lg mb-4" style={{ color: "var(--text)" }}>Where it falls short (being honest)</h3>
              <ul className="space-y-3">
                {SHORT.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <X className="w-5 h-5 flex-shrink-0" style={{ color: "#E11D48" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Who it's for */}
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <Reveal>
            <div className="rounded-xl border p-6" style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}>
              <p className="font-semibold mb-1.5" style={{ color: "var(--text)" }}>Who it&apos;s for</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Growing businesses and e-commerce stores that want chat to actually drive
                sales, not just answer questions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-xl border p-6" style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}>
              <p className="font-semibold mb-1.5" style={{ color: "var(--text)" }}>Who should look elsewhere</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Hobby sites or tiny budgets that only need a basic free chat widget.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Honest testimonial placeholder — never invented */}
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-dashed p-7 text-center" style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}>
            <Quote className="w-6 h-6 mx-auto mb-3" style={{ color: "var(--accent)", opacity: 0.5 }} />
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>[Add a real customer quote + name + company here]</p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="text-center mt-10">
          <CTAButton size="lg">Try LiveChat free for 14 days</CTAButton>
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>{AFFILIATE_DISCLOSURE_SHORT}</p>
        </Reveal>
      </Section>
    </>
  );
}
