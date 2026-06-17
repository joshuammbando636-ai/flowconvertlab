"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// Register the MorphSVG plugin
gsap.registerPlugin(MorphSVGPlugin);

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const pendingChildren = useRef(children);
  const pathRef = useRef<SVGPathElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Path shapes for wave animation - NOW COVERS ENTIRE SCREEN
  const startShape = "M 0 100 V 100 Q 50 100 100 100 V 100 z"; // Hidden at bottom
  const waveShape = "M 0 100 V 0 Q 50 0 100 0 V 100 z"; // Covers ENTIRE screen

  // Update pending children when children change
  useEffect(() => {
    pendingChildren.current = children;
  }, [children]);

  // Update display children when pathname changes (after navigation)
  useEffect(() => {
    if (!isAnimating) {
      setDisplayChildren(children);
    }
  }, [pathname, children, isAnimating]);

  // Setup animation timeline
  useEffect(() => {
    if (!pathRef.current) return;

    const tl = gsap.timeline({
      paused: true,
      onStart: () => setIsAnimating(true),
      onComplete: () => {
        // Swap content when wave FULLY covers screen
        setDisplayChildren(pendingChildren.current);
        
        // Longer pause so user feels the transition
        setTimeout(() => {
          tl.reverse();
        }, 150); // Slightly longer pause
      },
      onReverseComplete: () => {
        setIsAnimating(false);
      },
    });

    tl.to(pathRef.current, {
      morphSVG: waveShape,
      duration: 1.2, // Longer duration for smoother feel
      ease: "power3.inOut",
    });

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  // Intercept link clicks
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (!link) return;
      
      const href = link.getAttribute("href");
      if (!href) return;
      
      // Skip external links, anchor links, or links with target="_blank"
      if (
        href.startsWith("http") || 
        href.startsWith("#") || 
        link.getAttribute("target") === "_blank"
      ) {
        return;
      }
      
      // Only handle internal navigation
      if (href.startsWith("/")) {
        e.preventDefault();
        
        if (tlRef.current && !isAnimating) {
          // Start the wave animation
          tlRef.current.play();
          
          // Navigate when wave covers most of screen
          setTimeout(() => {
            router.push(href);
          }, 600); // Half of duration (1.2s / 2)
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [router, isAnimating]);

  return (
    <>
      {/* Current Page Content */}
      {displayChildren}

      {/* Wave Transition SVG */}
      <svg
        className="fixed inset-0 z-[9999] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
          opacity: isAnimating ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5C3E2B" />
            <stop offset="50%" stopColor="#A67B5C" />
            <stop offset="100%" stopColor="#C17B4C" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          stroke="url(#waveGrad)"
          fill="url(#waveGrad)"
          strokeWidth="0"
          vectorEffect="non-scaling-stroke"
          d={startShape}
        />
      </svg>
    </>
  );
}