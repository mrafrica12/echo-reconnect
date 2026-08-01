export type FaqItem = {
  q: string;
  a: string;
};

export type FaqCategory = {
  name: string;
  items: FaqItem[];
};

// REVIEW REQUIRED: Confirm these claims before production deployment —
// specific timelines ("several business days") and recovery-rate ranges are
// intentionally written as safe, non-numeric or conservative statements
// because the original figures ("48 to 72 hours", "60 to 95%", "within the
// first week") could not be verified. Replace with confirmed specifics once
// approved.
export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    name: "Getting Started",
    items: [
      {
        q: "What happens when I miss a call?",
        a: "Your customer gets a text within seconds, asking how we can help and offering a link to book. No hold music. No voicemail.",
      },
      {
        q: "Will this work with my current phone number?",
        a: "Yes. We connect to the number you already use. Nothing changes for your customers.",
      },
      {
        q: "How fast can this go live?",
        a: "Many standard setups can be launched within several business days.",
      },
      {
        q: "Do I need to be tech-savvy?",
        a: "No. We set everything up. You just start getting bookings.",
      },
      {
        q: "What do you need from me to get started?",
        a: "Just your business number and a few details about how you want calls handled. We build the rest.",
      },
      {
        q: "Do I need to sign a long-term contract?",
        a: "No. Month to month. If it's not recovering revenue for you, you can walk away.",
      },
    ],
  },
  {
    name: "How It Works",
    items: [
      {
        q: "What if a customer prefers to talk instead of text?",
        a: "They can call back any time. The text is a backup, not a replacement.",
      },
      {
        q: "Can I customize the messages?",
        a: "Yes. Every message is written in your voice, for your business.",
      },
      {
        q: "What happens if I don't use something like this?",
        a: "The call goes to voicemail. Most people don't leave one. They call the next business instead.",
      },
      {
        q: "Does the AI actually understand what customers are asking?",
        a: "Yes. It's trained on your services and common questions, and hands off to a human whenever a conversation needs one.",
      },
      {
        q: "Can it handle multiple conversations at once?",
        a: "Yes, without limit. Ten missed calls or two hundred, every customer gets an immediate response.",
      },
      {
        q: "What happens after hours or on weekends?",
        a: "Same response, any time. Missed calls don't wait for business hours, so neither do we.",
      },
    ],
  },
  {
    name: "Booking & Scheduling",
    items: [
      {
        q: "Can the system book appointments on its own?",
        a: "Yes. Customers pick from your real availability and confirm the booking themselves, without a callback.",
      },
      {
        q: "Can it connect with my calendar?",
        a: "Yes, with supported calendar tools, so the times customers see match what you've actually got open.",
      },
      {
        q: "Can customers reschedule or cancel their own appointments?",
        a: "Yes. They get a link to manage their booking without calling you back.",
      },
      {
        q: "Does it send reminders before the appointment?",
        a: "Yes, automatically, so fewer people forget to show up.",
      },
      {
        q: "What if two customers try to book the same slot?",
        a: "The calendar only shows real availability, so double-booking isn't possible.",
      },
      {
        q: "Can I control which time slots are available?",
        a: "Yes. You set your hours and buffers; customers only ever see openings you've approved.",
      },
    ],
  },
  {
    name: "Pricing & ROI",
    items: [
      {
        q: "How much revenue can this actually recover?",
        a: "It depends on your call volume, average customer value, close rate, response time, and how the workflow is configured. Use the calculator to estimate the opportunity for your business.",
      },
      {
        q: "What if my business gets a lot of calls?",
        a: "The system scales with you. Ten missed calls a day or two hundred, every one gets a response.",
      },
      {
        q: "Is there a setup fee?",
        a: "We'll walk you through pricing on a free consultation call, based on your call volume and setup.",
      },
      {
        q: "How is this priced?",
        a: "A flat monthly rate, sized to your business. No per-message or per-booking fees.",
      },
      {
        q: "What kind of return should I expect, and how fast?",
        a: "Timing varies by business, but the calculator can help set a realistic expectation before you start.",
      },
    ],
  },
  {
    name: "Technical & Integration",
    items: [
      {
        q: "What phone systems does this work with?",
        a: "Any existing business line, landline, VoIP, or cell number. We connect to what you already have.",
      },
      {
        q: "Does it integrate with my existing CRM or calendar?",
        a: "Every call, text, and booking flows into a single record, so nothing sits in a separate system.",
      },
      {
        q: "Can it capture leads from my website forms?",
        a: "Yes. Form submissions can feed into the same lead record as calls and texts, tagged by source.",
      },
      {
        q: "Can it support multiple locations?",
        a: "Yes, with routing and reporting set up per location so each site's activity stays organized.",
      },
      {
        q: "What happens to my data if I ever cancel?",
        a: "You can export your customer and conversation history at any time, no questions asked.",
      },
      {
        q: "Is my customer data secure?",
        a: "Yes. Conversations and contact details are encrypted and never sold or shared.",
      },
    ],
  },
  {
    name: "Reporting",
    items: [
      {
        q: "What reporting is available?",
        a: "A view of captured leads, booking activity, response time, conversion rate, and channel source, so you can see what's working without decoding a complex dashboard.",
      },
    ],
  },
  {
    name: "Support",
    items: [
      {
        q: "What if something breaks?",
        a: "We monitor the system directly and fix issues before you notice them.",
      },
      {
        q: "Can I talk to a real person?",
        a: "Always. Reach us by phone, email, or chat, and a person will respond.",
      },
      {
        q: "Can my team take over a conversation?",
        a: "Yes. Any conversation can be handed off to a real person on your team at any point.",
      },
      {
        q: "How do I make changes once it's live?",
        a: "Tell us what you'd like changed, in your messaging, hours, or booking rules, and we'll update it.",
      },
    ],
  },
];
