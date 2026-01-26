import type { ExperienceProps, ExperienceEntry } from '../../types/cv.types';

interface ExperienceItemProps {
  entry: ExperienceEntry;
  isLast?: boolean;
}

function ExperienceItem({ entry, isLast }: ExperienceItemProps) {
  return (
    <article className={"group " + (isLast ? "" : "mb-14 md:mb-16")}>
      <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-10">
        <div className="col-span-12 md:col-span-3">
          <p className="uppercase text-xs tracking-[0.25em] text-[#6C6863]">
            {entry.dateRange}
          </p>
        </div>

        <div className="col-span-12 md:col-span-9">
          <h3
            className="font-serif text-2xl md:text-3xl"
            style={{ fontFamily: "Playfair Display, ui-serif" }}
          >
            {entry.title}
          </h3>
          <p className="mt-2 text-sm">
            {entry.organization} · <span className="text-[#6C6863]">{entry.category}</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm md:text-base leading-relaxed text-[#6C6863] list-none">
            {entry.description.split(/\.\s+/).filter(s => s.trim().length > 0).map((sentence, idx) => {
              const romanNumerals = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];
              const numeral = romanNumerals[idx] || String(idx + 1);
              return (
                <li key={idx} className="flex gap-3">
                  <span className="text-[#6C6863]/60">{numeral}.</span>
                  <span>{sentence.trim()}{sentence.trim().endsWith('.') ? '' : '.'}</span>
                </li>
              );
            })}
          </ul>

          {/* Gold accent line on hover */}
          <div className="mt-8 h-px w-24 bg-[#1A1A1A]/20 transition-[background-color,width] duration-700 ease-out group-hover:w-40 group-hover:bg-[#D4AF37]" />
        </div>
      </div>
    </article>
  );
}

export default function Experience({ entries }: ExperienceProps) {
  return (
    <section className="mt-20 md:mt-24" aria-labelledby="experience-heading">
      <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-16">
        <div className="col-span-12 lg:col-span-4">
          <p className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">
            Selected
          </p>
          <h2
            id="experience-heading"
            className="mt-6 font-serif text-4xl md:text-5xl"
            style={{ fontFamily: "Playfair Display, ui-serif" }}
          >
            Experience
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-8">
          {entries.map((entry, index) => (
            <ExperienceItem
              key={entry.id}
              entry={entry}
              isLast={index === entries.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

