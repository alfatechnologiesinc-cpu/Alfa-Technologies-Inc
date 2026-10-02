export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "computer-systems-laptops",
    title: "Computer Systems & Laptops",
    description:
      "Multi-brand institutional supply, configuration, and structural deployments.",
    longDescription:
      "We supply, configure, and deploy desktops and laptops across leading brands for institutions of every size — from single procurement orders to large structural rollouts.",
    icon: "Laptop",
    featured: true,
  },
  {
    slug: "advanced-networking-solutions",
    title: "Advanced Networking Solutions",
    description:
      "Comprehensive LAN/WAN engineering, infrastructure architecture, routing, and switching.",
    longDescription:
      "From office LANs to multi-site WAN links, our engineers design, route, and switch network infrastructure built to scale with your organization.",
    icon: "Network",
    featured: true,
  },
  {
    slug: "licensed-software-security",
    title: "Licensed Software & Security",
    description:
      "Authorized dealers for McAfee Antivirus, Microsoft Products, Sophos, and SonicWall enterprise security.",
    longDescription:
      "As authorized dealers for McAfee, Microsoft, Sophos, and SonicWall, we license and deploy enterprise-grade security software that keeps your environment protected.",
    icon: "ShieldCheck",
    featured: true,
  },
  {
    slug: "printers-peripherals",
    title: "Printers & Peripherals",
    description:
      "Multi-brand printers, all-in-ones, and a wide array of premium computer hardware, accessories & consumables.",
    longDescription:
      "A full catalog of multi-brand printers, all-in-one devices, and premium hardware accessories & consumables, sourced and delivered on your schedule.",
    icon: "Printer",
    featured: false,
  },
  {
    slug: "facility-management-services",
    title: "Facility Management Services",
    description:
      "Dedicated on-site and remote infrastructure management, tracking, and process optimization.",
    longDescription:
      "Our on-site and remote facility management teams track, maintain, and continuously optimize your IT infrastructure so it runs quietly in the background.",
    icon: "ClipboardList",
    featured: false,
  },
  {
    slug: "system-integration",
    title: "System Integration",
    description:
      "Aligning hardware implementation and software environment optimization parallelly to ensure flawless co-existence.",
    longDescription:
      "Modern enterprises depend on systems integrators during planning, not just execution. We run hardware and software tracks in parallel — integrating legacy environments with modern tech stacks and retaining high-value existing hardware wherever it makes sense.",
    icon: "Layers",
    featured: false,
  },
  {
    slug: "laptop-spares-components",
    title: "All Laptop Spares & Components",
    description:
      "Exhaustive inventory including genuine batteries, adaptors, keypads, and modular replacements.",
    longDescription:
      "A deep inventory of genuine batteries, adaptors, keypads, and modular replacement parts — stocked to eliminate the wait that typically comes with spares sourcing.",
    icon: "BatteryCharging",
    featured: false,
  },
  {
    slug: "on-call-maintenance-repairs",
    title: "On-Call Maintenance & Repairs",
    description:
      "Rapid-response breakdown repair services with guaranteed turnaround times.",
    longDescription:
      "When hardware breaks down, our rapid-response repair service gets an engineer on it fast, with turnaround times you can plan around.",
    icon: "Wrench",
    featured: true,
  },
];
