type Props = {
  label: string;
  tone?: "dark" | "light" | "primary";
  repeat?: number;
};

export default function Marquee({ label, tone = "dark", repeat = 16 }: Props) {
  const palette =
    tone === "primary"
      ? { bg: "var(--primary)", fg: "#000" }
      : tone === "light"
        ? { bg: "#fff", fg: "#000" }
        : { bg: "#000", fg: "#fff" };

  const items = Array.from({ length: repeat }, (_, i) => i);

  return (
    <div
      className="marquee"
      style={{
        background: palette.bg,
        color: palette.fg,
        padding: "8px 0",
      }}
    >
      <div className="marquee-track t-label">
        {items.map((i) => (
          <span key={i} aria-hidden={i > 0 ? true : undefined}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
