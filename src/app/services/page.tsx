import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight">Services</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
      <ul className="mt-6 list-disc space-y-2 pl-5">
        <li>
          <Link
            href="/services/sms-email-automation"
            className="text-brand-blue-strong underline underline-offset-2"
          >
            Text and Email Automation for Customer Follow-Up
          </Link>
        </li>
      </ul>
    </>
  );
}
