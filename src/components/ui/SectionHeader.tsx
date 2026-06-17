import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn(centered ? "text-center mx-auto" : "", "max-w-2xl mb-12 sm:mb-16", className)}>
      {label && <span className="section-label mb-4">{label}</span>}
      <h2
        className="font-display font-bold mt-4 mb-4"
        style={{
          fontSize: "clamp(1.875rem, 4vw, 3rem)",
          lineHeight: "1.12",
          letterSpacing: "-0.02em",
          color: "var(--text)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
