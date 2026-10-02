import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { ClientsExplorer } from "@/components/sections/ClientsExplorer";
import { IndustryVerticalGrid } from "@/components/ui/IndustryVerticalGrid";
import { company } from "@/lib/content/company";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Our Clients",
  description:
    "See the government bodies, NGOs, pharma, construction, and enterprise clients Alfa Technologies has supported across Hyderabad & Secunderabad.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Trusted Network"
        title="Trusted by 100s of Institutions Across Industries"
        subtitle={`We're proud to serve over hundreds of institutions. A snapshot of our network of ${company.clientCountLabel} named clients below.`}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            align="center"
            eyebrow="Filter by Industry"
            title="Our Client Network"
            subtitle="Filter by industry to see the range of institutions that rely on Alfa Technologies."
          />
          <div className="mt-10">
            <ClientsExplorer />
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            align="center"
            eyebrow="Verticals Served"
            title="Industry Verticals We Specialize In"
          />
          <div className="mt-12">
            <IndustryVerticalGrid />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
