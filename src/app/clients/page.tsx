import Footer from "@/components/Footer";

const SECTIONS = [
  {
    href: "/clients/hubs",
    title: "The Hubs",
    copy: "Six hubs, one ecosystem — signals, automation, education, and community. Explore what's actually inside each one.",
  },
  {
    href: "/clients/results",
    title: "Results",
    copy: "Real numbers, shown honestly — the same track record our own clients see, with the disclaimers that come with it.",
  },
  {
    href: "/clients/join",
    title: "How to Join",
    copy: "Three steps, no application. Open an account through our referral and you're in.",
  },
  {
    href: "/clients/faq",
    title: "FAQ",
    copy: "Costs, minimums, what's included — the questions people actually ask before joining.",
  },
];

export default function ClientsPage() {
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
            For Traders
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-3">
            Everything For Clients
          </h1>
          <p className="text-sm text-foreground/70 max-w-lg mx-auto">
            Signals, automation, education, and a community built around
            actually trading better.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="group rounded-2xl p-6 md:p-7 flex flex-col"
              style={{
                background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <h3 className="text-lg md:text-xl font-bold text-gold-bright mb-2 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">{s.copy}</p>
              <span className="mt-auto text-xs font-semibold text-gold-bright">
                Explore →
              </span>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
