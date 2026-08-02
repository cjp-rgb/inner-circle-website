export default function AudienceFork() {
  return (
    <section id="fork" className="relative py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm tracking-[3px] text-gold uppercase font-semibold mb-3">
            Which brings you here
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gold-bright">
            Two Ways In
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {/* Clients */}
          <div
            className="group relative rounded-xl md:rounded-2xl p-4 md:p-10 flex flex-col items-start transition-transform hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(212,175,55,0.3)",
              boxShadow: "0 14px 34px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            <span className="text-[9px] md:text-xs tracking-[1.5px] md:tracking-[2px] text-gold uppercase font-semibold mb-1.5 md:mb-3">
              For Traders
            </span>
            <h3 className="text-sm md:text-2xl font-bold text-gold-bright mb-1.5 md:mb-3">
              I&apos;m a Client
            </h3>
            <p className="text-[10px] md:text-sm text-foreground/75 leading-relaxed mb-3 md:mb-6">
              Signals, automation, education, and a community built around
              actually trading better — see what&apos;s inside and how to join.
            </p>
            <div className="mt-auto flex items-center gap-4 flex-wrap">
              <a
                href="/clients"
                className="text-[10px] md:text-sm font-semibold text-gold-bright hover:underline"
              >
                See What's Inside →
              </a>
              <a
                href="/clients/join"
                className="text-[10px] md:text-sm font-semibold rounded-full px-3 py-1.5 md:px-4 md:py-2"
                style={{ color: "#0A0A0A", background: "linear-gradient(155deg,#F0D687,#C9A84C)" }}
              >
                How to Join
              </a>
            </div>
          </div>

          {/* Affiliates */}
          <a
            href="/affiliates"
            className="group relative rounded-xl md:rounded-2xl p-4 md:p-10 flex flex-col items-start transition-transform hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(180,190,200,0.28)",
              boxShadow: "0 14px 34px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            <span className="text-[9px] md:text-xs tracking-[1.5px] md:tracking-[2px] text-[#C8D2DB] uppercase font-semibold mb-1.5 md:mb-3">
              For Partners
            </span>
            <h3 className="text-sm md:text-2xl font-bold text-[#E8EDF2] mb-1.5 md:mb-3">
              I&apos;m an Affiliate
            </h3>
            <p className="text-[10px] md:text-sm text-foreground/75 leading-relaxed mb-3 md:mb-6">
              Introduce clients, earn on every trade they place, and get the
              tools built specifically to help you grow your own network.
            </p>
            <span className="mt-auto text-[10px] md:text-sm font-semibold text-[#E8EDF2] group-hover:underline">
              See Your Earning Potential →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
