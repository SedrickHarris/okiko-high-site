import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
