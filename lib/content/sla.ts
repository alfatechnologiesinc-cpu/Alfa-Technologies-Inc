export type SlaFeature = {
  title: string;
  description: string;
  icon: string;
};

export const slaFeatures: SlaFeature[] = [
  {
    title: "Systematic Call Coordination",
    description:
      "Meticulous logging and tracking of customer issues for structured resolution and transparency.",
    icon: "PhoneCall",
  },
  {
    title: "Guaranteed 3-Hour SLA Response",
    description:
      "Assured on-site engineer attendance within 3 hours on all working days to maximize uptime.",
    icon: "Timer",
  },
  {
    title: "Proactive Preventive Maintenance",
    description:
      "Scheduled health checks, cleanups, and diagnostics to isolate and fix issues before they cause downtime.",
    icon: "Activity",
  },
  {
    title: "In-House Technical Repair Centre (TRC)",
    description:
      "Fully equipped advanced laboratory for component-level diagnostics and complex technical overhauls.",
    icon: "FlaskConical",
  },
  {
    title: "Exhaustive Spares Inventory",
    description:
      "Massive stockpiles of critical replacements to eliminate traditional supply-chain delivery delays.",
    icon: "Boxes",
  },
];

export const amcScope = [
  "Servers",
  "Mission-Critical Desktops",
  "High-End Gaming / Rendering Systems",
  "Printers",
  "Networking Infrastructure",
];
