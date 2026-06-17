import Link from "next/link";
import { AFFILIATE_DISCLOSURE_FULL } from "@/lib/constants";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/reviews", label: "Reviews" },
  { href: "/comparison", label: "Comparison" },
  { href: "/guide", label: "Guide" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="relative pt-16 sm:pt-20 pb-8 text-white" style={{ background: "#0B1220" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl">
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent)" }} />
              FlowconvertLab
            </Link>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Turn customer conversations into revenue with AI-powered live chat.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Quick links
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {QUICK_LINKS.map((link) => (
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

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:info@flowconvertlab.com"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                info@flowconvertlab.com
              </a>
              <a
                href="https://www.pinterest.com/flowconvertlab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Pinterest: @flowconvertlab
              </a>
            </div>
          </div>
        </div>

        {/* Affiliate disclosure — present site-wide */}
        <p className="mt-14 pt-6 border-t border-white/10 text-xs text-white/45 leading-relaxed max-w-3xl">
          {AFFILIATE_DISCLOSURE_FULL}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs text-white/40">
          <span>© 2026 FlowconvertLab. All rights reserved.</span>
          <span className="hidden sm:inline">·</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
