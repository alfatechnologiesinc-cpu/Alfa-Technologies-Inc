import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/lib/content/services";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "IT Services",
  description:
    "Computer hardware, networking, licensed security software, printers, facility management, and system integration services for institutions in Hyderabad & Secunderabad.",
  path: "/services",
});

const integrationService = services.find(
  (s) => s.slug === "system-integration"
)!;
const gridServices = services.filter((s) => s.slug !== "system-integration");

export default function ServicesPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="What We Do"
        title="End-to-End IT Solutions"
        subtitle="Eight core services covering hardware, networking, security, and support — delivered by a team that's been doing this for 30 years."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gridServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-navy/10 bg-navy p-8 text-white md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <Layers className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {integrationService.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
                    {integrationService.longDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/services/amc"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark"
            >
              Need ongoing support? See our AMC plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <SectionHeading
            align="center"
            eyebrow="Industry Verticals"
            title="Serving Every Sector That Depends on Uptime"
            subtitle="Government Organizations · Special Economic Zones (SEZs) · Enterprise Architects · Chartered Accountants · Pharmaceuticals · Infrastructure Developers · Agro Industries · Educational Institutions"
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
