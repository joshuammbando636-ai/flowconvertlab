import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "FlowconvertLab — Smart Link Pages for LiveChat Partners",
  description:
    "Turn chaotic live chat resource links into beautiful, high-converting hubs. Built for LiveChat partners and customer support teams.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      
      
      
    </>
  );
}
