import { Phone } from "lucide-react";
import { company } from "@/lib/content/company";

export function StickyCallButton() {
  return (
    <a
      href={company.phoneHref}
      className="fixed inset-x-4 bottom-4 z-30 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/30 md:hidden"
    >
      <Phone className="h-4 w-4" />
      Call Now — {company.phoneDisplay}
    </a>
  );
}
