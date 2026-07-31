"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { NAV, PhoneFrame } from "@/components/ConsoleUI";

const TAB_INTRO: Record<string, { headline: string; copy: string }> = {
  home: {
    headline: "Your Daily Driver",
    copy: "Check in, chase the streak, send your Profitshots, and get a nudge from the team when it matters. This is the screen you actually open every day.",
  },
  insights: {
    headline: "The Market, Read For You",
    copy: "Live gold sentiment across every timeframe, aligned or not, plus a heads-up before high-impact news actually hits.",
  },
  signals: {
    headline: "Every Room, One Tap Away",
    copy: "Gold Signals and Forex Signals, plus the real results feed — win rate and RR shown honestly, not cherry-picked.",
  },
  auto: {
    headline: "Hands-Off, Fully Automated",
    copy: "Gamma trades gold on its own. Link your MT4/5, and the full verified track record — return, win rate, drawdown — lives right here.",
  },
  scanners: {
    headline: "Setups, Found For You",
    copy: "Live structure scans across your watchlist — break of structure, fair value gaps, order blocks — flagged the moment they form.",
  },
  profile: {
    headline: "Your Account, Your Progress",
    copy: "Streak, best run, broker connection, and support — everything about your own account, in one place.",
  },
};

export default function ConsolePage() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab && TAB_INTRO[tab]) setActive(tab);
  }, []);

  const intro = TAB_INTRO[active];

  return (
    <main className="bg-background min-h-screen">
      <div
        className="relative pt-16 md:pt-24 pb-16 md:pb-24"
        style={{
          background:
            "radial-gradient(ellipse 900px 700px at 50% 20%, rgba(58,44,14,0.7) 0%, rgba(20,15,6,0.85) 45%, rgba(0,0,0,1) 78%), linear-gradient(180deg, #050402 0%, #000000 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center px-5 mb-10 md:mb-14">
          <a href="/" className="inline-block text-xs text-gold-bright/80 hover:text-gold-bright mb-6 tracking-wide">
            ← Back to The Inner Circle
          </a>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-gold/60" />
            <span className="text-[10px] tracking-[2.5px] text-gold-bright uppercase font-bold">
              Built In-House. Used Nowhere Else.
            </span>
            <span className="w-6 h-px bg-gold/60" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-3">
            Trader Console
          </h1>
          <p className="text-base md:text-xl font-semibold text-foreground mb-5 max-w-xl mx-auto leading-snug">
            Most trading communities hand you a Telegram group and call it a
            platform. We built a real application instead — something almost
            nobody else in this space has actually done.
          </p>
          <div key={active} className="animate-[introFade_0.35s_ease]">
            <p className="text-sm md:text-base text-gold-bright/90 font-semibold mb-1.5">
              {intro.headline}
            </p>
            <p className="text-sm text-foreground/70 max-w-lg mx-auto">
              {intro.copy}
            </p>
          </div>
        </div>

        <PhoneFrame tabKey={active} />

        <div className="flex justify-center flex-wrap gap-2 mt-8 max-w-lg mx-auto px-5">
          {NAV.map((n) => (
            <button
              key={n.key}
              onClick={() => setActive(n.key)}
              className="text-[11px] md:text-xs font-semibold tracking-wide rounded-full px-3.5 py-2 transition-all"
              style={{
                color: active === n.key ? "#0A0A0A" : "#F0D687",
                background:
                  active === n.key
                    ? "linear-gradient(155deg,#F0D687,#C9A84C)"
                    : "rgba(255,255,255,0.06)",
                border: active === n.key ? "1px solid transparent" : "1px solid rgba(255,255,255,0.16)",
              }}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>
      <Footer />

      <style jsx global>{`
        @keyframes introFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
