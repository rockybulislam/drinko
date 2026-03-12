"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 48, suffix: "+", label: "Countries" },
  { value: 12, suffix: "K+", label: "Store Locations" },
  { value: 6, suffix: "", label: "Signature Products" },
  { value: 5, suffix: "+", label: "Years Strong" },
];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!triggered) return;
    startRef.current = null;

    function step(ts: number) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  triggered,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  triggered: boolean;
  delay: number;
}) {
  const [localTrigger, setLocalTrigger] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (triggered) {
      timerRef.current = setTimeout(() => setLocalTrigger(true), delay);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [triggered, delay]);

  const count = useCountUp(value, 1800, localTrigger);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 gap-2 group">
      <div className="flex items-baseline gap-1">
        <span
          className="font-black text-white tabular-nums"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        >
          {count}
        </span>
        <span className="text-red-500 font-black text-2xl sm:text-3xl">
          {suffix}
        </span>
      </div>
      <p className="text-white/45 text-sm font-semibold uppercase tracking-[0.18em] text-center">
        {label}
      </p>
      {/* Subtle red underline grows in on trigger */}
      <div
        className="h-px bg-red-600 transition-all duration-700 ease-out mt-1"
        style={{ width: localTrigger ? "2.5rem" : "0" }}
      />
    </div>
  );
}

export default function StatsSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={wrapperRef} className="bg-zinc-950 border-y border-white/6">
      {/* Top label */}
      <div className="flex items-center justify-center pt-10 pb-2">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/25">
          Drinko in Numbers
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/6">
        {STATS.map((stat, i) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            triggered={triggered}
            delay={i * 120}
          />
        ))}
      </div>
    </section>
  );
}
