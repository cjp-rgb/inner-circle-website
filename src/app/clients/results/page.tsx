import Footer from "@/components/Footer";

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
        <div className="max-w-4xl mx-auto px-5 mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-5 justify-center md:justify-start">
            <img src="/logos/trade_hub.png" alt="" className="h-6 md:h-7 w-auto max-w-none" />
          </div>
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <p className="text-sm font-bold text-foreground mb-0.5">Gold Signals</p>
            <p className="text-xs text-muted mb-5">XAUUSD calls</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-xl md:text-2xl font-bold text-gold-bright">71%</p>
                <p className="text-[10px] text-muted uppercase tracking-wide mt-1">Win Rate</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-gold-bright">2.1R</p>
                <p className="text-[10px] text-muted uppercase tracking-wide mt-1">Avg RR</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-foreground/70">10-15</p>
                <p className="text-[10px] text-muted uppercase tracking-wide mt-1">Per Day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Forex Hub */}
        <div className="max-w-4xl mx-auto px-5 mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-5 justify-center md:justify-start">
            <img src="/logos/forex_hub.png" alt="" className="h-6 md:h-7 w-auto max-w-none" />
          </div>
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <p className="text-sm font-bold text-foreground mb-0.5">Forex Signals</p>
            <p className="text-xs text-muted mb-5">FX majors &amp; minors</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-xl md:text-2xl font-bold text-gold-bright">83%</p>
                <p className="text-[10px] text-muted uppercase tracking-wide mt-1">Win Rate</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-gold-bright">2.4R</p>
                <p className="text-[10px] text-muted uppercase tracking-wide mt-1">Avg RR</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-foreground/70">7-10</p>
                <p className="text-[10px] text-muted uppercase tracking-wide mt-1">Per Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Automated Hub / Gamma */}
        <div className="max-w-4xl mx-auto px-5">
          <div className="flex items-center gap-2 mb-5 justify-center md:justify-start">
            <img src="/logos/automated_hub.png" alt="" className="h-6 md:h-7 w-auto max-w-none" />
          </div>
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0"
                style={{ background: "linear-gradient(155deg,#F0D687,#C9A84C)" }}
              />
              <div>
                <p className="text-base font-bold text-foreground">Gamma</p>
                <p className="text-xs text-muted">Fully automated gold scalping algo</p>
              </div>
              <span
                className="ml-auto text-[10px] font-semibold px-2 py-1 rounded-full"
                style={{ background: "rgba(95,217,138,0.15)", color: "#5FD98A" }}
              >
                ● LIVE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
              <div>
                <p className="text-2xl md:text-4xl font-bold" style={{ color: "#5FD98A" }}>+136.08%</p>
                <p className="text-[10px] md:text-xs text-muted uppercase tracking-wide mt-1">Total Return</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-gold-bright">81%</p>
                <p className="text-[10px] md:text-xs text-muted uppercase tracking-wide mt-1">Win Rate</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold" style={{ color: "#E0635A" }}>13.41%</p>
                <p className="text-[10px] md:text-xs text-muted uppercase tracking-wide mt-1">Max Drawdown</p>
              </div>
            </div>

            <p className="text-xs text-muted mt-6 text-center">
              $500 minimum engagement · Verified and updated inside the Automated Hub
            </p>
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
