import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/data/company";

// REVIEW REQUIRED: This page is a factual draft, not attorney-reviewed legal
// copy. Have counsel review it before production use — in particular the
// liability limitations and governing-law sections, which are placeholders
// pending a real decision on jurisdiction.
export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Echo Reconnect website and services.",
};

const SECTIONS = [
  {
    title: "Service availability",
    body: "Echo Reconnect's automation systems depend on third-party phone, calendar, and communications infrastructure. While we work to keep these systems reliable, we don't guarantee uninterrupted availability, and scheduled maintenance or third-party outages may occasionally affect service.",
  },
  {
    title: "Calculator estimates",
    body: "The revenue calculator on this site provides an illustrative estimate based on assumptions you can edit. It is not a quote, guarantee, or projection of actual business results, and Echo Reconnect is not liable for decisions made solely on the basis of its output.",
  },
  {
    title: "Automated communication",
    body: "By requesting a consultation or submitting a form, you consent to receive automated and manual communication from Echo Reconnect by phone, text, and email related to your inquiry, in accordance with applicable law.",
  },
  {
    title: "Intellectual property",
    body: "The design, copy, and code of this website belong to Echo Reconnect and its frontend design partner, UmojaServ, except where third-party components (such as embedded GoHighLevel widgets) are used under their own terms.",
  },
  {
    title: "Limitation of liability",
    body: "To the extent permitted by law, Echo Reconnect is not liable for indirect, incidental, or consequential damages arising from use of this website or its automation services. [REVIEW REQUIRED: finalize liability language with counsel before relying on this section.]",
  },
  {
    title: "Governing law",
    body: "[REVIEW REQUIRED: governing law and jurisdiction to be finalized with counsel; Echo Reconnect is based in Atlanta, Georgia.]",
  },
  {
    title: "Contact",
    body: `Questions about these terms can be directed to ${COMPANY.email} or ${COMPANY.phoneDisplay}.`,
  },
];

export default function TermsPage() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <div className="container-copy">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.14em] text-ash">Legal</p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-ash">
            Last updated: this draft has not yet completed legal review.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-12">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.title} delay={i * 40}>
              <div className="border-t border-line pt-8">
                <h2 className="font-display text-xl text-ink">{section.title}</h2>
                <p className="mt-3 text-ash">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
