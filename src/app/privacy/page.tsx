import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import { COMPANY } from "@/data/company";
import { analyticsEnabled } from "@/lib/analytics";
import { createPageMetadata } from "@/lib/seo";

// REVIEW REQUIRED: This page is a factual draft describing what the site
// currently collects and how it's used. It has not been reviewed by an
// attorney and should not be treated as final legal copy — have it reviewed
// before relying on it in production, especially the sections on SMS/email
// consent, data retention, and third-party processors.
export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How Echo Reconnects collects, uses, and protects your information.",
  path: "/privacy",
});

metadata.robots = { index: false, follow: true };

const SECTIONS = [
  {
    title: "Information we collect",
    body: "We collect information you provide directly: through the contact form (name, business name, email, phone, and any optional details you choose to share), through the revenue calculator (the numbers you enter, processed only in your browser and not stored unless you submit the contact form), and through AI chat conversations (your messages and contact details, if you provide them).",
  },
  {
    title: "How we use it",
    body: "Contact form and chat submissions are used to respond to your inquiry, follow up about a consultation, and — with your consent — to contact you by phone, email, or SMS about Echo Reconnects' services. Calculator inputs are used only to display your estimate and are not transmitted anywhere unless you separately submit the contact form.",
  },
  {
    title: "Cookies and analytics",
    // Tracks the real state of the deployment rather than a fixed claim —
    // the analytics tag only loads when NEXT_PUBLIC_GA_ID is configured, so
    // this section can never describe cookies the site isn't actually setting.
    body: analyticsEnabled
      ? "This site uses Google Analytics to measure how visitors find and use the site. It sets cookies containing a randomly generated identifier and records pages viewed, approximate location derived from a truncated IP address, and interactions such as opening the booking form or submitting the contact form. It is not used for advertising, and the data is not sold. You can opt out with Google's browser add-on, or by using your browser's cookie controls."
      : "This site does not currently set marketing or tracking cookies. If analytics or advertising tools are added in the future, this policy will be updated first, and cookie consent will be requested where required by law.",
  },
  {
    title: "SMS and email communication",
    body: "By submitting the contact form or requesting a consultation, you consent to be contacted by Echo Reconnects by phone, email, or SMS regarding your inquiry. Message and data rates may apply to SMS. You can opt out of SMS at any time by replying STOP, and out of email by using the unsubscribe link.",
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
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Last updated: this draft has not yet completed legal review." />

      <section className="px-6 pb-28 pt-16 lg:px-10 lg:pb-36">
        <div className="container-wide max-w-3xl">

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
    </>
  );
}
