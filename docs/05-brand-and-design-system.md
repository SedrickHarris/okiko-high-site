# 05 — Brand and Design System

**File:** `docs/05-brand-and-design-system.md`

## Purpose

Define the visual foundation and reusable interface patterns for the OKIKO HIGH website. The approved logo is the source of truth for the brand colors.

## Brand direction

- **Brand name:** OKIKO HIGH Digital Marketing Agency
- **Theme:** Light
- **Primary foundation:** White
- **Color source:** The approved OKIKO HIGH logo
- **Exact color values:** TBD; sample the approved logo file and record the selected hex values here.
- **Logo asset:** Approved flat logo; website-ready file and repository location are TBD.
- **Descriptor:** “Digital Marketing Agency” may be used with the wordmark where space allows.

The site should feel clear, confident, modern, approachable, and technology-forward. Keep the visual system distinctive to OKIKO HIGH. Do not use GoHighLevel brand assets or imply an official relationship.

## Color tokens

Once the logo asset is available, define color tokens for:

| Token | Use | Value |
|---|---|---|
| `brand-primary` | Primary CTA, links, selected highlights | TBD |
| `brand-secondary` | Supporting accents and secondary actions | TBD |
| `brand-dark` | Main text and high-contrast elements | TBD |
| `surface` | Main page background | `#FFFFFF` |
| `surface-muted` | Alternate sections and subtle panels | TBD |
| `text-primary` | Body copy and headings | TBD |
| `text-muted` | Supporting copy | TBD |
| `border` | Card borders, dividers, and form outlines | TBD |
| `focus` | Keyboard-focus indicator | TBD |

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

- **Display and heading typeface:** TBD
- **Body typeface:** TBD
- **Fallback fonts:** Use system sans-serif fallbacks until the final fonts are selected.
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
- Heading and body font choices
- Final button, card, and form styles
- Image direction for page types
