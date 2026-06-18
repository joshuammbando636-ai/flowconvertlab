import { Reveal } from "@/components/ui/Reveal";

const INTEGRATIONS = ["Shopify", "WordPress", "Mailchimp", "Slack", "HubSpot", "Squarespace"];

export function TrustStrip() {
  return (
    <section className="py-12 sm:py-14" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium tracking-wide mb-8" style={{ color: "var(--text-muted)" }}>
            Join 35,000+ brands already using LiveChat
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {INTEGRATIONS.map((name) => (
              <span
                key={name}
                className="font-display font-semibold text-base sm:text-lg"
                style={{ color: "var(--text)", opacity: 0.55 }}
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
