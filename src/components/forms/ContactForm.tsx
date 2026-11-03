"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircleIcon, WarningIcon } from "@/components/ui/icons";
import { contactForm as copy } from "@/content/contact";
import { EmailLink, PhoneLink } from "@/components/ui/ContactLinks";
import {
  OTHER_SERVICE,
  contactMethods,
  emptyValues,
  submitContactForm,
  validateContactStep,
  validateServiceStep,
  type ContactFormErrors,
  type ContactFormField,
  type ContactFormValues,
} from "@/lib/contact-form";

// Two-step, low-friction contact form. Step 1 is a single tap-friendly choice of
// service; step 2 collects contact details. Blue fills take white text (docs/05).
// Selected state uses a check icon as well as color, so color is never the only cue.

type Status = "editing" | "sending" | "sent";

const focusRing =
  "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-strong";

const inputBase = `block w-full min-h-12 rounded-md border-2 bg-white px-4 py-2.5 text-base text-brand-ink placeholder:text-neutral-500 ${focusRing}`;

const buttonBase =
  "font-heading inline-flex min-h-12 items-center justify-center rounded-md px-6 py-2.5 text-base font-semibold motion-safe:transition-[transform,box-shadow,background-color,color] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none";
const primaryButton = `${buttonBase} bg-brand-blue text-white hover:bg-brand-blue-hover`;
const secondaryButton = `${buttonBase} border-2 border-brand-blue-strong bg-white text-brand-blue-strong hover:bg-surface-muted`;

function borderFor(invalid: boolean) {
  return invalid ? "border-red-600" : "border-neutral-300 hover:border-brand-blue-strong";
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 flex items-start gap-2 text-sm font-medium text-red-600">
      <WarningIcon className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message}</span>
    </p>
  );
}

function Field({
  id,
  label,
  required = false,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-semibold text-brand-ink">
        {label}
        {required ? (
          <span className="ml-1.5 text-sm font-medium text-neutral-700">(required)</span>
        ) : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-sm text-neutral-700">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function describedBy(id: string, hasHint: boolean, hasError: boolean) {
  const ids = [hasHint ? `${id}-hint` : "", hasError ? `${id}-error` : ""].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

export function ContactForm({
  endpoint,
  services,
}: {
  endpoint: string;
  services: readonly string[];
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<Status>("editing");
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [failed, setFailed] = useState(false);
  const [trap, setTrap] = useState("");
  const [sentName, setSentName] = useState("");

  const headingRef = useRef<HTMLHeadingElement>(null);
  const shouldFocusHeading = useRef(false);

  // Move focus to the new step's heading after a step change, never on first load.
  useEffect(() => {
    if (shouldFocusHeading.current) {
      shouldFocusHeading.current = false;
      headingRef.current?.focus();
    }
  }, [step, status]);

  const options = [...services, OTHER_SERVICE];
  const otherSelected = values.services.includes(OTHER_SERVICE);

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (key in errors) {
      setErrors((current) => {
        const next = { ...current };
        delete next[key as ContactFormField];
        return next;
      });
    }
  }

  function toggleService(name: string) {
    const next = values.services.includes(name)
      ? values.services.filter((item) => item !== name)
      : [...values.services, name];
    update("services", next);
  }

  function focusFirstError(found: ContactFormErrors) {
    const order: ContactFormField[] = ["services", "firstName", "phone", "email"];
    const first = order.find((field) => found[field]);
    if (!first) return;
    const target = first === "services" ? "service-0" : `contact-${first}`;
    document.getElementById(target)?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "editing") return;

    if (step === 1) {
      const found = validateServiceStep(values);
      setErrors(found);
      if (Object.keys(found).length > 0) {
        focusFirstError(found);
        return;
      }
      shouldFocusHeading.current = true;
      setStep(2);
      return;
    }

    const found = validateContactStep(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      focusFirstError(found);
      return;
    }

    // A filled honeypot means a bot: act as if it worked, send nothing.
    if (trap) {
      setSentName(values.firstName.trim());
      shouldFocusHeading.current = true;
      setStatus("sent");
      return;
    }

    setFailed(false);
    setStatus("sending");
    let ok = false;
    try {
      ok = await submitContactForm(endpoint, values);
    } catch {
      ok = false;
    }

    if (ok) {
      setSentName(values.firstName.trim());
      shouldFocusHeading.current = true;
      setStatus("sent");
    } else {
      setFailed(true);
      setStatus("editing");
    }
  }

  function goBack() {
    setErrors({});
    shouldFocusHeading.current = true;
    setStep(1);
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-xl border border-brand-blue/30 bg-white p-6 shadow-sm sm:p-10"
        role="status"
      >
        <span aria-hidden="true" className="mb-4 block h-1 w-12 rounded bg-brand-green" />
        <div className="flex items-start gap-3">
          <CheckCircleIcon className="mt-1 h-7 w-7 shrink-0 text-brand-blue-strong" />
          <div>
            <h3
              ref={headingRef}
              tabIndex={-1}
              className="text-2xl font-semibold tracking-tight focus:outline-none"
            >
              {sentName ? `Thanks, ${sentName}. Your message was sent.` : "Thanks. Your message was sent."}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-neutral-700">{copy.success.body}</p>
          </div>
        </div>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-step-title"
      className="rounded-xl border border-brand-blue/30 bg-white p-5 shadow-sm sm:p-8"
    >
      {/* Progress: text plus two bars, so the step is never conveyed by color alone. */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-neutral-700">Step {step} of 2</p>
        <div aria-hidden="true" className="mt-2 grid grid-cols-2 gap-2">
          <span className="h-1.5 rounded-full bg-brand-blue" />
          <span className={`h-1.5 rounded-full ${step === 2 ? "bg-brand-blue" : "bg-neutral-200"}`} />
        </div>
      </div>

      {step === 1 ? (
        <div>
          <fieldset
            aria-describedby={
              [errors.services ? "service-error" : "", "service-hint"].filter(Boolean).join(" ")
            }
          >
            <legend className="w-full">
              <h3
                id="contact-form-step-title"
                ref={headingRef}
                tabIndex={-1}
                className="text-2xl font-semibold tracking-tight focus:outline-none"
              >
                {copy.serviceStep.title}
              </h3>
            </legend>
            <p id="service-hint" className="mt-2 text-base text-neutral-700">
              {copy.serviceStep.hint}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {options.map((name, index) => {
                const checked = values.services.includes(name);
                return (
                  <label key={name} className="relative block cursor-pointer">
                    <input
                      id={`service-${index}`}
                      type="checkbox"
                      name="services"
                      value={name}
                      checked={checked}
                      onChange={() => toggleService(name)}
                      className="peer sr-only"
                    />
                    <span
                      className={`font-heading flex min-h-12 items-center gap-2 rounded-full border-2 px-5 py-2.5 text-base font-semibold peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-blue-strong motion-safe:transition-colors motion-safe:duration-150 ${
                        checked
                          ? "border-brand-blue bg-brand-blue text-white"
                          : `bg-white text-brand-ink ${borderFor(Boolean(errors.services))}`
                      }`}
                    >
                      {checked ? <CheckCircleIcon className="h-5 w-5 shrink-0" /> : null}
                      {name}
                    </span>
                  </label>
                );
              })}
            </div>
            <FieldError id="service-error" message={errors.services} />
          </fieldset>

          {otherSelected ? (
            <div className="mt-6">
              <Field
                id="contact-other"
                label={copy.serviceStep.otherLabel}
                hint={copy.serviceStep.otherHint}
              >
                <input
                  id="contact-other"
                  type="text"
                  name="otherService"
                  value={values.otherService}
                  onChange={(event) => update("otherService", event.target.value)}
                  maxLength={200}
                  aria-describedby="contact-other-hint"
                  className={`${inputBase} ${borderFor(false)}`}
                />
              </Field>
            </div>
          ) : null}

          <div className="mt-8">
            <button key="continue" type="submit" className={primaryButton}>
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3
            id="contact-form-step-title"
            ref={headingRef}
            tabIndex={-1}
            className="text-2xl font-semibold tracking-tight focus:outline-none"
          >
            {copy.contactStep.title}
          </h3>

          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-neutral-700">
            <span>
              <span className="font-semibold text-brand-ink">Interested in:</span>{" "}
              {values.services.join(", ")}
            </span>
            <button
              type="button"
              onClick={goBack}
              className="rounded font-semibold text-brand-blue-strong underline underline-offset-2"
            >
              Change
            </button>
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field id="contact-firstName" label="First name" required error={errors.firstName}>
              <input
                id="contact-firstName"
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={values.firstName}
                onChange={(event) => update("firstName", event.target.value)}
                maxLength={100}
                aria-required="true"
                aria-invalid={errors.firstName ? true : undefined}
                aria-describedby={describedBy("contact-firstName", false, Boolean(errors.firstName))}
                className={`${inputBase} ${borderFor(Boolean(errors.firstName))}`}
              />
            </Field>
            <Field id="contact-lastName" label="Last name">
              <input
                id="contact-lastName"
                type="text"
                name="lastName"
                autoComplete="family-name"
                value={values.lastName}
                onChange={(event) => update("lastName", event.target.value)}
                maxLength={100}
                className={`${inputBase} ${borderFor(false)}`}
              />
            </Field>
            <Field id="contact-phone" label="Phone" required error={errors.phone}>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                value={values.phone}
                onChange={(event) => update("phone", event.target.value)}
                maxLength={30}
                aria-required="true"
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={describedBy("contact-phone", false, Boolean(errors.phone))}
                className={`${inputBase} ${borderFor(Boolean(errors.phone))}`}
              />
            </Field>
            <Field id="contact-email" label="Email" error={errors.email}>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                maxLength={200}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={describedBy("contact-email", false, Boolean(errors.email))}
                className={`${inputBase} ${borderFor(Boolean(errors.email))}`}
              />
            </Field>
          </div>

          <fieldset className="mt-6">
            <legend className="text-base font-semibold text-brand-ink">
              {copy.contactStep.methodLegend}
            </legend>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {contactMethods.map((method) => {
                const checked = values.method === method.value;
                return (
                  <label
                    key={method.value}
                    className={`font-heading flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-md border-2 px-3 py-2.5 text-base font-semibold text-brand-ink has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-blue-strong ${
                      checked
                        ? "border-brand-blue-strong bg-surface-muted"
                        : "border-neutral-300 bg-white hover:border-brand-blue-strong"
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method.value}
                      checked={checked}
                      onChange={() => update("method", method.value)}
                      className="h-5 w-5 accent-brand-blue"
                    />
                    {method.label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6">
            <Field
              id="contact-message"
              label={copy.contactStep.messageLabel}
              hint={`${copy.contactStep.messageHint} ${copy.contactStep.messageSafety}`}
            >
              <textarea
                id="contact-message"
                name="message"
                rows={7}
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                maxLength={3000}
                aria-describedby="contact-message-hint"
                className={`${inputBase} ${borderFor(false)} min-h-44 resize-y leading-relaxed`}
              />
            </Field>
          </div>

          {/* Honeypot: hidden from people and assistive tech, left empty by real visitors. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Leave this field empty
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={trap}
                onChange={(event) => setTrap(event.target.value)}
              />
            </label>
          </div>

          {failed ? (
            <div
              role="alert"
              className="mt-6 flex items-start gap-3 rounded-md border-2 border-red-600 bg-white p-4 text-base text-brand-ink"
            >
              <WarningIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <p>
                {copy.failure} Call{" "}
                <PhoneLink /> or email <EmailLink />
                .
              </p>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button key="submit" type="submit" disabled={sending} className={primaryButton}>
              {sending ? "Sending..." : "Send message"}
            </button>
            <button
              key="back"
              type="button"
              onClick={goBack}
              disabled={sending}
              className={secondaryButton}
            >
              Back
            </button>
          </div>

          <p className="mt-4 text-sm text-neutral-700">
            We use what you send to respond to your inquiry. See our{" "}
            <Link href="/privacy-policy" className="font-semibold text-brand-blue-strong underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      )}
    </form>
  );
}
