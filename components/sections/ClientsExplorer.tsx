"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ClientCard } from "@/components/cards/ClientCard";
import { clients, clientCategories, type ClientCategory } from "@/lib/content/clients";

export function ClientsExplorer() {
  const [active, setActive] = useState<ClientCategory | "All">("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? clients
        : clients.filter((client) => client.category === active),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={clsx(
            "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
            active === "All"
              ? "border-accent bg-accent text-white"
              : "border-surface-100 bg-white text-ink-600 hover:border-navy/20"
          )}
        >
          All Industries
        </button>
        {clientCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={clsx(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
              active === category
                ? "border-accent bg-accent text-white"
                : "border-surface-100 bg-white text-ink-600 hover:border-navy/20"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-600">
          No clients found in this category yet.
        </p>
      )}
    </div>
  );
}
