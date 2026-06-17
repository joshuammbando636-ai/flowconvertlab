"use client";

import { useEffect, useState, useCallback } from "react";

interface TocItem {
  id: string;
  text: string;
}

export function BlogToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  // Scroll-spy: the active heading is the last one whose top has scrolled
  // above the offset line near the top of the viewport.
  useEffect(() => {
    if (items.length === 0) return;
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = 140; // nav height + breathing room
        let current = items[0].id;
        for (const item of items) {
          const el = document.getElementById(item.id);
          if (!el) continue;
          if (el.getBoundingClientRect().top - offset <= 0) {
            current = item.id;
          } else {
            break;
          }
        }
        setActiveId(current);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  const scrollTo = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: HTMLElement, o?: { offset?: number }) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -110 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="space-y-6">
      <nav
        className="rounded-2xl p-5 sm:p-6"
        style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
      >
        <p
          className="font-display font-bold text-lg mb-4"
          style={{ color: "var(--text)" }}
        >
          Contents
        </p>
        <ul className="space-y-1">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id} className="flex items-start gap-2">
                <span
                  className="mt-[9px] flex-shrink-0 rounded-full transition-all duration-200"
                  style={{
                    width: active ? 6 : 0,
                    height: active ? 6 : 0,
                    background: "#FF6B00",
                  }}
                />
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(e, item.id)}
                  className="block text-sm leading-snug py-1 transition-colors duration-200"
                  style={{
                    color: active ? "var(--text)" : "var(--text-muted)",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
