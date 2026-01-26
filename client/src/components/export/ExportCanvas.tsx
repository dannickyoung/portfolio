import { forwardRef } from 'react';
import type { CVData } from '../../types/cv.types';
import PrintCV from './PrintCV';

interface ExportCanvasProps {
  data: CVData;
}

/**
 * Hidden container for A4 export rendering
 * This component is positioned off-screen and used by html2canvas
 */
const ExportCanvas = forwardRef<HTMLDivElement, ExportCanvasProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="fixed left-[-9999px] top-0 pointer-events-none"
        style={{
          width: '794px',
          // No height restriction - let content flow naturally for long JPG image
        }}
        aria-hidden="true"
      >
        <PrintCV data={data} />
      </div>
    );
  }
);

ExportCanvas.displayName = 'ExportCanvas';

export default ExportCanvas;

