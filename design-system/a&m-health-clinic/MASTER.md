# Design System Master File — A&M Health Clinic

> **LOGIC:** When building a specific page, first check `design-system/a&m-health-clinic/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** A&M Health Clinic — Full Body Massage Therapists, 98 Cleveland St, Fitzrovia, London
**Generated:** 2026-08-30 (seeded by UI/UX Pro Max, then hand-tuned to the clinic's real brand)
**Category:** Massage & wellness clinic (booking-driven)
**Register:** Brand — the design *is* the marketing. Feel over density.
**Direction:** High-end, premium, cinematic. Calm luxury, not clinical, not spa-cliché.

---

## North Star

A quiet, expensive-feeling site for a real Fitzrovia massage clinic. The job of every
screen is to move a stressed Londoner toward **booking a session**. Warmth and stillness,
not sterile healthcare. We keep A&M's existing **sage-green identity** (it is already
distinctive and un-generic) and ground it in deep, cinematic dark so it reads as premium.

**Color strategy:** *Committed* — sage green carries the identity across the surface,
grounded on warm near-black. One warm sand accent. No red, no purple, no pink.

**Theme scene sentence:** a tense professional booking a late massage on their phone at
9pm in a dim room after work — so the site leans **dark and calm**, with light "treatment
room" sections for warmth. Dark-first, with intentional light interludes.

---

## Global Rules

### Color Palette (OKLCH-first, hex fallback)

Anchored on the clinic's real colors: sage `#5F6243`, sand `#B7B397`, bone `#E4E4DC`.
Every neutral is tinted toward the sage hue (never pure `#000`/`#fff`).

| Role | Hex | OKLCH | CSS Variable | Use |
|------|-----|-------|--------------|-----|
| Ground (dark) | `#14160F` | `oklch(0.17 0.012 120)` | `--ground` | Primary dark background |
| Surface (dark) | `#1B1E15` | `oklch(0.22 0.013 120)` | `--surface` | Raised dark panels |
| Bone (light) | `#EAE9DF` | `oklch(0.93 0.012 105)` | `--bone` | Light section background |
| Bone-2 | `#E0DFD2` | `oklch(0.89 0.014 105)` | `--bone-2` | Light panel / divider |
| Sage (brand) | `#5F6243` | `oklch(0.44 0.038 120)` | `--sage` | Primary brand, buttons on light |
| Sage-lift | `#8D9068` | `oklch(0.62 0.045 118)` | `--sage-lift` | Sage legible on dark ground |
| Sand (accent) | `#B7B397` | `oklch(0.76 0.030 100)` | `--sand` | Accent, kickers, hairlines |
| Ink (on light) | `#20241A` | `oklch(0.24 0.015 120)` | `--ink` | Body text on bone |
| Cream (on dark) | `#EDECE2` | `oklch(0.94 0.010 105)` | `--cream` | Body text on ground |
| Muted (on dark) | `#9DA089` | `oklch(0.68 0.022 115)` | `--muted-d` | Secondary text on dark |
| Line (dark) | `#2C3021` | `oklch(0.28 0.018 120)` | `--line-d` | Borders on dark |
| Line (light) | `#CFCEBE` | `oklch(0.84 0.014 105)` | `--line-l` | Borders on bone |

**CTA:** the sage itself. On dark grounds, primary buttons use `--sage-lift` fill with
`--ground` text; on bone, `--sage` fill with `--cream` text. No separate "action red".

**Bans (color):** pure black/white, red CTAs, purple/pink gradients, teal-and-white
"healthcare" reflex, glassmorphism as decoration.

### Typography

Elevated from the site's default Poppins to an editorial pairing that reads as calm luxury.

- **Display / Headings:** **Fraunces** (opsz variable serif) — warm, optical, expensive.
  Weights 400/500; `font-optical-sizing: auto`. Tracking tight on large sizes.
- **Body / UI:** **Hanken Grotesk** — clean humanist sans, warm, highly legible.
  Weights 400/500/600.
- **Never:** Inter, default Poppins, gradient text, all-caps body. Kickers may be
  small-caps sand with wide tracking (letter-spacing ~0.16em).

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Hanken+Grotesk:wght@400;500;600&display=swap');
```

**Type scale** (fluid; ratio ≥1.25 between steps):

| Token | clamp | Role |
|-------|-------|------|
| `--fs-display` | `clamp(2.75rem, 6vw, 5rem)` | Hero H1 (Fraunces) |
| `--fs-h2` | `clamp(2rem, 4vw, 3.25rem)` | Section titles (Fraunces) |
| `--fs-h3` | `clamp(1.25rem, 2vw, 1.6rem)` | Card titles |
| `--fs-body` | `1.0625rem` (17px) | Body (Hanken) |
| `--fs-sm` | `0.875rem` | Meta, captions |
| `--fs-kicker` | `0.75rem` | Small-caps kickers |

Body line length capped at **65–70ch**. Line-height 1.6 body, 1.05–1.1 display.

### Spacing (generous, cinematic rhythm — vary it, never uniform)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `0.5rem` | Tight gaps |
| `--space-sm` | `0.75rem` | Inline spacing |
| `--space-md` | `1.25rem` | Standard padding |
| `--space-lg` | `2rem` | Card padding |
| `--space-xl` | `3.5rem` | Block gaps |
| `--section` | `clamp(5rem, 12vh, 10rem)` | Vertical section padding — big, breathing |

Container: `max-width: 1280px`, side padding `clamp(1.25rem, 5vw, 3rem)`.

### Elevation

Cinematic depth comes from *contrast and light*, not heavy drop-shadows. Tint shadows
toward the ground hue.

| Level | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(20,22,15,0.25)` |
| `--shadow-md` | `0 8px 24px -12px rgba(20,22,15,0.45)` |
| `--shadow-lg` | `0 24px 60px -28px rgba(20,22,15,0.6)` |

Radius: `--radius: 4px` (small, architectural) for buttons/inputs; `--radius-lg: 14px`
for image frames. Avoid pill-everything and over-rounded "friendly" corners — this is premium.

---

## Motion

- Ease-out with exponential curves: `--ease: cubic-bezier(0.16, 1, 0.3, 1)`. No bounce.
- UI interactions 150–250ms; scroll reveals 500–800ms. Never animate layout properties.
- Framer Motion for UI/section reveals; **GSAP ScrollTrigger** reserved for one or two
  signature cinematic moments (hero image parallax / pinned services). Never both in one tree.
- Respect `prefers-reduced-motion`: keep opacity/color, drop movement.
- Buttons: `:active { transform: scale(0.97) }`. Images reveal via `clip-path` on scroll.

---

## Component Specs (intent, not rigid CSS)

**Buttons** — Primary = solid sage (`--sage-lift` on dark / `--sage` on light), small radius,
`--fs-body` 500 weight, `transition: transform 160ms var(--ease)`, scale-down on press.
Secondary = 1px `--sand` border, transparent, sand text. No third button style.

**Service cards** — Not identical icon+title+text boxes. Use an editorial layout: a real
photograph, the service name in Fraunces, price in tabular figures, a quiet "Book" link.
Vary card sizes (one feature service larger). Full borders only — **never side-stripe accents**.

**Booking CTA** — Present but never shouty. One primary "Book a session" per screen,
sticky-available on mobile. Real phone `02073 888199` and address always one tap away.

**Inputs** — 1px `--line`, small radius, `--fs-body`, visible focus ring in `--sage-lift`.
Labels above inputs, not placeholder-only.

---

## Page Pattern (booking-driven brand site)

**Order:** Hero (cinematic, one image, 2-line Fraunces headline, Book CTA) → Services
(editorial grid, real prices) → The Space / Why (calm story + real credentials) →
Pricing (honest, from the real list) → Testimonials (real names: Sam, Daren, Angela,
Jakie, David) → Areas served + Location/hours → Booking CTA + footer.

CTA above the fold. Every section earns its place; cut anything that restates another.

---

## Real content facts (use these, not lorem)

- **Services:** Relaxing Massage, Deep Tissue, Cupping, Foot Massage, Four Hands Massage,
  Acupuncture, Ear Candling, Infertility Treatment.
- **Prices:** Relaxing £40/30m · £60/45m · £70/60m · £100/90m. Deep Tissue £50/30m ·
  £70/45m · £80/60m. Cupping £40/session. Ear Candling £40/session.
- **Location:** 98 Cleveland St, London W1T 6NR (Fitzrovia).
- **Hours:** Mon–Fri 10:00–21:30 · Sat–Sun 11:00–21:00.
- **Contact:** 02073 888199 / 07786 888199 · info@amhealthclinic.co.uk
- **Areas served:** Soho, Mayfair, Islington, Marylebone, Lambeth, Dalston, Fitzrovia,
  Camden Town, Willesden.

---

## Anti-Patterns (Do NOT Use)

- ❌ Spa-cliché pink/lavender, teal-and-white healthcare, red CTAs, purple gradients
- ❌ Gradient text, `background-clip:text`
- ❌ Side-stripe (`border-left`) accent cards, nested cards, identical icon-card grids
- ❌ The hero-metric template (big number + label). Note: the old site's "0+ awards / 0+
  clients" placeholders were never filled — **do not reproduce fake stat counters.**
- ❌ Stray template copy (the live site leaks "Ginkgo Health Clinic" — never copy that)
- ❌ Emojis as icons (use Lucide/Heroicons), missing `cursor:pointer`, layout-shift hovers
- ❌ Instant state changes, invisible focus states, low-contrast text
- ❌ Em dashes in copy

---

## Pre-Delivery Checklist

- [ ] Sage-green identity preserved; palette matches this file (no stock slate/red)
- [ ] Fraunces + Hanken Grotesk loaded; no Inter/Poppins default look
- [ ] Hero H1 ≤ 3 lines, generous section spacing
- [ ] No emojis as icons; consistent Lucide set
- [ ] `cursor-pointer` on all clickable elements; press/hover/focus states present
- [ ] Contrast ≥ 4.5:1 in both dark and light sections (checked independently)
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive at 375 / 768 / 1024 / 1440; no horizontal scroll; mobile Book CTA reachable
- [ ] Real prices, address, hours, services — no lorem, no fake counters
