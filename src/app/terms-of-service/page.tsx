import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms-of-service" },
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
