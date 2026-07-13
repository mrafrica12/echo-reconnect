"use client";

import { isChatInlineConfigured, isChatConfigured, ghlConfig } from "@/lib/ghl";

// Inline home for the assistant on the /chat page. Prefers a dedicated
// inline embed URL if the account exposes one; otherwise, if only the
// floating launcher is configured, points people to it. Colors and type
// inside the embed come from GHL's own widget branding settings, not this
// page's CSS — cross-origin embeds can't be restyled from the parent page.
export default function GhlChatEmbed() {
  if (isChatInlineConfigured) {
    return (
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <iframe
          src={ghlConfig.chat.inlineUrl}
          title="Echo Reconnect AI chat"
          className="h-[560px] w-full"
          allow="microphone"
        />
      </div>
    );
  }

  if (isChatConfigured) {
    return (
      <div className="rounded-2xl border border-line bg-surface px-8 py-16 text-center">
        <p className="text-ink">Chat is available in the bottom corner.</p>
        <p className="mt-2 text-ash">
          Open the launcher to start a conversation with Echo.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-surface px-8 py-16 text-center">
      <p className="text-ink">Chat isn&apos;t connected yet.</p>
      <p className="mt-2 text-ash">
        Add the GHL widget credentials to enable this.
      </p>
    </div>
  );
}
