import Link from "next/link";
import Image from "next/image";
import { AFFILIATE_DISCLOSURE_FULL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/comparison", label: "Comparison" },
  { href: "/blog", label: "Blog" },
];

const PINTEREST_URL = "https://www.pinterest.com/flowconvertlab";

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M12.04 2C6.5 2 3.5 5.72 3.5 9.5c0 1.76 1 3.95 2.6 4.65.24.1.37.06.43-.18l.36-1.43c.04-.15.02-.21-.09-.34-.62-.74-.9-1.62-.9-2.6 0-2.5 1.87-4.93 5.07-4.93 2.77 0 4.4 1.69 4.4 3.95 0 2.97-1.32 5.48-3.27 5.48-1.08 0-1.88-.89-1.62-1.99.31-1.31.91-2.72.91-3.66 0-.84-.45-1.55-1.39-1.55-1.1 0-1.99 1.14-1.99 2.67 0 .97.33 1.63.33 1.63l-1.32 5.6c-.39 1.66-.06 3.69-.03 3.9.02.12.18.15.25.06.1-.13 1.4-1.73 1.84-3.33l.71-2.78c.35.67 1.38 1.26 2.48 1.26 3.26 0 5.48-2.97 5.48-6.95C20.5 5.04 17.61 2 12.04 2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="text-white" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand + socials */}
          <div>
            <Image src="/foot.png" alt="FlowconvertLab" width={120} height={67} className="h-9 w-auto object-contain" />
            <p className="text-base font-medium mt-8 mb-4">Follow us</p>
            <div className="flex items-center gap-4">
              <a
                href={PINTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-white/70 hover:text-white transition-colors"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-bold text-2xl mb-5">Get in touch</p>
            <p className="text-white/70 leading-relaxed">
              FlowconvertLab<br />
              <a href="mailto:info@flowconvertlab.com" className="hover:text-white transition-colors">
                info@flowconvertlab.com
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display font-bold text-2xl mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/70 hover:text-white transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Affiliate disclosure (compliance, site-wide) */}
        <p className="mt-14 text-xs text-white/40 leading-relaxed max-w-3xl">
          {AFFILIATE_DISCLOSURE_FULL}
        </p>

        {/* Divider + legal */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-end gap-6 text-sm text-white/60">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>

        <p className="mt-8 text-center text-sm text-white/50">
          © 2026 FlowconvertLab. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
