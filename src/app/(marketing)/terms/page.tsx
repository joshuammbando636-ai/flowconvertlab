// app/terms/page.tsx
export const metadata = {
  title: "Terms of Service — FlowconvertLab",
  description: "Terms of Service for FlowconvertLab. Learn about acceptable use, account responsibility, and our service policies.",
  openGraph: {
    title: "Terms of Service — FlowconvertLab",
    description: "Terms of Service for FlowconvertLab.",
    url: "https://www.flowconvertlab.com/terms",
    siteName: "FlowconvertLab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service — FlowconvertLab",
    description: "Terms of Service for FlowconvertLab.",
  },
};
export default function TermsPage() {
  return (
    <div className="pt-[var(--nav-height)] bg-[var(--bg)]">
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-6" style={{ color: "var(--text)" }}>
            Terms of Service
          </h1>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Last updated: April 14, 2026
          </p>
          
          <div className="space-y-6 text-sm sm:text-base leading-relaxed" style={{ color: "var(--text)" }}>
            <p>
              By using FlowconvertLab, you agree to these terms. Please read them carefully.
            </p>
            
            <h2 className="font-bold text-lg sm:text-xl mt-8 mb-3">1. Acceptable Use</h2>
            <p>
              You agree not to misuse our services or help anyone else do so. This includes 
              not using our platform for spam, illegal content, or harassment.
            </p>
            
            <h2 className="font-bold text-lg sm:text-xl mt-8 mb-3">2. Account Responsibility</h2>
            <p>
              You are responsible for maintaining the security of your account and password.
            </p>
            
            <h2 className="font-bold text-lg sm:text-xl mt-8 mb-3">3. Intellectual Property</h2>
            <p>
              FlowconvertLab and its content are protected by copyright and other laws.
            </p>
            
            <h2 className="font-bold text-lg sm:text-xl mt-8 mb-3">4. Affiliate Links</h2>
            <p>
              FlowconvertLab is an independent site and participates in the LiveChat affiliate
              program. Some links on this site are affiliate links — if you sign up through them
              we may earn a commission, at no extra cost to you.
            </p>

            <h2 className="font-bold text-lg sm:text-xl mt-8 mb-3">5. Termination</h2>
            <p>
              We may suspend or terminate your account for violations of these terms.
            </p>

            <h2 className="font-bold text-lg sm:text-xl mt-8 mb-3">6. Disclaimer</h2>
            <p>
              Our services are provided &ldquo;as is&rdquo; without warranties of any kind.
            </p>

            <h2 className="font-bold text-lg sm:text-xl mt-8 mb-3">7. Contact</h2>
            <p>
              Questions? Contact us at legal@flowconvertlab.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}