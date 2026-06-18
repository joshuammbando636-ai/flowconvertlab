import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImageCtaBand } from "@/components/ui/ImageCtaBand";
import { LIVECHAT_PRICING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "LiveChat vs Intercom vs Tidio vs Zendesk",
  description:
    "Four popular live chat options, compared honestly on what actually matters — AI, setup, integrations, free trials and pricing.",
  alternates: { canonical: "https://www.flowconvertlab.com/comparison" },
  openGraph: {
    title: "LiveChat vs Intercom vs Tidio vs Zendesk",
    description: "Four popular options, compared honestly on what actually matters.",
    url: "https://www.flowconvertlab.com/comparison",
    siteName: "FlowconvertLab",
    type: "website",
  },
};

const COLS = ["LiveChat", "Intercom", "Tidio", "Zendesk"];
const ROWS: { label: string; values: string[] }[] = [
  { label: "Best for", values: ["Sales-focused chat", "Enterprise AI", "Small budgets", "Big support teams"] },
  { label: "AI chatbot", values: ["Strong (add-on)", "Strongest (Fin)", "Good, basic", "Good"] },
  { label: "Setup", values: ["~10 min, easy", "Moderate", "Very easy", "More complex"] },
  { label: "Integrations", values: ["200+", "Many", "Fewer", "Many"] },
  { label: "Free trial", values: ["14 days, no card", "14 days", "Free plan + paid", "Trial"] },
  { label: "Starting price", values: ["Verify on site", "Higher", "Lowest", "Mid–high"] },
];

export default function ComparisonPage() {
  return (
    <>
      <PageHeader
        title="LiveChat vs Intercom vs Tidio vs Zendesk"
        subtitle="Four popular options, compared honestly on what actually matters."
      />

      <Section>
        <Reveal>
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
            Prices change often — always confirm current figures on each provider&apos;s site.{" "}
            <a href={LIVECHAT_PRICING_URL} target="_blank" rel="sponsored nofollow noopener" className="underline" style={{ color: "var(--accent)" }}>
              See LiveChat pricing
            </a>.
          </p>

          {/* Responsive: horizontal scroll on small screens */}
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--border)" }}>
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr style={{ background: "var(--bg-surface)" }}>
                  <th className="text-left text-sm font-semibold p-4" style={{ color: "var(--text-muted)" }}></th>
                  {COLS.map((c, i) => (
                    <th
                      key={c}
                      className="text-left text-sm font-display font-bold p-4"
                      style={{ color: i === 0 ? "var(--accent)" : "var(--text)" }}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-t" style={{ borderColor: "var(--border)" }}>
                    <td className="text-sm font-semibold p-4 align-top" style={{ color: "var(--text)" }}>{row.label}</td>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className="text-sm p-4 align-top"
                        style={{
                          color: i === 0 ? "var(--text)" : "var(--text-muted)",
                          background: i === 0 ? "var(--accent-soft)" : "transparent",
                          fontWeight: i === 0 ? 600 : 400,
                        }}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Our take */}
        <Reveal className="mt-10 max-w-3xl">
          <div className="rounded-2xl border p-7 sm:p-8" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
            <h2 className="font-display font-bold text-xl mb-3" style={{ color: "var(--text)" }}>Our take</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Tidio wins on price for tiny teams. Intercom wins on raw AI power for enterprises
              (at a premium). Zendesk suits large, ticket-heavy support orgs. For most businesses
              that want a polished platform where chat drives revenue — and that&apos;s easy to
              launch — <strong style={{ color: "var(--text)" }}>LiveChat hits the sweet spot.</strong>
            </p>
          </div>
        </Reveal>

      </Section>

      <ImageCtaBand
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=80"
        title="The polished platform where chat drives revenue"
        subtitle="See why most businesses stick with LiveChat — try it free for 14 days."
        ctaLabel="Try LiveChat Free"
      />
    </>
  );
}
