"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneFrame } from "@/components/ConsoleUI";

const TABS = [
  {
    key: "home",
    label: "Dashboard",
    kicker: "STREAK · 6 DAYS",
    headline: "Built For Traders Who Show Up Daily",
    copy: "Most trading tools are something you open when things go wrong. Trader Console is something you open on purpose, every day — and it keeps score.",
    features: [
      "Daily check-in that actually tracks your streak",
      "Submit Profitshots for a shot at the monthly prize",
      "Lot size calculator built into the app, not a spreadsheet",
      "Inner Circle Academy, one tap from the home screen",
    ],
  },
  {
    key: "insights",
    label: "Market Insights",
    kicker: "XAU/USD · LIVE",
    headline: "We Read The Market Before You Open A Chart",
    copy: "Sentiment across every timeframe, aligned or not, updated live — so you walk into a trade already knowing what the market's actually doing.",
    features: [
      "Live gold sentiment, not a lagging indicator",
      "Every timeframe checked for alignment at a glance",
      "Short-term and long-term read shown side by side",
      "Red-folder news alerts before price actually moves",
    ],
  },
];

export default function ConsoleSpotlight() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const tab = TABS[active];

  useEffect(() => {
    let lastProgress = Infinity;
    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const section = sectionRef.current;
        const el = tiltRef.current;
        if (!section || !el) return;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (vh / 2 - center) / (vh / 2)));
        if (Math.abs(progress - lastProgress) < 0.001) return;
        lastProgress = progress;
        el.style.transform = `perspective(900px) rotateY(${progress * 14}deg)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-28 px-5 md:px-10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 50% 40%, rgba(58,44,14,0.55) 0%, rgba(20,15,6,0.4) 45%, rgba(0,0,0,0) 78%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="mb-3 max-w-md mx-auto md:mx-0 text-center md:text-left">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-gold/60" />
            <span className="text-[9px] md:text-[10px] tracking-[2.5px] text-gold-bright uppercase font-bold">
              Built In-House. Used Nowhere Else.
            </span>
          </div>
        </div>
        <div className="text-center md:text-left mb-8 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gold-bright mb-3">
            Trader Console
          </h2>
          <p className="text-sm md:text-base text-foreground/70 max-w-xl mx-auto md:mx-0">
            Most trading communities hand you a Telegram group and call it a
            platform. We built a full companion app instead — and we&apos;re
            still one of the only ones who have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center py-4">
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "340px",
                  height: "300px",
                  background:
                    "radial-gradient(ellipse, rgba(240,214,135,0.4) 0%, rgba(212,175,55,0.16) 45%, rgba(0,0,0,0) 75%)",
                }}
              />
              <div key={tab.key} className="relative animate-[consoleFade_0.4s_ease]">
                <div ref={tiltRef} className="will-change-transform" style={{ transformStyle: "preserve-3d" }}>
                  <PhoneFrame tabKey={tab.key} width={220} height={460} />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {TABS.map((t, i) => (
                <button
                  key={t.key}
                  onClick={() => setActive(i)}
                  className="text-xs md:text-sm font-semibold tracking-wide rounded-full px-4 py-2 md:px-6 md:py-2.5 transition-all"
                  style={{
                    color: active === i ? "#0A0A0A" : "#F0D687",
                    background:
                      active === i
                        ? "linear-gradient(155deg,#F0D687,#C9A84C)"
                        : "rgba(255,255,255,0.06)",
                    border:
                      active === i
                        ? "1px solid transparent"
                        : "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div key={tab.key + "-copy"} className="animate-[consoleFade_0.4s_ease]">
            <p className="text-[10px] tracking-[2px] text-gold/70 uppercase font-semibold mb-2">
              {tab.kicker}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-gold-bright mb-2">
              {tab.headline}
            </h3>
            <p className="text-sm md:text-base text-foreground/70 mb-6">
              {tab.copy}
            </p>
            <ul className="space-y-3">
              {tab.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <span className="text-gold-bright mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="/console"
              className="inline-block mt-6 text-sm font-semibold text-gold-bright border border-gold/40 rounded-full px-5 py-2.5 hover:bg-gold/10 transition-colors"
            >
              Explore the full app →
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes consoleFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
