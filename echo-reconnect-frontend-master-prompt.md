# Master Prompt: Echo Reconnect Frontend Upgrade
**Direction: Apple / Steve Jobs-influenced minimalism**
**Use with: Claude Code, working directly in the site's codebase**

---

## How to use this

Paste this whole document into Claude Code as the task brief. It's written to be handed over once and executed — not a conversation starter. Point it at the actual repo/codebase root before running.

---

## 1. Design philosophy (non-negotiable)

Build this the way Apple would ship a product page under Jobs: **one idea per screen, said with total confidence, with everything unnecessary removed.**

Concretely, that means:

- **Simplicity is the deliverable, not a side effect.** If a section needs a paragraph to explain itself, the section is wrong — cut it back until one sentence does the job.
- **Whitespace is a design element, not empty space.** Let sections breathe. When in doubt, add more margin, not more content.
- **One hero, one message.** The homepage hero should make a single, confident claim — not a headline plus three sub-bullets plus three stat chips competing for attention. Apple never opens with a dashboard of numbers; it opens with a sentence you can't misread.
- **Typography does the talking.** Large, confident type is the primary visual device — not icons, not gradients, not card grids. Type scale should feel considered: a handful of sizes used with intention, not a dozen used out of convenience.
- **Restraint over decoration.** No drop shadows for depth's sake, no gratuitous gradients, no stock "AI startup" iconography (lightning bolts, rocket ships, abstract blob shapes). If an element doesn't clarify the product, remove it.
- **Motion is a whisper, not a shout.** Subtle scroll-triggered reveals, gentle fades, and considered easing — the way Apple product pages unfold as you scroll. No bouncing, no spinning, no attention-grabbing animation for its own sake.
- **Confidence in the copy.** Apple doesn't hedge or oversell. Short declarative sentences. Active voice. Say what the product does, not how impressive it is. ("Never miss a call again." — not "Our revolutionary AI-powered platform ensures...")
- **The product is the hero, not the company.** Show the actual experience — the text a customer receives, the booking flow, the dashboard — rather than describing it in abstract feature-speak.

Before building, self-check: does this look like a template you'd find on every AI-automation-agency site right now (rounded cards, blue/white palette, stat-counter row, testimonial carousel)? If yes, that's the default to move away from — not the destination.

---

## 2. What stays, what changes

This is a **frontend-only upgrade.** Do not touch:
- Auth flow (`/login`, `/signup`)
- Any backend/API logic, Twilio integration, database calls
- Existing routing structure — same pages: Home, Calculator, Services, AI Chat, About, Contact

Everything visual is in play: layout, type, color, spacing, copy, motion, component structure.

---

## 3. Design tokens to establish

Work through this as a real token system before writing code — don't reach for defaults.

**Color** — define 4–6 named hex values. Steer away from the generic SaaS blue-on-white. Consider a restrained palette: near-black or deep charcoal background options for high-impact sections, a single confident accent color (not blue — pick something that feels chosen, not default), and warm neutral whites/greys for body sections. Apple's own palette leans heavily on near-black, near-white, and one saturated accent used sparingly — borrow that discipline, not the literal colors.

**Type** — pick a characterful, high-quality sans-serif for display (something with the geometric confidence of SF Pro without literally being it — e.g., a licensed alternative like Inter, General Sans, or Neue Montreal) paired with a clean body face. Set an intentional type scale: oversized hero type, then a clear step down through section heads, body, and captions. No more than 2 typefaces total.

**Layout** — generous max-width containers, real breathing room between sections (Apple sections often feel like their own "screen"), grid used sparingly and only where content is genuinely parallel (e.g., the 6 automation features), not by default.

**Signature element** — pick ONE moment that will be this redesign's memorable beat. Candidates specific to this brand:
- The calculator becoming the hero interaction itself (scroll into a live, elegant number that recalculates in real time — the way Apple shows a spec number changing)
- A single, cinematic "missed call → text → booked" sequence shown as an actual phone mockup with a scroll-driven reveal, rather than three icon cards
- A stripped-back, oversized headline treatment on scroll (text that resolves into focus as you scroll past it)

Pick one. Do not attempt all three — restraint means spending the "wow" budget in exactly one place.

---

## 4. Section-by-section direction

**Hero**
Replace the current headline + 2 CTAs + 3-stat-chip row with a single confident statement and one clear action. If a supporting stat survives, it's one number, understated, not a row of three competing for attention.

**"What We Build" (6 feature cards)**
Reconsider the identical rounded-card grid. Apple rarely shows 6 equal-weight items — it picks the 2-3 that matter most and gives them real space, then lists the rest more quietly below. Ask: which 2 things actually differentiate Echo Reconnect? Lead with those.

**"Simple Setup" (4-step process)**
Keep this if the order genuinely matters (it does — it's a real sequence). But simplify the numbered-card treatment into something more editorial: large numerals, minimal framing, generous vertical rhythm, à la how Apple lays out a "how it works" sequence.

**Testimonials**
Cut the carousel-of-three-cards format. One testimonial at a time, large type, real attribution — feels more considered, less like generic social-proof filler.

**FAQ**
Keep the accordion pattern (it's genuinely the right pattern here) but restyle: thin dividers, no card backgrounds, clean expand/collapse motion.

**Calculator page**
This is your best opportunity for the signature moment. Treat it like an Apple spec-comparison tool: oversized live numbers, minimal chrome around the sliders, the "revenue at risk" figure should feel like the entire point of the page, not one stat among many.

**Footer**
Keep it minimal and quiet — it should not compete with anything above it.

---

## 5. Copy direction

Rewrite all marketing copy in Apple's register:
- Short sentences. No compound claims stacked with commas.
- Cut words like "revolutionary," "enterprise-grade," "seamless," "cutting-edge" — Apple never sells the adjective, it shows the outcome.
- Every button label says exactly what happens: not "Get Started," but something specific to the action if there's a clearer alternative.
- Headlines are declarative statements, not questions or feature lists.

---

## 6. Quality floor (build to this, don't announce it)

- Fully responsive down to mobile — this audience is largely small-business owners checking on a phone
- Visible keyboard focus states on every interactive element
- Respect `prefers-reduced-motion`
- Fast load — no heavy unnecessary libraries for what should be lightweight scroll/fade effects
- Take screenshots at desktop and mobile breakpoints as you build and self-critique before calling anything final — remove one thing if it feels crowded

---

## 7. Process

1. Propose the token system (color, type, layout, signature element) before writing code. State the reasoning for each choice against this specific brand — not generic defaults.
2. Build section by section, screenshotting as you go.
3. Self-critique against Section 1's philosophy before presenting: does every section still earn its place? Could anything be removed and lose nothing?
4. Flag anything that touches backend/auth/data logic rather than modifying it.
