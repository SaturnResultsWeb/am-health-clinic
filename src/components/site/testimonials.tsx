"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const active = testimonials[index];

  return (
    <section className="relative bg-surface py-[clamp(5rem,12vh,10rem)]">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="kicker">In their words</p>

        <div className="relative mt-10 min-h-[16rem] sm:min-h-[14rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduce ? undefined : { opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduce ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <p className="font-display text-[clamp(1.5rem,3vw,2.4rem)] font-normal leading-[1.25] tracking-tight text-cream">
                &ldquo;{active.quote}&rdquo;
              </p>
              <footer className="mt-8 text-sm uppercase tracking-[0.2em] text-sand">
                {active.name}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="group grid h-11 w-11 place-items-center rounded-full border border-line-dark text-cream/80 transition-[color,border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-sand/60 hover:text-cream active:scale-95"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-0.5"
              strokeWidth={1.5}
            />
          </button>

          <div className="flex items-center gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                className="group grid h-11 place-items-center px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-lift/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    i === index
                      ? "w-7 bg-sand"
                      : "w-1.5 bg-line-dark group-hover:bg-muted-dark",
                  )}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="group grid h-11 w-11 place-items-center rounded-full border border-line-dark text-cream/80 transition-[color,border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-sand/60 hover:text-cream active:scale-95"
          >
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
