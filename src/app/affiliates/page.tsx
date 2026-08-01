import Footer from "@/components/Footer";

const NEW_AFFILIATE_PERKS = [
  {
    title: "Rates That Grow With You",
    copy: "Start on a real rate from day one, and grow it as your network grows — no ceiling on how far you can take it.",
  },
  {
    title: "Team Meetups",
    copy: "Real, in-person time with the team and other affiliates — not just a Telegram group you never hear from again.",
  },
  {
    title: "AOS — Your Own Growth Engine",
    copy: "The Affiliate Operating System handles your content calendar, AI-written captions, and Profit Shot forwarding automatically — built so you can grow without needing to be a full-time content creator.",
  },
  {
    title: "Competitions",
    copy: "Regular incentives and contests on top of your rate — extra reasons to push, not just a static commission.",
  },
  {
    title: "Systems That Actually Help Your Clients Too",
    copy: "Retention tools, automated check-ins, and a real education path for the people you refer — happier clients stay longer, which means you earn longer.",
  },
  {
    title: "Built for the Long Run",
    copy: "We're not optimizing for a quick payout. The whole system — rates, tools, community — is built so this is still worth doing in three years, not three months.",
  },
];

export default function AffiliatesPage() {
  return (
    <main className="bg-background min-h-screen">
      <div
        className="relative pt-16 md:pt-24 pb-16 md:pb-24"
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
            For Partners
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-3">
            Two Ways To Grow With Us
          </h1>
          <p className="text-sm text-foreground/70 max-w-lg mx-auto">
            Whether you're just starting out or bringing an established
            community, there's a real path here — not just a referral link.
          </p>
        </div>

        {/* New Affiliates */}
        <div className="max-w-5xl mx-auto px-5 mb-14 md:mb-20">
          <div className="text-center mb-8">
            <span className="inline-block text-[10px] md:text-xs tracking-[2px] text-gold-bright uppercase font-bold border border-gold/40 rounded-full px-3 py-1 mb-3">
              Start Here
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-gold-bright">New Affiliates</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {NEW_AFFILIATE_PERKS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-5 md:p-6"
                style={{
                  background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  WebkitBackdropFilter: "blur(20px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <h3 className="font-bold text-gold-bright text-sm md:text-base mb-1.5">{p.title}</h3>
                <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://t.me/TIConboardingbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold tracking-wide rounded-full px-6 py-3"
              style={{ color: "#0A0A0A", background: "linear-gradient(155deg,#F0D687,#C9A84C)" }}
            >
              Apply as an Affiliate →
            </a>
          </div>
        </div>

        {/* White Label */}
        <div className="max-w-3xl mx-auto px-5">
          <div
            className="rounded-2xl p-7 md:p-10 text-center"
            style={{
              background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(212,175,55,0.35)",
            }}
          >
            <span className="inline-block text-[10px] md:text-xs tracking-[2px] text-[#E4E9ED] uppercase font-bold border border-[#C8D2DB]/40 rounded-full px-3 py-1 mb-4">
              For Established Communities
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-gold-bright mb-3">White Label</h2>
            <p className="text-sm text-foreground/70 max-w-lg mx-auto mb-6 leading-relaxed">
              Already running your own community or brand? Bring it onto the
              Affiliate Operating System and run it as your own — same
              infrastructure we use ourselves, under your name.
            </p>
            <p className="text-4xl md:text-5xl font-bold text-gold-bright mb-1">Up to $28<span className="text-lg md:text-xl">/lot</span></p>
            <p className="text-xs text-muted uppercase tracking-wide mb-6">Our highest available rate</p>
            <div
              className="inline-block rounded-full px-4 py-2 text-xs font-semibold mb-8"
              style={{ background: "rgba(224,99,90,0.1)", border: "1px solid rgba(224,99,90,0.3)", color: "#E0635A" }}
            >
              Minimum 100 active members required
            </div>
            <div>
              <a
                href="https://t.me/TIConboardingbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold tracking-wide rounded-full px-6 py-3"
                style={{ color: "#0A0A0A", background: "linear-gradient(155deg,#F0D687,#C9A84C)" }}
              >
                Apply for White Label →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
