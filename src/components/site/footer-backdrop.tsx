"use client";

import * as React from "react";
import gsap from "gsap";

/**
 * A faint sage dot-grid with a soft light that tracks the cursor across the
 * footer, so the texture appears to glow around the pointer. Pointer-fine +
 * reduced-motion gated. Purely decorative.
 */
export function FooterBackdrop() {
  const root = React.useRef<HTMLDivElement>(null);
  const glow = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = root.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const footer = el.parentElement;
    if (!footer) return;

    const xTo = gsap.quickTo(glow.current, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(glow.current, "y", { duration: 0.5, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      const r = footer.getBoundingClientRect();
      xTo(e.clientX - r.left);
      yTo(e.clientY - r.top);
    };
    const onEnter = () => gsap.to(glow.current, { opacity: 1, duration: 0.5 });
    const onLeave = () => gsap.to(glow.current, { opacity: 0, duration: 0.6 });

    footer.addEventListener("mousemove", onMove);
    footer.addEventListener("mouseenter", onEnter);
    footer.addEventListener("mouseleave", onLeave);
    return () => {
      footer.removeEventListener("mousemove", onMove);
      footer.removeEventListener("mouseenter", onEnter);
      footer.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* faint dot grid */}
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(141,144,104,0.22)_1px,transparent_1.5px)] [background-size:24px_24px]" />
      {/* cursor-following light */}
      <div
        ref={glow}
        className="absolute left-0 top-0 -ml-56 -mt-56 h-[28rem] w-[28rem] rounded-full opacity-0 will-change-transform [background:radial-gradient(circle,rgba(141,144,104,0.20),transparent_62%)]"
      />
    </div>
  );
}
