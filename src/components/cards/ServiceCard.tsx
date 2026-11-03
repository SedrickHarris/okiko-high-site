import type { CSSProperties } from "react";
import { journeyStageNames, type HubService } from "@/content/services/hub";
import { accents, fillAt } from "@/lib/brand";
import { ButtonLink } from "../ui/ButtonLink";
import { IconCardHeading } from "./IconCardHeading";

// Service card used on Home, the Services hub, and /faq. Each card carries a pill per
// customer-journey stage it mainly supports, colored to match the stage chips on /faq.
// The stage number and name are in the text, so color is never the only cue.
//
// Optional props let another page reuse the card design with its own copy: `description`
// replaces the hub description, and `showStages={false}` hides the journey-stage pills
// (for pages where the customer-journey framing does not apply, such as the privacy policy).
export function ServiceCard({
  service,
  index,
  description,
  showStages = true,
}: {
  service: HubService;
  index: number;
  description?: string;
  showStages?: boolean;
}) {
  return (
    <li
      style={{ "--reveal-i": index % 3 } as CSSProperties}
      className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
    >
      {showStages && (
        <p className="mb-4 flex flex-wrap gap-2">
          {service.journey.map((stage) => (
            <span
              key={stage}
              className={`rounded-full px-2.5 py-0.5 font-heading text-xs font-bold ${fillAt(stage - 1)}`}
            >
              Stage {stage}: {journeyStageNames[stage]}
            </span>
          ))}
        </p>
      )}
      <IconCardHeading icon={service.icon} title={service.title} />
      <p className="mt-4 text-neutral-700">{description ?? service.description}</p>
      <div className="mt-auto pt-6">
        <ButtonLink href={service.path} variant="secondary">
          {service.buttonLabel}
        </ButtonLink>
      </div>
    </li>
  );
}
