// Placeholder pages that exist but have no approved content yet. While `published` is
// false the page is noindex (follow) and left out of the sitemap; footer links stay.
// Set it to true once real content is approved: indexing and the sitemap entry return
// together.

type PlaceholderPath = "/case-studies" | "/resources" | "/privacy-policy" | "/terms-of-service";

export const placeholderPages: Record<PlaceholderPath, { published: boolean }> = {
  "/case-studies": { published: false },
  "/resources": { published: false },
  "/privacy-policy": { published: false },
  "/terms-of-service": { published: false },
};

/** Spread into a page's `metadata`: noindex while unpublished, nothing once published. */
export function placeholderRobots(path: PlaceholderPath) {
  return placeholderPages[path].published
    ? {}
    : { robots: { index: false, follow: true } };
}

/** Whether a path belongs in the sitemap. Non-placeholder paths always do. */
export function isSitemapPath(path: string): boolean {
  const entry = (placeholderPages as Record<string, { published: boolean } | undefined>)[path];
  return entry ? entry.published : true;
}
