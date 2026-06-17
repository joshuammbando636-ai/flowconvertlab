"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { UserPlus, Code2, Palette, Rocket, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AFFILIATE_URL =
  "https://www.livechat.com/?a=w9-h_vpDg&utm_campaign=pp_livechat-default&utm_source=PP";

const INSTALL_STEPS = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Account",
    desc: "Sign up for LiveChat in 60 seconds. Start with a 14-day free trial — no credit card required.",
    color: "#FF6B35",
  },
  {
    step: "02",
    icon: Code2,
    title: "Install Widget",
    desc: "Copy one line of code and paste into your website. Works with WordPress, Shopify, Wix, or custom sites.",
    color: "#FF8C42",
  },
  {
    step: "03",
    icon: Palette,
    title: "Customize",
    desc: "Match colors to your brand, add your logo, and set welcome messages in minutes.",
    color: "#FFA066",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Go Live",
    desc: "Start chatting with visitors in real-time. Capture leads automatically and watch conversions grow.",
    color: "#FFB088",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Simple fade up for the card
    gsap.fromTo(
      cardRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 px-4"
      style={{ background: "#FDF8F0" }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Card */}
        <div
          ref={cardRef}
          className="p-6 sm:p-8 md:p-10"
          style={{
            background: "var(--bg-surface)",
            borderRadius: "32px",
            border: "1px solid rgba(255, 107, 53, 0.15)",
          }}
        >
          {/* Title */}
          <h2
            className="font-display font-bold text-center mb-3"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              lineHeight: "1.2",
              color: "#5C3E2B",
            }}
          >
            Launch your LiveChat conversion hub{" "}
            <span style={{ color: "#FF6B35" }}>today</span>
          </h2>

          <p
            className="text-center text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12"
            style={{ color: "#A67B5C" }}
          >
            No developer needed. Set up LiveChat in minutes, then turn every conversation
            into a branded hub that converts visitors into customers.
          </p>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {INSTALL_STEPS.map((step) => {
              const Icon = step.icon;
              
              return (
                <div key={step.step} className="relative">
                  <div className="p-4 sm:p-5">
                    {/* Step Number */}
                    <div 
                      className="text-5xl sm:text-6xl font-black mb-3 opacity-15"
                      style={{ color: step.color }}
                    >
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: step.color }} />
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ color: "#5C3E2B" }}
                    >
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: "#A67B5C" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Affiliate CTA at the end of the 4-step section */}
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
              style={{ background: "#FF6B00", boxShadow: "0 4px 20px rgba(255,107,0,0.4)" }}
            >
              Start your free LiveChat trial
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <p className="text-[11px] sm:text-xs mt-3" style={{ color: "#A67B5C" }}>
              14-day free trial · No credit card required. FlowconvertLab earns a commission
              when you sign up through our links, at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}