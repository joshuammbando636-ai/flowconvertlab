"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/**
 * Runs on every navigation (Next.js template). A smooth, Canva-style loader:
 * a rounded dark panel covers the viewport with the centered logo, the logo
 * eases in, then the whole panel glides up off the top (its arced bottom edge
 * wiping the new page in). One clean easing — no jerk. Reduced-motion: fade.
 */
export default function MarketingTemplate({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <>
      {children}

      <motion.div
        aria-hidden
        className="fixed left-0 top-0 w-screen z-[9999] pointer-events-none overflow-hidden"
        style={{
          height: "118vh",
          background: "#2B2A27", // dark, slightly warm — blends with the greige palette
          borderRadius: "0 0 50% 50% / 0 0 28% 28%", // arced bottom edge
        }}
        initial={{ y: "0%" }}
        animate={reduce ? { opacity: 0 } : { y: "-118%" }}
        transition={
          reduce
            ? { duration: 0.3, ease: "easeOut" }
            : { duration: 1.1, ease: [0.83, 0, 0.17, 1], delay: 0.55 }
        }
      >
        {/* logo centered in the viewport (top 100vh of the panel) */}
        <div className="h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/foot.png"
              alt="FlowconvertLab"
              width={240}
              height={135}
              priority
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
