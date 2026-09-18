# AI Usage Report

## Tools Used & Use Cases

**Claude (Anthropic)** was the primary AI tool used for this assignment.

| Use Case | How it was used |
|---|---|
| Code generation | Generated the initial HTML structure (About/Projects/Contact sections), the CSS layout (Flexbox/Grid, theme variables, responsive breakpoints), and the JavaScript features (theme toggle, greeting message, mobile nav, form validation). |
| Documentation support | Drafted the initial structure of this `README.md`, `ai-usage-report.md`, and `technical-documentation.md`, which I then reviewed and edited. |
| UI/UX design suggestions | Suggested a card-based layout for the Projects section and a sticky navbar with a theme toggle, informed by common portfolio site patterns. |
| Debugging | Used to check the mobile nav toggle logic and the contact form's regex-based email validation. |

## Benefits & Challenges

**Benefits:**
- Sped up the boilerplate/scaffolding stage significantly — I could focus my
  time on customizing content and layout instead of writing repetitive CSS
  resets and JS event-listener wiring from scratch.
- Helped me apply responsive design patterns (CSS Grid `auto-fit`, `clamp()`
  for fluid typography) that I hadn't used confidently before.
- Useful as a sounding board for structuring documentation clearly.

**Challenges:**
- AI-generated code sometimes needed edits to match my actual project
  content (e.g., swapping placeholder project descriptions for my real
  Football Analytics Dashboard and Chess Coach projects).
- Had to double-check that the theme toggle and localStorage logic actually
  worked as expected across page reloads, rather than assuming the
  generated code was correct.

## Learning Outcomes

- Reinforced how CSS custom properties (`:root` variables) can drive a full
  dark/light theme without duplicating styles.
- Learned how `prefers-color-scheme` and `localStorage` work together to
  respect both system settings and explicit user choice.
- Practiced writing clean, semantic HTML with accessibility in mind (`alt`
  text, `aria-expanded`, `aria-label`, form labels tied to inputs).
- Got more comfortable with CSS Grid's `repeat(auto-fit, minmax(...))`
  pattern for responsive card layouts without media queries.

## Responsible Use & Modifications

- All AI-generated content (project descriptions, "about me" text) was
  rewritten with my own real information rather than left as generic
  placeholder text.
- I reviewed every file line by line, removed unused code, and adjusted
  naming/comments for clarity before committing.
- I manually tested the site (resizing the browser, toggling the theme,
  submitting the contact form with valid/invalid input) rather than trusting
  that the AI-generated code worked without verification.
- No AI-generated content was submitted unmodified — the structure was
  AI-assisted, but the content, personalization, and final code review are
  my own.
