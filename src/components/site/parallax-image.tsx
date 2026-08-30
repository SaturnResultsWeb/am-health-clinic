"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  amount = 12,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  amount?: number;
}) {
  const frame = React.useRef<HTMLDivElement>(null);
  const img = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !img.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img.current,
        { yPercent: -amount / 2 },
        {
          yPercent: amount / 2,
          ease: "none",
          scrollTrigger: {
            trigger: frame.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, frame);

    return () => ctx.revert();
  }, [amount]);

  return (
    <div ref={frame} className={cn("relative overflow-hidden", className)}>
      <img
        ref={img}
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "absolute inset-0 h-[118%] w-full object-cover",
          imgClassName,
        )}
      />
    </div>
  );
}
