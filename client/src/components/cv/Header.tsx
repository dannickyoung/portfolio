import type { HeaderProps } from '../../types/cv.types';

interface ButtonProps {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary';
}

function PrimaryButton({ label, href }: ButtonProps) {
  const ButtonTag = href ? 'a' : 'button';
  return (
    <ButtonTag
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className="relative h-12 flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-[#1A1A1A] px-10 uppercase text-xs tracking-[0.2em] text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-shadow duration-500 ease-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A1A1A] group"
    >
      <span
        className="absolute inset-0 -translate-x-full bg-[#D4AF37] transition-transform duration-500 group-hover:translate-x-0"
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
      />
      <span className="relative z-10">{label}</span>
    </ButtonTag>
  );
}

function SecondaryButton({ label, href }: ButtonProps) {
  const ButtonTag = href ? 'a' : 'button';
  return (
    <ButtonTag
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className="h-12 flex items-center justify-center border border-[#1A1A1A] bg-transparent px-10 uppercase text-xs tracking-[0.2em] text-[#1A1A1A] transition-[background-color,color] duration-500 ease-out hover:bg-[#1A1A1A] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A1A1A]"
    >
      {label}
    </ButtonTag>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <dt className="uppercase text-[10px] tracking-[0.3em] text-[#6C6863]">{label}</dt>
      <dd className="text-right text-[#1A1A1A]">{value}</dd>
    </div>
  );
}

export default function Header({ personal, tagline, summary, focus }: HeaderProps) {
  return (
    <header className="relative grid grid-cols-12 gap-6 md:gap-10 lg:gap-16" role="banner">
      {/* Vertical label (desktop only) */}
      <div className="pointer-events-none absolute -left-12 top-2 hidden lg:block">
        <div className="mb-4 w-px h-16 bg-[#1A1A1A]/30" />
        <div
          className="uppercase text-[10px] tracking-[0.3em] text-[#6C6863]"
          style={{ writingMode: "vertical-rl" }}
        >
          {tagline}
        </div>
      </div>

      <div className="col-span-12 lg:col-span-7">
        <div className="flex items-center gap-4">
          <p className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">
            {personal.title}
          </p>
        </div>

        <h1
          className="mt-6 font-serif text-5xl leading-[0.9] md:text-6xl lg:text-8xl"
          style={{ fontFamily: "Playfair Display, ui-serif" }}
        >
          {personal.name.split(' ')[0]}{' '}
          <span className="italic">{personal.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#6C6863] md:text-lg">
          {summary}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <PrimaryButton label="Portfolio" href={personal.portfolio !== "website placeholder" ? personal.portfolio : undefined} />
          <SecondaryButton label="LinkedIn" href={`https://www.${personal.linkedin}`} />
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 lg:col-start-9">
        <div className="border-t border-[#1A1A1A] pt-6">
          <dl className="space-y-3 text-sm leading-relaxed">
            <ContactRow label="Location" value={personal.location} />
            <ContactRow label="Email" value={personal.email} />
            <ContactRow label="LinkedIn" value={personal.linkedin} />
            <ContactRow label="Portfolio" value={personal.portfolio} />
          </dl>
        </div>

        {/* Focus areas */}
        <div className="mt-10 border-t border-[#1A1A1A]/20 pt-6">
          <p className="uppercase text-[10px] tracking-[0.3em] text-[#6C6863]">
            Focus
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#6C6863]">
            {focus.join(' · ')}
          </p>
        </div>
      </div>
    </header>
  );
}

