import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export function Wordmark({
  variant = "dark",
  className,
  imageClassName = "h-12 md:h-14",
}: {
  variant?: "dark" | "light";
  className?: string;
  imageClassName?: string;
}) {
  // The light variant recolours the navy lettering to white so the logo
  // stays legible on the navy header/footer backgrounds.
  const src =
    variant === "light" ? "/images/logo-light.png" : "/images/logo.png";

  return (
    <Link
      href="/"
      aria-label="Alfa Technologies home"
      className={clsx("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={src}
        alt="Alfa Technologies Inc"
        width={723}
        height={608}
        priority
        className={clsx("w-auto transition-all duration-300", imageClassName)}
      />
    </Link>
  );
}
