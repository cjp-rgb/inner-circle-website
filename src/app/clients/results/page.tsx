import Footer from "@/components/Footer";
import AnimatedStat from "@/components/AnimatedStat";

export default function ResultsPage() {
  return (
    <main className="bg-background min-h-screen">
      <div
        className="relative pt-16 md:pt-24 pb-16 md:pb-20"
        style={{
          background:
            "radial-gradient(ellipse 900px 700px at 50% 20%, rgba(58,44,14,0.7) 0%, rgba(20,15,6,0.85) 45%, rgba(0,0,0,1) 78%), linear-gradient(180deg, #050402 0%, #000000 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center px-5 mb-14 md:mb-20">
          <a href="/" className="inline-block text-xs text-gold-bright/80 hover:text-gold-bright mb-6 tracking-wide">
            ← Back to The Inner Circle
          </a>
          <p className="text-xs md:text-sm tracking-[3px] text-gold uppercase font-semibold mb-3">
            Verified Track Record
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-3">
            Real Results, Shown Honestly
          </h1>
          <p className="text-sm text-foreground/70 max-w-lg mx-auto">
            No cherry-picked screenshots. This is the same track record our
            own clients see inside the Trader Console.
          </p>
        </div>

        {/* Trade Hub */}
        <div className="max-w-4xl mx-auto px-5 mb-12 md:mb-16">
          <div
            className="rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            style={{
              background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <div>
              <img src="/logos/trade_hub.png" alt="" className="h-6 md:h-7 w-auto max-w-none mb-4" />
              <p className="text-sm text-foreground/70 leading-relaxed">
                Gold Signals — four live providers calling XAUUSD, every
                session. Alpha Scalper, London Snipes, Swing Syndicate and
                High RR, all in one feed.
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-8">
              <AnimatedStat value={71} label="Win Rate" color="#F0D687" size={130} />
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-lg font-bold text-gold-bright">2.1R</p>
                  <p className="text-[9px] text-muted uppercase tracking-wide">Avg RR</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground/70">10-15</p>
                  <p className="text-[9px] text-muted uppercase tracking-wide">Per Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forex Hub */}
        <div className="max-w-4xl mx-auto px-5 mb-12 md:mb-16">
          <div
            className="rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            style={{
              background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <div>
              <img src="/logos/forex_hub.png" alt="" className="h-6 md:h-7 w-auto max-w-none mb-4" />
              <p className="text-sm text-foreground/70 leading-relaxed">
                Forex Signals — Reversal Scout &amp; FX Samurai calling
                majors and minors. RR-based, not pip-chasing, with risk
                management first.
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-8">
              <AnimatedStat value={83} label="Win Rate" color="#F0D687" size={130} />
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-lg font-bold text-gold-bright">2.4R</p>
                  <p className="text-[9px] text-muted uppercase tracking-wide">Avg RR</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground/70">7-10</p>
                  <p className="text-[9px] text-muted uppercase tracking-wide">Per Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automated Hub */}
        <div className="max-w-4xl mx-auto px-5">
          <div
            className="rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            style={{
              background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          >
            <div>
              <img src="/logos/automated_hub.png" alt="" className="h-6 md:h-7 w-auto max-w-none mb-4" />
              <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                Gamma — a fully automated gold breakout algo, trading a real
                GBP account live since December 2024. 389 trades taken, on a
                real account with Vantage Markets, tracked publicly and
                updated daily.
              </p>
              <a
                href="https://www.myfxbook.com/members/SyndicateGlobal/gamma-t-5/12043333"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-bright hover:text-gold underline underline-offset-2"
              >
                View Live on MyFxBook →
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-8">
              <AnimatedStat value={160} suffix="%" label="Total Gain" color="#5FD98A" size={130} />
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-lg font-bold text-gold-bright">64%</p>
                  <p className="text-[9px] text-muted uppercase tracking-wide">Win Rate</p>
                </div>
                <div>
                  <p className="text-lg font-bold" style={{ color: "#E0635A" }}>14.79%</p>
                  <p className="text-[9px] text-muted uppercase tracking-wide">Drawdown</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href="/clients/join"
            className="inline-block text-sm font-semibold tracking-wide rounded-full px-6 py-3"
            style={{ color: "#0A0A0A", background: "linear-gradient(155deg,#F0D687,#C9A84C)" }}
          >
            How to Join →
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
