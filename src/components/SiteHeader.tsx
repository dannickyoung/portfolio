import NavMenu from "./NavMenu";

const navLinks = [
  { label: "Product", href: "/#works" },
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
          <NavMenu links={navLinks} />
        </div>
      </div>
    </section>
  );
}
