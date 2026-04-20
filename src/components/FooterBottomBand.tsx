const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/dannickyoung" },
  { label: "Email", href: "mailto:dannickyoung@outlook.com" },
  { label: "Resume", href: "/resume" },
];

export default function FooterBottomBand() {
  return (
    <div className="row-split footer-bottom-band">
      <div className="row-left">
        <a href="#top" className="footer-back-top">
          <span aria-hidden>↑</span>
          <span>Back to top</span>
        </a>
      </div>
      <div className="row-right footer-find-me">
        <span className="footer-find-me-label">
          Find me on <span aria-hidden>→</span>
        </span>
        <ul className="footer-socials-row">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
