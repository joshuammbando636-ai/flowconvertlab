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
      const heading = headingRef.current;
      if (!heading) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        // No animation — just make sure the heading is visible (it starts at
        // opacity-0 for the animated path).
        gsap.set(heading, { opacity: 1 });
        return;
      }

      let split: SplitText | null = null;

      // Smooth, weighted rise — no overshoot/bounce. Words slide up from behind
      // a clipped line, so the reveal reads clean rather than springy.
      const play = () => {
        split = new SplitText(heading, { type: "lines,words", linesClass: "overflow-hidden" });
        gsap.set(heading, { opacity: 1 });
        gsap.from(split.words, {
          yPercent: 100,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.06,
        });
        gsap.from(".hero-fade", {
          y: 16,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.25,
        });
      };

      // Start only once the preloader has lifted, so the entrance isn't wasted
      // playing behind the loading screen. If the page was already ready before
      // this mounted, play immediately.
      if (document.documentElement.dataset.ready === "true") {
        play();
      } else {
        window.addEventListener("site:ready", play, { once: true });
      }

      return () => {
        window.removeEventListener("site:ready", play);
        split?.revert();
      };
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative w-full h-screen min-h-[600px] overflow-hidden">
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
