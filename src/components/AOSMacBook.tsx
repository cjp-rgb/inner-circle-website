"use client";

const CARD = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.09)",
};

const AOS_TABS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "calendar", label: "Content Calendar" },
  { key: "profitshot", label: "Profit Shot AI" },
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
        <div className="rounded-lg p-3.5" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-[10px] text-gold-bright font-semibold mb-1">Priority Engine</p>
          <p className="text-[9px] text-muted leading-relaxed">Daily 6am UK cache — surfaces exactly who needs a nudge, before you even open the app.</p>
        </div>
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
