# 08 — Launch Checklist

**File:** `docs/08-launch-checklist.md`

## Purpose

Use this checklist to catch practical issues before and after launch. It is a working checklist, not an approval gate; complete items as they apply and record any remaining follow-up work.

## Business information and content

- [x] Canonical domain format decided: apex (`okikohigh.com`), 2026-10-18.
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://okikohigh.com` in the Cloudflare production environment and rebuild.
- [ ] Confirm the approved website logo file and logo color values. (Logo pack and colors are in `docs/05`; the owner confirmed the logo colors as authoritative on 2026-11-02, so only the final logo file approval remains.)
- [ ] Confirm which services are currently available.
- [ ] Confirm audience descriptions and the education subcategories before publishing those details.
- [ ] Confirm the agency’s operating model and whether the Plano address is customer-facing.
- [ ] Confirm public hours and what they represent before publishing them.
- [ ] Confirm the primary contact action and booking URL, if applicable.
- [ ] Confirm official social and Google Business Profile URLs before publishing or marking them up.
- [ ] Confirm approval and client permission for any case studies or testimonials.
- [ ] Remove all TBD information from public pages.
- [ ] Confirm no content belonging to Okiko High Landscaping is included.

## Pages and search metadata

- [ ] Confirm each published page has a distinct purpose and useful content.
- [ ] Confirm each search-target page has a target keyword and search intent in the keyword map.
- [ ] Confirm each page has a unique, accurate meta title and description.
- [ ] Confirm each substantive page has one clear H1 and a logical heading structure.
- [ ] Confirm every substantive page has tailored AEO FAQs with direct, verified answers.
- [ ] Confirm FAQ markup, if used, matches visible FAQ content.
- [ ] Confirm internal links and breadcrumbs are accurate and functional.
- [ ] Confirm no unapproved location pages or Las Vegas targeting have been added.
- [ ] Review page copy for unsupported claims, duplicated content, and thin sub-audience pages.

## Structured data

- [x] Confirm entity IDs use the selected canonical domain (checked in the local build output; recheck on the live site).
- [ ] Validate JSON-LD syntax on representative page types.
- [ ] Confirm structured data matches visible content and verified business facts.
- [ ] Confirm organization details, logo, contact details, and social links are accurate.
- [ ] Use `LocalBusiness` only if the Plano location is confirmed as customer-facing.
- [ ] Confirm service schema describes only services currently offered.
- [ ] Validate eligible Google features with the Rich Results Test.
- [ ] Validate broader Schema.org markup with a Schema Markup Validator.

## Site functionality and experience

- [ ] Test primary navigation and footer links.
- [ ] Test contact forms, email links, phone links, and booking links.
- [ ] Confirm form submission produces the expected confirmation or response.
- [ ] Contact form: set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=/api/contact`, `GHL_PRIVATE_TOKEN` (secret), and `GHL_LOCATION_ID` in the production Cloudflare Pages environment, redeploy, send a real test submission, and confirm the GoHighLevel contact (tag, source, phone format) and its note are correct (see `docs/06`).
- [x] Add a Cloudflare WAF rate limiting rule for `/api/contact`. Done 2026-11-03: 5 requests per 10 seconds per IP, block for 10 seconds, free plan. A 12-request burst of invalid posts returned 429 on the blocked request, and a post 20 seconds later returned 400 again.
- [x] If the contact form goes live, update the Privacy Policy (`src/content/privacy-policy.ts`). Done 2026-11-03: the "What we collect" card, "Information you give us", sharing, security, and FAQs now cover the form and its storage in GoHighLevel, and "Last updated" is 2026-11-03. The policy describes the form outright, so set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=/api/contact` in production before the updated policy goes live (the item above).
- [ ] Contact form and the Privacy Policy, owner to confirm: whether any GoHighLevel workflow sends automated texts, emails, or calls after a submission (the policy says nothing about this, and says contacting us is not marketing consent); how long CRM contacts and notes are kept; who has access to the GoHighLevel account; and whether form data is used for marketing or shared beyond GoHighLevel. Update the policy if any answer changes what it says.
- [ ] Check mobile and desktop layouts.
- [ ] Check keyboard navigation, visible focus, form labels, and color contrast.
- [ ] Confirm informative images have useful alt text and decorative images have empty alt text.
- [ ] Check image loading, page speed, and broken links.
- [ ] Confirm legal pages reflect the actual forms, analytics, and integrations in use.
- [ ] Privacy Policy (`/privacy-policy`, draft built 2026-11-02): have counsel review it before launch, and confirm with the owner: the legal entity name, whether any Cloudflare analytics or other tool is enabled in production (the policy says none is used), whether OKIKO HIGH sends its own marketing texts or emails, whether any personal information is sold or shared for advertising, and the retention approach. Update `src/content/privacy-policy.ts` and its "Last updated" date with any change.

## Technical and deployment

- [ ] Confirm the production build completes successfully.
- [ ] Confirm Cloudflare deployment settings match the selected Next.js deployment approach.
- [ ] Confirm production domain and HTTPS configuration.
- [ ] Confirm the apex host works and `www.okikohigh.com` 301-redirects to it (zone-level Redirect Rule).
- [ ] Confirm the production domain does not send the `*.pages.dev` noindex header.
- [ ] Verify sitemap and robots behavior.
- [ ] Confirm preview or unfinished pages are not accidentally indexable.
- [ ] Confirm `*.pages.dev` hosts return `X-Robots-Tag: noindex` (from `public/_headers`).
- [ ] Confirm X-Robots-Tag behavior on pages.dev preview and absence on production.
- [ ] Before launch, publish or keep noindex the placeholder pages (`/case-studies`, `/resources`, `/privacy-policy`, `/terms-of-service`): set `published: true` in `src/data/placeholder-pages.ts` once real content is approved.
- [ ] Confirm the production domain `okikohigh.com` does NOT receive the `X-Robots-Tag: noindex` header (check the live response headers).
- [ ] Check redirects for any changed or retired URLs.
- [ ] Confirm Cloudflare behavior for trailing-slash URLs (for example /about/ versus /about) so the canonical no-slash form is the one served and indexed.
- [ ] Verify the live deployment after publishing.

## Search setup and follow-up

- [ ] Connect and verify Google Search Console.
- [ ] Connect and verify Bing Webmaster Tools.
- [ ] Submit or confirm the sitemap where applicable.
- [ ] Confirm applicable Apple business/search presence details.
- [ ] Confirm Google Business Profile information matches public website facts.
- [ ] Monitor indexing, crawl errors, search queries, and page performance after launch.
- [ ] Record post-launch fixes and improvements in the relevant project docs.
