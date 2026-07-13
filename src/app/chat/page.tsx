import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ChatDemo from "@/components/chat/ChatDemo";

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
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="container-copy mt-20">
          <ChatDemo />
        </div>
      </Reveal>
    </section>
  );
}
