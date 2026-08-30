"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORDS = [
  "Relax",
  "Restore",
  "Deep Tissue",
  "Cupping",
  "Stillness",
  "Acupuncture",
  "Unwind",
  "Fitzrovia",
];

export function Marquee() {
  const section = React.useRef<HTMLElement>(null);
  const track = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !track.current) return;

    const ctx = gsap.context(() => {
      const loop = gsap.to(track.current, {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 26,
      });
      const setSpeed = gsap.quickTo(loop, "timeScale", {
        duration: 0.5,
        ease: "power2",
      });
      let reset: gsap.core.Tween | null = null;

      ScrollTrigger.create({
        trigger: section.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const dir = self.direction || 1;
          const speed = gsap.utils.clamp(
            1,
            4.5,
            1 + Math.abs(self.getVelocity()) / 350,
          );
          setSpeed(dir * speed);
          reset?.kill();
          reset = gsap.delayedCall(0.4, () => setSpeed(dir * 1)) as unknown as gsap.core.Tween;
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const items = [...WORDS, ...WORDS];

  return (
    <section
      ref={section}
      aria-hidden
      className="overflow-hidden border-y border-line-dark bg-ground py-10 sm:py-14"
    >
      <div
        ref={track}
        className="flex w-max flex-nowrap items-center will-change-transform"
      >
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className="px-8 font-display text-[clamp(2.25rem,6vw,5rem)] leading-none tracking-tight"
              style={
                i % 2 === 0
                  ? { color: "var(--color-cream)" }
                  : {
                      color: "transparent",
                      WebkitTextStroke: "1px var(--color-sand)",
                    }
              }
            >
              {word}
            </span>
            <span className="text-2xl text-sand/60">&#8226;</span>
          </span>
        ))}
      </div>
    </section>
  );
}
