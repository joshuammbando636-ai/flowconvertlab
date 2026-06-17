import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Container width. Default keeps content at max-w-[1200px]. */
  width?: "default" | "narrow" | "wide";
  /** Background surface tint. */
  surface?: boolean;
  id?: string;
}

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-[1200px]",
  wide: "max-w-[1320px]",
};

/** Consistent vertical rhythm + centered container used across every page. */
export function Section({ children, className, width = "default", surface, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding", className)}
      style={surface ? { background: "var(--bg-surface)" } : undefined}
    >
      <div className={cn(widths[width], "mx-auto px-4 sm:px-6 lg:px-8")}>{children}</div>
    </section>
  );
}
