export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  outcomes: string[];
  featured: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "missed-call-recovery",
    title: "Missed Call Recovery",
    shortDescription:
      "Every missed call gets an instant text back — before the customer tries your competitor.",
    fullDescription:
      "When a call goes unanswered, Echo Reconnect detects it immediately and responds on your behalf. The system captures what the customer needs, offers a direct path to book, and notifies your team so nothing falls through the cracks.",
    outcomes: [
      "Detects missed calls and responds within seconds",
      "Captures the customer's request automatically",
      "Notifies your team and tracks the outcome",
    ],
    featured: true,
  },
  {
    slug: "automated-appointment-booking",
    title: "Automated Appointment Booking",
    shortDescription:
      "Customers pick a time and book themselves. No calendar tag, no back-and-forth.",
    fullDescription:
      "Customers select from your real availability and book without waiting on a callback. Confirmations and reminders go out automatically, cutting down the manual scheduling work your team used to do by hand.",
    outcomes: [
      "Shows real-time availability from your calendar",
      "Sends confirmations and reminders automatically",
      "Supports rescheduling where configured",
    ],
    featured: true,
  },
  {
    slug: "intelligent-lead-capture",
    title: "Intelligent Lead Capture",
    shortDescription:
      "Calls, texts, and forms feed into one organized record — nothing gets lost.",
    fullDescription:
      "Every call, text, website form, and chat inquiry lands in a single organized record instead of scattered across separate tools. Each lead is tagged with its source and status, so your team can see what's outstanding at a glance.",
    outcomes: [
      "One record per customer, regardless of channel",
      "Tracks source and status automatically",
      "Reduces duplicate manual data entry",
    ],
    featured: false,
  },
  {
    slug: "custom-workflow-automation",
    title: "Custom Workflow Automation",
    shortDescription:
      "Follow-ups, reminders, and internal notifications happen without you.",
    fullDescription:
      "Repetitive business processes run automatically based on rules you define — follow-up messages, quote and invoice reminders, review requests, and internal notifications. Workflows are built around how your business actually operates, not a generic template.",
    outcomes: [
      "Follow-up and reminder sequences run on autopilot",
      "Internal notifications route to the right person",
      "Configured around your rules, not a fixed template",
    ],
    featured: false,
  },
  {
    slug: "performance-analytics",
    title: "Performance Analytics",
    shortDescription:
      "See what you're recovering, in real numbers — not a dashboard to decode.",
    fullDescription:
      "Track captured leads, booking activity, response performance, and conversion rates in one place. The goal is a clear, honest view of what's working, not a dashboard you need training to read.",
    outcomes: [
      "Tracks inquiries, bookings, and conversion rate",
      "Shows response time and channel source",
      "Gives an estimated revenue impact, not just raw counts",
    ],
    featured: false,
  },
  {
    slug: "omnichannel-communication",
    title: "Omnichannel Communication",
    shortDescription:
      "Voice, text, email, and chat, brought into one connected workflow.",
    fullDescription:
      "Customer communication across voice, text, email, web forms, and chat comes together in one connected workflow instead of separate inboxes. Which channels are active depends on your setup and the integrations selected for your business.",
    outcomes: [
      "Unifies conversations across channels",
      "Channel availability depends on your setup",
      "One place for your team to respond from",
    ],
    featured: false,
  },
];
