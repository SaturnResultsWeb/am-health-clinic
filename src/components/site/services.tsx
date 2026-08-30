import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { services, contact, type Service } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";
import { TiltCard } from "@/components/site/tilt-card";

function ServiceCard({
  service,
  feature,
}: {
  service: Service;
  feature?: boolean;
}) {
  return (
    <TiltCard
      href={contact.phoneHref}
      className="h-full"
      innerClassName="flex h-full flex-col rounded-[14px] border border-line-dark bg-surface transition-shadow duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-[0_22px_48px_-22px_rgba(20,22,15,0.7)]"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          feature ? "aspect-[16/10] lg:flex-1" : "aspect-[16/10]",
        )}
      >
        <img
          src={`https://picsum.photos/seed/${service.seed}/900/620`}
          alt=""
          aria-hidden
          loading="lazy"
          className="photo-grade h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/10 to-transparent" />
        {feature && (
          <span className="absolute left-4 top-4 rounded-full border border-sand/40 bg-ground/50 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-sand backdrop-blur-sm">
            Most requested
          </span>
        )}
      </div>

      <div className={cn("flex flex-col gap-2 p-6", feature && "lg:p-8")}>
        <div className="flex items-baseline justify-between gap-4">
          <h3
            className={cn(
              "font-display font-medium tracking-tight text-cream",
              feature ? "text-2xl lg:text-[1.75rem]" : "text-xl",
            )}
          >
            {service.name}
          </h3>
          {service.from ? (
            <span className="shrink-0 font-medium tabular-nums text-sand">
              {service.from}
            </span>
          ) : (
            <span className="shrink-0 text-sm text-muted-dark">
              By appointment
            </span>
          )}
        </div>
        <p className="max-w-prose text-[0.95rem] leading-relaxed text-muted-dark">
          {service.blurb}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-sand">
          Call to book
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </span>
      </div>
    </TiltCard>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-line-dark/60 py-[clamp(5rem,12vh,10rem)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="kicker">What we do</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-cream">
              Treatments, considered and unhurried.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-dark">
              From firm, therapeutic deep tissue to slow relaxation, every
              session is tailored to what your body needs that day.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:[grid-auto-flow:dense] lg:[grid-auto-rows:1fr]">
          {services.map((service, i) => {
            const isFeature = i === 0;
            const isLast = i === services.length - 1;
            return (
              <Reveal
                key={service.name}
                delay={Math.min(i * 0.05, 0.25)}
                className={cn(
                  "min-h-0",
                  isFeature && "sm:col-span-2 lg:col-span-2 lg:row-span-2",
                  isLast && "sm:col-span-2 lg:col-span-1",
                )}
              >
                <ServiceCard service={service} feature={isFeature} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
