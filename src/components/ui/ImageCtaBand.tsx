import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/constants";

interface ImageCtaBandProps {
  image: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
}

/** Full-bleed image CTA band — big headline over a photo, with the affiliate CTA. */
export function ImageCtaBand({ image, title, subtitle, ctaLabel = "Try LiveChat Free" }: ImageCtaBandProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[440px] overflow-hidden">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(20,20,18,0.25) 0%, rgba(20,20,18,0.30) 45%, rgba(20,20,18,0.80) 100%)" }}
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <h2
            className="font-display font-bold text-white max-w-[16ch]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: "1.02", letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
          {subtitle && <p className="mt-5 text-lg text-white/85 max-w-xl">{subtitle}</p>}
          <div className="mt-7">
            <CTAButton size="lg">{ctaLabel}</CTAButton>
          </div>
          <p className="mt-4 text-xs text-white/60">{AFFILIATE_DISCLOSURE_SHORT}</p>
        </div>
      </div>
    </section>
  );
}
