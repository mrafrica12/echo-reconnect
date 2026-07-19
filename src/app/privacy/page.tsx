import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/data/company";

// REVIEW REQUIRED: This page is a factual draft describing what the site
// currently collects and how it's used. It has not been reviewed by an
// attorney and should not be treated as final legal copy — have it reviewed
// before relying on it in production, especially the sections on SMS/email
// consent, data retention, and third-party processors.
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Echo Reconnect collects, uses, and protects your information.",
};

const SECTIONS = [
  {
    title: "Information we collect",
    body: "We collect information you provide directly: through the contact form (name, business name, email, phone, and any optional details you choose to share), through the revenue calculator (the numbers you enter, processed only in your browser and not stored unless you submit the contact form), and through AI chat conversations (your messages and contact details, if you provide them).",
  },
  {
    title: "How we use it",
    body: "Contact form and chat submissions are used to respond to your inquiry, follow up about a consultation, and — with your consent — to contact you by phone, email, or SMS about Echo Reconnect's services. Calculator inputs are used only to display your estimate and are not transmitted anywhere unless you separately submit the contact form.",
  },
  {
    title: "Cookies and analytics",
    body: "This site does not currently set marketing or tracking cookies. If analytics or advertising tools are added in the future, this policy will be updated first, and cookie consent will be requested where required by law.",
  },
  {
    title: "SMS and email communication",
    body: "By submitting the contact form or requesting a consultation, you consent to be contacted by Echo Reconnect by phone, email, or SMS regarding your inquiry. Message and data rates may apply to SMS. You can opt out of SMS at any time by replying STOP, and out of email by using the unsubscribe link.",
  },
  {
    title: "Third-party processors",
    body: "Form submissions, booking, and chat are processed through GoHighLevel (GHL), our customer relationship and communications platform. GHL processes this data on our behalf under its own security and privacy commitments; we do not sell your information to third parties.",
  },
  {
    title: "Data retention",
    body: "We retain contact and conversation records for as long as needed to provide our services and respond to inquiries, or as required by law. You can request export or deletion of your data at any time by contacting us below.",
  },
  {
    title: "Your choices",
    body: "You can request access to, correction of, or deletion of the personal information we hold about you by contacting us. You can also decline to provide optional fields on the contact form without affecting your ability to reach us by phone or email.",
  },
  {
    title: "Calculator estimate limitations",
    body: "The revenue calculator produces an illustrative estimate based on the values you enter and stated assumptions. It does not access, store, or analyze your real call or revenue data, and its output is not a guarantee of business results.",
  },
  {
    title: "Contact",
    body: `Questions about this policy can be directed to ${COMPANY.email} or ${COMPANY.phoneDisplay}.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <div className="container-copy">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.14em] text-ash">Legal</p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Privacy Policy
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
