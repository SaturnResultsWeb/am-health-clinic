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

    const fine = window.matchMedia("(pointer: fine)").matches;
    const xTo = gsap.quickTo(img.current, "x", { duration: 0.8, ease: "power3" });
    const yTo = gsap.quickTo(img.current, "y", { duration: 0.8, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      xTo(((e.clientX - cx) / cx) * 24);
      yTo(((e.clientY - cy) / cy) * 24);
    };
    if (fine) window.addEventListener("mousemove", onMove);

    const ctx = gsap.context(() => {
      // Cinematic settle on load.
      gsap.fromTo(
        img.current,
        { scale: 1.16 },
        { scale: 1, duration: 1.7, ease: "expo.out" },
      );
      // Slow parallax drift as the hero scrolls away.
      gsap.to(img.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, wrap);

    return () => {
      if (fine) window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0 -z-20 overflow-hidden">
      <img
        ref={img}
        src="https://picsum.photos/seed/amclinichero/1920/1280"
        alt=""
        aria-hidden
        fetchPriority="high"
        className="photo-grade absolute left-[-10%] top-[-17%] h-[135%] w-[120%] object-cover object-center will-change-transform"
      />
    </div>
  );
}
