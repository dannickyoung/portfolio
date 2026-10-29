import Reveal from "./Reveal";
import HoverImage from "./HoverImage";

export default function About() {
  return (
    <section
      id="about"
      className="wrapper"
      style={{
        background: "var(--bg-off)",
        color: "var(--text)",
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      <div
        className="container-830 section-line"
        style={{
          ["--line-top" as string]: "96px",
          ["--line-bottom" as string]: "96px",
        } as React.CSSProperties}
      >
        <Reveal>
          <div className="row-split" style={{ marginBottom: 72 }}>
            <div className="row-left">
              <p className="t-label" style={{ opacity: 0.6 }}>
                Hey, Dannick here!
              </p>
            </div>
            <div className="row-right">
              <h2 className="h-section" style={{ margin: 0 }}>
                Who&apos;s behind
                <br />
                the scene?
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="row-split">
            <div className="row-left">
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  margin: 0,
                }}
              >
                5+ years
                <br />
                in the game.
              </h3>
            </div>
            <div className="row-right">
              <HoverImage
                src="/images/dannick-headshot.png"
                alt="Dannick Young"
                width={133}
                height={167}
                label="Hey, it's Dannick here!"
              >
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: 440,
                  }}
                >
                  I lead product design from the first problem framing to the
                  shipped release, and I build what I design. With Claude Code I
                  take my own designs to production React, so the decisions
                  survive contact with real data and nothing gets lost in a
                  handoff.
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    marginTop: 16,
                    maxWidth: 440,
                  }}
                >
                  Lead Product Designer at ChronoAI, building AI products from
                  ideation to launch, and co-founder of Clard, where I designed
                  and built V2. Previously Aelf (Web3), VICI Studio (design
                  agency), BTCC (crypto trading), and Ogilvy.
                </p>
              </HoverImage>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
