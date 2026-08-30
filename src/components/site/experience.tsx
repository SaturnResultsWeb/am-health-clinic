import { contact } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";
import { ParallaxImage } from "@/components/site/parallax-image";

const points = [
  {
    title: "Experienced therapists",
    body: "Trained across deep tissue, relaxation, cupping and acupuncture, using only quality oils.",
  },
  {
    title: "Open late, every day",
    body: "Until 21:30 on weekdays and 21:00 at weekends, made for appointments after work.",
  },
  {
    title: "A discreet Fitzrovia clinic",
    body: "A private, professional space on Cleveland Street. Calm and considered, never a parlour.",
  },
];

export function Experience() {
  return (
    <section
      id="clinic"
      className="relative bg-bone py-[clamp(5rem,12vh,10rem)] text-ink"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <p className="kicker text-sage">The clinic</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-ink">
              A calm room, and hands that know what they&rsquo;re doing.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              A&amp;M Health Clinic sits on Cleveland Street in Fitzrovia, a
              quiet address minutes from Soho, Marylebone and Camden. Whether
              you&rsquo;re carrying the stress of a long week or working through
              real, persistent pain, you&rsquo;re in careful hands.
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-line-light border-y border-line-light">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.12 + i * 0.06}>
                <div className="flex gap-6 py-5">
                  <span className="mt-1 font-display text-sm tabular-nums text-sage">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 max-w-md leading-relaxed text-ink/60">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <a
              href={contact.phoneHref}
              className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-[4px] bg-sage px-7 py-4 text-base font-medium text-cream shadow-[0_1px_2px_rgba(20,36,26,0.2)] transition-[background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#6b6f49] hover:shadow-[0_16px_34px_-18px_rgba(20,36,26,0.4)] active:translate-y-0 active:scale-[0.97]"
            >
              Speak to the clinic · {contact.phoneDisplay}
            </a>
          </Reveal>
        </div>

        {/* Image collage */}
        <Reveal delay={0.1} className="relative">
          <ParallaxImage
            src="https://picsum.photos/seed/amroom/900/1100"
            alt="A calm treatment room at A&M Health Clinic"
            className="aspect-[4/5] rounded-[14px]"
            imgClassName="photo-grade"
            amount={14}
          />
          <div className="absolute -bottom-8 -left-6 hidden w-2/5 overflow-hidden rounded-[14px] border-4 border-bone sm:block">
            <img
              src="https://picsum.photos/seed/amdetail/600/600"
              alt="Massage detail"
              loading="lazy"
              className="photo-grade aspect-square h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
