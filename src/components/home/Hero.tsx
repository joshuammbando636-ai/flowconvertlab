"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { CTAButton } from "@/components/ui/CTAButton";

gsap.registerPlugin(SplitText, useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !headingRef.current) return;

      const split = new SplitText(headingRef.current, { type: "words" });
      gsap.set(headingRef.current, { opacity: 1 });
      gsap.from(split.words, {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.5)", // springy
        stagger: 0.08,
        delay: 0.15,
      });

      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.7,
      });

      return () => split.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative w-full h-[92vh] min-h-[560px] overflow-hidden">
      {/* Full-bleed image */}
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
        alt="A team turning conversations into customers"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Readability gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(20,20,18,0.30) 0%, rgba(20,20,18,0.15) 40%, rgba(20,20,18,0.75) 100%)" }}
      />

      {/* Content anchored to the bottom, Basel-style */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1
              ref={headingRef}
              className="font-display font-bold text-white leading-[0.95] opacity-0"
              style={{ fontSize: "clamp(3rem, 11vw, 8.5rem)", letterSpacing: "-0.03em" }}
            >
              Turn visitors<br />into customers
            </h1>

            <div className="lg:max-w-sm lg:pb-3">
              <p className="hero-fade text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                Welcome to AI-powered live chat that turns conversations into customers.
              </p>
              <div className="hero-fade">
                <CTAButton size="lg">Try LiveChat Free</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
