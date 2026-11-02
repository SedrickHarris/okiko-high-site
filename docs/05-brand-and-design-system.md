# 05 — Brand and Design System

**File:** `docs/05-brand-and-design-system.md`

## Purpose

Define the visual foundation and reusable interface patterns for the OKIKO HIGH website. The approved logo is the source of truth for the brand colors.

## Brand direction

- **Brand name:** OKIKO HIGH Digital Marketing Agency
- **Theme:** Light
- **Primary foundation:** White
- **Color source:** The approved OKIKO HIGH logo
- **Exact color values:** Recorded in the token table below. Sampled from the logo pack in `public/images/brand/logos/` (read from the SVG fills and listed in `public/images/brand/logos/source/README.txt`). The owner decided on 2026-11-02 that the logo colors are authoritative. They replace the values first sampled on 2026-10-10 from an older reference image, which did not match the logo in the header.
- **Logo asset:** Logo pack stored under `public/images/brand/logos/` (see Logo use below).
- **Descriptor:** “Digital Marketing Agency” may be used with the wordmark where space allows.

The site should feel clear, confident, modern, approachable, and technology-forward. Keep the visual system distinctive to OKIKO HIGH. Do not use GoHighLevel brand assets or imply an official relationship.

## Color tokens

Once the logo asset is available, define color tokens for:

| Token | Use | Value |
|---|---|---|
| Token (in `src/app/globals.css`) | Use | Value | Origin |
|---|---|---|---|
| `brand-blue` | Primary CTA fill, accents | `#1468FF` | Sampled from the logo pack |
| `brand-green` | Supporting accents, secondary highlights (the logo's lime) | `#78C900` | Sampled from the logo pack |
| `brand-yellow` | Decorative accents (section bars) | `#F2C900` | Sampled from the logo pack |
| `brand-ink` | Main text; text on lime and yellow fills | `#171A22` | Sampled from the logo pack |
| `brand-blue-strong` | Links, focus ring, small colored text, numbered markers | `#0F4FD1` | Derived: darker shade of `brand-blue` |
| `brand-blue-hover` | Primary button hover (white text stays readable) | `#0F55D9` | Derived: darker shade of `brand-blue` |
| `surface` | Main page background | `#FFFFFF` | Light theme foundation |
| `surface-muted` | Alternate sections and subtle panels | `#F2F6FF` | Derived: faint tint of `brand-blue` |
| `text-muted` | Supporting copy | Tailwind `neutral-600` / `neutral-700` | Neutral |
| `border` | Card borders, dividers | Tailwind `neutral-200`; `brand-blue` at 30% on muted panels | Neutral / derived |

`--foreground` equals `brand-ink`. Non-brand colors kept on purpose: Tailwind `red-600` for negative states, Tailwind neutrals for text, borders and device outlines, and `#262626` plus light grays (`#D4D4D4`, `#E5E5E5`, `#F5F5F5`, `#A3A3A3`) as outline and placeholder tones inside illustrations.

### Contrast rules for the brand colors

Measured WCAG 2.x contrast ratios (2026-11-02). Text needs 4.5:1; large text and UI components need 3:1.

| Pairing | Old | New | Rule |
|---|---|---|---|
| `brand-blue` on white | 3.04 | 4.72 | Passes 4.5:1 on white. Prefer `brand-blue-strong` for small text. |
| `brand-blue` on `surface-muted` | 2.86 | 4.36 | Fails 4.5:1. Use `brand-blue-strong` for text on muted panels. |
| `brand-green` on white | 2.10 | 2.07 | Decorative only. Never as text or the only indicator. |
| `brand-yellow` on white | 1.60 | 1.60 | Decorative only. Never as text. |
| white on `brand-blue` | 3.04 | 4.72 | Use white text on blue fills (buttons, chips, pills, badges). |
| `brand-ink` on `brand-blue` | 5.90 | 3.69 | Fails 4.5:1. Do not put ink text on blue fills. |
| `brand-ink` on `brand-green` | 8.56 | 8.41 | Use ink text on lime fills. |
| `brand-ink` on `brand-yellow` | 11.30 | 10.88 | Use ink text on yellow fills. |
| white on `brand-green` / `brand-yellow` | 2.10 / 1.59 | 2.07 / 1.60 | Never. |
| `brand-ink` on white | 17.93 | 17.39 | Main text. |
| white on `brand-blue-hover` | 2.45 (ink 7.31) | 6.32 | Primary button hover keeps white text readable. |
| white on `brand-blue-strong` | 5.76 | 6.86 | Numbered markers and badges on strong blue. |
| `brand-blue-strong` on white | 5.76 | 6.86 | Links and small colored text. |
| `brand-blue-strong` on `surface-muted` | 5.42 | 6.34 | Safe on muted panels. |
| `surface-muted` against white | 1.06 | 1.08 | Background tint only; panels also use a border. |

Focus ring: `brand-blue-strong` against white is 6.86:1, above the 3:1 needed for UI components.

Keyboard focus uses a 3px `brand-blue-strong` outline with a 2px offset.

Check all text and interactive states for accessible contrast on the light theme. Take brand colors from the logo SVG fills, not from screenshots.

## Logo use

The approved logo pack is stored under:

```text
public/images/brand/
├── logos/
│   ├── source/
│   ├── web/
│   └── social/
└── icons/
```

Use the primary logo on white or light surfaces. Use a reversed logo only where a dark background requires it and an approved variant exists. Use the standalone mark for small placements such as a favicon or social avatar, if supplied.

Contents: `source/` holds editable SVGs (primary, horizontal, icon; on white, reversed, and dark variants) and the pack README; `web/` holds WebP exports and favicon files; `social/` holds icon images. The root layout and contact page use `web/okiko-high-primary-on-white.webp` as the Open Graph image, and `src/app/icon.svg` and `src/app/apple-icon.png` are the favicons.

Do not stretch, recolor, rearrange, or recreate the logo without approval. Preserve original source files.

## Typography

Initial design-system choice: **Manrope + Inter**.

- **Manrope** for headings, navigation, buttons, and short callouts. Its geometric shapes give OKIKO HIGH a modern, technology-forward feel that fits its automation services.
- **Inter** for body copy, forms, FAQs, and longer reading. It stays highly readable for detailed service explanations and research-informed content.
- Together they feel polished without looking overly futuristic. Keep the typography consistent across the white theme and the logo-based brand colors.

| Use | Font | Weight |
|---|---|---|
| H1 and major headings | Manrope | 700-800 (site default: 800) |
| H2 and H3 | Manrope | 600-700 (site default: H2 700, H3 600) |
| Navigation and buttons | Manrope | 600 |
| Body copy | Inter | 400-500 |
| Labels and supporting text | Inter | 500-600 |

Implementation notes:

- Both fonts load through `next/font/google` in `src/app/layout.tsx`, which self-hosts them at build time. The CSS variables are `--font-manrope` and `--font-inter`.
- `src/app/globals.css` maps them to Tailwind: `font-sans` is Inter (and the `body` default), and `font-heading` is Manrope. All `h1` to `h6` elements use Manrope through a base rule. Add `font-heading` to any non-heading element that should use Manrope, such as navigation links and buttons.
- Fallbacks: `ui-sans-serif, system-ui, sans-serif`.
- Geist and Geist Mono were removed. There is no monospace font in the design system.
- FAQ question headings are H3s, so they use Manrope. FAQ answers use Inter.
- Maintain readable line lengths, clear hierarchy, and comfortable line spacing across screen sizes.

## Interface patterns

Define reusable styles for:

- Header and navigation
- Primary and secondary buttons
- Text links
- Service and audience cards
- Forms and form states
- FAQ accordions
- Testimonials or case-study elements, when approved
- Section backgrounds and dividers
- Breadcrumbs
- Footer
- Mobile navigation

Use consistent spacing, border radius, shadows, and icon treatments. Avoid unnecessary gradients and decorative effects that reduce readability.

### Shared page patterns

- **Page hero (`src/components/sections/PageHero.tsx`):** every page hero is a soft blue-tinted panel that fades to white, with a short stripe in the three logo colors (blue, lime, yellow) above the content. The tint is a faint wash of `surface-muted`, so the page keeps its white foundation. Pass the page's own column layout to the component instead of writing a new `<header>`.
- **Brand color helpers (`src/lib/brand.ts`):** use `fills`, `fillAt(index)`, and `accents` for any blue, lime, yellow rotation. Text color follows the fill (white on blue, `brand-ink` on lime and yellow), so a rotation cannot put dark text on the blue fill. Do not write new color-rotation arrays in pages.
- **Hero jump card (`src/components/sections/HeroJumpCard.tsx`):** a numbered list of section links for long pages. The `card` variant fills a hero's side column, as on `/faq`. The `row` variant is a compact row of pills placed under a hero whose side column already holds an illustration, as on the four industry pages and Website Design. Numbers and labels carry the meaning; the chip color is decoration.
- **Step badges (`src/components/ui/StepBadge.tsx`):** every numbered "Step n" or "Stage n" card label uses this pill. The fill rotates blue, lime, yellow with the step and pairs with the card's top border (`accents`), so a card's border and badge match. The number is in the text.
- **Service cards (`src/components/cards/ServiceCard.tsx`):** one card for Home, the Services hub, the Industries hub, and `/faq`. Each carries a pill per customer-journey stage it mainly supports (`journey` in `src/content/services/hub.ts`, stage names from `journeyStageNames`). Stages match the five groups on `/faq`. The pills are a guide to where a service fits, not a promise of results or of coverage of every step.
- **FAQ intros (`src/components/sections/FaqIntro.tsx`):** each service, industry, and combo page passes a `FaqIntro` to `FaqSection`, with related-page links and a link to `/faq`. Home, the Services hub, the Industries hub, and Contact keep their own intro lines that link to `/faq`.

## Images and icons

- Use imagery that supports the page’s topic and helps visitors understand the service or audience.
- Do not use images that imply unverified customers, results, locations, staff, or partnerships.
- Use descriptive, lowercase, hyphen-separated image filenames.
- Provide useful alt text for informative images; use empty alt text for decorative images.
- Use one consistent icon style and avoid mixing unrelated icon families.

## Responsive and accessible design

- Design mobile layouts alongside desktop layouts.
- Ensure navigation, buttons, forms, and accordions work with keyboard and touch.
- Provide visible focus states.
- Use semantic headings and controls.
- Do not rely on color alone to convey meaning.
- Check text contrast, font sizing, and spacing on small screens.

## Open design decisions

- Owner to confirm that blue fills with white text, and a derived darker blue for links, are acceptable. The logo blue passes 4.5:1 only with white text and only on white.
- Lime and yellow are decorative on white; confirm they stay accents only.
- Final button, card, and form styles
- Image direction for page types
