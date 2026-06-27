"use client";

import { useEffect } from "react";

/**
 * Self-heals stale-chunk failures. When a code-split chunk fails to load —
 * common in dev after HMR shuffles hashes, and in prod right after a deploy
 * swaps the asset manifest — the client router throws `ChunkLoadError`. A full
 * page reload fetches the current manifest and recovers.
 *
 * Loop-guarded: reloads at most once per 10s window, so a genuinely persistent
 * failure (real bug, offline) surfaces instead of reloading forever.
 */
export function ChunkErrorReload() {
  useEffect(() => {
    const KEY = "__chunk_reload_at";

    const isChunkError = (val: unknown): boolean => {
      const msg =
        typeof val === "string"
          ? val
          : val && typeof val === "object"
            ? `${(val as { name?: string }).name ?? ""} ${(val as { message?: string }).message ?? ""}`
            : "";
      return /ChunkLoadError/i.test(msg) || /Loading (CSS )?chunk .* failed/i.test(msg);
    };

    const reloadOnce = () => {
      const last = Number(sessionStorage.getItem(KEY) || 0);
      if (Date.now() - last < 10_000) return; // already tried very recently
      sessionStorage.setItem(KEY, String(Date.now()));
      window.location.reload();
    };

    const onError = (e: ErrorEvent) => {
      if (isChunkError(e.message) || isChunkError(e.error)) reloadOnce();
    };
    const onRejection = (e: PromiseRejectionEvent) => {
      if (isChunkError(e.reason)) reloadOnce();
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
