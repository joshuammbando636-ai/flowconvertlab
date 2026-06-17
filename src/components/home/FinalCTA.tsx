import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-14 sm:px-10 sm:py-20 text-center"
            style={{ background: "#0B1220" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(60% 70% at 50% 0%, var(--accent-glow) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", lineHeight: "1.12", letterSpacing: "-0.02em" }}>
                Ready to stop losing visitors?
              </h2>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-8">
                Set up LiveChat today and turn your next conversation into a customer.
              </p>
              <CTAButton size="lg" />
              <p className="text-sm text-white/55 mt-5">No credit card required · Cancel anytime</p>
              <p className="text-xs text-white/40 mt-2">{AFFILIATE_DISCLOSURE_SHORT}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
