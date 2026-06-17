import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTA_SECONDARY_LABEL, AFFILIATE_DISCLOSURE_SHORT } from "@/lib/constants";
import { Bot, MessageSquare } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "calc(var(--nav-height) + 3rem)" }}
    >
      {/* Soft accent wash, decorative only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 0%, var(--accent-soft) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <Reveal>
            <span className="section-label mb-5">Live chat + AI chatbot, in one platform</span>
            <h1
              className="font-display font-bold mt-5"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.025em",
                color: "var(--text)",
              }}
            >
              Turn website visitors into customers — automatically
            </h1>
            <p
              className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              Add LiveChat&apos;s AI chatbot and live chat to your site in minutes. Every
              visitor gets an instant answer, every lead gets captured, and your team only
              handles the conversations that actually matter.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <CTAButton size="lg" />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 sm:py-4 text-base font-semibold border transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)", color: "var(--text)", background: "var(--bg-elevated)" }}
              >
                {CTA_SECONDARY_LABEL}
              </a>
            </div>

            <p className="mt-5 text-sm" style={{ color: "var(--text-muted)" }}>
              No credit card required · ~10-minute setup · Works with WordPress, Shopify &amp; 200+ tools
            </p>
            <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
              {AFFILIATE_DISCLOSURE_SHORT}
            </p>
          </Reveal>

          {/* UI mockup (no stock photo) */}
          <Reveal delay={120} className="lg:justify-self-end w-full max-w-md mx-auto">
            <div
              className="rounded-2xl border p-5 sm:p-6"
              style={{ background: "var(--bg-elevated)", borderColor: "var(--border)", boxShadow: "0 24px 60px rgba(11,18,32,0.10)" }}
            >
              <div className="flex items-center gap-2 pb-4 mb-4 border-b" style={{ borderColor: "var(--border)" }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>Chat with us</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>Online</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--accent-soft)" }}>
                    <Bot className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  </span>
                  <p className="text-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%]" style={{ background: "var(--bg-surface)", color: "var(--text)" }}>
                    Hi! 👋 Looking for the right plan? I can help you find it in 30 seconds.
                  </p>
                </div>
                <div className="flex items-start gap-2 justify-end">
                  <p className="text-sm rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%] text-white" style={{ background: "var(--accent)" }}>
                    Do you integrate with Shopify?
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--accent-soft)" }}>
                    <Bot className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  </span>
                  <p className="text-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%]" style={{ background: "var(--bg-surface)", color: "var(--text)" }}>
                    Yes — plus 200+ more. Want me to connect you to a specialist?
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-full border px-4 py-2.5" style={{ borderColor: "var(--border)" }}>
                <MessageSquare className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>Type your message…</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
