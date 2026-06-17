import Link from "next/link";

export function BlogSidebarCta() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: "#2C2119", border: "1px solid var(--border)" }}
    >
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
        alt="A support team turning conversations into customers"
        className="w-full h-72 lg:h-80 xl:h-96 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <p className="font-display font-bold text-2xl leading-snug text-white mb-6">
          Imagine you had a team turning every chat into revenue
        </p>
        <Link
          href="/"
          className="block w-full text-center font-semibold text-sm py-3 rounded-xl transition-transform duration-200 hover:scale-[1.02]"
          style={{ background: "#FF6B00", color: "#FFFFFF" }}
        >
          Book a call
        </Link>
      </div>
    </div>
  );
}
