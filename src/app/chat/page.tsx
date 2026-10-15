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
    "Contact Echo Reconnects about social media marketing or additional AI reception and automation products.",
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
        description="Welcome to Echo Reconnects. Looking for social media marketing support? Tell us about your business through our contact page, or use chat to get in touch. AI reception and automation are optional, separately scoped products."
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