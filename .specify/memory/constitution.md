<!--
================================================================================
SYNC IMPACT REPORT
================================================================================
Version Change: 1.0.0 → 1.1.0 (MINOR - Added portfolio website description)

Modified Principles: N/A

Added Sections: N/A

Removed Sections: N/A

Templates Status:
  ✅ plan-template.md - Compatible (No changes needed)
  ✅ spec-template.md - Compatible (No changes needed)
  ✅ tasks-template.md - Compatible (No changes needed)
  ✅ checklist-template.md - Compatible
  ✅ agent-file-template.md - Compatible

Follow-up TODOs: None
================================================================================
-->

# CV Portfolio Constitution

A governing document for the CV Portfolio web application — a modern, full-stack smart portfolio website and curriculum vitae showcase built with React, TypeScript, Tailwind CSS, and Express.

## Core Principles

### I. Visual Excellence First

A CV exists to make a powerful first impression. Design MUST be visually stunning, distinctive, and memorable.

- All UI components MUST follow world-class design standards
- Typography MUST be beautiful, unique, and intentional — avoid generic fonts (Inter, Arial, Roboto)
- Color palette MUST be cohesive with sharp accents; commit to a distinctive aesthetic
- Animations MUST enhance UX with purposeful motion (60fps, CSS-first, Motion library for React)
- Backgrounds MUST create atmosphere and depth, not default solid colors
- Design MUST avoid "AI slop" aesthetics — be creative, surprising, and contextually appropriate

**Rationale**: A CV that looks generic fails its purpose. Visual distinction signals quality.

### II. Mobile-First Responsive

Recruiters and viewers access CVs on all devices. The experience MUST be flawless across screen sizes.

- All layouts MUST be designed mobile-first, then scale up
- Touch targets MUST be minimum 44x44px
- Screen edge padding MUST be 20-24px on mobile
- All interactive elements MUST be optimized for touch input
- Breakpoints: Mobile (0-767px), Tablet (768-1023px), Desktop (1024px+)
- Content MUST remain readable and accessible at all viewport sizes

**Rationale**: A CV that doesn't work on mobile loses opportunities.

### III. Performance & Accessibility

Fast load times and inclusive design are non-negotiable. Every millisecond and every user matters.

- Initial page load MUST be under 3 seconds on 3G connections
- Lighthouse Performance score MUST be 90+
- WCAG 2.1 AA compliance MUST be maintained
- All images MUST be optimized (WebP with fallbacks, lazy loading)
- Text contrast MUST meet 4.5:1 minimum ratio
- Semantic HTML MUST be used throughout
- Keyboard navigation MUST be fully supported
- `prefers-reduced-motion` MUST be respected

**Rationale**: A CV that doesn't load loses the viewer. A CV that excludes users limits reach.

### IV. Component-Driven Architecture

React best practices with reusable, testable, self-contained components.

- Components MUST be single-responsibility and independently testable
- Props MUST be typed with TypeScript interfaces
- State management MUST be minimal and co-located where possible
- Component naming MUST be semantic and descriptive
- Shared components MUST live in `components/` directory
- Feature-specific components MUST be co-located with their feature
- CSS MUST use Tailwind utility classes; avoid custom CSS unless necessary

**Rationale**: Clean architecture enables rapid iteration and maintainability.

### V. Type Safety & Clean Code

TypeScript for reliability. Clean code for maintainability. No shortcuts.

- All code MUST be written in TypeScript with strict mode enabled
- `any` type MUST NOT be used except with explicit justification
- All API responses MUST be typed
- ESLint rules MUST be followed with zero warnings
- Code MUST be formatted with consistent style
- Functions MUST be small, focused, and well-named
- Comments MUST explain "why", not "what"

**Rationale**: Type safety catches errors early. Clean code reduces cognitive load.

## Tech Stack Requirements

The CV Portfolio application uses a modern, proven technology stack:

### Frontend (client/)
| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 18.x |
| TypeScript | Type Safety | 5.x |
| Vite | Build Tool & Dev Server | 5.x |
| Tailwind CSS | Utility-First Styling | 3.x |
| PostCSS | CSS Processing | 8.x |
| React Router | Client Routing | 6.x |

### Backend (server/)
| Technology | Purpose | Version |
|------------|---------|---------|
| Express | API Framework | 4.x |
| TypeScript | Type Safety | 5.x |
| Node.js | Runtime | 18+ |

### Development Tools
- ESLint for linting
- npm workspaces for monorepo management
- Concurrently for parallel dev servers

## Development Workflow

### Code Quality Gates

1. **Before Commit**: All code MUST pass linting with zero errors
2. **Before PR**: All TypeScript compilation MUST succeed
3. **Before Merge**: Code MUST be reviewed for adherence to Core Principles

### File Organization

```text
CV/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route-level components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   ├── types/         # TypeScript type definitions
│   │   └── assets/        # Static assets
│   └── public/            # Public static files
├── server/                 # Backend Express API
│   └── src/
│       ├── routes/        # API route handlers
│       ├── services/      # Business logic
│       └── types/         # TypeScript type definitions
└── .specify/              # Project specifications
```

### Commit Convention

Commits MUST follow conventional commit format:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, not CSS)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `chore:` Build/config changes

## Governance

### Authority

This Constitution is the supreme governing document for the CV Portfolio project. All development decisions, code reviews, and architectural choices MUST align with these principles.

### Amendments

1. Proposed changes MUST be documented with rationale
2. Changes MUST include impact assessment on existing code
3. Version MUST be incremented per semantic versioning:
   - MAJOR: Principle removal or incompatible redefinition
   - MINOR: New principle or significant expansion
   - PATCH: Clarifications, wording, non-semantic changes

### Compliance

- All code reviews MUST verify adherence to Core Principles
- Violations MUST be addressed before merge
- Complexity beyond what's needed MUST be justified in writing
- Refer to `.specify/` documentation for runtime development guidance

### Review Cadence

Constitution SHOULD be reviewed:
- When adding major new features
- When onboarding new technologies
- Quarterly, at minimum

**Version**: 1.1.0 | **Ratified**: 2026-01-24 | **Last Amended**: 2026-01-24
