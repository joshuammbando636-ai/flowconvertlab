import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  className?: string;
}

const variants = {
  default: "bg-[rgba(59,130,246,0.1)] text-primary-500 border-[rgba(59,130,246,0.2)]",
  success: "bg-[rgba(16,185,129,0.1)] text-emerald-500 border-[rgba(16,185,129,0.2)]",
  warning: "bg-[rgba(245,158,11,0.1)] text-yellow-500 border-[rgba(245,158,11,0.2)]",
  info: "bg-[rgba(99,102,241,0.1)] text-indigo-500 border-[rgba(99,102,241,0.2)]",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
