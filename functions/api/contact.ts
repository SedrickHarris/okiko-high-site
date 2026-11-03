// Cloudflare Pages Function: POST /api/contact
//
// Receives the contact form submission (see src/lib/contact-form.ts), creates or
// updates the contact in GoHighLevel with a Private Integration token, and saves the
// service choice, preferred method, and message as a note on the contact.
//
// The token never reaches the browser. Set these in Cloudflare Pages (Settings,
// Variables and Secrets), never in source and never with a NEXT_PUBLIC_ prefix:
//   GHL_PRIVATE_TOKEN  (encrypted secret) Private Integration token
//   GHL_LOCATION_ID    (variable) sub-account Location ID
// For local testing with `wrangler pages dev`, put them in a .dev.vars file
// (git-ignored).
//
// Self-contained on purpose: no imports and no extra type packages, because the
// repository's tsconfig type-checks every .ts file.

interface Env {
  GHL_PRIVATE_TOKEN?: string;
  GHL_LOCATION_ID?: string;
}

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";
const CONTACT_TAG = "website-contact-form";
const CONTACT_SOURCE = "okikohigh.com contact form";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneCharacters = /^[\d\s+().-]+$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const text = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

type Submission = {
  services: string[];
  otherService: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferredContact: string;
  message: string;
};

/** Reads and validates the body. Returns null when it is not an acceptable submission. */
function parseSubmission(raw: unknown): Submission | null {
  if (!raw || typeof raw !== "object") return null;
  const body = raw as Record<string, unknown>;

  const services = Array.isArray(body.services)
    ? body.services.map((item) => text(item, 100)).filter(Boolean).slice(0, 10)
    : [];
  const firstName = text(body.firstName, 100);
  const phone = text(body.phone, 30);
  const email = text(body.email, 200);
  const digits = phone.replace(/\D/g, "");

  if (services.length === 0 || !firstName) return null;
  if (!phoneCharacters.test(phone) || digits.length < 7 || digits.length > 15) return null;
  if (email && !emailPattern.test(email)) return null;

  const preferred = text(body.preferredContact, 10);
  return {
    services,
    otherService: text(body.otherService, 200),
    firstName,
    lastName: text(body.lastName, 100),
    phone,
    email,
    preferredContact: ["text", "call", "email"].includes(preferred) ? preferred : "",
    message: text(body.message, 3000),
  };
}

function buildNote(submission: Submission): string {
  const lines = [
    "Website contact form submission",
    `Services: ${submission.services.join(", ")}`,
  ];
  if (submission.otherService) lines.push(`Other: ${submission.otherService}`);
  lines.push(`Preferred contact: ${submission.preferredContact || "not specified"}`);
  if (submission.message) lines.push("", "Additional information:", submission.message);
  return lines.join("\n");
}

async function ghl(path: string, token: string, payload: unknown): Promise<Response> {
  return fetch(`${GHL_BASE}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Version: GHL_VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  // Same-origin only: browsers send Origin on cross-site posts, so reject a mismatch.
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ ok: false }, 403);
  }

  const token = env.GHL_PRIVATE_TOKEN;
  const locationId = env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.error("contact: GHL_PRIVATE_TOKEN or GHL_LOCATION_ID is not set");
    return json({ ok: false }, 500);
  }

  let submission: Submission | null = null;
  try {
    submission = parseSubmission(await request.json());
  } catch {
    submission = null;
  }
  if (!submission) return json({ ok: false }, 400);

  // Create the contact, or update it when the email or phone already exists.
  const contactBody: Record<string, unknown> = {
    locationId,
    firstName: submission.firstName,
    phone: submission.phone,
    source: CONTACT_SOURCE,
    tags: [CONTACT_TAG],
  };
  if (submission.lastName) contactBody.lastName = submission.lastName;
  if (submission.email) contactBody.email = submission.email;

  let contactId = "";
  try {
    const response = await ghl("/contacts/upsert", token, contactBody);
    if (!response.ok) {
      // Log the status only: the response and the submission contain personal data.
      console.error(`contact: GHL upsert failed with status ${response.status}`);
      return json({ ok: false }, 502);
    }
    const data = (await response.json()) as { contact?: { id?: string } };
    contactId = data.contact?.id ?? "";
  } catch {
    console.error("contact: GHL upsert request failed");
    return json({ ok: false }, 502);
  }

  if (!contactId) {
    console.error("contact: GHL upsert returned no contact id");
    return json({ ok: false }, 502);
  }

  // The contact exists at this point. A failed note is logged and does not fail the
  // request, so the visitor is not asked to resubmit and create a duplicate.
  try {
    const response = await ghl(`/contacts/${encodeURIComponent(contactId)}/notes`, token, {
      body: buildNote(submission),
    });
    if (!response.ok) {
      console.error(`contact: GHL note failed with status ${response.status}`);
    }
  } catch {
    console.error("contact: GHL note request failed");
  }

  return json({ ok: true });
};
