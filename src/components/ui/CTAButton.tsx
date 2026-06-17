import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AFFILIATE_URL, AFFILIATE_REL } from "@/lib/constants";

interface CTAButtonProps {
  children?: React.ReactNode;
  /** Override the destination. Defaults to the affiliate URL. */
  href?: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  /** Show the trailing arrow. */
  arrow?: boolean;
}

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 sm:px-8 py-3.5 sm:py-4 text-base",
};

/**
 * The site's primary conversion button. Defaults to the affiliate URL with the
 * required target/rel. Reuse everywhere a "start free trial" CTA is needed.
 */
export function CTAButton({
  children = "Start free trial",
  href = AFFILIATE_URL,
  variant = "primary",
  size = "lg",
  className,
  arrow = true,
}: CTAButtonProps) {
  const isAffiliate = href === AFFILIATE_URL;

  return (
    <a
      href={href}
      {...(isAffiliate || /^https?:\/\//.test(href)
        ? { target: "_blank", rel: AFFILIATE_REL }
        : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        sizes[size],
        variant === "primary"
          ? "text-white hover:-translate-y-0.5"
          : "border hover:-translate-y-0.5",
        className
      )}
      style={
        variant === "primary"
          ? { background: "var(--accent)", boxShadow: "0 8px 24px var(--accent-glow)" }
          : { borderColor: "var(--border)", color: "var(--text)", background: "var(--bg-elevated)" }
      }
    >
      {children}
      {arrow && (
        <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
