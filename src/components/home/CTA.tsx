"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(contentRef.current?.children ?? [], 
      { y: 30, opacity: 0 }, 
      {
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.12, 
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );

    // Floating orbs
    gsap.to(orb1Ref.current, {
      y: -20, x: 10, duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1,
    });
    gsap.to(orb2Ref.current, {
      y: 15, x: -15, duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2,
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          style={{
            background: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 40%, #6366F1 75%, #4F46E5 100%)",
          }}
        >
          {/* Floating orbs inside CTA */}
          <div 
            ref={orb1Ref} 
            className="absolute top-8 left-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ 
              background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)", 
              filter: "blur(20px)" 
            }} 
          />
          <div 
            ref={orb2Ref} 
            className="absolute bottom-8 right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ 
              background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", 
              filter: "blur(30px)" 
            }} 
          />

          {/* Grid texture */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} 
          />

          <div ref={contentRef} className="relative z-10">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
              style={{ 
                background: "rgba(255,255,255,0.15)", 
                color: "white", 
                border: "1px solid rgba(255,255,255,0.25)" 
              }}
            >
              <Zap className="w-4 h-4" />
              Start converting in minutes
            </div>

            <h2
              className="font-display font-bold text-white mb-6"
              style={{ 
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)", 
                lineHeight: "1.1", 
                letterSpacing: "-0.025em" 
              }}
            >
              Ready to turn your links
              <br />into a conversion machine?
            </h2>

            <p className="text-lg text-white/75 max-w-xl mx-auto mb-10">
              Join 3,200+ LiveChat partners who use FlowconvertLab to close more deals, resolve tickets faster, and delight every customer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Main CTA Button: White with Cream Fill on Hover */}
              <Link
                href="/signup"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base overflow-hidden border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ 
                  backgroundColor: "#ffffff", 
                  color: "#1f2937" 
                }}
              >
                {/* Cream Fill - slides from left to right */}
                <span 
                  className="absolute inset-0 bg-[#F5E8C7] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"
                />

                {/* Text + Icon stays above the fill */}
                <span className="relative z-10 flex items-center gap-2.5">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/comparison"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-base font-medium text-white/90 transition-all duration-200 hover:text-white border border-white/20 hover:border-white/40 hover:-translate-y-0.5"
              >
                Compare plans
              </Link>
            </div>

            <p className="text-white/50 text-sm mt-6">
              No credit card · Free forever plan · Setup in 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}