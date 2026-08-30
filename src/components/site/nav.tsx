"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { contact, nav } from "@/lib/site";

function Wordmark({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn("flex items-center gap-2.5 select-none", className)}
      aria-label="A&M Health Clinic, home"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full border border-sand/40">
        <span className="font-display text-sm leading-none text-sand">A</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] tracking-tight text-cream">
          A&amp;M Health Clinic
        </span>
        <span className="mt-0.5 text-[0.62rem] uppercase tracking-[0.22em] text-muted-dark">
          Massage · Fitzrovia
        </span>
      </span>
    </a>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 -z-10 h-full border-b transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled
              ? "border-line-dark/80 bg-ground/85 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        />

        <Wordmark />

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-[0.95rem] font-medium text-cream/90 transition-colors hover:text-cream"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sand transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
            </a>
          ))}
          <a
            href={contact.phoneHref}
            className="group inline-flex items-center gap-2.5 rounded-[4px] bg-cream px-5 py-2.5 text-[0.95rem] font-medium text-ground shadow-[0_1px_2px_rgba(20,22,15,0.25)] transition-[background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#f7f6f0] hover:shadow-[0_14px_28px_-16px_rgba(20,22,15,0.6)] active:translate-y-0 active:scale-[0.97]"
          >
            <Phone
              className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              strokeWidth={1.75}
            />
            {contact.phoneDisplay}
          </a>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-line-dark bg-surface/60 md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 block h-[1.5px] w-5 bg-cream transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 block h-[1.5px] w-5 bg-cream transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ground/95 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-2 px-6 pt-28">
              {nav.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={reduce ? undefined : { opacity: 0, y: 24 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-line-dark py-4 font-display text-3xl tracking-tight text-cream"
                >
                  {n.label}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto px-6 pb-12">
              <a
                href={contact.phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-[4px] bg-cream py-4 text-lg font-medium text-ground transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" strokeWidth={1.75} />
                Call to book · {contact.phoneDisplay}
              </a>
              <p className="mt-4 text-center text-sm text-muted-dark">
                {contact.addressLine}, {contact.addressCity}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
