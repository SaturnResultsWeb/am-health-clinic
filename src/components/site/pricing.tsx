import { priceList, contact } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-t border-line-dark/60 py-[clamp(5rem,12vh,10rem)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="kicker">Pricing</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-cream">
                Clear prices, no packages to decode.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-dark">
                Every treatment is booked by phone. Call and we&rsquo;ll find a
                time that suits, most evenings and weekends included.
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

          <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {priceList.map((group, i) => (
              <Reveal key={group.name} delay={Math.min(i * 0.06, 0.24)}>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-cream">
                    {group.name}
                  </h3>
                  <dl className="mt-4">
                    {group.rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-baseline justify-between gap-4 border-b border-sand/20 py-3"
                      >
                        <dt className="text-[0.95rem] text-cream/85">
                          {row.label}
                        </dt>
                        <dd className="font-medium tabular-nums text-sand">
                          {row.price}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
