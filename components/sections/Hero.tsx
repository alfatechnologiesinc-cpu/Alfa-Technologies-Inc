"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroGraphic } from "@/components/graphics/HeroGraphic";
import { PartnerBadgeStrip } from "@/components/ui/PartnerBadgeStrip";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showPartners = false,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  showPartners?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      className={
        "relative overflow-hidden bg-navy text-white " +
        (compact ? "pt-32 pb-16 md:pt-40 md:pb-20" : "pt-36 pb-24 md:pt-48 md:pb-32")
      }
    >
      <HeroGraphic />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-wider text-accent"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className={
              "mt-4 font-display font-bold tracking-tight " +
              (compact ? "text-4xl md:text-6xl" : "text-5xl md:text-7xl")
            }
          >
            {title}
          </motion.h1>
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-white/75 md:text-xl"
          >
            {subtitle}
          </motion.p>

          {(primaryCta || secondaryCta) && (
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}

          {showPartners && (
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-14"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Authorized ecosystem partner
              </p>
              <div className="mt-4">
                <PartnerBadgeStrip variant="light" size="sm" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
