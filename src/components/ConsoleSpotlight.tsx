"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  {
    key: "dashboard",
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

function AbstractDevice({ tabKey }: { tabKey: string }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: "230px",
        height: "470px",
      }}
    >
      <div
        className="absolute inset-0 rounded-[34px] p-2"
        style={{
          background: "linear-gradient(155deg, #1a1a1a, #0a0a0a)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="w-full h-full rounded-[26px] overflow-hidden relative flex flex-col p-4"
          style={{ background: "#08070a" }}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black/80 z-10" />

          <div className="mt-6 flex-1">
            <p className="text-[9px] tracking-[2px] text-gold uppercase font-bold mb-1">
              {tabKey === "dashboard" ? "The Inner Circle" : "Gold Spotlight"}
            </p>

            {tabKey === "dashboard" ? (
              <>
                <div className="flex items-center gap-3 mt-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "linear-gradient(155deg,#F0D687,#C9A84C)",
                      color: "#0A0A0A",
                    }}
                  >
                    CP
                  </div>
                  <div>
                    <p className="text-[8px] text-muted">Welcome back</p>
                    <p className="text-xs text-foreground font-semibold">Carson</p>
                  </div>
                  <div className="ml-auto text-center">
                    <p className="text-gold-bright font-bold text-sm">6</p>
                    <p className="text-[7px] text-muted uppercase tracking-wide">Streak</p>
                  </div>
                </div>
                {["Send Profitshots", "Lot Size Calculator", "Inner Circle Academy"].map((t) => (
                  <div
                    key={t}
                    className="rounded-lg px-3 py-2.5 mb-2 text-[10px] text-foreground/80"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </>
            ) : (
              <>
                <div
                  className="rounded-xl p-3 mt-3 mb-3"
                  style={{
                    background: "rgba(95,217,138,0.08)",
                    border: "1px solid rgba(95,217,138,0.3)",
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-foreground font-semibold">XAU/USD</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(95,217,138,0.25)", color: "#5FD98A" }}>
                      BULLISH
                    </span>
                  </div>
                  <p className="text-lg font-bold text-foreground">4,067</p>
                </div>
                <p className="text-[8px] text-muted uppercase tracking-wide mb-1.5">Trend · All Timeframes</p>
                <div className="flex gap-1 mb-4">
                  {[1, 1, 1, 1, 1, 0].map((up, i) => (
                    <div
                      key={i}
                      className="flex-1 h-6 rounded"
                      style={{ background: up ? "#5FD98A" : "#E0635A", opacity: 0.85 }}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-[7px] text-muted uppercase">Short Term</p>
                    <p className="text-[10px] font-semibold" style={{ color: "#5FD98A" }}>▲ Bullish</p>
                  </div>
                  <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-[7px] text-muted uppercase">Long Term</p>
                    <p className="text-[10px] font-semibold text-foreground/70">• Neutral</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConsoleSpotlight() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const tab = TABS[active];

  useEffect(() => {
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

        <div className="flex justify-center md:justify-start gap-2 mb-8 md:mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative flex items-center justify-center h-[420px] md:h-[500px]">
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
                <AbstractDevice tabKey={tab.key} />
              </div>
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
