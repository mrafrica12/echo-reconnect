import { ghlConfig, isLeadWebhookConfigured } from "@/lib/ghl";

type LeadPayload = {
  name?: unknown;
  business?: unknown;
  email?: unknown;
  phone?: unknown;
  website?: unknown;
  industry?: unknown;
  missedCallsPerDay?: unknown;
  bookingProcess?: unknown;
  challenge?: unknown;
  preferredContact?: unknown;
  message?: unknown;
  source?: unknown;
};

// Optional fields are only forwarded when present, so a short Contact-form
// submission and a fully filled-out one both produce a clean payload.
const OPTIONAL_STRING_FIELDS = [
  "business",
  "phone",
  "website",
  "industry",
  "missedCallsPerDay",
  "bookingProcess",
  "challenge",
  "preferredContact",
] as const;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  if (!isLeadWebhookConfigured) {
    return Response.json(
      { error: "Lead capture isn't connected yet." },
      { status: 501 }
    );
  }

  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);
  const source = asTrimmedString(body.source) || "Contact Page";

  if (!name || !email) {
    return Response.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const optionalFields: Record<string, string> = {};
  for (const field of OPTIONAL_STRING_FIELDS) {
    const value = asTrimmedString(body[field]);
    if (value) optionalFields[field] = value;
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (ghlConfig.leads.apiKey) {
    headers.Authorization = `Bearer ${ghlConfig.leads.apiKey}`;
  }

  const response = await fetch(ghlConfig.leads.webhookUrl as string, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name,
      email,
      message,
      ...optionalFields,
      source,
      locationId: ghlConfig.leads.locationId,
      tags: [source],
    }),
  });

  if (!response.ok) {
    return Response.json(
      { error: "Couldn't reach the CRM. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
