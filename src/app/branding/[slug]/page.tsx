import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { brandingWorks, getBrandingWork } from "@/lib/branding";

export function generateStaticParams() {
  return brandingWorks.map((w) => ({ slug: w.slug }));
}

type Params = { slug: string };

export default async function BrandingWorkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const work = getBrandingWork(slug);
  if (!work) notFound();

  const currentIndex = brandingWorks.findIndex((w) => w.slug === slug);
  const nextWork = brandingWorks[(currentIndex + 1) % brandingWorks.length];

  return (
    <>
      <div style={{ position: "relative", zIndex: 2 }}>
        <header
          id="top"
          style={{ background: "var(--bg-white)", color: "var(--text)" }}
        >
          <Marquee label="NOW ACCEPTING PROJECTS" tone="dark" />
        </header>

        <main
          className="wrapper case-section-line"
          style={{
            background: "var(--bg-white)",
            color: "var(--text)",
            paddingTop: 48,
            paddingBottom: 120,
          }}
        >
          <div
            style={{
              maxWidth: 1352,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "484px 1px 1fr",
              gap: 0,
              alignItems: "start",
            }}
            className="case-grid"
          >
            <aside
              style={{
                position: "sticky",
                top: 66,
                alignSelf: "start",
                paddingRight: 23,
                display: "flex",
                flexDirection: "column",
                gap: 40,
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <Link
                  href="/branding"
                  className="case-back"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                  }}
                >
                  <span className="case-back-arrow" aria-hidden>
                    ←
                  </span>
                  Back
                </Link>

                <h1
                  style={{
                    margin: 0,
                    fontSize: 32,
                    lineHeight: 1.1,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {work.title}
                </h1>

                <p
                  style={{
                    margin: 0,
                    fontSize: 20,
                    lineHeight: 1.35,
                    fontWeight: 400,
                    maxWidth: 420,
                  }}
                >
                  {work.description}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#000" }}>
                  Industry
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 400 }}>
                  {work.industry}
                </p>
              </div>

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
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {work.about}
                </p>
              </div>

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

              <a
                href="mailto:dannick.young@thevicistudio.com"
                className="group relative flex items-center justify-center overflow-hidden rounded-full cursor-pointer"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "16px 24px",
                  background: "#000",
                  color: "#fff",
                  width: "100%",
                }}
              >
                <span className="inline-flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
                  Let&apos;s talk <span aria-hidden>→</span>
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center gap-2 translate-y-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{
                    background: "#fff",
                    color: "#000",
                    border: "1px solid #000",
                    borderRadius: 9999,
                  }}
                >
                  Let&apos;s talk <span aria-hidden>→</span>
                </span>
              </a>
            </aside>

            <div style={{ gridColumn: 2 }} aria-hidden />

            <div
              className="case-right"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                paddingLeft: 24,
              }}
            >
              {work.blocks.map((block, i) => (
                <Reveal key={i} delay={Math.min(i * 40, 160)}>
                  {block.kind === "single" && (
                    <div
                      className={`tile ${block.tone === "dark" ? "" : block.tone}`}
                      style={{
                        aspectRatio: "844 / 632",
                        width: "100%",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {block.image && (
                        <Image
                          src={block.image}
                          alt={`${work.title} detail ${i + 1}`}
                          fill
                          sizes="(max-width: 720px) 100vw, 844px"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                  )}
                  {block.kind === "double" && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 12,
                      }}
                    >
                      {block.tones.map((t, j) => (
                        <div
                          key={j}
                          className={`tile ${t === "dark" ? "" : t}`}
                          style={{
                            aspectRatio: "416 / 632",
                            width: "100%",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          {block.images?.[j] && (
                            <Image
                              src={block.images[j]}
                              alt={`${work.title} detail ${i + 1}.${j + 1}`}
                              fill
                              sizes="(max-width: 720px) 50vw, 416px"
                              style={{ objectFit: "cover" }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </main>

        <Link
          href={`/branding/${nextWork.slug}`}
          className="next-project group case-section-line on-dark"
          aria-label={`Explore next project: ${nextWork.title}`}
          style={{
            display: "flex",
            alignItems: "center",
            background: "var(--bg)",
            color: "var(--text-inv)",
            minHeight: "66.666vh",
            padding: "80px 16px",
            textDecoration: "none",
          }}
        >
          <div
            className="case-grid"
            style={{
              maxWidth: 1352,
              width: "100%",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "484px 1px 1fr",
              gap: 0,
              alignItems: "center",
            }}
          >
            <div style={{ paddingRight: 23 }}>
              <p style={{ margin: 0, fontSize: 24, fontWeight: 500, lineHeight: 1.2 }}>
                Explore<br />next project
              </p>
            </div>
            <div style={{ gridColumn: 2 }} aria-hidden />
            <div style={{ paddingLeft: 24 }}>
              <h2
                className="next-project-title"
                style={{
                  margin: 0,
                  fontSize: 104,
                  lineHeight: 0.95,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                {nextWork.title}
                <span className="next-project-arrow" aria-hidden>
                  →
                </span>
              </h2>
            </div>
          </div>
        </Link>
      </div>

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Footer variant="case" />
      </div>
      <div style={{ height: "100vh", position: "relative", zIndex: 0 }} />
    </>
  );
}
