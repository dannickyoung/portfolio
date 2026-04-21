import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WorkItem from "@/components/WorkItem";
import SiteHeader from "@/components/SiteHeader";
import { brandingWorks } from "@/lib/branding";

export default function BrandingPage() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 2 }}>
        <header
          id="top"
          style={{ background: "var(--bg-white)", color: "var(--text)" }}
        >
          <Marquee label="NOW ACCEPTING PROJECTS" tone="dark" />
        </header>

        <SiteHeader />

        <main>
          <section
            id="branding"
            className="wrapper"
            style={{
              background: "var(--bg)",
              color: "var(--text-inv)",
              paddingTop: 0,
              paddingBottom: 96,
            }}
          >
            <div className="container-830 section-line on-dark">
              <Reveal>
                <div
                  className="row-split on-dark"
                  style={{ paddingTop: 96, marginBottom: 64 }}
                >
                  <div className="row-left">
                    <p className="t-label" style={{ opacity: 0.6 }}>
                      branding works
                    </p>
                  </div>
                  <div className="row-right">
                    <h2 className="h-section" style={{ margin: 0 }}>
                      Web3
                    </h2>
                  </div>
                </div>
              </Reveal>

              {brandingWorks
                .filter((w) => w.group === "web3")
                .map((w, i) => (
                  <Reveal key={w.slug} delay={i * 60}>
                    <WorkItem
                      work={w}
                      priority={i === 0}
                      hrefBase="/branding"
                    />
                  </Reveal>
                ))}

              <Reveal>
                <div
                  className="row-split on-dark"
                  style={{ paddingTop: 96, marginBottom: 64 }}
                >
                  <div className="row-left">
                    <p className="t-label" style={{ opacity: 0.6 }}>
                      branding works
                    </p>
                  </div>
                  <div className="row-right">
                    <h2 className="h-section" style={{ margin: 0 }}>
                      AI Application
                    </h2>
                  </div>
                </div>
              </Reveal>

              {brandingWorks
                .filter((w) => w.group === "branding")
                .map((w, i) => (
                  <Reveal key={w.slug} delay={i * 60}>
                    <WorkItem work={w} hrefBase="/branding" />
                  </Reveal>
                ))}
            </div>
          </section>
        </main>
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
        <Footer />
      </div>
      <div style={{ height: "100vh", position: "relative", zIndex: 0 }} />
    </>
  );
}
