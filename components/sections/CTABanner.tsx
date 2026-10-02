import { Mail, Phone, Truck } from "lucide-react";
import { company } from "@/lib/content/company";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-24">
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
          {company.ctaHeadline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          {company.ctaSubline}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={company.phoneHref}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Call {company.phoneDisplay}
          </a>
          <a
            href={company.emailHref}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            {company.email}
          </a>
        </div>

        <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
          <Truck className="h-4 w-4" />
          {company.freeDelivery}
        </div>
      </div>
    </section>
  );
}
