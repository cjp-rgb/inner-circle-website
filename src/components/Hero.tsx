"use client";

import { useEffect, useRef, useState } from "react";

const PHONES = [
  { src: "/phones/trade_hub_phone_crop.webp", label: "Trade Hub", slug: "trade-hub" },
  { src: "/phones/vip_hub_phone_crop.webp", label: "VIP Hub", slug: "vip-hub" },
  { src: "/phones/automated_hub_phone_crop.webp", label: "Automated Hub", slug: "automated-hub" },
  { src: "/phones/forex_hub_phone_crop.webp", label: "Forex Hub", slug: "forex-hub" },
  { src: "/phones/education_hub_phone_crop.webp", label: "Education Hub", slug: "education-hub" },
  { src: "/phones/trader_console_phone_crop.webp", label: "Trader Console", slug: "trader-console" },
];

function useViewportSize() {
  const [size, setSize] = useState({ w: 1440 });
  useEffect(() => {
    const update = () => setSize({ w: window.innerWidth });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

function initialStyle(i: number, spacing: number, centerWidth: number) {
  return {
    width: `${centerWidth}px`,
    transform: `translateX(${i * spacing}px) scale(${Math.max(0.55, 1 - i * 0.28)})`,
    opacity: Math.max(0, 1 - i * 0.55),
    zIndex: 100 - i * 10,
    display: i > 2.4 ? "none" : "block",
  } as const;
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const swipeAreaRef = useRef<HTMLDivElement>(null);
  const phoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const detailLinkRef = useRef<HTMLAnchorElement>(null);
  const lastIndexRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const activeFloatRef = useRef(0);

  const { w: viewportW } = useViewportSize();
  const isMobile = viewportW < 640;
  const isTablet = viewportW >= 640 && viewportW < 1024;

  const spacing = isMobile ? 190 : isTablet ? 260 : 340;
  const centerWidth = isMobile ? 210 : isTablet ? 220 : 280;
  const sectionHeightVh = isMobile ? 100 : 500; // mobile: no scroll-jacking at all

  const applyTransforms = (activeFloat: number) => {
    activeFloatRef.current = activeFloat;
    PHONES.forEach((_, i) => {
      const el = phoneRefs.current[i];
      if (!el) return;
      const offset = i - activeFloat;
      const absOffset = Math.abs(offset);
      const scale = Math.max(0.55, 1 - absOffset * 0.28);
      const opacity = Math.max(0, 1 - absOffset * 0.55);
      const translateX = offset * spacing;
      const rotateY = isMobile ? 0 : Math.max(-35, Math.min(35, offset * -22));
      const z = 100 - Math.round(absOffset * 10);

      if (absOffset > 2.4) {
        el.style.display = "none";
        return;
      }
      el.style.display = "block";
      el.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
      el.style.opacity = String(opacity);
      el.style.zIndex = String(z);
    });

    const nearest = Math.min(Math.max(Math.round(activeFloat), 0), PHONES.length - 1);
    if (nearest !== lastIndexRef.current) {
      lastIndexRef.current = nearest;
      if (labelRef.current) labelRef.current.textContent = PHONES[nearest].label;
      if (detailLinkRef.current) {
        detailLinkRef.current.href = `/clients/hubs?hub=${PHONES[nearest].slug}`;
      }
    }
  };

  // ===== DESKTOP/TABLET: scroll-linked (unchanged, confirmed working) =====
  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const scrollDistance = section.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), scrollDistance);
        const progress = scrollDistance > 0 ? scrolled / scrollDistance : 0;
        applyTransforms(progress * (PHONES.length - 1));
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, spacing]);

  // ===== MOBILE: direct touch swipe carousel =====
  useEffect(() => {
    if (!isMobile) return;
    const area = swipeAreaRef.current;
    if (!area) return;

    let startX = 0;
    let startFloat = 0;
    let dragging = false;
    let snapRaf: number | null = null;

    const swipeSensitivity = spacing; // px of drag == 1 full phone-step

    const onTouchStart = (e: TouchEvent) => {
      if (snapRaf !== null) {
        cancelAnimationFrame(snapRaf);
        snapRaf = null;
      }
      dragging = true;
      startX = e.touches[0].clientX;
      startFloat = activeFloatRef.current;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      const dx = e.touches[0].clientX - startX;
      const next = startFloat - dx / swipeSensitivity;
      const clamped = Math.min(Math.max(next, 0), PHONES.length - 1);
      applyTransforms(clamped);
    };

    const snapTo = (target: number) => {
      const start = activeFloatRef.current;
      const distance = target - start;
      const duration = 260;
      const startTime = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);

      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        applyTransforms(start + distance * ease(t));
        if (t < 1) {
          snapRaf = requestAnimationFrame(step);
        } else {
          snapRaf = null;
        }
      };
      snapRaf = requestAnimationFrame(step);
    };

    const onTouchEnd = () => {
      if (!dragging) return;
      dragging = false;
      const nearest = Math.min(
        Math.max(Math.round(activeFloatRef.current), 0),
        PHONES.length - 1
      );
      snapTo(nearest);
    };

    area.addEventListener("touchstart", onTouchStart, { passive: true });
    area.addEventListener("touchmove", onTouchMove, { passive: true });
    area.addEventListener("touchend", onTouchEnd, { passive: true });

    applyTransforms(0);

    return () => {
      area.removeEventListener("touchstart", onTouchStart);
      area.removeEventListener("touchmove", onTouchMove);
      area.removeEventListener("touchend", onTouchEnd);
      if (snapRaf !== null) cancelAnimationFrame(snapRaf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, spacing]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: isMobile ? "100dvh" : `${sectionHeightVh}dvh` }}
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        {/* Background glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 700px at 50% 46%, rgba(58,44,14,0.85) 0%, rgba(20,15,6,0.9) 45%, rgba(0,0,0,1) 78%), linear-gradient(180deg, #050402 0%, #000000 100%)",
          }}
        />

        {/* Corner brackets */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 w-7 h-7 md:w-11 md:h-11 border-t-2 border-l-2 border-gold/70" />
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-7 h-7 md:w-11 md:h-11 border-t-2 border-r-2 border-gold/70" />
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-7 h-7 md:w-11 md:h-11 border-b-2 border-l-2 border-gold/70" />
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-7 h-7 md:w-11 md:h-11 border-b-2 border-r-2 border-gold/70" />

        {/* Header wordmark */}
        <div className="absolute top-8 md:top-12 left-0 w-full text-center z-30 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold italic text-gold drop-shadow-[0_0_18px_rgba(212,175,55,0.35)]">
            The Inner Circle.
          </h1>
          <p className="mt-2 text-[10px] sm:text-xs md:text-base font-semibold tracking-[2px] md:tracking-[3px] text-foreground/90 uppercase">
            One Ecosystem. Every Edge.
          </p>
        </div>

        {/* Phone carousel — swipe area on mobile, plain container on desktop */}
        <div
          ref={swipeAreaRef}
          className="relative z-20 w-full h-full flex items-center justify-center touch-pan-y"
        >
          {PHONES.map((phone, i) => (
            <div
              key={phone.label}
              ref={(el) => {
                phoneRefs.current[i] = el;
              }}
              className="absolute will-change-transform"
              style={initialStyle(i, spacing, centerWidth)}
              onClick={
                !isMobile
                  ? () => (window.location.href = `/clients/hubs?hub=${phone.slug}`)
                  : undefined
              }
            >
              <img
                src={phone.src}
                alt={phone.label}
                draggable={false}
                className={
                  isMobile
                    ? "w-full pointer-events-none select-none"
                    : "w-full drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)] select-none cursor-pointer hover:brightness-110 transition-[filter]"
                }
              />
            </div>
          ))}
        </div>

        {/* Active hub label */}
        <div className="absolute bottom-24 md:bottom-28 left-0 w-full text-center z-30">
          <p
            ref={labelRef}
            className="text-sm md:text-lg font-bold tracking-[2px] text-gold-bright uppercase"
          >
            Trade Hub
          </p>
          <a
            ref={detailLinkRef}
            href="/clients/hubs?hub=trade-hub"
            className="inline-block mt-1.5 text-[10px] md:text-xs text-gold/80 hover:text-gold-bright underline underline-offset-2"
          >
            View details →
          </a>
        </div>

        {/* Scroll/swipe cue */}
        <div className="absolute bottom-8 md:bottom-12 left-0 w-full text-center z-30">
          <p className="text-[10px] md:text-xs tracking-[3px] md:tracking-[4px] text-muted uppercase animate-pulse">
            {isMobile ? "Swipe" : "Scroll"}
          </p>
        </div>
      </div>
    </section>
  );
}
