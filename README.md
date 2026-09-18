# Nadiah Albinali — Personal Portfolio (Assignment 1)

A simple, responsive personal portfolio site built as the foundation of my
professional portfolio, for the *Foundation & AI Integration* assignment.

**Live site:** _add your GitHub Pages / Netlify / Vercel link here after deploying_

## Project Description

This is a single-page portfolio with three core sections:

- **About Me** — a short intro and quick facts about me.
- **Projects** — cards for coursework and portfolio projects: a data science
  project on factors affecting study performance, a CPU design (COE 301), a
  traffic light controller (COE 203), a Football Analytics Dashboard
  (pending), and a computer-vision project in progress.
- **Experience** — cards summarizing my roles across student
  organizations and activities.
- **Contact** — a client-side-only form (Name, Email, Message) with
  validation and no backend.

It's built with plain **HTML, CSS, and JavaScript** — no frameworks — and is
fully responsive across desktop, tablet, and mobile.

### Interactive features (JavaScript)

- 🌙 **Dark / light theme toggle**, saved to `localStorage` so it persists
  between visits.
- 👋 **Time-of-day greeting** above the hero heading (morning/afternoon/
  evening/night, based on the visitor's local time).
- 📱 **Mobile navigation menu** with a hamburger toggle.
- ✅ **Contact form validation** (name length, email format, message length)
  with inline error messages — no backend required.
- Smooth scrolling to sections via anchor links.

## Folder Structure

```
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Setup Instructions (Run Locally)

No build tools or dependencies are required.

1. Clone or download this repository.
2. Open `index.html` directly in your browser, **or** serve it locally for
   the best experience:
   ```bash
   # Python 3
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```
3. That's it — no `npm install`, no build step.

## Deployment (optional)

To deploy for free on **GitHub Pages**:

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under "Source," select the `main` branch and `/ (root)` folder.
4. Save — your site will be live at
   `https://<username>.github.io/<repo-name>/` within a minute or two.

## AI Usage

AI assistance (Claude) was used throughout this project for scaffolding
HTML/CSS/JS, suggesting responsive layout patterns, and reviewing code
quality. Full details, including what was modified and why, are documented
in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

## Author

**Nadiah Albinali** — Computer Science student, King Fahd University of
Petroleum and Minerals (KFUPM), focused on ML and data science.
