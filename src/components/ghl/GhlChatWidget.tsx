"use client";

import Script from "next/script";
import { ghlConfig, isChatConfigured } from "@/lib/ghl";

// Renders GHL's floating Conversation AI launcher site-wide. The bubble and
// its panel render inside GHL's own widget (commonly an isolated iframe), so
// colors/border-radius/font can't be overridden from this page's CSS — set
// those to match the design system in GHL: Sub-Account Settings > Chat
// Widget > Customize. This component only controls where the launcher sits
// and when it loads.
export default function GhlChatWidget() {
  if (!isChatConfigured) return null;

  return (
    <Script
      id="ghl-chat-widget"
      src={ghlConfig.chat.loaderSrc}
      data-widget-id={ghlConfig.chat.widgetId}
      strategy="lazyOnload"
    />
  );
}
