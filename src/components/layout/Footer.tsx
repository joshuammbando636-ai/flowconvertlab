import Link from "next/link";
import { AFFILIATE_DISCLOSURE_FULL } from "@/lib/constants";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/tools", label: "Tools" },
      { href: "/comparison", label: "Comparison" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/guide", label: "Guide" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-16 sm:pt-20 pb-8 text-white" style={{ background: "#0B1220" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl">
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent)" }} />
              FlowconvertLab
            </Link>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Turn your website chats into a branded hub that turns visitors into customers —
              powered by LiveChat.
            </p>
            <a
              href="mailto:info@flowconvertlab.com"
              className="inline-block text-sm text-white/70 hover:text-white transition-colors mt-4"
            >
              info@flowconvertlab.com
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                  {col.title}
                </p>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate disclosure — present site-wide */}
        <p className="mt-14 pt-6 border-t border-white/10 text-xs text-white/45 leading-relaxed max-w-3xl">
          {AFFILIATE_DISCLOSURE_FULL}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <span>© 2026 FlowconvertLab. All rights reserved.</span>
          <span>Not affiliated with or endorsed by LiveChat beyond its partner program.</span>
        </div>
      </div>
    </footer>
  );
}
