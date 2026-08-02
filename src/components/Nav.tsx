"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "/clients", label: "Clients" },
  { href: "/console", label: "Trader Console" },
  { href: "/affiliates", label: "Affiliates" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-12 md:h-14 flex items-center justify-between">
        <a href="/" className="font-extrabold italic text-gold text-sm">
          The Inner Circle.
        </a>

        {/* Desktop: plain links, no buttons */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-foreground/70 hover:text-gold-bright transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile: small dropdown, not full-screen */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center gap-[4px] w-11 h-11"
        >
          <span className="block h-px w-5 bg-gold-bright" />
          <span className="block h-px w-5 bg-gold-bright" />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden mx-5 mb-4 rounded-xl overflow-hidden"
          style={{
            background: "rgba(10,8,4,0.97)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-foreground/80 border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
