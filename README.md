# Echo Reconnect website

The public Echo Reconnect marketing site, built with Next.js 16, React 19,
TypeScript, and Tailwind CSS. It includes service pages, a missed-call revenue
calculator, searchable FAQs, AI chat, consultation booking, and lead capture.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Source files live under `src/`. The app uses the Next.js App Router.

The site loads General Sans locally for headings and Inter through `next/font`
for body copy.

Before shipping changes, run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## GoHighLevel integration

Chat, booking, and lead capture are powered by GoHighLevel (GHL). Nothing is hardcoded — every embed reads from env vars and degrades to a clean "not connected yet" state when unset, so the site works before and after you wire in real account details.

Add these to `.env.local` (create the file; it's gitignored):

```bash
# Chat — Sub-Account Settings > Chat Widget
NEXT_PUBLIC_GHL_CHAT_WIDGET_ID=        # the data-widget-id value from the embed snippet
NEXT_PUBLIC_GHL_CHAT_INLINE_URL=       # optional: dedicated inline embed URL, used on /chat

# Booking — Calendars > [your calendar] > Embed
NEXT_PUBLIC_GHL_CALENDAR_EMBED_URL=

# Lead capture — server-only, never sent to the browser
GHL_WEBHOOK_URL=                       # inbound webhook / form endpoint that creates a contact
GHL_API_KEY=                           # only if your webhook requires a bearer token
GHL_LOCATION_ID=                       # sub-account location ID
```

Restart `npm run dev` after changing these.

### Why some things can't be restyled from this repo

The chat widget, calendar, and any GHL form embed all render inside GHL's own iframe/widget. Cross-origin content can't be restyled with this site's CSS, no matter how aggressively we try — the design-system match has to happen on the GHL side:

- **Chat widget**: set accent color, avatar, and white-label branding in Sub-Account Settings > Chat Widget > Customize.
- **Calendar**: set the slot/header accent color in Calendars > [calendar] > Customize. If your plan exposes a custom CSS field, paste the snippet below.
- **Forms**: this repo does **not** use GHL's form embed — the Contact page keeps its own markup and posts to `GHL_WEBHOOK_URL` via `src/app/api/leads/route.ts`, so styling is fully ours already.

If you paste a custom CSS field in GHL, use the site's literal token values (GHL can't read this repo's CSS variables):

```css
:root {
  --echo-ink: #0b0b0c;
  --echo-paper: #faf9f6;
  --echo-ash: #6e6e73;
  --echo-accent: #d97a2b;
  --echo-line: #e5e2dc;
  --echo-surface: #f2f0eb;
}
/* Map these to whatever selectors GHL's custom-CSS panel exposes for
   background, accent/primary, border, and border-radius (site uses
   rounded-full buttons, rounded-2xl cards). Font is "General Sans" for
   headings, "Inter" for body — GHL widgets typically can't load custom
   web fonts, so pick the closest system sans as a fallback. */
```

The chat launcher, booking modal, and contact form still respect `prefers-reduced-motion` and keep visible focus rings on our side regardless of what's inside the embeds.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
