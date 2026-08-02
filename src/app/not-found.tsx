import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <div
        className="relative flex-1 flex items-center justify-center pt-16 pb-16 px-5"
        style={{
          background:
            "radial-gradient(ellipse 900px 700px at 50% 40%, rgba(58,44,14,0.7) 0%, rgba(20,15,6,0.85) 45%, rgba(0,0,0,1) 78%), linear-gradient(180deg, #050402 0%, #000000 100%)",
        }}
      >
        <div className="text-center max-w-md">
          <p className="text-xs tracking-[3px] text-gold uppercase font-semibold mb-4">
            404
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-4">
            Not In This Circle
          </h1>
          <p className="text-sm text-foreground/70 mb-8">
            This page doesn&apos;t exist, or it moved. Let&apos;s get you
            back to somewhere real.
          </p>
          <a
            href="/"
            className="inline-block text-sm font-semibold tracking-wide rounded-full px-6 py-3"
            style={{ color: "#0A0A0A", background: "linear-gradient(155deg,#F0D687,#C9A84C)" }}
          >
            Back to The Inner Circle →
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
