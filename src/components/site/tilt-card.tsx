"use client";

import * as React from "react";
import gsap from "gsap";

import { cn } from "@/lib/utils";

/**
 * 3D-tilt card that leans toward the cursor with a soft sage spotlight that
 * tracks the pointer. Pointer-fine + reduced-motion gated. Renders an <a>.
 */
export function TiltCard({
  href,
  className,
  innerClassName,
  children,
  max = 6,
}: {
  href: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  max?: number;
}) {
  const root = React.useRef<HTMLAnchorElement>(null);
  const inner = React.useRef<HTMLDivElement>(null);
  const glow = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = root.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const rotX = gsap.quickTo(inner.current, "rotationX", { duration: 0.5, ease: "power3" });
    const rotY = gsap.quickTo(inner.current, "rotationY", { duration: 0.5, ease: "power3" });
    const glowX = gsap.quickTo(glow.current, "x", { duration: 0.35, ease: "power2" });
    const glowY = gsap.quickTo(glow.current, "y", { duration: 0.35, ease: "power2" });

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      rotY((px - 0.5) * max * 2);
      rotX(-(py - 0.5) * max * 2);
      glowX(e.clientX - r.left);
      glowY(e.clientY - r.top);
    };
    const onEnter = () => gsap.to(glow.current, { opacity: 1, duration: 0.4 });
    const onLeave = () => {
      rotX(0);
      rotY(0);
      gsap.to(glow.current, { opacity: 0, duration: 0.5 });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return (
    <a
      ref={root}
      href={href}
      className={cn("group relative block [perspective:1100px]", className)}
    >
      <div
        ref={inner}
        className={cn(
          "relative h-full overflow-hidden will-change-transform",
          innerClassName,
        )}
      >
        {children}
        <div
          ref={glow}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 -ml-40 -mt-40 h-80 w-80 rounded-full opacity-0 [background:radial-gradient(circle,rgba(183,179,151,0.18),transparent_65%)]"
        />
      </div>
    </a>
  );
}
