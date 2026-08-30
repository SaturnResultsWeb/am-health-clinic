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
      // Cinematic settle on load.
      gsap.fromTo(
        img.current,
        { scale: 1.16 },
        { scale: 1, duration: 1.7, ease: "expo.out" },
      );
      // Slow parallax drift as the hero scrolls away.
      gsap.to(img.current, {
        yPercent: -12,
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
        src="https://picsum.photos/seed/amclinichero/1920/1280"
        alt=""
        aria-hidden
        fetchPriority="high"
        className="photo-grade absolute inset-0 h-[122%] w-full object-cover object-center will-change-transform"
      />
    </div>
  );
}
