import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { HTML2CANVAS_CONFIG, getDefaultExportOptions } from './exportConstants';
import type { ExportOptions } from '../types/cv.types';

/**
 * Wait for all fonts to be loaded
 */
export async function waitForFonts(): Promise<void> {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }
  // Additional safety delay for font rendering
  await new Promise(resolve => setTimeout(resolve, 100));
}

/**
 * Capture a DOM element as a canvas
 */
export async function captureToCanvas(element: HTMLElement): Promise<HTMLCanvasElement> {
  await waitForFonts();
  
  // Capture the full height of the element, not just viewport
  const canvas = await html2canvas(element, {
    ...HTML2CANVAS_CONFIG,
    width: element.scrollWidth,
    height: element.scrollHeight,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });
  
  return canvas;
}

/**
 * Convert canvas to JPG and download
 */
export async function exportCanvasAsJpg(
  canvas: HTMLCanvasElement,
  filename: string,
  quality: number = 0.92
): Promise<void> {
  // Convert canvas to blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Failed to convert canvas to blob'));
          return;
        }
        saveAs(blob, filename);
        resolve();
      },
      'image/jpeg',
      quality
    );
  });
}

/**
 * Full export pipeline: capture element → convert to JPG → download
 */
export async function exportElementAsJpg(
  element: HTMLElement,
  options: Partial<ExportOptions> = {}
): Promise<void> {
  const exportOptions = { ...getDefaultExportOptions(), ...options };
  
  const canvas = await captureToCanvas(element);
  await exportCanvasAsJpg(canvas, exportOptions.filename, exportOptions.quality);
}

/**
 * Get file size in MB from blob
 */
export function getBlobSizeMB(blob: Blob): number {
  return blob.size / (1024 * 1024);
}
