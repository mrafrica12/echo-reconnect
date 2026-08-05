// Conversion tracking, deliberately inert until configured.
//
// Nothing loads and no cookie is set unless NEXT_PUBLIC_GA_ID is present in
// the environment, so the privacy policy stays accurate on any deployment
// that hasn't opted in. `track` is safe to call from anywhere — it no-ops on
// the server and when the tag is absent.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const analyticsEnabled = Boolean(GA_ID);

export type AnalyticsEvent =
  | "booking_cta_click"
  | "contact_form_submit"
  | "calculator_engaged"
  | "chat_opened";

export function track(
  event: AnalyticsEvent,
  params: Record<string, string | number> = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", event, params);
}
