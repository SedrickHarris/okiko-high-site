import type { Faq } from "@/content/services/website-design";
import { PageSection } from "./PageSection";
import { SourceLinks } from "../ui/SourceLinks";

// Native <details>/<summary>: keyboard and touch accessible without client JS.
// Questions and answers rendered here are the same data used for FAQPage JSON-LD.
export function FaqSection({
  id,
  heading,
  faqs,
}: {
  id: string;
  heading: string;
  faqs: ReadonlyArray<Faq>;
}) {
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];
  return (
    <PageSection id={id} heading={heading}>
      {/* Two independent columns so opening one item never shifts the other column. */}
      <div className="grid items-start gap-4 lg:grid-cols-2">
        {columns.map((column, i) => (
          <div
            key={i}
            className="divide-y divide-neutral-200 rounded-lg border border-neutral-200"
          >
            {column.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none text-brand-blue-strong transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-3 text-neutral-700">
                  <p className="leading-relaxed">{faq.answer}</p>
                  {faq.sources && <SourceLinks sources={faq.sources} />}
                </div>
              </details>
            ))}
          </div>
        ))}
      </div>
    </PageSection>
  );
}
