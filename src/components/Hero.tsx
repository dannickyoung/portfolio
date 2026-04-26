import Link from "next/link";
import HeroDotBackground from "./HeroDotBackground";
import HeroTime from "./HeroTime";
import NavMenu from "./NavMenu";

const navLinks = [
  { label: "Product", href: "#works" },
  { label: "Branding", href: "/branding" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Hire me", href: "#contact" },
];

export default function Hero() {
  return (
    <section className="hero-shell">
      <HeroDotBackground />
      <div className="hero-divider" aria-hidden />

      <div className="hero-row hero-row-top">
        <div className="hero-col-left hero-cell-top-left">
          <Link href="/" className="nav-logo">
            Dannick Young
          </Link>
        </div>
        <div className="hero-col-right hero-cell-top-right">
          <NavMenu links={navLinks} />
        </div>
      </div>

      <div className="hero-row hero-row-middle">
        <div className="hero-col-left hero-cell-mid-left">
          <p className="hero-based">
            Based
            <br />
            in Singapore
          </p>
        </div>
        <div className="hero-col-right hero-cell-mid-right">
          <h1 className="hero-headline">
            Product designer building AI, Web3, and design systems that scale.
          </h1>
        </div>
      </div>

      <div className="hero-row hero-row-bottom">
        <div className="hero-col-left hero-cell-bot-left">
          <HeroTime />
        </div>
        <div className="hero-col-right hero-cell-bot-right">
          <a href="mailto:dannick.young@thevicistudio.com" className="hero-cta">
            <span className="hero-cta-arrow" aria-hidden>
              →
            </span>
            <span>Let&apos;s talk about your idea</span>
          </a>
        </div>
      </div>
    </section>
  );
}
