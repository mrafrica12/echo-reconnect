import { ghlConfig, isLeadWebhookConfigured } from "@/lib/ghl";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  source?: unknown;
};

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

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const source = typeof body.source === "string" ? body.source.trim() : "Contact Page";

  if (!name || !email) {
    return Response.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
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
