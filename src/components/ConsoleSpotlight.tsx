"use client";

import { useState } from "react";

const TABS = [
  {
    key: "dashboard",
    label: "Dashboard",
    phone: "/phones/trader_console_phone_crop.png",
    headline: "Your New Daily Driver",
    copy: "Check in, chase the streak, sharpen your edge — every single day.",
    features: [
      "Daily check-in & streak tracking",
      "Send your Profitshots for the monthly prize",
      "Built-in lot size calculator",
      "Inner Circle Academy, one tap away",
    ],
  },
  {
    key: "insights",
    label: "Market Insights",
    phone: "/phones/console_insights_phone_crop.png",
    headline: "The Market, Read For You",
    copy: "Live gold sentiment, every timeframe, before you even open a chart.",
    features: [
      "Live XAU/USD sentiment, updated in real time",
      "Trend alignment across every timeframe",
      "Short vs long-term read, side by side",
      "Red-folder news alerts before they hit",
    ],
  },
];

export default function ConsoleSpotlight() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="relative py-16 md:py-28 px-5 md:px-10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 50% 40%, rgba(58,44,14,0.55) 0%, rgba(20,15,6,0.4) 45%, rgba(0,0,0,0) 78%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-3">
          <span className="inline-block text-[9px] md:text-xs tracking-[2px] md:tracking-[3px] text-gold-bright uppercase font-bold border border-gold/40 rounded-full px-3 py-1">
            Nowhere Else Will You Find This
          </span>
        </div>
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gold-bright mb-3">
            Trader Console
          </h2>
          <p className="text-sm md:text-base text-foreground/70 max-w-xl mx-auto">
            A full companion app built for our own traders — one of the only
            things like it anywhere. This isn&apos;t a mockup of an idea.
            It&apos;s live.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center gap-2 mb-8 md:mb-12">
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
          {/* Phone */}
          <div className="relative flex items-center justify-center h-[320px] md:h-[420px]">
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "340px",
                height: "260px",
                background:
                  "radial-gradient(ellipse, rgba(240,214,135,0.4) 0%, rgba(212,175,55,0.16) 45%, rgba(0,0,0,0) 75%)",
              }}
            />
            <img
              key={tab.key}
              src={tab.phone}
              alt={tab.label}
              className="relative h-full max-h-[300px] md:max-h-[400px] w-auto drop-shadow-[0_24px_50px_rgba(0,0,0,0.65)] animate-[consoleFade_0.4s_ease]"
            />
          </div>

          {/* Copy */}
          <div key={tab.key + "-copy"} className="animate-[consoleFade_0.4s_ease]">
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
