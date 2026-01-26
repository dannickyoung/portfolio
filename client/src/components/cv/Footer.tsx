import type { FooterProps } from '../../types/cv.types';
import { getCurrentYear } from '../../utils/dateUtils';

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="mt-20 md:mt-24 pt-10 border-t border-[#1A1A1A]/20" role="contentinfo">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <p className="uppercase text-[10px] tracking-[0.3em] text-[#6C6863]">
          © {getCurrentYear()} {footer.copyright}
        </p>
      </div>
    </footer>
  );
}

