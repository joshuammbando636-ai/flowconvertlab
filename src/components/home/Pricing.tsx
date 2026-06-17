"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, Zap } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const PLANS = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for solo LiveChat agents getting started.",
    color: "#64748B",
    cta: "Start Free",
    ctaHref: "/signup",
    features: [
      "1 link hub page",
      "Up to 10 links",
      "Basic analytics",
      "FlowconvertLab subdomain",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 29, annual: 19 },
    description: "For serious LiveChat partners who want results.",
    color: "#3B82F6",
    cta: "Start 14-day Trial",
    ctaHref: "/signup?plan=pro",
    features: [
      "Unlimited link pages",
      "Unlimited links",
      "Advanced analytics + heatmaps",
      "Custom domain",
      "Smart CTAs",
      "LiveChat native integration",
      "Priority support",
      "Remove branding",
    ],
    popular: true,
  },
  {
    name: "Team",
    price: { monthly: 79, annual: 59 },
    description: "For support teams and partner agencies.",
    color: "#6366F1",
    cta: "Start 14-day Trial",
    ctaHref: "/signup?plan=team",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team analytics dashboard",
      "Shared link library",
      "Custom integrations",
      "Dedicated onboarding",
      "SLA support",
      "White-label reports",
    ],
    popular: false,
  },
];

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [annual, setAnnual] = useState(true);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current?.querySelectorAll(".pricing-card") ?? [],
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.7, ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label mb-4">Pricing</span>
          <h2
            className="font-display font-bold mt-4 mb-5"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
            Start free. Upgrade when you&apos;re ready. No hidden fees, no surprises.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${!annual ? "bg-primary-500 text-white shadow-sm" : ""}`}
              style={{ color: !annual ? undefined : "var(--text-muted)" }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${annual ? "bg-primary-500 text-white shadow-sm" : ""}`}
              style={{ color: annual ? undefined : "var(--text-muted)" }}
            >
              Annual
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${annual ? "bg-emerald-500 text-white" : "bg-emerald-500/20 text-emerald-600"}`}>
                Save 34%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
        <div
  style={{
    borderColor: plan.popular ? plan.color : "var(--border)",
    background: plan.popular ? `linear-gradient(135deg, ${plan.color}08, ${plan.color}04)` : "var(--bg)",
    boxShadow: plan.popular ? `0 0 0 2px ${plan.color}` : undefined,
  }}
>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: plan.color }}
                  >
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: plan.color }}>
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-1 mt-2 mb-2">
                  <span className="text-4xl font-bold font-display" style={{ color: "var(--text)" }}>
                    ${annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>/mo</span>
                  )}
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                    <span style={{ color: "var(--text)" }}>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className="w-full text-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={
                  plan.popular
                    ? { background: plan.color, color: "white", boxShadow: `0 4px 20px ${plan.color}40` }
                    : {
                        background: "var(--bg-surface)",
                        color: "var(--text)",
                        border: "1px solid var(--border)",
                      }
                }
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
