import type { Metadata } from "next";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageBlur from "@/components/PageBlur";
import IGReel, { type IGReelData } from "@/components/IGReel";
import YouTubeReel, { type YouTubeReelData } from "@/components/YouTubeReel";

export const metadata: Metadata = {
  title: "Video works · Dannick Young",
  description:
    "Selected video work. Campaign cuts, brand films, and launch edits.",
};

type Entry = {
  key: string;
  title: string;
  category: string;
  description: string;
  platform: "youtube" | "ig";
  reel: YouTubeReelData | IGReelData;
};

const ogilvyReel: YouTubeReelData = {
  src: "/video_works/Ogilvy_PR.mp4",
};

const viciAdvisoryReel: IGReelData = {
  src: "/video_works/First%20Advisory%20Reels.mp4",
  username: "vici.studio",
  caption: "first advisory's new site, in one cut 🤍",
  music: "original audio",
  likes: "9.7K",
  comments: "201",
  avatarImage: "/video_works/logos/vici.png",
  avatarBg: "#0a0a0c",
  avatarLogoSize: "58%",
};

const viciCalentReel: IGReelData = {
  src: "/video_works/VICIStudioXCalent3_P01_1080x1920_Draft06_20250227.mp4",
  username: "vici.studio",
  caption: "calent3 brand refresh + EDG grant 🤍",
  music: "original audio",
  likes: "14.8K",
  comments: "326",
  avatarImage: "/video_works/logos/vici.png",
  avatarBg: "#0a0a0c",
  avatarLogoSize: "58%",
};

const tucReel: IGReelData = {
  src: "/video_works/TUC_FANTA_Reel.mp4",
  username: "fanta",
  caption: "TUC Vietnam launch w/ the e-sports squad 🧡",
  music: "original audio",
  likes: "31.5K",
  comments: "904",
  avatarImage: "/video_works/logos/fanta.svg",
  avatarBg: "#193bc0",
  avatarLogoSize: "78%",
};

const aiaReel: IGReelData = {
  src: "/video_works/AIA_stickers_Launch.mp4",
  username: "aia.official",
  caption: "AIA stickers launch in motion 🎟️",
  music: "original audio",
  likes: "18.2K",
  comments: "412",
  avatarImage: "/video_works/logos/aia.svg",
  avatarBg: "#ffffff",
  avatarLogoSize: "62%",
  noSound: true,
  videoFit: "contain",
  cardBackground: "linear-gradient(135deg, #ffffff 0%, #e7e7ea 100%)",
};

const entries: Entry[] = [
  {
    key: "ogilvy",
    title: "Ogilvy",
    category: "SABRE Awards Film",
    description:
      "PR film cut for Ogilvy's SABRE Awards night. Half mission statement, half agency showcase, built to play as the headliner moment of the evening.",
    platform: "youtube",
    reel: ogilvyReel,
  },
  {
    key: "vici-calent",
    title: "VICI Studio × Calent3",
    category: "Brand Refresh Film",
    description:
      "VICI Studio × Calent3 collab. A short that launches Calent3's brand refresh and announces their EDG grant in a single cut.",
    platform: "ig",
    reel: viciCalentReel,
  },
  {
    key: "vici-advisory",
    title: "VICI Studio × First Advisory",
    category: "Product Showcase Reel",
    description:
      "Product reel for First Advisory, a brokerage consultancy. VICI Studio built their new site end-to-end, this cut walks through the work at IG-feed pace.",
    platform: "ig",
    reel: viciAdvisoryReel,
  },
  {
    key: "tuc-fanta",
    title: "TUC × Fanta",
    category: "Social Launch Spot",
    description:
      "Social launch for TUC in Vietnam, part of the Fanta product line. Featuring members of a championship e-sports team, paced for vertical feed.",
    platform: "ig",
    reel: tucReel,
  },
  {
    key: "aia",
    title: "AIA",
    category: "Motion Graphics Launch",
    description:
      "Motion graphics film promoting AIA's stickers launch. Pure type and color, no live action, no audio on the master.",
    platform: "ig",
    reel: aiaReel,
  },
];

export default function VideoWorksPage() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 2 }}>
        <header
          id="top"
          style={{ background: "var(--bg-white)", color: "var(--text)" }}
        >
          <Marquee label="NOW ACCEPTING PROJECTS" tone="dark" />
        </header>

        <main>
          <section
            id="video-works"
            className="wrapper"
            style={{
              background: "var(--bg)",
              color: "var(--text-inv)",
              paddingTop: 0,
              paddingBottom: 96,
            }}
          >
            <div
              className="container-830 section-line on-dark"
              style={
                {
                  "--line-top": "200px",
                  "--line-bottom": "200px",
                } as React.CSSProperties
              }
            >
              <Reveal>
                <div
                  className="row-split on-dark"
                  style={{ paddingTop: 96, marginBottom: 64 }}
                >
                  <div className="row-left">
                    <p className="t-label" style={{ opacity: 0.6 }}>
                      video works
                    </p>
                  </div>
                  <div className="row-right">
                    <h2 className="h-section" style={{ margin: 0 }}>
                      Roll Tape
                    </h2>
                  </div>
                </div>
              </Reveal>

              {entries.map((entry, i) => (
                <Reveal key={entry.key} delay={i * 60}>
                  <article
                    className="row-split on-dark"
                    style={{ paddingBlock: 48, alignItems: "end" }}
                  >
                    <div className="row-left">
                      <div className="work-meta-stack">
                        <div className="work-desc-slot">
                          <p
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              lineHeight: 1.3,
                              color: "#fff",
                              margin: 0,
                            }}
                          >
                            {entry.description}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            color: "#fff",
                          }}
                        >
                          <p
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: "#fff",
                              margin: 0,
                            }}
                          >
                            {entry.title}
                          </p>
                          <p
                            style={{
                              fontSize: 12,
                              fontWeight: 400,
                              color: "#fff",
                              margin: 0,
                            }}
                          >
                            {entry.category}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row-right">
                      {entry.platform === "youtube" ? (
                        <YouTubeReel {...(entry.reel as YouTubeReelData)} />
                      ) : (
                        <div style={{ maxWidth: 340 }}>
                          <IGReel {...(entry.reel as IGReelData)} />
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
          <div id="blur-stop" aria-hidden />
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

      <PageBlur />
    </>
  );
}
