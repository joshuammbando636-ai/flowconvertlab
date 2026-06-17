"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const REVIEWS_ROW1 = [
  { 
    name: "Sarah Chen", 
    role: "LiveChat Partner", 
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", 
    stars: 5, 
    quote: "FlowconvertLab completely transformed how we handle customer onboarding. 40% more conversions." 
  },
  { 
    name: "Marcus Webb", 
    role: "Head of Support", 
    avatar: "https://randomuser.me/api/portraits/men/32.jpg", 
    stars: 4, 
    quote: "Skeptical at first, but response time dropped 60%. Worth every penny." 
  },
  { 
    name: "Priya Sharma", 
    role: "CX Lead", 
    avatar: "https://randomuser.me/api/portraits/women/68.jpg", 
    stars: 5, 
    quote: "Finally understand what our customers actually want. Analytics are gold." 
  },
  { 
    name: "David Kim", 
    role: "Owner", 
    avatar: "https://randomuser.me/api/portraits/men/22.jpg", 
    stars: 3, 
    quote: "Setup took time but support helped. Running smoothly now. Good value." 
  },
];

const REVIEWS_ROW2 = [
  { 
    name: "Elena Kowalski", 
    role: "Customer Success", 
    avatar: "https://randomuser.me/api/portraits/women/22.jpg", 
    stars: 4, 
    quote: "Trial-to-paid conversion is 3x easier now. Game changer for our team." 
  },
  { 
    name: "Tom Nakashima", 
    role: "Support Director", 
    avatar: "https://randomuser.me/api/portraits/men/52.jpg", 
    stars: 5, 
    quote: "LiveChat integration is seamless. Up and running in 10 minutes." 
  },
  { 
    name: "Maria Garcia", 
    role: "Founder", 
    avatar: "https://randomuser.me/api/portraits/women/33.jpg", 
    stars: 4, 
    quote: "Solid product. Mobile app needs work but overall very happy." 
  },
  { 
    name: "James Okafor", 
    role: "Partner Manager", 
    avatar: "https://randomuser.me/api/portraits/men/75.jpg", 
    stars: 5, 
    quote: "Agents love sharing resources now. Handle time down 35%." 
  },
];

export default function ReviewsContent() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const pinnedCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const animationRef = useRef<{ tween1: gsap.core.Tween | null; tween2: gsap.core.Tween | null }>({
    tween1: null,
    tween2: null,
  });

  useGSAP(() => {
    if (titleRef.current) {
      const split = new SplitText(titleRef.current, { type: "words" });
      
      gsap.from(split.words, {
        y: 40,
        opacity: 0,
        rotation: 3,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.06,
      });
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.3 }
      );
    }
  }, []);

  useEffect(() => {
    const track = track1Ref.current;
    const row = row1Ref.current;
    if (!track || !row) return;

    const cards = Array.from(track.children) as HTMLElement[];
    
    const originalCards = cards.filter((_, i) => i < REVIEWS_ROW1.length);
    track.innerHTML = '';
    originalCards.forEach(card => track.appendChild(card));
    
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 50,
      ease: "linear",
      repeat: -1,
    });
    
    animationRef.current.tween1 = tween;

    row.addEventListener("mouseenter", () => tween.pause());
    row.addEventListener("mouseleave", () => tween.resume());

    return () => {
      if (animationRef.current.tween1) {
        animationRef.current.tween1.kill();
        animationRef.current.tween1 = null;
      }
    };
  }, []);

  useEffect(() => {
    const track = track2Ref.current;
    const row = row2Ref.current;
    if (!track || !row) return;

    const cards = Array.from(track.children) as HTMLElement[];
    
    const originalCards = cards.filter((_, i) => i < REVIEWS_ROW2.length);
    track.innerHTML = '';
    originalCards.forEach(card => track.appendChild(card));
    
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.fromTo(track,
      { x: -totalWidth },
      {
        x: 0,
        duration: 50,
        ease: "linear",
        repeat: -1,
      }
    );
    
    animationRef.current.tween2 = tween;

    row.addEventListener("mouseenter", () => tween.pause());
    row.addEventListener("mouseleave", () => tween.resume());

    return () => {
      if (animationRef.current.tween2) {
        animationRef.current.tween2.kill();
        animationRef.current.tween2 = null;
      }
    };
  }, []);

  useGSAP(() => {
    if (!pinnedCardRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: pinnedCardRef.current,
        start: "top top",
        end: "+=120%",
        pin: true,
        scrub: 1,
      }
    })
    .fromTo(pinnedCardRef.current, 
      { scale: 0.9, opacity: 0.6 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
    );
  }, { scope: pinnedCardRef });

  useEffect(() => {
    return () => {
      if (animationRef.current.tween1) animationRef.current.tween1.kill();
      if (animationRef.current.tween2) animationRef.current.tween2.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="pt-[var(--nav-height)] bg-[var(--bg)]">
      <section className="py-16 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 
            ref={titleRef}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 sm:mb-6" 
            style={{ color: "var(--text)" }}
          >
            Loved by{" "}
            <span style={{ color: "#FF6B00" }}>LiveChat Partners</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-base sm:text-xl" 
            style={{ color: "var(--text-muted)" }}
          >
            See what 3,200+ partners are saying about FlowconvertLab
          </p>
        </div>
      </section>

      <section className="overflow-hidden pb-20">
        <div ref={row1Ref} className="relative flex gap-5 py-6 overflow-hidden cursor-pointer">
          <div ref={track1Ref} className="flex gap-5 will-change-transform">
            {REVIEWS_ROW1.map((r, i) => (
              <div key={i} className="w-[340px] sm:w-[380px] flex-shrink-0 bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-5 sm:p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star 
                      key={j} 
                      className="w-5 h-5" 
                      style={{ 
                        fill: j < r.stars ? "#FBBF24" : "none",
                        color: j < r.stars ? "#FBBF24" : "var(--border)"
                      }} 
                    />
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text)" }}>"{r.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <img 
                      src={r.avatar} 
                      alt={r.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${r.name.replace(' ', '+')}&background=FF6B00&color=fff`;
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-base" style={{ color: "var(--text)" }}>{r.name}</p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={row2Ref} className="relative flex gap-5 py-6 overflow-hidden -mt-4 cursor-pointer">
          <div ref={track2Ref} className="flex gap-5 will-change-transform">
            {REVIEWS_ROW2.map((r, i) => (
              <div key={i} className="w-[340px] sm:w-[380px] flex-shrink-0 bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-5 sm:p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star 
                      key={j} 
                      className="w-5 h-5" 
                      style={{ 
                        fill: j < r.stars ? "#FBBF24" : "none",
                        color: j < r.stars ? "#FBBF24" : "var(--border)"
                      }} 
                    />
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text)" }}>"{r.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <img 
                      src={r.avatar} 
                      alt={r.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${r.name.replace(' ', '+')}&background=FF6B00&color=fff`;
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-base" style={{ color: "var(--text)" }}>{r.name}</p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={pinnedCardRef} 
        className="h-screen flex items-end justify-end rounded-3xl relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, transparent 40%, rgba(0, 0, 0, 0.3) 100%)",
          }}
        />
        
        <div className="relative z-10 max-w-lg mx-4 sm:mx-8 mb-8 sm:mb-12 md:mx-16 md:mb-16 text-right">
          <Quote className="w-8 h-8 mb-6 opacity-60 ml-auto" style={{ color: "white" }} />
          <p className="text-xl md:text-2xl leading-relaxed font-medium mb-6" style={{ color: "white", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            "FlowconvertLab didn't just improve our support process — it completely changed how our customers experience us."
          </p>
          <div>
            <p className="text-lg font-semibold" style={{ color: "white", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
              Amara Diallo
            </p>
            <p className="text-sm opacity-90" style={{ color: "#FFD4B8", textShadow: "0 1px 5px rgba(0,0,0,0.3)" }}>
              Customer Success Lead at PulseDesk
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}