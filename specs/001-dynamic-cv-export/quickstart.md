# Quickstart: Dynamic CV with A4 Export

**Feature Branch**: `001-dynamic-cv-export`  
**Date**: 2026-01-24

## Prerequisites

- Node.js 18+
- npm 9+

## Setup

### 1. Install Dependencies

From the repository root:

```bash
npm install
```

This installs dependencies for both client and server workspaces.

### 2. Install Feature-Specific Dependencies

```bash
cd client
npm install html2canvas file-saver
npm install -D @types/file-saver
cd ..
```

### 3. Start Development Servers

```bash
npm run dev
```

This starts:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

The frontend proxies `/api/*` requests to the backend.

## Development

### Key Files

| File | Purpose |
|------|---------|
| `client/src/components/LuxuryEditorialCV.tsx` | Main CV component |
| `client/src/components/DownloadButton.tsx` | Export trigger button (to create) |
| `client/src/hooks/useExportCV.ts` | Export logic hook (to create) |
| `client/src/utils/exportUtils.ts` | html2canvas helpers (to create) |
| `client/src/types/cv.types.ts` | TypeScript definitions (to create) |

### Adding the Download Button

1. Create the `DownloadButton` component
2. Import `useExportCV` hook for export logic
3. Add button to the CV layout (visible on web, hidden in export)
4. Test export on multiple browsers

### Export Implementation

The export flow:

```
1. User clicks "Download CV"
2. useExportCV hook:
   a. Set state to 'preparing'
   b. Wait for fonts: document.fonts.ready
   c. Create hidden A4 container
   d. Clone CV content into container
   e. Apply print styles
3. html2canvas renders container at 3x scale
4. Canvas converted to JPEG blob
5. file-saver triggers download
6. Cleanup: remove hidden container
7. Set state to 'success'
```

### Testing Export

1. **Visual Check**: Open downloaded JPG, verify all content visible
2. **Dimensions**: Confirm 2480×3508px (or close)
3. **File Size**: Should be <2MB
4. **Print Test**: Print on A4, verify margins and readability

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend |
| `npm run dev:client` | Start frontend only |
| `npm run dev:server` | Start backend only |
| `npm run build` | Build for production |
| `npm start` | Start production server |

## Troubleshooting

### Fonts Not Rendering in Export

- Ensure fonts are loaded before capture
- Use `document.fonts.ready.then(() => ...)`
- Check CORS settings if using external fonts

### Export Takes Too Long

- Reduce scale factor (but affects quality)
- Simplify decorative elements in export view
- Consider showing progress indicator

### Large File Size

- Reduce JPG quality (try 0.85)
- Simplify gradients and shadows
- Compress with tinypng API as post-process

### White/Blank Export

- Check if element has 0 dimensions
- Ensure hidden container has display: block
- Verify useCORS option for external resources

## Constitution Compliance

When modifying code, ensure:

- [ ] Visual Excellence: No generic UI, maintain editorial aesthetic
- [ ] Mobile-First: Test on mobile viewports
- [ ] Performance: Initial load <3s, export <10s
- [ ] Component-Driven: Single-responsibility components
- [ ] Type Safety: No `any` types, typed props

