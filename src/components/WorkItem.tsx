"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BlurText from "./BlurText";
import type { Work } from "@/lib/works";

type Props = {
  work: Work;
  priority?: boolean;
  hrefBase?: string;
};

export default function WorkItem({ work, priority, hrefBase = "/works" }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="row-split on-dark"
      style={{ paddingBlock: 48, alignItems: "end" }}
    >
      <div className="row-left">
        <div
          style={{ display: "flex", flexDirection: "column", gap: 48 }}
        >
          <div style={{ position: "relative" }}>
            {/* invisible placeholder that reserves space */}
            <p
              aria-hidden
              style={{
                fontSize: 20,
                fontWeight: 600,
                lineHeight: 1.3,
                margin: 0,
                opacity: 0,
                pointerEvents: "none",
              }}
            >
              {work.description}
            </p>
            {hovered && (
              <div style={{ position: "absolute", inset: 0 }}>
                <BlurText
                  text={work.description}
                  animateBy="words"
                  delay={40}
                  stepDuration={0.3}
                  className="work-blur-text"
                />
              </div>
            )}
          </div>
          <Link
            href={`${hrefBase}/${work.slug}`}
            className="work-name-link"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              color: "#fff",
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <span
                className={`work-name-arrow ${hovered ? "is-hover" : ""}`}
                aria-hidden
              >
                →
              </span>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  opacity: 1,
                  margin: 0,
                }}
              >
                {work.title}
              </p>
            </div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: "#fff",
                opacity: 1,
                margin: 0,
              }}
            >
              {work.category}
            </p>
          </Link>
        </div>
      </div>
      <div
        className="row-right"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link href={`${hrefBase}/${work.slug}`} aria-label={`Open ${work.title}`}>
          <div
            className={`tile ${work.tone === "dark" ? "" : work.tone} work-tile`}
            style={{
              position: "relative",
              overflow: "hidden",
              transform: hovered ? "rotate(-3deg)" : "rotate(0deg)",
              transition: "transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1)",
            }}
          >
            <Image
              src={work.image}
              alt={work.title}
              fill
              sizes="(max-width: 720px) 100vw, 500px"
              style={{
                objectFit: "cover",
                transform: work.thumbScale ? `scale(${work.thumbScale})` : undefined,
              }}
              priority={priority}
            />
          </div>
        </Link>
      </div>
    </article>
  );
}
