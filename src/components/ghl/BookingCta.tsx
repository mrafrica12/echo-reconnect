"use client";

import { useBookingModal } from "@/components/ghl/BookingModalContext";
import { buildCalendarUrl, type LeadSource } from "@/lib/ghl";

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
        open(source);
      }}
      className={className}
    >
      {children}
    </a>
  );
}
