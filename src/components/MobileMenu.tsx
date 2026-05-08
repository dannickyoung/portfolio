"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import StaggeredMenuRaw from "./StaggeredMenu";
import { openHireMe } from "@/lib/hireMeBus";

type StaggeredMenuProps = {
  position?: "left" | "right";
  colors?: string[];
  items?: { label: string; link: string; ariaLabel?: string }[];
  socialItems?: { label: string; link: string }[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  changeMenuColorOnOpen?: boolean;
  isFixed?: boolean;
  accentColor?: string;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
};

const StaggeredMenu =
  StaggeredMenuRaw as unknown as React.ComponentType<StaggeredMenuProps>;

const items = [
  { label: "Product", link: "/#works", ariaLabel: "Go to product work" },
  { label: "Branding", link: "/branding", ariaLabel: "Go to branding work" },
  { label: "About", link: "/#about", ariaLabel: "Go to about" },
  { label: "Services", link: "/#services", ariaLabel: "Go to services" },
  { label: "Hire me", link: "#hire-me", ariaLabel: "Open the hire-me form" },
];

export default function MobileMenu() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // The StaggeredMenu renders panel items as plain <a> tags, which trigger a
  // full browser navigation and tear down the shared layout (including the
  // running close-animation). We intercept the click, kick off the close
  // tween, then push the route via Next.js so the layout — and the in-flight
  // GSAP timeline — survives the transition.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest(
        ".sm-panel-item"
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const toggle = root.querySelector<HTMLButtonElement>(".sm-toggle");

      e.preventDefault();

      if (href === "#hire-me") {
        toggle?.click();
        setOpen(false);
        window.setTimeout(() => openHireMe(), 60);
        return;
      }

      toggle?.click();
      setOpen(false);
      // Brief delay so the close animation has a frame to start before the
      // route transition kicks off the destination page's render work.
      window.setTimeout(() => {
        router.push(href);
      }, 80);
    };
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, [router]);

  // The MobileMenu lives in the shared layout, so it persists across route
  // changes. If the user taps a link that navigates to another page, GSAP's
  // close animation may be interrupted mid-flight and leave the panel
  // half-open on the new page. Force-close on every pathname change to keep
  // state consistent. We trigger the internal toggle (which runs the GSAP
  // close timeline) only when the panel actually has the `is-open` class.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const wrapper = root.querySelector(".staggered-menu-wrapper");
    if (wrapper?.hasAttribute("data-open")) {
      const toggle = root.querySelector<HTMLButtonElement>(".sm-toggle");
      toggle?.click();
    }
    setOpen(false);
  }, [pathname]);

  // The internal StaggeredMenu toggle lives inside `.sm-scope` (position: fixed),
  // which creates an isolated stacking context that traps mix-blend-mode — the
  // blend can only see what's painted inside `.sm-scope`, not the page beneath.
  // We hide the internal toggle with CSS and render this external button at
  // body root instead. Its blend backdrop IS the page (same trick as the
  // custom cursor), so it auto-flips white/black over dark/light sections.
  const handleExternalToggle = () => {
    const internalToggle = ref.current?.querySelector<HTMLButtonElement>(
      ".sm-toggle"
    );
    internalToggle?.click();
    setOpen((v) => !v);
  };

  return (
    <div ref={ref} className="mobile-menu-mount">
      <StaggeredMenu
        position="right"
        items={items}
        displaySocials={false}
        displayItemNumbering
        isFixed
        colors={["#75fb4c", "#000000"]}
        accentColor="#75fb4c"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={false}
        logoUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="
      />
      <button
        type="button"
        className="mobile-menu-trigger"
        onClick={handleExternalToggle}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span className="mobile-menu-trigger-icon" aria-hidden>
          <span className="bar bar-top" />
          <span className="bar bar-bot" />
        </span>
      </button>
    </div>
  );
}
