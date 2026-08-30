"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

/**
 * Renders a heading whose words rise and fade in (masked) as it scrolls into
 * view. Words are real text (accessible, selectable). Reduced-motion safe.
 */
export function SplitReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return;

    const ctx = gsap.context(() => {
      const words = ref.current!.querySelectorAll<HTMLElement>("[data-word]");
      gsap.from(words, {
        yPercent: 115,
        opacity: 0,
        ease: "expo.out",
        duration: 1,
        stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: "top 82%" },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const words = text.split(" ");

  return (
    <h2 ref={ref} className={cn(className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom"
        >
          <span data-word className="inline-block">
            {word}
          </span>
        </span>
      ))}
    </h2>
  );
}
