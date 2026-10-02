import { company } from "@/lib/content/company";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.legalName,
    image: `${company.siteUrl}/og/default.png`,
    url: company.siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: "IN",
    },
    areaServed: [company.city, "Secunderabad"],
    description:
      "IT hardware, networking, licensed software, and annual maintenance contracts for institutions across Hyderabad & Secunderabad.",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${company.siteUrl}${item.path}`,
    })),
  };
}
