import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service — FlowconvertLab",
  description: "Terms of Service for FlowconvertLab. Learn about acceptable use, account responsibility, and our service policies.",
  alternates: { canonical: "https://www.flowconvertlab.com/terms" },
  openGraph: {
    title: "Terms of Service — FlowconvertLab",
    description: "Terms of Service for FlowconvertLab.",
    url: "https://www.flowconvertlab.com/terms",
    siteName: "FlowconvertLab",
    type: "website",
  },
};

const SECTIONS = [
  { h: "1. Acceptable Use", p: "You agree not to misuse our services or help anyone else do so. This includes not using our platform for spam, illegal content, or harassment." },
  { h: "2. Account Responsibility", p: "You are responsible for maintaining the security of your account and password." },
  { h: "3. Intellectual Property", p: "FlowconvertLab and its content are protected by copyright and other laws." },
  { h: "4. Affiliate Links", p: "FlowconvertLab is an independent site and a LiveChat affiliate. Some links are affiliate links; if you sign up through them we may earn a commission, at no extra cost to you." },
  { h: "5. Termination", p: "We may suspend or terminate access for violations of these terms." },
  { h: "6. Disclaimer", p: "Our services and content are provided “as is” without warranties of any kind." },
  { h: "7. Contact", p: "Questions? Contact us at legal@flowconvertlab.com." },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: April 14, 2026"
      />

      <Section width="narrow">
        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
          By using FlowconvertLab, you agree to these terms. Please read them carefully.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text)" }}>{s.h}</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.p}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
