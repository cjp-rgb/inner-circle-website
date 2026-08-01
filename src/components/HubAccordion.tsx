"use client";

import { useState, useEffect } from "react";

export const HUBS = [
  {
    slug: "trade-hub",
    logo: "/logos/trade_hub.png",
    phone: "/phones/trade_hub_phone_crop.png",
    tagline: "Four live signal providers, every session covered.",
    detail:
      "Alpha Scalper, London Snipes, Swing Syndicate & High RR — four dedicated providers calling gold and FX around the clock. This is where The Inner Circle's edge begins: live entries, live management, live results, all inside one feed.",
  },
  {
    slug: "vip-hub",
    logo: "/logos/vip_hub.png",
    phone: "/phones/vip_hub_phone_crop.png",
    tagline: "Wins, progress, and direct access to the team.",
    detail:
      "Not another signal feed — a room built around the people in it. General chat, wins & progress, direct announcements from the team, and the standards that keep it worth being in.",
  },
  {
    slug: "automated-hub",
    logo: "/logos/automated_hub.png",
    phone: "/phones/automated_hub_phone_crop.png",
    tagline: "Gamma — a fully automated gold breakout algo.",
    detail:
      "Link your MT4/5 account and let Gamma work. A hands-off, fully automated approach to trading gold, with a verified track record kept transparent from day one.",
  },
  {
    slug: "forex-hub",
    logo: "/logos/forex_hub.png",
    phone: "/phones/forex_hub_phone_crop.png",
    tagline: "RR-based calls, not pip-chasing.",
    detail:
      "Two dedicated FX traders — Reversal Scout & FX Samurai — calling majors and minors in risk-to-reward, not pips. Risk management comes first, every single time.",
  },
  {
    slug: "education-hub",
    logo: "/logos/education_hub.png",
    phone: "/phones/education_hub_phone_crop.png",
    tagline: "Foundations to advanced SMC.",
    detail:
      "Platform setup, market basics, trader psychology, and a full path through Smart Money Concepts — structured lessons, not a random folder of videos. Copy Trading & Signals runs as its own parallel track for those who'd rather follow than learn SMC first.",
  },
  {
    slug: "trader-console",
    logo: "/logos/trader_console.png",
    phone: "/phones/trader_console_phone_crop.png",
    tagline: "Your trading command center.",
    detail:
      "Live gold sentiment, trend alignment across every timeframe, red-folder news alerts, and one-tap access to every signal room and the Gamma algo — all in one app.",
  },
];

export default function HubAccordion() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hub = params.get("hub");
    if (hub) {
      const idx = HUBS.findIndex((h) => h.slug === hub);
      if (idx !== -1) setActive(idx);
    }
  }, []);

  return (
    <div className="w-full">
      {/* Desktop: horizontal accordion */}
      <div className="hidden md:flex h-[560px] gap-2 max-w-6xl mx-auto px-6">
        {HUBS.map((hub, i) => {
          const isActive = i === active;
          return (
            <button
              key={hub.slug}
              onClick={() => setActive(i)}
              className="relative rounded-2xl overflow-hidden text-left transition-[flex-grow] duration-500 ease-out cursor-pointer"
              style={{
                flexGrow: isActive ? 8 : 1,
                flexBasis: 0,
                background:
                  "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: isActive
                  ? "1px solid rgba(212,175,55,0.4)"
                  : "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 14px 34px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={hub.logo}
                    alt=""
                    className="h-6 w-auto max-w-none opacity-80"
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </div>
              )}

              {isActive && (
                <div className="h-full flex flex-col p-8 animate-[fadeIn_0.4s_ease]">
                  <img src={hub.logo} alt="" className="h-9 w-auto max-w-none mb-4" />
                  <p className="text-sm text-gold-bright font-semibold mb-6">
                    {hub.tagline}
                  </p>

                  <div className="flex-1 flex items-center justify-center relative">
                    <div
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        width: "300px",
                        height: "220px",
                        background:
                          "radial-gradient(ellipse, rgba(240,214,135,0.32) 0%, rgba(212,175,55,0.13) 45%, rgba(0,0,0,0) 75%)",
                      }}
                    />
                    <img
                      src={hub.phone}
                      alt={hub.slug}
                      className="relative h-full max-h-[280px] w-auto max-w-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
                    />
                  </div>

                  <p className="text-sm text-foreground/75 leading-relaxed mt-4">
                    {hub.detail}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile: vertical accordion */}
      <div className="md:hidden flex flex-col gap-2 px-4">
        {HUBS.map((hub, i) => {
          const isActive = i === active;
          return (
            <button
              key={hub.slug}
              onClick={() => setActive(isActive ? active : i)}
              className="relative rounded-xl overflow-hidden text-left transition-all duration-400 ease-out"
              style={{
                height: isActive ? "auto" : "52px",
                background:
                  "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: isActive
                  ? "1px solid rgba(212,175,55,0.4)"
                  : "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="flex items-center justify-between px-4 py-3">
                <img src={hub.logo} alt="" className="h-4 w-auto max-w-none" />
                <span className="text-gold-bright text-lg">
                  {isActive ? "−" : "+"}
                </span>
              </div>

              {isActive && (
                <div className="px-4 pb-5 animate-[fadeIn_0.3s_ease]">
                  <p className="text-xs text-gold-bright font-semibold mb-3">
                    {hub.tagline}
                  </p>
                  <div className="flex items-center justify-center relative py-2">
                    <div
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        width: "160px",
                        height: "120px",
                        background:
                          "radial-gradient(ellipse, rgba(240,214,135,0.32) 0%, rgba(212,175,55,0.13) 45%, rgba(0,0,0,0) 75%)",
                      }}
                    />
                    <img
                      src={hub.phone}
                      alt={hub.slug}
                      className="relative h-[180px] w-auto max-w-none drop-shadow-[0_16px_30px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                  <p className="text-xs text-foreground/75 leading-relaxed">
                    {hub.detail}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
