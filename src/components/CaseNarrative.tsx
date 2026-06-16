"use client";

import { useEffect, useRef, useState } from "react";
import type { Work } from "@/lib/works";

function Chapter({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="case-chapter">
      <p className="case-chapter-head">
        <span className="case-chapter-num">{num}</span>
        {title}
      </p>
      {children}
    </section>
  );
}

// Renders prose with its first sentence emphasised as a skimmable lead.
function Prose({ text }: { text: string }) {
  const i = text.indexOf(". ");
  if (i === -1) {
    return (
      <p className="case-body">
        <strong className="case-lead">{text}</strong>
      </p>
    );
  }
  return (
    <p className="case-body">
      <strong className="case-lead">{text.slice(0, i + 1)}</strong>{" "}
      {text.slice(i + 2)}
    </p>
  );
}

export default function CaseNarrative({ work }: { work: Work }) {
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);
  const accRef = useRef<HTMLDivElement>(null);

  // Pin the left column so its bottom (Let's Talk) holds at the viewport
  // bottom while the taller right column keeps scrolling. Achieved with a
  // sticky `top` offset of (viewportHeight - columnHeight - gap); when the
  // column is shorter than the viewport this clamps to a normal top:66.
  //
  // The offset is computed from the column's *final* expanded height (derived
  // from the narrative's natural height, which is constant during the
  // open/close animation) and written exactly once per state change — never
  // per animation frame — so scrolling and expanding stay smooth.
  useEffect(() => {
    const aside = accRef.current?.closest<HTMLElement>("aside[data-case-aside]");
    const panel = accRef.current?.querySelector<HTMLElement>(".case-acc-panel");
    const narrative = accRef.current?.querySelector<HTMLElement>(".case-narrative");
    if (!aside || !panel || !narrative) return;
    const apply = () => {
      // Replace the panel's currently-animating height with its full height
      // so the target is correct immediately, without measuring mid-animation.
      const asideH = aside.getBoundingClientRect().height;
      const panelH = panel.getBoundingClientRect().height;
      const fullPanelH = open ? narrative.getBoundingClientRect().height : 0;
      const targetH = asideH - panelH + fullPanelH;
      aside.style.top = `${Math.round(
        Math.min(66, window.innerHeight - targetH - 24)
      )}px`;
    };
    apply();
    window.addEventListener("resize", apply, { passive: true });
    return () => window.removeEventListener("resize", apply);
  }, [open]);

  useEffect(() => {
    // Open as soon as the page is scrolled away from the top; collapse
    // only once it is returned to the very top. Purely position-based,
    // so it opens immediately and never collapses on a mid-page scroll-up.
    const TOP = 8;
    const apply = () => setOpen(window.scrollY > TOP);
    apply();
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        apply();
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasOutcomes = !!work.outcomes && work.outcomes.length > 0;

  const toggle = () => {
    const next = !open;
    setOpen(next);
    // On manual expand, bring the accordion to the top so its contents are
    // in view.
    if (next && accRef.current) {
      const target =
        accRef.current.getBoundingClientRect().top + window.scrollY - 72;
      if (window.__lenis) window.__lenis.scrollTo(target, { duration: 0.9 });
      else window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  const chapters: { title: string; body: React.ReactNode }[] = [
    {
      title: "The problem",
      body: work.problemStatement ? (
        <Prose text={work.problemStatement} />
      ) : (
        <ul className="case-list">
          {work.problem.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "The thinking",
      body: work.thinking ? (
        <Prose text={work.thinking} />
      ) : work.process && work.process.length > 0 ? (
        <ol className="case-steps">
          {work.process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null,
    },
    {
      title: "Key decisions & tradeoffs",
      body: (
        <div className="case-decisions">
          {work.keyDecisions.map((d) => (
            <div className="case-decision" key={d.decision}>
              <p className="case-decision-title">{d.decision}</p>
              {d.chose && d.over && (
                <p className="case-tradeoff">
                  <span className="case-tradeoff-chose">{d.chose}</span>
                  <span className="case-tradeoff-sep">not</span>
                  <span className="case-tradeoff-over">{d.over}</span>
                </p>
              )}
              {d.metric && (
                <p className="case-metric">
                  <span className="case-metric-label">Impact</span>
                  {d.metric}
                </p>
              )}
            </div>
          ))}
        </div>
      ),
    },
  ];

  if (work.leadership) {
    chapters.push({
      title: "Driving the call",
      body: <Prose text={work.leadership} />,
    });
  }

  if (hasOutcomes) {
    chapters.push({
      title: "Outcomes",
      body: (
        <ul className="case-list">
          {work.outcomes!.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      ),
    });
  }

  chapters.push({
    title: "Reflection",
    body: work.reflectionProse ? (
      <Prose text={work.reflectionProse} />
    ) : (
      <ul className="case-list">
        {work.learnings.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    ),
  });

  return (
    <div className="case-acc" data-open={open} ref={accRef}>
      <button
        type="button"
        className="case-acc-head"
        aria-expanded={open}
        onClick={toggle}
      >
        <span className="case-acc-titles">
          <span className="case-acc-title">The thinking behind it</span>
          <span className="case-acc-synopsis">
            Problem · Thinking · Decisions · Outcomes · Reflection
          </span>
        </span>
        <span className="case-acc-icon" aria-hidden />
      </button>

      <div className="case-acc-panel">
        <div className="case-acc-inner">
          <div className="case-narrative">
            {chapters.map((c, i) => (
              <Chapter
                key={c.title}
                num={String(i + 1).padStart(2, "0")}
                title={c.title}
              >
                {c.body}
              </Chapter>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
