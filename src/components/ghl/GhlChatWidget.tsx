"use client";

import Script from "next/script";
import { ghlConfig, isChatConfigured } from "@/lib/ghl";

// Loads GHL after React hydration so the third-party loader cannot mutate the
// server-rendered DOM before Next.js attaches its event handlers.
export default function GhlChatWidget() {
  if (!isChatConfigured) return null;

  const openChat = () => {
    let attempts = 0;
    const openWhenReady = () => {
      const widget = document.querySelector("chat-widget#ghl-chat-widget");
      const launcher = widget?.shadowRoot?.querySelector<HTMLButtonElement>(
        "#lc_text-widget--btn"
      );

      if (launcher) {
        launcher.click();
        return;
      }

      attempts += 1;
      if (attempts < 30) window.setTimeout(openWhenReady, 100);
    };

    openWhenReady();
  };

  return (
    <>
      <button
        type="button"
        onClick={openChat}
        aria-label="Open AI Chat"
        className="fixed bottom-5 right-5 z-[100000000] flex h-14 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-paper shadow-lg transition-colors hover:bg-ink"
      >
        AI Chat
      </button>
      <Script
        id="ghl-chat-widget"
        src={ghlConfig.chat.loaderSrc}
        data-resources-url={ghlConfig.chat.resourcesUrl}
        data-widget-id={ghlConfig.chat.widgetId}
        data-source="WEB_USER"
        strategy="afterInteractive"
      />
    </>
  );
}
