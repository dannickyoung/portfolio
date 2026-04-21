import Link from "next/link";

const navLinks = [
  { label: "Works", href: "/#works" },
  { label: "Branding", href: "/branding" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Hire me", href: "/#contact" },
];

export default function SiteHeader() {
  return (
    <section className="site-header">
      <div className="site-header-divider" aria-hidden />

      <div className="hero-row hero-row-top">
        <div className="hero-col-left hero-cell-top-left" />
        <div className="hero-col-right hero-cell-top-right">
          <div className="nav-menu-zone">
            <button
              type="button"
              className="menu-button"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul className="nav-menu" role="menu">
              {navLinks.map((l, i) => (
                <li
                  key={l.href}
                  style={{ ["--i" as string]: i } as React.CSSProperties}
                >
                  <Link href={l.href} className="nav-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
