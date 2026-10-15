"use client";

import { useBookingModal } from "@/components/ghl/BookingModalContext";
import { buildCalendarUrl, type LeadSource } from "@/lib/ghl";
import { track } from "@/lib/analytics";

export default function BookingCta({
  source,
  className,
  children,
}: {
  source: LeadSource | string;
  className: string;
  children: React.ReactNode;
}) {
  const { open } = useBookingModal();
  const href = buildCalendarUrl(source) ?? "/contact";

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        // Every booking CTA on the site routes through here, so `source`
        // is what tells you which placement actually drives consultations.
        track("booking_cta_click", { source });
        open(source);
      }}
      className={className}
    >
      {children}
    </a>
  );
}
