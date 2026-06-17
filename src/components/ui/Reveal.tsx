"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger helper: delay in ms before this element reveals. */
  delay?: number;
  /** Render element tag. Defaults to div. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Extra inline styles (merged with the transition-delay). */
  style?: React.CSSProperties;
}

/**
 * Lightweight scroll reveal. Adds `.is-visible` when the element enters the
 * viewport (one-shot). Only animates opacity + transform, and is fully
 * disabled by the prefers-reduced-motion rule in globals.css.
 */
export function Reveal({ children, className, delay = 0, as = "div", style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ ...style, ...(delay ? { transitionDelay: `${delay}ms` } : {}) }}
    >
      {children}
    </Tag>
  );
}
