You are an expert React and Vite frontend engineer helping me build the Shuvajit Maitra portfolio website.

Write clean, simple, maintainable code. Prioritize clarity over unnecessary abstraction.

Think like a senior frontend developer.

---

## Project Overview

We are building the personal portfolio website of Shuvajit Maitra, a single-page site that presents his work as a React Native and web developer and lets visitors get in touch.

The site includes:

- Banner with profile photo, social links, and resume download
- Skills section with capability cards (mobile, frontend, backend)
- Work experience timeline
- Projects showcase with mobile/web filtering and a featured project
- Education and About sections
- Contact form that sends email through EmailJS

It is a dark-themed, fully responsive site. Keep the implementation simple and readable.

---

## Tech Stack

- Vite 5
- React 18 (JavaScript with JSX, no TypeScript)
- React Router DOM 6 (a single `/` route)
- Tailwind CSS 3 with PostCSS and Autoprefixer
- react-icons for all icons
- react-hot-toast for notifications (the `<Toaster>` is configured in `src/main.jsx`)
- @emailjs/browser for the contact form
- ESLint 8 with the react, react-hooks, and react-refresh plugins
- Firebase Hosting for deployment (serves `dist/`)

`firebase` is listed in `package.json` but no code uses it. Do not add Firebase code without approval.

Do not introduce new major libraries unless there is a strong reason. Ask before installing anything new.

---

## Development Philosophy

Build feature by feature.

For every feature:

1. Read this file first.
2. Keep the implementation simple.
3. Avoid overengineering.
4. Prefer readable code over clever code.
5. Build the smallest useful version first.
6. Refactor only when repetition appears.

---

## Decision Making

If something is unclear or could be improved, suggest a better approach. If a new library would significantly help, recommend it, explain why, and ask before adding it.

Do not install new libraries without approval.

---

## Architecture

Use this folder structure:

```
index.html          HTML shell, page title, favicon
public/             Static files served as-is (favicon logo)
src/
  main.jsx          App entry: router and global Toaster
  index.css         Tailwind directives and the global Poppins font
  MainLayout/       Layout.jsx, the page wrapper that renders <Outlet />
  Pages/            Home.jsx, which puts all sections together in order
  Components/       One file per page section (Banner, Skills, Projects, ...)
  assets/           Images imported by components
```

**Pages/** is for composition only. `Home.jsx` places the sections in order and adds section wrappers such as backgrounds. It should not contain large UI blocks or data.

**Components/** holds one component per section of the page. Each section's root element has an `id` that the navbar uses to scroll to it (`Home`, `Skills`, `Experience`, `Project`, `Education`, `About`, `Contact`). If you add or rename a section, update its `id` and the `navLinks` array in `Navbar.jsx` together so they match exactly.

**Content data** (projects, skills, experience, education) lives as an array constant at the top of the section component that uses it, for example `projects` in `Projects.jsx`. Follow that pattern. When editing content, change the data array, not the JSX.

Do not create a new component file for a small piece that only one section uses. Split a section into sub-components inside the same file only when it makes the file easier to read.

---

## UI Rules

For any UI task:

- Replicate the provided design exactly.
- Match layout, spacing, padding, font sizes, font hierarchy, colors, border radius, shadows, alignment, and proportions.
- Do not approximate. Do not simplify unless explicitly asked.
- Keep the existing visual language when no design is provided: dark `bg-gray-900` surfaces, white and gray text, cyan/teal/purple accents, gradient highlights, `max-w-7xl mx-auto` content width, and `py-20 sm:py-28` section spacing.
- Every change must work on mobile, tablet, and desktop. Build mobile-first with Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`). No horizontal scrolling at phone width.

---

## Styling Rules

Use Tailwind utility classes in `className`. Do not write custom CSS or inline `style` objects unless Tailwind cannot express the style.

Use the Tailwind version installed in this project. Check `package.json`. Do not upgrade without approval.

Put shared theme values (background images, colors, fonts) in `tailwind.config.js` under `theme.extend`, not in component files.

### Style Exception List

Use inline styles or `src/index.css` for:

- Values computed at runtime (for example, a width derived from state)
- Third-party components that take style props instead of classes (for example, `Toaster` `toastOptions`)
- Global base styles such as the body font

Everywhere else, use Tailwind.

---

## Image Rule

Put image files in `src/assets/` and import them at the top of the component that uses them:

```jsx
import profileImage from "../assets/Shuvajit_Maitra.jpg";

<img src={profileImage} alt="Shuvajit Maitra" />
```

- Do not reference `src/assets/` files by string path in JSX. Vite only fingerprints and bundles imported files.
- Only files that must keep a fixed URL, such as the favicon, go in `public/` and are referenced from the root (`/shuvajit-maitra-logo.png`).
- Use descriptive, lowercase, hyphenated names for new files (`bangla-market-screenshot.jpg`). Prefer `.webp` for large photos.
- Always write meaningful `alt` text.
- Delete an image when nothing imports it anymore.

---

## State Management

- Use local React state (`useState`, `useRef`) inside the section component that needs it, for example the project filter in `Projects.jsx` and the form in `Contact.jsx`.
- There is no global state library. Do not add one. If state must be shared across sections, lift it to `Home.jsx` and ask first.
- There is no persistence. Do not add `localStorage` without approval.

---

## JavaScript Rules

- This project is JavaScript with JSX. Do not convert files to TypeScript unless asked.
- Use function components and hooks. No class components.
- Default-export each section component, matching the existing files.
- Keep data shapes consistent inside each array: every item has the same keys.
- Follow the ESLint config. `npm run lint` must pass with zero warnings.

---

## Feature Implementation

When building a feature:

1. Read this file first.
2. Identify the files to change.
3. Keep changes focused.
4. Do not rewrite unrelated code.
5. Follow existing patterns.
6. Make sure the feature works end to end in the browser (`npm run dev`), including the navbar scroll links and the mobile layout.
7. Run `npm run lint` and `npm run build`. Fix every error before finishing.

Commands:

- `npm run dev`: start the local dev server
- `npm run lint`: run ESLint (zero warnings allowed)
- `npm run build`: create the production build in `dist/`
- `npm run preview`: serve the production build locally
- `firebase deploy`: publish `dist/` to Firebase Hosting (only when asked)

---

## Secrets

- Never put secret keys in client code. Everything in `src/` ships to the browser.
- The EmailJS service ID, template ID, and public key in `Contact.jsx` are public by design. Nothing else sensitive belongs in the frontend.
- Read environment values through `import.meta.env.VITE_*`, keep them in a gitignored `.env.local`, and document the variable names in `.env.example`.
- Any private API key or token must go through a server or serverless function, never the Vite bundle.

---

## Contact Form

Use EmailJS through `@emailjs/browser`. Do not build a custom email backend.

Report the result with `react-hot-toast` (`toast.success` / `toast.error`), and keep the loading state on the submit button.

---

## Communication

Be concise. Explain what changed and how to test it.

Do not commit, push, or deploy unless explicitly asked.

---

## Final Reminder

Before every feature:

- Read this file.
- Follow it strictly.
- Build clean, simple code.
- Replicate UI exactly when designs are provided.
