import { ghlConfig, isLeadWebhookConfigured } from "@/lib/ghl";

type LeadPayload = {
  name?: unknown;
  business?: unknown;
  serviceInterest?: unknown;
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
  hp_field?: unknown;
  form_loaded?: unknown;
};

const MIN_HUMAN_FILL_TIME_MS = 3000;

// Optional fields are only forwarded when present, so a short Contact-form
// submission and a fully filled-out one both produce a clean payload.
const OPTIONAL_STRING_FIELDS = [
  "business",
  "serviceInterest",
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
      { error: "We can't submit this form right now — please reach us by phone or email instead." },
      { status: 503 }
    );
  }

  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Spam defense: a filled honeypot means a bot filled every field, and a
  // submission faster than a human could type means it wasn't typed at all.
  // Both respond as if the submission succeeded so bots get no signal that
  // they were caught.
  const honeypotFilled = asTrimmedString(body.hp_field).length > 0;
  const loadedAt = Number(body.form_loaded);
  const submittedTooFast =
    Number.isFinite(loadedAt) && Date.now() - loadedAt < MIN_HUMAN_FILL_TIME_MS;
  if (honeypotFilled || submittedTooFast) {
    return Response.json({ ok: true });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);
  const source = asTrimmedString(body.source) || "Contact Page";

  if (!name || !email || !asTrimmedString(body.business)) {
    return Response.json(
      { error: "Name, business name, and email are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  const serviceInterest = asTrimmedString(body.serviceInterest);
  if (!["Social Media Marketing", "AI Receptionist", "Other Services", "Not Sure"].includes(serviceInterest)) {
    return Response.json({ error: "Choose a service interest." }, { status: 400 });
  }
  const website = asTrimmedString(body.website);
  if (website) {
    try {
      if (!["http:", "https:"].includes(new URL(website).protocol)) throw new Error();
    } catch {
      return Response.json({ error: "Enter a website or social profile URL beginning with https:// or http://." }, { status: 400 });
    }
  }
  const calls = asTrimmedString(body.missedCallsPerDay);
  if (serviceInterest === "AI Receptionist" && calls && !/^\d+$/.test(calls)) {
    return Response.json({ error: "Missed calls must be a whole number of zero or more." }, { status: 400 });
  }

  const optionalFields: Record<string, string> = {};
  for (const field of OPTIONAL_STRING_FIELDS) {
    if (["missedCallsPerDay", "bookingProcess"].includes(field) && serviceInterest !== "AI Receptionist") continue;
    const value = asTrimmedString(body[field]);
    if (value) optionalFields[field] = value;
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (ghlConfig.leads.apiKey) {
    headers.Authorization = `Bearer ${ghlConfig.leads.apiKey}`;
  }

  let response: Response;
  try {
    response = await fetch(ghlConfig.leads.webhookUrl as string, {
      method: "POST",
      headers,
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        name,
        email,
        message: [
          message,
          `Service interest: ${serviceInterest}`,
          website && `Website or social profile: ${website}`,
          optionalFields.challenge && `Main business goal: ${optionalFields.challenge}`,
        ].filter(Boolean).join("\n\n"),
        ...optionalFields,
        source,
        locationId: ghlConfig.leads.locationId,
        tags: [source],
      }),
    });
  } catch {
    return Response.json(
      { error: "Couldn't reach the CRM. Please try again." },
      { status: 502 }
    );
  }

  if (!response.ok) {
    return Response.json(
      { error: "Couldn't reach the CRM. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
