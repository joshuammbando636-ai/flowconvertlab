import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { AFFILIATE_DISCLOSURE_FULL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/comparison", label: "Comparison" },
  { href: "/blog", label: "Blog" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/flowconvertlab", label: "Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/company/flowconvertlab", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.youtube.com/@flowconvertlab", label: "YouTube", Icon: Youtube },
  { href: "https://www.facebook.com/flowconvertlab", label: "Facebook", Icon: Facebook },
];

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
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
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
