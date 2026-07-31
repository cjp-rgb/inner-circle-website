export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 py-10 px-5 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-extrabold italic text-gold text-lg">The Inner Circle.</p>
          <p className="text-xs text-muted mt-1">One Ecosystem. Every Edge.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-foreground/70">
          <a href="/clients" className="hover:text-gold-bright transition-colors">Clients</a>
          <a href="/affiliates" className="hover:text-gold-bright transition-colors">Affiliates</a>
          <a href="/clients/faq" className="hover:text-gold-bright transition-colors">FAQ</a>
          <a href="/legal/risk" className="hover:text-gold-bright transition-colors">Risk Disclaimer</a>
          <a href="/legal/privacy" className="hover:text-gold-bright transition-colors">Privacy</a>
          <a href="/legal/terms" className="hover:text-gold-bright transition-colors">Terms</a>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/5">
        <p className="text-[11px] text-muted/80 leading-relaxed max-w-3xl mx-auto text-center md:text-left">
          Trading involves risk of loss and is not suitable for all investors.
          Past performance is not a reliable indicator of future results. The
          Inner Circle is an Introducing Broker and does not provide
          regulated investment advice. See our full{" "}
          <a href="/legal/risk" className="underline hover:text-gold-bright">
            Risk Disclaimer
          </a>{" "}
          for details.
        </p>
        <p className="text-[11px] text-muted/60 mt-4 text-center md:text-left">
          © {year} The Inner Circle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
