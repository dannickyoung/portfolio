"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { openHireMe } from "@/lib/hireMeBus";

type NavLink = { label: string; href: string };
type Props = { links: NavLink[] };

export default function NavMenu({ links }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (!ref.current) return;
      if (ref.current.contains(target)) return;
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
    </div>
  );
}
