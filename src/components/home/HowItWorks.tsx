import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const STEPS = [
  {
    n: "01",
    title: "Start your free trial",
    desc: "Sign up for LiveChat in 60 seconds. 14 days free, no credit card.",
  },
  {
    n: "02",
    title: "Add the widget",
    desc: "Paste one line of code, or use the WordPress / Shopify / Wix plugin. Done in ~10 minutes.",
  },
  {
    n: "03",
    title: "Train your AI & brand it",
    desc: "Connect your knowledge sources, match your colors and logo, set a welcome message.",
  },
  {
    n: "04",
    title: "Go live & convert",
    desc: "The AI handles routine questions, your team closes the rest, and you watch leads roll in.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" surface>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 80}>
            <div className="card h-full p-6">
              <span className="font-display font-bold text-4xl" style={{ color: "var(--accent)", opacity: 0.25 }}>
                {s.n}
              </span>
              <h3 className="font-display font-bold text-lg mt-3 mb-2" style={{ color: "var(--text)" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
