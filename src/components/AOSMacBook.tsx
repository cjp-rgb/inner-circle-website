"use client";

const CARD = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.09)",
};

const AOS_TABS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "clients", label: "Client CRM" },
  { key: "analytics", label: "Analytics" },
  { key: "goals", label: "Goals" },
  { key: "calendar", label: "Content Calendar" },
  { key: "socialai", label: "Social AI" },
  { key: "playbook", label: "Playbook" },
  { key: "network", label: "Network" },
];

function AOSScreen({ tabKey }: { tabKey: string }) {
  if (tabKey === "dashboard") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Dashboard</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {["Net Deposits", "Active Clients", "This Week"].map((label, i) => (
            <div key={label} className="rounded-lg p-3 count-up" style={{ ...CARD, animationDelay: `${i * 0.1}s` }}>
              <p className="text-lg font-bold text-gold-bright">{["£412k", "40", "6"][i]}</p>
              <p className="text-[8px] text-muted uppercase tracking-wide mt-0.5">{label}</p>
              <p className="text-[7px] mt-0.5" style={{ color: "#5FD98A" }}>▲ +12%</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-muted uppercase tracking-wide mb-1.5">Top Clients</p>
        {["A. Reeves", "M. Kowalski", "S. Ibrahim"].map((c, i) => (
          <div key={c} className="flex items-center justify-between rounded-lg px-3 py-1.5 mb-1 slide-in" style={{ ...CARD, animationDelay: `${i * 0.08}s` }}>
            <span className="text-[8px] text-foreground/70">{c}</span>
            <span className="text-[8px] font-semibold text-gold-bright">£{[84, 61, 47][i]}k</span>
          </div>
        ))}
      </div>
    );
  }

  if (tabKey === "clients") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-3">Client CRM</p>
        <div className="flex text-[7px] text-muted uppercase tracking-wide px-3 mb-1.5">
          <span className="flex-1">Name</span>
          <span className="w-12 text-right">Lots</span>
          <span className="w-16 text-right">Rebate</span>
          <span className="w-16 text-right">Net Dep</span>
        </div>
        {[
          { n: "A. Reeves", l: "142", r: "£710", d: "£84k" },
          { n: "M. Kowalski", l: "98", r: "£490", d: "£61k" },
          { n: "S. Ibrahim", l: "76", r: "£380", d: "£47k" },
          { n: "J. Novak", l: "54", r: "£270", d: "£31k" },
        ].map((c, i) => (
          <div key={c.n} className="flex items-center rounded-lg px-3 py-2 mb-1 slide-in" style={{ ...CARD, animationDelay: `${i * 0.08}s` }}>
            <span className="flex-1 text-[8px] text-foreground/80">{c.n}</span>
            <span className="w-12 text-right text-[8px] text-foreground/60">{c.l}</span>
            <span className="w-16 text-right text-[8px] text-gold-bright font-semibold">{c.r}</span>
            <span className="w-16 text-right text-[8px] text-foreground/60">{c.d}</span>
          </div>
        ))}
      </div>
    );
  }

  if (tabKey === "analytics") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-1">Analytics</p>
        <div className="flex gap-1.5 mb-4">
          {["Overview", "Net Deposits", "Volume", "Funnel"].map((t, i) => (
            <span key={t} className="text-[7px] px-2 py-0.5 rounded-full" style={i === 0 ? { background: "rgba(212,175,55,0.2)", color: "#F0D687" } : { color: "rgba(244,237,224,0.4)" }}>{t}</span>
          ))}
        </div>
        <div className="flex items-end gap-2 h-20 mb-3">
          {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t grow-bar" style={{ background: "linear-gradient(180deg,#F0D687,#C9A84C)", height: `${h}%`, animationDelay: `${i * 0.06}s` }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg p-2" style={CARD}><p className="text-[9px] font-bold text-gold-bright">2.4x</p><p className="text-[7px] text-muted uppercase">Volume Growth</p></div>
          <div className="rounded-lg p-2" style={CARD}><p className="text-[9px] font-bold text-gold-bright">18%</p><p className="text-[7px] text-muted uppercase">Funnel Conv.</p></div>
        </div>
      </div>
    );
  }

  if (tabKey === "goals") {
    const goals = [
      { label: "New Clients", pct: 70 },
      { label: "Net Deposits", pct: 55 },
      { label: "Monthly Rebate", pct: 85 },
    ];
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Goals</p>
        {goals.map((g, i) => (
          <div key={g.label} className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] text-foreground/80">{g.label}</span>
              <span className="text-[9px] font-bold text-gold-bright">{g.pct}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div
                className="h-full rounded-full fill-bar"
                style={{
                  background: "linear-gradient(90deg,#C9A84C,#F0D687)",
                  animationDelay: `${i * 0.15}s`,
                  ["--target-width" as string]: `${g.pct}%`,
                }}
              />
            </div>
          </div>
        ))}
        <div className="rounded-lg p-3 mt-3" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-[9px] text-gold-bright font-semibold mb-0.5">12-Month Projection</p>
          <p className="text-[8px] text-muted">On pace to hit target by Month 9</p>
        </div>
      </div>
    );
  }

  if (tabKey === "calendar") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Content Calendar</p>
        {["Morning Brief", "Evening Shot", "Midweek Poll", "Friday Roundup", "Saturday Motivation", "Sunday CTA"].map((post, i) => (
          <div key={post} className="flex items-center justify-between rounded-lg px-3 py-2 mb-1.5 slide-in" style={{ ...CARD, animationDelay: `${i * 0.06}s` }}>
            <span className="text-[9px] text-foreground/80">{post}</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(95,217,138,0.15)", color: "#5FD98A" }}>Scheduled</span>
          </div>
        ))}
      </div>
    );
  }

  if (tabKey === "socialai") {
    return (
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Social AI — Jordan</p>
        <div className="rounded-lg p-3.5 mb-3 type-in" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-[10px] text-gold-bright font-semibold mb-1">AI Caption</p>
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
        <p className="text-[9px] text-muted mb-3">9-phase scaling system</p>
        {[
          { n: "6", t: "Compliance & Best Practices", done: true },
          { n: "7", t: "Advanced Tactics", done: true },
          { n: "8", t: "Personal Branding", done: false },
          { n: "9", t: "The Full Website Funnel", done: false },
        ].map((p, i) => (
          <div key={p.n} className="flex items-center gap-3 rounded-lg px-3 py-2.5 mb-1.5 slide-in" style={{ ...CARD, animationDelay: `${i * 0.08}s` }}>
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

  return (
    <div className="p-5">
      <p className="text-[10px] tracking-[2px] text-gold uppercase font-bold mb-4">Network</p>
      {[
        { name: "Tier 1 Affiliates", val: 18 },
        { name: "Total Network", val: 40 },
      ].map((r, i) => (
        <div key={r.name} className="flex items-center justify-between rounded-lg px-3 py-2.5 mb-1.5 slide-in" style={{ ...CARD, animationDelay: `${i * 0.1}s` }}>
          <span className="text-[9px] text-foreground/80">{r.name}</span>
          <span className="text-[10px] font-bold text-gold-bright">{r.val}</span>
        </div>
      ))}
      <div className="rounded-lg p-3 mt-3" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
        <p className="text-[9px] text-gold-bright font-semibold mb-0.5">Growth (30d)</p>
        <p className="text-[8px] text-muted">+12% network growth this month</p>
      </div>
    </div>
  );
}

export default function AOSMacBook({ activeTab }: { activeTab: string }) {
  return (
    <div className="relative mx-auto" style={{ width: "100%", maxWidth: "620px" }}>
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
        .slide-in {
          opacity: 0;
          animation: slideIn 0.4s ease forwards;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .count-up {
          opacity: 0;
          animation: countUp 0.5s ease forwards;
        }
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .grow-bar {
          animation: growBar 0.6s cubic-bezier(0.33,1,0.68,1) both;
          transform-origin: bottom;
        }
        @keyframes growBar {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .fill-bar {
          width: 0;
          animation: fillBar 0.8s cubic-bezier(0.33,1,0.68,1) forwards;
        }
        @keyframes fillBar {
          to { width: var(--target-width, 100%); }
        }
        .type-in {
          opacity: 0;
          animation: typeIn 0.5s ease 0.2s forwards;
        }
        @keyframes typeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export { AOS_TABS };
