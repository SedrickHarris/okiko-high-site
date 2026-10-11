import type { ReactNode } from "react";

// One outline style for the whole site: 24px grid, 1.75px stroke, round caps.
// Original line drawings. Decorative by default (aria-hidden): always pair
// with a visible text label.
function Icon({ children, className = "h-7 w-7" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

type P = { className?: string };

/** Browser window with a layout grid */
export const CustomDesignIcon = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 8.5h18M10 8.5V20M10 14h11" />
  </Icon>
);

/** Desktop and phone screens */
export const ResponsiveIcon = (p: P) => (
  <Icon {...p}>
    <rect x="2" y="4" width="13" height="10" rx="1.5" />
    <path d="M5.5 18h6M8.5 14v4" />
    <rect x="17" y="8" width="5" height="11" rx="1.2" />
  </Icon>
);

/** Cursor moving toward a clear button */
export const ConversionIcon = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="3" width="14" height="7" rx="2" />
    <path d="M12 12.5v8.5l2.3-2.3 1.9 3.6 1.7-.9-1.9-3.5 3.2-.2z" />
  </Icon>
);

/** Form with a check mark */
export const LeadCaptureIcon = (p: P) => (
  <Icon {...p}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h5M9 17l2 2 4-4" />
  </Icon>
);

/** Connected nodes */
export const IntegrationsIcon = (p: P) => (
  <Icon {...p}>
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="18" cy="6" r="2.4" />
    <circle cx="12" cy="18" r="2.4" />
    <path d="M8.4 6h7.2M7.2 8.2l3.7 7.6M16.8 8.2l-3.7 7.6" />
  </Icon>
);

/** Magnifying glass over a web page */
export const SeoIcon = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="3" width="12" height="15" rx="2" />
    <path d="M6 8h6M6 11.5h3.5" />
    <circle cx="16" cy="16" r="4" />
    <path d="M19 19l2.5 2.5" />
  </Icon>
);

/** Simple rising chart */
export const AnalyticsIcon = (p: P) => (
  <Icon {...p}>
    <path d="M3 3v18h18" />
    <path d="M7 15.5l4-4 3 3 6-7M15.5 7.5H20V12" />
  </Icon>
);

/** Browser window with a launch arrow */
export const LaunchIcon = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 8.5h18M10 17l5-5M11 12h4v4" />
  </Icon>
);

/** Message bubble (follow-up reply) */
export const MessageIcon = (p: P) => (
  <Icon {...p}>
    <path d="M4 5h16v11H9.5L5 20v-4H4z" />
  </Icon>
);

/** Check in a circle (included) */
export const CheckCircleIcon = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.5l2.7 2.7L16 9.5" />
  </Icon>
);

/** Plus in a circle (optional) */
export const PlusCircleIcon = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v8M8 12h8" />
  </Icon>
);

/** Minus in a circle (not assumed) */
export const MinusCircleIcon = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h8" />
  </Icon>
);

/** Sliders: tune what exists (Improve) */
export const ImproveIcon = (p: P) => (
  <Icon {...p}>
    <path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h10M18 17h2" />
    <circle cx="15" cy="7" r="2" />
    <circle cx="9" cy="12" r="2" />
    <circle cx="16" cy="17" r="2" />
  </Icon>
);

/** Reframe: new layout on the same platform (Redesign) */
export const RedesignIcon = (p: P) => (
  <Icon {...p}>
    <path d="M7 3v13a2 2 0 0 0 2 2h12M17 21V8a2 2 0 0 0-2-2H3" />
  </Icon>
);

/** Blocks: start from the foundation (Rebuild) */
export const RebuildIcon = (p: P) => (
  <Icon {...p}>
    <rect x="8" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </Icon>
);

/** Phone (mobile testing) */
export const PhoneIcon = (p: P) => (
  <Icon {...p}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M11 18h2" />
  </Icon>
);

/** Gauge (performance targets) */
export const GaugeIcon = (p: P) => (
  <Icon {...p}>
    <path d="M3.5 16a9 9 0 1 1 17 0" />
    <path d="M12 14l4-5" />
    <circle cx="12" cy="14" r="1" />
  </Icon>
);

/** Person figure (accessibility) */
export const AccessibilityIcon = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="5" r="1.7" />
    <path d="M5 9h14M12 9v5M12 14l-3 7M12 14l3 7" />
  </Icon>
);

/** Plug (third-party widgets) */
export const PlugIcon = (p: P) => (
  <Icon {...p}>
    <path d="M9 3v4M15 3v4M7 7h10v4a5 5 0 0 1-10 0zM12 16v5" />
  </Icon>
);

/** Map pin (discovery) */
export const MapPinIcon = (p: P) => (
  <Icon {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </Icon>
);

/** Headset (reception) */
export const HeadsetIcon = (p: P) => (
  <Icon {...p}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <path d="M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z" />
    <path d="M17 19c0 1.5-2 2-5 2" />
  </Icon>
);

/** Envelope (follow-up) */
export const MailIcon = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Icon>
);

/** Calendar page */
export const CalendarIcon = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Icon>
);

export const iconRegistry = {
  check: CheckCircleIcon,
  plus: PlusCircleIcon,
  minus: MinusCircleIcon,
  improve: ImproveIcon,
  redesign: RedesignIcon,
  rebuild: RebuildIcon,
  phone: PhoneIcon,
  gauge: GaugeIcon,
  accessibility: AccessibilityIcon,
  plug: PlugIcon,
  pin: MapPinIcon,
  website: CustomDesignIcon,
  message: MessageIcon,
  headset: HeadsetIcon,
  mail: MailIcon,
  lead: LeadCaptureIcon,
  integrations: IntegrationsIcon,
  calendar: CalendarIcon,
} as const;

export type IconName = keyof typeof iconRegistry;

export function NamedIcon({ name, className }: { name: IconName; className?: string }) {
  const Glyph = iconRegistry[name];
  return <Glyph className={className} />;
}
