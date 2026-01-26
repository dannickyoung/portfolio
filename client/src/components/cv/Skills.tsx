import type { SkillsProps, SkillCategory } from '../../types/cv.types';

interface TagLineProps {
  category: SkillCategory;
}

function TagLine({ category }: TagLineProps) {
  return (
    <div className="mb-6">
      <p className="uppercase text-[10px] tracking-[0.3em] text-[#6C6863]">
        {category.label}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[#6C6863]">
        {category.skills}
      </p>
    </div>
  );
}

interface SkillsComponentProps extends SkillsProps {
  languages?: string[];
}

export default function Skills({ categories, languages }: SkillsComponentProps) {
  return (
    <div className="col-span-12 lg:col-span-5">
      <p className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">
        Capabilities
      </p>
      <h2
        className="mt-6 font-serif text-4xl md:text-5xl"
        style={{ fontFamily: "Playfair Display, ui-serif" }}
      >
        Skills
      </h2>

      <div className="mt-10 border-t border-[#1A1A1A] pt-8">
        {categories.map((category) => (
          <TagLine key={category.label} category={category} />
        ))}
        {languages && languages.length > 0 && (
          <div className="mb-6">
            <p className="uppercase text-[10px] tracking-[0.3em] text-[#6C6863]">
              Languages
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#6C6863]">
              {languages.join(' · ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

