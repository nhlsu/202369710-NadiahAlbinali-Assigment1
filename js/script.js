/* =========================================================
   Nadiah Albinali — Portfolio Script
   Features:
   1. Dark / light theme toggle (persisted in localStorage)
   2. Time-of-day greeting message
   3. Smooth scrolling + mobile nav toggle
   4. Contact form validation (client-side only, no backend)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initGreeting();
  initMobileNav();
  initContactForm();
  initFooterYear();
});

/* ---------- 1. Theme toggle ---------- */
function initThemeToggle() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  // Respect a saved preference, otherwise fall back to system preference
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = saved || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      icon.textContent = '☀️';
    } else {
      root.removeAttribute('data-theme');
      icon.textContent = '🌙';
    }
  }
}

/* ---------- 2. Time-of-day greeting ---------- */
function initGreeting() {
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let greeting;

  if (hour < 5) {
    greeting = 'Burning the midnight oil';
  } else if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 17) {
    greeting = 'Good afternoon';
  } else if (hour < 21) {
    greeting = 'Good evening';
  } else {
    greeting = 'Good night';
  }

  greetingEl.textContent = `${greeting}, welcome to my portfolio 👋`;
}

/* ---------- 3. Mobile nav toggle + smooth scroll close ---------- */
function initMobileNav() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu after a link is clicked (smooth scroll is
  // handled natively via CSS `scroll-behavior: smooth` + href anchors)
  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- 4. Contact form validation ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMsg.textContent = '';

    const isNameValid = validateField(nameInput, (v) => v.trim().length >= 2,
      'Please enter your name (2+ characters).');

    const isEmailValid = validateField(emailInput, (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      'Please enter a valid email address.');

    const isMessageValid = validateField(messageInput, (v) => v.trim().length >= 10,
      'Message should be at least 10 characters.');

    if (isNameValid && isEmailValid && isMessageValid) {
      // No backend: simulate a successful submission
      successMsg.textContent = `Thanks, ${nameInput.value.trim()}! Your message has been noted (no backend is connected yet).`;
      form.reset();
    }
  });

  function validateField(input, isValid, message) {
    const errorEl = document.getElementById(`${input.id}-error`);
    const valid = isValid(input.value);
    input.classList.toggle('invalid', !valid);
    errorEl.textContent = valid ? '' : message;
    return valid;
  }
}

/* ---------- Footer year ---------- */
function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
