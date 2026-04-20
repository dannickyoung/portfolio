"use client";

import { useEffect, useRef } from "react";
import { DottedSurface } from "./ui/dotted-surface";

export default function HeroDotBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const hero = el.parentElement;
    if (!hero) return;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      el.style.setProperty("--mask-opacity", "1");
    };
    const onLeave = () => {
      el.style.setProperty("--mask-opacity", "0");
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="hero-dot-mask"
      style={
        {
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
          opacity: "var(--mask-opacity, 0)",
          transition: "opacity 0.35s ease",
          WebkitMaskImage:
            "radial-gradient(circle 220px at var(--mx, 50%) var(--my, 50%), #000 0%, rgba(0,0,0,0.6) 50%, transparent 80%)",
          maskImage:
            "radial-gradient(circle 220px at var(--mx, 50%) var(--my, 50%), #000 0%, rgba(0,0,0,0.6) 50%, transparent 80%)",
        } as React.CSSProperties
      }
    >
      <DottedSurface
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
    </div>
  );
}
