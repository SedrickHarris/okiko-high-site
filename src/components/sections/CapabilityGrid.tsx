import type { ComponentType } from "react";
import {
  AnalyticsIcon,
  ConversionIcon,
  CustomDesignIcon,
  IntegrationsIcon,
  LaunchIcon,
  LeadCaptureIcon,
  ResponsiveIcon,
  SeoIcon,
} from "../ui/icons";

const icons = {
  design: CustomDesignIcon,
  responsive: ResponsiveIcon,
  conversion: ConversionIcon,
  lead: LeadCaptureIcon,
  integrations: IntegrationsIcon,
  seo: SeoIcon,
  analytics: AnalyticsIcon,
  launch: LaunchIcon,
} satisfies Record<string, ComponentType<{ className?: string }>>;

export type CapabilityIcon = keyof typeof icons;

export function CapabilityGrid({
  items,
}: {
  items: ReadonlyArray<{ icon: CapabilityIcon; label: string; note?: string }>;
}) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map(({ icon, label, note }) => {
        const Glyph = icons[icon];
        return (
          <li
            key={label}
            className="flex flex-col items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-muted text-brand-blue-strong">
              <Glyph />
            </span>
            <span className="text-sm font-semibold leading-snug text-neutral-900">
              {label}
              {note && <span className="mt-0.5 block font-medium text-neutral-600">{note}</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
