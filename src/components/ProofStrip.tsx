import AnimatedStat from "@/components/AnimatedStat";

export default function ProofStrip() {
  return (
    <section className="relative py-10 md:py-16 px-5 md:px-10 border-y border-white/8">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-[10px] md:text-xs tracking-[2.5px] text-gold uppercase font-semibold mb-6 md:mb-8">
          Real Results, Verified Live
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
          <AnimatedStat value={160} suffix="%" label="Gamma Total Gain" color="#5FD98A" size={92} />
          <AnimatedStat value={71} suffix="%" label="Gold Signals Win Rate" color="#F0D687" size={92} />
          <AnimatedStat value={83} suffix="%" label="Forex Signals Win Rate" color="#F0D687" size={92} />
        </div>
        <div className="text-center mt-6 md:mt-8">
          <a
            href="/clients/results"
            className="text-xs font-semibold text-gold-bright hover:text-gold underline underline-offset-2"
          >
            See the full track record →
          </a>
        </div>
      </div>
    </section>
  );
}
