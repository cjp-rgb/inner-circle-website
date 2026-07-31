const HUBS = [
  {
    title: "Trade Hub",
    desc: "4 live signal providers — Alpha Scalper, London Snipes, Swing Syndicate & High RR.",
    icon: (
      <path d="M13 2 L4 14 h6 l-1 8 9-12h-6z" />
    ),
  },
  {
    title: "VIP Hub",
    desc: "Wins, progress, and direct access to the team — where the community actually lives.",
    icon: <path d="M12 2l2.5 6.5L21 9l-5 4.3L17.5 21 12 17l-5.5 4L8 13.3 3 9l6.5-0.5z" />,
  },
  {
    title: "Automated Hub",
    desc: "Gamma — a fully automated gold scalping algo. Link your MT4/5, sit back, and let it work.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </>
    ),
  },
  {
    title: "Forex Hub",
    desc: "RR-based calls, not pip-chasing — risk management first, always.",
    icon: <path d="M3 17l5-6 4 4 8-9M14 6h6v6" />,
  },
  {
    title: "Education Hub",
    desc: "Foundations to advanced SMC — a real path, not a random folder of videos.",
    icon: (
      <>
        <path d="M2 9l10-4 10 4-10 4-10-4z" />
        <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      </>
    ),
  },
  {
    title: "Trader Console",
    desc: "Your trading command center — everything else in the ecosystem, one tap away.",
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M10 18h4" />
      </>
    ),
  },
];

export default function HubGrid() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm tracking-[3px] text-gold uppercase font-semibold mb-3">
            One Ecosystem
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gold-bright">
            Everything Inside
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {HUBS.map((hub) => (
            <div
              key={hub.title}
              className="relative rounded-2xl p-5 md:p-6 flex gap-4 items-start"
              style={{
                background:
                  "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 14px 34px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(155deg, rgba(255,255,255,0.3), rgba(240,214,135,0.12))",
                  border: "1px solid rgba(255,255,255,0.35)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#3a2f10" strokeWidth="2.2" className="w-5 h-5">
                  {hub.icon}
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gold-bright text-base md:text-lg mb-1">
                  {hub.title}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{hub.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/clients/hubs"
            className="inline-block text-sm font-semibold tracking-wide text-gold-bright border border-gold/40 rounded-full px-6 py-3 hover:bg-gold/10 transition-colors"
          >
            See every hub in detail →
          </a>
        </div>
      </div>
    </section>
  );
}
