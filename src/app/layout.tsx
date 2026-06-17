import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flowconvertlab.com"),
  title: {
    default: "FlowconvertLab — Smart Link Pages for LiveChat Partners",
    template: "%s | FlowconvertLab",
  },
  description:
    "Turn chaotic live chat resource links into beautiful, high-converting hubs. Built for LiveChat partners and customer support teams.",
  keywords: [
    "link in bio",
    "LiveChat",
    "customer support",
    "resource hub",
    "link page",
    "conversion optimization",
    "LiveChat partners",
    "smart links",
  ],
  authors: [{ name: "FlowconvertLab" }],
  creator: "FlowconvertLab",
  icons: {
    icon: "/white.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.flowconvertlab.com",
    siteName: "FlowconvertLab",
    title: "FlowconvertLab — Smart Link Pages for LiveChat Partners",
    description:
      "Turn chaotic live chat resource links into beautiful, high-converting hubs.",
    images: [
      {
        url: "/fot.png",
        width: 1200,
        height: 630,
        alt: "FlowconvertLab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowconvertLab — Smart Link Pages for LiveChat Partners",
    description:
      "Turn chaotic live chat resource links into beautiful, high-converting hubs.",
    images: ["/fot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="google-site-verification" content="google0971140ada99fd15" />
      </head>
      <body>
      
          <LenisProvider>{children}</LenisProvider>
        
      </body>
    </html>
  );
}