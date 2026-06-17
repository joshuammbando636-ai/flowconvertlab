import { Reveal } from "@/components/ui/Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}

/** Inner-page hero. Adds top padding to clear the fixed navbar. */
export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "calc(var(--nav-height) + 3.5rem)", paddingBottom: "1rem" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(55% 60% at 50% 0%, var(--accent-soft) 0%, transparent 70%)" }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          {eyebrow && <span className="section-label mb-5">{eyebrow}</span>}
          <h1
            className="font-display font-bold mt-5"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.025em", color: "var(--text)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
