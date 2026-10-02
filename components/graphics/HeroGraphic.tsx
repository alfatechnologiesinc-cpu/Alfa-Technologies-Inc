export function HeroGraphic() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute -right-24 -top-24 h-[36rem] w-[36rem] motion-safe:animate-drift md:-right-16 md:top-0"
        viewBox="0 0 400 400"
        fill="none"
      >
        <rect
          x="40"
          y="40"
          width="320"
          height="320"
          rx="48"
          className="fill-accent/10"
        />
        <rect
          x="90"
          y="90"
          width="220"
          height="220"
          rx="36"
          className="fill-accent/10"
          transform="rotate(18 200 200)"
        />
      </svg>
      <svg
        className="absolute -bottom-32 -left-20 h-[28rem] w-[28rem] motion-safe:animate-drift-slow md:left-0"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="160" className="fill-white/[0.06]" />
      </svg>
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 800 600"
        fill="none"
      >
        <path
          d="M0 120 H220 V260 H460 V90 H800"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M0 420 H180 V520 H520 V360 H800"
          stroke="white"
          strokeWidth="1.5"
        />
        <circle cx="220" cy="120" r="4" fill="white" />
        <circle cx="460" cy="260" r="4" fill="white" />
        <circle cx="180" cy="420" r="4" fill="white" />
        <circle cx="520" cy="360" r="4" fill="white" />
      </svg>
    </div>
  );
}
