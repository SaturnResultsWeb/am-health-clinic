"use client";

import { motion, useReducedMotion } from "motion/react";
import { Phone, ArrowDown, Clock, MapPin } from "lucide-react";

import { contact } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <motion.img
          src="https://picsum.photos/seed/amclinichero/1920/1280"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="photo-grade h-full w-full object-cover object-center"
          initial={reduce ? undefined : { scale: 1.12 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      {/* Cinematic washes for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ground via-ground/70 to-ground/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ground/85 via-ground/40 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pb-28">
        <motion.p
          className="kicker"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Massage &amp; wellbeing · Fitzrovia, London
        </motion.p>

        <motion.h1
          className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,6vw,5rem)] font-normal leading-[1.05] tracking-tight text-cream"
          initial={reduce ? undefined : { opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
        >
          Room to breathe, in the middle of London.
        </motion.h1>

        <motion.p
          className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          A discreet clinic for deep tissue, relaxing and therapeutic massage.
          Skilled hands, open late, moments from Soho and Marylebone.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
        >
          <a
            href={contact.phoneHref}
            className="group inline-flex items-center justify-center gap-3 rounded-[4px] bg-cream px-7 py-4 text-base font-medium text-ground shadow-[0_1px_2px_rgba(20,22,15,0.25)] transition-[background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#f7f6f0] hover:shadow-[0_16px_34px_-18px_rgba(20,22,15,0.65)] active:translate-y-0 active:scale-[0.97]"
          >
            <Phone
              className="h-4.5 w-4.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              strokeWidth={1.75}
            />
            Call to book · {contact.phoneDisplay}
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 rounded-[4px] border border-sand/60 px-7 py-4 text-base font-medium text-sand transition-[color,background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-sand hover:bg-sand/10 active:translate-y-0 active:scale-[0.97]"
          >
            View services
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col gap-3 text-sm text-muted-dark sm:flex-row sm:items-center sm:gap-8"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-sand/70" strokeWidth={1.5} />
            Open late. Mon–Fri to 21:30, weekends to 21:00
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-sand/70" strokeWidth={1.5} />
            {contact.addressLine}, {contact.addressCity}
          </span>
        </motion.div>
      </div>

      {!reduce && (
        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1], y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          aria-hidden
        >
          <ArrowDown className="h-5 w-5" strokeWidth={1.25} />
        </motion.div>
      )}
    </section>
  );
}
