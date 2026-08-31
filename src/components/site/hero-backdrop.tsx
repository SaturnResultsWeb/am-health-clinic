"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroBackdrop() {
  const wrap = React.useRef<HTMLDivElement>(null);
  const img = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !img.current) return;

    const ctx = gsap.context(() => {
      // Slow, elegant settle on load.
      gsap.fromTo(
        img.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.8, ease: "expo.out" },
      );
      // Gentle vertical parallax, stays fully covered (image is 112% tall).
      gsap.to(img.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0 -z-20 overflow-hidden">
      <img
        ref={img}
        src="/hero-image.jpg"
        alt=""
        aria-hidden
        fetchPriority="high"
        className="photo-grade absolute left-0 top-0 h-[112%] w-full object-cover object-center will-change-transform"
      />
    </div>
  );
}
