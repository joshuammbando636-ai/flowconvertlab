"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/**
 * Runs on every navigation (Next.js template). A rounded dark panel covers
 * the viewport with the centered logo, then sweeps UP and off the top — its
 * curved bottom edge wiping the new page into view (bottom -> top). The logo
 * fades/scales in. Reduced-motion users get a quick fade.
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
          height: "120vh",
          background: "#2B2A27", // dark, slightly warm — blends with the greige palette
          borderRadius: "0 0 50% 50% / 0 0 30% 30%", // deep arc bottom edge
        }}
        initial={{ y: "0%", opacity: 1 }}
        animate={reduce ? { opacity: 0 } : { y: ["0%", "0%", "-125%"] }}
        transition={
          reduce
            ? { duration: 0.25, ease: "easeOut" }
            : { duration: 1.25, times: [0, 0.42, 1], ease: [0.76, 0, 0.24, 1] }
        }
      >
        {/* center the logo within the viewport (top 100vh of the panel) */}
        <div className="h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.03], y: [10, 0, 0, -6] }
            }
            transition={
              reduce
                ? { duration: 0.2 }
                : { duration: 1.05, times: [0, 0.22, 0.62, 0.92], ease: "easeOut" }
            }
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
