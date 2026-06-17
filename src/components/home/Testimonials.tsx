"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "LiveChat Partner",
    company: "TechSupport Co.",
    avatar: "SC",
    color: "#3B82F6",
    stars: 5,
    quote:
      "FlowconvertLab completely transformed how our team handles customer onboarding. Instead of pasting 6 different links, we send one beautiful page. Our CSAT scores went up 22% in the first month.",
    metric: "22% CSAT increase",
  },
  {
    name: "Marcus Webb",
    role: "Head of Support",
    company: "GrowthBase",
    avatar: "MW",
    color: "#6366F1",
    stars: 5,
    quote:
      "We were skeptical at first, but the results speak for themselves. 847 clicks on our resource hub last week, and our agents save 15 minutes per shift not hunting for links.",
    metric: "847 clicks/week",
  },
  {
    name: "Priya Sharma",
    role: "CX Lead",
    company: "CloudDesk",
    avatar: "PS",
    color: "#10B981",
    stars: 5,
    quote:
      "The analytics alone are worth the price. I finally know which resources actually help customers — and which ones I need to replace. Setup literally took 90 seconds.",
    metric: "90 second setup",
  },
  {
    name: "James Okafor",
    role: "Partner Manager",
    company: "SupportSuite",
    avatar: "JO",
    color: "#F59E0B",
    stars: 5,
    quote:
      "My agents love it. We branded it to match our client portal, and now every customer interaction feels polished and professional. It's become essential to our workflow.",
    metric: "Team favorite tool",
  },
  {
    name: "Elena Kowalski",
    role: "Customer Success",
    company: "HelpFlux",
    avatar: "EK",
    color: "#EC4899",
    stars: 5,
    quote:
      "Converting trial users to paid is our #1 challenge. FlowconvertLab's smart CTAs and analytics helped us build the perfect onboarding hub. Conversions up 34%.",
    metric: "34% higher conversions",
  },
  {
    name: "Tom Nakashima",
    role: "Support Director",
    company: "Nexus CX",
    avatar: "TN",
    color: "#8B5CF6",
    stars: 5,
    quote:
      "The LiveChat integration is seamless. We trained our whole team in 10 minutes. Now every agent has a personalised link page — customers love the consistency.",
    metric: "10 min team onboarding",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll(".testimonial-card") ?? [];

    gsap.fromTo(
      cards,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: { amount: 0.7, from: "start" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4">Testimonials</span>
          <h2
            className="font-display font-bold mt-4 mb-5"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Loved by support teams{" "}
            <span className="text-gradient">everywhere</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Don&apos;t take our word for it. Here&apos;s what LiveChat partners say.
          </p>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="testimonial-card card p-6 break-inside-avoid mb-5 cursor-default"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: `${t.color}12`,
                  color: t.color,
                  border: `1px solid ${t.color}25`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
