import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode
        background: "#FFFFFF",
        surface: "#F8FAFC",
        foreground: "#111827",
        muted: "#64748B",
        border: "#E2E8F0",
        // Dark mode variants (used via CSS variables)
        dark: {
          background: "#0A0A0A",
          surface: "#171717",
          foreground: "#F1F5F9",
          muted: "#94A3B8",
          border: "#334155",
        },
        // Brand accent — driven by the --accent CSS variable (see globals.css)
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)",
        },
        // Accents
        primary: {
          DEFAULT: "#3B82F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        indigo: {
          DEFAULT: "#6366F1",
          500: "#6366F1",
          600: "#4F46E5",
        },
        emerald: {
          DEFAULT: "#10B981",
          500: "#10B981",
          600: "#059669",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 40% 20%, #3B82F620 0px, transparent 50%), radial-gradient(at 80% 0%, #6366F120 0px, transparent 50%), radial-gradient(at 0% 50%, #10B98115 0px, transparent 50%)",
        "gradient-mesh-dark": "radial-gradient(at 40% 20%, #3B82F630 0px, transparent 50%), radial-gradient(at 80% 0%, #6366F130 0px, transparent 50%), radial-gradient(at 0% 50%, #10B98120 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(59, 130, 246, 0.25)",
        "glow-md": "0 0 30px rgba(59, 130, 246, 0.35)",
        "glow-lg": "0 0 50px rgba(59, 130, 246, 0.4)",
        "card": "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.05)",
        "card-hover": "0 4px 6px rgba(0,0,0,0.05), 0 20px 40px rgba(0,0,0,0.1)",
        "card-dark": "0 1px 3px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.3)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-sm": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
