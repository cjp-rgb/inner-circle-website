"use client";

const CARD = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.09)",
};

const AOS_TABS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "calendar", label: "Content Calendar" },
  { key: "profitshot", label: "Profit Shot AI" },
  { key: "playbook", label: "Social Playbook" },
  { key: "academy", label: "Academy" },
  { key: "network", label: "Network" },
];

function AOSScreen({ tabKey }: { tabKey: string }) {
  if (tabKey === "dashboard") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Affiliate Operating System</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {["Active Affiliates", "Priority Score", "This Week"].map((label, i) => (
            <div key={label} className="rounded-lg p-3" style={CARD}>
              <p className="text-lg font-bold text-gold-bright">{["40", "A+", "6"][i]}</p>
              <p className="text-[8px] text-muted uppercase tracking-wide mt-0.5">{label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg p-3.5 mb-3" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-[10px] text-gold-bright font-semibold mb-1">Priority Engine</p>
          <p className="text-[9px] text-muted leading-relaxed">Daily 6am UK cache — surfaces exactly who needs a nudge, before you even open the app.</p>
        </div>
        <p className="text-[8px] text-muted uppercase tracking-wide mb-1.5">Live Activity</p>
        {[
          { t: "Profit Shot forwarded", w: "2m ago" },
          { t: "New affiliate joined Tier 1", w: "1h ago" },
          { t: "Evening Shot scheduled", w: "3h ago" },
        ].map((a) => (
          <div key={a.t} className="flex items-center justify-between rounded-lg px-3 py-1.5 mb-1" style={CARD}>
            <span className="text-[8px] text-foreground/70">{a.t}</span>
            <span className="text-[7px] text-muted">{a.w}</span>
          </div>
        ))}
      </div>
    );
  }

  if (tabKey === "calendar") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Content Calendar</p>
        {["Morning Brief", "Evening Shot", "Midweek Poll", "Friday Roundup", "Saturday Motivation", "Sunday CTA"].map((post) => (
          <div key={post} className="flex items-center justify-between rounded-lg px-3 py-2 mb-1.5" style={CARD}>
            <span className="text-[9px] text-foreground/80">{post}</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(95,217,138,0.15)", color: "#5FD98A" }}>Scheduled</span>
          </div>
        ))}
      </div>
    );
  }

  if (tabKey === "profitshot") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Profit Shot Forwarder</p>
        <div className="rounded-lg p-3.5 mb-3" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-[10px] text-gold-bright font-semibold mb-1">AI Caption — Social AI</p>
          <p className="text-[9px] text-foreground/70 italic leading-relaxed">&ldquo;Another one in the books 🔥 — this is what consistency looks like.&rdquo;</p>
        </div>
        <p className="text-[8px] text-muted uppercase tracking-wide mb-1.5">Tone Rotation</p>
        <div className="flex gap-1.5 flex-wrap">
          {["Hype", "Calm", "Direct", "Story", "Bold", "Casual"].map((t) => (
            <span key={t} className="text-[8px] px-2 py-1 rounded-full text-foreground/70" style={CARD}>{t}</span>
          ))}
        </div>
      </div>
    );
  }

  if (tabKey === "playbook") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-3">Social Media Playbook</p>
        <p className="text-[9px] text-muted mb-3">9-phase scaling system, unlocked as you level up</p>
        {[
          { n: "6", t: "Compliance & Best Practices", done: true },
          { n: "7", t: "Advanced Tactics", done: true },
          { n: "8", t: "Personal Branding", done: false },
          { n: "9", t: "The Full Website Funnel", done: false },
        ].map((p) => (
          <div key={p.n} className="flex items-center gap-3 rounded-lg px-3 py-2.5 mb-1.5" style={CARD}>
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0"
              style={{
                background: p.done ? "linear-gradient(155deg,#F0D687,#C9A84C)" : "rgba(255,255,255,0.08)",
                color: p.done ? "#0A0A0A" : "rgba(244,237,224,0.4)",
              }}
            >
              {p.n}
            </span>
            <span className="text-[9px] text-foreground/80 flex-1">{p.t}</span>
            {p.done && <span className="text-[7px] text-[#5FD98A]">✓</span>}
          </div>
        ))}
      </div>
    );
  }

  if (tabKey === "academy") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Academy</p>
        <div className="rounded-lg p-3.5 mb-3" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-gold-bright font-semibold">Level 4</span>
            <span className="text-[8px] text-muted">Next: Level 5</span>
          </div>
          <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div className="h-full rounded-full" style={{ width: "62%", background: "linear-gradient(90deg,#C9A84C,#F0D687)" }} />
          </div>
          <p className="text-[8px] text-muted mt-1.5">Unlocks sub-affiliate onboarding training</p>
        </div>
        <p className="text-[8px] text-muted uppercase tracking-wide mb-1.5">Your Goals</p>
        <div className="rounded-lg px-3 py-2.5 mb-3" style={CARD}>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-foreground/80">New clients this month</span>
            <span className="text-[9px] font-bold text-gold-bright">7 / 10</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg p-2" style={CARD}><p className="text-[10px] font-bold text-gold-bright">🔥 12</p><p className="text-[7px] text-muted uppercase">Streak</p></div>
          <div className="rounded-lg p-2" style={CARD}><p className="text-[10px] font-bold text-gold-bright">#3</p><p className="text-[7px] text-muted uppercase">Leaderboard</p></div>
          <div className="rounded-lg p-2" style={CARD}><p className="text-[10px] font-bold text-gold-bright">8</p><p className="text-[7px] text-muted uppercase">Badges</p></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Your Network</p>
      {[
        { name: "Tier 1 Affiliates", val: "18" },
        { name: "Total Network", val: "40" },
        { name: "Growth (30d)", val: "+12%" },
      ].map((r) => (
        <div key={r.name} className="flex items-center justify-between rounded-lg px-3 py-2.5 mb-1.5" style={CARD}>
          <span className="text-[9px] text-foreground/80">{r.name}</span>
          <span className="text-[10px] font-bold text-gold-bright">{r.val}</span>
        </div>
      ))}
    </div>
  );
}

export default function AOSMacBook({ activeTab }: { activeTab: string }) {
  return (
    <div className="relative mx-auto" style={{ width: "100%", maxWidth: "620px" }}>
      {/* Screen */}
      <div
        className="rounded-t-xl overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #2a2a2a, #0a0a0a)",
          border: "1px solid rgba(255,255,255,0.12)",
          padding: "10px 10px 0 10px",
        }}
      >
        <div className="rounded-t-md overflow-hidden" style={{ background: "#08070a", aspectRatio: "16/10" }}>
          <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="w-2 h-2 rounded-full bg-[#E0635A]" />
            <span className="w-2 h-2 rounded-full bg-[#E8C468]" />
            <span className="w-2 h-2 rounded-full bg-[#5FD98A]" />
          </div>
          <div key={activeTab} className="animate-[aosFade_0.3s_ease]">
            <AOSScreen tabKey={activeTab} />
          </div>
        </div>
      </div>
      {/* Base */}
      <div
        className="h-3 rounded-b-2xl"
        style={{
          background: "linear-gradient(180deg, #3a3a3a, #1a1a1a)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
        }}
      />
      <div className="h-1 mx-auto rounded-b-lg" style={{ width: "30%", background: "#0a0a0a" }} />

      <style jsx global>{`
        @keyframes aosFade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export { AOS_TABS };
