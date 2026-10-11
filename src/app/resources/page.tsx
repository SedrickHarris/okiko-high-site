import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  alternates: { canonical: "/resources" },
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight">Resources</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
