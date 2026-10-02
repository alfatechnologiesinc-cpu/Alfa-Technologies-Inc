"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { Client } from "@/lib/content/clients";

export function ClientCard({
  client,
  index = 0,
}: {
  client: Client;
  index?: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3, delay: (index % 8) * 0.03 }}
      className={clsx(
        "flex min-h-[92px] flex-col justify-center rounded-xl border px-5 py-4 text-sm font-medium transition-colors",
        client.featured
          ? "border-accent/30 bg-accent/5 text-navy"
          : "border-surface-100 bg-surface-50 text-ink-900 hover:border-navy/20"
      )}
    >
      <span className="leading-snug">{client.name}</span>
      <span className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-ink-600/70">
        {client.category}
      </span>
    </motion.div>
  );
}
