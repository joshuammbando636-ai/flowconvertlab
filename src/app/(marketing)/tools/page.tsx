import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ToolsShowcase } from "@/components/tools/ToolsShowcase";
import { ImageCtaBand } from "@/components/ui/ImageCtaBand";

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
        title="The complete customer conversation toolkit"
        subtitle="LiveChat and its add-ons work as one. Start with live chat, then layer on automation, ticketing, and self-service as you grow."
      />

      <Section>
        <ToolsShowcase />
      </Section>

      <ImageCtaBand
        image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=2000&q=80"
        title="Turn your next conversation into a customer"
        subtitle="Set up LiveChat in minutes — no developer needed."
      />
    </>
  );
}
