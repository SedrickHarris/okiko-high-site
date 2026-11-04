# FAQ Audit - OKIKO HIGH Digital Marketing Agency

Read-only audit. No page, component, content or schema file was changed. This report is the only file created.

## 1. Summary

| Item | Value |
|---|---|
| Audit date | 2026-11-03 |
| Branch | `main` |
| Commit | `b30215d` (Remove About from the header navigation) |
| Uncommitted changes | None at the start of the audit (`git status` clean). This report is a new file. |
| Public routes | 24 |
| Routes with an FAQ | 21 (20 indexable pages plus the 404 page) |
| Routes without an FAQ | 3: `/blog`, `/case-studies`, `/resources` (all noindex placeholders, exempt; docs/02 says the blog hub has no FAQ) |
| Substantive pages missing an FAQ | 0 |
| Total Q&A items | 234 |
| Flags | High 3, Medium 75, Low 31 (total 109) |
Of these, 71 are per-item duplication flags (63 Medium, 8 Low) that point to the 13 groups in section 5. Excluding them: High 3, Medium 12, Low 23.

**Method.** Read `CLAUDE.md`, docs 01, 02, 03, 04 and 07, and the earlier `docs/audit-faq-links-contact.md`. Found every route under `src/app`. Loaded each content file with Node (a throwaway script kept outside the repo) to resolve the final answer strings, including the interpolated phone and email on `/contact`, with `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` set to match production. No build was run and no dependency was installed. To check visible text against JSON-LD I compared the existing local `out/` build (a static export made without the form endpoint, and older than a later edit to `src/data/site.ts`): every JSON-LD question and answer matched the visible `<details>` text exactly on all 20 pages that carry FAQPage markup. In source, each page passes the same `faqs` object to `FaqSection` and `faqPageNode()`, so the two cannot drift. FAQs render as native `<details>` elements, collapsed by default but present in the HTML. The 234 total agrees with the earlier audit.

**Limits.** I did not verify external legal, vendor or statistical claims against their sources, and I did not check the live site or Cloudflare settings. Items marked 'not verified' need the owner or counsel.

**Checks with no findings.** Em or en dashes in FAQ text and source labels: none (0 of 234). Las Vegas or other city, state or regional targeting: none (combo-web#3 discusses city pages only to advise against thin ones). Okiko High Landscaping information: none (the only 'landscaping' mentions are the Home Services audience list). Plano address, hours or canonical domain as a public fact: none (`okikohigh.com` appears only in the public email). Education audience described as served: none. Case-study, testimonial, rating or review claims about OKIKO HIGH: none (the FAQs say none are published). Guarantees: every guarantee mention is a denial. The banned caption 'Illustrative handoff, not a client project.': not present. Brand name: FAQs use 'OKIKO HIGH' consistently; the full public name appears in home#1 and about#1; no 'Okiko High' variants.

## 2. Page coverage table

| URL | Page type | Has FAQ | Q&As | FAQPage schema | Exempt |
|---|---|---|---|---|---|
| `/` | Core (home) | yes | 8 | matches | no |
| `/about` | Core | yes | 10 | matches | no |
| `/services` | Service hub | yes | 11 | matches | no |
| `/services/website-design` | Service | yes | 10 | matches | no |
| `/services/google-business-profile-optimization` | Service | yes | 10 | matches | no |
| `/services/reputation-management` | Service | yes | 13 | matches | no |
| `/services/ai-chatbots` | Service | yes | 10 | matches | no |
| `/services/ai-receptionist` | Service | yes | 10 | matches | no |
| `/services/sms-email-automation` | Service | yes | 10 | matches | no |
| `/industries` | Audience hub | yes | 9 | matches | no |
| `/industries/home-services` | Audience | yes | 11 | matches | no |
| `/industries/professional-services` | Audience | yes | 10 | matches | no |
| `/industries/property-management-real-estate` | Audience | yes | 12 | matches | no |
| `/industries/healthcare` | Audience | yes | 10 | matches | no |
| `/industries/home-services/website-design` | Audience + service | yes | 10 | matches | no |
| `/industries/home-services/ai-receptionist` | Audience + service | yes | 10 | matches | no |
| `/faq` | Core (FAQ hub) | yes | 37 | matches | no |
| `/contact` | Core | yes | 6 | matches | no |
| `/privacy-policy` | Legal | yes | 7 | matches | yes (has FAQ anyway) |
| `/terms-of-service` | Legal | yes | 12 | matches | yes (has FAQ anyway) |
| `/404 (not-found)` | Utility | yes | 8 | none (noindex 404; appropriate) | yes (has FAQ anyway) |
| `/blog` | Placeholder hub (noindex) | no | 0 | none | yes |
| `/case-studies` | Placeholder (noindex) | no | 0 | none | yes |
| `/resources` | Placeholder (noindex) | no | 0 | none | yes |
| **Total** | | 21 pages | **234** | | |

'Matches' means the built JSON-LD questions and answers equal the visible FAQ text character for character (local `out/` build). `/faq` marks up all 37 items across its six groups in one FAQPage.

## 3. Full FAQ listing by page

Text is quoted as resolved from source. Links inside answers do not change the text. 'Sources' lines are the visible source links under an answer. Item numbers run 1..n per page (on `/faq`, continuously across groups, matching the JSON-LD order).

### /

- **Page type:** Core (home)
- **Page file:** `src/app/page.tsx`
- **FAQ content file:** `src/content/home.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** What does OKIKO HIGH Digital Marketing Agency do?
   **A:** OKIKO HIGH provides digital marketing, marketing automation, and software-as-a-service solutions for local and service-based businesses. The work is organized into six services: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page explaining scope and limits.
   - **[Low]** Accuracy: 'for local and service-based businesses': docs/01 states worldwide coverage and does not call the audience 'local'. Confirm wording (same phrase in services#10).
   - **[Medium]** Duplication: See duplicate group D4 (What OKIKO HIGH does / which services).

2. **Q:** Who does OKIKO HIGH work with?
   **A:** OKIKO HIGH currently serves four kinds of business, and each has its own page: home service businesses, such as HVAC, plumbing, landscaping, general contracting, and cleaning companies; professional services firms; property management and real estate businesses; and healthcare, dental, and med spa practices. Each page describes a proposed approach, not client work or results.
   - **[Medium]** Duplication: See duplicate group D5 (Who / which industries OKIKO HIGH serves).

3. **Q:** Does OKIKO HIGH work with businesses outside the United States?
   **A:** OKIKO HIGH states that it serves clients worldwide. How a service works can still depend on your region, such as which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.
   - **[Medium]** Duplication: See duplicate group D1 (Worldwide / outside one country).

4. **Q:** Do I need all six services?
   **A:** No. Each service has its own page and scope, and you can start with the one closest to your problem. The services can connect along the customer path, from being found on Google to your website, chat or calls, and follow-up, but any connection is optional and scoped separately.

5. **Q:** Will automation replace my team?
   **A:** The services are described as supporting your team, not replacing it. The chatbot helps visitors reach your team, the AI receptionist can route a caller to a person, and text and email workflows keep real conversations connected to a person. Your written scope names what is included, and your information, messages, and settings are reviewed with you and approved before they are used.

6. **Q:** Does OKIKO HIGH publish prices?
   **A:** No. Prices are not published on this site because cost depends on scope, such as the pages, platforms, and integrations involved and who approves content. Request a scoped quote through the contact page.
   - **[Medium]** Duplication: See duplicate group D3 (Pricing).

7. **Q:** Does OKIKO HIGH guarantee rankings or leads?
   **A:** No. Google and other platforms control search results and reviews, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. Each service page states what it does and does not include.
   - **[Medium]** Duplication: See duplicate group D2 (Guarantee rankings / leads / review removal).

8. **Q:** How do I get started with OKIKO HIGH?
   **A:** Use the contact page to describe your business, how customers reach you today, and what you want to improve. We use that to look at which service, if any, fits and to define the scope before any work begins.
   - **[Medium]** Duplication: See duplicate group D6 (How do I get started).

### /about

- **Page type:** Core
- **Page file:** `src/app/about/page.tsx`
- **FAQ content file:** `src/content/about.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** What is OKIKO HIGH Digital Marketing Agency?
   **A:** OKIKO HIGH Digital Marketing Agency provides digital marketing, marketing automation, and Software as a Service (SaaS) solutions. It combines marketing strategy with automation to help businesses connect with customers and simplify marketing and customer-management tasks.
   - **[Medium]** Duplication: See duplicate group D4 (What OKIKO HIGH does / which services).

2. **Q:** What services does OKIKO HIGH offer?
   **A:** There are six services: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page that explains its scope and limits. Which ones fit your business is confirmed when your project is scoped.
   - **[Medium]** Duplication: See duplicate group D4 (What OKIKO HIGH does / which services).

3. **Q:** When was OKIKO HIGH founded?
   **A:** OKIKO HIGH was founded on May 3, 2026.

4. **Q:** Can OKIKO HIGH work with the website and software I already use?
   **A:** Possibly. Compatibility depends on the actual systems, platforms, and permissions involved, so it is checked when your project is scoped rather than assumed. The scope for your business is written down and confirmed before work begins.
   - **[Low]** Duplication: See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)).

5. **Q:** Who does OKIKO HIGH work with?
   **A:** OKIKO HIGH currently serves four kinds of business: home-service businesses, such as HVAC, plumbing, landscaping, general contracting, and cleaning companies; professional services firms; property management and real estate businesses; and healthcare, dental, and med spa practices. Each has its own page. The pages describe a proposed approach and illustrative scenarios, not client work or results.
   - **[Medium]** Duplication: See duplicate group D5 (Who / which industries OKIKO HIGH serves).

6. **Q:** Does OKIKO HIGH work with clients outside the United States?
   **A:** OKIKO HIGH states that it serves clients worldwide, and the same coverage applies to every audience. How a service works can still depend on your region, for example which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.
   - **[Medium]** Duplication: See duplicate group D1 (Worldwide / outside one country).

7. **Q:** Who is behind OKIKO HIGH?
   **A:** This site presents OKIKO HIGH under the agency's name and does not feature individual owner or team profiles.
   - **[Low]** Answer quality: Does not answer 'Who is behind OKIKO HIGH?'; it explains the site does not feature profiles. Consistent with docs/01 ('None planned'), but the question promises information the answer withholds. Consider rewording the question.

8. **Q:** Can I see client results, case studies, or reviews?
   **A:** Not on this site yet. OKIKO HIGH does not currently publish client results, testimonials, or ratings here. The service pages include clearly labeled illustrative examples that use fictional businesses; they are not client work.

9. **Q:** Does OKIKO HIGH guarantee search rankings or results?
   **A:** No. Google and other platforms control search results and reviews, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. Each service page states what it does and does not include.
   - **[Medium]** Duplication: See duplicate group D2 (Guarantee rankings / leads / review removal).

10. **Q:** How do I get started with OKIKO HIGH?
   **A:** Use the contact page to describe your business, how customers reach you today, and what you want to improve. A written scope is confirmed with you before any work begins. Prices are not published on this site because cost depends on scope.
   - **[Medium]** Duplication: See duplicate group D6 (How do I get started).

### /services

- **Page type:** Service hub
- **Page file:** `src/app/services/page.tsx`
- **FAQ content file:** `src/content/services/hub.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** What services does OKIKO HIGH cover?
   **A:** This page covers six service areas: website design for local businesses, Google Business Profile optimization and management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation for customer follow-up. Each has its own page explaining how the work is set up and where its limits are. Scope for your business is confirmed when you get in touch.
   - **[Medium]** Duplication: See duplicate group D4 (What OKIKO HIGH does / which services).

2. **Q:** Which service should I start with?
   **A:** Start where customers drop off today. If they cannot find you on Google, look at Google Business Profile management. If they find you but do not contact you, look at website design. If calls are missed, look at the AI receptionist. If inquiries go quiet after first contact, look at text and email automation. If reviews are thin or unanswered, look at review management. If you are unsure, describe how customers reach you and where it breaks, and we can look at whether a service, or something simpler, fits.
   - **[Medium]** Duplication: See duplicate group D7 (Which service should I start with).

3. **Q:** Can I start with just one service?
   **A:** Yes. Each service has its own page and its own scope, and you do not need all six. Connecting services is optional and scoped separately, so you can begin with the one closest to your problem and look at connections later.

4. **Q:** Can these services work together?
   **A:** Yes. They can connect along the customer path: a Google Business Profile helps customers find you, your website explains the offer, a chatbot can answer questions before an inquiry, an AI receptionist can handle calls, and text and email workflows follow up. These connections are optional, scoped separately, and depend on platform compatibility and applicable consent rules.

5. **Q:** Can OKIKO HIGH work with my existing website or software?
   **A:** Possibly. Compatibility depends on the actual systems, platforms, and permissions involved, so it is checked when your project is scoped rather than assumed. For a website, the first question is whether your current platform can support what you need; if it can, a redesign may be enough.
   - **[Low]** Duplication: See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)).

6. **Q:** How much do OKIKO HIGH's services cost?
   **A:** OKIKO HIGH does not publish prices for these services on this site. Cost depends on scope, such as the number of pages, locations, and platforms involved, which integrations are needed, and who approves and publishes content. Request a scoped quote through the contact page.
   - **[Medium]** Duplication: See duplicate group D3 (Pricing).

7. **Q:** Can OKIKO HIGH guarantee rankings, leads, or review removal?
   **A:** No. Google and other platforms control search results and decide whether a review is removed, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. No provider can responsibly guarantee them. Each service page states what it does and does not include.
   - **[Medium]** Duplication: See duplicate group D2 (Guarantee rankings / leads / review removal).

8. **Q:** What information or account access will OKIKO HIGH need?
   **A:** It depends on the service, and your scope lists the specifics. Examples from the service pages include access to your current website and analytics for a website project, authorized access to your Google Business Profile, and approved information, messages, and settings for chatbot, call, and follow-up workflows.

9. **Q:** Does OKIKO HIGH work with businesses outside one city or country?
   **A:** OKIKO HIGH states that it serves clients worldwide. How a service works can still depend on your region, for example which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.
   - **[Medium]** Duplication: See duplicate group D1 (Worldwide / outside one country).

10. **Q:** What kinds of businesses are these services for?
   **A:** The service pages are written for local and service-based businesses. OKIKO HIGH currently serves four kinds of business, each with its own industry page: home services, professional services, property management and real estate, and healthcare, dental and med spa.
   - **[Medium]** Duplication: See duplicate group D5 (Who / which industries OKIKO HIGH serves).

11. **Q:** How do I get started?
   **A:** Use the contact page to describe your business, how customers reach you today, and what you want to improve. We use that to look at which service, if any, fits and to define the scope before any work begins.
   - **[Medium]** Duplication: See duplicate group D6 (How do I get started).

### /services/website-design

- **Page type:** Service
- **Page file:** `src/app/services/website-design/page.tsx`
- **FAQ content file:** `src/content/services/website-design.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** How much should a business website cost?
   **A:** GruffyGoat's 2026-updated vendor guide suggests a $4,000-$15,000 planning range for many professionally built local-service websites. That is not a universal market average and not an OKIKO HIGH price. Your quote should identify pages, copy, integrations, migration, testing, and recurring costs.
   *Sources:* GruffyGoat, Small Business Website Costs (published 2025, updated September 2026)
   - **[Medium]** Accuracy / TBD: Publishes a third-party dollar range ($4,000-$15,000) while OKIKO HIGH pricing is TBD in docs/01. It is attributed and disclaimed ('not an OKIKO HIGH price') but still anchors price expectations. The source ('GruffyGoat' vendor guide, 'updated September 2026') was not verified here.

2. **Q:** Should I redesign my website or build a new one?
   **A:** Start with an audit of your existing website and requirements. A redesign makes sense when the current platform can meet your goals; rebuilding may be more practical when its structure or capabilities cannot.
   - **[Medium]** Duplication: See duplicate group D9 (/faq hub repeats service-page answers).

3. **Q:** Will a new website hurt my rankings?
   **A:** A poorly managed rebuild can disrupt search visibility, and Google warns that significant changes can cause temporary ranking fluctuations. Preserve valuable content and URLs where practical, use relevant redirects, and check indexability at launch.
   *Sources:* Google Search Central, Site moves with URL changes

4. **Q:** Who owns the website after it is built?
   **A:** Ownership depends on the contract and platform. Confirm domain and account control, content and code rights, third-party licenses, and whether the website can move to another host.
   *Sources:* Wix Help, Exporting or embedding your site elsewhere
   - **[Low]** Answer quality: The question asks who owns the site 'after it is built', but the answer is a generic checklist because OKIKO HIGH ownership terms are TBD. FAQ 9 has the same pattern. Honest, but it does not directly answer.

5. **Q:** How long does a website take to build?
   **A:** The schedule depends on scope, content readiness, approvals, and integrations. Agree on milestones and client responsibilities before work begins rather than relying on a universal build-time estimate.

6. **Q:** Is Wix or Squarespace good enough for my business?
   **A:** Either can be appropriate when its capabilities match your requirements and you accept its platform constraints. Compare editing, integrations, search controls, and portability instead of assuming custom development always performs better.
   *Sources:* Wix Help, Exporting or embedding your site elsewhere; Squarespace Help, Exporting your site

7. **Q:** Does website design include SEO?
   **A:** The scope should specify foundational SEO, including relevant page structure, internal links, indexability checks, and any migration work. Ongoing SEO, Google Business Profile management, and continued content development should not be assumed to be included.
   *Sources:* Google Search Central, Site moves with URL changes

8. **Q:** Does my website need to be accessible?
   **A:** The U.S. Department of Justice explains that accessibility obligations extend to the online offerings of covered public accommodations. WCAG 2.2 AA is a useful technical target, but testing and implementation do not guarantee protection from legal claims.
   *Sources:* ADA.gov, Guidance on Web Accessibility and the ADA; W3C, WCAG 2.2
   - **[Low]** Scope: US-only legal framing (U.S. Department of Justice, ADA) on a site that states worldwide coverage.

9. **Q:** What happens if I stop working with my agency?
   **A:** The agreement should explain cancellation, account access, migration assistance, and which subscriptions or licenses stop. Domain transfer and website portability are separate issues; a transferable domain does not guarantee a transferable website.
   *Sources:* Wix Help, Exporting or embedding your site elsewhere

10. **Q:** Can a new website guarantee more leads?
   **A:** No responsible guarantee can ignore demand, traffic quality, competition, the offer, and follow-up. Set measurable deliverables and evaluate qualified inquiries and booked appointments rather than clicks alone.

### /services/google-business-profile-optimization

- **Page type:** Service
- **Page file:** `src/app/services/google-business-profile-optimization/page.tsx`
- **FAQ content file:** `src/content/services/google-business-profile.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** What does Google Business Profile management include?
   **A:** Management commonly includes maintaining business information, optimizing categories and services, publishing approved content, monitoring the profile, and reporting customer actions. Website work, citations, review-request campaigns, call tracking, and suspension assistance may be separate, so the agreed scope should list them explicitly.
   - **[Medium]** Duplication: See duplicate group D9 (/faq hub repeats service-page answers).

2. **Q:** Why am I not appearing in the Google map pack?
   **A:** Google principally considers relevance, distance, and prominence when showing local results. An assessment should check eligibility, verification, accurate information, categories, reviews, and website relevance, while recognizing that optimization cannot remove geographic constraints.
   *Sources:* Google local ranking guidance

3. **Q:** Is Google Business Profile free?
   **A:** Yes, Google provides eligible businesses with a free Business Profile. A management provider charges for agreed services and tools, not a mandatory Google listing fee.
   *Sources:* Google Business Profile overview

4. **Q:** Can I manage my profile myself?
   **A:** Yes, managing the profile directly through Google is an option. A management service is worth considering when updates, monitoring, approved publishing, or reporting are repeatedly neglected or require more time than your team can give them.

5. **Q:** Is automating Google Business Profile posts safe?
   **A:** Scheduling through a supported integration can be appropriate when the owner specifically authorizes the workflow and the content follows Google's policies. Automation does not guarantee publication or rankings, so rejected posts and connection problems still need monitoring.
   *Sources:* Google Business Profile API policies
   - **[Medium]** Accuracy / TBD: docs/01 lists 'Google Business Profile automation' as TBD. The question frames automated GBP posting without saying whether OKIKO HIGH offers it. Confirm with the owner or reword as a general question.

6. **Q:** Do regular posts improve local rankings?
   **A:** Posts can help customers find current information, offers, and events. The research did not establish a universal ranking improvement from posting on a particular schedule, so posting frequency should not be sold as a ranking guarantee.
   - **[Medium]** Answer quality: 'The research did not establish...' exposes internal research process to the visitor and implies research the site does not show.

7. **Q:** My profile has been suspended. What should I do?
   **A:** Review Google's decision and guidelines, correct identifiable issues, and prepare evidence that supports the business's eligibility and information. Use the official appeal process rather than creating a replacement profile or repeatedly submitting the same appeal; reinstatement is not guaranteed.
   *Sources:* Google guidance on suspended profiles
   - **[Low]** Accuracy / TBD: docs/01 lists suspension assistance as TBD. The answer gives generic appeal steps and does not say whether OKIKO HIGH helps (FAQ 1 only says it 'may be separate'). Acceptable, but the question invites an offer the site has not confirmed.

8. **Q:** Should a service-area business show its address?
   **A:** If customers are not served at the address, Google directs service-area businesses to hide it. Serving additional cities does not automatically make the business eligible for additional profiles in those cities.
   *Sources:* Google guidelines for representing your business

9. **Q:** How can I tell whether my profile generates leads?
   **A:** Google reports interactions such as call-button clicks and website clicks, but those figures do not establish qualified leads or sales. Where properly configured, website attribution, business-controlled call tracking, and customer records can help connect interactions to inquiries and bookings.
   *Sources:* Google profile performance metrics

10. **Q:** Can a provider remove a negative review or guarantee rankings?
   **A:** Only Google decides whether a review violates its policies and should be removed; an unfavorable opinion alone is not a valid removal promise. No provider can responsibly guarantee map-pack placement for every query or searcher, because Google controls ranking and considers factors such as distance.
   *Sources:* Google Maps content policy; Google local ranking guidance

### /services/reputation-management

- **Page type:** Service
- **Page file:** `src/app/services/reputation-management/page.tsx`
- **FAQ content file:** `src/content/services/reputation-management.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** How do I get more Google reviews without breaking the rules?
   **A:** Ask objectively eligible customers for honest feedback without rewards, pressure, prescribed wording, or screening by satisfaction. Follow each platform's rules: Google permits neutral requests, while Yelp says not to ask.
   *Sources:* Google Maps prohibited and restricted content policy; Yelp for Business: don't ask for reviews
   - **[Medium]** Duplication: See duplicate group D9 (/faq hub repeats service-page answers).

2. **Q:** Can you remove a bad Google review?
   **A:** A review can be reported when it violates the platform's policies, but a negative opinion alone is not grounds for removal. Google decides whether to remove it, so no responsible provider should guarantee success.
   *Sources:* Google Business Profile Help: report inappropriate reviews

3. **Q:** How many reviews does my business need?
   **A:** There is no universal number that guarantees credibility or rankings. BrightLocal's 2026 US survey found that 47% of respondents would not use a business with fewer than 20 reviews, but an appropriate plan also considers competitors, transaction volume, rating, and recency.
   *Sources:* BrightLocal Local Consumer Review Survey 2026

4. **Q:** What should I say to an angry reviewer?
   **A:** For an ordinary service business, try something like: "I'm sorry to hear you were disappointed. Please contact [name or contact] so we can understand your concerns and discuss next steps." Keep it calm, avoid public argument, and refer to what the reviewer actually said. Use a privacy-reviewed approach for healthcare or legal matters.

5. **Q:** Can I offer a discount for a review?
   **A:** Do not offer incentives for Google or Yelp reviews. The FTC also prohibits incentives conditioned on a particular sentiment, and even neutral incentives can raise disclosure and platform-policy issues.
   *Sources:* Google Maps prohibited and restricted content policy; FTC Consumer Reviews and Testimonials Rule: questions and answers

6. **Q:** What is review gating, and is it allowed?
   **A:** Review gating filters customers by satisfaction before deciding who receives a public-review opportunity. Google prohibits selectively soliciting positive reviews, so private feedback should not determine who gets the review link.
   *Sources:* Google Maps prohibited and restricted content policy

7. **Q:** Do Google reviews help local rankings?
   **A:** Google says more reviews and positive ratings can help local ranking. Reviews are only part of the picture: relevance and distance also matter, and no review count guarantees a position.
   *Sources:* Google Business Profile Help: tips to improve your local ranking

8. **Q:** Is SMS or email better for review requests?
   **A:** No universal published-review conversion advantage was verified in our research. Choose a legally appropriate channel based on customer preference, and track delivery, clicks, published reviews, and opt-outs separately. Review tools commonly support both channels.
   *Sources:* HighLevel documentation on multi-channel review requests
   - **[Medium]** Answer quality: 'was verified in our research' is internal process language and an unsupported claim about research performed. Source label cites HighLevel documentation (see S4).

9. **Q:** When should I ask for a review?
   **A:** For completed projects, ask while the experience is still fresh and after the customer can meaningfully evaluate the work. Recurring or multi-stage services need their own timing rules.
   *Sources:* Angi: how to ask customers for reviews

10. **Q:** Should I respond to positive reviews?
   **A:** Yes, where an appropriate reply is possible: briefly thank the reviewer and acknowledge the feedback without repetitive sales language. Healthcare providers must avoid confirming patient status, even in positive replies.
   *Sources:* BrightLocal Local Consumer Review Survey 2026

11. **Q:** What if a review looks fake?
   **A:** Preserve evidence and report the specific suspected policy violation. Do not publicly accuse someone just because you cannot match their name to a customer record. Google, not the business, determines removal.
   *Sources:* Google Business Profile Help: report inappropriate reviews

12. **Q:** Can AI write our review responses?
   **A:** AI can produce a draft, but a person should check accuracy, tone, privacy, and sensitive allegations before it is published. Automated replies are particularly risky where patient information or legal-client confidentiality is involved.
   *Sources:* American Dental Association guidance on responding to online reviews

13. **Q:** How much does review management cost?
   **A:** Cost depends on scope: how many locations and platforms are involved, how many requests you send, which integrations are needed, and who drafts, approves, and publishes replies. Software prices are not the same as the cost of a managed service. We do not publish a price on this page; ask for a scoped quote.

### /services/ai-chatbots

- **Page type:** Service
- **Page file:** `src/app/services/ai-chatbots/page.tsx`
- **FAQ content file:** `src/content/services/ai-chatbots.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** What does an AI website chatbot do?
   **A:** It can answer approved questions, collect inquiry details, and help visitors request a quote or appointment. Its functions depend on the business information, workflows, and integrations configured for it.

2. **Q:** Will it say something wrong?
   **A:** Yes, an AI chatbot can misunderstand a question or generate inaccurate information. Approved knowledge, clear restrictions, testing, and human handoff reduce risk, but do not guarantee accuracy.

3. **Q:** Will it replace my staff?
   **A:** The recommended role is to support staff with routine questions and intake, not replace their judgment. Your team remains responsible for exceptions, commitments, service delivery, and follow-up.

4. **Q:** What happens if it cannot answer?
   **A:** It should acknowledge that it cannot confirm the answer and offer a route to a person. A configured handoff can assign and notify staff, but the business must decide who responds and when.

5. **Q:** Is a chatbot worth it for a small business?
   **A:** It can be useful when enough visitors need answers, qualification, or after-hours intake. For a low-volume website, a clearer FAQ, contact form, or booking link may offer better value.

6. **Q:** Can it book appointments?
   **A:** Supported integrations can let a chatbot use configured calendars and booking rules. It should confirm an appointment only after the connected system reports that the booking succeeded.

7. **Q:** Can it provide a quote?
   **A:** It can collect the details needed for a quote request. Final prices should come from approved pricing logic or a staff member, not an AI estimate presented as a binding quote.

8. **Q:** Can a website conversation continue by text?
   **A:** Supported systems can route follow-up into messaging workflows. Customer permission, message purpose, and applicable legal and provider requirements must be checked before sending.

9. **Q:** Can it connect to my CRM and calendar?
   **A:** Many platforms support CRM and calendar integrations, but available actions and plan requirements vary. Contact creation, field mapping, booking, notifications, and duplicate handling should be verified during testing.

10. **Q:** How much does a website chatbot cost?
   **A:** Software platforms use different billing units, including credits, conversations, seats, and outcomes. A complete cost assessment should also identify setup, integrations, monitoring, and ongoing management. We do not publish a price on this page; ask for a scoped quote.
   *Sources:* Chatbase pricing

### /services/ai-receptionist

- **Page type:** Service
- **Page file:** `src/app/services/ai-receptionist/page.tsx`
- **FAQ content file:** `src/content/services/ai-receptionist.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** Will callers know they are speaking with AI?
   **A:** The recommended setup includes a clear opening disclosure that the caller is speaking with an AI assistant. The aim is helpful, transparent call handling, not pretending to be a person. Applicable EU transparency rules also require disclosure in relevant circumstances.
   *Sources:* European Commission, Guidelines on AI transparency obligations

2. **Q:** Can an AI receptionist book into my calendar?
   **A:** Voice AI platform documentation describes appointment booking through a connected calendar. Your calendar, appointment types, availability rules, time zones, and capacity need to be checked and tested before live booking is enabled.
   *Sources:* HighLevel Support, Appointment Booking in Voice AI
   - **[Low]** Duplication: See duplicate group D12 (AI receptionist calendar booking).

3. **Q:** What happens if someone calls about an emergency?
   **A:** The assistant should follow an approved escalation flow rather than make its own emergency decisions. Urgent service requests can be routed to an agreed contact, while immediate danger or a medical emergency calls for an instruction to contact the appropriate emergency service. The assistant should not promise diagnosis or dispatch.

4. **Q:** Is recording customer calls legal?
   **A:** Recording can be lawful, but consent requirements depend on the jurisdiction and the circumstances. Recording, transcription, disclosures, and calls that cross state lines should be reviewed before activation instead of being treated as automatically permitted.
   *Sources:* Reporters Committee, Introduction to the reporter's recording guide

5. **Q:** Can it answer only after hours or when we are busy?
   **A:** Voice AI platform documentation describes direct answering, backup answering, and scheduled availability. The complete call path needs testing because forwarding, voicemail, timeouts, and operating-hour settings can affect which system answers.
   *Sources:* HighLevel Support, How to Create Voice AI Agents

6. **Q:** Can callers reach a human?
   **A:** Platform documentation describes transfers to a human phone number. The workflow also needs clear availability rules and a fallback when nobody answers, so callers are not left thinking someone has accepted their request when no one has.
   *Sources:* HighLevel Support, How to Create Voice AI Agents

7. **Q:** Can it handle interruptions, accents, and background noise?
   **A:** Platforms provide speech-related and interruption settings, but these do not establish reliable performance for every caller. Representative accents, noisy calls, interruptions, and corrections should be part of testing before launch.
   *Sources:* HighLevel Support, How to Create Voice AI Agents

8. **Q:** Can it send a text after the call?
   **A:** Platforms support text actions and follow-up workflows. Messages still need appropriate consent, opt-out handling, and any applicable sender registration. An inbound call should not be treated as blanket permission for promotional texts.
   *Sources:* HighLevel Support, How to Create Voice AI Agents
   - **[Low]** Accuracy / TBD: 'Platforms support text actions and follow-up workflows' is a capability statement from vendor documentation; docs/01 lists tested integrations as TBD. Source label is 'HighLevel Support' (see S4).

9. **Q:** Will I receive transcripts and call summaries?
   **A:** Platforms provide call logs with transcripts and summaries. Whether these are enabled, who can access them, and how long they are kept should be defined for the implementation, particularly when calls contain sensitive information.
   *Sources:* HighLevel Support, How to Create Voice AI Agents
   - **[Low]** Accuracy / TBD: 'Platforms provide call logs with transcripts and summaries' is stated as fact from vendor documentation; tested integrations are TBD.

10. **Q:** How much will OKIKO HIGH's AI receptionist service cost?
   **A:** Pricing and service packages have not been confirmed yet. Setup, recurring service, usage, telephony, integrations, maintenance, and any human-backup costs need to be defined before pricing is published.
   - **[Low]** Answer quality: 'Pricing and service packages have not been confirmed yet' implies packages exist and exposes internal status; other pages say 'does not publish prices'. Make the wording consistent.

### /services/sms-email-automation

- **Page type:** Service
- **Page file:** `src/app/services/sms-email-automation/page.tsx`
- **FAQ content file:** `src/content/services/sms-email-automation.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** What is text and email automation?
   **A:** Text and email automation sends approved messages after a defined action or customer-stage change, such as an inquiry, quote, or appointment booking. The workflow also needs rules for replies, timing, and when messages stop.

2. **Q:** Is texting customers legal?
   **A:** Businesses can text customers when the program meets applicable consent, opt-out, timing, and other requirements. Rules vary by message purpose, technology, and jurisdiction, and carrier policies apply separately from the law.

3. **Q:** Will automated messages annoy my customers?
   **A:** They can if they are unwanted, repetitive, poorly timed, or continue after someone responds. A responsible workflow uses appropriate permissions, useful content, frequency limits, and a clear way to stop.

4. **Q:** How fast should I follow up with a new lead?
   **A:** A practical target is prompt acknowledgment and a substantive human response within five minutes during staffed hours, where feasible. That is an operating recommendation, not a guaranteed conversion result or an OKIKO HIGH service commitment.
   - **[Medium]** Duplication: See duplicate group D10 (Reply handling, follow-up speed, past customers).

5. **Q:** How many follow-up messages should I send?
   **A:** There is no universal number that fits every service or customer. Start with a short, useful sequence, monitor replies and opt-outs, and stop or change the sequence when the customer's status changes.

6. **Q:** What do I need to register to send texts?
   **A:** For application-based messaging through US 10-digit local numbers, register the sending brand and messaging campaign, then associate the phone numbers. Registration typically requires business details, message examples, opt-in information, opt-out instructions, and relevant website policies. Other number types use different processes.
   - **[Low]** Scope: US-specific (10DLC) registration advice on a worldwide site. The answer says 'Other number types use different processes' but names no non-US process.

7. **Q:** Should I use text messages or email?
   **A:** Text messages suit brief, time-sensitive interactions, while email provides room for estimates, instructions, and longer explanations. When both are used, coordinate them so a customer's reply or booking prevents unnecessary follow-ups.

8. **Q:** What happens when a customer replies?
   **A:** A well-designed workflow pauses or branches and routes the reply to the appropriate person. Staff ownership, response expectations, and escalation responsibilities should be agreed before launch.
   - **[Medium]** Duplication: See duplicate group D10 (Reply handling, follow-up speed, past customers).

9. **Q:** Can I use my existing CRM and scheduling software?
   **A:** Possibly, but compatibility should be checked against the actual systems, permissions, and integration requirements. Existing reminders should also be reviewed so a new workflow does not duplicate messages.
   - **[Low]** Duplication: See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)).

10. **Q:** Can I send reactivation messages to former customers?
   **A:** Potentially, after checking permissions, suppression records, data quality, and the purpose of the message. An old customer record is not automatic permission for every promotional text.
   - **[Medium]** Duplication: See duplicate group D10 (Reply handling, follow-up speed, past customers).

### /industries

- **Page type:** Audience hub
- **Page file:** `src/app/industries/page.tsx`
- **FAQ content file:** `src/content/industries/hub.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** Which industries does OKIKO HIGH work with?
   **A:** OKIKO HIGH currently serves four kinds of business: home services, professional services, property management and real estate, and healthcare, dental and med spa. Each has its own industry page showing how the same marketing and automation services apply to the way that kind of business gets inquiries and follows up.
   - **[Medium]** Duplication: See duplicate group D5 (Who / which industries OKIKO HIGH serves).

2. **Q:** Which businesses are included in each industry?
   **A:** Home services covers HVAC, plumbing, landscaping, general contracting, cleaning, and related businesses. Professional services covers law, accounting, consulting, financial advice, and similar firms of about 1 to 25 people. Property management and real estate covers property managers, landlords, rental operators, and real estate teams. Healthcare, dental and med spa covers practices of about 1 to 10 providers.
   - **[Medium]** Accuracy: 'firms of about 1 to 25 people' and 'practices of about 1 to 10 providers' are not in docs/01 (the 1-25 range appears only in the docs/03 brief). Confirm before keeping them as stated audience definitions.

3. **Q:** Are the services different for each industry?
   **A:** The same six services apply across the industries: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. What changes is how they are used, such as which customer questions come first and who on your team handles the next step.

4. **Q:** Should I start with an industry page or a service page?
   **A:** Either works. An industry page is a good start if you want to see the proposed approach for a business like yours. A service page is a good start if you already know the problem you want to fix, such as missed calls or unanswered reviews.

5. **Q:** What if my industry is not listed?
   **A:** Describe your business and how customers reach you through the contact page. We can look at whether one of the six services fits, and what a realistic scope would be. Not having a dedicated industry page does not stop you from asking.

6. **Q:** Does OKIKO HIGH work with businesses outside one city or country?
   **A:** OKIKO HIGH states that it serves clients worldwide. How a service works can still depend on your region, for example which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.
   - **[Medium]** Duplication: See duplicate group D1 (Worldwide / outside one country).

7. **Q:** Do the industry pages show client results or reviews?
   **A:** No. The industry pages describe approaches and illustrative scenarios. They do not publish client results, ratings, or testimonials.

8. **Q:** How much do these services cost?
   **A:** OKIKO HIGH does not publish prices on this site. Cost depends on scope, such as the number of pages, locations, and platforms involved and which integrations are needed. Request a scoped quote through the contact page.
   - **[Medium]** Duplication: See duplicate group D3 (Pricing).

9. **Q:** Can OKIKO HIGH guarantee rankings, leads, or review outcomes?
   **A:** No. Google and other platforms control search results and reviews, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. Each service page states what it does and does not include.
   - **[Medium]** Duplication: See duplicate group D2 (Guarantee rankings / leads / review removal).

### /industries/home-services

- **Page type:** Audience
- **Page file:** `src/app/industries/home-services/page.tsx`
- **FAQ content file:** `src/content/industries/home-services.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** What does marketing and automation mean for a home-service business?
   **A:** It means connecting customer-facing marketing with the steps that follow an inquiry, such as a conversation, quote, appointment, or appropriate reminder. The goal is to make those steps more organized while keeping clear responsibility for customer questions and exceptions.

2. **Q:** Do I need to replace my existing scheduling or CRM software?
   **A:** Not necessarily. Review the capabilities already in place before adding another platform, and confirm integrations so new workflows do not duplicate existing reminders.
   - **[Low]** Duplication: See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)).

3. **Q:** How quickly should we follow up with a new inquiry?
   **A:** As soon as practical. Aim for prompt acknowledgment and a substantive human response as quickly as your staffing allows during working hours. Your team sets its own target, and this is an operating recommendation, not a guaranteed result or an OKIKO HIGH service commitment.
   - **[Medium]** Duplication: See duplicate group D10 (Reply handling, follow-up speed, past customers).

4. **Q:** Will automated texts and emails annoy customers?
   **A:** They can if they are unwanted, repetitive, poorly timed, or continue after a response. Use appropriate permissions, useful content, sensible frequency limits, and stopping rules that reflect the customer's next action.

5. **Q:** What happens when a customer replies?
   **A:** The workflow should pause or branch and route the reply to the appropriate person. Staff ownership, response expectations, and escalation responsibilities need to be agreed before launch.
   - **[Medium]** Duplication: See duplicate group D10 (Reply handling, follow-up speed, past customers).

6. **Q:** Can automation handle urgent service requests?
   **A:** A workflow can acknowledge an inquiry or route it according to approved rules, but it should not be presented as emergency dispatch. Any urgent-request process needs confirmed routing, staff coverage, and clear boundaries.

7. **Q:** Is it legal to text customers about appointments or services?
   **A:** It can be, but requirements depend on message purpose, technology, consent, jurisdiction, and opt-out handling. Carrier policies also apply, so technical ability to send a message is not the same as permission to send it.
   *Sources:* Twilio, SMS compliance and A2P 10DLC in the US

8. **Q:** Can we reconnect with past customers?
   **A:** Potentially, after checking permissions, suppression records, data quality, and the relevance of the message. An old customer record does not automatically authorize every promotional text.
   *Sources:* Twilio, SMS compliance and A2P 10DLC in the US
   - **[Medium]** Duplication: See duplicate group D10 (Reply handling, follow-up speed, past customers).

9. **Q:** Can review requests be automated?
   **A:** A review-request workflow can be configured, but it must invite genuine feedback rather than selectively ask only satisfied customers. Google prohibits review incentives and selectively soliciting positive reviews.
   *Sources:* Google, Prohibited and restricted content for reviews

10. **Q:** How will we know whether the workflow is helping?
   **A:** Measure substantive responses, accepted quotes, appointments, completed jobs, staff workload, and opt-outs. Compare against a baseline where practical rather than treating every message, open, or platform-attributed conversion as a business result.

11. **Q:** What does it cost, and what happens if I leave?
   **A:** OKIKO HIGH's pricing and exit terms have not been finalized or published yet. Before agreeing to work, confirm setup and usage costs, support responsibilities, ownership of websites, accounts, and phone numbers, and data-export arrangements.
   - **[Low]** Style: Two questions in one ('What does it cost, and what happens if I leave?'), against the one-issue-per-question standard in docs/04.

### /industries/professional-services

- **Page type:** Audience
- **Page file:** `src/app/industries/professional-services/page.tsx`
- **FAQ content file:** `src/content/industries/professional-services.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** Which professional firms is this page for?
   **A:** This page addresses the needs of law, accounting and bookkeeping, HR and consulting, financial-advisory, insurance, architecture, and engineering firms. Inclusion here does not establish that OKIKO HIGH has served every profession; relevant experience and service fit should be confirmed directly.
   - **[Medium]** Accuracy: Lists bookkeeping, HR, insurance, architecture and engineering firms. docs/01 names 'law, accounting, consulting, financial advice, and similar firms'; the extra professions appear only in the docs/03 brief. The answer correctly disclaims experience, but confirm the list as approved.

2. **Q:** Can marketing help a firm that grows through referrals?
   **A:** It can help referred prospects evaluate the firm and understand how to take the next step. Historical professional-services research shows that online evaluation complements referral-based discovery.
   *Sources:* Hinge, how professional services buyers check you out (2014)
   - **[Low]** Answer quality: Relies on 2014 Hinge research for a current claim.

3. **Q:** What if we want better-fit inquiries rather than more inquiries?
   **A:** The proposed approach can prioritize clearer service information, qualification, and routing instead of greater inquiry volume. The assessment should define what a suitable inquiry looks like for your firm.

4. **Q:** Do we need every service?
   **A:** No. Start with the identified problem; a clearer website and dependable human follow-up may be sufficient without chatbots, voice AI, or an additional CRM.

5. **Q:** Will this replace our existing practice-management or CRM software?
   **A:** Replacement should not be the default. Existing tools should be reviewed first, including documented workflows such as Lawmatics' handoff to Clio Manage.
   *Sources:* Lawmatics Help, Clio Manage integration

6. **Q:** Can your approach work with Clio, Lawmatics, HubSpot, or our scheduling tools?
   **A:** Compatibility depends on your products, permissions, and required actions. OKIKO HIGH's tested integrations remain unconfirmed, so any proposed connection must be assessed before it is promised.

7. **Q:** Is AI required, and can it provide professional advice?
   **A:** AI is optional in the proposed approach and should be limited to approved administrative tasks. Professional advice and judgment should remain with qualified people, with appropriate oversight of the tools used.
   *Sources:* ABA, Formal Opinion 512
   - **[Low]** Style: Two questions in one ('Is AI required, and can it provide professional advice?').

8. **Q:** How should confidential information be handled?
   **A:** Initial forms and assistants should collect only what the contact workflow needs. Access, retention, and vendor data use require review, and sensitive details may need a separate secure channel.
   *Sources:* ABA, Formal Opinion 512

9. **Q:** Can every firm use Google Business Profile and automated review requests?
   **A:** No. Google excludes online-only businesses from Business Profile eligibility and prohibits selectively requesting positive reviews; professional rules may add further restrictions.
   *Sources:* Google, Business Profile eligibility; Google, Prohibited and restricted content for reviews

10. **Q:** What does support from OKIKO HIGH cost?
   **A:** OKIKO HIGH's pricing model is TBD. Before approval, a proposal should identify the selected scope and any implementation, software, usage, integration, or ongoing-support costs.
   - **[Medium]** TBD leakage: Visitor-facing text reads 'OKIKO HIGH's pricing model is TBD.' The internal placeholder is published verbatim. Other pages say 'does not publish prices'.

### /industries/property-management-real-estate

- **Page type:** Audience
- **Page file:** `src/app/industries/property-management-real-estate/page.tsx`
- **FAQ content file:** `src/content/industries/property-management-real-estate.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** What marketing and automation needs do property businesses share?
   **A:** Common needs include a clear online presence, organized inquiry capture, assigned follow-up, and consistent customer communication. The workflow should still distinguish owners, rental prospects, residents, guests, and brokerage clients.

2. **Q:** Is the same approach suitable for property managers and real estate agents?
   **A:** Not without adapting it. Property managers need owner, leasing, and resident-support paths, while agents and brokerages need buyer and seller lead assignment and appointment follow-up.

3. **Q:** How do short and midterm rental workflows differ?
   **A:** Rental-operator communication centers on reservations, booking channels, and guest stays rather than long-term applications and resident support. Existing Guesty or Hostaway capabilities should be reviewed before adding another communication layer.
   *Sources:* Guesty, unified inbox

4. **Q:** Do we need to replace our existing software?
   **A:** Not necessarily. The recommended approach starts by reviewing current capabilities and adds only functions that address a verified gap, without unnecessary duplication.
   - **[Low]** Duplication: See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)).

5. **Q:** Can a workflow connect to AppFolio, Buildium, or Yardi?
   **A:** Compatibility depends on the product, subscription, permissions, and required data flows. Any proposed connection should be tested before compatibility is promised.
   *Sources:* Yardi, Chat IQ

6. **Q:** Should a brokerage add another CRM if it already uses Follow Up Boss or kvCORE?
   **A:** Not automatically. Review the existing account, native automation, assignment process, and staff adoption first. kvCORE has evolved into BoldTrail, so the actual account capabilities also need confirmation.
   *Sources:* Follow Up Boss, lead engagement integrations

7. **Q:** Can AI help with after-hours inquiries?
   **A:** AI can be configured for approved questions, inquiry capture, and handoffs. It needs clear disclosure, reliable information, and a human fallback when it cannot answer or transfer.
   *Sources:* Yardi, Chat IQ

8. **Q:** Can AI make decisions about maintenance emergencies?
   **A:** AI should not independently diagnose an emergency or decide that a situation is safe. Any proposed intake workflow should follow operator-approved escalation instructions and provide a staffed backup route.

9. **Q:** Can rental prospects receive automated text follow-up?
   **A:** Automated messaging needs a reviewed consent and compliance process appropriate to the message and technology. Permission should be recorded, opt-outs supported, and marketing separated from operational communication.

10. **Q:** Can every rental property have a Google Business Profile?
   **A:** Google lists rental and for-sale properties as ineligible. Qualifying sales or leasing offices may be eligible, subject to the full business eligibility requirements.
   *Sources:* Google, Business Profile eligibility

11. **Q:** Can we request reviews from both tenants and owners?
   **A:** Genuine customers can be invited under neutral, consistent rules. Google prohibits incentives and selectively requesting positive reviews, so invitations must not depend on a favorable satisfaction score.
   *Sources:* Google, Prohibited and restricted content for reviews

12. **Q:** What should we measure before and after a workflow change?
   **A:** Measure response times, assignment completion, handoff reliability, answer accuracy, staff handling time, and correction work. Track consultations, tours, applications, leases, or agreements separately, without claiming the workflow caused every change.

### /industries/healthcare

- **Page type:** Audience
- **Page file:** `src/app/industries/healthcare/page.tsx`
- **FAQ content file:** `src/content/industries/healthcare.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** Does OKIKO HIGH currently serve healthcare practices?
   **A:** Yes. Healthcare, dental, and med spa practices are one of the audiences OKIKO HIGH currently serves. Service scope, integrations, and support arrangements are confirmed with each practice before an engagement is proposed.

2. **Q:** What could marketing and automation help our practice manage?
   **A:** The proposed approach could connect website inquiries, administrative follow-up, reputation management, and selected communication workflows. It is intended to support your team, not replace clinical judgment or your practice-management software.

3. **Q:** Would we need to replace our existing software?
   **A:** Replacement is not the proposed objective. The first step should be reviewing your existing features and confirming whether an additional workflow solves a genuine gap without creating duplicate work.
   - **[Low]** Duplication: See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)).

4. **Q:** Is GoHighLevel HIPAA compliant?
   **A:** HighLevel says its accounts are not HIPAA compliant by default and offers an optional HIPAA package requiring a BAA and configuration. Your practice, the agency, and connected vendors still have responsibilities that must be reviewed for the actual deployment.
   *Sources:* HighLevel Support, HIPAA compliance with HighLevel; HHS, Business Associates guidance
   - **[High]** Compliance / GoHighLevel: Question and answer discuss HIPAA, BAAs and 'GoHighLevel' by name. docs/03 says HIPAA, TCPA, recording and AI-disclosure copy 'needs legal review before publication'; no review is recorded in the docs. docs/01 does not say whether OKIKO HIGH offers the HIPAA package or signs BAAs. Naming GoHighLevel in a visitor question also sits against the recent 'Reword GoHighLevel references' work. It does not imply a partnership.

5. **Q:** Can an AI receptionist or chatbot answer medical questions?
   **A:** Clinical advice, diagnosis, and individualized treatment recommendations are outside the proposed scope. Clinical questions should move to your practice's approved human or clinical communication pathway.

6. **Q:** Can automation book appointments directly?
   **A:** Direct booking depends on the exact software, permissions, appointment rules, and verified integration. If those requirements cannot be met safely, the workflow should collect a request for staff confirmation instead.

7. **Q:** Can reminders reduce no-shows?
   **A:** Research supports appointment reminders, but results vary by practice, baseline, and intervention. Your practice should measure its own attendance changes rather than rely on a universal percentage promise.
   *Sources:* Cochrane review, appointment reminder systems (2013)
   - **[Low]** Answer quality: Cites a 2013 Cochrane review for a current claim.

8. **Q:** Can automation answer insurance questions?
   **A:** It could provide practice-approved general information or route a secure inquiry to staff. Individual eligibility, coverage, and payment responsibility should not be presented as guaranteed.

9. **Q:** How should a practice respond to negative reviews?
   **A:** Use an approved, neutral response that does not disclose or confirm patient information and provides a private contact route. A reviewer's own disclosure does not remove the practice's privacy obligations.
   *Sources:* HHS OCR, New Vision Dental settlement (2022)

10. **Q:** How much would this cost?
   **A:** OKIKO HIGH does not publish prices on this site. Any proposal should identify the confirmed scope and applicable implementation, software, usage, and integration costs.

### /industries/home-services/website-design

- **Page type:** Audience + service
- **Page file:** `src/app/industries/[audience]/[service]/page.tsx via src/components/combos/ComboPage.tsx`
- **FAQ content file:** `src/content/combos/home-services/website-design.ts (registry: published: true)`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** What should a home-service website include?
   **A:** It should name each service offered, state the service areas, show business hours, give a clear way to call or request a quote, and answer common customer questions. In Jobber's 2026 platform data, 43% of home-service sites did not clearly list service areas, 65% did not show hours, and 74% had no FAQ section.

2. **Q:** Do I need a separate page for every service?
   **A:** Give each service you actually offer its own page with useful, specific detail. Avoid near-duplicate pages for similar searches; Google's spam policies treat pages built mainly to rank for similar queries as doorway abuse.

3. **Q:** Should I build a page for every city I serve?
   **A:** Only when each page has distinct, useful information. Google's spam policies list pages aimed at specific cities or regions that funnel visitors to one page as an example of doorway abuse.

4. **Q:** Do I need special markup or an llms.txt file to appear in AI answers?
   **A:** Google states there are no additional requirements for AI Overviews or AI Mode, no special schema.org markup, and no need for AI text files. Pages need to be indexed and eligible to appear in Search with a snippet.

5. **Q:** Will FAQ markup give me rich results?
   **A:** Google's documentation says FAQ rich results no longer appear in Search. A visible FAQ still answers visitors' questions, and any markup should match what is on the page.
   - **[Medium]** Schema: The answer says Google's documentation states FAQ rich results no longer appear in Search, yet this page and 19 others ship FAQPage JSON-LD (see S1).

6. **Q:** What are good Core Web Vitals scores?
   **A:** Google's 'good' targets are Largest Contentful Paint of 2.5 seconds or less, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads.

7. **Q:** Does my website need to follow accessibility standards?
   **A:** WCAG 2.2 is the current W3C Recommendation, and web accessibility lawsuits are filed regularly in the US. Legal obligations vary, so ask a lawyer what applies to your business.
   - **[Low]** Scope: US lawsuits and US framing. Fine for a US-focused Home Services audience, but docs/01 does not say the audience is US-focused.

8. **Q:** Who owns my website when I use an agency?
   **A:** It depends on your agreement. Before signing, ask who registers the domain, who holds the hosting account, who owns the content and code, whether you can export the site, and what happens if you cancel. OKIKO HIGH's terms are not stated on this page.

9. **Q:** Is a website worth it if most of my work comes from referrals?
   **A:** Referrals and repeat customers were the top lead sources in Jobber's 2026 survey of home-service owners (59% each). A website gives referred customers the details that are often missing, such as service areas, hours, and how to reach you.

10. **Q:** How can I tell whether my website is working?
   **A:** Track phone calls and form submissions back to where they came from, record a baseline before changes, and review the numbers on a regular schedule. No result can be promised in advance.

### /industries/home-services/ai-receptionist

- **Page type:** Audience + service
- **Page file:** `src/app/industries/[audience]/[service]/page.tsx via src/components/combos/ComboPage.tsx`
- **FAQ content file:** `src/content/combos/home-services/ai-receptionist.ts (registry: published: true)`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** Can an AI receptionist answer calls while I am on a job?
   **A:** Yes, that is the basic purpose. HighLevel's documentation describes Voice AI agents that answer inbound calls and can transfer them. What it should say, and which calls it hands to a person, are rules you set. See the platform documentation on creating Voice AI agents.

2. **Q:** Can an AI receptionist book estimates into my calendar?
   **A:** It can on some platforms. HighLevel's documentation describes appointment booking in Voice AI against a connected calendar. Whether it works with your calendar or job software has to be set up and tested, and this page does not say which ones OKIKO HIGH has tested.
   - **[Low]** Duplication: See duplicate group D12 (AI receptionist calendar booking).

3. **Q:** How should an AI receptionist handle a gas smell or other emergency?
   **A:** It should tell the caller to leave and call 911, alert a person, and give no repair or safety instructions of its own. PHMSA's public guidance for a gas leak is to leave, call 911 from a safe place, and avoid phones and switches near the leak. An AI receptionist is not an emergency service.

4. **Q:** Do I have to tell callers they are talking to an AI?
   **A:** It depends on where the caller is. No federal rule was found for AI answering inbound calls, but Maine's statute covers chatbots used in trade when a reasonable consumer could be misled, and Utah requires disclosure when a consumer clearly asks. Saying it up front is simple. Ask a lawyer what applies to you.
   - **[High]** Compliance: States specific state-law positions (Maine, Utah) and 'No federal rule was found' as fact. No legal review is recorded. 'was found' also exposes research process. I could not verify the statutes in this audit.

5. **Q:** Is it legal to record calls an AI receptionist answers?
   **A:** Federal law needs one party's consent, but several states need every party's, including California, Florida, Maryland, Massachusetts, New Hampshire, Pennsylvania, and Washington, and a few others have qualifications. Check the states your callers are in. This is not legal advice.
   - **[High]** Compliance: Lists the all-party-consent states (California, Florida, Maryland, Massachusetts, New Hampshire, Pennsylvania, Washington) as fact, with 'a few others have qualifications'. No legal review is recorded; not verified here. The 'not legal advice' line helps but does not remove the accuracy risk.

6. **Q:** Can an AI receptionist text customers after a call?
   **A:** It can on some platforms, with rules. Stop words must be honored and processed within 10 business days, and US long-code texting needs A2P 10DLC registration through your provider. Outbound AI voice calls and callbacks are covered by the FCC's 2024 ruling that AI voices count as artificial voices under the TCPA.
   - **[Medium]** Compliance: States TCPA timing (10 business days) and the FCC 2024 ruling as fact. Not verified here; no legal review recorded.

7. **Q:** How do I decide which calls are emergencies and which are scheduled?
   **A:** You write the rule. Start with danger (a gas smell, smoke, sparking, anyone at risk), then urgent (an active leak, no heat or cooling), then scheduled. No sourced share of home-service calls falls into each group, so test the rule on your own calls and adjust it.
   - **[Low]** Answer quality: 'No sourced share of home-service calls falls into each group' exposes research process.

8. **Q:** How many home-service calls come in after hours?
   **A:** ServiceTitan's 2025 residential HVAC data put calls outside Monday to Friday, 8 a.m. to 5 p.m. at 14.1% in June and 9.8% in October, and weekday calls before 8 or after 5 at 9.3% and 6.8%. That is one vendor's data, not a national figure, so check your own phone records.
   - **[Low]** Answer quality: Uses HVAC-only ServiceTitan data for a 'home-service calls' question and says so. 'Monday to Friday, 8 a.m. to 5 p.m.' is the vendor's measurement window, not OKIKO HIGH hours (not TBD leakage).

9. **Q:** Will callers mind talking to an AI receptionist?
   **A:** Some will. In a December 2023 Gartner survey of 5,728 customers about customer service in general, 64% said they would prefer that companies not use AI for it, and 53% said they would consider switching. It was not about home services specifically, so give callers an easy way to reach a person.

10. **Q:** What does an AI receptionist cost a home-service business?
   **A:** OKIKO HIGH has not published pricing for this service yet, so this page does not state one. Ask any provider what is included in the monthly price, what costs extra, and who owns the number and the data if you leave.

### /faq

- **Page type:** Core (FAQ hub)
- **Page file:** `src/app/faq/page.tsx`
- **FAQ content file:** `src/content/faq.ts (six groups, flattened to allFaqs for JSON-LD)`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

#### Group: Getting Found and Making a Strong First Impression

1. **Q:** How can you help customers find and understand our business online?
   **A:** Two services work on this step. A website explains what you do and how to get in touch, and a Google Business Profile keeps the details customers see on Google Search and Maps accurate. Which one to start with depends on where customers drop off today. Neither guarantees rankings or leads.

2. **Q:** Do we need a new website, or can we improve the one we have?
   **A:** Start with an audit of your existing website and requirements. A redesign makes sense when the current platform can meet your goals. Rebuilding may be more practical when its structure or capabilities cannot. A rebuild also needs care, because a poorly managed one can disrupt search visibility.
   - **[Medium]** Duplication: See duplicate group D9 (/faq hub repeats service-page answers).

3. **Q:** What should our website help visitors do?
   **A:** It should make the next step easy to find and complete, such as calling, requesting a quote, or booking. The scope defines which of those actions matters most for your business, so the layout and copy are organized around it. Foundational SEO should be named in the scope and not assumed.

4. **Q:** What does Google Business Profile optimization include?
   **A:** It commonly includes maintaining business information, optimizing categories and services, publishing approved content, monitoring the profile, and reporting customer actions. Website work, citations, review-request campaigns, call tracking, and suspension assistance may be separate, so the agreed scope should list them explicitly.
   - **[Medium]** Duplication: See duplicate group D9 (/faq hub repeats service-page answers).

5. **Q:** Does our business qualify for a Google Business Profile?
   **A:** Eligibility depends on how the business actually operates. Google's guidelines focus on businesses that serve customers at a physical location or travel to customers, require an accurate real-world representation, exclude online-only businesses, and restrict virtual-office listings. Service-area businesses may need to hide their address.

#### Group: Capturing Inquiries and Responding to Customers

6. **Q:** How can customer inquiries be collected and organized?
   **A:** A workflow can be designed to collect the request from a form, chat, or call, acknowledge receipt, and route the details to the right person or system. The acknowledgment should make the next step clear. Receiving a request is not the same as confirming an appointment, dispatching a technician, or accepting a job.

7. **Q:** Can an AI assistant answer common questions or take a message?
   **A:** It can be suitable for clearly defined questions, such as business hours, service areas, or how to request an appointment, and it can collect a caller's or visitor's details. Its information and responsibilities are approved before launch, it should disclose that it is an AI assistant, and it can still misunderstand a question, so testing and a route to a person matter.

8. **Q:** What happens to inquiries outside business hours?
   **A:** Depending on the approved setup, an after-hours workflow can collect contact details, record the reason for the inquiry, and explain when or how the customer should expect a response. After-hours handling should not be presented as emergency service or guaranteed dispatch.

9. **Q:** Can we keep our existing business phone number?
   **A:** Possibly. Forwarding an existing number is one way calls can reach an AI receptionist, but compatibility depends on your carrier, phone setup, and routing. The full call path, including voicemail and timeouts, is tested before launch and not assumed.
   - **[Low]** Answer quality: Answer opens with 'Possibly.' before naming the subject; docs/04 asks for independently understandable answers.

10. **Q:** What happens when the assistant cannot answer a question or someone wants a person?
   **A:** It should say it cannot confirm the answer and offer a route to a person, such as a call transfer, a notification to a team member, or collecting details for a callback. Who is available, and when, needs to be confirmed before the workflow goes live, so no one is left thinking a request was accepted when it was not.

#### Group: Qualifying Requests and Booking the Next Step

11. **Q:** Can the system collect the information our team needs before responding?
   **A:** A request workflow can be designed to ask for relevant details, such as contact information, location, service type, and a short description. The aim is to give your team useful context without making the customer complete a long intake process.

12. **Q:** Can it check service areas or other basic fit requirements?
   **A:** Basic questions can help identify whether a request falls within your service area or the types of work you accept. Your team defines those rules. Unclear requests and exceptions need a review path and not an automatic decision based on incomplete information.

13. **Q:** Can customers book directly, or does our team approve requests?
   **A:** That depends on your scheduling system and operating rules. Some businesses suit direct booking, while others need staff to review the job, availability, travel, or required skills first. The workflow should clearly distinguish a requested time from a confirmed appointment.

14. **Q:** Can it work with our existing calendar or scheduling software?
   **A:** Possibly. Compatibility depends on the systems, plans, and permissions involved, so it is checked when your project is scoped and tested before it is promised. A connection that passes along contact details may not also support live scheduling, dispatch, estimates, or job-status updates.

15. **Q:** How are urgent, sensitive, or unsupported requests handled?
   **A:** They follow an approved escalation flow, not an improvised answer. Urgent requests can be routed to an agreed contact, and immediate danger or a medical emergency calls for an instruction to contact the appropriate emergency service. Technical diagnoses, safety concerns, and exceptions to company policy go to a person.

#### Group: Following Up and Keeping Customers Informed

16. **Q:** Which follow-up messages can be automated?
   **A:** Depending on the agreed scope, a workflow can acknowledge a new inquiry, remind a customer about a confirmed appointment, follow up on an estimate, or share an approved next-step message. Each workflow needs a clear trigger, approved wording, and rules for when it stops.

17. **Q:** Can we approve the wording and timing before launch?
   **A:** Message approval should be part of the agreed project process. Your team confirms that the wording, timing, service details, and next steps reflect how your business works. Messages should not promise availability, pricing, or response times your team has not authorized.

18. **Q:** Does automation stop when someone replies, books, or opts out?
   **A:** It should. A well-designed workflow pauses, branches, or stops after a reply, a booking, a cancellation, or an opt-out, and routes replies to the right person. Those scenarios are tested before launch so follow-up does not continue after a customer's status changes.

19. **Q:** Can different customers receive different follow-up sequences?
   **A:** Yes, a workflow can branch by the customer's stage, such as a new inquiry, a sent estimate, or a booked appointment. Which branches are used depends on the systems connected and the rules approved for your project.

20. **Q:** How are permission, communication preferences, and opt-outs handled?
   **A:** Consent rules depend on the message purpose, the technology, and the jurisdiction. A responsible setup looks for documented permission, honors opt-outs across workflows, and does not treat a phone number or an inbound call as blanket permission for marketing texts. Commercial email has its own sender and opt-out requirements. Your counsel should review the consent language.

#### Group: Gathering Feedback and Maintaining Customer Relationships

21. **Q:** How can we request honest customer feedback and reviews?
   **A:** Ask eligible customers for honest feedback after an agreed completion event, without rewards, pressure, or prescribed wording. Follow each platform's rules, because they differ: Google permits neutral requests, while Yelp says not to ask. Incentives for reviews are not allowed.
   - **[Medium]** Duplication: See duplicate group D9 (/faq hub repeats service-page answers).

22. **Q:** Which customers receive review requests?
   **A:** The project defines the trigger and the audience, such as customers with a completed job. The rules must be neutral. Google prohibits selectively soliciting positive reviews, so a satisfaction screen should not decide who receives the review link.

23. **Q:** Can our team approve review responses?
   **A:** Yes. We agree who drafts, who approves, and who publishes replies before anything goes out. AI can produce a draft, but a person should check accuracy, tone, and privacy before it is published.

24. **Q:** How are complaints or sensitive feedback routed to a person?
   **A:** The workflow routes them to a named person who is responsible for reviewing and responding. Automation can organize the handoff, but it should not stand in for a thoughtful response to a disputed job, a safety concern, or a private customer issue. Private details should not be disclosed in a public reply.

25. **Q:** Can we stay in touch with past customers when appropriate and permitted?
   **A:** Potentially, after checking permissions, suppression records, data quality, and the relevance of the message. An old customer record is not automatic permission for every promotional text or email.
   - **[Medium]** Duplication: See duplicate group D10 (Reply handling, follow-up speed, past customers).

#### Group: Working With OKIKO HIGH

26. **Q:** What does OKIKO HIGH do?
   **A:** OKIKO HIGH combines digital marketing strategy with automation to help businesses connect with customers and simplify marketing and customer-management tasks.
   - **[Medium]** Duplication: See duplicate group D4 (What OKIKO HIGH does / which services).

27. **Q:** What types of businesses does OKIKO HIGH work with?
   **A:** OKIKO HIGH currently serves four kinds of business: home-service businesses, such as HVAC, plumbing, landscaping, general contracting, and cleaning companies; professional services firms; property management and real estate businesses; and healthcare, dental, and med spa practices. Each has its own industry page, and those pages describe a proposed approach, not client work or results. Other industries are evaluated separately.
   - **[Medium]** Duplication: See duplicate group D5 (Who / which industries OKIKO HIGH serves).

28. **Q:** Which service should I start with, and do I need all six?
   **A:** You do not need all six. Start where customers drop off today: Google Business Profile management if they cannot find you, website design if they do not contact you, the AI receptionist if calls are missed, text and email automation if inquiries go quiet, and review management if reviews are thin. One clearly defined workflow is a sound starting point.
   - **[Low]** Style: Two questions in one ('Which service should I start with, and do I need all six?').
   - **[Medium]** Duplication: See duplicate group D7 (Which service should I start with).

29. **Q:** Does OKIKO HIGH work with businesses outside one city or country?
   **A:** OKIKO HIGH states that it serves clients worldwide. Availability for a particular project depends on the systems, communication channels, languages, and legal requirements involved, such as which consent rules apply to calls and texts.
   - **[Medium]** Duplication: See duplicate group D1 (Worldwide / outside one country).

30. **Q:** How much do OKIKO HIGH services cost?
   **A:** OKIKO HIGH does not publish prices on this site. Cost depends on scope, such as the number of pages, locations, and platforms involved, which integrations are needed, and any software or usage charges. Request a scoped quote through the contact page.
   - **[Medium]** Duplication: See duplicate group D3 (Pricing).

31. **Q:** How long does setup take?
   **A:** A timeline is set after the scope, system access, integrations, content approvals, and testing needs are understood. No standard setup time has been confirmed, so none is published.

32. **Q:** How does getting started work, and what information is needed?
   **A:** Use the contact page to describe the customer-management task you want to improve, how your team handles it today, the website, phone, calendar, and software involved, who approves customer communication, and what should happen when a request needs a person. We use that to define a written scope before any work begins.

33. **Q:** What support does OKIKO HIGH provide after launch?
   **A:** Ongoing support is defined in your written scope. Support hours and response commitments have not been confirmed or published, so confirm them in the scope before you agree to work.

34. **Q:** Who owns our websites, accounts, phone numbers, and data?
   **A:** Ownership depends on the agreement and the platform. OKIKO HIGH's ownership terms have not been finalized or published yet, so confirm domain and account control, content and code rights, phone number ownership, and data export before you agree to a project.

35. **Q:** How is customer and business information handled?
   **A:** A workflow should collect only what it needs, and access, retention, and vendor data use are reviewed when the project is scoped. Sensitive details may need a separate secure channel. See the Privacy Policy for how information sent through this site is used.

36. **Q:** What happens if I stop working with OKIKO HIGH?
   **A:** Exit terms have not been finalized or published yet. Before agreeing to work, confirm what happens to your website, accounts, and phone numbers, who keeps access to each, and what data can be exported.

37. **Q:** Can OKIKO HIGH guarantee rankings, leads, or review removal?
   **A:** No. Google and other platforms control search results and decide whether a review is removed, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. Each service page states what it does and does not include.
   - **[Medium]** Duplication: See duplicate group D2 (Guarantee rankings / leads / review removal).

### /contact

- **Page type:** Core
- **Page file:** `src/app/contact/page.tsx`
- **FAQ content file:** `src/content/contact.ts (two answers change with NEXT_PUBLIC_CONTACT_FORM_ENDPOINT; production variant shown)`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** How can I contact OKIKO HIGH?
   **A:** You can use the contact form on this page, call (469) 421-9832, or email info@okikohigh.com. The phone number and email are listed under Ways to Reach Us.
   - **[Medium]** Schema / accuracy: Answer text is build-dependent. Without NEXT_PUBLIC_CONTACT_FORM_ENDPOINT it says 'There is no contact form on the site at this time.' (what the local out/ build and any preview build contain); with it, it says the form exists. Visible text and JSON-LD match in both variants. check:policy only guards the Cloudflare production build. The same switch changes FAQ 4.

2. **Q:** Does OKIKO HIGH work with clients outside the US?
   **A:** Yes. OKIKO HIGH states that it serves clients worldwide. Call or email with your business details to talk through your situation.
   - **[Medium]** Duplication: See duplicate group D1 (Worldwide / outside one country).

3. **Q:** What should I include in my first message to OKIKO HIGH?
   **A:** Include your type of business, the service you are considering, and the problem you want to fix. If you are not sure which service fits, describe what is not working and we can help you sort it out.

4. **Q:** Should I send sensitive or health information when I contact OKIKO HIGH?
   **A:** No. Do not send card numbers, passwords, sensitive personal information, or health or patient information by phone, email, or the contact form. A short description of your business and goals is enough to start.
   - **[Medium]** Duplication: See duplicate group D8 (Should I send sensitive information).

5. **Q:** Which services can I ask OKIKO HIGH about?
   **A:** You can ask about website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page with details.
   - **[Medium]** Duplication: See duplicate group D4 (What OKIKO HIGH does / which services).

6. **Q:** Which industries does OKIKO HIGH serve?
   **A:** OKIKO HIGH serves home services, professional services, property management and real estate, and healthcare, dental and med spa businesses. Each industry has its own page that shows how the services apply.
   - **[Medium]** Duplication: See duplicate group D5 (Who / which industries OKIKO HIGH serves).

### /privacy-policy

- **Page type:** Legal
- **Page file:** `src/app/privacy-policy/page.tsx`
- **FAQ content file:** `src/content/privacy-policy.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** Does the OKIKO HIGH website use cookies or tracking tools?
   **A:** At the time of this update, the OKIKO HIGH website does not use analytics tools, advertising pixels, or advertising cookies. Our hosting provider may still process standard technical information, such as an IP address, to deliver the site and keep it secure. If we add analytics or advertising tools, we will update this policy and, where the law requires it, ask for your consent first.

2. **Q:** What information does OKIKO HIGH collect when I call, email, or use the contact form?
   **A:** We collect what you choose to share, usually your name, contact details, business information, and what you want help with. The contact form asks for the services you are interested in, your first name, and your phone number, and lets you add your last name, email address, preferred way to be reached, and additional information. Form submissions are saved in our CRM software, GoHighLevel, and we use them to respond to your inquiry and manage our relationship with you. You can also call (469) 421-9832 or email info@okikohigh.com.

3. **Q:** Does contacting OKIKO HIGH sign me up for marketing texts or emails?
   **A:** No. We use the details you send, by phone, email, or the contact form, to respond to your inquiry. Contacting us, including by sending the contact form, does not by itself give us permission to send marketing texts or make automated marketing calls. If we send marketing messages in the future, we will follow the rules that apply and include a way to opt out.

4. **Q:** How does OKIKO HIGH handle my customers' information when it works for my business?
   **A:** We act according to your instructions and our agreement with you. Your business decides why that information is collected, and your own privacy notice explains how you use it. If we receive a request about information we process for you, we coordinate with you as appropriate.

5. **Q:** Which software platforms handle information for OKIKO HIGH services?
   **A:** We use GoHighLevel, a CRM and marketing software platform, to store contact form submissions. Some of our services are also delivered with third-party software platforms, including GoHighLevel and the tools that connect to it. Information handled through a service may be processed by the platform and its own providers under their terms. Which providers apply depends on the service and the scope, so ask us if you want to know for your situation.

6. **Q:** Should I send health, payment, or other sensitive information when I contact OKIKO HIGH?
   **A:** No. Please do not send card numbers, passwords, government ID numbers, health or patient information, or confidential client, case, or financial details by phone, email, text, or the contact form. A short description of your business and goals is enough to start.
   - **[Medium]** Duplication: See duplicate group D8 (Should I send sensitive information).

7. **Q:** How do I ask OKIKO HIGH to access, correct, or delete my information?
   **A:** Email info@okikohigh.com or call (469) 421-9832 and describe your request. Depending on where you live, you may have rights to access, correct, or delete your information, or to limit how it is used. We may need to confirm your identity first, and we respond as applicable law requires. If your request concerns information we handle for one of our clients, we may need to coordinate with that client.

### /terms-of-service

- **Page type:** Legal
- **Page file:** `src/app/terms-of-service/page.tsx`
- **FAQ content file:** `src/content/terms-of-service.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** yes, matches visible text

1. **Q:** Do these terms apply if I hire OKIKO HIGH?
   **A:** They set general expectations, and your project is defined by the written scope we agree with you. If a signed agreement for your project says something different from these terms, the signed agreement controls for that project.
   - **[Low]** Accuracy: Legal-agreement wording ('the signed agreement controls'). docs/02 describes the Terms as a draft needing owner and legal review; confirm review status.

2. **Q:** Does OKIKO HIGH publish prices or payment terms?
   **A:** No. OKIKO HIGH does not publish prices for its services on this site, and payment terms are not stated here either. Cost depends on scope, such as the number of pages, locations, and platforms involved, which integrations are needed, and who approves and publishes content. Price and payment terms are confirmed in writing when your project is scoped.
   - **[Medium]** Duplication: See duplicate group D3 (Pricing).

3. **Q:** Who owns my website, accounts, and customer records?
   **A:** OKIKO HIGH has not published ownership or exit terms on this site. Who owns your website, accounts, content, and records, and what can be exported if you leave, are settled in writing when the project is scoped. Ask before you agree to a project.

4. **Q:** Can I cancel a service, and what happens then?
   **A:** Cancellation and exit terms are not stated on this website. They are confirmed in writing when your project is scoped, so ask what happens to your accounts, content, and records if you stop.

5. **Q:** Can OKIKO HIGH guarantee rankings, leads, bookings, or review removal?
   **A:** No. Google and other platforms control search results and decide whether a review is removed, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. No provider can responsibly guarantee them. Each service page states what it does and does not include.
   - **[Medium]** Duplication: See duplicate group D2 (Guarantee rankings / leads / review removal).

6. **Q:** Who is responsible for permission to text, email, or call my customers?
   **A:** You are. Messages sent through our services go out under your instructions and the permissions you have collected. We build workflows around consent and opt-outs, and an opt-out stops messages across every workflow, but rules differ by country, state, and industry, so they are checked when your project is scoped.
   - **[Medium]** Accuracy: 'an opt-out stops messages across every workflow' is a product-behavior statement presented as fact. Tested integrations and workflow behavior are TBD in docs/01.

7. **Q:** Does OKIKO HIGH give legal, medical, or other professional advice?
   **A:** No. The website is general information about our services. Pages that mention laws, such as texting, recording, fair housing, or health privacy rules, are a starting point and not legal advice. Please check what applies to you with a qualified adviser.

8. **Q:** Are the AI chatbot and AI receptionist emergency services or professional advisers?
   **A:** No. They answer from information you approve, they can be wrong or incomplete, and neither is an emergency service. Callers should be told they are speaking with AI, and an agreed route to a person handles urgent requests and anything the AI should not handle.

9. **Q:** What if Google or another platform changes its rules or limits my account?
   **A:** Google and other platforms set and enforce their own rules and can change them. OKIKO HIGH does not control those decisions, so we cannot promise that a profile will not be limited, that a review will be removed, or that a platform feature will stay available.

10. **Q:** Can I send sensitive information when I contact OKIKO HIGH?
   **A:** No. Please do not send card numbers, passwords, government ID numbers, health or patient information, or confidential client, case, or financial details by phone, email, or text. A short description of your business and goals is enough to start. If a project will involve sensitive information, the written scope says how it will be handled first.
   - **[Medium]** Duplication: See duplicate group D8 (Should I send sensitive information).

11. **Q:** Does OKIKO HIGH serve clients worldwide, and do local laws still apply?
   **A:** OKIKO HIGH states that it serves clients worldwide. Whether a particular service can be offered still depends on your country, the platforms and features available there, and our capacity, and it is confirmed when your project is scoped. Local laws and platform rules also still apply to you and your customers, for example which consent rules cover calls and texts.
   - **[Medium]** Duplication: See duplicate group D1 (Worldwide / outside one country).

12. **Q:** How will I know if these terms change?
   **A:** We update this page and the date near the top shows when it was last updated. We may change these terms as our services or the law change. A signed agreement for your project is not rewritten by a change to this page.

### /404 (not-found)

- **Page type:** Utility
- **Page file:** `src/app/not-found.tsx`
- **FAQ content file:** `src/content/not-found.ts`
- **FAQ visible:** yes (collapsed `<details>`)
- **FAQPage JSON-LD:** none

1. **Q:** Why am I seeing a Page not found message?
   **A:** The address you opened does not match a page on this website. The link may be outdated, or the web address may contain a typo. Checking the address for typos, or starting from the homepage, is the quickest way to find what you were looking for.
   - **[Low]** Answer quality: A FAQ on the 404 page is allowed (utility page, exempt), but only items 1-2 relate to a missing page (see D13).

2. **Q:** Has the page I was looking for been removed?
   **A:** This page cannot tell. A missing page can mean the link is old, the address was mistyped, or the page is no longer on the site. The homepage, the services pages, and the industries pages below are the best places to continue from.

3. **Q:** What does OKIKO HIGH do?
   **A:** OKIKO HIGH is a digital marketing agency with six service areas: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page explaining how the work is set up and where its limits are.
   - **[Medium]** Duplication: See duplicate group D4 (What OKIKO HIGH does / which services).
   - **[Medium]** Duplication: See duplicate group D13 (404 page FAQ copies hub content).

4. **Q:** Which service should I look at first?
   **A:** Start where customers drop off today. If they cannot find you on Google, look at Google Business Profile management. If they find you but do not contact you, look at website design. If calls are missed, look at the AI receptionist. If inquiries go quiet after first contact, look at text and email automation. If reviews are thin or unanswered, look at review management.
   - **[Medium]** Duplication: See duplicate group D7 (Which service should I start with).
   - **[Medium]** Duplication: See duplicate group D13 (404 page FAQ copies hub content).

5. **Q:** Which kinds of businesses does OKIKO HIGH work with?
   **A:** OKIKO HIGH currently serves four kinds of business, each with its own industry page: home services, professional services, property management and real estate, and healthcare, dental and med spa.
   - **[Medium]** Duplication: See duplicate group D5 (Who / which industries OKIKO HIGH serves).
   - **[Medium]** Duplication: See duplicate group D13 (404 page FAQ copies hub content).

6. **Q:** How do I reach OKIKO HIGH about a broken link or a question?
   **A:** Use the contact page. Describe your business, how customers reach you today, and what you want to improve, or tell us which link did not work. Scope for any service is confirmed with you before work begins.
   - **[Medium]** Duplication: See duplicate group D6 (How do I get started).
   - **[Medium]** Duplication: See duplicate group D13 (404 page FAQ copies hub content).

7. **Q:** Does OKIKO HIGH work with businesses outside one city or country?
   **A:** OKIKO HIGH states that it serves clients worldwide. How a service works can still depend on your region, for example which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.
   - **[Medium]** Duplication: See duplicate group D1 (Worldwide / outside one country).
   - **[Medium]** Duplication: See duplicate group D13 (404 page FAQ copies hub content).

8. **Q:** How much do OKIKO HIGH's services cost?
   **A:** OKIKO HIGH does not publish prices for these services on this site. Cost depends on scope, such as the number of pages, locations, and platforms involved, which integrations are needed, and who approves and publishes content. Request a scoped quote through the contact page.
   - **[Medium]** Duplication: See duplicate group D3 (Pricing).
   - **[Medium]** Duplication: See duplicate group D13 (404 page FAQ copies hub content).

### /blog

- **Page type:** Placeholder hub (noindex)
- **Page file:** `src/app/blog/page.tsx`
- **FAQ content file:** `src/data/blog.ts (empty)`
- **FAQ visible:** no FAQ section
- **FAQPage JSON-LD:** none

No FAQ on this page. Exempt (noindex placeholder).

### /case-studies

- **Page type:** Placeholder (noindex)
- **Page file:** `src/app/case-studies/page.tsx`
- **FAQ content file:** `src/data/placeholder-pages.ts`
- **FAQ visible:** no FAQ section
- **FAQPage JSON-LD:** none

No FAQ on this page. Exempt (noindex placeholder).

### /resources

- **Page type:** Placeholder (noindex)
- **Page file:** `src/app/resources/page.tsx`
- **FAQ content file:** `src/data/placeholder-pages.ts`
- **FAQ visible:** no FAQ section
- **FAQPage JSON-LD:** none

No FAQ on this page. Exempt (noindex placeholder).

## 4. Issues index

Sorted by severity, then page. 'Ref' is `page#item` (item number as in section 3) or a site-wide note ID. Site-wide notes S1-S4 are listed here only.

### High (3)

| Page | Ref | Category | Issue |
|---|---|---|---|
| `/industries/healthcare` | healthcare#4 | Compliance / GoHighLevel | "Is GoHighLevel HIPAA compliant?" - Question and answer discuss HIPAA, BAAs and 'GoHighLevel' by name. docs/03 says HIPAA, TCPA, recording and AI-disclosure copy 'needs legal review before publication'; no review is recorded in the docs. docs/01 does not say whether OKIKO HIGH offers the HIPAA package or signs BAAs. Naming GoHighLevel in a visitor question also sits against the recent 'Reword GoHighLevel references' work. It does not imply a partnership. |
| `/industries/home-services/ai-receptionist` | combo-ai#4 | Compliance | "Do I have to tell callers they are talking to an AI?" - States specific state-law positions (Maine, Utah) and 'No federal rule was found' as fact. No legal review is recorded. 'was found' also exposes research process. I could not verify the statutes in this audit. |
| `/industries/home-services/ai-receptionist` | combo-ai#5 | Compliance | "Is it legal to record calls an AI receptionist answers?" - Lists the all-party-consent states (California, Florida, Maryland, Massachusetts, New Hampshire, Pennsylvania, Washington) as fact, with 'a few others have qualifications'. No legal review is recorded; not verified here. The 'not legal advice' line helps but does not remove the accuracy risk. |

### Medium (75)

| Page | Ref | Category | Issue |
|---|---|---|---|
| `/` | home#1 | Duplication | "What does OKIKO HIGH Digital Marketing Agency do?" - See duplicate group D4 (What OKIKO HIGH does / which services). |
| `/` | home#2 | Duplication | "Who does OKIKO HIGH work with?" - See duplicate group D5 (Who / which industries OKIKO HIGH serves). |
| `/` | home#3 | Duplication | "Does OKIKO HIGH work with businesses outside the United States?" - See duplicate group D1 (Worldwide / outside one country). |
| `/` | home#6 | Duplication | "Does OKIKO HIGH publish prices?" - See duplicate group D3 (Pricing). |
| `/` | home#7 | Duplication | "Does OKIKO HIGH guarantee rankings or leads?" - See duplicate group D2 (Guarantee rankings / leads / review removal). |
| `/` | home#8 | Duplication | "How do I get started with OKIKO HIGH?" - See duplicate group D6 (How do I get started). |
| `/about` | about#1 | Duplication | "What is OKIKO HIGH Digital Marketing Agency?" - See duplicate group D4 (What OKIKO HIGH does / which services). |
| `/about` | about#2 | Duplication | "What services does OKIKO HIGH offer?" - See duplicate group D4 (What OKIKO HIGH does / which services). |
| `/about` | about#5 | Duplication | "Who does OKIKO HIGH work with?" - See duplicate group D5 (Who / which industries OKIKO HIGH serves). |
| `/about` | about#6 | Duplication | "Does OKIKO HIGH work with clients outside the United States?" - See duplicate group D1 (Worldwide / outside one country). |
| `/about` | about#9 | Duplication | "Does OKIKO HIGH guarantee search rankings or results?" - See duplicate group D2 (Guarantee rankings / leads / review removal). |
| `/about` | about#10 | Duplication | "How do I get started with OKIKO HIGH?" - See duplicate group D6 (How do I get started). |
| `/services` | services#1 | Duplication | "What services does OKIKO HIGH cover?" - See duplicate group D4 (What OKIKO HIGH does / which services). |
| `/services` | services#2 | Duplication | "Which service should I start with?" - See duplicate group D7 (Which service should I start with). |
| `/services` | services#6 | Duplication | "How much do OKIKO HIGH's services cost?" - See duplicate group D3 (Pricing). |
| `/services` | services#7 | Duplication | "Can OKIKO HIGH guarantee rankings, leads, or review removal?" - See duplicate group D2 (Guarantee rankings / leads / review removal). |
| `/services` | services#9 | Duplication | "Does OKIKO HIGH work with businesses outside one city or country?" - See duplicate group D1 (Worldwide / outside one country). |
| `/services` | services#10 | Duplication | "What kinds of businesses are these services for?" - See duplicate group D5 (Who / which industries OKIKO HIGH serves). |
| `/services` | services#11 | Duplication | "How do I get started?" - See duplicate group D6 (How do I get started). |
| `/services/website-design` | website-design#1 | Accuracy / TBD | "How much should a business website cost?" - Publishes a third-party dollar range ($4,000-$15,000) while OKIKO HIGH pricing is TBD in docs/01. It is attributed and disclaimed ('not an OKIKO HIGH price') but still anchors price expectations. The source ('GruffyGoat' vendor guide, 'updated September 2026') was not verified here. |
| `/services/website-design` | website-design#2 | Duplication | "Should I redesign my website or build a new one?" - See duplicate group D9 (/faq hub repeats service-page answers). |
| `/services/google-business-profile-optimization` | gbp#1 | Duplication | "What does Google Business Profile management include?" - See duplicate group D9 (/faq hub repeats service-page answers). |
| `/services/google-business-profile-optimization` | gbp#5 | Accuracy / TBD | "Is automating Google Business Profile posts safe?" - docs/01 lists 'Google Business Profile automation' as TBD. The question frames automated GBP posting without saying whether OKIKO HIGH offers it. Confirm with the owner or reword as a general question. |
| `/services/google-business-profile-optimization` | gbp#6 | Answer quality | "Do regular posts improve local rankings?" - 'The research did not establish...' exposes internal research process to the visitor and implies research the site does not show. |
| `/services/reputation-management` | reputation#1 | Duplication | "How do I get more Google reviews without breaking the rules?" - See duplicate group D9 (/faq hub repeats service-page answers). |
| `/services/reputation-management` | reputation#8 | Answer quality | "Is SMS or email better for review requests?" - 'was verified in our research' is internal process language and an unsupported claim about research performed. Source label cites HighLevel documentation (see S4). |
| `/services/sms-email-automation` | sms#4 | Duplication | "How fast should I follow up with a new lead?" - See duplicate group D10 (Reply handling, follow-up speed, past customers). |
| `/services/sms-email-automation` | sms#8 | Duplication | "What happens when a customer replies?" - See duplicate group D10 (Reply handling, follow-up speed, past customers). |
| `/services/sms-email-automation` | sms#10 | Duplication | "Can I send reactivation messages to former customers?" - See duplicate group D10 (Reply handling, follow-up speed, past customers). |
| `/industries` | industries#1 | Duplication | "Which industries does OKIKO HIGH work with?" - See duplicate group D5 (Who / which industries OKIKO HIGH serves). |
| `/industries` | industries#2 | Accuracy | "Which businesses are included in each industry?" - 'firms of about 1 to 25 people' and 'practices of about 1 to 10 providers' are not in docs/01 (the 1-25 range appears only in the docs/03 brief). Confirm before keeping them as stated audience definitions. |
| `/industries` | industries#6 | Duplication | "Does OKIKO HIGH work with businesses outside one city or country?" - See duplicate group D1 (Worldwide / outside one country). |
| `/industries` | industries#8 | Duplication | "How much do these services cost?" - See duplicate group D3 (Pricing). |
| `/industries` | industries#9 | Duplication | "Can OKIKO HIGH guarantee rankings, leads, or review outcomes?" - See duplicate group D2 (Guarantee rankings / leads / review removal). |
| `/industries/home-services` | home-services#3 | Duplication | "How quickly should we follow up with a new inquiry?" - See duplicate group D10 (Reply handling, follow-up speed, past customers). |
| `/industries/home-services` | home-services#5 | Duplication | "What happens when a customer replies?" - See duplicate group D10 (Reply handling, follow-up speed, past customers). |
| `/industries/home-services` | home-services#8 | Duplication | "Can we reconnect with past customers?" - See duplicate group D10 (Reply handling, follow-up speed, past customers). |
| `/industries/professional-services` | professional-services#1 | Accuracy | "Which professional firms is this page for?" - Lists bookkeeping, HR, insurance, architecture and engineering firms. docs/01 names 'law, accounting, consulting, financial advice, and similar firms'; the extra professions appear only in the docs/03 brief. The answer correctly disclaims experience, but confirm the list as approved. |
| `/industries/professional-services` | professional-services#10 | TBD leakage | "What does support from OKIKO HIGH cost?" - Visitor-facing text reads 'OKIKO HIGH's pricing model is TBD.' The internal placeholder is published verbatim. Other pages say 'does not publish prices'. |
| `/industries/home-services/website-design` | combo-web#5 | Schema | "Will FAQ markup give me rich results?" - The answer says Google's documentation states FAQ rich results no longer appear in Search, yet this page and 19 others ship FAQPage JSON-LD (see S1). |
| `/industries/home-services/ai-receptionist` | combo-ai#6 | Compliance | "Can an AI receptionist text customers after a call?" - States TCPA timing (10 business days) and the FCC 2024 ruling as fact. Not verified here; no legal review recorded. |
| `/faq` | faq#2 | Duplication | "Do we need a new website, or can we improve the one we have?" - See duplicate group D9 (/faq hub repeats service-page answers). |
| `/faq` | faq#4 | Duplication | "What does Google Business Profile optimization include?" - See duplicate group D9 (/faq hub repeats service-page answers). |
| `/faq` | faq#21 | Duplication | "How can we request honest customer feedback and reviews?" - See duplicate group D9 (/faq hub repeats service-page answers). |
| `/faq` | faq#25 | Duplication | "Can we stay in touch with past customers when appropriate and permitted?" - See duplicate group D10 (Reply handling, follow-up speed, past customers). |
| `/faq` | faq#26 | Duplication | "What does OKIKO HIGH do?" - See duplicate group D4 (What OKIKO HIGH does / which services). |
| `/faq` | faq#27 | Duplication | "What types of businesses does OKIKO HIGH work with?" - See duplicate group D5 (Who / which industries OKIKO HIGH serves). |
| `/faq` | faq#28 | Duplication | "Which service should I start with, and do I need all six?" - See duplicate group D7 (Which service should I start with). |
| `/faq` | faq#29 | Duplication | "Does OKIKO HIGH work with businesses outside one city or country?" - See duplicate group D1 (Worldwide / outside one country). |
| `/faq` | faq#30 | Duplication | "How much do OKIKO HIGH services cost?" - See duplicate group D3 (Pricing). |
| `/faq` | faq#37 | Duplication | "Can OKIKO HIGH guarantee rankings, leads, or review removal?" - See duplicate group D2 (Guarantee rankings / leads / review removal). |
| `/contact` | contact#1 | Schema / accuracy | "How can I contact OKIKO HIGH?" - Answer text is build-dependent. Without NEXT_PUBLIC_CONTACT_FORM_ENDPOINT it says 'There is no contact form on the site at this time.' (what the local out/ build and any preview build contain); with it, it says the form exists. Visible text and JSON-LD match in both variants. check:policy only guards the Cloudflare production build. The same switch changes FAQ 4. |
| `/contact` | contact#2 | Duplication | "Does OKIKO HIGH work with clients outside the US?" - See duplicate group D1 (Worldwide / outside one country). |
| `/contact` | contact#4 | Duplication | "Should I send sensitive or health information when I contact OKIKO HIGH?" - See duplicate group D8 (Should I send sensitive information). |
| `/contact` | contact#5 | Duplication | "Which services can I ask OKIKO HIGH about?" - See duplicate group D4 (What OKIKO HIGH does / which services). |
| `/contact` | contact#6 | Duplication | "Which industries does OKIKO HIGH serve?" - See duplicate group D5 (Who / which industries OKIKO HIGH serves). |
| `/privacy-policy` | privacy#6 | Duplication | "Should I send health, payment, or other sensitive information when I contact OKIKO HIGH?" - See duplicate group D8 (Should I send sensitive information). |
| `/terms-of-service` | terms#2 | Duplication | "Does OKIKO HIGH publish prices or payment terms?" - See duplicate group D3 (Pricing). |
| `/terms-of-service` | terms#5 | Duplication | "Can OKIKO HIGH guarantee rankings, leads, bookings, or review removal?" - See duplicate group D2 (Guarantee rankings / leads / review removal). |
| `/terms-of-service` | terms#6 | Accuracy | "Who is responsible for permission to text, email, or call my customers?" - 'an opt-out stops messages across every workflow' is a product-behavior statement presented as fact. Tested integrations and workflow behavior are TBD in docs/01. |
| `/terms-of-service` | terms#10 | Duplication | "Can I send sensitive information when I contact OKIKO HIGH?" - See duplicate group D8 (Should I send sensitive information). |
| `/terms-of-service` | terms#11 | Duplication | "Does OKIKO HIGH serve clients worldwide, and do local laws still apply?" - See duplicate group D1 (Worldwide / outside one country). |
| `/404 (not-found)` | notfound#3 | Duplication | "What does OKIKO HIGH do?" - See duplicate group D4 (What OKIKO HIGH does / which services). |
| `/404 (not-found)` | notfound#3 | Duplication | "What does OKIKO HIGH do?" - See duplicate group D13 (404 page FAQ copies hub content). |
| `/404 (not-found)` | notfound#4 | Duplication | "Which service should I look at first?" - See duplicate group D7 (Which service should I start with). |
| `/404 (not-found)` | notfound#4 | Duplication | "Which service should I look at first?" - See duplicate group D13 (404 page FAQ copies hub content). |
| `/404 (not-found)` | notfound#5 | Duplication | "Which kinds of businesses does OKIKO HIGH work with?" - See duplicate group D5 (Who / which industries OKIKO HIGH serves). |
| `/404 (not-found)` | notfound#5 | Duplication | "Which kinds of businesses does OKIKO HIGH work with?" - See duplicate group D13 (404 page FAQ copies hub content). |
| `/404 (not-found)` | notfound#6 | Duplication | "How do I reach OKIKO HIGH about a broken link or a question?" - See duplicate group D6 (How do I get started). |
| `/404 (not-found)` | notfound#6 | Duplication | "How do I reach OKIKO HIGH about a broken link or a question?" - See duplicate group D13 (404 page FAQ copies hub content). |
| `/404 (not-found)` | notfound#7 | Duplication | "Does OKIKO HIGH work with businesses outside one city or country?" - See duplicate group D1 (Worldwide / outside one country). |
| `/404 (not-found)` | notfound#7 | Duplication | "Does OKIKO HIGH work with businesses outside one city or country?" - See duplicate group D13 (404 page FAQ copies hub content). |
| `/404 (not-found)` | notfound#8 | Duplication | "How much do OKIKO HIGH's services cost?" - See duplicate group D3 (Pricing). |
| `/404 (not-found)` | notfound#8 | Duplication | "How much do OKIKO HIGH's services cost?" - See duplicate group D13 (404 page FAQ copies hub content). |
| Site-wide | S1 | Schema | FAQPage JSON-LD is on all 20 indexable FAQ pages, including the privacy policy and terms. It is accurate (see coverage table), but the site's own combo FAQ states Google no longer shows FAQ rich results, and docs/04 says not to add FAQ schema solely to pursue a search feature. docs/07 does call for matching markup, so this is a decision for the owner and not a defect. |

### Low (31)

| Page | Ref | Category | Issue |
|---|---|---|---|
| `/` | home#1 | Accuracy | "What does OKIKO HIGH Digital Marketing Agency do?" - 'for local and service-based businesses': docs/01 states worldwide coverage and does not call the audience 'local'. Confirm wording (same phrase in services#10). |
| `/about` | about#4 | Duplication | "Can OKIKO HIGH work with the website and software I already use?" - See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)). |
| `/about` | about#7 | Answer quality | "Who is behind OKIKO HIGH?" - Does not answer 'Who is behind OKIKO HIGH?'; it explains the site does not feature profiles. Consistent with docs/01 ('None planned'), but the question promises information the answer withholds. Consider rewording the question. |
| `/services` | services#5 | Duplication | "Can OKIKO HIGH work with my existing website or software?" - See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)). |
| `/services/website-design` | website-design#4 | Answer quality | "Who owns the website after it is built?" - The question asks who owns the site 'after it is built', but the answer is a generic checklist because OKIKO HIGH ownership terms are TBD. FAQ 9 has the same pattern. Honest, but it does not directly answer. |
| `/services/website-design` | website-design#8 | Scope | "Does my website need to be accessible?" - US-only legal framing (U.S. Department of Justice, ADA) on a site that states worldwide coverage. |
| `/services/google-business-profile-optimization` | gbp#7 | Accuracy / TBD | "My profile has been suspended. What should I do?" - docs/01 lists suspension assistance as TBD. The answer gives generic appeal steps and does not say whether OKIKO HIGH helps (FAQ 1 only says it 'may be separate'). Acceptable, but the question invites an offer the site has not confirmed. |
| `/services/ai-receptionist` | receptionist#2 | Duplication | "Can an AI receptionist book into my calendar?" - See duplicate group D12 (AI receptionist calendar booking). |
| `/services/ai-receptionist` | receptionist#8 | Accuracy / TBD | "Can it send a text after the call?" - 'Platforms support text actions and follow-up workflows' is a capability statement from vendor documentation; docs/01 lists tested integrations as TBD. Source label is 'HighLevel Support' (see S4). |
| `/services/ai-receptionist` | receptionist#9 | Accuracy / TBD | "Will I receive transcripts and call summaries?" - 'Platforms provide call logs with transcripts and summaries' is stated as fact from vendor documentation; tested integrations are TBD. |
| `/services/ai-receptionist` | receptionist#10 | Answer quality | "How much will OKIKO HIGH's AI receptionist service cost?" - 'Pricing and service packages have not been confirmed yet' implies packages exist and exposes internal status; other pages say 'does not publish prices'. Make the wording consistent. |
| `/services/sms-email-automation` | sms#6 | Scope | "What do I need to register to send texts?" - US-specific (10DLC) registration advice on a worldwide site. The answer says 'Other number types use different processes' but names no non-US process. |
| `/services/sms-email-automation` | sms#9 | Duplication | "Can I use my existing CRM and scheduling software?" - See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)). |
| `/industries/home-services` | home-services#2 | Duplication | "Do I need to replace my existing scheduling or CRM software?" - See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)). |
| `/industries/home-services` | home-services#11 | Style | "What does it cost, and what happens if I leave?" - Two questions in one ('What does it cost, and what happens if I leave?'), against the one-issue-per-question standard in docs/04. |
| `/industries/professional-services` | professional-services#2 | Answer quality | "Can marketing help a firm that grows through referrals?" - Relies on 2014 Hinge research for a current claim. |
| `/industries/professional-services` | professional-services#7 | Style | "Is AI required, and can it provide professional advice?" - Two questions in one ('Is AI required, and can it provide professional advice?'). |
| `/industries/property-management-real-estate` | property#4 | Duplication | "Do we need to replace our existing software?" - See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)). |
| `/industries/healthcare` | healthcare#3 | Duplication | "Would we need to replace our existing software?" - See duplicate group D11 ('Do we need to replace our existing software?' (keyword-swapped question, different answers)). |
| `/industries/healthcare` | healthcare#7 | Answer quality | "Can reminders reduce no-shows?" - Cites a 2013 Cochrane review for a current claim. |
| `/industries/home-services/website-design` | combo-web#7 | Scope | "Does my website need to follow accessibility standards?" - US lawsuits and US framing. Fine for a US-focused Home Services audience, but docs/01 does not say the audience is US-focused. |
| `/industries/home-services/ai-receptionist` | combo-ai#2 | Duplication | "Can an AI receptionist book estimates into my calendar?" - See duplicate group D12 (AI receptionist calendar booking). |
| `/industries/home-services/ai-receptionist` | combo-ai#7 | Answer quality | "How do I decide which calls are emergencies and which are scheduled?" - 'No sourced share of home-service calls falls into each group' exposes research process. |
| `/industries/home-services/ai-receptionist` | combo-ai#8 | Answer quality | "How many home-service calls come in after hours?" - Uses HVAC-only ServiceTitan data for a 'home-service calls' question and says so. 'Monday to Friday, 8 a.m. to 5 p.m.' is the vendor's measurement window, not OKIKO HIGH hours (not TBD leakage). |
| `/faq` | faq#9 | Answer quality | "Can we keep our existing business phone number?" - Answer opens with 'Possibly.' before naming the subject; docs/04 asks for independently understandable answers. |
| `/faq` | faq#28 | Style | "Which service should I start with, and do I need all six?" - Two questions in one ('Which service should I start with, and do I need all six?'). |
| `/terms-of-service` | terms#1 | Accuracy | "Do these terms apply if I hire OKIKO HIGH?" - Legal-agreement wording ('the signed agreement controls'). docs/02 describes the Terms as a draft needing owner and legal review; confirm review status. |
| `/404 (not-found)` | notfound#1 | Answer quality | "Why am I seeing a Page not found message?" - A FAQ on the 404 page is allowed (utility page, exempt), but only items 1-2 relate to a missing page (see D13). |
| Site-wide | S2 | Answer quality | FAQ counts run far above the docs/04 starting point of three to six: service pages carry 10-13, audience pages 10-12 and /faq carries 37. docs/04 sets no fixed count, but many answers repeat other pages (see Duplicates). |
| Site-wide | S3 | Scope | Many answers use US-only legal and platform frames (ADA, TCPA, state recording laws, 10DLC) while the site states worldwide coverage. Each is accurate as written, but few say the guidance is US-specific. |
| Site-wide | S4 | GoHighLevel | Source labels read 'HighLevel Support' or 'HighLevel documentation' on receptionist#2 and #5-#9, reputation#8, combo-ai#1-#2 and healthcare#4. Reviewed: none implies an official relationship or that OKIKO HIGH is a GoHighLevel product. privacy#2 and #5 disclose GoHighLevel as the CRM, consistent with docs/01 and the privacy policy. |

## 5. Duplicates

### D1 - Worldwide / outside one country (Medium)

Four pages carry the identical question 'Does OKIKO HIGH work with businesses outside one city or country?'; three of them (industries hub, services hub, 404) also carry a word-for-word identical answer. Four more pages ask the same thing in different words.

- `/industries` #6: "Does OKIKO HIGH work with businesses outside one city or country?"
- `/services` #9: "Does OKIKO HIGH work with businesses outside one city or country?"
- `/404 (not-found)` #7: "Does OKIKO HIGH work with businesses outside one city or country?"
- `/faq` #29: "Does OKIKO HIGH work with businesses outside one city or country?"
- `/` #3: "Does OKIKO HIGH work with businesses outside the United States?"
- `/about` #6: "Does OKIKO HIGH work with clients outside the United States?"
- `/contact` #2: "Does OKIKO HIGH work with clients outside the US?"
- `/terms-of-service` #11: "Does OKIKO HIGH serve clients worldwide, and do local laws still apply?"

### D2 - Guarantee rankings / leads / review removal (Medium)

Same answer under six slightly different question wordings: identical on home, about and industries hub; 72-87% word overlap on services hub, /faq and terms.

- `/` #7: "Does OKIKO HIGH guarantee rankings or leads?"
- `/about` #9: "Does OKIKO HIGH guarantee search rankings or results?"
- `/industries` #9: "Can OKIKO HIGH guarantee rankings, leads, or review outcomes?"
- `/services` #7: "Can OKIKO HIGH guarantee rankings, leads, or review removal?"
- `/faq` #37: "Can OKIKO HIGH guarantee rankings, leads, or review removal?"
- `/terms-of-service` #5: "Can OKIKO HIGH guarantee rankings, leads, bookings, or review removal?"

### D3 - Pricing (Medium)

'How much do OKIKO HIGH services cost?' appears on /faq, services hub and 404 with near-identical wording and 76-100% answer overlap, plus variants on industries hub, home and terms. Page-specific pricing questions on service and audience pages are not counted because their answers differ.

- `/faq` #30: "How much do OKIKO HIGH services cost?"
- `/services` #6: "How much do OKIKO HIGH's services cost?"
- `/404 (not-found)` #8: "How much do OKIKO HIGH's services cost?"
- `/industries` #8: "How much do these services cost?"
- `/` #6: "Does OKIKO HIGH publish prices?"
- `/terms-of-service` #2: "Does OKIKO HIGH publish prices or payment terms?"

### D4 - What OKIKO HIGH does / which services (Medium)

The six-service list is the answer on seven pages.

- `/` #1: "What does OKIKO HIGH Digital Marketing Agency do?"
- `/about` #1: "What is OKIKO HIGH Digital Marketing Agency?"
- `/about` #2: "What services does OKIKO HIGH offer?"
- `/services` #1: "What services does OKIKO HIGH cover?"
- `/404 (not-found)` #3: "What does OKIKO HIGH do?"
- `/faq` #26: "What does OKIKO HIGH do?"
- `/contact` #5: "Which services can I ask OKIKO HIGH about?"

### D5 - Who / which industries OKIKO HIGH serves (Medium)

The four-audience list is the answer on seven pages. 'Who does OKIKO HIGH work with?' is an exact question on home and about with 88% answer overlap.

- `/` #2: "Who does OKIKO HIGH work with?"
- `/about` #5: "Who does OKIKO HIGH work with?"
- `/industries` #1: "Which industries does OKIKO HIGH work with?"
- `/services` #10: "What kinds of businesses are these services for?"
- `/404 (not-found)` #5: "Which kinds of businesses does OKIKO HIGH work with?"
- `/faq` #27: "What types of businesses does OKIKO HIGH work with?"
- `/contact` #6: "Which industries does OKIKO HIGH serve?"

### D6 - How do I get started (Medium)

The home and services hub answers are word-for-word identical; about and 404 are variants.

- `/` #8: "How do I get started with OKIKO HIGH?"
- `/about` #10: "How do I get started with OKIKO HIGH?"
- `/services` #11: "How do I get started?"
- `/404 (not-found)` #6: "How do I reach OKIKO HIGH about a broken link or a question?"

### D7 - Which service should I start with (Medium)

The drop-off ladder (cannot find you -> GBP, no contact -> website, missed calls -> receptionist, quiet inquiries -> text and email, thin reviews -> review management) is repeated on services hub, /faq and 404.

- `/services` #2: "Which service should I start with?"
- `/faq` #28: "Which service should I start with, and do I need all six?"
- `/404 (not-found)` #4: "Which service should I look at first?"

### D8 - Should I send sensitive information (Medium)

Three variants of the same warning with 50-70% overlap.

- `/contact` #4: "Should I send sensitive or health information when I contact OKIKO HIGH?"
- `/privacy-policy` #6: "Should I send health, payment, or other sensitive information when I contact OKIKO HIGH?"
- `/terms-of-service` #10: "Can I send sensitive information when I contact OKIKO HIGH?"

### D9 - /faq hub repeats service-page answers (Medium)

The /faq page condenses service-page answers. Two are near-verbatim: faq#4 vs gbp#1 (97% overlap; question differs only by 'optimization' vs 'management') and faq#2 vs website-design#2 (68%). faq#21 vs reputation#1 is 61%.

- `/faq` #4: "What does Google Business Profile optimization include?"
- `/services/google-business-profile-optimization` #1: "What does Google Business Profile management include?"
- `/faq` #2: "Do we need a new website, or can we improve the one we have?"
- `/services/website-design` #2: "Should I redesign my website or build a new one?"
- `/faq` #21: "How can we request honest customer feedback and reviews?"
- `/services/reputation-management` #1: "How do I get more Google reviews without breaking the rules?"

### D10 - Reply handling, follow-up speed, past customers (Medium)

'What happens when a customer replies?' is an exact question on home-services and sms (61% answer overlap). Past-customer reactivation appears on home-services#8, sms#10 and faq#25 (67-84%). Follow-up speed on home-services#3 and sms#4 (50%).

- `/industries/home-services` #5: "What happens when a customer replies?"
- `/services/sms-email-automation` #8: "What happens when a customer replies?"
- `/industries/home-services` #8: "Can we reconnect with past customers?"
- `/services/sms-email-automation` #10: "Can I send reactivation messages to former customers?"
- `/faq` #25: "Can we stay in touch with past customers when appropriate and permitted?"
- `/industries/home-services` #3: "How quickly should we follow up with a new inquiry?"
- `/services/sms-email-automation` #4: "How fast should I follow up with a new lead?"

### D11 - 'Do we need to replace our existing software?' (keyword-swapped question, different answers) (Low)

Near-identical question across healthcare, home-services, property management, sms, services hub and about; the answers are largely different (6-10% overlap on the audience pages), so this is a template-question pattern and not duplicated content. Keep the answers distinct.

- `/industries/healthcare` #3: "Would we need to replace our existing software?"
- `/industries/home-services` #2: "Do I need to replace my existing scheduling or CRM software?"
- `/industries/property-management-real-estate` #4: "Do we need to replace our existing software?"
- `/services/sms-email-automation` #9: "Can I use my existing CRM and scheduling software?"
- `/services` #5: "Can OKIKO HIGH work with my existing website or software?"
- `/about` #4: "Can OKIKO HIGH work with the website and software I already use?"

### D12 - AI receptionist calendar booking (Low)

combo-ai#2 and receptionist#2 are the same question (80% question overlap, 24% answer overlap).

- `/industries/home-services/ai-receptionist` #2: "Can an AI receptionist book estimates into my calendar?"
- `/services/ai-receptionist` #2: "Can an AI receptionist book into my calendar?"

### D13 - 404 page FAQ copies hub content (Medium)

Six of the eight 404 FAQs copy or trim Q&As already on the services hub, industries hub, /faq or home (three are exact question matches). Only the first two concern the 404 itself.

- `/404 (not-found)` #3: "What does OKIKO HIGH do?"
- `/404 (not-found)` #4: "Which service should I look at first?"
- `/404 (not-found)` #5: "Which kinds of businesses does OKIKO HIGH work with?"
- `/404 (not-found)` #6: "How do I reach OKIKO HIGH about a broken link or a question?"
- `/404 (not-found)` #7: "Does OKIKO HIGH work with businesses outside one city or country?"
- `/404 (not-found)` #8: "How much do OKIKO HIGH's services cost?"

## 6. Open questions for the owner

1. **Professional Services scope.** May FAQs list bookkeeping, HR, insurance, architecture and engineering firms (professional-services#1), and the size ranges '1 to 25 people' and '1 to 10 providers' (industries#2)? docs/01 names only law, accounting, consulting and financial advice, and gives no sizes.
2. **Google Business Profile automation and suspension help.** Does OKIKO HIGH offer either? docs/01 marks both TBD. gbp#5 and gbp#7 currently answer generally without saying.
3. **HIPAA and BAAs.** Does OKIKO HIGH offer HighLevel's HIPAA package or sign BAAs for healthcare clients? Has counsel reviewed healthcare#4 (docs/03 says HIPAA copy needs legal review)?
4. **Legal review of state-law and federal-rule statements.** Maine and Utah AI-disclosure positions, the all-party-consent state list, TCPA timing and the FCC 2024 ruling (combo-ai#4-#6), and the Terms and Privacy FAQs. Is there a recorded review? docs/02 describes the Terms as a draft needing owner and legal review.
5. **Pricing, ownership, exit and support terms.** All TBD in docs/01. Keep the current 'not finalized or published' wording on some pages, or use the neutral 'does not publish prices; cost depends on scope' from the hubs everywhere? professional-services#10 currently prints 'TBD'.
6. **Third-party price range.** Keep the GruffyGoat $4,000-$15,000 figure in website-design#1? The source and its September 2026 update date were not verified here.
7. **Contact page answers.** Confirm production always builds with `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` set; preview and local builds say 'There is no contact form'. docs/04 also expects the Contact FAQ to cover response expectations and booking once confirmed; the booking URL, primary contact action and response time are still TBD, so no such FAQ exists.
8. **Analytics claim.** privacy#1 says there are no analytics tools or advertising cookies. I found none in the repo. Please confirm that Cloudflare Web Analytics or any dashboard-injected script is off.
9. **FAQPage markup.** Keep FAQPage JSON-LD on all 20 pages, including privacy and terms, given Google's stated rich-result change? (See S1.)
10. **404 page FAQ.** Keep eight FAQs on the 404 page, or trim to the two about the missing page? (See D13.)
11. **US framing.** Is the Home Services audience US-focused? If so, say so; if not, add jurisdiction qualifiers (S3).
12. **'Local' wording.** home#1 and services#10 say 'local and service-based businesses'. docs/01 states worldwide coverage. Keep?
13. **Not verified by me.** The statements (about#8, industries#7) that service and audience pages carry clearly labeled fictional examples; the form-field description in privacy#2 (spot-checked: service, first name and phone are required in `ContactForm.tsx`); all external statistics, laws and links.

## 7. Recommendations

Suggested only; nothing has been applied.

1. **Legal review first (High).** Hold healthcare#4 and combo-ai#4-#5 for counsel, or soften them to general statements with 'check your state' wording. Confirm the review status of the Terms and Privacy FAQs.
2. **Remove internal-process language (Medium/Low).** Reword gbp#6, reputation#8, combo-ai#4 and #7 to state the finding without 'our research' or 'was found'. Replace 'TBD' in professional-services#10. Align receptionist#10 and home-services#11 with the neutral pricing wording.
3. **Resolve unsupported audience facts (Medium).** Add the profession lists and size ranges to docs/01 after owner approval, or remove them from industries#2 and professional-services#1.
4. **Settle the TBD-adjacent services (Medium).** Confirm GBP automation and suspension help, then reword gbp#5 and gbp#7 or drop them, per docs/04 ('flag it for owner confirmation').
5. **Decide on the third-party price anchor (Medium)** in website-design#1, and the terms#6 claim that an opt-out stops messages across every workflow.
6. **Consolidate duplicated sitewide answers (Medium).** Keep one canonical wording each for worldwide, guarantees, pricing, get-started and who-we-serve, and write page-specific variants elsewhere (D1-D8). Trim the 404 FAQ to its first two items (D13). Have `/faq` link to service-page answers more and restate them less (D9).
7. **Make the contact answer build-independent (Medium).** For example, give preview builds the same endpoint, or extend `check:policy` to previews.
8. **Decide the FAQPage policy (Medium)** across indexable pages, and add US qualifiers where answers are US-only (Low).
9. **Low-priority clean-up.** Split two-part questions (faq#28, home-services#11, professional-services#7), refresh the 2013 and 2014 sources, and reword about#7 and faq#9.
