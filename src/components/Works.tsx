import Reveal from "./Reveal";
import WorkItem from "./WorkItem";
import { works } from "@/lib/works";

export default function Works() {
  return (
    <section
      id="works"
      className="wrapper"
      style={{
        background: "var(--bg)",
        color: "var(--text-inv)",
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      <div
        className="container-830 section-line on-dark"
        style={{
          ["--line-top" as string]: "96px",
          ["--line-bottom" as string]: "96px",
        } as React.CSSProperties}
      >
        <Reveal>
          <div className="row-split on-dark" style={{ marginBottom: 64 }}>
            <div className="row-left">
              <p className="t-label" style={{ opacity: 0.6 }}>
                Selected Works
              </p>
            </div>
            <div className="row-right">
              <h2 className="h-section" style={{ margin: 0 }}>
                Product Design
              </h2>
            </div>
          </div>
        </Reveal>

        {works.map((w, i) => (
          <Reveal key={w.slug} delay={i * 60}>
            <WorkItem work={w} priority={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
