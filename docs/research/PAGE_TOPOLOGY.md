# kedavra.me — Page Topology (for structural clone)

Source: https://kedavra.me/ (Webflow)
Goal: clone layout + motion patterns only. Placeholder content.

## Page Order (top → bottom)

1. **Top marquee bar** (`bar.black.top`) — black strip, infinite horizontal scroll, repeated label
2. **Navbar** (`.navbar-static`) — logo + menu, mix-blend-mode: difference
3. **Hero** (`.home-hero-wrapper`) — white bg, canvas cursor-flow behind, layout: left metadata column (location, time) + right big headline + CTA
4. **Works** (#works) — black bg, stack of rows (left: description+link, vertical line, right: image). "Selected Works" label on first row
5. **Dribbble Carousel** (`.carousel-wrapper`) — black bg, horizontal swiper
6. **About** (#about) — off-white bg (#fafafa), layout same left/line/right pattern
7. **Primary marquee bar** (`.bar.primary`) — lime green strip, same infinite scroll
8. **Services** (#services) — black bg, two rows with vertical line separators
9. **Footer** (`.footer`) — lime green (#75FB4C), big CTA headline "Just work with me.", social links, bottom marquee

## Global Overlays (fixed position)

- `#loader` (z-9999) — initial load screen
- `.bottom-overlay-wrapper` (z-80) — scroll-reveal footer mask (page body scrolls over a fixed-viewport background; footer reveals from beneath)
- `#custom-cursor` (z-2137) — 12px dot, mix-blend-mode: difference, follows mouse
- `#hero-cursor-flow` (canvas inside hero) — interactive particle/flow effect

## Color System

- `--bg`: `#000000` (body default / dark sections)
- `--bg-white`: `#ffffff` (hero / navbar-ish surfaces)
- `--bg-off`: `#fafafa` (about section)
- `--primary`: `#75fb4c` (footer + primary marquee)
- `--text`: on-surface contrast

## Typography

- Primary: Inter 300–700 (all text + headings)
- Accent: Press Start 2P (pixel font, used for small labels — e.g., marquee text)
- Serif option: Playfair Display (loaded but rare)
- Letter-spacing base: -0.04em
- Scale:
  - Hero H1: 64px / 64px / weight 600 / -2.56px
  - Section H2: 40px / 40px / weight 600 / -1.6px
  - Footer mega: 104px / 104px / weight 600 / -4.16px
  - Case description: 20px / weight 600
  - Body: 16px / 24px / weight 400

## Layout Container

- Outer wrapper: `padding: 0 16px`, full viewport width
- Inner container: `max-width: 830px`, centered (`margin: 0 auto`)
- Content row pattern: 320px (left col) + 1px line + 492px (right col) = 830px

## Section wrapper heights (reference)

- Header 784px, Works 1783px, Carousel 655px, About 794px, Services 888px, Footer 984px
- Body total ~5914px
