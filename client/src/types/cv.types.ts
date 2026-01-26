/**
 * CV Type Definitions
 * Based on data-model.md specifications
 */

// ============================================================================
// Core CV Types
// ============================================================================

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  portfolio: string;
}

export interface ExperienceEntry {
  id: string;
  dateRange: string;
  title: string;
  organization: string;
  category: string;
  description: string;
}

export interface SkillCategory {
  label: string;
  skills: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: number;
  abbreviation: string;
}

export interface FooterInfo {
  copyright: string;
  openTo: string[];
}

export interface CVData {
  personal: PersonalInfo;
  tagline: string;
  summary: string;
  focus: string[];
  experience: ExperienceEntry[];
  skills: SkillCategory[];
  languages: string[];
  education: EducationEntry;
  footer: FooterInfo;
}

// ============================================================================
// Export Types
// ============================================================================

export interface ExportOptions {
  filename: string;
  quality: number;
  scale: number;
  width: number;
  height: number;
}

export type ExportStatus = 'idle' | 'preparing' | 'rendering' | 'success' | 'error';

export interface ExportState {
  status: ExportStatus;
  progress: number;
  error: string | null;
}

// ============================================================================
// Component Props
// ============================================================================

export interface HeaderProps {
  personal: PersonalInfo;
  tagline: string;
  summary: string;
  focus: string[];
}

export interface ExperienceProps {
  entries: ExperienceEntry[];
}

export interface SkillsProps {
  categories: SkillCategory[];
}

export interface EducationProps {
  education: EducationEntry;
}

export interface FooterProps {
  footer: FooterInfo;
}

export interface CVProps {
  data: CVData;
  showDownloadButton?: boolean;
  onExport?: () => void;
  exportState?: ExportState;
}

