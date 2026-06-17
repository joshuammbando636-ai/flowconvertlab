import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ReviewsTeaser() {
  return (
    <Section surface>
      <SectionHeader
        label="Reviews"
        title="Don't take our word for it"
        subtitle="See our honest, no-spin breakdown of what LiveChat does well — and where it falls short — before you commit."
      />

      <Reveal className="max-w-2xl mx-auto">
        {/* Placeholder — replace with a REAL customer quote only. Never invented. */}
        <div
          className="rounded-2xl border border-dashed p-7 sm:p-9 text-center"
          style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
        >
          <Quote className="w-7 h-7 mx-auto mb-4" style={{ color: "var(--accent)", opacity: 0.5 }} />
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            [Add a real customer quote + name + company here]
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 font-semibold text-sm"
            style={{ color: "var(--accent)" }}
          >
            Read our full LiveChat review
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
