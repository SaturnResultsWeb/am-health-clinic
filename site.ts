// Real A&M Health Clinic content. No invented stats, no placeholder counters.

export const contact = {
  phoneDisplay: "020 7388 8199",
  phoneHref: "tel:+442073888199",
  mobileDisplay: "07786 888199",
  mobileHref: "tel:+447786888199",
  email: "info@amhealthclinic.co.uk",
  emailHref: "mailto:info@amhealthclinic.co.uk",
  addressLine: "98 Cleveland St, Fitzrovia",
  addressCity: "London W1T 6NR",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=98+Cleveland+St+London+W1T+6NR",
} as const;

export const hours = [
  { days: "Monday – Friday", time: "10:00 – 21:30" },
  { days: "Saturday – Sunday", time: "11:00 – 21:00" },
] as const;

export type Service = {
  name: string;
  from: string | null;
  blurb: string;
  seed: string;
};

export const services: Service[] = [
  {
    name: "Deep Tissue Massage",
    from: "from £50",
    blurb:
      "Firm, focused pressure that releases chronic knots and long-held muscle tension.",
    seed: "amdeep",
  },
  {
    name: "Relaxing Massage",
    from: "from £40",
    blurb:
      "Slow, restorative full-body work to quiet the mind and melt away the day.",
    seed: "amrelax",
  },
  {
    name: "Cupping",
    from: "from £40",
    blurb:
      "Traditional suction therapy that eases tension and improves circulation.",
    seed: "amcupping",
  },
  {
    name: "Acupuncture",
    from: null,
    blurb:
      "Fine-needle treatment to balance energy, calm stress, and support healing.",
    seed: "amacu",
  },
  {
    name: "Foot Massage",
    from: null,
    blurb:
      "Targeted reflexology to ground the body and ease pressure from your feet up.",
    seed: "amfoot",
  },
  {
    name: "Four Hands Massage",
    from: null,
    blurb:
      "Two therapists, one session. A deeply immersive, fully synchronised treatment.",
    seed: "amfour",
  },
];

export type PriceGroup = {
  name: string;
  rows: { label: string; price: string }[];
};

export const priceList: PriceGroup[] = [
  {
    name: "Relaxing Massage",
    rows: [
      { label: "30 minutes", price: "£40" },
      { label: "45 minutes", price: "£60" },
      { label: "60 minutes", price: "£70" },
      { label: "90 minutes", price: "£100" },
    ],
  },
  {
    name: "Deep Tissue Massage",
    rows: [
      { label: "30 minutes", price: "£50" },
      { label: "45 minutes", price: "£70" },
      { label: "60 minutes", price: "£80" },
    ],
  },
  {
    name: "Cupping",
    rows: [{ label: "Per session", price: "£40" }],
  },
  {
    name: "Ear Candling",
    rows: [{ label: "Per session", price: "£40" }],
  },
];

export type Testimonial = { name: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: "Sam",
    quote:
      "As a busy professional, I needed a way to unwind and de-stress, and their massage did just that. The ambience was calming and the therapist was exceptional. Pure bliss.",
  },
  {
    name: "Daren",
    quote:
      "The therapist knew exactly how to release the tension in my muscles. I left feeling rejuvenated and relaxed, and I have already booked my next appointment.",
  },
  {
    name: "Jakie",
    quote:
      "My go-to place for relaxation. The cupping therapy was extraordinary and the therapist explained the entire process, making me feel comfortable throughout.",
  },
  {
    name: "Angela",
    quote:
      "I felt at ease with their friendly, professional staff from the moment I stepped in. An effective, genuinely natural treatment. Highly recommended.",
  },
  {
    name: "David",
    quote:
      "I left the clinic feeling lighter and more energized. A comprehensive range of services and real care taken over every detail. This is the place to go.",
  },
];

export const areas = [
  "Soho",
  "Mayfair",
  "Fitzrovia",
  "Marylebone",
  "Islington",
  "Camden Town",
  "Lambeth",
  "Dalston",
  "Willesden",
] as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "The Clinic", href: "#clinic" },
  { label: "Pricing", href: "#pricing" },
  { label: "Visit", href: "#visit" },
] as const;

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How do I book an appointment?",
    a: "Booking is by phone. Call 020 7388 8199 and we’ll find a time that suits, most evenings and weekends included. You’re welcome to call ahead or ask about the same day.",
  },
  {
    q: "Do you take walk-ins, or should I book ahead?",
    a: "Both. We keep some slots free for the same day, but booking ahead is the surest way to get the time and therapist you’d like, especially in the evenings.",
  },
  {
    q: "What’s the difference between relaxing and deep tissue?",
    a: "A relaxing massage uses slower, lighter pressure to calm the whole body. Deep tissue works firmer and more precisely to release chronic knots and long-held tension. Not sure which you need? Tell us on the call and we’ll guide you.",
  },
  {
    q: "What should I expect on my first visit?",
    a: "Arrive a few minutes early. Your therapist will ask about any areas of pain or tension and what you’d like from the session, then leave you to undress to your comfort in private. You stay covered throughout; only the area being worked on is uncovered.",
  },
  {
    q: "Do you treat specific pain or injury?",
    a: "Yes. Alongside relaxation we offer deep tissue, cupping and acupuncture for chronic pain, tension and recovery. Let us know what you’re dealing with and we’ll tailor the session to it.",
  },
  {
    q: "Where are you, and what are your hours?",
    a: "We’re at 98 Cleveland Street in Fitzrovia, minutes from Soho and Marylebone. Open 10:00–21:30 Monday to Friday and 11:00–21:00 at weekends.",
  },
];
