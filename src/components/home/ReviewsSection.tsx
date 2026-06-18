import { Check, X, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

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

export function ReviewsSection() {
  return (
    <Section surface id="reviews">
      <SectionHeader
        label="Reviews"
        title="LiveChat review (2026): honest pros, cons & verdict"
        subtitle="A straight look at where LiveChat shines and where it doesn't — so you can decide before you spend a cent."
      />

      <div className="max-w-3xl mx-auto">
        {/* Quick verdict */}
        <Reveal>
          <div className="rounded-2xl p-7 sm:p-8" style={{ background: "var(--accent-soft)", border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex" aria-label="4.6 out of 5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5" style={{ color: "var(--accent)", fill: i < 4 ? "var(--accent)" : "none" }} />
                ))}
              </div>
              <span className="font-display font-bold text-lg" style={{ color: "var(--text)" }}>4.6 / 5</span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text)" }}>Quick verdict</h3>
            <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
              LiveChat is a premium, polished platform with one of the best AI + human
              combinations available. It&apos;s not the cheapest, but for teams serious about
              turning conversations into revenue, it&apos;s worth it.
            </p>
          </div>
        </Reveal>

        {/* Pros / cons */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mt-6">
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
                    <X className="w-5 h-5 flex-shrink-0" style={{ color: "#B4472A" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Who it's for */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <Reveal>
            <div className="rounded-xl p-6 card">
              <p className="font-semibold mb-1.5" style={{ color: "var(--text)" }}>Who it&apos;s for</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Growing businesses and e-commerce stores that want chat to actually drive
                sales, not just answer questions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-xl p-6 card">
              <p className="font-semibold mb-1.5" style={{ color: "var(--text)" }}>Who should look elsewhere</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Hobby sites or tiny budgets that only need a basic free chat widget.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
