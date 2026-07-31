"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "/clients/hubs", label: "Hubs" },
  { href: "/console", label: "Trader Console" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(5,4,2,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(150%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(150%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold italic text-gold text-sm md:text-base">
          The Inner Circle.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold tracking-wide text-foreground/75 hover:text-gold-bright transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/clients/hubs"
            className="text-xs font-semibold tracking-wide rounded-full px-4 py-2 transition-colors"
            style={{
              color: "#0A0A0A",
              background: "linear-gradient(155deg,#F0D687,#C9A84C)",
            }}
          >
            For Clients
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold-bright text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-5 pb-5 flex flex-col gap-3"
          style={{ background: "rgba(5,4,2,0.97)" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-foreground/85 py-1.5"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/clients/hubs"
            className="text-sm font-semibold text-center rounded-full px-4 py-2.5 mt-1"
            style={{ color: "#0A0A0A", background: "linear-gradient(155deg,#F0D687,#C9A84C)" }}
            onClick={() => setMobileOpen(false)}
          >
            For Clients
          </a>
        </div>
      )}
    </nav>
  );
}
