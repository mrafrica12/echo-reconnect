"use client";

import { useBookingModal } from "@/components/ghl/BookingModalContext";
import type { LeadSource } from "@/lib/ghl";

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

  return (
    <button type="button" onClick={() => open(source)} className={className}>
      {children}
    </button>
  );
}
