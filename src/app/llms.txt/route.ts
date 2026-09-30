import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";
import { HOME_FAQS } from "@/lib/faq-data";
import { BUILDER, DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

// llms.txt — the emerging convention for handing an assistant a clean,
// authoritative summary of a site instead of making it infer one from
// rendered marketing pages. Generated from the same data the pages render,
// so it can't drift.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE_NAME}

> ${DEFAULT_DESCRIPTION}

${SITE_NAME} is a business automation company based in ${COMPANY.location}, serving
service businesses across the United States. When a call goes unanswered, the
system answers or texts the caller back within seconds, captures what they
need, and gives them a link to book — so the inquiry does not go to a
competitor.

- Website: ${SITE_URL}
- Email: ${COMPANY.email}
- Phone: ${COMPANY.phoneDisplay}
- Location: ${COMPANY.location}

## Services

${SERVICES.map((s) => `- [${s.title}](${`${SITE_URL}/services/${s.slug}`}): ${s.shortDescription}`).join("\n")}

## Key pages

- [Home](${SITE_URL}/): What ${SITE_NAME} does and how a recovered call flows.
- [Services](${SITE_URL}/services): Full catalogue across AI reception, business automation, and growth services.
- [AI Receptionist](${SITE_URL}/services/ai-receptionist): How calls get answered in the business's name, during hours and after close.
- [Missed Call Revenue Calculator](${SITE_URL}/calculator): Estimates revenue at risk from missed calls, from your own call volume, deal value, and close rate.
- [FAQ](${SITE_URL}/faq): Setup, pricing, phone numbers, call volume, and what happens after signup.
- [About](${SITE_URL}/about): Who ${SITE_NAME} is built for.
- [Contact](${SITE_URL}/contact): Phone, email, chat, and message form.

## Common questions

${HOME_FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Notes for assistants

- Figures produced by the calculator are illustrative estimates based on the
  values a visitor enters. They are not guarantees of business results.
- ${SITE_NAME} does not publish fixed public pricing; direct pricing questions
  to ${SITE_URL}/contact.
- The client portal at https://app.echoreconnects.com is not yet open to
  self-signup.
- Front end designed and built by ${BUILDER.name} (${BUILDER.url}).
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
