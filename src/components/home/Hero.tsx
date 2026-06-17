"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(SplitText);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Split the title text into words
    const split = new SplitText(titleRef.current, {
      type: "words",
    });

    // Title words animation - plays immediately on load
    gsap.fromTo(
      split.words,
      { 
        y: 80, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.05,
      }
    );

    // Subtitle animation - smooth fade up
    gsap.fromTo(
      subtitleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      }
    );

    // CTA animation - gentle fade in
    gsap.fromTo(
      ctaRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.7,
      }
    );

    // Cleanup
    return () => {
      split.revert();
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
      style={{ 
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
          alt="Support team helping customers online"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)",
          }}
        />
      </div>

      {/* Content - Centered on image */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1
            ref={titleRef}
            className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] mb-6 text-white"
          >
            Turn LiveChat{" "}
            <span 
              className="inline-block px-4 sm:px-6 py-1 sm:py-2 rounded-full font-bold mx-1 my-1"
              style={{ 
                backgroundColor: "#FF6B00",
                fontSize: "inherit",
                color: "white"
              }}
            >
              Conversations
            </span>
            <br />
            Into Revenue
          </h1>

          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed text-white/90"
          >
            One clean branded resource hub. Share in a single click. 
            Turn every support conversation into a conversion opportunity.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="https://www.livechat.com/?a=w9-h_vpDg&utm_campaign=pp_livechat-default&utm_source=PP"
              target="_blank"
              rel="sponsored nofollow noopener"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
              style={{
                background: "#FF6B00",
                boxShadow: "0 4px 20px rgba(255,107,0,0.4)"
              }}
            >
              Start Free Trial <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            
            <Link
              href="/tools"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium text-white transition-all hover:bg-white/10"
              style={{ 
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)"
              }}
            >
              Explore Tools
            </Link>
          </div>

          <p className="text-xs sm:text-sm mt-6 sm:mt-8 text-white/60">
            14-day free trial · No credit card required · Powered by LiveChat
          </p>
        </div>
      </div>
    </section>
  );
}