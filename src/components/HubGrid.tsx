const HUBS = [
  { slug: "trade-hub", logo: "/logos/trade_hub.png", tag: "4 live signal providers — Alpha Scalper, London Snipes, Swing Syndicate & High RR. Gold and FX calls, every session." },
  { slug: "vip-hub", logo: "/logos/vip_hub.png", tag: "Wins, progress, and direct access to the team. Where the community actually lives, not just another signal feed." },
  { slug: "automated-hub", logo: "/logos/automated_hub.png", tag: "Gamma — a fully automated gold breakout algo. Link your MT4/5, sit back, and let it copy every trade." },
  { slug: "forex-hub", logo: "/logos/forex_hub.png", tag: "RR-based calls, not pip-chasing. Reversal Scout & FX Samurai, backed by real risk management first." },
  { slug: "education-hub", logo: "/logos/education_hub.png", tag: "Foundations to advanced SMC — structured lessons from Start Here through full Trader Development." },
  { slug: "trader-console", logo: "/logos/trader_console.png", tag: "Live gold sentiment, economic calendar alerts, and one-tap access to every signal room." },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {HUBS.map((hub) => (
            <a
              key={hub.slug}
              href={`/clients/hubs?hub=${hub.slug}`}
              className="relative rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 14px 34px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              <div className="h-5 md:h-8 flex items-center justify-center mb-2 md:mb-3">
                <img
                  src={hub.logo}
                  alt={`${hub.slug.replace(/-/g, " ")} logo`}
                  className="h-full w-auto max-w-none"
                />
              </div>
              <p className="hub-tag text-[7.5px] md:text-xs text-foreground/70 leading-[1.4]">
                {hub.tag}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <a
            href="/clients/hubs"
            className="inline-block text-xs md:text-sm font-semibold tracking-wide text-gold-bright border border-gold/40 rounded-full px-5 py-2.5 md:px-6 md:py-3 hover:bg-gold/10 transition-colors"
          >
            Compare All 6 Hubs →
          </a>
        </div>
      </div>
    </section>
  );
}
