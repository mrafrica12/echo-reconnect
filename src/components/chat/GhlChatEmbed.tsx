"use client";

import Link from "next/link";
import { isChatInlineConfigured, isChatConfigured, ghlConfig } from "@/lib/ghl";
import { COMPANY } from "@/data/company";

// Inline home for the assistant on the /chat page. Prefers a dedicated
// inline embed URL if the account exposes one; otherwise, if only the
// floating launcher is configured, points people to it. Colors and type
// inside the embed come from GHL's own widget branding settings, not this
// page's CSS — cross-origin embeds can't be restyled from the parent page.
// The final fallback (neither configured) is customer-facing on purpose —
// it must never mention GHL, credentials, or any other implementation detail.
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
      <p className="font-display text-2xl text-ink">Live chat is warming up.</p>
      <p className="mx-auto mt-3 max-w-sm text-ash">
        In the meantime, reach us directly — we respond fast.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
        <a
          href={COMPANY.phoneHref}
          className="text-ink underline underline-offset-2 hover:text-accent"
        >
          {COMPANY.phoneDisplay}
        </a>
        <a
          href={COMPANY.emailHref}
          className="text-ink underline underline-offset-2 hover:text-accent"
        >
          {COMPANY.email}
        </a>
      </div>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-base text-paper transition-colors hover:bg-accent"
      >
        Contact us
      </Link>
    </div>
  );
}
