// Blog post index. The blog hub (/blog) lists entries marked `published`.
// There are no approved posts yet, so the list is empty and the hub is noindex and
// out of the sitemap (see src/data/placeholder-pages.ts). Do not add a post without
// owner approval of its topic and copy.
//
// To add a post: add an entry here, then create src/app/blog/[slug]/page.tsx with
// generateStaticParams (the site is a static export) and the post content. Posts
// need their own target keyword and unique metadata (docs/03, docs/04).

export type BlogPost = {
  title: string;
  /** Lowercase, hyphenated. The post lives at /blog/{slug}. */
  slug: string;
  description: string;
  /** ISO date, YYYY-MM-DD. */
  publishedAt: string;
  category: string;
  published: boolean;
};

export const blogPosts: ReadonlyArray<BlogPost> = [];

/** Published posts, newest first. */
export function publishedPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.published)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function blogPostPath(post: BlogPost): string {
  return `/blog/${post.slug}`;
}
