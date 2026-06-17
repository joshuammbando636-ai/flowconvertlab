"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/ui/CTAButton";

const NAV_LINKS = [
  { href: "/tools", label: "Tools" },
  { href: "/reviews", label: "Reviews" },
  { href: "/comparison", label: "Comparison" },
  { href: "/guide", label: "Guide" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 glass-nav transition-shadow duration-300",
        scrolled && "shadow-[0_4px_24px_rgba(11,18,32,0.06)]"
      )}
      style={{ height: "var(--nav-height)" }}
    >
      <nav className="max-w-[1200px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg" style={{ color: "var(--text)" }}>
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          FlowconvertLab
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={pathname === link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CTAButton size="md">Start free trial</CTAButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
          style={{ color: "var(--text)" }}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden absolute top-full inset-x-0 glass-nav border-t px-4 sm:px-6 py-4 flex flex-col gap-1"
          style={{ borderColor: "var(--border)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-3 rounded-lg text-sm font-medium"
              style={{
                color: pathname === link.href ? "var(--accent)" : "var(--text)",
                background: pathname === link.href ? "var(--accent-soft)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton size="md" className="mt-2 w-full">
            Start free trial
          </CTAButton>
        </div>
      )}
    </header>
  );
}
