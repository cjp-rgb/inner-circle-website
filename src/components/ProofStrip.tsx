"use client";

import { useEffect, useState } from "react";
import AnimatedStat from "@/components/AnimatedStat";

export default function ProofStrip() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 400);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const size = isMobile ? 76 : 92;

  return (
    <section className="relative py-10 md:py-16 px-5 md:px-10 border-y border-white/8">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-[10px] md:text-xs tracking-[2.5px] text-gold uppercase font-semibold mb-6 md:mb-8">
          Real Results, Verified Live
        </p>
        <div className="flex items-center justify-center gap-x-3 sm:gap-x-10 md:gap-x-16 gap-y-6">
          <AnimatedStat value={160} suffix="%" label="Gamma Total Gain" color="#5FD98A" size={size} />
          <AnimatedStat value={71} suffix="%" label="Gold Signals Win Rate" color="#F0D687" size={size} />
          <AnimatedStat value={83} suffix="%" label="Forex Signals Win Rate" color="#F0D687" size={size} />
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
