---
name: A&M Health Clinic
description: Calm-luxury, dark-first visual system for a Fitzrovia massage clinic
colors:
  ground: "#14160F"
  surface: "#1B1E15"
  line-dark: "#2C3021"
  bone: "#EAE9DF"
  bone-2: "#E0DFD2"
  line-light: "#CFCEBE"
  sage: "#5F6243"
  sage-lift: "#8D9068"
  sand: "#B7B397"
  ink: "#20241A"
  cream: "#EDECE2"
  muted-dark: "#9DA089"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.25rem, 2vw, 1.6rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  sm: "4px"
  lg: "14px"
spacing:
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3.5rem"
  section: "clamp(5rem, 12vh, 10rem)"
components:
  button-primary-dark:
    backgroundColor: "{colors.sage-lift}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.75rem"
  button-primary-light:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.75rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.sand}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.75rem"
  service-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "0"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1rem"
---

# Design System: A&M Health Clinic

## 1. Overview

**Creative North Star: "The Treatment Room"**

The whole system is the feeling of stepping into a warm, low-lit treatment room after a hard
day in central London: linen, oil, quiet, and skilled hands. It is dark-first and cinematic,
a warm near-black ground that lets the clinic's real sage green read as premium, with light
"treatment-room" interludes for warmth. The register is brand, so feel outranks density: the
site should itself deliver the calm it sells. Every surface is unhurried, spacious, and still.

Underneath the calm sits quiet expertise. This is a real clinic with real therapists, and the
design carries that credibility through restraint rather than noise, concrete prices and
services over superlatives, discretion over display. The colour is committed: sage carries the
identity across the surface, grounded on charcoal, with a single warm sand accent.

It explicitly rejects four things carried from PRODUCT.md: the **clinical and cold** physio
aesthetic (harsh whites, medical stiffness), the **cheap massage parlour** (neon, seedy,
suggestive, bargain-bin), the **busy spa cliche** (pink/lavender, lotus flowers, hot-stone
stock, cluttered offers), and the **corporate templated** look of the site it replaces.

**Key Characteristics:**
- Dark-first, cinematic ground with warm light interludes
- Committed sage-green identity on tinted charcoal, one sand accent
- Editorial serif (Fraunces) over clean humanist sans (Hanken Grotesk)
- Generous, varied spacing; low density; one idea per screen
- Legitimacy and discretion above all; calm as the deliverable

## 2. Colors: The Treatment-Room Palette

A committed sage identity grounded on warm charcoal, warmed by bone and a single sand accent.
Every neutral is tinted toward the sage hue; pure `#000` and `#fff` are prohibited.

### Primary
- **Clinic Sage** (`#5F6243` / `oklch(0.44 0.038 120)`): The brand. The real clinic colour,
  used for primary buttons on light surfaces, the logo, and key marks. Its restraint is the point.
- **Lifted Sage** (`#8D9068` / `oklch(0.62 0.045 118)`): Sage made legible on the dark ground,
  used for primary buttons and links on charcoal sections.

### Secondary
- **Warm Sand** (`#B7B397` / `oklch(0.76 0.030 100)`): The single accent. Kickers, small-caps
  labels, hairline dividers, secondary-button borders. Accent only, never body text on dark.

### Neutral
- **Room Charcoal / Ground** (`#14160F` / `oklch(0.17 0.012 120)`): Primary dark background.
- **Raised Charcoal / Surface** (`#1B1E15` / `oklch(0.22 0.013 120)`): Raised dark panels, nav on scroll.
- **Dark Line** (`#2C3021`): Borders and hairlines on charcoal.
- **Bone** (`#EAE9DF` / `oklch(0.93 0.012 105)`): Light section background, the warm interludes.
- **Bone-2** (`#E0DFD2`): Light panels and dividers within bone sections.
- **Light Line** (`#CFCEBE`): Borders on bone.
- **Ink** (`#20241A`): Body text on bone.
- **Cream** (`#EDECE2`): Body text on the dark ground.
- **Muted** (`#9DA089`): Secondary text on charcoal.

### Named Rules
**The One Accent Rule.** Sand is the only accent. It appears on kickers, hairlines, and
secondary borders, never as a fill, never as body text on dark. Its scarcity keeps the sage
identity dominant.

**The No-Pure-Black Rule.** Never `#000` or `#fff`. Every neutral tints toward sage. If a value
looks flatly grey, it is wrong.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif)
**Label Font:** Hanken Grotesk (small-caps treatment)

**Character:** A warm, optical editorial serif carries the luxury; a clean humanist sans keeps
everything calm and legible. The pairing reads expensive without shouting, an elevation from
the site's default Poppins.

### Hierarchy
- **Display** (Fraunces 400, `clamp(2.75rem, 6vw, 5rem)`, line-height 1.05): Hero headline only.
  Tight tracking, optical sizing on.
- **Headline** (Fraunces 400, `clamp(2rem, 4vw, 3.25rem)`, line-height 1.1): Section titles.
- **Title** (Fraunces 500, `clamp(1.25rem, 2vw, 1.6rem)`, line-height 1.2): Service and card names.
- **Body** (Hanken Grotesk 400, `1.0625rem` / 17px, line-height 1.6): Paragraphs. Measure capped
  at 65–70ch.
- **Label** (Hanken Grotesk 500, `0.75rem`, letter-spacing 0.16em, small-caps): Sand kickers
  above sections.

### Named Rules
**The Two-Line Headline Rule.** The hero headline never exceeds three lines. Widen the container
and reduce size before letting it wrap to four.

**The Serif-Sans Divide Rule.** Fraunces is for display and names only; Hanken carries all body,
UI, and labels. Never set body copy in the serif. Inter and default Poppins are prohibited.

## 4. Elevation

This system conveys depth through light and contrast, not heavy shadows. Surfaces are flat at
rest; the cinematic feel comes from the charcoal-to-bone tonal shift between sections and from
soft, ground-tinted shadows used sparingly on raised imagery. If a shadow reads as a hard grey
drop, it is wrong, tint it toward the ground hue and widen the blur.

### Shadow Vocabulary
- **Subtle Lift** (`box-shadow: 0 1px 2px rgba(20,22,15,0.25)`): Hairline separation on hover.
- **Card Float** (`box-shadow: 0 8px 24px -12px rgba(20,22,15,0.45)`): Raised image frames and
  service cards on hover.
- **Deep Frame** (`box-shadow: 0 24px 60px -28px rgba(20,22,15,0.6)`): Hero and featured imagery.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadow appears only as a response to
state (hover, focus) or to lift photography off the ground, never as decoration on flat panels.

## 5. Components

### Buttons
- **Shape:** Small, architectural radius (4px). Never fully pill-rounded.
- **Primary:** Solid sage, Lifted Sage (`#8D9068`) with ground text on dark sections, Clinic
  Sage (`#5F6243`) with cream text on bone. Padding `0.9rem 1.75rem`, Hanken 500.
- **Hover / Focus:** 160ms ease-out; slight lightening on hover; visible sage focus ring
  (`0 0 0 3px` at 35% opacity). `:active` scales to 0.97 for tactile press.
- **Secondary:** Transparent with a 1px sand border and sand text. Exactly two button styles, no third.

### Cards / Containers
- **Corner Style:** Image frames 14px; control surfaces 4px.
- **Background:** Raised Charcoal (`#1B1E15`) on dark, Bone-2 (`#E0DFD2`) on light.
- **Shadow Strategy:** Flat at rest; Card Float on hover only (see Elevation).
- **Border:** Full 1px in Dark Line or Light Line. Side-stripe (`border-left`) accents are forbidden.
- **Internal Padding:** `2rem` (`--space-lg`). Never nest a card inside a card.

### Inputs / Fields
- **Style:** Transparent fill, 1px line stroke, 4px radius, cream text, labels above the field.
- **Focus:** Border shifts to Lifted Sage with a soft sage focus ring; no glow.
- **Error / Disabled:** Error text below the field in a warm tone; disabled at 40% opacity with
  a not-allowed cursor.

### Navigation
- **Style:** Minimal, transparent over the hero, condensing to Raised Charcoal (`#1B1E15`) on
  scroll. Hanken 500 links, sand hover underline, active link in cream.
- **Mobile:** Full-height overlay; a persistent "Book" action and the phone number
  `02073 888199` always one tap away.

### Signature — The Service Card
An editorial tile, not an icon box: a real photograph on top, the service name in Fraunces
(Title), the price in tabular figures, and a quiet "Book" link. Sizes vary across the grid,
one feature service is larger. Full border only, no coloured stripe.

### Signature — The Price Menu
Prices are set as a quiet restaurant-style menu: service name left, tabular-figure prices right,
sand hairline rules between rows. No loud "OFFER" banners or discount starbursts.

## 6. Do's and Don'ts

### Do:
- **Do** keep the committed sage identity (`#5F6243` / `#8D9068`) grounded on warm charcoal
  (`#14160F`), with warm bone (`#EAE9DF`) light interludes.
- **Do** set display and names in Fraunces, everything else in Hanken Grotesk.
- **Do** use real prices, services, testimonials (Sam, Daren, Angela, Jakie, David), address, and
  hours. Concrete over boastful.
- **Do** keep one quiet, ever-present path to booking, especially the mobile phone/Book action.
- **Do** give sections big, varied vertical breathing room (`clamp(5rem, 12vh, 10rem)`).
- **Do** keep motion ease-out and under 250ms for UI; honour `prefers-reduced-motion`.

### Don't:
- **Don't** go **clinical and cold**, no harsh whites, medical stiffness, or stock "doctor" imagery.
- **Don't** read as a **cheap massage parlour**, no neon, seedy, suggestive, or bargain-bin cues.
- **Don't** use the **busy spa cliche**, no pink/lavender, lotus flowers, hot-stone stock, or
  cluttered discount banners.
- **Don't** look **corporate or templated** like the site this replaces, no SaaS or website-builder feel.
- **Don't** reproduce the old site's fake "0+ awards / 0+ clients" counters or its leftover
  "Ginkgo Health Clinic" template copy.
- **Don't** use pure `#000`/`#fff`, gradient text, `background-clip:text`, side-stripe
  (`border-left`) accent cards, nested cards, or emojis as icons.
- **Don't** set sand as body text on dark, or let the hero headline wrap past three lines.
