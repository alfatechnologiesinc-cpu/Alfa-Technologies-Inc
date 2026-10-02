import { Mail, Phone, Truck } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPinIllustration } from "@/components/graphics/MapPinIllustration";
import { company } from "@/lib/content/company";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Alfa Technologies for IT hardware, networking, or AMC support in Hyderabad & Secunderabad. Call, email, or send a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Get In Touch"
        title="Let's Build Something Reliable Together"
        subtitle="Tell us what you need — hardware, networking, or an AMC plan — and our team will get back to you."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Direct Contact"
                title="Reach Us Directly"
                subtitle="For the fastest response, call or email us directly."
              />

              <div className="mt-8 space-y-4">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-4 rounded-2xl border border-surface-100 bg-white p-5 shadow-sm shadow-navy/[0.03] transition-colors hover:border-accent/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-600">
                      Call {company.contactPerson}
                    </p>
                    <p className="font-display text-lg font-semibold text-navy">
                      {company.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={company.emailHref}
                  className="flex items-center gap-4 rounded-2xl border border-surface-100 bg-white p-5 shadow-sm shadow-navy/[0.03] transition-colors hover:border-accent/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-600">
                      Email
                    </p>
                    <p className="font-display text-lg font-semibold text-navy">
                      {company.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Truck className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-600">
                      Service Area
                    </p>
                    <p className="font-display text-base font-semibold text-navy">
                      {company.freeDelivery}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-surface-100 bg-surface-50 p-8 text-center">
                <MapPinIllustration />
                <p className="font-display text-base font-semibold text-navy">
                  {company.serviceArea}, {company.region}, {company.country}
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
