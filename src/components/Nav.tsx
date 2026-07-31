"use client";

import { useEffect, useState } from "react";

const MENU = [
  {
    href: "/clients/hubs",
    title: "Clients",
    who: "For traders — signals, automation, education, and a community built around trading better.",
    icon: (
      <>
        <path d="M13 2 L4 14 h6 l-1 8 9-12h-6z" />
      </>
    ),
  },
  {
    href: "/console",
    title: "Trader Console",
    who: "Our flagship companion app — live market insights, automation, and your daily driver.",
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M10 18h4" />
      </>
    ),
  },
  {
    href: "/#fork",
    title: "Affiliates",
    who: "For partners — introduce clients, earn commission, and grow your own network.",
    icon: (
      <>
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <circle cx="12" cy="17" r="3" />
        <path d="M9.5 8.5L10.3 14.5M14.5 8.5L13.7 14.5" />
      </>
    ),
  },
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex flex-col justify-center gap-[5px] w-8 h-8"
          >
            <span className="block h-px w-6 bg-gold-bright" />
            <span className="block h-px w-6 bg-gold-bright" />
          </button>
        </div>
      </nav>

      {/* Full-screen opaque menu overlay */}
      <div
        className="fixed inset-0 z-[60] transition-opacity duration-300 flex flex-col overflow-y-auto"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          background:
            "radial-gradient(ellipse 900px 700px at 50% 30%, rgba(58,44,14,0.85) 0%, rgba(20,15,6,0.95) 45%, rgba(0,0,0,1) 78%), linear-gradient(180deg, #050402 0%, #000000 100%)",
        }}
      >
        <div className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 border-t-2 border-l-2 border-gold/60" />
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 border-t-2 border-r-2 border-gold/60" />
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-8 h-8 border-b-2 border-l-2 border-gold/60" />
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 border-b-2 border-r-2 border-gold/60" />

        <div className="max-w-6xl w-full mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between flex-shrink-0">
          <a href="/" className="font-extrabold italic text-gold text-sm md:text-base" onClick={() => setOpen(false)}>
            The Inner Circle.
          </a>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-gold-bright text-xl leading-none w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 flex items-center">
          <div className="max-w-2xl w-full mx-auto px-5 md:px-8">
            {MENU.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 md:gap-6 py-6 md:py-8 border-b border-white/10 transition-all"
                style={{
                  transitionDelay: open ? `${i * 70}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(155deg, rgba(255,255,255,0.08), rgba(240,214,135,0.06))",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F0D687" strokeWidth="1.8" className="w-5 h-5 md:w-6 md:h-6">
                    {item.icon}
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-3xl font-bold text-gold-bright group-hover:text-gold transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground/60 max-w-md">
                    {item.who}
                  </p>
                </div>
                <span className="text-gold-bright text-xl md:text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-[10px] tracking-[3px] text-muted uppercase pb-6 flex-shrink-0">
          One Ecosystem. Every Edge.
        </p>
      </div>
    </>
  );
}
