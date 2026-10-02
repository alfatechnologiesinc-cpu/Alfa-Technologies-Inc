"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { company } from "@/lib/content/company";

const stats = [
  { value: company.yearsExperience, suffix: "", label: "Years of Experience" },
  { value: company.slaHours, suffix: "-Hour", label: "Guaranteed SLA Response" },
  { value: 35, suffix: "+", label: "Institutions Served" },
  { value: company.verticalCount, suffix: "", label: "Industry Verticals" },
];

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="bg-navy-dark py-14 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-display text-4xl font-bold text-accent md:text-5xl">
              <CountUpNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/70 md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
