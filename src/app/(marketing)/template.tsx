"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/**
 * Re-mounts on every navigation (Next.js template). Plays a clean,
 * minimalist reveal: a dark panel with the centered logo covers the
 * viewport, then slides up to reveal the new page. Reduced-motion users
 * get a quick fade instead of the slide.
 */
export default function MarketingTemplate({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <>
      {children}

      <motion.div
        aria-hidden
        className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
        style={{ background: "var(--bg-dark)" }}
        initial={{ y: 0, opacity: 1 }}
        animate={reduce ? { opacity: 0 } : { y: "-100%" }}
        transition={
          reduce
            ? { duration: 0.25, ease: "easeOut" }
            : { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.35 }
        }
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: reduce ? 1 : [0, 1, 1, 0], scale: 1 }}
          transition={{ duration: reduce ? 0.2 : 1.0, times: reduce ? undefined : [0, 0.25, 0.65, 1], ease: "easeOut" }}
        >
          <Image
            src="/foot.png"
            alt="FlowconvertLab"
            width={220}
            height={124}
            priority
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
