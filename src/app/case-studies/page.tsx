import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  alternates: { canonical: "/case-studies" },
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight">Case Studies</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
