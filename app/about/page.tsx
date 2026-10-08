import Image from "next/image";
import { CheckCircle2, ShieldCheck, Truck, Users } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { PartnerBadgeStrip } from "@/components/ui/PartnerBadgeStrip";
import { company } from "@/lib/content/company";
import { leadership } from "@/lib/content/team";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Alfa Technologies has served Hyderabad & Secunderabad institutions for 30 years as an authorized Dell, Lenovo, HP & Microsoft partner with an in-house technical repair centre.",
  path: "/about",
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Multi-Brand Authorized Dealer",
    description:
      "Authorized to sell and service Dell, Lenovo, HP, and Microsoft products — one vendor relationship, multiple brands.",
  },
  {
    icon: Users,
    title: "In-House Technical Repair Centre",
    description:
      "A fully equipped lab for component-level diagnostics, so repairs don't wait on third-party turnaround.",
  },
  {
    icon: CheckCircle2,
    title: "Single-Point Accountability",
    description:
      "One team accountable for your entire hardware estate — servers, desktops, printers, and networking.",
  },
  {
    icon: Truck,
    title: "Free Door Delivery",
    description: company.freeDelivery + ".",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="About Alfa Technologies"
        title="30 Years of Building Reliable IT Infrastructure"
        subtitle="We're a Hyderabad-based IT solutions provider trusted by government bodies, enterprises, and institutions to keep their technology running."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              eyebrow="Our Story"
              title="Three Decades in the IT Industry"
              subtitle={`${company.legalName} is a leading Information Technology solution provider with ${company.yearsExperience} years of experience, recognized for delivering innovative technology solutions and premium quality service that empower businesses to achieve seamless continuity and scale.`}
            />
            <div className="rounded-2xl border border-surface-100 bg-surface-50 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Team
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                With a profound understanding of the evolving tech landscape,
                our core team brings deep technical and operational experience
                in architecting information system solutions for the most
                complex requirements of our customers — committing highly
                skilled, certified, and productive engineering resources to
                every account.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="The People Behind Alfa"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {leadership.map((leader) => (
              <article
                key={leader.name}
                className="overflow-hidden rounded-2xl border border-surface-100 bg-white shadow-sm shadow-navy/[0.03]"
              >
                <Image
                  src={leader.photo}
                  alt={`${leader.name}, ${leader.title} of ${company.legalName}`}
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-accent">
                    {leader.title}
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-600">
                    {leader.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Why Alfa"
            title="What Makes Us the Long-Term IT Partner"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex gap-4 rounded-2xl border border-surface-100 bg-white p-6 shadow-sm shadow-navy/[0.03]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <pillar.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Strategic Authorizations"
            title="Authorized Ecosystem Partner"
            subtitle="We hold direct authorized-dealer relationships across the hardware and software ecosystems institutions rely on."
            align="center"
          />
          <div className="mt-10 flex justify-center">
            <PartnerBadgeStrip />
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Hardware and Software, Integrated in Parallel"
            light
            align="center"
            subtitle="Modern enterprises depend on systems integrators during the planning phase, not just execution. We run cross-platform strategies that integrate legacy environments with modern tech stacks — achieving real savings by retaining your existing high-value hardware investments."
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
