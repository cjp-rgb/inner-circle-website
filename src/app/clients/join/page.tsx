import Footer from "@/components/Footer";

const STEPS = [
  {
    n: "01",
    title: "Open Your Account",
    copy: "Open a trading account through our partner broker, PU Prime, using our referral link. This is what connects you to The Inner Circle as an introduced client.",
    cta: { label: "Open Account via PU Prime", href: "https://puvip.co/la-partners/Cjp100" },
    note: "Referral code CJP100",
  },
  {
    n: "02",
    title: "Fund & Verify",
    copy: "Complete your broker's verification and fund your account. Once verified under our referral, you're recognised as part of The Inner Circle.",
  },
  {
    n: "03",
    title: "Get Your Invite",
    copy: "You'll receive access to the Telegram community and the Trader Console — Trade Hub, VIP Hub, Automated Hub, Forex Hub, Education Hub, all in one place.",
    cta: { label: "Explore The Hubs", href: "/clients/hubs" },
  },
];

export default function JoinPage() {
  return (
    <main className="bg-background min-h-screen">
      <div
        className="relative pt-16 md:pt-24 pb-16 md:pb-24"
        style={{
          background:
            "radial-gradient(ellipse 900px 700px at 50% 20%, rgba(58,44,14,0.7) 0%, rgba(20,15,6,0.85) 45%, rgba(0,0,0,1) 78%), linear-gradient(180deg, #050402 0%, #000000 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center px-5 mb-12 md:mb-16">
          <a href="/" className="inline-block text-xs text-gold-bright/80 hover:text-gold-bright mb-6 tracking-wide">
            ← Back to The Inner Circle
          </a>
          <p className="text-xs md:text-sm tracking-[3px] text-gold uppercase font-semibold mb-3">
            How To Join
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-3">
            Three Steps In
          </h1>
          <p className="text-sm text-foreground/70 max-w-lg mx-auto">
            No application, no waiting list — open an account through our
            referral and you&apos;re in.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-5 space-y-4 md:space-y-5">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl p-6 md:p-8 flex gap-5"
              style={{
                background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <span className="text-2xl md:text-3xl font-bold text-gold/40 flex-shrink-0">{s.n}</span>
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-bold text-gold-bright mb-2">{s.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">{s.copy}</p>
                {s.cta && (
                  <a
                    href={s.cta.href}
                    className="inline-block text-xs font-semibold tracking-wide rounded-full px-4 py-2.5"
                    style={{ color: "#0A0A0A", background: "linear-gradient(155deg,#F0D687,#C9A84C)" }}
                  >
                    {s.cta.label}
                  </a>
                )}
                {s.note && <p className="text-[11px] text-muted mt-2">{s.note}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto px-5 mt-10 md:mt-14">
          <div
            className="rounded-xl p-4 text-center"
            style={{ background: "rgba(224,99,90,0.08)", border: "1px solid rgba(224,99,90,0.3)" }}
          >
            <p className="text-[11px] md:text-xs text-foreground/70">
              Trading involves risk of loss. We earn commission from your
              broker referral — see our{" "}
              <a href="/legal/risk" className="underline hover:text-gold-bright">
                Risk Disclaimer
              </a>{" "}
              for full detail before opening an account.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
