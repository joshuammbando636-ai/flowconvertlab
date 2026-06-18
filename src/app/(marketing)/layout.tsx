import { BubbleNav } from "@/components/layout/BubbleNav";
import { Footer } from "@/components/layout/Footer";
import CookieBanner from "./cookie-settings/page";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <BubbleNav />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner></CookieBanner>
    </div>
  );
}
