import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { StatBand } from "@/components/home/StatBand";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyLiveChat } from "@/components/home/WhyLiveChat";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { FAQ } from "@/components/home/FAQ";
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
      <TrustStrip />
      <StatBand />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <WhyLiveChat />
      <ReviewsTeaser />
      <FAQ />
      <FinalCTA />
    </>
  );
}
