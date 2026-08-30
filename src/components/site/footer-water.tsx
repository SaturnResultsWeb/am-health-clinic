"use client";

import * as React from "react";

/**
 * A flowing field of sage points on canvas that undulates like a water surface
 * and parts around the cursor. Animation pauses when the footer is offscreen.
 * Reduced-motion draws a single static frame; touch devices skip the ripple.
 */
export function FooterWater() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const footer = canvas?.parentElement;
    if (!canvas || !footer) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    const gap = 26;

    // Cursor state (smoothed).
    let mx = -9999;
    let my = -9999;
    let tmx = -9999;
    let tmy = -9999;

    const resize = () => {
      const r = footer.getBoundingClientRect();
      width = r.width;
      height = r.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      mx += (tmx - mx) * 0.12;
      my += (tmy - my) * 0.12;

      for (let bx = gap; bx < width; bx += gap) {
        for (let by = gap; by < height; by += gap) {
          const w =
            Math.sin(bx * 0.02 + t * 0.0008) +
            Math.cos(by * 0.025 - t * 0.0006);
          const n = (w + 2) / 4; // 0..1
          let radius = 1.1 + n * 0.7;
          let alpha = 0.16 + n * 0.22;
          let ox = 0;
          let oy = w * 3;

          if (fine) {
            const dx = bx - mx;
            const dy = by - my;
            const d = Math.hypot(dx, dy);
            const infl = Math.max(0, 1 - d / 165);
            if (infl > 0) {
              const s = infl * infl;
              radius += s * 1.7;
              alpha += s * 0.42;
              const inv = d > 0.001 ? 1 / d : 0;
              ox += dx * inv * s * 9;
              oy += dy * inv * s * 9;
            }
          }

          ctx.beginPath();
          ctx.arc(bx + ox, by + oy, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(141,144,104,${alpha})`;
          ctx.fill();
        }
      }
    };

    let raf = 0;
    let running = false;
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: MouseEvent) => {
      const r = footer.getBoundingClientRect();
      tmx = e.clientX - r.left;
      tmy = e.clientY - r.top;
    };
    const onLeave = () => {
      tmx = -9999;
      tmy = -9999;
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0);
    });
    ro.observe(footer);

    if (reduce) {
      draw(0);
      return () => ro.disconnect();
    }

    if (fine) {
      footer.addEventListener("mousemove", onMove);
      footer.addEventListener("mouseleave", onLeave);
    }

    // Only animate while the footer is in view.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) start();
          else stop();
        }
      },
      { threshold: 0 },
    );
    io.observe(footer);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      footer.removeEventListener("mousemove", onMove);
      footer.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
