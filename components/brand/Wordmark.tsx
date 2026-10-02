import Link from "next/link";
import clsx from "clsx";

export function Wordmark({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const primary = variant === "light" ? "text-white" : "text-navy";
  const secondary = variant === "light" ? "text-white/70" : "text-ink-600";

  return (
    <Link
      href="/"
      aria-label="Alfa Technologies home"
      className={clsx(
        "group inline-flex items-center gap-2.5 font-display",
        className
      )}
    >
      <span
        aria-hidden
        className="relative flex h-8 w-8 shrink-0 items-center justify-center"
      >
        <span className="absolute h-6 w-6 rotate-45 rounded-[6px] bg-accent transition-transform duration-300 group-hover:rotate-[55deg]" />
        <span
          className={clsx(
            "absolute h-6 w-6 -rotate-12 rounded-[6px] border-2",
            variant === "light" ? "border-white/80" : "border-navy"
          )}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={clsx("text-lg font-bold tracking-tight", primary)}>
          ALFA
        </span>
        <span
          className={clsx(
            "text-[10px] font-semibold uppercase tracking-[0.2em]",
            secondary
          )}
        >
          Technologies
        </span>
      </span>
    </Link>
  );
}
