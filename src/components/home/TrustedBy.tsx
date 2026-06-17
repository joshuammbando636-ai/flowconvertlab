"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const LOGOS = [
  { name: "LiveChat", abbr: "LC", color: "#FF6B00" },
  { name: "ChatBot", abbr: "CB", color: "#10B981" },
  { name: "HelpDesk", abbr: "HD", color: "#3B82F6" },
  { name: "KnowledgeBase", abbr: "KB", color: "#EC4899" },
];

export function TrustedBy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  // Smooth logo stagger animation
  useGSAP(() => {
    const logoEls = logosRef.current?.children;
    if (!logoEls) return;

    gsap.fromTo(
      logoEls,
      { 
        y: 15, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 border-y" style={{ borderColor: "var(--border)" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-center text-xs sm:text-sm font-medium mb-8 sm:mb-10 tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}>
          Trusted by LiveChat Partners Worldwide
        </p>

        {/* Logos - Your original flex layout, just mobile optimized */}
        <div ref={logosRef} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-surface)",
              }}
            >
              <span
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ background: logo.color }}
              >
                {logo.abbr}
              </span>
              <span className="text-xs sm:text-sm font-semibold" style={{ color: "var(--text)" }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats strip - Your original layout, mobile responsive */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-px border rounded-2xl overflow-hidden"
          style={{ borderColor: "var(--border)", background: "var(--border)" }}>
          {[
            { value: "14-day", label: "Free trial" },
            { value: "No card", label: "Required to start" },
            { value: "1 line", label: "Of code to install" },
            { value: "24/7", label: "LiveChat support" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 sm:p-6 text-center" style={{ background: "var(--bg-surface)" }}>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold font-display mb-1" style={{ color: "var(--text)" }}>
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-xs" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}