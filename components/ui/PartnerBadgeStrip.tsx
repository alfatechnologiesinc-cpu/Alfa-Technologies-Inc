import clsx from "clsx";

const partners = ["Dell", "Lenovo", "HP", "Microsoft"];

export function PartnerBadgeStrip({
  variant = "dark",
  size = "base",
}: {
  variant?: "dark" | "light";
  size?: "sm" | "base";
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {partners.map((partner) => (
        <span
          key={partner}
          className={clsx(
            "font-display font-bold tracking-tight opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0",
            size === "sm" ? "text-lg" : "text-2xl",
            variant === "light" ? "text-white" : "text-navy"
          )}
        >
          {partner}
        </span>
      ))}
    </div>
  );
}
