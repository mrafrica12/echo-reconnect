// Central place for GoHighLevel integration config. All values come from
// env vars so real account details never live in source. See README.md
// for the full list and where to find each one in the GHL dashboard.

// LeadConnector's chat widget loader — fixed URLs for every account, per
// HighLevel's official embed snippet. Only the widget ID is account-specific.
const CHAT_LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const CHAT_RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

export const ghlConfig = {
  chat: {
    loaderSrc: CHAT_LOADER_SRC,
    resourcesUrl: CHAT_RESOURCES_URL,
    // Sub-Account Settings > Chat Widget > the data-widget-id value.
    widgetId: process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID,
    // Optional: if the account exposes a dedicated inline embed URL for the
    // widget (distinct from the floating bubble), used on the /chat page.
    inlineUrl: process.env.NEXT_PUBLIC_GHL_CHAT_INLINE_URL,
  },
  calendar: {
    // Booking widget embed URL from Calendars > [calendar] > Embed.
    embedUrl: process.env.NEXT_PUBLIC_GHL_CALENDAR_EMBED_URL,
  },
  leads: {
    // Server-only — never exposed to the client.
    webhookUrl: process.env.GHL_WEBHOOK_URL,
    apiKey: process.env.GHL_API_KEY,
    locationId: process.env.GHL_LOCATION_ID,
  },
} as const;

export const isChatConfigured = Boolean(ghlConfig.chat.widgetId);

export const isChatInlineConfigured = Boolean(ghlConfig.chat.inlineUrl);

export const isCalendarConfigured = Boolean(ghlConfig.calendar.embedUrl);

export const isLeadWebhookConfigured = Boolean(ghlConfig.leads.webhookUrl);

export type LeadSource = "Contact Page" | "Calculator" | "Chat";

export function buildCalendarUrl(source: LeadSource | string): string | null {
  if (!ghlConfig.calendar.embedUrl) return null;
  const url = new URL(ghlConfig.calendar.embedUrl);
  url.searchParams.set("utm_source", source);
  return url.toString();
}
