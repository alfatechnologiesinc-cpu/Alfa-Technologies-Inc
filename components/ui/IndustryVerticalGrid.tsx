"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/lib/icons";
import { industries } from "@/lib/content/industries";

export function IndustryVerticalGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {industries.map((industry, index) => {
        return (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-surface-100 bg-white px-4 py-6 text-center shadow-sm shadow-navy/[0.03]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-navy">
              <DynamicIcon name={industry.icon} className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium leading-snug text-ink-900">
              {industry.name}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
