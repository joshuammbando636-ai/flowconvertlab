"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import {
  MessageCircle, Bot, Headset, BookOpen, Share2,
  BarChart3, ArrowRight
} from "lucide-react";

const AFFILIATE_URL =
  "https://www.livechat.com/?a=w9-h_vpDg&utm_campaign=pp_livechat-default&utm_source=PP";

gsap.registerPlugin(ScrollTrigger, SplitText);

const SOLUTIONS = [
  {
    icon: MessageCircle,
    title: "LiveChat Resource Hub",
    desc: "Stop sending scattered links. Create a single branded hub with guides, pricing, and CTAs. Share once in LiveChat and watch engagement triple.",
    color: "#FF6B35",
  },
  {
    icon: Bot,
    title: "ChatBot Lead Engine",
    desc: "Connect your ChatBot to a high-converting resource library. Automate lead capture 24/7 and route qualified prospects straight to your offers.",
    color: "#10B981",
  },
  {
    icon: Headset,
    title: "HelpDesk Deflection Hub",
    desc: "Reduce ticket volume by 40%. Give agents a single link with troubleshooting guides, FAQs, and video walkthroughs to share instantly.",
    color: "#8B5CF6",
  },
  {
    icon: BookOpen,
    title: "KnowledgeBase Maximizer",
    desc: "Turn passive knowledge base articles into active conversion tools. Add smart CTAs that guide readers from self-help to purchase decisions.",
    color: "#F59E0B",
  },
  {
    icon: Share2,
    title: "Unified LiveChat Hub",
    desc: "Connect LiveChat, ChatBot, and HelpDesk into one seamless conversion flow. One link powers your entire customer communication stack.",
    color: "#EC4899",
  },
  {
    icon: BarChart3,
    title: "Conversion Analytics",
    desc: "Know exactly which tools in your LiveChat suite drive revenue. Track clicks, conversion paths, and ROI across your whole funnel.",
    color: "#6366F1",
  },
];

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Title chars animation - each letter flies from right
    if (titleRef.current) {
      const titleSplit = new SplitText(titleRef.current, { type: "chars" });
      
      gsap.from(titleSplit.chars, {
        x: 80,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: { trigger: titleRef.current, start: "top 95%" },
      });
    }

    // Subtitle chars animation - each letter flies from right
    if (subtitleRef.current) {
      const subtitleSplit = new SplitText(subtitleRef.current, { type: "chars" });
      
      gsap.from(subtitleSplit.chars, {
        x: 60,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.015,
        scrollTrigger: { trigger: subtitleRef.current, start: "top 95%" },
      });
    }

    // Cards stagger - gentle rise
    const cards = cardElementsRef.current.filter(Boolean) as HTMLDivElement[];
    
    gsap.fromTo(
      cards,
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: cardsRef.current, start: "top 95%" },
      }
    );

    // Mouse repulsion - Desktop only (lightweight)
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;
          
          const distX = e.clientX - cardCenterX;
          const distY = e.clientY - cardCenterY;
          const distance = Math.sqrt(distX * distX + distY * distY);
          
          const radius = 180;
          
          if (distance < radius) {
            const force = (1 - distance / radius) * 25;
            const angle = Math.atan2(distY, distX);
            const moveX = Math.cos(angle) * force;
            const moveY = Math.sin(angle) * force;
            
            gsap.to(card, {
              x: -moveX,
              y: -moveY,
              duration: 0.25,
              ease: "power2.out",
              overwrite: "auto"
            });
          } else {
            gsap.to(card, {
              x: 0,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto"
            });
          }
        });
      };

      let ticking = false;
      const onMouseMove = (e: MouseEvent) => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleMouseMove(e);
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('mousemove', onMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            ref={titleRef}
            className="font-display font-bold mb-3 sm:mb-4"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Maximize your{" "}
            <span style={{ color: "#FF6B35" }}>LiveChat suite</span>
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-sm sm:text-base max-w-xl mx-auto px-2"
            style={{ color: "var(--text-muted)" }}
          >
            One link. Infinite possibilities.
          </p>
        </div>

        {/* Solutions Grid - Fast, clean, no buttons */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                ref={(el) => { cardElementsRef.current[index] = el; }}
                className="solution-card card p-4 sm:p-5 cursor-default relative overflow-hidden group"
                style={{ willChange: "transform" }}
              >
                {/* Icon */}
                <div
                  className="solution-icon w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                  style={{
                    background: `${solution.color}12`,
                    border: `1px solid ${solution.color}25`,
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: solution.color }} />
                </div>

                {/* Title */}
                <h3 
                  className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2" 
                  style={{ color: "var(--text)" }}
                >
                  {solution.title}
                </h3>
                
                {/* Description */}
                <p 
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {solution.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Affiliate CTA after the feature cards */}
        <div className="mt-10 sm:mt-14 text-center">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
            style={{ background: "#FF6B00", boxShadow: "0 4px 20px rgba(255,107,0,0.4)" }}
          >
            Build your hub with LiveChat — free trial
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <p className="text-[11px] sm:text-xs mt-3" style={{ color: "var(--text-muted)" }}>
            FlowconvertLab earns a commission when you sign up through our links, at no extra cost to you.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 opacity-50">
            <span className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>LiveChat</span>
            <span className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>ChatBot</span>
            <span className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>HelpDesk</span>
            <span className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>KnowledgeBase</span>
          </div>
        </div>
      </div>
    </section>
  );
}