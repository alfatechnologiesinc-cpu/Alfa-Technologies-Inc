import { Server, X, Check } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { SLAStep } from "@/components/cards/SLAStep";
import { slaFeatures, amcScope } from "@/lib/content/sla";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Annual Maintenance Contracts (AMC)",
  description:
    "Single-point accountability for your enterprise hardware in Hyderabad & Secunderabad — guaranteed 3-hour SLA response, in-house repair centre, and preventive maintenance.",
  path: "/services/amc",
});

const withoutAmc = [
  "Multiple vendors to coordinate during a single outage",
  "Unclear response-time commitments",
  "Repairs wait on third-party turnaround",
  "Reactive fixes only, after downtime has already hit",
];

const withAmc = [
  "One accountable team for your entire hardware estate",
  "Guaranteed 3-hour on-site response, every working day",
  "In-house Technical Repair Centre for fast component-level fixes",
  "Scheduled preventive maintenance before issues cause downtime",
];

export default function AmcPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Annual Maintenance & Support Contracts"
        title="Single-Point Accountability for Your Entire IT Estate"
        subtitle="Servers, mission-critical desktops, high-end gaming/rendering systems, printers, and networking infrastructure — covered under one structured SLA."
        primaryCta={{ href: "/contact", label: "Request an AMC Quote" }}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Five Pillars of Every AMC"
            subtitle="A structured, transparent support model built to maximize uptime."
          />
          <div className="mt-12">
            {slaFeatures.map((feature, index) => (
              <SLAStep
                key={feature.title}
                feature={feature}
                index={index}
                isLast={index === slaFeatures.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Coverage"
            title="What's Covered Under Your AMC"
            align="center"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {amcScope.map((item) => (
              <div
                key={item}
                className="flex flex-col items-center gap-3 rounded-2xl border border-surface-100 bg-white px-4 py-6 text-center shadow-sm shadow-navy/[0.03]"
              >
                <Server className="h-6 w-6 text-accent" strokeWidth={2} />
                <p className="text-sm font-medium text-ink-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <SectionHeading
            eyebrow="The Difference"
            title="Why Single-Point Accountability Matters"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-surface-100 bg-surface-50 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-ink-600">
                Without an AMC
              </p>
              <ul className="mt-5 space-y-3.5">
                {withoutAmc.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-600">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-600/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-navy p-6 text-white md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                With an Alfa AMC
              </p>
              <ul className="mt-5 space-y-3.5">
                {withAmc.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
