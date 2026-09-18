# Technical Documentation

## Overview

A static, three-section personal portfolio site (About, Projects, Contact)
built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools.

## File Structure

| File | Purpose |
|---|---|
| `index.html` | Page markup: header/nav, hero, About, Projects, Contact, footer. |
| `css/styles.css` | All styling: CSS variables for theming, reset, layout (Flexbox/Grid), components, and responsive breakpoints. |
| `js/script.js` | All interactivity, split into four init functions (see below). |
| `assets/images/` | Placeholder SVGs for the profile photo and project cards (study performance, CPU design, traffic light, football dashboard, upcoming project) — SVG chosen so no binary image assets are needed and files stay lightweight. |
| `docs/ai-usage-report.md` | AI usage documentation. |
| `docs/technical-documentation.md` | This file. |

## Architecture & Key Decisions

### Theming
Theme colors are defined as CSS custom properties on `:root`, with a
`[data-theme="dark"]` override block. `js/script.js` toggles a
`data-theme="dark"` attribute on `<html>` and persists the choice in
`localStorage`, falling back to the OS-level `prefers-color-scheme` media
query on first visit.

### Layout
- **Flexbox** is used for the navbar, hero content, and form.
- **CSS Grid** (`repeat(auto-fit, minmax(260px, 1fr))`) is used for the
  Projects grid so cards reflow automatically without extra media queries.
- Responsive breakpoints at `900px` (tablet: About section stacks) and
  `640px` (mobile: nav collapses into a hamburger menu).

### JavaScript (`js/script.js`)
Organized into four independent functions called on `DOMContentLoaded`:

1. `initThemeToggle()` — reads/writes `localStorage`, toggles the
   `data-theme` attribute, and swaps the toggle button's icon.
2. `initGreeting()` — reads `Date().getHours()` client-side and writes a
   time-of-day greeting into the hero section.
3. `initMobileNav()` — toggles the `.open` class on the nav list and
   updates `aria-expanded` for accessibility; closes the menu on link click.
4. `initContactForm()` — intercepts form submission, runs three validators
   (name length, email regex, message length), toggles `.invalid` classes
   and inline error text, and shows a success message on valid submission.
   No backend is connected — this is client-side validation only, as
   specified by the assignment.

### Accessibility notes
- All interactive controls have `aria-label`/`aria-expanded` where relevant.
- Form inputs use `<label for="">` tied to input `id`s.
- Images include descriptive `alt` text (marked purely decorative elements
  are avoided in favor of meaningful placeholders).
- Color contrast for both themes was chosen to stay comfortably above WCAG
  AA thresholds for body text.

## Known Limitations

- The contact form has no backend — submissions are validated client-side
  only and are not actually sent or stored anywhere.
- Project images are placeholder SVGs; replace them with real screenshots
  in `assets/images/` as projects progress.
- Not yet tested with a screen reader end-to-end — a full accessibility
  audit is a good next step for a later assignment iteration.

## Browser/Device Testing

Manually tested via browser resizing and DevTools device emulation at
common breakpoints (375px, 768px, 1024px, 1440px) in a Chromium-based
browser. No JavaScript console errors during interaction testing (theme
toggle, nav toggle, form validation, smooth scroll).
