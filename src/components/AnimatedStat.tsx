"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedStat({
  value,
  suffix = "%",
  label,
  color = "#F0D687",
  size = 140,
}: {
  value: number;
  suffix?: string;
  label: string;
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1200;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    let raf: number;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(ease(t) * value));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [triggered, value]);

  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const clampedPct = Math.min(100, Math.abs(value));
  const offset = triggered
    ? circumference - (clampedPct / 100) * circumference
    : circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={8}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={8}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.33,1,0.68,1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold" style={{ color }}>
            {display}{suffix}
          </span>
        </div>
      </div>
      <p className="text-[10px] md:text-xs text-muted uppercase tracking-wide mt-3">{label}</p>
    </div>
  );
}
