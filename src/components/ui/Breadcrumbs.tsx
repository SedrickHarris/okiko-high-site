import Link from "next/link";

type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: ReadonlyArray<Crumb> }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-brand-blue-strong underline-offset-2 hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>{item.name}</span>
              )}
              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
