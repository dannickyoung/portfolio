import type { Work } from "@/lib/works";
import CaseNarrative from "./CaseNarrative";

export default function CaseInfo({ work }: { work: Work }) {
  return (
    <>
      {/* About */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: 420,
        }}
      >
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#000" }}>
          About
        </p>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, fontWeight: 400 }}>
          {work.about}
        </p>
      </div>

      {/* Tags */}
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {work.tags.map((t, i) => (
          <li
            key={t}
            style={{
              padding: "6px 0",
              fontSize: 14,
              fontWeight: 600,
              color: "#000",
              borderTop: i === 0 ? "none" : "1px solid var(--hairline)",
              borderBottom:
                i === work.tags.length - 1
                  ? "1px solid var(--hairline)"
                  : "none",
            }}
          >
            {t}
          </li>
        ))}
      </ul>

      {/* Narrative accordion */}
      <CaseNarrative work={work} />
    </>
  );
}
