"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * One-time full-screen loading gate. Covers the site on first load until the
 * page + its assets are ready (window "load"), then fades out and broadcasts
 * `site:ready` so entrance animations (e.g. the hero) start cleanly instead of
 * playing half-rendered behind a loading screen. A safety timeout guarantees it
 * never hangs on a slow image, and reduced-motion gets an instant dismiss.
 *
 * Lives in the root layout, so it mounts once and does NOT reappear on
 * client-side route changes.
 */
export function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      document.documentElement.dataset.ready = "true";
      window.dispatchEvent(new Event("site:ready"));
      setHidden(true); // trigger fade-out
      window.setTimeout(() => setMounted(false), reduce ? 0 : 650);
    };

    if (document.readyState === "complete") {
      requestAnimationFrame(finish);
    } else {
      window.addEventListener("load", finish, { once: true });
    }
    // Never block the site on a stalled asset.
    const fallback = window.setTimeout(finish, 3500);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={`site-preloader${hidden ? " is-hidden" : ""}`} role="status" aria-label="Loading">
      <div className="site-preloader__inner">
        <Image
          src="/foot.png"
          alt="FlowconvertLab"
          width={240}
          height={135}
          priority
          className="h-12 sm:h-14 w-auto object-contain"
        />
        <span className="site-preloader__bar" aria-hidden />
      </div>
    </div>
  );
}
