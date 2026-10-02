import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-base md:text-lg",
            light ? "text-white/70" : "text-ink-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
