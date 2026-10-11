import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
