"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import AOSMacBook, { AOS_TABS, AOS_TAB_INTRO } from "@/components/AOSMacBook";

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
        className="relative pt-16 md:pt-24 pb-16 md:pb-24"
        style={{
          background:
            "radial-gradient(ellipse 1000px 750px at 50% 15%, rgba(120,130,145,0.22) 0%, rgba(20,20,22,0.9) 45%, rgba(0,0,0,1) 78%), linear-gradient(180deg, #050505 0%, #000000 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center px-5 mb-16 md:mb-24">
          <a href="/" className="inline-block text-xs text-[#C8D2DB]/70 hover:text-[#E8EDF2] mb-8 tracking-wide">
            ← Back to The Inner Circle
          </a>
          <div className="flex items-center justify-center gap-3 mb-5 word-rise" style={{ animationDelay: "0s" }}>
            <span className="w-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8D2DB)" }} />
            <span className="text-[10px] md:text-xs tracking-[3px] uppercase font-bold text-[#C8D2DB]">
              For Partners
            </span>
            <span className="w-8 h-px" style={{ background: "linear-gradient(90deg, #C8D2DB, transparent)" }} />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight whitespace-nowrap">
            {"Grow With The Inner Circle".split(" ").map((word, i) => (
              <span
                key={word + i}
                className="inline-block word-rise"
                style={{ animationDelay: `${0.12 + i * 0.07}s`, marginRight: "0.28em" }}
              >
                <span className="shimmer-text inline-block">{word}</span>
              </span>
            ))}
          </h1>
          <p className="text-sm md:text-base text-foreground/60 max-w-lg mx-auto word-rise" style={{ animationDelay: "0.65s" }}>
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
            <h2 className="text-xl md:text-3xl font-bold shimmer-text mb-4">
              Built To Run Your Growth For You
            </h2>
            <p className="text-sm text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              AOS is a full web app, built entirely in-house — not a
              spreadsheet, not a Notion doc. Client rebates and deposits
              update from a simple weekly import, your social content gets
              written and scheduled for you, and you can see exactly where
              your growth is coming from at a glance. The point isn&apos;t
              just tracking numbers — it&apos;s removing the busywork so the
              actual job (growing your network) is the only thing left to
              do.
            </p>
          </div>

          <AOSMacBook activeTab={aosTab} />

          <div className="text-center mt-6 max-w-lg mx-auto">
            <p key={aosTab} className="text-xs md:text-sm text-foreground/60 animate-[introFade_0.3s_ease]">
              {AOS_TAB_INTRO[aosTab]}
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-2 mt-6">
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
              <ul className="space-y-3 text-sm text-foreground/65 mb-6 flex-1">
                <li>Rates that grow with you — no ceiling</li>
                <li>Weekly training calls with the team</li>
                <li>Team meetups, not just a group chat</li>
                <li>AOS handles your content &amp; captions automatically</li>
                <li>Regular competitions on top of your rate</li>
              </ul>
              <div
                className="rounded-lg p-3.5 mb-6 text-xs text-foreground/70 leading-relaxed"
                style={{ background: "rgba(200,210,219,0.06)", border: "1px solid rgba(200,210,219,0.15)" }}
              >
                <span className="text-[#E8EDF2] font-semibold">This is built for the long run.</span>{" "}
                We're not optimizing for a quick payout — the rates, the tools, the training, all of it is designed so this is still worth doing in three years, not three months.
              </div>
              <a
                href="https://t.me/TIConboardingbot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center text-sm font-semibold tracking-wide rounded-full px-5 py-3"
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
              <p className="text-sm text-foreground/65 mb-4 leading-relaxed">
                Already running your own community? The entire ecosystem
                goes white label, under your name:
              </p>
              <ul className="space-y-2 text-sm text-foreground/65 mb-5">
                <li>Signals</li>
                <li>Education</li>
                <li>Copiers</li>
                <li>Tools &amp; resources</li>
                <li>The Trader Console mini app</li>
              </ul>
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
        @keyframes introFade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .word-rise {
          opacity: 0;
          animation: wordRise 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes wordRise {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
