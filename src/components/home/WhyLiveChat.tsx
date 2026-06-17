import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function WhyLiveChat() {
  return (
    <Section width="narrow">
      <Reveal className="text-center">
        <span className="section-label mb-5">Why LiveChat</span>
        <h2 className="font-display font-bold mt-5 mb-5" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", lineHeight: "1.14", letterSpacing: "-0.02em", color: "var(--text)" }}>
          Why we recommend LiveChat
        </h2>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          We&apos;ve looked at the options. LiveChat has been the industry standard for over a
          decade, and the AI + human combination is hard to beat: instant answers when speed
          matters, real people when nuance matters. It&apos;s not the cheapest tool on the
          market — it&apos;s the one most teams stick with.
        </p>
        <Link
          href="/comparison"
          className="inline-flex items-center gap-2 mt-7 font-semibold text-sm"
          style={{ color: "var(--accent)" }}
        >
          Compare LiveChat vs alternatives
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
