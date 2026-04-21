import Reveal from "./Reveal";
import FooterBottomBand from "./FooterBottomBand";

type FooterProps = { variant?: "default" | "case" };

export default function Footer({ variant = "default" }: FooterProps) {
  if (variant === "case") {
    return <CaseFooter />;
  }
  return <DefaultFooter />;
}

function DefaultFooter() {
  return (
    <footer
      id="contact"
      style={{
        background: "var(--primary)",
        color: "#000",
        position: "relative",
        minHeight: "calc(100vh + 80px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="wrapper"
        style={{ paddingTop: 200, flex: 1, display: "flex", flexDirection: "column" }}
      >
        <div
          className="container-830 section-line"
          style={{ display: "flex", flexDirection: "column", flex: 1 }}
        >
          <div className="row-split">
            <div className="row-left">
              <Reveal>
                <p className="t-label" style={{ opacity: 0.6 }}>
                  Wanna boost your project?
                </p>
              </Reveal>
            </div>
            <div className="row-right">
              <Reveal delay={80}>
                <h2
                  className="h-mega"
                  style={{
                    margin: 0,
                    marginBottom: 64,
                    fontSize: "clamp(48px, 6vw, 88px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Just work
                  <br />
                  with me.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <CtaButton />
              </Reveal>
            </div>
          </div>

          <div style={{ marginTop: "auto" }}>
            <FooterBottomBand />
          </div>
        </div>
      </div>
    </footer>
  );
}

function CaseFooter() {
  return (
    <footer
      id="contact"
      style={{
        background: "var(--primary)",
        color: "#000",
        position: "relative",
        minHeight: "calc(100vh + 80px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="wrapper"
        style={{
          paddingTop: 200,
          paddingBottom: 40,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            maxWidth: 1352,
            width: "100%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "484px 1px 1fr",
            gap: 0,
            flex: 1,
          }}
        >
          <div
            style={{
              gridColumn: 1,
              paddingRight: 23,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Reveal>
              <p className="t-label" style={{ opacity: 0.6, margin: 0 }}>
                Wanna boost your project?
              </p>
            </Reveal>
            <div style={{ marginTop: "auto" }}>
              <a href="#top" className="footer-back-top">
                <span aria-hidden>↑</span>
                <span>Back to top</span>
              </a>
            </div>
          </div>

          <div
            style={{
              gridColumn: 2,
              width: 1,
              background: "rgba(0, 0, 0, 0.2)",
              alignSelf: "stretch",
              justifySelf: "center",
            }}
          />

          <div
            style={{
              gridColumn: 3,
              paddingLeft: 24,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Reveal delay={80}>
              <h2
                className="h-mega"
                style={{
                  margin: 0,
                  marginBottom: 64,
                  fontSize: "clamp(48px, 6vw, 88px)",
                  whiteSpace: "nowrap",
                }}
              >
                Just work
                <br />
                with me.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <CtaButton />
            </Reveal>
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 32,
                paddingTop: 40,
              }}
              className="footer-find-me"
            >
              <span className="footer-find-me-label">
                Find me on <span aria-hidden>→</span>
              </span>
              <ul className="footer-socials-row">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/dannickyoung" },
                  { label: "Email", href: "mailto:dannick.young@thevicistudio.com" },
                  { label: "Resume", href: "/resume" },
                ].map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CtaButton() {
  return (
    <a
      href="mailto:dannick.young@thevicistudio.com"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full cursor-pointer"
      style={{
        fontSize: 20,
        fontWeight: 600,
        padding: "16px 24px",
        background: "#000",
        color: "var(--primary)",
        minWidth: 180,
      }}
    >
      <span className="inline-flex items-center gap-3 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
        Let&apos;s talk <span aria-hidden>→</span>
      </span>
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center gap-3 translate-y-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
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
  );
}
