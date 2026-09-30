import type { ICONS } from "@/components/EchoIcons";

export type Pillar = "reception" | "automation" | "growth";

export type ServiceOutcome = {
  text: string;
  icon: keyof typeof ICONS;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  /** ~150 chars for the SERP snippet. Condensed from fullDescription — the
   *  card copy is too short to fill the space search engines give you. */
  metaDescription: string;
  fullDescription: string;
  outcomes: ServiceOutcome[];
  icon: keyof typeof ICONS;
  pillar: Pillar;
  featured: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "ai-receptionist",
    title: "AI Receptionist",
    shortDescription:
      "Calls get answered in your business name, day or night — with a real conversation, not a voicemail beep.",
    metaDescription:
      "An AI receptionist that answers in your business name during hours and after close, handles routine questions, and books the appointment on the call.",
    fullDescription:
      "When a call comes in and no one is free to pick up, the AI receptionist answers instead of sending the caller to voicemail. It greets them in your business name, asks what they need, answers common questions about your services, and either books the appointment or hands the call to your team. The caller gets a conversation, not a recording.",
    outcomes: [
      { text: "Answers in your business name, during hours or after close", icon: "aiReceptionist" },
      { text: "Handles routine questions and qualifies the inquiry", icon: "leadQualification" },
      { text: "Books directly into your calendar or routes to your team", icon: "appointmentScheduling" },
      { text: "Logs the full conversation as a lead record", icon: "crm" },
      { text: "Identifies itself as an automated assistant on every call", icon: "humanLikeConversations" },
    ],
    icon: "aiReceptionist",
    pillar: "reception",
    featured: true,
  },
  {
    slug: "missed-call-recovery",
    title: "Missed Call Recovery",
    shortDescription:
      "Every missed call gets an instant text back — before the customer tries your competitor.",
    metaDescription:
      "Every unanswered call gets an instant text back that captures what the customer needs and offers a link to book, before they try the next business.",
    fullDescription:
      "When a call goes unanswered, Echo Reconnects detects it immediately and responds on your behalf. The system captures what the customer needs, offers a direct path to book, and notifies your team so nothing falls through the cracks.",
    outcomes: [
      { text: "Detects missed calls and responds within seconds", icon: "missedCallRecovery" },
      { text: "Captures the customer's request automatically", icon: "humanLikeConversations" },
      { text: "Notifies your team and tracks the outcome", icon: "reporting" },
    ],
    icon: "missedCallRecovery",
    pillar: "reception",
    featured: true,
  },
  {
    slug: "automated-appointment-booking",
    title: "Automated Appointment Booking",
    shortDescription:
      "Customers pick a time and book themselves. No calendar tag, no back-and-forth.",
    metaDescription:
      "Customers pick a time and book themselves against your live calendar. No phone tag, no double-bookings, and reminders go out automatically.",
    fullDescription:
      "Customers select from your real availability and book without waiting on a callback. Confirmations and reminders go out automatically, cutting down the manual scheduling work your team used to do by hand.",
    outcomes: [
      { text: "Shows real-time availability from your calendar", icon: "appointmentScheduling" },
      { text: "Sends confirmations and reminders automatically", icon: "automatedFollowUps" },
      { text: "Supports rescheduling where configured", icon: "appointmentScheduling" },
    ],
    icon: "appointmentScheduling",
    pillar: "reception",
    featured: false,
  },
  {
    slug: "intelligent-lead-capture",
    title: "Intelligent Lead Capture",
    shortDescription:
      "Calls, texts, forms, and chat feed into one organized record — nothing gets lost between channels.",
    metaDescription:
      "Calls, texts, website forms, and chat land in one organized lead record, so nothing is lost between channels and every inquiry is followed up.",
    fullDescription:
      "Every call, text, website form, and chat inquiry lands in a single organized CRM record instead of scattered across separate tools. Each lead is tagged with its source and status, so your team can see what's outstanding at a glance.",
    outcomes: [
      { text: "One record per customer, regardless of channel", icon: "crm" },
      { text: "Tracks source and status automatically", icon: "reporting" },
      { text: "Reduces duplicate manual data entry", icon: "workflowAutomation" },
    ],
    icon: "crm",
    pillar: "automation",
    featured: false,
  },
  {
    slug: "custom-workflow-automation",
    title: "Custom Workflow Automation",
    shortDescription:
      "Follow-ups, reminders, and internal notifications happen without you.",
    metaDescription:
      "Follow-ups, reminders, and internal notifications run on rules built around your hours, services, and team — without anyone remembering to send them.",
    fullDescription:
      "Repetitive business processes run automatically based on rules you define — follow-up messages, quote and invoice reminders, review requests, and internal notifications. Workflows are built around how your business actually operates, not a generic template.",
    outcomes: [
      { text: "Follow-up and reminder sequences run on autopilot", icon: "automatedFollowUps" },
      { text: "Internal notifications route to the right person", icon: "crm" },
      { text: "Configured around your rules, not a fixed template", icon: "workflowAutomation" },
    ],
    icon: "workflowAutomation",
    pillar: "automation",
    featured: false,
  },
  {
    slug: "omnichannel-communication",
    title: "Omnichannel Communication",
    shortDescription:
      "Voice, text, email, and chat, brought into one connected workflow.",
    metaDescription:
      "Voice, text, email, and chat brought into one connected workflow, so a customer conversation carries across channels instead of starting over.",
    fullDescription:
      "Customer communication across voice, text, email, web forms, and chat comes together in one connected workflow instead of separate inboxes. Which channels are active depends on your setup and the integrations selected for your business.",
    outcomes: [
      { text: "Unifies conversations across channels", icon: "humanLikeConversations" },
      { text: "Channel availability depends on your setup", icon: "customerSupport" },
      { text: "One place for your team to respond from", icon: "crm" },
    ],
    icon: "customerSupport",
    pillar: "automation",
    featured: false,
  },
  {
    slug: "performance-analytics",
    title: "Performance Analytics",
    shortDescription:
      "See what you're recovering, in real numbers — not a dashboard to decode.",
    metaDescription:
      "See calls recovered, appointments booked, and follow-ups completed in plain numbers — reporting that answers whether the system is paying for itself.",
    fullDescription:
      "Track captured leads, booking activity, response performance, and conversion rates in one place. The goal is clear, honest reporting on what's working, not a dashboard you need training to read.",
    outcomes: [
      { text: "Tracks inquiries, bookings, and conversion rate", icon: "reporting" },
      { text: "Shows response time and channel source", icon: "reporting" },
      { text: "Gives an estimated revenue impact, not just raw counts", icon: "reporting" },
    ],
    icon: "reporting",
    pillar: "automation",
    featured: false,
  },
];

export type GrowthService = {
  slug: string;
  title: string;
  description: string;
  icon: keyof typeof ICONS;
};

// REVIEW REQUIRED: The Marketing Automation description below omits SMS on
// purpose. The source copy paired email with SMS follow-up sequences, which
// in the US requires 10DLC brand/campaign registration and documented TCPA
// consent capture. Re-add "and SMS" once registration is confirmed complete.
export const GROWTH_SERVICES: GrowthService[] = [
  {
    slug: "website-design",
    title: "Website Design",
    description:
      "Mobile-first business websites built to load fast and turn visitors into inquiries, wired into the same lead capture your phone system uses.",
    icon: "websiteDesign",
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile Setup",
    description:
      "Profile setup and optimization so the businesses searching for what you do can actually find and call you.",
    icon: "googleBusinessProfile",
  },
  {
    slug: "reputation-management",
    title: "Reputation Management",
    description:
      "Review requests go out automatically after a completed job, and incoming reviews are monitored in one place.",
    icon: "reputationManagement",
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    description:
      "Email follow-up sequences to your existing contact list, configured around your service cycle.",
    icon: "marketingAutomation",
  },
];

export const PILLARS: {
  id: Pillar;
  title: string;
  intro: string;
  icon: keyof typeof ICONS;
}[] = [
  { id: "reception", title: "AI Reception", intro: "Getting the call answered.", icon: "aiReception" },
  { id: "automation", title: "Business Automation", intro: "Everything that happens after the call.", icon: "businessAutomation" },
  { id: "growth", title: "Growth Services", intro: "Once your phone is handled.", icon: "growthServices" },
];
