import Footer from "@/components/Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20">
        <a
          href="/"
          className="inline-block text-xs text-gold-bright/80 hover:text-gold-bright mb-8 tracking-wide"
        >
          ← Back to The Inner Circle
        </a>

        <h1 className="text-2xl md:text-4xl font-bold text-gold-bright mb-2">
          {title}
        </h1>
        <p className="text-xs text-muted mb-10 md:mb-14">
          Last updated: {updated}
        </p>

        <div className="legal-prose text-sm md:text-base text-foreground/85 leading-relaxed space-y-6">
          {children}
        </div>
      </div>
      <Footer />

      <style>{`
        .legal-prose h2 {
          color: #F0D687;
          font-weight: 700;
          font-size: 1.15em;
          margin-top: 2em;
          margin-bottom: 0.6em;
        }
        .legal-prose p {
          margin-bottom: 1em;
        }
        .legal-prose ul {
          list-style: disc;
          padding-left: 1.4em;
          margin-bottom: 1em;
        }
        .legal-prose li {
          margin-bottom: 0.5em;
        }
        .legal-prose strong {
          color: #F4EDE0;
        }
        .legal-prose a {
          color: #D4AF37;
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
