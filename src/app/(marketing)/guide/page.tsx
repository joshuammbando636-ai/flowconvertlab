import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { AFFILIATE_URL, AFFILIATE_REL, AFFILIATE_DISCLOSURE_SHORT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to set up live chat that actually converts",
  description:
    "A practical, no-fluff guide to turning website chats into customers — from first install to your first sale.",
  alternates: { canonical: "https://www.flowconvertlab.com/guide" },
  openGraph: {
    title: "How to set up live chat that actually converts",
    description: "A practical, no-fluff guide to turning website chats into customers.",
    url: "https://www.flowconvertlab.com/guide",
    siteName: "FlowconvertLab",
    type: "article",
  },
};

export default function GuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="The guide"
        title="How to set up live chat that actually converts"
        subtitle="A practical, no-fluff guide to turning website chats into customers — from first install to your first sale."
      />

      <Section width="narrow">
        <article className="space-y-10">
          <Reveal as="section">
            <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--text)" }}>
              1. Why live chat beats contact forms
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Speed wins. A visitor with a question wants an answer now, not in 24 hours. Live
              chat + AI captures them while they&apos;re still interested.
            </p>
          </Reveal>

          <Reveal as="section">
            <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--text)" }}>
              2. Choosing the right tool
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              What to look for: easy setup, AI that hands off to humans, the integrations you
              already use, and clear analytics.{" "}
              <Link href="/comparison" className="underline" style={{ color: "var(--accent)" }}>
                See our full comparison
              </Link>.
            </p>
          </Reveal>

          <Reveal as="section">
            <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--text)" }}>
              3. Installing in under 10 minutes
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Sign up, paste the snippet (or use your CMS plugin), and you&apos;re live.{" "}
              <a href={AFFILIATE_URL} target="_blank" rel={AFFILIATE_REL} className="underline font-semibold" style={{ color: "var(--accent)" }}>
                Start your free trial
              </a>.
            </p>
          </Reveal>

          <Reveal as="section">
            <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--text)" }}>
              4. Setting up your AI chatbot the right way
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Feed it your FAQs and help articles, give it a friendly tone, and set clear rules
              for when to bring in a human.
            </p>
          </Reveal>

          <Reveal as="section">
            <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--text)" }}>
              5. Writing chat messages that convert
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Greet proactively, keep replies short, ask one question at a time, and always point
              toward a next step (signup, demo, purchase).
            </p>
          </Reveal>

          <Reveal as="section">
            <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--text)" }}>
              6. Tracking what matters
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Set goals — leads captured, sales made — and watch which conversations drive
              revenue.
            </p>
          </Reveal>
        </article>

        {/* Closing CTA */}
        <Reveal className="mt-12 text-center rounded-2xl border p-8" style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}>
          <p className="font-display font-bold text-xl mb-5" style={{ color: "var(--text)" }}>
            Ready to put this into action?
          </p>
          <CTAButton size="lg" />
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>{AFFILIATE_DISCLOSURE_SHORT}</p>
        </Reveal>
      </Section>
    </>
  );
}
