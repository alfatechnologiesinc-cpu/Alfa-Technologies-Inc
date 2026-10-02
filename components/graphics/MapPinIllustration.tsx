export function MapPinIllustration() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 240"
      className="h-40 w-40 text-navy"
      fill="none"
    >
      <circle cx="120" cy="120" r="110" className="fill-surface-50" />
      <circle
        cx="120"
        cy="120"
        r="78"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />
      <circle
        cx="120"
        cy="120"
        r="46"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
      <path
        d="M120 60c-24 0-42 18-42 42 0 30 42 78 42 78s42-48 42-78c0-24-18-42-42-42Z"
        fill="currentColor"
        className="text-accent"
      />
      <circle cx="120" cy="102" r="14" fill="white" />
    </svg>
  );
}
