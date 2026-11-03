// Privacy policy / contact form guard. Plain Node: needs no build and no TypeScript.
//
// If the contact form endpoint is set (so /contact shows the form), the privacy policy
// must have the form wording back. The single source of truth is the
// `privacyDescribesContactForm` constant in src/content/privacy-policy.ts.
//
// Fails (exit 1) when NEXT_PUBLIC_CONTACT_FORM_ENDPOINT is non-empty while the constant
// is `false`, or when the constant is not a plain `true` or `false` literal. It also fails
// the reverse case on the Cloudflare production build only (CF_PAGES_BRANCH=main): constant
// `true` but the variable unset or empty. Local and preview builds are not checked for that.
//
// Run it before the build: `npm run check:policy && npm run build`. It is also run by
// scripts/check-combos.mjs. The variable is read from the environment first, then from
// the .env files Next.js reads at build time.

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(here, "..");

const ENV_FILES = [".env.production.local", ".env.local", ".env.production", ".env"];

export function contactFormEndpoint(root = defaultRoot) {
  const fromEnv = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim();
  if (fromEnv) return fromEnv;
  for (const name of ENV_FILES) {
    const file = path.join(root, name);
    if (!existsSync(file)) continue;
    const match = readFileSync(file, "utf8").match(/^\s*NEXT_PUBLIC_CONTACT_FORM_ENDPOINT\s*=\s*(.*)$/m);
    const value = match?.[1].trim().replace(/^["']|["']$/g, "");
    if (value) return value;
  }
  return "";
}

/** Reports problems through `fail(message)`. */
export function checkPolicy(root, fail) {
  const endpoint = contactFormEndpoint(root);
  // Cloudflare Pages sets CF_PAGES_BRANCH on its builds; "main" is the production branch.
  const productionBuild = process.env.CF_PAGES_BRANCH?.trim() === "main";
  if (!endpoint && !productionBuild) return;

  const policySource = readFileSync(path.join(root, "src", "content", "privacy-policy.ts"), "utf8");
  const flag = policySource.match(/export const privacyDescribesContactForm\s*=\s*(true|false)\s*;/)?.[1];
  if (flag === undefined) {
    fail("src/content/privacy-policy.ts: privacyDescribesContactForm must be a plain true/false constant");
  } else if (endpoint && flag === "false") {
    fail(
      "contact form is enabled (NEXT_PUBLIC_CONTACT_FORM_ENDPOINT is set), but the privacy policy still has the no-form wording. " +
        "Restore the form and GoHighLevel storage wording in src/content/privacy-policy.ts (see the RESTORE note in the file header), " +
        "update the Last updated date, then set privacyDescribesContactForm to true.",
    );
  } else if (!endpoint && flag === "true") {
    // Reverse check, production build only: never ship a policy that describes a form the
    // site does not show. Local and preview builds are not checked.
    fail(
      "the privacy policy describes a contact form, but NEXT_PUBLIC_CONTACT_FORM_ENDPOINT is not set for the production build. " +
        "Set it in Cloudflare Pages production variables, or change the policy, the constant and the /contact copy together.",
    );
  }
}

// Run directly (`node scripts/check-policy.mjs`).
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = [];
  checkPolicy(defaultRoot, (message) => errors.push(message));
  if (errors.length) {
    console.error(`check-policy: ${errors.length} problem(s)\n`);
    for (const message of errors) console.error(`  - ${message}`);
    process.exit(1);
  }
  console.log("check-policy: OK");
}
