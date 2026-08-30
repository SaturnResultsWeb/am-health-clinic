import { Phone } from "lucide-react";

import { contact } from "@/lib/site";
import {
  NoisePatternCard,
  NoisePatternCardBody,
} from "@/components/ui/card-with-noise-patter";

export function BookingCta() {
  return (
    <section className="relative py-[clamp(5rem,12vh,10rem)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <NoisePatternCard className="border-line-dark">
          <NoisePatternCardBody className="flex flex-col items-center gap-8 px-6 py-16 text-center sm:px-10 sm:py-24">
            <p className="kicker">Ready when you are</p>
            <h2 className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.05] tracking-tight text-cream">
              Book your session, tonight if you like.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-cream/75">
              One quick call is all it takes. We&rsquo;re open late every day,
              and there&rsquo;s usually a slot sooner than you&rsquo;d think.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={contact.phoneHref}
                className="group inline-flex items-center justify-center gap-3 rounded-[4px] bg-cream px-8 py-4 text-lg font-medium text-ground shadow-[0_1px_2px_rgba(20,22,15,0.25)] transition-[background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#f7f6f0] hover:shadow-[0_18px_38px_-18px_rgba(20,22,15,0.7)] active:translate-y-0 active:scale-[0.97]"
              >
                <Phone
                  className="h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  strokeWidth={1.75}
                />
                {contact.phoneDisplay}
              </a>
              <a
                href={contact.emailHref}
                className="text-base font-medium text-sand underline-offset-4 hover:underline"
              >
                or email {contact.email}
              </a>
            </div>
          </NoisePatternCardBody>
        </NoisePatternCard>
      </div>
    </section>
  );
}
