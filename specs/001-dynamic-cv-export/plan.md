# Implementation Plan: Dynamic CV with A4 Export

**Branch**: `001-dynamic-cv-export` | **Date**: 2026-01-24 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-dynamic-cv-export/spec.md`

## Summary

Build a luxury editorial CV web application with client-side A4 JPG export capability. The CV displays Dannick Young's professional experience in a visually stunning, responsive layout using React, TypeScript, and Tailwind CSS. Users can download the CV as a high-resolution A4 portrait JPG (2480×3508px at 300 DPI) directly from the browser.

**Technical Approach**: 
- Client-side rendering with React + Vite
- html2canvas + canvas-to-blob for JPG generation
- Tailwind CSS for responsive styling
- Google Fonts (Playfair Display, Inter) for typography
- No database needed (static content)

## Technical Context

**Language/Version**: TypeScript 5.x with React 18.x  
**Primary Dependencies**: React, Vite, Tailwind CSS, html2canvas, file-saver  
**Storage**: N/A (static content, no database)  
**Testing**: Vitest (if tests requested)  
**Target Platform**: Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)  
**Project Type**: Web application (client + server monorepo)  
**Performance Goals**: Initial load <3s, export <10s, 60fps animations  
**Constraints**: JPG <2MB, A4 portrait (2480×3508px @ 300 DPI)  
**Scale/Scope**: Single-page CV, single user (Dannick Young)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Visual Excellence First | ✅ PASS | Luxury editorial design with Playfair Display + Inter fonts, gold accents, paper grain texture |
| II. Mobile-First Responsive | ✅ PASS | Tailwind responsive classes, mobile-first breakpoints, 44px touch targets |
| III. Performance & Accessibility | ✅ PASS | Vite for fast builds, semantic HTML, WCAG 2.1 AA target |
| IV. Component-Driven Architecture | ✅ PASS | Self-contained components with typed props |
| V. Type Safety & Clean Code | ✅ PASS | TypeScript strict mode, ESLint configured |

**Gate Status**: ✅ PASSED — All principles satisfied

## Project Structure

### Documentation (this feature)

```text
specs/001-dynamic-cv-export/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0: Technology research
├── data-model.md        # Phase 1: Data structures
├── quickstart.md        # Phase 1: Developer guide
├── contracts/           # Phase 1: API contracts (minimal for this feature)
│   └── README.md
└── checklists/
    └── requirements.md  # Spec validation checklist
```

### Source Code (repository root)

```text
client/
├── src/
│   ├── components/
│   │   ├── LuxuryEditorialCV.tsx    # Main CV component (exists)
│   │   ├── DownloadButton.tsx       # JPG export trigger
│   │   └── ExportCanvas.tsx         # Hidden canvas for export
│   ├── hooks/
│   │   └── useExportCV.ts           # Export logic hook
│   ├── utils/
│   │   └── exportUtils.ts           # html2canvas helpers
│   ├── types/
│   │   └── cv.types.ts              # TypeScript definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── vite.svg
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json

server/
├── src/
│   └── index.ts                     # Express server (minimal)
├── package.json
└── tsconfig.json
```

**Structure Decision**: Web application structure with client/server separation. The server is minimal (serves static files in production). All CV rendering and export happens client-side.

## Complexity Tracking

No constitution violations. Complexity is appropriate for the feature scope.
