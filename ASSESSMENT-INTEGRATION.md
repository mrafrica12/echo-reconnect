# Business Assessment integration — September 30, 2026

Implemented locally; nothing deployed.

## Files

Modified:
- `src/app/page.tsx`: consultation-first hero, supporting calculator link, assessment card after “Why it matters” and before “What we build”, and homepage closing-band option.
- `src/components/Header.tsx`: Assessment in the existing shared navigation list, desktop navigation at Tailwind's `xl` breakpoint, 44px menu control, and scrollable mobile menu.
- `src/components/CtaBand.tsx`: optional assessment alternative beneath consultation, followed by the calculator link. Other pages keep their existing defaults.
- `src/lib/analytics.ts`: added `assessment_cta_click` to the existing event type.

Added:
- `src/components/AssessmentLink.tsx`: reusable standard anchor with attribution and the existing GA4 event helper.
- `src/lib/assessment.ts`: shared destination, allowed attribution parameters, and placement types.
- `ASSESSMENT-INTEGRATION.md`: this report.

Before editing, archived the original `src/` and `README.md` in `/private/tmp/echo-assessment-backup/before.tgz`. The original Git working tree was clean.

## Architecture and preservation

Existing Next.js 16.2.10 App Router, React 19, TypeScript, Tailwind 4 utilities, global design tokens, local General Sans and next/font Inter are retained. Reused the existing pill buttons, text links, cards, typography and responsive utilities. No packages, embedded quiz, tracking scripts, or animations added. Homepage remains statically prerendered.

GoHighLevel calendar/modal, chat widgets, client portal, lead API, contact form, calculator and its teaser, email/phone links, footer, service links, SEO metadata, canonical/Open Graph tags, JSON-LD, sitemap, robots and configuration are unchanged. No existing redirect configuration was found in next.config.ts.

## Analytics and attribution

`assessment_cta_click` uses `location`: `hero`, `navigation`, `assessment_section`, or `final_cta`. Uses the existing `track` helper and requests beacon transport. GA4 remains opt-in through `NEXT_PUBLIC_GA_ID`; this local environment has no measurement ID, so events are inert until configured. Browser tests used a gtag observer to verify event calls, not live GA ingestion.

Assessment links copy nonempty `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` from the current page URL. All other query parameters are excluded. Links include `source_location` (`homepage_hero`, `homepage_assessment_section`, `homepage_final_cta`, or `navigation`). Normal keyboard, new-tab and copied links use the decorated href after hydration. No cookies or browser storage were introduced. Attribution is not persisted after navigating to an internal URL that drops the UTMs; without JavaScript, the standard destination and placement remain usable.

`assessment_started`, `assessment_completed`, `assessment_result_viewed`, and `assessment_consultation_click` require instrumentation in the separately hosted quiz. Its source is not in this project, so no outbound click is misreported as a quiz start/completion. Quiz result-to-consultation behavior was not changed or certified.

## Validation

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed, 39 generated pages. Initial sandbox build could not fetch the existing Google font; network-enabled retry succeeded.
- `git diff --check`: passed.
- Chromium: 320, 375, 390, 430, 768, 1024, 1280 and 1440px, at 900px height. No horizontal overflow; new assessment CTAs fit and meet 44px height. Mobile menu opens and closes with Escape. Screenshots reviewed for mobile/desktop hero, card and closing CTA.
- All four actual outbound paths clicked at 390px and 1440px: quiz loaded, campaign parameters preserved, and correct event location observed.
- Consultation modal opened; calculator teaser responded to keyboard input; calculator page controls and contact form rendered. No page JavaScript errors observed.
- Contact CRM webhook is already unset locally. Form delivery cannot work locally until configured; no real leads or appointments were submitted. Calendar is configured and modal functionality passed, but no booking was completed.
- No noticeable regression during interactive checks. No before/after performance benchmark was run; changes add only a small shared link component and markup, with no added network integration or dependencies.

No unresolved lint, type, build or page JavaScript errors. Remaining limits are the existing GA4/webhook configuration and quiz-side event instrumentation described above.
