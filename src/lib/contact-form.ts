// Contact form helpers: endpoint, field types, validation, and the request payload.
//
// The site is a static export, so Next.js has no server route to receive a submission.
// The form posts JSON to the endpoint set in NEXT_PUBLIC_CONTACT_FORM_ENDPOINT at
// build time. The chosen setup is the Cloudflare Pages Function in
// functions/api/contact.ts (endpoint "/api/contact"), which holds the GoHighLevel
// Private Integration token server-side (docs/06). An absolute https URL also works
// for a public webhook. Until the variable is set, /contact does not render the
// form, so the site never shows a form that cannot submit. If the receiving side
// needs different field names, change buildPayload and the function together.

const rawEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim();

/**
 * The submission endpoint, or undefined when it is not set or is not valid: an
 * absolute https URL, or a same-site path such as /api/contact.
 */
export const contactFormEndpoint =
  rawEndpoint &&
  (rawEndpoint.startsWith("https://") ||
    (rawEndpoint.startsWith("/") && !rawEndpoint.startsWith("//")))
    ? rawEndpoint
    : undefined;

/** Value of the "Other" service pill. */
export const OTHER_SERVICE = "Other";

export const contactMethods = [
  { value: "text", label: "Text" },
  { value: "call", label: "Call" },
  { value: "email", label: "Email" },
] as const;

export type ContactMethod = (typeof contactMethods)[number]["value"];

export type ContactFormValues = {
  services: string[];
  otherService: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  method: ContactMethod | "";
  message: string;
};

export const emptyValues: ContactFormValues = {
  services: [],
  otherService: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  method: "",
  message: "",
};

export type ContactFormField = "services" | "firstName" | "phone" | "email";
export type ContactFormErrors = Partial<Record<ContactFormField, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneCharacters = /^[\d\s+().-]+$/;

export function validateServiceStep(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (values.services.length === 0) {
    errors.services = "Choose at least one option to continue.";
  }
  return errors;
}

export function validateContactStep(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Enter your first name.";
  }

  const phone = values.phone.trim();
  const digits = phone.replace(/\D/g, "");
  if (!phone) {
    errors.phone = "Enter a phone number.";
  } else if (!phoneCharacters.test(phone) || digits.length < 7 || digits.length > 15) {
    errors.phone = "Enter a valid phone number, including the country code if you are outside the US.";
  }

  const email = values.email.trim();
  if (email && !emailPattern.test(email)) {
    errors.email = "Enter a valid email address, such as name@example.com.";
  } else if (!email && values.method === "email") {
    errors.email = "Enter your email address, since you chose email.";
  }

  return errors;
}

/** The JSON body sent to the endpoint. Empty optional fields are sent as empty strings. */
export function buildPayload(values: ContactFormValues) {
  const includesOther = values.services.includes(OTHER_SERVICE);
  return {
    services: values.services,
    otherService: includesOther ? values.otherService.trim() : "",
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
    preferredContact: values.method,
    message: values.message.trim(),
    source: "contact-page",
  };
}

/** Posts the form. Resolves true when the endpoint answers with a 2xx status. */
export async function submitContactForm(
  endpoint: string,
  values: ContactFormValues,
): Promise<boolean> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(buildPayload(values)),
  });
  return response.ok;
}
