"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/**
 * Runs on every navigation (Next.js template). A smooth, Canva-style loader:
 * a rounded dark panel covers the viewport with the centered logo, the logo
 * eases in, then the panel glides up off the top (its arced bottom edge wiping
 * the new page in). The arc is gentle on phones (a deep ellipse looks pointy on
 * narrow screens) and deeper on desktop. Reduced-motion: simple fade.
 */
export default function MarketingTemplate({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Gentle arc on mobile, deeper on desktop
  const borderRadius = desktop ? "0 0 50% 50% / 0 0 26% 26%" : "0 0 42% 42% / 0 0 9% 9%";

  return (
    <>
      {children}

      <motion.div
        aria-hidden
        className="fixed left-0 top-0 w-screen z-[9999] pointer-events-none overflow-hidden"
        style={{
          height: "115vh",
          background: "#2B2A27", // dark, slightly warm — blends with the greige palette
          borderRadius,
        }}
        initial={{ y: "0%" }}
        animate={reduce ? { opacity: 0 } : { y: "-115%" }}
        transition={
          reduce
            ? { duration: 0.3, ease: "easeOut" }
            : { duration: 1.05, ease: [0.83, 0, 0.17, 1], delay: 0.5 }
        }
      >
        {/* logo centered in the viewport (top 100vh of the panel) */}
        <div className="h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/foot.png"
              alt="FlowconvertLab"
              width={240}
              height={135}
              priority
              className="h-11 sm:h-16 w-auto object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
