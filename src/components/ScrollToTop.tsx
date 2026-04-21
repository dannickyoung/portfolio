"use client";

import { useLayoutEffect, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash;
    const snap = () => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          if (window.__lenis) {
            window.__lenis.scrollTo(el as HTMLElement, { immediate: true, force: true });
          } else {
            (el as HTMLElement).scrollIntoView();
          }
          return;
        }
      }
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true, force: true });
      } else {
        window.scrollTo(0, 0);
      }
    };
    snap();
    requestAnimationFrame(snap);
  }, [pathname]);

  return null;
}
