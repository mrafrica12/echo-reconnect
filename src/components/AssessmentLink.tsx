"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { assessmentUrl, type AssessmentLocation } from "@/lib/assessment";
import { track } from "@/lib/analytics";

export default function AssessmentLink({ location, className, children, onClick }: {
  location: AssessmentLocation;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const anchor = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  // Decorate the real href so keyboard, copy-link, and new-tab actions retain
  // attribution too. No cookies, storage, or extra tracking platform.
  useEffect(() => {
    if (anchor.current) anchor.current.href = assessmentUrl(location, window.location.search);
  }, [location, pathname]);

  return (
    <a ref={anchor} href={assessmentUrl(location)} className={className}
      onClick={(event) => {
        event.currentTarget.href = assessmentUrl(location, window.location.search);
        track("assessment_cta_click", { location, transport_type: "beacon" });
        onClick?.();
      }}>
      {children}
    </a>
  );
}
