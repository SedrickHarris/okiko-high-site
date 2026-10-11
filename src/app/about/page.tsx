import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight">About OKIKO HIGH</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
