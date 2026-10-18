import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComboPage } from "@/components/combos/ComboPage";
import { builtCombos, comboPath, getCombo } from "@/content/combos/registry";

// NOT ROUTED YET: this folder is private (_combos). Enable it with the git mv
// described in src/content/combos/registry.ts when the first combo is built.
//
// Audience x service combo pages. Static export requires every path up front, so
// only combos in the registry are built and any other path is a 404.
export const dynamicParams = false;

type Params = { audience: string; service: string };

export function generateStaticParams(): Params[] {
  return builtCombos().map(({ content }) => ({
    audience: content.audience,
    service: content.service,
  }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { audience, service } = await params;
  const entry = getCombo(audience, service);
  if (!entry) return {};
  const { content, published } = entry;
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: comboPath(content.audience, content.service) },
    // Built but not yet approved by the owner: keep out of the index.
    ...(published ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { audience, service } = await params;
  const entry = getCombo(audience, service);
  if (!entry) notFound();
  return <ComboPage content={entry.content} />;
}
