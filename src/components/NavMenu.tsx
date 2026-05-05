"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { openHireMe } from "@/lib/hireMeBus";

type NavLink = { label: string; href: string };
type Props = { links: NavLink[] };

export default function NavMenu({ links }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Outside-click closes the desktop dropdown only.
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (!ref.current) return;
      if (ref.current.contains(target)) return;
      // Don't close on clicks inside the mobile overlay (which is portaled).
      const overlay = document.getElementById("mobile-nav-overlay");
      if (overlay && overlay.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    if (label === "Hire me") {
      e.preventDefault();
      openHireMe();
    }
    setOpen(false);
  };

  const mobileOverlay = (
    <div
      id="mobile-nav-overlay"
      className={`mobile-nav-overlay${open ? " is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <button
        type="button"
        className="mobile-nav-close"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M5 5L19 19M19 5L5 19" />
        </svg>
      </button>
      <ul className="mobile-nav-list">
        {links.map((l, i) => (
          <li
            key={l.href}
            data-hire={l.label === "Hire me" ? "true" : undefined}
            style={{ ["--i" as string]: i } as React.CSSProperties}
          >
            <Link
              href={l.href}
              onClick={(e) => handleLinkClick(e, l.label)}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div ref={ref} className={`nav-menu-zone${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="menu-button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>
      <ul className="nav-menu" role="menu">
        {links.map((l, i) => (
          <li
            key={l.href}
            style={{ ["--i" as string]: i } as React.CSSProperties}
          >
            <Link
              href={l.href}
              className="nav-link"
              onClick={(e) => handleLinkClick(e, l.label)}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      {mounted && createPortal(mobileOverlay, document.body)}
    </div>
  );
}
