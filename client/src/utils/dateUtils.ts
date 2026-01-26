/**
 * Date utility functions for CV export
 */

/**
 * Formats a date as YYYY-MM-DD for filenames
 */
export function formatDateForFilename(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Gets current year for copyright
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

