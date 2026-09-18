# AI Usage Report

## Tools Used & Use Cases

**Claude (Anthropic)** was the primary AI tool used for this assignment.

| Use Case | How it was used |
|---|---|
| Code generation | Generated the initial HTML structure (About/Projects/Experience/Contact sections), the CSS layout (Flexbox/Grid, theme variables, responsive breakpoints), and the JavaScript features (theme toggle, greeting message, mobile nav, form validation). |
| Iteration & revision | Used across several rounds of edits: swapping placeholder projects for my real coursework (CPU design for COE 301, traffic light controller for COE 203, a data science project on study performance), marking a project as pending, removing one that no longer applied, adding a new Experience section, and rewriting the About Me text in my own voice. |
| Documentation support | Drafted the initial structure of this `README.md`, `ai-usage-report.md`, and `technical-documentation.md`, which I then reviewed and edited. |
| UI/UX design suggestions | Suggested a card-based layout for the Projects and Experience sections and a sticky navbar with a theme toggle, informed by common portfolio site patterns. |
| Debugging | Used to catch and fix a real bug: in dark mode, some sections weren't picking up the dark background properly during the toggle transition. Also helped troubleshoot Git/GitHub push errors (repository naming, folder nesting from a zip extraction, remote URL mismatches). |
| Automated visual testing | Rather than manually eyeballing the CSS, I had Claude render the page in a headless browser and take screenshots of both the light and dark themes. Comparing those screenshots is what actually caught the dark-mode background bug — a transition timing issue that wasn't obvious from reading the code alone. |

## Benefits & Challenges

**Benefits:**
- Sped up the boilerplate/scaffolding stage significantly — I could focus my
  time on customizing content and layout instead of writing repetitive CSS
  resets and JS event-listener wiring from scratch.
- Helped me apply responsive design patterns (CSS Grid `auto-fit`, `clamp()`
  for fluid typography) that I hadn't used confidently before.
- Made revising content fast — when I decided to change which projects to
  feature or rewrite my About Me section to sound more like me, I could
  iterate in minutes instead of manually editing HTML/CSS by hand each time.
- Helped debug a real Git/GitHub issue I ran into while pushing (a nested
  folder from unzipping, and a repo name typo) instead of me having to guess.

**Challenges:**
- AI-generated first drafts of the "About Me" text and project descriptions
  read as generic and needed multiple rounds of rewriting before they
  actually sounded like me.
- Had to verify AI suggestions rather than trust them outright — for
  example, catching a dark-mode background bug that only showed up when
  actually testing the toggle, not from reading the code alone.
- Some AI assumptions about my personal interests (from an earlier draft)
  weren't accurate, which was a good reminder to double-check any personal
  content the AI generates before keeping it.

## Learning Outcomes

- Reinforced how CSS custom properties (`:root` variables) can drive a full
  dark/light theme without duplicating styles, and how transition timing
  can cause visual bugs if not every element explicitly references the
  themed variables.
- Learned how `prefers-color-scheme` and `localStorage` work together to
  respect both system settings and explicit user choice.
- Practiced writing clean, semantic HTML with accessibility in mind (`alt`
  text, `aria-expanded`, `aria-label`, form labels tied to inputs).
- Got more comfortable with CSS Grid's `repeat(auto-fit, minmax(...))`
  pattern for responsive card layouts without media queries.
- Picked up a clearer understanding of Git workflows: initializing a repo,
  fixing an accidentally nested folder structure, and resolving a
  "repository not found" error caused by a remote URL mismatch.

## Responsible Use & Modifications

- All AI-generated content (project descriptions, About Me text) was
  rewritten in multiple passes with my own real information, interests, and
  voice rather than left as generic placeholder text.
- I reviewed every file line by line, removed unused code, and adjusted
  naming/comments for clarity before committing.
- I manually tested the site (resizing the browser, toggling the theme,
  submitting the contact form with valid/invalid input) rather than trusting
  that the AI-generated code worked without verification, which is how the
  dark-mode background bug was caught and fixed.
- No AI-generated content was submitted unmodified — the structure was
  AI-assisted, but the content, personalization, project selection, and
  final code review are my own.
- Used an automated screenshot-comparison approach (rather than just reading code or clicking around manually) to verify the site actually rendered correctly in both themes — this caught a real bug that code review alone had missed.