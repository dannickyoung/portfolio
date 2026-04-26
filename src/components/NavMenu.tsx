"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLink = { label: string; href: string };

type Props = { links: NavLink[] };

export default function NavMenu({ links }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

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
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
