"use client";

import Script from "next/script";
import { useEffect } from "react";
import { ghlConfig, isChatConfigured } from "@/lib/ghl";

// Loads GHL after React hydration so the third-party loader cannot mutate the
// server-rendered DOM before Next.js attaches its event handlers.
export default function GhlChatWidget() {
  useEffect(() => {
    if (!isChatConfigured) return;

    // Keep a single, consistently styled launcher. The GHL button remains in
    // the shadow root so this button can trigger it, but it is not displayed.
    const concealNativeLauncher = window.setInterval(() => {
      const widget = document.querySelector("chat-widget#ghl-chat-widget");
      const launcher = widget?.shadowRoot?.querySelector<HTMLElement>(
        "#lc_text-widget--btn"
      );

      if (launcher) {
        launcher.style.display = "none";
        window.clearInterval(concealNativeLauncher);
      }
    }, 250);

    return () => window.clearInterval(concealNativeLauncher);
  }, []);

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
        title="AI Chat"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[55] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-accent text-paper shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 hover:bg-ink focus-visible:scale-105 sm:bottom-5 sm:right-5 sm:h-13 sm:w-13"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 18.5 3.5 21v-5.2A8 8 0 1 1 7 18.5Z" />
          <path d="M8 11h.01M12 11h.01M16 11h.01" />
        </svg>
        <span className="sr-only">AI Chat</span>
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
