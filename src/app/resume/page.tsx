import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import ResumeDownload from "@/components/ResumeDownload";

const experiences = [
  {
    period: "06/2025 – PRESENT",
    role: "Lead Product Designer",
    company: "ChronoAI (previously Aelf) · AI Software",
    bullets: [
      "Own end-to-end product design for a multi-surface AI platform, driving roadmap decisions from zero-state to launch alongside product and engineering leadership.",
      "Scaled a Cursor-first design system with reusable tokens, primitives, and composable patterns, cutting design-to-dev handoff time by 60% and unlocking parallel squad delivery.",
      "Architected a vibecoded production pipeline that ships designer-authored components straight to main, collapsing iteration cycles from weeks to days.",
      "Partner with marketing on acquisition, activation, and retention, translating funnel data into UX hypotheses that directly lift growth KPIs.",
      "Lead quality bar across every AI surface: run QA sweeps, write interaction specs, and mentor the team on accessibility and motion standards.",
      "Built an AI-augmented feedback system that clusters signal from users and surfaces pain points, closing the loop from research → synthesis → shipped fix.",
    ],
  },
  {
    period: "02/2025 – 06/2025",
    role: "Senior Product Designer",
    company: "Aelf · Web3 Blockchain",
    bullets: [
      "Led design of a Web3 mining dashboard used by thousands of operators, from discovery to launch.",
      "Redesigned the wallet connection flow from 5 steps down to 2, removing the largest drop-off point in activation.",
      "Shipped two mobile-first microsites for staking and rewards, establishing the component baseline reused across the Aelf ecosystem.",
      "Ran 20+ user interviews and a diary study, then rebuilt the dashboard IA around the mental models operators actually use.",
    ],
  },
  {
    period: "06/2024 – 02/2025",
    role: "Lead Product Designer",
    company: "VICI Studio · Design Agency",
    bullets: [
      "Built a cross-client design system of 30+ components that cut MVP delivery time by 2× across 4 early-stage startups.",
      "Shipped 6 responsive websites and 2 mobile apps end-to-end, owning strategy, UI, and developer handoff for each engagement.",
      "Codified the studio's research process (interviews → synthesis → prioritization), now adopted as the default across every client team.",
      "Mentored junior designers and ran weekly critiques, raising the quality bar on final deliverables across the studio.",
    ],
  },
  {
    period: "11/2023 – 06/2024",
    role: "Product Designer (Hybrid)",
    company: "BTCC · Web3 Blockchain",
    bullets: [
      "Led the redesign of the crypto trading signup flow, rebuilding the form from 8 fields down to 4, a 28% lift in completion rate.",
      "Designed 3 trading apps for iOS and Android, owning the end-to-end experience from IA to hi-fi prototypes.",
      "Shipped 15+ landing pages with structured A/B testing, validating hypotheses before rollout.",
      "Analyzed Hotjar heatmaps and session replays to locate drop-off points, then shipped targeted redesigns that measurably improved conversion.",
    ],
  },
  {
    period: "11/2021 – 11/2023",
    role: "Junior Art Director",
    company: "Ogilvy · Advertising",
    bullets: [
      "Produced 50+ campaign visuals across 8 client brands, sharpening the fundamentals of hierarchy, typography, and brand systems.",
      "Pitched social concepts directly to client stakeholders, translating brief into narrative and visual direction.",
      "Led motion output (GIFs + short video) for Instagram and Facebook, lifting engagement by 30% on flagship accounts.",
      "Authored design system documentation for 3 major accounts, establishing reusable brand guardrails for downstream teams.",
    ],
  },
];

const skills = [
  {
    label: "Product",
    items: ["UI/UX", "Design Systems", "Prototyping", "QA", "Product Strategy", "Vibecoding"],
  },
  {
    label: "Research",
    items: ["Interviews", "Usability Testing", "Synthesis", "User Surveys", "Feedback Systems"],
  },
  {
    label: "Tools",
    items: ["Figma", "Framer", "Adobe Suite", "Cursor", "Claude Code", "AI-Assisted Design", "Design-to-Code"],
  },
  {
    label: "Languages",
    items: ["English", "Mandarin", "Korean"],
  },
];

const why = [
  {
    heading: "The AI-Assisted Design Lead",
    body: "I close the design-to-development gap with Cursor and AI tooling. Where most leads hand off static files, I ship production-ready interfaces my engineers can merge the same day: fewer handoff cycles, higher fidelity, and products that match the intent.",
  },
  {
    heading: "Best For",
    body: "AI and Web3 companies scaling from 0→1→10. Teams that need a design lead who can set vision, build the system, run the research, raise the quality bar, and still be the first to commit production UI code.",
  },
  {
    heading: "The Receipts",
    body: "60% faster design-to-dev handoff · 28% lift in signup completion · 45% fewer support tickets · 30+ reusable system components · 50+ user interviews synthesized · 6 websites and 5 apps shipped · AI feedback pipelines live in production. Not vanity metrics, proof of operating leverage.",
  },
];

export default function ResumePage() {
  return (
    <div
      style={{
        background: "var(--bg-white)",
        color: "var(--text)",
        minHeight: "100vh",
      }}
    >
      <Marquee label="RESUME · 2026" tone="dark" />

      <header className="resume-nav">
        <Link href="/" className="resume-back" aria-label="Back to home">
          <span aria-hidden>←</span>
          <span>Back</span>
        </Link>
        <span className="resume-nav-title">Dannick Young / Resume</span>
        <ResumeDownload />
      </header>

      <main className="resume-page">
        <section className="resume-hero">
          <Reveal>
            <p className="t-label resume-kicker">
              Lead Product Designer · Design Systems · AI-Assisted Delivery
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="resume-name">
              Dannick <em className="resume-name-italic">Young</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="resume-bio">
              Lead product designer shipping AI and Web3 products from zero
              to scale. I set the vision, build the system, and commit the
              production UI, cutting handoff cycles and raising the bar
              on quality in the same breath.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="resume-contact">
              <li>Singapore</li>
              <li>
                <a href="mailto:dannickyoung@outlook.com">
                  dannickyoung@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/dannickyoung"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/dannickyoung
                </a>
              </li>
            </ul>
          </Reveal>
        </section>

        <hr className="resume-rule" />

        <section className="resume-section" aria-labelledby="experience-heading">
          <Reveal>
            <h2 id="experience-heading" className="resume-section-title">
              Experience
            </h2>
          </Reveal>
          <ol className="resume-timeline">
            {experiences.map((exp, i) => (
              <li key={exp.role + exp.period} className="resume-role">
                <Reveal delay={i * 40}>
                  <div className="resume-role-grid">
                    <p className="t-label resume-period">{exp.period}</p>
                    <div className="resume-role-body">
                      <h3 className="resume-role-title">{exp.role}</h3>
                      <p className="resume-role-company">{exp.company}</p>
                      <ol className="resume-bullets">
                        {exp.bullets.map((b, j) => (
                          <li key={j}>
                            <span
                              className="resume-bullet-index"
                              aria-hidden
                            >{`${toRoman(j + 1)}.`}</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <hr className="resume-rule" />

        <section className="resume-split">
          <Reveal>
            <div>
              <h2 className="resume-section-title">Skills</h2>
              <dl className="resume-skills">
                {skills.map((s) => (
                  <div key={s.label} className="resume-skill-row">
                    <dt className="t-label resume-skill-label">{s.label}</dt>
                    <dd className="resume-skill-items">
                      {s.items.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h2 className="resume-section-title">Education</h2>
              <div className="resume-edu">
                <h3 className="resume-edu-degree">BA Design &amp; Media</h3>
                <p className="resume-edu-school">
                  University of Central Lancashire · 2021
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <hr className="resume-rule" />

        <section className="resume-section" aria-labelledby="why-heading">
          <Reveal>
            <h2 id="why-heading" className="resume-section-title">
              Why You / Why Now
            </h2>
          </Reveal>
          <div className="resume-why">
            {why.map((w, i) => (
              <Reveal key={w.heading} delay={i * 60}>
                <article className="resume-why-block">
                  <h3 className="resume-why-title">{w.heading}</h3>
                  <p className="resume-why-body">{w.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <footer className="resume-footer">
          <span>© 2026 DANNICK YOUNG</span>
          <Link href="/" className="resume-back-home">
            Back to Portfolio
            <span aria-hidden>→</span>
          </Link>
        </footer>
      </main>
    </div>
  );
}

function toRoman(num: number): string {
  const map: [number, string][] = [
    [10, "x"],
    [9, "ix"],
    [5, "v"],
    [4, "iv"],
    [1, "i"],
  ];
  let result = "";
  let n = num;
  for (const [value, numeral] of map) {
    while (n >= value) {
      result += numeral;
      n -= value;
    }
  }
  return result;
}
