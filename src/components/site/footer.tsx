import { contact, hours, nav } from "@/lib/site";
import { FooterBackdrop } from "@/components/site/footer-backdrop";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line-dark bg-ground pb-10 pt-[clamp(3.5rem,8vh,6rem)]">
      <FooterBackdrop />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-sand/40">
                <span className="font-display text-sm leading-none text-sand">
                  A
                </span>
              </span>
              <span className="font-display text-lg tracking-tight text-cream">
                A&amp;M Health Clinic
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-dark">
              Full-body massage therapists in Fitzrovia. A calm, discreet clinic
              for relaxation and real relief.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.18em] text-sand">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-cream/75 transition-colors hover:text-cream"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.18em] text-sand">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-cream/75">
              <li>
                <a href={contact.phoneHref} className="hover:text-cream">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contact.mobileHref} className="hover:text-cream">
                  {contact.mobileDisplay}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="hover:text-cream">
                  {contact.email}
                </a>
              </li>
              <li className="pt-1 text-muted-dark">
                {contact.addressLine}
                <br />
                {contact.addressCity}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.18em] text-sand">
              Opening hours
            </h3>
            <ul className="mt-4 space-y-2.5 text-cream/75">
              {hours.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span>{h.days}</span>
                  <span className="tabular-nums text-muted-dark">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line-dark pt-6 text-sm text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} A&amp;M Health Clinic. All rights reserved.</p>
          <p>Fitzrovia, London</p>
        </div>
      </div>
    </footer>
  );
}
