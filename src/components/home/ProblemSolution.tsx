import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TrendingDown, Sparkles } from "lucide-react";

export function ProblemSolution() {
  return (
    <Section surface>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Problem */}
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border p-7 sm:p-9" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
            <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(225,29,72,0.08)" }}>
              <TrendingDown className="w-6 h-6" style={{ color: "#E11D48" }} />
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4" style={{ color: "var(--text)" }}>
              Most websites lose customers in silence
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              A visitor lands, has a question, finds no answer, and leaves. No email, no sale,
              no second chance. Slow replies and &ldquo;we&apos;ll get back to you&rdquo; forms
              cost you the people who were ready to buy today.
            </p>
          </div>
        </Reveal>

        {/* Solution */}
        <Reveal delay={120} className="h-full">
          <div className="h-full rounded-2xl border p-7 sm:p-9" style={{ background: "var(--accent-soft)", borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)" }}>
            <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--bg-elevated)" }}>
              <Sparkles className="w-6 h-6" style={{ color: "var(--accent)" }} />
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4" style={{ color: "var(--text)" }}>
              FlowconvertLab fixes the gap.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
              With LiveChat&apos;s AI chatbot answering instantly and live agents stepping in
              when it counts, no visitor goes unanswered — day or night.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
