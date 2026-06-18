import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "FlowconvertLab — Turn website visitors into customers with LiveChat",
  description:
    "Add LiveChat's AI chatbot and live chat to your site in minutes. Every visitor gets an instant answer, every lead gets captured — no developer needed.",
  alternates: { canonical: "https://www.flowconvertlab.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FinalCTA />
    </>
  );
}
