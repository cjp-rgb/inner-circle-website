"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import AOSMacBook, { AOS_TABS } from "@/components/AOSMacBook";

const CARD_STYLE = {
  background: "linear-gradient(155deg, rgba(200,210,219,0.08) 0%, rgba(200,210,219,0.02) 55%, rgba(255,255,255,0.015) 100%)",
  backdropFilter: "blur(20px) saturate(150%)",
  WebkitBackdropFilter: "blur(20px) saturate(150%)",
  border: "1px solid rgba(200,210,219,0.22)",
};

export default function AffiliatesPage() {
  const [aosTab, setAosTab] = useState("dashboard");

  return (
    <main className="bg-background min-h-screen">
      <div
        className="relative pt-20 md:pt-28 pb-20 md:pb-28"
        style={{
          background:
            "radial-gradient(ellipse 1000px 750px at 50% 15%, rgba(120,130,145,0.22) 0%, rgba(20,20,22,0.9) 45%, rgba(0,0,0,1) 78%), linear-gradient(180deg, #050505 0%, #000000 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center px-5 mb-16 md:mb-24">
          <a href="/" className="inline-block text-xs text-[#C8D2DB]/70 hover:text-[#E8EDF2] mb-8 tracking-wide">
            ← Back to The Inner Circle
          </a>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8D2DB)" }} />
            <span className="text-[10px] md:text-xs tracking-[3px] uppercase font-bold text-[#C8D2DB]">
              For Partners
            </span>
            <span className="w-8 h-px" style={{ background: "linear-gradient(90deg, #C8D2DB, transparent)" }} />
          </div>
          <h1 className="shimmer-text text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Grow With The Inner Circle
          </h1>
          <p className="text-sm md:text-base text-foreground/60 max-w-lg mx-auto">
            Real tools, real infrastructure, real support — not just a
            referral link and good luck.
          </p>
        </div>

        {/* AOS Motion Graphic Showcase */}
        <div className="max-w-4xl mx-auto px-5 mb-20 md:mb-28">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-[10px] md:text-xs tracking-[2.5px] uppercase font-bold text-[#C8D2DB] mb-2">
              The Affiliate Operating System
            </p>
            <h2 className="text-xl md:text-3xl font-bold shimmer-text">
              Built To Run Your Growth For You
            </h2>
          </div>

          <AOSMacBook activeTab={aosTab} />

          <div className="flex justify-center flex-wrap gap-2 mt-8">
            {AOS_TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setAosTab(t.key)}
                className="text-[11px] md:text-xs font-semibold tracking-wide rounded-full px-4 py-2 transition-all"
                style={{
                  color: aosTab === t.key ? "#0A0A0A" : "#C8D2DB",
                  background:
                    aosTab === t.key
                      ? "linear-gradient(120deg,#8A94A6,#E8EDF2 45%,#C8D2DB)"
                      : "rgba(255,255,255,0.05)",
                  border: aosTab === t.key ? "1px solid transparent" : "1px solid rgba(200,210,219,0.18)",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Two equal-weight paths */}
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold shimmer-text">Which One Is You?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Path 1 */}
            <div className="rounded-2xl p-7 md:p-9 flex flex-col" style={CARD_STYLE}>
              <p className="text-[10px] tracking-[2px] uppercase font-bold text-[#C8D2DB] mb-2">Path One</p>
              <h3 className="text-lg md:text-2xl font-bold text-[#E8EDF2] mb-4">
                I&apos;m Looking to Scale
              </h3>
              <ul className="space-y-3 text-sm text-foreground/65 mb-8 flex-1">
                <li>Rates that grow with you — no ceiling</li>
                <li>Team meetups, not just a group chat</li>
                <li>AOS handles your content &amp; captions automatically</li>
                <li>Regular competitions on top of your rate</li>
                <li>Built for the long run, not a quick payout</li>
              </ul>
              <a
                href="https://t.me/TIConboardingbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm font-semibold tracking-wide rounded-full px-5 py-3"
                style={{ color: "#0A0A0A", background: "linear-gradient(120deg,#8A94A6,#E8EDF2 45%,#C8D2DB)" }}
              >
                Apply as an Affiliate →
              </a>
            </div>

            {/* Path 2 */}
            <div className="rounded-2xl p-7 md:p-9 flex flex-col" style={CARD_STYLE}>
              <p className="text-[10px] tracking-[2px] uppercase font-bold text-[#C8D2DB] mb-2">Path Two</p>
              <h3 className="text-lg md:text-2xl font-bold text-[#E8EDF2] mb-4">
                I&apos;m Looking to Scale a Community
              </h3>
              <p className="text-sm text-foreground/65 mb-5 leading-relaxed">
                Already running your own community? Bring it onto the
                Affiliate Operating System and run it as your own — under
                your name, on our infrastructure.
              </p>
              <div className="mb-5">
                <p className="shimmer-text text-3xl font-bold leading-none">Up to $28<span className="text-base">/lot</span></p>
                <p className="text-[10px] text-muted uppercase tracking-wide mt-1">Our highest available rate</p>
              </div>
              <p className="text-xs text-[#E0635A] mb-6">Minimum 100 active members required</p>
              <a
                href="https://t.me/TIConboardingbot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center text-sm font-semibold tracking-wide rounded-full px-5 py-3"
                style={{ color: "#0A0A0A", background: "linear-gradient(120deg,#8A94A6,#E8EDF2 45%,#C8D2DB)" }}
              >
                Apply for White Label →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <style jsx global>{`
        .shimmer-text {
          background: linear-gradient(110deg, #8A94A6 20%, #E8EDF2 45%, #C8D2DB 55%, #8A94A6 80%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmerMove 5s linear infinite;
        }
        @keyframes shimmerMove {
          to { background-position: -250% center; }
        }
      `}</style>
    </main>
  );
}
