import Link from "next/link";
import { PageSection } from "@/components/sections/PageSection";
import { comboPath, publishedCombos } from "@/content/combos/registry";
import type { AudienceSlug, ServiceSlug } from "@/content/combos/types";

// Links from an audience page or a service page to the combo pages that sit under it.
// Renders nothing until at least one matching combo is published, so unpublished
// (noindex) pages are never linked.
export function PublishedComboLinks({
  audience,
  service,
  id,
  heading,
  intro,
}: {
  audience?: AudienceSlug;
  service?: ServiceSlug;
  id: string;
  heading: string;
  intro?: string;
}) {
  const combos = publishedCombos().filter(
    (c) => (!audience || c.audience === audience) && (!service || c.service === service),
  );
  if (combos.length === 0) return null;
  return (
    <PageSection id={id} heading={heading} intro={intro ? <p>{intro}</p> : undefined}>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {combos.map((c) => (
          <li key={`${c.audience}/${c.service}`}>
            <Link
              href={comboPath(c.audience, c.service)}
              className="block h-full rounded-lg border border-neutral-200 bg-white p-4 hover:border-brand-blue"
            >
              <span className="block font-heading font-bold text-brand-blue-strong underline underline-offset-2">
                {c.h1}
              </span>
              <span className="mt-1 block text-sm text-neutral-700">{c.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
