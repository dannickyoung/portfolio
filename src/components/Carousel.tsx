import Image from "next/image";
import Reveal from "./Reveal";
import { allWorks, type MediaBlock } from "@/lib/works";

function imagesFromBlock(b: MediaBlock): string[] {
  if (b.kind === "double") return [];
  return b.image ? [b.image] : [];
}

// Round-robin across projects so adjacent tiles come from different works.
const tiles: string[] = (() => {
  const byProject = allWorks.map((w) => w.blocks.flatMap(imagesFromBlock));
  const max = Math.max(...byProject.map((list) => list.length));
  const out: string[] = [];
  for (let i = 0; i < max; i++) {
    for (const list of byProject) {
      if (i < list.length) out.push(list[i]);
    }
  }
  return out;
})();

export default function Carousel() {
  return (
    <section
      className="wrapper"
      style={{
        background: "var(--bg)",
        color: "var(--text-inv)",
        paddingTop: 64,
        paddingBottom: 64,
        overflow: "hidden",
      }}
    >
      <div className="container-830" style={{ marginBottom: 32 }}>
        <Reveal>
          <div className="row-split on-dark">
            <div className="row-left">
              <p className="t-label" style={{ opacity: 0.6 }}>
                Need more?
              </p>
            </div>
            <div className="row-line" />
            <div className="row-right">
              <h2 className="h-section" style={{ margin: 0 }}>
                More recent explorations.
              </h2>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          width: "max-content",
          animation: "marquee-scroll 42s linear infinite",
          paddingLeft: 16,
        }}
      >
        {[...tiles, ...tiles].map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="tile"
            style={{
              width: 320,
              aspectRatio: "4 / 3",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="320px"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
