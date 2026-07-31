"use client";

import { useEffect, useState } from "react";

const MENU = [
  {
    href: "/clients/hubs",
    title: "Clients",
    who: "For traders — signals, automation, education, and a community built around trading better.",
  },
  {
    href: "/console",
    title: "Trader Console",
    who: "Our flagship companion app — live market insights, automation, and your daily driver.",
  },
  {
    href: "/#fork",
    title: "Affiliates",
    who: "For partners — introduce clients, earn commission, and grow your own network.",
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

      {/* Full-screen translucent menu overlay */}
      <div
        className="fixed inset-0 z-[60] transition-opacity duration-300"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          background: "rgba(5,4,2,0.88)",
          backdropFilter: "blur(24px) saturate(140%)",
          WebkitBackdropFilter: "blur(24px) saturate(140%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between">
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

        <div className="max-w-2xl mx-auto px-5 md:px-8 mt-10 md:mt-16">
          {MENU.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between py-6 md:py-8 border-b border-white/10 transition-all"
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(10px)",
              }}
            >
              <div>
                <h3 className="text-xl md:text-3xl font-bold text-gold-bright group-hover:text-gold transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-foreground/60 max-w-md">
                  {item.who}
                </p>
              </div>
              <span className="text-gold-bright text-xl md:text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
