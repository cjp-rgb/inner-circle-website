"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

const FAQS = [
  {
    q: "What is The Inner Circle?",
    a: "A trading ecosystem — live signals, a fully automated algo, structured education, a community, and a companion app (Trader Console) all built around helping our clients trade better.",
  },
  {
    q: "Is this financial advice?",
    a: "No. We operate as an Introducing Broker, not a regulated financial adviser. Everything we share — signals, education, automated tools — is informational, not a personal recommendation.",
  },
  {
    q: "How much does it cost to join?",
    a: "It's free. There's no membership fee to join The Inner Circle.",
  },
  {
    q: "Is there a minimum to get started?",
    a: "£250 — that's the minimum to open and fund your trading account through our onboarding bot. There's no separate membership cost on top of that; once your account's funded, you have full access to every hub, the community, and Trader Console.",
  },
  {
    q: "Can I use my own existing broker account?",
    a: "Yes, in most cases — The Inner Circle works across most major brokers, so you likely won't need to switch or open a new account.",
  },
  {
    q: "I'm new to trading — is this for me?",
    a: "Yes. The Education Hub is built as a structured path from the basics through advanced Smart Money Concepts, and Copy Trading & Signals runs as its own parallel track if you'd rather follow signals while you learn.",
  },
  {
    q: "Are the results guaranteed?",
    a: "No — past performance is not a reliable indicator of future results.",
  },
  {
    q: "What is the Trader Console?",
    a: "Our own companion app, built entirely in-house. On the Home tab, check in daily to build a streak, send in your Profitshots for a shot at the monthly prize, and use the built-in lot size calculator. The Insights tab gives you live gold sentiment across every timeframe plus alerts before high-impact news hits. Signals brings every signal room into one place with real results shown honestly. Auto connects you straight to Gamma with the full verified track record. And Scanners flags live setups — structure breaks, fair value gaps, order blocks — the moment they form. It's all included as part of being a client, at no extra cost."
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-background min-h-screen">
      <div
        className="relative pt-16 md:pt-24 pb-16 md:pb-24"
        style={{
          background:
            "radial-gradient(ellipse 900px 700px at 50% 20%, rgba(58,44,14,0.7) 0%, rgba(20,15,6,0.85) 45%, rgba(0,0,0,1) 78%), linear-gradient(180deg, #050402 0%, #000000 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center px-5 mb-10 md:mb-14">
          <a href="/" className="inline-block text-xs text-gold-bright/80 hover:text-gold-bright mb-6 tracking-wide">
            ← Back to The Inner Circle
          </a>
          <p className="text-xs md:text-sm tracking-[3px] text-gold uppercase font-semibold mb-3">
            Questions
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-3">
            Frequently Asked
          </h1>
        </div>

        <div className="max-w-2xl mx-auto px-5 space-y-2.5">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.045)",
                  border: isOpen ? "1px solid rgba(212,175,55,0.35)" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm md:text-base font-semibold text-foreground">
                    {item.q}
                  </span>
                  <span className="text-gold-bright text-lg flex-shrink-0 ml-3">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <p className="text-sm text-foreground/60 mb-4">Still have a question?</p>
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
