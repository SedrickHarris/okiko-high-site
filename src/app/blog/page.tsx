import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostList } from "@/components/sections/BlogPostList";
import { PageHero } from "@/components/sections/PageHero";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { blogPage as page, emptyState } from "@/content/blog";
import { blogPostPath, publishedPosts } from "@/data/blog";
import { placeholderRobots } from "@/data/placeholder-pages";
import { absoluteUrl, breadcrumbListNode, graph, pageNode } from "@/lib/schema";

const posts = publishedPosts();

// Noindex and out of the sitemap until at least one post is published
// (driven by src/data/placeholder-pages.ts).
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  ...placeholderRobots("/blog"),
};

const pageUrl = absoluteUrl(page.path);

// docs/07: only indexable pages carry schema, so there is no JSON-LD while the hub is
// empty and noindex. Once posts exist: Organization, CollectionPage with an ItemList of
// the visible posts, and BreadcrumbList. No ratings, reviews, or LocalBusiness.
const structuredData =
  posts.length > 0
    ? graph([
        {
          ...pageNode(pageUrl, { type: "CollectionPage", name: page.h1, description: page.description }),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: post.title,
              url: absoluteUrl(blogPostPath(post)),
            })),
          },
        },
        breadcrumbListNode(pageUrl, [
          { name: "Home", path: "/" },
          { name: "Blog", path: page.path },
        ]),
      ])
    : null;

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

export default function Page() {
  return (
    <>
      {structuredData && <JsonLd data={structuredData} />}
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
      <div className="mt-6 space-y-12">
        <PageHero layout="max-w-3xl">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{page.h1}</h1>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-700">
              {page.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </PageHero>

        {posts.length > 0 ? (
          <PageSection id="latest-articles" heading="Latest articles">
            <BlogPostList posts={posts} />
          </PageSection>
        ) : (
          <PageSection id="no-articles" heading={emptyState.heading} intro={<p>{emptyState.text}</p>}>
            <ul className="space-y-1">
              {emptyState.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`${linkClass} inline-flex min-h-11 items-center`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </PageSection>
        )}
      </div>
    </>
  );
}
