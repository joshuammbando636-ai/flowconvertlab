"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Click-outside + Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  // Move focus into the panel when it opens
  useEffect(() => {
    if (open) {
      const first = panelRef.current?.querySelector<HTMLElement>("a, button");
      first?.focus();
    }
  }, [open]);

  const spring = reduce
    ? { duration: 0.15 }
    : { type: "spring" as const, stiffness: 300, damping: 18 };

  return (
    <div ref={containerRef} className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-[100]">
      {/* idle bob wrapper (collapsed only, transform-only, off when reduced) */}
      <motion.div
        animate={!open && !reduce ? { y: [0, -3, 0] } : { y: 0 }}
        transition={!open && !reduce ? { repeat: Infinity, duration: 2.6, ease: "easeInOut" } : { duration: 0.2 }}
      >
        <motion.div
          layout={!reduce}
          transition={spring}
          className="glass-nav overflow-hidden"
          style={{
            borderRadius: 26,
            boxShadow: "0 8px 30px rgba(27,26,23,0.12), 0 2px 8px rgba(27,26,23,0.06)",
          }}
        >
          {/* Trigger row — always visible */}
          <motion.div layout="position" className="flex items-center gap-2.5 pl-2.5 pr-2 py-2">
            <Link href="/" aria-label="FlowconvertLab home" className="flex items-center shrink-0">
              <Image
                src="/nn.png"
                alt="FlowconvertLab"
                width={50}
                height={28}
                priority
                className="rounded-md object-contain h-7 w-auto"
              />
            </Link>

            <motion.button
              ref={triggerRef}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="bubble-nav-panel"
              aria-label={open ? "Close menu" : "Open menu"}
              whileHover={reduce ? undefined : { scale: 1.08 }}
              whileTap={reduce ? undefined : { scale: 0.94 }}
              className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
            >
              {open ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
            </motion.button>
          </motion.div>

          {/* Panel — morphs open */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="bubble-nav-panel"
                ref={panelRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0.15 : 0.18 }}
                className="px-2.5 pb-2.5 w-[15rem]"
              >
                <nav aria-label="Main" className="flex flex-col gap-0.5 pt-1">
                  {LINKS.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
                        style={{
                          color: active ? "var(--accent)" : "var(--text)",
                          background: active ? "var(--accent-soft)" : "transparent",
                        }}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="pt-2">
                  <CTAButton size="md" className="w-full">
                    Try LiveChat Free
                  </CTAButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
