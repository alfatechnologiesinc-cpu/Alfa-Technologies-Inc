"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { company } from "@/lib/content/company";
import { Wordmark } from "@/components/brand/Wordmark";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy-dark/98 md:hidden"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="flex h-full flex-col px-6 pt-6 pb-10"
          >
            <div className="flex items-center justify-between">
              <Wordmark variant="light" imageClassName="h-16" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-12 flex flex-1 flex-col gap-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={
                      "rounded-xl px-4 py-4 text-2xl font-display font-semibold transition-colors " +
                      (active
                        ? "bg-white/10 text-accent"
                        : "text-white hover:bg-white/5")
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30"
            >
              <Phone className="h-5 w-5" />
              Call {company.phoneDisplay}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
