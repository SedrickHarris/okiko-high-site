import type { SourceLink } from "@/content/shared";

export function SourceLinks({
  sources,
  label = "Source",
}: {
  sources: ReadonlyArray<SourceLink>;
  label?: string;
}) {
  return (
    <p className="mt-2 text-sm text-neutral-600">
      {sources.length > 1 ? `${label}s` : label}:{" "}
      {sources.map((source, index) => (
        <span key={source.href}>
          {index > 0 && "; "}
          <a
            href={source.href}
            className="text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink"
            rel="noopener noreferrer"
          >
            {source.label}
          </a>
        </span>
      ))}
    </p>
  );
}
