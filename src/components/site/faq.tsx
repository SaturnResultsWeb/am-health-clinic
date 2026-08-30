"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { faqs, contact } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";

function FaqItem({
  id,
  question,
  answer,
  open,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-sand/20">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-lift/50 focus-visible:ring-offset-4 focus-visible:ring-offset-ground"
        >
          <span
            className={cn(
              "font-display text-xl tracking-tight transition-colors duration-200 sm:text-2xl",
              open ? "text-cream" : "text-cream/85",
            )}
          >
            {question}
          </span>
          <span
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
              open
                ? "rotate-45 border-sand/60 bg-sand/10 text-sand"
                : "border-line-dark text-muted-dark",
            )}
          >
            <Plus className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        aria-hidden={!open}
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
          open ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className="max-w-2xl pb-6 pr-8 text-[1.05rem] leading-relaxed text-muted-dark sm:pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section
      id="faq"
      className="relative border-t border-line-dark/60 py-[clamp(5rem,12vh,10rem)]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="kicker">Good to know</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-cream">
              Questions, answered.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted-dark">
              Anything not covered here? We&rsquo;re happy to talk it through on
              the phone before you book.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-[4px] border border-sand/60 px-6 py-3.5 text-base font-medium text-sand transition-[color,background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-sand hover:bg-sand/10 active:translate-y-0 active:scale-[0.97] mt-8"
            >
              Call {contact.phoneDisplay}
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <div className="border-t border-sand/20">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  id={`faq-${i}`}
                  question={faq.q}
                  answer={faq.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
