"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import clsx from "clsx";
import { navLinks } from "@/lib/nav";
import { company } from "@/lib/content/company";
import { Wordmark } from "@/components/brand/Wordmark";
import { MobileNav } from "@/components/layout/MobileNav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu on route change. Adjusting state during render
  // (rather than in an effect) avoids the extra commit-then-rerun pass an
  // effect-based setState would trigger on every navigation.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  return (
    // MobileNav is a sibling here, not a child of <header> — the header
    // gains `backdrop-blur` once scrolled, and a `backdrop-filter` ancestor
    // becomes the containing block for fixed descendants in Chromium,
    // which would trap the full-screen overlay inside the header's own
    // (short) box instead of the viewport.
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-navy/95 shadow-lg shadow-navy/10 backdrop-blur"
            : "bg-transparent"
        )}
      >
        <div
          className={clsx(
            "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 md:px-8",
            scrolled ? "py-3" : "py-4"
          )}
        >
          <Wordmark
            variant="light"
            imageClassName={scrolled ? "h-12 md:h-16" : "h-16 md:h-24"}
          />

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "bg-white/10 text-accent"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/30 transition-colors hover:bg-accent-dark"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="rounded-full p-2 text-white hover:bg-white/10 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
