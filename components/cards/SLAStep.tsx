"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/lib/icons";
import type { SlaFeature } from "@/lib/content/sla";

export function SLAStep({
  feature,
  index,
  isLast,
}: {
  feature: SlaFeature;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-5 pb-10 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white ring-4 ring-accent/15">
          <DynamicIcon name={feature.icon} className="h-5 w-5" />
        </div>
        {!isLast && (
          <span className="mt-2 w-px flex-1 bg-gradient-to-b from-navy/30 to-navy/5" />
        )}
      </div>
      <div className="pt-2">
        <h3 className="font-display text-lg font-semibold text-navy">
          {feature.title}
        </h3>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-600">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
