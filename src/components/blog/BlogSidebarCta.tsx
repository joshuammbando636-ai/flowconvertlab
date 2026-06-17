import { AFFILIATE_URL, AFFILIATE_REL, AFFILIATE_DISCLOSURE_SHORT } from "@/lib/constants";

export function BlogSidebarCta() {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "#0B1220", border: "1px solid var(--border)" }}>
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
        alt="A support team turning conversations into customers"
        className="w-full h-56 lg:h-64 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <p className="font-display font-bold text-xl leading-snug text-white mb-5">
          Turn your next conversation into a customer
        </p>
        <a
          href={AFFILIATE_URL}
          target="_blank"
          rel={AFFILIATE_REL}
          className="block w-full text-center font-semibold text-sm py-3 rounded-xl text-white transition-transform duration-200 hover:scale-[1.02]"
          style={{ background: "var(--accent)" }}
        >
          Start your free 14-day trial
        </a>
        <p className="text-[11px] text-white/45 mt-3 leading-relaxed">{AFFILIATE_DISCLOSURE_SHORT}</p>
      </div>
    </div>
  );
}
