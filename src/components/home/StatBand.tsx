import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "200+", label: "Integrations ready to connect" },
  { value: "24/7", label: "AI coverage, even while you sleep" },
  { value: "~10 min", label: "Average setup time" },
  { value: "14 days", label: "Free trial, no card needed" },
];

export function StatBand() {
  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60} className="p-6 sm:p-8 text-center" style={{ background: "var(--bg-elevated)" }}>
              <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-1.5" style={{ color: "var(--accent)" }}>
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
