import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { contact, hours, areas } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";

export function Visit() {
  return (
    <section
      id="visit"
      className="relative bg-bone py-[clamp(5rem,12vh,10rem)] text-ink"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="kicker text-sage">Visit</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-ink">
              Find us in Fitzrovia.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6">
            <Reveal delay={0.1}>
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} />
                <div>
                  <p className="text-lg text-ink">{contact.addressLine}</p>
                  <p className="text-ink/60">{contact.addressCity}</p>
                  <a
                    href={contact.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-sage underline-offset-4 hover:underline"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} />
                <div className="space-y-1">
                  {hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex justify-between gap-8 text-ink/80"
                    >
                      <span>{h.days}</span>
                      <span className="tabular-nums text-ink">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={contact.phoneHref}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-[4px] bg-sage px-6 py-3.5 font-medium text-cream shadow-[0_1px_2px_rgba(20,36,26,0.2)] transition-[background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#6b6f49] hover:shadow-[0_16px_34px_-18px_rgba(20,36,26,0.4)] active:translate-y-0 active:scale-[0.97]"
                >
                  <Phone
                    className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    strokeWidth={1.75}
                  />
                  {contact.phoneDisplay}
                </a>
                <a
                  href={contact.emailHref}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-[4px] border border-sage/40 px-6 py-3.5 font-medium text-sage transition-[color,background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-sage hover:bg-sage/10 active:translate-y-0 active:scale-[0.97]"
                >
                  <Mail
                    className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    strokeWidth={1.75}
                  />
                  Email us
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:pl-8">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[14px] border border-line-light">
              <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://picsum.photos/seed/amstreet/1000/560"
                  alt="Cleveland Street, Fitzrovia"
                  loading="lazy"
                  className="photo-grade aspect-[16/9] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 text-sm uppercase tracking-[0.18em] text-sage">
              Serving central &amp; north London
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-line-light bg-bone-2 px-4 py-1.5 text-sm text-ink/75"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
