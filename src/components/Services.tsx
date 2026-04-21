"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const services: { label: string; image?: string }[] = [
  { label: "Product & UI/UX Design", image: "/services/product-ui-ux.png" },
  { label: "Design Systems", image: "/services/design-systems.png" },
  { label: "AI-Assisted Design", image: "/services/ai-assisted.png" },
  { label: "Design-to-Code", image: "/services/design-to-code.png" },
  { label: "User Research & Strategy", image: "/services/user-research.png" },
  { label: "and more." },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="wrapper"
      style={{
        background: "var(--bg)",
        color: "var(--text-inv)",
        paddingTop: 96,
        paddingBottom: 96,
        overflow: "hidden",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container-830 section-line on-dark">
        <Reveal>
          <div className="row-split on-dark" style={{ marginBottom: 64 }}>
            <div className="row-left">
              <p className="t-label" style={{ opacity: 0.6 }}>
                Services
              </p>
            </div>
            <div className="row-right">
              <h2 className="h-section" style={{ margin: 0 }}>
                Looking to boost your digital presence?
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="row-split on-dark" style={{ alignItems: "stretch" }}>
            <div className="row-left">
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseLeave={() => setHovered(null)}
              >
                {services.map((s, i) => {
                  const interactive = Boolean(s.image);
                  const dimmed = hovered !== null && hovered !== i;
                  return (
                    <li
                      key={s.label}
                      onMouseEnter={interactive ? () => setHovered(i) : undefined}
                      style={{
                        padding: "20px 0",
                        fontSize: 24,
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        opacity: dimmed ? 0.3 : 1,
                        transition: "opacity 0.3s ease",
                        cursor: "none",
                      }}
                    >
                      {s.label}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="row-right" style={{ display: "flex" }}>
              <div
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 12,
                }}
              >
                {services.map((s, i) =>
                  s.image ? (
                    <Image
                      key={s.label}
                      src={s.image}
                      alt={s.label}
                      fill
                      sizes="(max-width: 720px) 100vw, 500px"
                      style={{
                        objectFit: "cover",
                        opacity: hovered === i ? 1 : 0,
                        transition: "opacity 0.35s ease",
                      }}
                    />
                  ) : null,
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
