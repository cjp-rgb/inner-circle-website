const HUBS = [
  { logo: "/logos/trade_hub.png", tag: "Live signals, every session" },
  { logo: "/logos/vip_hub.png", tag: "Community & direct access" },
  { logo: "/logos/automated_hub.png", tag: "Hands-off copy-trading" },
  { logo: "/logos/forex_hub.png", tag: "RR-based, risk-first" },
  { logo: "/logos/education_hub.png", tag: "Foundations to advanced" },
  { logo: "/logos/trader_console.png", tag: "Your command center" },
];

export default function HubGrid() {
  return (
    <section className="relative py-16 md:py-28 px-3 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-[10px] md:text-sm tracking-[3px] text-gold uppercase font-semibold mb-2 md:mb-3">
            One Ecosystem
          </p>
          <h2 className="text-xl md:text-4xl font-bold text-gold-bright">
            Everything Inside
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-5">
          {HUBS.map((hub) => (
            <div
              key={hub.logo}
              className="relative rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col items-center text-center"
              style={{
                background:
                  "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 14px 34px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              <div className="w-full h-8 md:h-12 flex items-center justify-center mb-2 md:mb-3">
                <img
                  src={hub.logo}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[9px] md:text-sm text-foreground/70 leading-snug">
                {hub.tag}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <a
            href="/clients/hubs"
            className="inline-block text-xs md:text-sm font-semibold tracking-wide text-gold-bright border border-gold/40 rounded-full px-5 py-2.5 md:px-6 md:py-3 hover:bg-gold/10 transition-colors"
          >
            See every hub in detail →
          </a>
        </div>
      </div>
    </section>
  );
}
