import Link from "next/link";
import type { ReactNode } from "react";

const linkClass = "text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

const isInternal = (href: string) => href.startsWith("/");

// Plain text in which the first occurrence of each phrase becomes a link. Phrases that
// are not in the text are skipped, so one list can serve several strings. The visible
// text is unchanged, so structured data built from the same string stays in sync.
// Paths use next/link; tel: and mailto: hrefs render as plain anchors.
export function LinkedText({
  text,
  links = [],
}: {
  text: string;
  links?: ReadonlyArray<{ phrase: string; href: string }>;
}) {
  let nodes: ReactNode[] = [text];
  for (const { phrase, href } of links) {
    const next: ReactNode[] = [];
    let done = false;
    for (const node of nodes) {
      const at = !done && typeof node === "string" ? node.indexOf(phrase) : -1;
      if (typeof node !== "string" || at < 0) {
        next.push(node);
        continue;
      }
      done = true;
      next.push(node.slice(0, at));
      next.push(
        isInternal(href) ? (
          <Link key={href + phrase} href={href} className={linkClass}>
            {phrase}
          </Link>
        ) : (
          <a key={href + phrase} href={href} className={linkClass}>
            {phrase}
          </a>
        ),
      );
      next.push(node.slice(at + phrase.length));
    }
    nodes = next;
  }
  return <>{nodes}</>;
}
