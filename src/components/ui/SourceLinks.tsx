import type { SourceLink } from "@/content/services/website-design";

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
            className="underline underline-offset-2 hover:text-neutral-900"
            rel="noopener noreferrer"
          >
            {source.label}
          </a>
        </span>
      ))}
    </p>
  );
}
