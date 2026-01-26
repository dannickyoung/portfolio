# Data Model: Dynamic CV with A4 Export

**Feature Branch**: `001-dynamic-cv-export`  
**Date**: 2026-01-24

## Overview

This feature uses static data (no database). All CV content is defined as TypeScript constants with strong typing. This document defines the type structures.

---

## Core Types

### CVData

The root data structure for the entire CV.

```typescript
interface CVData {
  personal: PersonalInfo;
  tagline: string;
  summary: string;
  focus: string[];
  experience: ExperienceEntry[];
  skills: SkillCategory[];
  education: EducationEntry;
  footer: FooterInfo;
}
```

---

### PersonalInfo

Contact and location information.

```typescript
interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  portfolio: string;
}
```

**Validation Rules**:
- `email`: Valid email format
- `linkedin`: URL or path (linkedin.com/in/...)
- `portfolio`: URL or placeholder text

---

### ExperienceEntry

A single work experience item.

```typescript
interface ExperienceEntry {
  id: string;
  dateRange: string;      // "06/2025 — Present"
  title: string;          // "Lead Product Designer"
  organization: string;   // "ChronoAI"
  description: string;    // Multi-sentence description
}
```

**Validation Rules**:
- `id`: Unique identifier (for React keys)
- `dateRange`: Format "MM/YYYY — MM/YYYY" or "MM/YYYY — Present"
- `description`: 1-3 sentences, <500 characters

---

### SkillCategory

A category of skills.

```typescript
interface SkillCategory {
  label: string;          // "Product", "Research", "Tools"
  skills: string;         // "UI/UX · Design Systems · Prototyping"
}
```

**Display Format**: Skills within a category are separated by " · " (middle dot).

---

### EducationEntry

Educational background.

```typescript
interface EducationEntry {
  degree: string;         // "BA Design & Media"
  institution: string;    // "University of Central Lancashire"
  year: number;           // 2021
  abbreviation: string;   // "UCLAN" (for display)
}
```

---

### FooterInfo

Footer content.

```typescript
interface FooterInfo {
  copyright: string;      // "Dannick Young"
  openTo: string[];       // ["Product Design", "UI/UX", "Design Systems"]
}
```

---

## Export Types

### ExportOptions

Configuration for JPG export.

```typescript
interface ExportOptions {
  filename: string;       // Generated filename
  quality: number;        // 0-1, default 0.92
  scale: number;          // Upscale factor, default 3
  width: number;          // A4 width in px (2480)
  height: number;         // A4 height in px (3508)
}

const DEFAULT_EXPORT_OPTIONS: ExportOptions = {
  filename: `Dannick-Young-CV-${formatDate(new Date())}.jpg`,
  quality: 0.92,
  scale: 3,
  width: 2480,
  height: 3508,
};
```

---

### ExportState

State management for export process.

```typescript
type ExportStatus = 'idle' | 'preparing' | 'rendering' | 'success' | 'error';

interface ExportState {
  status: ExportStatus;
  progress: number;       // 0-100
  error: string | null;
}
```

---

## Static Data Instance

The actual CV data (hardcoded).

```typescript
const CV_DATA: CVData = {
  personal: {
    name: "Dannick Young",
    title: "Product Design · UI/UX · Systems",
    location: "Singapore",
    email: "dannickyoung@outlook.com",
    linkedin: "linkedin.com/in/dannickyoung",
    portfolio: "website placeholder",
  },
  tagline: "Editorial / Vol. 01",
  summary: "Design–tech hybrid Product Designer working across AI, Web3, and digital products. Focused on systems, clarity, and editorial-level execution.",
  focus: ["AI products", "Design systems", "Research-to-UI", "Mobile-first"],
  experience: [
    {
      id: "exp-1",
      dateRange: "06/2025 — Present",
      title: "Lead Product Designer",
      organization: "ChronoAI",
      description: "Led end-to-end design for AI software products. Owned research, synthesis, product strategy, mobile-first UI, design systems, and launch assets. Defined internal interaction patterns for AI-driven workflows.",
    },
    // ... additional entries
  ],
  skills: [
    { label: "Product", skills: "UI/UX · Design Systems · Prototyping · QA · Product Strategy" },
    { label: "Research", skills: "Interviews · Usability Testing · Synthesis" },
    { label: "Tools", skills: "Figma · Framer · Adobe Suite · Cursor" },
  ],
  education: {
    degree: "BA Design & Media",
    institution: "University of Central Lancashire",
    year: 2021,
    abbreviation: "UCLAN",
  },
  footer: {
    copyright: "Dannick Young",
    openTo: ["Product Design", "UI/UX", "Design Systems"],
  },
};
```

---

## Entity Relationships

```
CVData (root)
├── PersonalInfo (1:1)
├── ExperienceEntry[] (1:many)
├── SkillCategory[] (1:many)
├── EducationEntry (1:1)
└── FooterInfo (1:1)
```

---

## State Transitions

### Export Process State Machine

```
idle → preparing → rendering → success
                ↘         ↘
                  error ←─┘
```

| State | Entry Condition | Exit Condition |
|-------|-----------------|----------------|
| idle | Initial, after success/error timeout | User clicks download |
| preparing | Button clicked | Fonts loaded, container ready |
| rendering | Container ready | Canvas rendered to blob |
| success | Blob downloaded | 2s timeout → idle |
| error | Any failure | User clicks retry → preparing |

