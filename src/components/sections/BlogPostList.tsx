import Link from "next/link";
import { blogPostPath, type BlogPost } from "@/data/blog";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function BlogPostList({ posts }: { posts: ReadonlyArray<BlogPost> }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <li key={post.slug} className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-600">
            <span className="font-semibold text-brand-blue-strong">{post.category}</span>
            {" - "}
            <time dateTime={post.publishedAt}>{dateFormat.format(new Date(post.publishedAt))}</time>
          </p>
          <h3 className="mt-2 text-xl font-semibold">
            <Link
              href={blogPostPath(post)}
              className="text-brand-ink underline decoration-transparent underline-offset-4 hover:text-brand-blue-strong hover:decoration-current"
            >
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 text-neutral-700">{post.description}</p>
        </li>
      ))}
    </ul>
  );
}
