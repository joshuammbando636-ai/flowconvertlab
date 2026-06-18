"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/comparison", label: "Comparison" },
  { href: "/blog", label: "Blog" },
];

export function BubbleNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Escape to close + lock body scroll (and pause Lenis if present)
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    lenis?.stop();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
    };
  }, [open]);

  // Move focus into the panel when it opens
  useEffect(() => {
    if (open) panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
  }, [open]);

  const lineBase = "absolute left-0 right-0 h-[2px] rounded-full";
  const lineStyle = { background: "var(--text)", transition: reduce ? "none" : "transform 0.3s ease" };

  const panelVariants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: reduce
        ? { duration: 0 }
        : { type: "spring" as const, stiffness: 300, damping: 26, when: "beforeChildren" as const, staggerChildren: 0.06 },
    },
    exit: reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
  };

  const linkVariants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Bubble button — fixed top-right, above everything */}
      <motion.button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        whileHover={reduce ? undefined : { scale: 1.06 }}
        whileTap={reduce ? undefined : { scale: 0.94 }}
        className="fixed top-5 right-5 z-[210] w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 24px rgba(28,28,26,0.12), 0 2px 6px rgba(28,28,26,0.06)",
        }}
      >
        <span className="relative block w-6 h-4" aria-hidden>
          <span
            className={lineBase}
            style={{ ...lineStyle, top: 0, transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
          />
          <span
            className={lineBase}
            style={{ ...lineStyle, top: "7px", transform: open ? "scaleX(0)" : "none" }}
          />
          <span
            className={lineBase}
            style={{ ...lineStyle, top: "14px", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
          />
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Dimmed backdrop — click to close */}
            <motion.div
              className="fixed inset-0 z-[150]"
              style={{ background: "rgba(28,28,26,0.45)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel — grows from the bubble's top-right corner */}
            <motion.div
              ref={panelRef}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                transformOrigin: "top right",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 20px 50px rgba(28,28,26,0.18)",
              }}
              className="fixed top-[84px] right-5 z-[200] w-[min(88vw,300px)] rounded-2xl p-3"
            >
              <nav aria-label="Primary" className="flex flex-col">
                {LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div key={link.href} variants={linkVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center min-h-[48px] px-4 rounded-xl font-display text-sm uppercase tracking-[0.12em] transition-colors"
                        style={{
                          color: active ? "var(--accent)" : "var(--text)",
                          background: active ? "var(--accent-soft)" : "transparent",
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div variants={linkVariants} className="px-1 pt-2">
                  <CTAButton size="md" className="w-full">
                    Try LiveChat Free
                  </CTAButton>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
