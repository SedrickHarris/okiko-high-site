# 05 — Brand and Design System

**File:** `docs/05-brand-and-design-system.md`

## Purpose

Define the visual foundation and reusable interface patterns for the OKIKO HIGH website. The approved logo is the source of truth for the brand colors.

## Brand direction

- **Brand name:** OKIKO HIGH Digital Marketing Agency
- **Theme:** Light
- **Primary foundation:** White
- **Color source:** The approved OKIKO HIGH logo
- **Exact color values:** Recorded in the token table below. Sampled from the logo image the owner supplied on 2026-10-10 (yellow, blue, and green arrows). That image is not stored in this repository and its marks and wordmark are not used on the site; only the three colors are used.
- **Logo asset:** Approved flat logo; website-ready file and repository location are TBD.
- **Descriptor:** “Digital Marketing Agency” may be used with the wordmark where space allows.

The site should feel clear, confident, modern, approachable, and technology-forward. Keep the visual system distinctive to OKIKO HIGH. Do not use GoHighLevel brand assets or imply an official relationship.

## Color tokens

Once the logo asset is available, define color tokens for:

| Token | Use | Value |
|---|---|---|
| Token (in `src/app/globals.css`) | Use | Value | Origin |
|---|---|---|---|
| `brand-blue` | Primary CTA fill, accents | `#0098FD` | Sampled from logo |
| `brand-green` | Supporting accents, secondary highlights | `#00D002` | Sampled from logo |
| `brand-yellow` | Decorative accents (section bars) | `#FFC503` | Sampled from logo |
| `brand-ink` | Text on brand fills, main text | `#171717` | Existing foreground |
| `brand-blue-strong` | Links, focus ring, small colored text, numbered markers | `#0068B5` | Derived: darker shade of `brand-blue` |
| `brand-blue-hover` | Primary button hover | `#33ADFF` | Derived: lighter shade of `brand-blue` |
| `surface` | Main page background | `#FFFFFF` | Light theme foundation |
| `surface-muted` | Alternate sections and subtle panels | `#F2F9FF` | Derived: faint tint of `brand-blue` |
| `text-muted` | Supporting copy | Tailwind `neutral-600` / `neutral-700` | Neutral |
| `border` | Card borders, dividers | Tailwind `neutral-200`; `brand-blue` at 30% on muted panels | Neutral / derived |

### Contrast rules for the brand colors

Measured against WCAG contrast ratios:

| Pairing | Ratio | Rule |
|---|---|---|
| `brand-blue` on white | 3.04:1 | Passes 3:1 for UI components only. Never use as body or small text. |
| `brand-green` on white | 2.10:1 | Decorative use only. Never as text or as the only indicator. |
| `brand-yellow` on white | 1.60:1 | Decorative use only. Never as text. |
| `brand-ink` on `brand-blue` | 5.90:1 | Use for text on blue fills. White text on blue fails. |
| `brand-ink` on `brand-green` | 8.56:1 | Use for text on green fills. |
| `brand-ink` on `brand-yellow` | 11.30:1 | Use for text on yellow fills. |
| `brand-blue-strong` on white | 5.76:1 | Use for links and small colored text. |
| `brand-blue-strong` on `surface-muted` | 5.42:1 | Safe on muted panels. |

Keyboard focus uses a 3px `brand-blue-strong` outline with a 2px offset.

Check all text and interactive states for accessible contrast on the light theme. Do not infer exact brand colors from a compressed screenshot if the source logo is available.

## Logo use

Organize approved logo assets under:

```text
public/images/brand/
├── logos/
│   ├── source/
│   ├── web/
│   └── social/
└── icons/
```

Use the primary logo on white or light surfaces. Use a reversed logo only where a dark background requires it and an approved variant exists. Use the standalone mark for small placements such as a favicon or social avatar, if supplied.

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

- Exact logo color values
- Approved web and social logo assets
- Final button, card, and form styles
- Image direction for page types
