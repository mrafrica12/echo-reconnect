import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import GhlChatEmbed from "@/components/chat/GhlChatEmbed";
import { isChatConfigured, isChatInlineConfigured } from "@/lib/ghl";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ask Our AI Assistant",
  description:
    "Ask the Echo Reconnects AI assistant about missed call recovery, automated booking, and how we help service businesses in Atlanta, GA.",
  path: "/chat",
});

const breadcrumb = breadcrumbJsonLd([{ name: "AI Chat", path: "/chat" }]);

export default function ChatPage() {
  const chatIsActive = isChatConfigured || isChatInlineConfigured;
  const showChatEmbed = isChatInlineConfigured || !isChatConfigured;

  return (
    <>
      <JsonLd data={breadcrumb} />
      <PageHeader
        eyebrow="AI Chat"
        title="Ask Echo"
        accent="anything."
        description="A live preview of the same assistant Echo Reconnects deploys for client businesses — it can answer questions about our services and help you get in touch. It is not intended for legal, medical, financial, or emergency guidance, and can hand off to a person at any point."
      />

      {showChatEmbed && (
        <section className="px-6 pt-16 lg:px-10">
          <Reveal delay={100}>
            <div className="container-wide max-w-3xl">
              <GhlChatEmbed />
            </div>
          </Reveal>
        </section>
      )}

      {chatIsActive && (
        <Reveal delay={160}>
          <div className="container-wide mt-10 max-w-3xl px-6 lg:px-10">
            <p className="text-sm text-ash/80">
              Please avoid sharing sensitive information (passwords, payment
              details, or government ID numbers) in chat. Conversations are
              processed through our CRM provider to help us follow up — see
              our{" "}
              <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
                Privacy Policy
              </a>
              . Want a version of this assistant built for your own business?{" "}
              <a href="/contact" className="underline underline-offset-2 hover:text-ink">
                Get in touch
              </a>
              .
            </p>
          </div>
        </Reveal>
      )}
      <CtaBand source="Chat Page" />
    </>
  );
}