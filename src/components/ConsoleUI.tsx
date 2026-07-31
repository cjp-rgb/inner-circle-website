"use client";

export const NAV = [
  { key: "scanners", label: "Scanners", icon: "⌕" },
  { key: "signals", label: "Signals", icon: "◈" },
  { key: "auto", label: "Auto", icon: "◎" },
  { key: "home", label: "Home", icon: "▦" },
  { key: "insights", label: "Insights", icon: "▤" },
  { key: "profile", label: "Profile", icon: "◉" },
];

export const CARD = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.09)",
};

export function StatusBar() {
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

export function Screen({ tabKey }: { tabKey: string }) {
  if (tabKey === "home") {
    return (
      <div className="px-4 pt-2 pb-4">
        <p className="text-[9px] tracking-[2px] text-gold uppercase font-bold mb-4">The Inner Circle</p>
        <div className="flex items-center gap-3 mb-4">
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
        <div className="rounded-lg p-3 mb-3" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-[9px] text-gold-bright font-semibold">Inner Circle Academy</p>
          <p className="text-[7px] text-muted mt-0.5">Sharpen your edge with structured lessons</p>
        </div>
        <p className="text-[8px] text-muted uppercase tracking-wide mb-1.5">My Updates &amp; Tips</p>
        <div className="rounded-lg p-2.5" style={CARD}>
          <p className="text-[8px] text-foreground/85 font-semibold mb-0.5">💡 No trades today — stay disciplined</p>
          <p className="text-[7px] text-muted leading-snug">Sometimes the best trades are the ones you don&apos;t take. Protect your capital and your mindset.</p>
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
                <p className="text-[9px] font-bold text-gold-bright">71%</p>
                <p className="text-[6px] text-muted uppercase">Win Rate</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gold-bright">2.1R</p>
                <p className="text-[6px] text-muted uppercase">Avg RR</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-foreground/70">10-15</p>
                <p className="text-[6px] text-muted uppercase">Per Day</p>
              </div>
            </div>
          </div>
        ))}
        <p className="text-[8px] text-muted uppercase tracking-wide mb-1.5 mt-3">Recent Results</p>
        {[
          { pair: "XAUUSD", result: "HIT TP2", val: "+130 PIPS", up: true },
          { pair: "GBPJPY", result: "HIT TP1", val: "+64 PIPS", up: true },
          { pair: "EURUSD", result: "CLOSED", val: "-18 PIPS", up: false },
        ].map((r) => (
          <div key={r.pair} className="flex items-center justify-between rounded-lg px-2.5 py-1.5 mb-1.5" style={CARD}>
            <span className="text-[8px] text-foreground/80">{r.pair} · {r.result}</span>
            <span className="text-[8px] font-semibold" style={{ color: r.up ? "#5FD98A" : "#E0635A" }}>{r.val}</span>
          </div>
        ))}
      </div>
    );
  }

  if (tabKey === "auto") {
    return (
      <div className="px-4 pt-2 pb-4">
        <p className="text-[9px] tracking-[2px] text-gold uppercase font-bold mb-3">Automated Hub</p>
        <div className="rounded-xl p-3.5 mb-3" style={{ background: "linear-gradient(155deg, rgba(212,175,55,0.1), rgba(0,0,0,0.2))", border: "1px solid rgba(212,175,55,0.3)" }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg" style={{ background: "linear-gradient(155deg,#F0D687,#C9A84C)" }} />
            <div>
              <p className="text-[10px] text-foreground font-semibold">Gamma</p>
              <p className="text-[7px] text-muted">Gold scalping algo</p>
            </div>
            <span className="ml-auto text-[7px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(95,217,138,0.2)", color: "#5FD98A" }}>● LIVE</span>
          </div>
          <p className="text-[7px] text-muted uppercase tracking-wide mb-0.5">Total Return</p>
          <p className="text-xl font-bold mb-3" style={{ color: "#5FD98A" }}>+XXX.XX%</p>
          <div className="grid grid-cols-3 gap-1 text-center">
            <div>
              <p className="text-[9px] font-bold text-gold-bright">XX%</p>
              <p className="text-[6px] text-muted uppercase">Win Rate</p>
            </div>
            <div>
              <p className="text-[9px] font-bold" style={{ color: "#E0635A" }}>XX.X%</p>
              <p className="text-[6px] text-muted uppercase">Max DD</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-foreground/70">XXX</p>
              <p className="text-[6px] text-muted uppercase">Trades</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg p-2" style={CARD}>
            <p className="text-[7px] text-muted uppercase">Avg Hold</p>
            <p className="text-[9px] font-semibold text-foreground/80">XXm</p>
          </div>
          <div className="rounded-lg p-2" style={CARD}>
            <p className="text-[7px] text-muted uppercase">Sharpe</p>
            <p className="text-[9px] font-semibold text-foreground/80">X.XX</p>
          </div>
        </div>
        <p className="text-[7px] text-muted mt-2 text-center">Illustrative figures — full verified track record inside</p>
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

export function PhoneFrame({ tabKey, width = 260, height = 540 }: { tabKey: string; width?: number; height?: number }) {
  return (
    <div className="relative mx-auto" style={{ width: `${width}px`, height: `${height}px` }}>
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
      <style jsx global>{`
        @keyframes screenFade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
