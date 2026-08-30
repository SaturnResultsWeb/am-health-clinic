import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Marquee } from "@/components/site/marquee";
import { Experience } from "@/components/site/experience";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Testimonials } from "@/components/site/testimonials";
import { Visit } from "@/components/site/visit";
import { BookingCta } from "@/components/site/booking-cta";
import { SiteFooter } from "@/components/site/footer";
import { MobileCallBar } from "@/components/site/mobile-call-bar";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <Experience />
        <Pricing />
        <Faq />
        <Testimonials />
        <Visit />
        <BookingCta />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
