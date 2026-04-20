"use client";

import { useEffect, useState } from "react";
import GradualBlur from "./GradualBlur";

export default function PageBlur() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const update = () => {
      const sentinel = document.getElementById("blur-stop");
      if (!sentinel) return;
      const rect = sentinel.getBoundingClientRect();
      setVisible(rect.top > window.innerHeight);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </div>
  );
}
