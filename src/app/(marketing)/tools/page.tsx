import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ToolsShowcase } from "@/components/tools/ToolsShowcase";

export const metadata: Metadata = {
  title: "Tools — the complete customer conversation toolkit",
  description:
    "LiveChat and its add-ons — ChatBot, HelpDesk, and KnowledgeBase — work as one. Start with live chat, then layer on automation, ticketing, and self-service as you grow.",
  alternates: { canonical: "https://www.flowconvertlab.com/tools" },
  openGraph: {
    title: "Tools — the complete customer conversation toolkit",
    description:
      "LiveChat and its add-ons work as one. Start with live chat, then layer on automation, ticketing, and self-service.",
    url: "https://www.flowconvertlab.com/tools",
    siteName: "FlowconvertLab",
    type: "website",
  },
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The LiveChat suite"
        title="The complete customer conversation toolkit"
        subtitle="LiveChat and its add-ons work as one. Start with live chat, then layer on automation, ticketing, and self-service as you grow."
      />

      <Section>
        <ToolsShowcase />
      </Section>
    </>
  );
}
