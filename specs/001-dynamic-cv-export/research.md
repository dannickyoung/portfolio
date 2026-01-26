# Research: Dynamic CV with A4 Export

**Feature Branch**: `001-dynamic-cv-export`  
**Date**: 2026-01-24

## Research Summary

This document captures technology decisions and best practices research for implementing the CV web application with A4 JPG export.

---

## 1. Client-Side Image Export

### Decision: html2canvas + canvas-to-blob

**Rationale**: 
- html2canvas is the most mature library for rendering DOM to canvas
- Works entirely client-side (no server needed)
- Supports custom fonts when properly loaded
- Active maintenance and wide adoption

**Alternatives Considered**:

| Option | Pros | Cons | Why Rejected |
|--------|------|------|--------------|
| dom-to-image | Simpler API | Less mature, font issues | Inconsistent cross-browser |
| Puppeteer (server) | Perfect rendering | Requires server, complexity | Over-engineering for static CV |
| html2pdf.js | PDF + image | Bloated, poor image quality | JPG quality insufficient |
| modern-screenshot | Newer, faster | Less tested | Risk for production use |

**Implementation Notes**:
- Use `html2canvas` v1.4+ for best quality
- Set `scale: 3` for 300 DPI equivalent (2480×3508px)
- Use `useCORS: true` for external font loading
- Target A4 dimensions: 210mm × 297mm = 2480 × 3508px @ 300 DPI

---

## 2. Font Loading Strategy

### Decision: Google Fonts with font-display: swap

**Rationale**:
- Google Fonts CDN is reliable and fast
- font-display: swap prevents FOIT (Flash of Invisible Text)
- Fallback fonts maintain readability if fonts fail

**Implementation**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

**For Export**:
- Fonts must be fully loaded before html2canvas capture
- Use `document.fonts.ready` Promise to ensure font availability
- Embed font faces in export container if needed

---

## 3. A4 Export Specifications

### Decision: 2480 × 3508 pixels at 300 DPI

**Rationale**:
- 300 DPI is print-quality standard
- A4 = 210mm × 297mm
- At 300 DPI: 210mm = 2480px, 297mm = 3508px

**Implementation**:
```typescript
const A4_WIDTH = 2480;   // pixels at 300 DPI
const A4_HEIGHT = 3508;  // pixels at 300 DPI
const EXPORT_SCALE = 3;  // upscale factor for quality
```

**JPG Quality Settings**:
- Quality: 0.92 (balance between file size and quality)
- Target file size: <2MB
- MIME type: image/jpeg

---

## 4. Responsive Design Breakpoints

### Decision: Tailwind default breakpoints with mobile-first approach

**Rationale**:
- Aligns with Constitution Principle II (Mobile-First Responsive)
- Tailwind's breakpoints are well-tested and widely adopted

**Breakpoints**:
| Name | Min Width | Usage |
|------|-----------|-------|
| Default | 0px | Mobile (single column) |
| md | 768px | Tablet (adjustments) |
| lg | 1024px | Desktop (full editorial grid) |

---

## 5. Download UX Pattern

### Decision: Download button with loading state → auto-download

**Rationale**:
- Familiar pattern for users
- Loading indicator sets expectations (export takes 2-5 seconds)
- Auto-download eliminates extra clicks

**States**:
1. **Default**: "Download CV" button visible
2. **Processing**: Button disabled, spinner shown, "Generating..." text
3. **Success**: File downloads, brief success feedback
4. **Error**: Error message with retry option

---

## 6. Export Container Strategy

### Decision: Hidden A4-sized container for export

**Rationale**:
- Web view is responsive; export needs fixed A4 dimensions
- Hidden container allows precise control over export layout
- Avoids layout shifts in visible UI during export

**Implementation**:
- Create hidden `<div>` with fixed A4 dimensions (794px × 1123px CSS)
- Clone CV content into export container
- Apply print-specific styles
- Render with html2canvas at 3x scale

---

## 7. File Naming Convention

### Decision: `Dannick-Young-CV-{date}.jpg`

**Rationale**:
- Clear, professional naming
- Date suffix prevents overwriting previous downloads
- Hyphens for cross-platform compatibility

**Format**: `Dannick-Young-CV-2026-01-24.jpg`

---

## Dependencies to Install

```json
{
  "dependencies": {
    "html2canvas": "^1.4.1",
    "file-saver": "^2.0.5"
  },
  "devDependencies": {
    "@types/file-saver": "^2.0.7"
  }
}
```

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Fonts not loaded before export | Use `document.fonts.ready` Promise |
| Export fails on mobile | Test on actual devices, provide fallback message |
| Large file size | Optimize JPG quality setting, compress if needed |
| Cross-browser differences | Test on Chrome, Firefox, Safari, Edge |

