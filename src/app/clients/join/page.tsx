import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Join",
  description:
    "One message on Telegram is all it takes — our onboarding bot walks you through the rest.",
};

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
        <div className="max-w-3xl mx-auto text-center px-5">
          <a href="/" className="inline-block text-xs text-gold-bright/80 hover:text-gold-bright mb-6 tracking-wide">
            ← Back to The Inner Circle
          </a>
          <p className="text-xs md:text-sm tracking-[3px] text-gold uppercase font-semibold mb-3">
            How To Join
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-4">
            One Message In
          </h1>
          <p className="text-sm md:text-base text-foreground/70 max-w-md mx-auto mb-10">
            Message our onboarding bot on Telegram — it walks you through
            account setup, verifies you, and sends your invite the moment
            you're in.
          </p>

          <a
            href="https://t.me/TIConboardingbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base font-semibold tracking-wide rounded-full px-8 py-4"
            style={{ color: "#0A0A0A", background: "linear-gradient(155deg,#F0D687,#C9A84C)" }}
          >
            Message @TIConboardingbot →
          </a>
          <p className="mt-3 text-xs text-muted">
            Takes about 2 minutes · Official The Inner Circle bot
          </p>

          <div
            className="mt-14 rounded-2xl p-6 md:p-8 text-left"
            style={{
              background: "linear-gradient(155deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <p className="text-xs text-gold uppercase tracking-wide font-semibold mb-4">What happens next</p>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li className="flex gap-3"><span className="text-gold-bright font-bold">1</span> Tap the button above to open Telegram and start the bot</li>
              <li className="flex gap-3"><span className="text-gold-bright font-bold">2</span> New account: name, email, phone, quick KYC, and your deposit. Transferring an existing account takes up to 24 hours.</li>
              <li className="flex gap-3"><span className="text-gold-bright font-bold">3</span> Your invite is sent automatically once you're verified</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
