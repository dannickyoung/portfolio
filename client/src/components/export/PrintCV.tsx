import type { CVData } from '../../types/cv.types';
import { getCurrentYear } from '../../utils/dateUtils';

/**
 * Print-optimized CV layout for A4 export
 * Multi-page support - content flows naturally across pages
 */

interface PrintCVProps {
  data: CVData;
}

export default function PrintCV({ data }: PrintCVProps) {
  return (
    <div
      className="bg-[#F9F8F6] text-[#1A1A1A] p-12"
      style={{ 
        fontFamily: "Inter, ui-sans-serif, system-ui",
        width: '794px',
      }}
    >
      {/* HEADER */}
      <header className="mb-8">
        <p className="uppercase text-[10px] tracking-[0.3em] text-[#6C6863] mb-4">
          {data.personal.title}
        </p>
        <h1
          className="text-5xl leading-[0.9] mb-6"
          style={{ fontFamily: "Playfair Display, ui-serif" }}
        >
          {data.personal.name.split(' ')[0]}{' '}
          <span className="italic">{data.personal.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-sm leading-relaxed text-[#6C6863] max-w-lg">
          {data.summary}
        </p>
        
        {/* Contact info inline */}
        <div className="mt-6 flex gap-6 text-xs text-[#6C6863]">
          <span>{data.personal.location}</span>
          <span>{data.personal.email}</span>
          <span>{data.personal.linkedin}</span>
        </div>
      </header>

      <div className="h-px w-full bg-[#1A1A1A]/20 mb-8" />

      {/* EXPERIENCE */}
      <section className="mb-8">
        <h2
          className="text-2xl mb-6"
          style={{ fontFamily: "Playfair Display, ui-serif" }}
        >
          Experience
        </h2>
        
        {data.experience.map((entry) => (
            <div 
            key={entry.id} 
            className="mb-6 grid grid-cols-12 gap-4"
          >
            <div className="col-span-3">
              <p className="text-[10px] uppercase tracking-wider text-[#6C6863]">
                {entry.dateRange}
              </p>
            </div>
            <div className="col-span-9">
              <h3
                className="text-lg"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                {entry.title}
              </h3>
              <p className="text-xs text-[#6C6863] mt-1">{entry.organization} · {entry.category}</p>
              <ul className="text-xs text-[#6C6863] mt-2 leading-relaxed list-none space-y-1">
                {entry.description.split(/\.\s+/).filter(s => s.trim().length > 0).map((sentence, idx) => {
                  const romanNumerals = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];
                  const numeral = romanNumerals[idx] || String(idx + 1);
                  return (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#6C6863]/60">{numeral}.</span>
                      <span>{sentence.trim()}{sentence.trim().endsWith('.') ? '' : '.'}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <div className="h-px w-full bg-[#1A1A1A]/20 mb-8" />

      {/* SKILLS & EDUCATION */}
      <section className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2
            className="text-2xl mb-4"
            style={{ fontFamily: "Playfair Display, ui-serif" }}
          >
            Skills
          </h2>
          {data.skills.map((category) => (
            <div key={category.label} className="mb-3">
              <p className="text-[10px] uppercase tracking-wider text-[#6C6863]">
                {category.label}
              </p>
              <p className="text-xs text-[#6C6863] mt-1">{category.skills}</p>
            </div>
          ))}
          {data.languages && data.languages.length > 0 && (
            <div className="mb-3">
              <p className="text-[10px] uppercase tracking-wider text-[#6C6863]">
                Languages
              </p>
              <p className="text-xs text-[#6C6863] mt-1">
                {data.languages.join(' · ')}
              </p>
            </div>
          )}
        </div>
        
        <div>
          <h2
            className="text-2xl mb-4"
            style={{ fontFamily: "Playfair Display, ui-serif" }}
          >
            Education
          </h2>
          <p
            className="text-lg"
            style={{ fontFamily: "Playfair Display, ui-serif" }}
          >
            {data.education.degree}
          </p>
          <p className="text-xs text-[#6C6863] mt-1">
            {data.education.institution} · {data.education.year}
          </p>
        </div>
      </section>

      <div className="h-px w-full bg-[#1A1A1A]/20 mb-8" />

      {/* WHY YOU / WHY NOW */}
      <section className="mb-8">
        <h2
          className="text-2xl mb-6"
          style={{ fontFamily: "Playfair Display, ui-serif" }}
        >
          Why You / Why Now
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3
              className="text-lg mb-2"
              style={{ fontFamily: "Playfair Display, ui-serif" }}
            >
              The AI-Assisted Designer
            </h3>
            <p className="text-xs text-[#6C6863] leading-relaxed">
              I use Cursor and AI tools to close the design-to-development gap. While most designers hand off static files, I build live production that developers can ship immediately. This means faster launches, fewer handoff issues, and products that actually match the design.
            </p>
          </div>

          <div>
            <h3
              className="text-lg mb-2"
              style={{ fontFamily: "Playfair Display, ui-serif" }}
            >
              Best For
            </h3>
            <p className="text-xs text-[#6C6863] leading-relaxed">
              AI and Web3 companies building from 0 to 1. Teams that need someone who can design beautiful interfaces, build design systems, conduct research, and ship production-ready code. Companies ready to move fast without sacrificing quality.
            </p>
          </div>

          <div>
            <h3
              className="text-lg mb-2"
              style={{ fontFamily: "Playfair Display, ui-serif" }}
            >
              The Receipts
            </h3>
            <p className="text-xs text-[#6C6863] leading-relaxed">
              28% increase in signup completion. 60% faster design-to-dev handoff. 30+ reusable components. 50+ user interviews. 6 websites and 5 apps shipped. Built AI-powered feedback systems. Reduced support tickets by 45%. These aren't just numbers, they're proof I solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-8 pt-8 border-t border-[#1A1A1A]/20">
        <div className="flex justify-between items-end">
          <p className="text-[10px] uppercase tracking-wider text-[#6C6863]">
            © {getCurrentYear()} {data.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
