import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import CookieBanner from "./cookie-settings/page";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner></CookieBanner>
    </div>
  );
}