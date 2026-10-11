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
