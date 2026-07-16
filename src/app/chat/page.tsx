import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GhlChatEmbed from "@/components/chat/GhlChatEmbed";

export const metadata: Metadata = {
  title: "AI Chat",
  description:
    "Ask the Echo Reconnect AI assistant about missed call recovery, automated booking, and how we help service businesses in Atlanta, GA.",
};

export default function ChatPage() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <Reveal>
        <div className="container-copy text-center">
          <p className="text-sm uppercase tracking-[0.14em] text-ash">
            AI Chat
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
            Ask Echo anything.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-ash">
            This is a live preview of the same assistant Echo Reconnect
            deploys for client businesses — it can answer questions about our
            services and help you get in touch. It is not intended for legal,
            medical, financial, or emergency guidance, and can hand off to a
            person at any point.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="container-copy mt-20">
          <GhlChatEmbed />
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="container-copy mt-10">
          <p className="text-sm text-ash/80">
            Please avoid sharing sensitive information (passwords, payment
            details, or government ID numbers) in chat. Conversations are
            processed through our CRM provider, GoHighLevel, to help us
            follow up — see our{" "}
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
    </section>
  );
}
