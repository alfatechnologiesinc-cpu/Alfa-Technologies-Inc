"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/lib/icons";
import type { Service } from "@/lib/content/services";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group rounded-2xl border border-surface-100 bg-white p-6 shadow-sm shadow-navy/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
        <DynamicIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">
        {service.description}
      </p>
    </motion.div>
  );
}
