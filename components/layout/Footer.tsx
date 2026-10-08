import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { company } from "@/lib/content/company";
import { Wordmark } from "@/components/brand/Wordmark";
import { PartnerBadgeStrip } from "@/components/ui/PartnerBadgeStrip";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1.2fr]">
          <div>
            <Wordmark variant="light" imageClassName="h-24 md:h-28" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {company.shortTagline}. Trusted by institutions across
              Hyderabad &amp; Secunderabad for {company.yearsExperience}
               years.
            </p>
            <div className="mt-6">
              <PartnerBadgeStrip variant="light" size="sm" />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2.5 hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-center gap-2.5 hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {company.serviceArea}, {company.region}, {company.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <p>{company.freeDelivery}</p>
        </div>
      </div>
    </footer>
  );
}
