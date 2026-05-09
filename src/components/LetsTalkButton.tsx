"use client";

import { openHireMe } from "@/lib/hireMeBus";

type Variant = "hero" | "large" | "case";

type Props = {
  variant?: Variant;
  className?: string;
};

export default function LetsTalkButton({ variant = "large", className }: Props) {
  if (variant === "hero") {
    return (
      <button
        type="button"
        onClick={() => openHireMe()}
        className={`hero-cta ${className ?? ""}`.trim()}
        style={{
          background: "transparent",
          border: "none",
          padding: 0,
          font: "inherit",
          cursor: "pointer",
          color: "inherit",
        }}
      >
        <span className="hero-cta-arrow" aria-hidden>
          →
        </span>
        <span>Let&apos;s talk about your idea</span>
      </button>
    );
  }

  const isCase = variant === "case";
  const fontSize = isCase ? 14 : 20;
  const gap = isCase ? 8 : 12;

  return (
    <button
      type="button"
      onClick={() => openHireMe()}
      className={`group relative ${
        isCase ? "flex" : "inline-flex"
      } items-center justify-center overflow-hidden rounded-full cursor-pointer ${
        className ?? ""
      }`.trim()}
      style={{
        fontSize,
        fontWeight: 600,
        padding: "16px 24px",
        background: "#000",
        color: isCase ? "#fff" : "var(--primary)",
        ...(isCase ? { width: "100%" } : { minWidth: 180 }),
        border: "none",
      }}
    >
      <span
        className="inline-flex items-center transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0"
        style={{ gap }}
      >
        Let&apos;s talk <span aria-hidden>→</span>
      </span>
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center translate-y-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        style={{
          background: "#fff",
          color: "#000",
          border: "1px solid #000",
          borderRadius: 9999,
          gap,
        }}
      >
        Let&apos;s talk <span aria-hidden>→</span>
      </span>
    </button>
  );
}
