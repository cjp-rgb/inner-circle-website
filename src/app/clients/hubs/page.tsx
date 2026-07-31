import HubAccordion from "@/components/HubAccordion";
import Footer from "@/components/Footer";

export default function HubsPage() {
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
          <a
            href="/"
            className="inline-block text-xs text-gold-bright/80 hover:text-gold-bright mb-6 tracking-wide"
          >
            ← Back to The Inner Circle
          </a>
          <p className="text-xs md:text-sm tracking-[3px] text-gold uppercase font-semibold mb-3">
            The Ecosystem
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-3">
            Six Hubs. One Edge.
          </h1>
          <p className="text-sm text-foreground/70">
            Select a hub to see what&apos;s actually inside.
          </p>
        </div>

        <HubAccordion />
      </div>
      <Footer />
    </main>
  );
}
