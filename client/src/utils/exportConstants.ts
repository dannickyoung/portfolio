import type { ExportOptions } from '../types/cv.types';
import { formatDateForFilename } from './dateUtils';

/**
 * A4 Export Constants
 * Based on research.md specifications
 */

// A4 dimensions at 300 DPI
export const A4_WIDTH_PX = 2480;
export const A4_HEIGHT_PX = 3508;

// CSS dimensions for hidden export container (will be scaled up)
export const A4_CSS_WIDTH = 794;  // pixels (A4 width at 96 DPI)
export const A4_CSS_HEIGHT = 1123; // pixels (A4 height at 96 DPI)

// Export quality settings
export const EXPORT_SCALE = 3; // Upscale factor for 300 DPI quality
export const EXPORT_QUALITY = 0.92; // JPG quality (0-1)

// File naming
export const EXPORT_FILENAME_PREFIX = 'Dannick-Young-CV';

/**
 * Generate default export options
 */
export function getDefaultExportOptions(): ExportOptions {
  return {
    filename: `${EXPORT_FILENAME_PREFIX}-${formatDateForFilename(new Date())}.jpg`,
    quality: EXPORT_QUALITY,
    scale: EXPORT_SCALE,
    width: A4_WIDTH_PX,
    height: A4_HEIGHT_PX,
  };
}

/**
 * html2canvas configuration
 */
export const HTML2CANVAS_CONFIG = {
  scale: EXPORT_SCALE,
  useCORS: true,
  allowTaint: false,
  backgroundColor: '#F9F8F6', // Off-white paper background
  logging: false,
};

