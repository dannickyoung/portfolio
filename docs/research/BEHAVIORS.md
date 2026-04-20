# kedavra.me — Behaviors & Motion Patterns

## 1. Smooth Scroll (Lenis)

- `html` has class `lenis` → Lenis smooth-scroll is active.
- Implementation: install `lenis`, init on mount in a client component.
- Without it, the feel of everything else is wrong.

## 2. Custom Cursor

- `#custom-cursor` — `position: fixed`, 12×12px, `border-radius: 50%`, `background: #fff`, `mix-blend-mode: difference`, `z-index: 2137`
- JS: `mousemove` listener, translate to cursor position with lerp for smoothing.
- Optional: grows/shrinks on hover over interactive elements (`a`, `button`).

## 3. Navbar Mix-Blend

- `.navbar.w-nav` has `mix-blend-mode: difference`, `color: #fff`.
- Navbar is `position: relative` (not sticky on this site — it stays at top of header)
- Because the hero is white, navbar text appears black. Over black works section (if it scrolled over) it would appear white.

## 4. Marquee Bars (3 instances)

- `.bar` (track) — `overflow: hidden`, fixed height ~26px, padding 8px vertical
- `.bar-track` — `display: flex; gap: 80px`, items repeated, animated with CSS transform translateX from 0 to -50% infinite linear, duration ~20–30s.
- 16 items in the DOM to ensure continuous loop.
- Colors: top/bottom = black bg / white text, middle "primary" = lime bg / black text.

## 5. Footer Reveal

- Body is taller than content would be; footer is `position: relative` but **preceded by a fixed overlay** (`.bottom-overlay-wrapper`, z-80 covering 100vh).
- As you scroll to bottom, the overlay scrolls out revealing the (fixed-position-looking) footer beneath.
- Simpler recreation: make the pre-footer sit above footer; footer is `position: sticky; bottom: 0` OR body is flex and footer has large negative z — common pattern: footer is tall and stays fixed while content scrolls.
- Simplest: wrap everything except footer in a div; footer is pinned to viewport bottom via `position: sticky` and revealed as prior content is scrolled past.

## 6. Section Alternation

- Sections alternate bg colors: white hero → black works → black carousel → off-white about → black services → lime footer.
- Navbar mix-blend adapts automatically thanks to difference mode.

## 7. Hero Canvas Flow

- `<canvas id="hero-cursor-flow">` — particle/curl noise effect tied to mouse position.
- Structural clone: a minimal canvas with tiny animated particles that react to mouse.

## 8. Scroll-in Animations

- Webflow's IX2 likely fades / translates section content on enter. Not critical for structural clone; lightweight fade-up on IntersectionObserver will suffice.

## 9. Responsive

- Desktop 1440: two-column rows (320 + 1 + 492)
- Mobile ~390: single column stack, image on top, text below
