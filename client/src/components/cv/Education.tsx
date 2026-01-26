import type { EducationProps } from '../../types/cv.types';

export default function Education({ education }: EducationProps) {
  return (
    <div className="col-span-12 lg:col-span-6 lg:col-start-7">
      <p className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">
        Education
      </p>
      <h2
        className="mt-6 font-serif text-4xl md:text-5xl"
        style={{ fontFamily: "Playfair Display, ui-serif" }}
      >
        {education.abbreviation}
      </h2>

      <div className="mt-10 border-t border-[#1A1A1A] pt-8">
        <p
          className="font-serif text-2xl"
          style={{ fontFamily: "Playfair Display, ui-serif" }}
        >
          {education.degree}
        </p>
        <p className="mt-2 text-sm text-[#6C6863]">
          {education.institution} · {education.year}
        </p>
      </div>
    </div>
  );
}

