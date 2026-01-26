# Tasks: Dynamic CV with A4 Export

**Input**: Design documents from `/specs/001-dynamic-cv-export/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: Tests are NOT explicitly requested in the feature specification. Test tasks are omitted.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `client/src/`, `server/src/`
- This project uses client/server monorepo structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and dependency installation

- [x] T001 Install export dependencies (html2canvas, file-saver) in client/package.json
- [x] T002 [P] Create TypeScript type definitions in client/src/types/cv.types.ts
- [x] T003 [P] Create CV data constants in client/src/data/cvData.ts
- [x] T004 [P] Add Google Fonts to client/index.html for reliable font loading

**Checkpoint**: Dependencies installed, types defined, data structured

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Create utility function for date formatting in client/src/utils/dateUtils.ts
- [x] T006 [P] Create export constants (A4 dimensions, quality settings) in client/src/utils/exportConstants.ts

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View CV on Web (Priority: P1) 🎯 MVP

**Goal**: Display the complete CV on web with all sections (Header, Experience, Skills, Education, Footer) in a luxury editorial design

**Independent Test**: Navigate to http://localhost:3000 and verify the complete CV renders correctly with all sections visible and properly styled

### Implementation for User Story 1

- [x] T007 [US1] Refactor LuxuryEditorialCV.tsx to use typed CVData props in client/src/components/LuxuryEditorialCV.tsx
- [x] T008 [P] [US1] Extract Header section to component in client/src/components/cv/Header.tsx
- [x] T009 [P] [US1] Extract Experience section to component in client/src/components/cv/Experience.tsx
- [x] T010 [P] [US1] Extract Skills section to component in client/src/components/cv/Skills.tsx
- [x] T011 [P] [US1] Extract Education section to component in client/src/components/cv/Education.tsx
- [x] T012 [P] [US1] Extract Footer section to component in client/src/components/cv/Footer.tsx
- [x] T013 [US1] Compose all CV sections in main component in client/src/components/LuxuryEditorialCV.tsx
- [x] T014 [US1] Verify all CV sections render with correct styling in client/src/App.tsx

**Checkpoint**: User Story 1 complete - CV is viewable on web with all sections

---

## Phase 4: User Story 2 - Download CV as A4 JPG (Priority: P2)

**Goal**: Enable users to download the CV as an A4-sized (2480×3508px) portrait JPG image

**Independent Test**: Click the "Download CV" button and verify a properly formatted A4 portrait JPG file downloads

### Implementation for User Story 2

- [x] T015 [P] [US2] Create export utility functions in client/src/utils/exportUtils.ts
- [x] T016 [P] [US2] Create useExportCV hook with state management in client/src/hooks/useExportCV.ts
- [x] T017 [US2] Create ExportCanvas component (hidden A4 container) in client/src/components/export/ExportCanvas.tsx
- [x] T018 [US2] Create DownloadButton component with loading states in client/src/components/DownloadButton.tsx
- [x] T019 [US2] Create print-optimized CV layout for export in client/src/components/export/PrintCV.tsx
- [x] T020 [US2] Integrate DownloadButton into main CV component in client/src/components/LuxuryEditorialCV.tsx
- [x] T021 [US2] Add error handling and retry functionality in client/src/hooks/useExportCV.ts
- [x] T022 [US2] Test export on Chrome, Firefox, Safari, Edge browsers

**Checkpoint**: User Story 2 complete - CV can be downloaded as A4 JPG

---

## Phase 5: User Story 3 - Responsive Design Adaptation (Priority: P3)

**Goal**: Premium responsive layout that adapts beautifully across mobile, tablet, and desktop viewports

**Independent Test**: View the CV at different viewport sizes (320px, 768px, 1024px+) and verify layout adapts appropriately

### Implementation for User Story 3

- [x] T023 [P] [US3] Optimize Header component for mobile (<768px) in client/src/components/cv/Header.tsx
- [x] T024 [P] [US3] Optimize Experience component for tablet/mobile in client/src/components/cv/Experience.tsx
- [x] T025 [P] [US3] Optimize Skills component for mobile layout in client/src/components/cv/Skills.tsx
- [x] T026 [P] [US3] Optimize Education component for mobile layout in client/src/components/cv/Education.tsx
- [x] T027 [US3] Ensure decorative grid lines only show on desktop (≥1024px) in client/src/components/LuxuryEditorialCV.tsx
- [x] T028 [US3] Verify touch targets are minimum 44x44px on mobile in all interactive components
- [x] T029 [US3] Test responsive behavior at breakpoints (320px, 768px, 1024px, 1440px)

**Checkpoint**: User Story 3 complete - CV adapts beautifully to all screen sizes

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements that affect multiple user stories

- [x] T030 [P] Add font fallback handling for slow connections in client/src/components/LuxuryEditorialCV.tsx
- [x] T031 [P] Optimize images and assets for performance in client/public/
- [x] T032 Add semantic HTML landmarks for accessibility in all CV section components
- [x] T033 Verify Lighthouse Accessibility score ≥90
- [x] T034 Run quickstart.md validation - verify all setup steps work

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1 (Setup) ─────────────────────────────────────────────────────────────►
                 │
                 ▼
Phase 2 (Foundational) ──────────────────────────────────────────────────────►
                         │
                         ▼
           ┌─────────────┴─────────────┐
           │                           │
           ▼                           ▼
Phase 3 (US1: Web View)     Phase 4 (US2: Export) ◄── depends on US1
           │                           │
           └─────────────┬─────────────┘
                         │
                         ▼
              Phase 5 (US3: Responsive) ◄── enhances US1
                         │
                         ▼
              Phase 6 (Polish)
```

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 - No dependencies on other stories
- **User Story 2 (P2)**: Depends on US1 (needs CV component to export)
- **User Story 3 (P3)**: Enhances US1 (responsive polish for existing components)

### Within Each User Story

- Types before components
- Utilities before hooks
- Components before integration
- Core implementation before polish

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T002, T003, T004)
- All Foundational tasks marked [P] can run in parallel (T006)
- US1 section components can be extracted in parallel (T008-T012)
- US2 export utilities and hook can start in parallel (T015-T016)
- US3 component optimizations can run in parallel (T023-T026)
- Polish tasks marked [P] can run in parallel (T030, T031)

---

## Parallel Example: User Story 1

```bash
# After T007 completes, launch section extractions in parallel:
T008: "Extract Header section to component in client/src/components/cv/Header.tsx"
T009: "Extract Experience section to component in client/src/components/cv/Experience.tsx"
T010: "Extract Skills section to component in client/src/components/cv/Skills.tsx"
T011: "Extract Education section to component in client/src/components/cv/Education.tsx"
T012: "Extract Footer section to component in client/src/components/cv/Footer.tsx"
```

---

## Parallel Example: User Story 2

```bash
# These can start in parallel after US1 is complete:
T015: "Create export utility functions in client/src/utils/exportUtils.ts"
T016: "Create useExportCV hook with state management in client/src/hooks/useExportCV.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Verify CV renders correctly on web
5. Deploy/demo if ready — this is the MVP!

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test export → Deploy/Demo
4. Add User Story 3 → Test responsive → Deploy/Demo
5. Polish phase → Final release

### Suggested Order for Solo Developer

```
T001 → T002-T004 (parallel) → T005 → T006 →
T007 → T008-T012 (parallel) → T013 → T014 → [MVP CHECKPOINT] →
T015-T016 (parallel) → T017 → T018 → T019 → T020 → T021 → T022 →
T023-T026 (parallel) → T027 → T028 → T029 →
T030-T031 (parallel) → T032 → T033 → T034
```

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Existing LuxuryEditorialCV.tsx serves as starting point for US1
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- US1 is the MVP — get it working first before adding export

