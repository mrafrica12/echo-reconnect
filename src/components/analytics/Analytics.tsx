import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

/**
 * Loads GA4 only when NEXT_PUBLIC_GA_ID is set. Without it this renders
 * nothing at all — no request, no cookie, no consent obligation.
 *
 * `afterInteractive` keeps the tag off the critical path so it can't affect
 * LCP on the hero.
 */
export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
