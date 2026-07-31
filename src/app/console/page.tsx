"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

const NAV = [
  { key: "scanners", label: "Scanners", icon: "⌕" },
  { key: "signals", label: "Signals", icon: "◈" },
  { key: "auto", label: "Auto", icon: "◎" },
  { key: "home", label: "Home", icon: "▦" },
  { key: "insights", label: "Insights", icon: "▤" },
  { key: "profile", label: "Profile", icon: "◉" },
];

const CARD = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.09)",
};

function Blurred({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span style={{ filter: "blur(5px)" }}>{children}</span>
      <span className="absolute inset-0 flex items-center justify-center text-[7px] text-gold-bright/90 font-semibold tracking-wide">
        JOIN TO VIEW
      </span>
    </span>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[9px] text-foreground/70">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span>▂▄▆</span>
        <span>▲</span>
        <span>▮</span>
      </div>
    </div>
  );
}

function Screen({ tabKey }: { tabKey: string }) {
  if (tabKey === "home") {
    return (
      <div className="px-4 pt-2 pb-4">
        <p className="text-[9px] tracking-[2px] text-gold uppercase font-bold mb-4">The Inner Circle</p>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "linear-gradient(155deg,#F0D687,#C9A84C)", color: "#0A0A0A" }}>CP</div>
          <div>
            <p className="text-[8px] text-muted">Welcome back</p>
            <p className="text-xs text-foreground font-semibold">Carson</p>
          </div>
          <div className="ml-auto text-center">
            <p className="text-gold-bright font-bold text-sm">6</p>
            <p className="text-[7px] text-muted uppercase tracking-wide">Streak</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-lg p-2.5" style={CARD}>
            <p className="text-[8px] text-foreground/80">Send Profitshots</p>
            <p className="text-[7px] text-muted mt-0.5">Win monthly prizes</p>
          </div>
          <div className="rounded-lg p-2.5" style={CARD}>
            <p className="text-[8px] text-foreground/80">Lot Calculator</p>
            <p className="text-[7px] text-muted mt-0.5">Size to your risk</p>
          </div>
        </div>
        <div className="rounded-lg p-3" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-[9px] text-gold-bright font-semibold">Inner Circle Academy</p>
          <p className="text-[7px] text-muted mt-0.5">Sharpen your edge with structured lessons</p>
        </div>
      </div>
    );
  }

  if (tabKey === "insights") {
    return (
      <div className="px-4 pt-2 pb-4">
        <p className="text-[9px] tracking-[2px] text-gold uppercase font-bold mb-3">Gold Spotlight</p>
        <div className="rounded-xl p-3 mb-3" style={{ background: "rgba(95,217,138,0.08)", border: "1px solid rgba(95,217,138,0.3)" }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-foreground font-semibold">XAU/USD</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(95,217,138,0.25)", color: "#5FD98A" }}>BULLISH</span>
          </div>
          <p className="text-lg font-bold text-foreground">4,067</p>
        </div>
        <p className="text-[8px] text-muted uppercase tracking-wide mb-1.5">Trend · All Timeframes</p>
        <div className="flex gap-1 mb-3">
          {[1, 1, 1, 1, 1, 0].map((up, i) => (
            <div key={i} className="flex-1 h-6 rounded" style={{ background: up ? "#5FD98A" : "#E0635A", opacity: 0.85 }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-lg p-2" style={CARD}>
            <p className="text-[7px] text-muted uppercase">Short Term</p>
            <p className="text-[10px] font-semibold" style={{ color: "#5FD98A" }}>▲ Bullish</p>
          </div>
          <div className="rounded-lg p-2" style={CARD}>
            <p className="text-[7px] text-muted uppercase">Long Term</p>
            <p className="text-[10px] font-semibold text-foreground/70">• Neutral</p>
          </div>
        </div>
        <div className="rounded-lg p-2.5" style={{ background: "rgba(224,99,90,0.08)", border: "1px solid rgba(224,99,90,0.3)" }}>
          <p className="text-[8px] font-semibold" style={{ color: "#E0635A" }}>⚑ High-impact news · 2h 17m</p>
        </div>
      </div>
    );
  }

  if (tabKey === "signals") {
    return (
      <div className="px-4 pt-2 pb-4">
        <p className="text-[9px] tracking-[2px] text-gold uppercase font-bold mb-3">Signal Groups</p>
        {["Gold Signals", "Forex Signals"].map((name) => (
          <div key={name} className="rounded-lg p-3 mb-2.5" style={CARD}>
            <p className="text-[10px] text-foreground font-semibold mb-2">{name}</p>
            <div className="grid grid-cols-3 gap-1 text-center">
              <div>
                <p className="text-[9px] font-bold text-gold-bright"><Blurred>71%</Blurred></p>
                <p className="text-[6px] text-muted uppercase">Win Rate</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gold-bright"><Blurred>2.1R</Blurred></p>
                <p className="text-[6px] text-muted uppercase">Avg RR</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-foreground/70">10-15</p>
                <p className="text-[6px] text-muted uppercase">Per Day</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (tabKey === "auto") {
    return (
      <div className="px-4 pt-2 pb-4">
        <p className="text-[9px] tracking-[2px] text-gold uppercase font-bold mb-3">Automated Hub</p>
        <div className="rounded-xl p-3.5" style={{ background: "linear-gradient(155deg, rgba(212,175,55,0.1), rgba(0,0,0,0.2))", border: "1px solid rgba(212,175,55,0.3)" }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg" style={{ background: "linear-gradient(155deg,#F0D687,#C9A84C)" }} />
            <div>
              <p className="text-[10px] text-foreground font-semibold">Gamma</p>
              <p className="text-[7px] text-muted">Gold scalping algo</p>
            </div>
            <span className="ml-auto text-[7px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(95,217,138,0.2)", color: "#5FD98A" }}>● LIVE</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center">
            <div>
              <p className="text-[9px] font-bold" style={{ color: "#5FD98A" }}><Blurred>+136%</Blurred></p>
              <p className="text-[6px] text-muted uppercase">Return</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-gold-bright"><Blurred>81%</Blurred></p>
              <p className="text-[6px] text-muted uppercase">Win Rate</p>
            </div>
            <div>
              <p className="text-[9px] font-bold" style={{ color: "#E0635A" }}><Blurred>13.4%</Blurred></p>
              <p className="text-[6px] text-muted uppercase">Max DD</p>
            </div>
          </div>
        </div>
        <p className="text-[7px] text-muted mt-2 text-center">Full verified track record available inside</p>
      </div>
    );
  }

  if (tabKey === "scanners") {
    return (
      <div className="px-4 pt-2 pb-4">
        <p className="text-[9px] tracking-[2px] text-gold uppercase font-bold mb-3">Live Setups</p>
        {[
          { sym: "XAUUSD", tag: "BOS · M15", dir: 1 },
          { sym: "EURUSD", tag: "FVG · M15", dir: 1 },
          { sym: "GBPJPY", tag: "CHoCH · M15", dir: 0 },
          { sym: "US30", tag: "Order Block · M15", dir: 1 },
        ].map((s) => (
          <div key={s.sym} className="flex items-center justify-between rounded-lg p-2.5 mb-2" style={CARD}>
            <div>
              <p className="text-[9px] text-foreground font-semibold">{s.sym}</p>
              <p className="text-[7px] text-muted">{s.tag}</p>
            </div>
            <span className="text-[8px] font-semibold" style={{ color: s.dir ? "#5FD98A" : "#E0635A" }}>
              {s.dir ? "▲ Bullish" : "▼ Bearish"}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // profile
  return (
    <div className="px-4 pt-2 pb-4">
      <p className="text-[9px] tracking-[2px] text-gold uppercase font-bold mb-4">Profile</p>
      <div className="flex flex-col items-center mb-5">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold mb-2" style={{ background: "linear-gradient(155deg,#F0D687,#C9A84C)", color: "#0A0A0A" }}>CP</div>
        <p className="text-xs text-foreground font-semibold">Carson</p>
        <p className="text-[7px] text-muted">Member since 2026</p>
      </div>
      <div className="grid grid-cols-3 gap-1 mb-3 text-center">
        <div className="rounded-lg p-2" style={CARD}><p className="text-[10px] font-bold text-gold-bright">6</p><p className="text-[6px] text-muted uppercase">Streak</p></div>
        <div className="rounded-lg p-2" style={CARD}><p className="text-[10px] font-bold text-gold-bright">6</p><p className="text-[6px] text-muted uppercase">Best</p></div>
        <div className="rounded-lg p-2" style={CARD}><p className="text-[10px] font-bold text-gold-bright">6</p><p className="text-[6px] text-muted uppercase">Hubs</p></div>
      </div>
      {["Broker Connection", "Notifications", "Support"].map((t) => (
        <div key={t} className="rounded-lg px-3 py-2 mb-1.5 text-[9px] text-foreground/75" style={CARD}>{t}</div>
      ))}
    </div>
  );
}

function PhoneFrame({ tabKey }: { tabKey: string }) {
  return (
    <div className="relative mx-auto" style={{ width: "260px", height: "540px" }}>
      <div
        className="absolute inset-0 rounded-[38px] p-2"
        style={{
          background: "linear-gradient(155deg, #1a1a1a, #0a0a0a)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <div className="w-full h-full rounded-[30px] overflow-hidden relative flex flex-col" style={{ background: "#08070a" }}>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black/80 z-10" />
          <StatusBar />
          <div key={tabKey} className="flex-1 overflow-hidden animate-[screenFade_0.3s_ease]">
            <Screen tabKey={tabKey} />
          </div>
          {/* bottom nav */}
          <div className="flex justify-around items-center py-2.5 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {NAV.map((n) => (
              <span
                key={n.key}
                className="text-[11px]"
                style={{ color: n.key === tabKey ? "#F0D687" : "rgba(244,237,224,0.35)" }}
              >
                {n.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConsolePage() {
  const [active, setActive] = useState("home");

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
          <p className="text-sm text-foreground/70 max-w-lg mx-auto">
            Six tools, one app. Tap through the full navigation to see what
            it&apos;s actually like inside — figures shown are illustrative;
            real performance data is visible once you join.
          </p>
        </div>

        <PhoneFrame tabKey={active} />

        {/* Tab selector below phone */}
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
        @keyframes screenFade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
