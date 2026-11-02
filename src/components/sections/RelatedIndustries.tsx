import Link from "next/link";
import type { CSSProperties } from "react";
import { audiences } from "@/content/industries/hub";
import { IconCardHeading } from "../cards/IconCardHeading";
import { ButtonLink } from "../ui/ButtonLink";
import { PageSection } from "./PageSection";

const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;

// Cross-links between the audience pages, the services hub, and the industries hub.
// Pass `currentPath` to leave the page you are on out of the list.
export function RelatedIndustries({
  currentPath,
  heading = "Explore Other Industries",
  intro,
  twoColumns = false,
}: {
  currentPath?: string;
  heading?: string;
  intro?: string;
  // Two columns on medium and wider screens, for lists of four cards (a 2 by 2 grid).
  twoColumns?: boolean;
}) {
  const items = audiences.filter((audience) => audience.path !== currentPath);
  return (
    <PageSection
      id="related-industries"
      heading={heading}
      intro={
        <p>
          {intro ??
            "The same services apply differently in each industry. Each page shows how."}{" "}
          <Link
            href="/industries"
            className="font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink"
          >
            See all industries
          </Link>
          .
        </p>
      }
    >
      <ul className={`grid gap-6 md:grid-cols-2${twoColumns ? "" : " lg:grid-cols-3"}`}>
        {items.map((item, index) => (
          <li
            key={item.path}
            style={{ "--reveal-i": index % 3 } as CSSProperties}
            className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
          >
            <IconCardHeading icon={item.icon} title={item.title} />
            <p className="mt-4 text-neutral-700">{item.description}</p>
            <div className="mt-auto pt-6">
              <ButtonLink href={item.path} variant="secondary">
                {item.buttonLabel}
              </ButtonLink>
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
