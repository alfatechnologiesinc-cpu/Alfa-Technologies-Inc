import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ClientCard } from "@/components/cards/ClientCard";
import { services } from "@/lib/content/services";
import { clients } from "@/lib/content/clients";
import { slaFeatures } from "@/lib/content/sla";
import { DynamicIcon } from "@/lib/icons";
import { company } from "@/lib/content/company";

const featuredServices = services.filter((s) => s.featured);
const homeClients = clients.slice(0, 12);
const teaserSla = slaFeatures.filter((f) =>
  ["Guaranteed 3-Hour SLA Response", "In-House Technical Repair Centre (TRC)", "Exhaustive Spares Inventory"].includes(
    f.title
  )
);

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={`${company.yearsExperience} Years · Hyderabad & Secunderabad`}
        title="Powering IT Infrastructure Across Hyderabad, Reliably."
        subtitle="Hardware, networking, licensed software, and AMC support for government bodies, enterprises, and institutions — backed by an in-house repair centre and a 3-hour SLA."
        primaryCta={{ href: "/contact", label: "Get a Quote" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        showPartners
      />

      <StatsStrip />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What We Do"
              title="End-to-End IT, Under One Roof"
              subtitle="From institutional hardware supply to enterprise networking and licensed security software — eight core services built for uptime."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-accent hover:text-accent-dark"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Annual Maintenance Contracts"
              title="One Point of Accountability for Your Entire IT Estate"
              subtitle="Servers, desktops, printers, and networking — covered under a single structured AMC with a guaranteed 3-hour response."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {teaserSla.map((feature) => {
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-surface-100 bg-white p-5 shadow-sm shadow-navy/[0.03]"
                  >
                    <DynamicIcon
                      name={feature.icon}
                      className="h-6 w-6 text-accent"
                    />
                    <p className="mt-3 font-display text-sm font-semibold text-navy">
                      {feature.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/services/amc"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Learn About Our AMC Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Trusted Network"
            title="Trusted by Hundreds of Institutions"
            subtitle="From government departments to pharma, hospitality, and infrastructure firms — a snapshot of our client network."
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {homeClients.map((client, index) => (
              <ClientCard key={client.name} client={client} index={index} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
            >
              See our full client network
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="inline-flex items-center gap-1.5 text-sm text-ink-600">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              {company.verticalCount} industry verticals served
            </span>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
