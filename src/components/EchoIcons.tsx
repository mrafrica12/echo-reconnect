// components/EchoIcons.tsx
//
// Echo Reconnects icon set — rebuilt as vector from the print collateral.
//
// All glyphs use `currentColor`, so color is controlled by the parent.
// Authored on a 24x24 grid at 1.75 stroke weight for optical consistency.
//
// Usage:
//   <IconBadge pillar="reception" size="lg"><HeadsetIcon /></IconBadge>
//   <IconBadge pillar="reception"><CalendarIcon /></IconBadge>

import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/* ---------------------------------------------------------------
   PILLAR ICONS — the three large circles at the top of each column
   --------------------------------------------------------------- */

// AI Reception
export const HeadsetIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="2" y="13" width="4.5" height="6.5" rx="2" fill="currentColor" stroke="none" />
    <rect x="17.5" y="13" width="4.5" height="6.5" rx="2" fill="currentColor" stroke="none" />
    <path d="M19.75 19.5v.5a2 2 0 0 1-2 2H13" />
    <circle cx="10.6" cy="11.8" r="0.95" fill="currentColor" stroke="none" />
    <circle cx="14" cy="11.8" r="0.95" fill="currentColor" stroke="none" />
  </svg>
);

// Business Automation
export const GearCycleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3.1" />
    <g strokeWidth="1.6">
      <path d="M12 6.4V4.7M12 19.3v-1.7M17.6 12h1.7M4.7 12h1.7" />
      <path d="M15.96 8.04l1.2-1.2M6.84 17.16l1.2-1.2M15.96 15.96l1.2 1.2M6.84 6.84l1.2 1.2" />
    </g>
    <path d="M21 8.6A9.4 9.4 0 0 0 5.4 5.9" strokeWidth="1.6" />
    <path d="M3 15.4a9.4 9.4 0 0 0 15.6 2.7" strokeWidth="1.6" />
    <path d="M21 4.6v4h-4M3 19.4v-4h4" strokeWidth="1.6" />
  </svg>
);

// Growth Services
export const GrowthChartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="15" width="4" height="6" rx="1" fill="currentColor" stroke="none" />
    <rect x="10" y="11.5" width="4" height="9.5" rx="1" fill="currentColor" stroke="none" />
    <rect x="17" y="8" width="4" height="13" rx="1" fill="currentColor" stroke="none" />
    <path d="M4 9.5l5-4.5 4 2.5 6.5-4.5" />
    <path d="M15.5 3h4.5v4.5" />
  </svg>
);

/* ---------------------------------------------------------------
   AI RECEPTION — feature icons
   --------------------------------------------------------------- */

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12.6" r="8.4" />
    <path d="M12 7.8v4.8l3.4 2.3" />
  </svg>
);

export const SpeechBubbleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 4h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8.5L7 20v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <circle cx="8.4" cy="10" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="15.6" cy="10" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const PersonIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.6" fill="currentColor" stroke="none" />
    <path d="M5 21a7 7 0 0 1 14 0z" fill="currentColor" stroke="none" />
  </svg>
);

export const CalendarIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 9.5h18" />
    <path d="M8 3v4M16 3v4" />
    <circle cx="8" cy="13.8" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="13.8" r="1" fill="currentColor" stroke="none" />
    <circle cx="16" cy="13.8" r="1" fill="currentColor" stroke="none" />
    <circle cx="8" cy="17.6" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="17.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const SupportChatIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 4h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8.5L7 20v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M6.5 8.5h11M6.5 12h7" />
  </svg>
);

export const PhoneReturnIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path
      d="M6.4 11.6a14.6 14.6 0 0 0 6 6l2-2a1 1 0 0 1 1-.24 11 11 0 0 0 3.2.5 1 1 0 0 1 1 1v3.1a1 1 0 0 1-1 1A16.6 16.6 0 0 1 2 5.4a1 1 0 0 1 1-1h3.1a1 1 0 0 1 1 1 11 11 0 0 0 .5 3.2 1 1 0 0 1-.25 1z"
      fill="currentColor"
      stroke="none"
    />
    <path d="M15 9l6.2-6.2M16.2 2.8H22v5.8" />
  </svg>
);

/* ---------------------------------------------------------------
   BUSINESS AUTOMATION — feature icons
   --------------------------------------------------------------- */

export const UsersIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="5.2" cy="10" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="18.8" cy="10" r="2.5" fill="currentColor" stroke="none" />
    <path d="M1 19a4.2 4.2 0 0 1 8.4 0z" fill="currentColor" stroke="none" />
    <path d="M14.6 19a4.2 4.2 0 0 1 8.4 0z" fill="currentColor" stroke="none" />
    <circle cx="12" cy="7.6" r="3.4" fill="currentColor" stroke="none" />
    <path d="M6.2 20a5.8 5.8 0 0 1 11.6 0z" fill="currentColor" stroke="none" />
  </svg>
);

export const EnvelopeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 7.2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2L12 13.6z" fill="currentColor" stroke="none" />
    <path
      d="M2 9.6l9.45 5.55a1.05 1.05 0 0 0 1.1 0L22 9.6v7.2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path
      d="M12 2.6l2.95 5.98 6.6.96-4.78 4.65 1.13 6.57L12 17.66l-5.9 3.1 1.13-6.57L2.45 9.54l6.6-.96z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

export const WorkflowIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="9" y="2.5" width="6" height="5" rx="1.4" fill="currentColor" stroke="none" />
    <rect x="1.5" y="16.5" width="6" height="5" rx="1.4" fill="currentColor" stroke="none" />
    <rect x="9" y="16.5" width="6" height="5" rx="1.4" fill="currentColor" stroke="none" />
    <rect x="16.5" y="16.5" width="6" height="5" rx="1.4" fill="currentColor" stroke="none" />
    <path d="M12 7.5v4.5M4.5 16.5V12h15v4.5M12 12v4.5" />
  </svg>
);

export const BarChartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="13" width="4.2" height="8" rx="1.1" fill="currentColor" stroke="none" />
    <rect x="9.9" y="8" width="4.2" height="13" rx="1.1" fill="currentColor" stroke="none" />
    <rect x="16.3" y="3" width="4.2" height="18" rx="1.1" fill="currentColor" stroke="none" />
  </svg>
);

/* ---------------------------------------------------------------
   GROWTH SERVICES — feature icons
   --------------------------------------------------------------- */

export const MonitorIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="3.5" width="19" height="14" rx="2.2" />
    <path d="M2.5 8h19" />
    <circle cx="5.4" cy="5.75" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="7.9" cy="5.75" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="10.4" cy="5.75" r="0.75" fill="currentColor" stroke="none" />
    <path d="M12 17.5V21M8.5 21h7" />
  </svg>
);

export const StorefrontIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2.2 8l1.6-4.5h16.4L21.8 8z" fill="currentColor" stroke="none" />
    <path d="M4 8v12.5h16V8" />
    <path d="M2.2 8a2.6 2.6 0 0 0 4.9 0 2.6 2.6 0 0 0 4.9 0 2.6 2.6 0 0 0 4.9 0 2.6 2.6 0 0 0 4.9 0" />
    <rect x="9.2" y="13.5" width="5.6" height="7" rx="0.8" />
  </svg>
);

export const MegaphoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path
      d="M2.5 10.2v3.6a1.2 1.2 0 0 0 1.2 1.2H6l7.5 4.2V4.8L6 9H3.7a1.2 1.2 0 0 0-1.2 1.2z"
      fill="currentColor"
      stroke="none"
    />
    <path d="M6 15v4.4a1.2 1.2 0 0 0 1.2 1.2h1.6a1.2 1.2 0 0 0 1.2-1.2v-2.3" />
    <path d="M17.2 8.6a4.8 4.8 0 0 1 0 6.8M20 5.8a8.8 8.8 0 0 1 0 12.4" />
  </svg>
);

/* ---------------------------------------------------------------
   HERO — capability strip and call-to-action glyphs
   --------------------------------------------------------------- */

// Instant Response
export const BoltIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path
      d="M13.4 2.2 4.6 13.1a.7.7 0 0 0 .55 1.14h4.62l-1.2 7.5a.7.7 0 0 0 1.25.52l8.72-10.87a.7.7 0 0 0-.55-1.14h-4.6l1.2-7.5a.7.7 0 0 0-1.24-.55z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

// Real-Time Tracking
export const TargetIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.6" strokeWidth="1.9" />
    <circle cx="12" cy="12" r="3.1" fill="currentColor" stroke="none" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path
      d="M6.6 11.4a14.6 14.6 0 0 0 6 6l2-2a1 1 0 0 1 1-.24 11 11 0 0 0 3.2.5 1 1 0 0 1 1 1v3.1a1 1 0 0 1-1 1A16.6 16.6 0 0 1 2.2 5.2a1 1 0 0 1 1-1h3.1a1 1 0 0 1 1 1 11 11 0 0 0 .5 3.2 1 1 0 0 1-.25 1z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5" strokeWidth="2" />
  </svg>
);

// "24/7" set as a glyph so it sits in a halo alongside the drawn icons.
export const TwentyFourSevenGlyph = ({
  className = "",
}: {
  className?: string;
}) => (
  <span
    aria-hidden
    className={`font-display text-[0.95rem] font-semibold leading-none tracking-tight ${className}`}
  >
    24<span className="opacity-70">/</span>7
  </span>
);

/* ---------------------------------------------------------------
   BADGE WRAPPER — the filled circle behind each glyph
   --------------------------------------------------------------- */

const PILLAR_BG: Record<string, string> = {
  reception: "var(--er-blue, #1B4DA1)",
  automation: "var(--er-navy, #0F2350)",
  growth: "var(--er-slate, #5D6E85)",
};

const SIZES = {
  sm: { box: 38, glyph: 19 },
  md: { box: 46, glyph: 23 },
  lg: { box: 84, glyph: 42 },
};

export function IconBadge({
  pillar = "automation",
  size = "sm",
  children,
}: {
  pillar?: keyof typeof PILLAR_BG;
  size?: keyof typeof SIZES;
  children: React.ReactElement<IconProps>;
}) {
  const { box, glyph } = SIZES[size];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: box,
        height: box,
        borderRadius: "50%",
        background: PILLAR_BG[pillar],
        color: "#fff",
        flexShrink: 0,
      }}
    >
      {React.cloneElement(children, { width: glyph, height: glyph })}
    </span>
  );
}

/* Pale-blue disc used across the light sections. Unlike IconBadge — the
   saturated pillar circle from the print collateral — this one recedes,
   so a row of them reads as one quiet group. */
export function HaloBadge({
  size = 56,
  className = "",
  children,
}: {
  size?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`icon-halo ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}

/* ---------------------------------------------------------------
   FEATURE → ICON MAP
   Mirrors the three columns on the print collateral.
   --------------------------------------------------------------- */

export const ICONS = {
  // Pillar headers
  aiReception: HeadsetIcon,
  businessAutomation: GearCycleIcon,
  growthServices: GrowthChartIcon,

  // AI Reception
  aiReceptionist: ClockIcon,
  humanLikeConversations: SpeechBubbleIcon,
  leadQualification: PersonIcon,
  appointmentScheduling: CalendarIcon,
  customerSupport: SupportChatIcon,
  missedCallRecovery: PhoneReturnIcon,

  // Business Automation
  crm: UsersIcon,
  automatedFollowUps: EnvelopeIcon,
  emailSmsCampaigns: EnvelopeIcon,
  reviewRequests: StarIcon,
  workflowAutomation: WorkflowIcon,
  reporting: BarChartIcon,

  // Growth Services
  websiteDesign: MonitorIcon,
  googleBusinessProfile: StorefrontIcon,
  reputationManagement: StarIcon,
  marketingAutomation: MegaphoneIcon,
} as const;
