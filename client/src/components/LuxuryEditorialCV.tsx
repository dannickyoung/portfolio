import type { CVProps, ExportState } from '../types/cv.types';
import { CV_DATA } from '../data/cvData';
import Header from './cv/Header';
import Experience from './cv/Experience';
import Skills from './cv/Skills';
import Education from './cv/Education';
import WhyYou from './cv/WhyYou';
import Footer from './cv/Footer';

/**
 * Luxury / Editorial one-page CV
 * - Off-white paper background, charcoal text, gold accents
 * - Visible gridlines + paper grain overlay
 * - Asymmetric 12-col layout
 * - Component-driven architecture with typed props
 */

interface LuxuryEditorialCVInternalProps {
  data?: CVProps['data'];
  showDownloadButton?: boolean;
  onExport?: () => void;
  exportState?: ExportState;
}

export default function LuxuryEditorialCV({
  data = CV_DATA,
  showDownloadButton = true,
  onExport,
  exportState,
}: LuxuryEditorialCVInternalProps) {
  return (
    <div
      className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A]"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
    >
      {/* Paper grain overlay (very subtle) */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>


      <main className="relative z-10 mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 md:py-20 lg:px-16 lg:py-24" role="main" aria-label="Curriculum Vitae">
        {/* Download Button - positioned at top right */}
        {showDownloadButton && onExport && (
          <div className="absolute right-5 top-4 sm:right-8 lg:right-16 print:hidden">
            <button
              onClick={onExport}
              disabled={exportState?.status === 'preparing' || exportState?.status === 'rendering'}
              className="h-10 px-4 border border-[#1A1A1A] bg-transparent uppercase text-[10px] tracking-[0.2em] text-[#1A1A1A] transition-all duration-300 ease-out hover:bg-[#1A1A1A] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {exportState?.status === 'preparing' || exportState?.status === 'rendering' ? (
                <>
                  <span className="animate-spin h-3 w-3 border border-current border-t-transparent rounded-full" />
                  Generating...
                </>
              ) : exportState?.status === 'success' ? (
                '✓ Downloaded'
              ) : exportState?.status === 'error' ? (
                'Retry Download'
              ) : (
                'Download CV'
              )}
            </button>
          </div>
        )}

        {/* HEADER */}
        <Header
          personal={data.personal}
          tagline={data.tagline}
          summary={data.summary}
          focus={data.focus}
        />

        {/* DIVIDER */}
        <div className="mt-12 md:mt-16 h-px w-full bg-[#1A1A1A]/20" />

        {/* EXPERIENCE */}
        <Experience entries={data.experience} />

        {/* DIVIDER */}
        <div className="mt-20 md:mt-24 h-px w-full bg-[#1A1A1A]/20" />

        {/* SKILLS / EDUCATION */}
        <section className="mt-20 md:mt-24">
          <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-16">
            <Skills categories={data.skills} languages={data.languages} />
            <Education education={data.education} />
          </div>
        </section>

        {/* DIVIDER */}
        <div className="mt-20 md:mt-24 h-px w-full bg-[#1A1A1A]/20" />

        {/* WHY YOU / WHY NOW */}
        <WhyYou />

        {/* FOOTER */}
        <Footer footer={data.footer} />
      </main>

      {/* Print helpers */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}
