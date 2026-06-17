"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50">
      <div className="p-4 sm:p-5 rounded-xl shadow-lg" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
        <p className="text-sm mb-3" style={{ color: "var(--text)" }}>
          We use cookies to analyze site traffic and improve your experience.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white"
            style={{ background: "#FF6B00" }}
          >
            Accept
          </button>
          <Link href="/privacy" className="text-sm" style={{ color: "var(--text-muted)" }}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}