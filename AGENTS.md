You are an expert React and Vite frontend engineer helping me build the Shuvajit Maitra portfolio website.

Write clean, simple, maintainable code. Prioritize clarity over unnecessary abstraction.

Think like a senior frontend developer.

---

## Project Overview

We are building the personal portfolio website of Shuvajit Maitra, a single-page site that presents his work as a React Native and web developer and lets visitors get in touch.

The site includes:

- Hero with a pinned name/location card, a phone mockup showing the profile photo, and a short intro
- A "release log" timeline of experience and education, with projects listed under each entry
- A toolkit (skills) list
- A contact form that sends email through EmailJS
- Fixed footer links (LinkedIn, GitHub, WhatsApp, email, resume)

The layout follows the structure of https://www.mikes.cv (single centered column, scroll-lit timeline rail), with its own content and hero object.

It is a light-themed, minimal, fully responsive site. Keep the implementation simple and readable.

---

## Tech Stack

- Vite 5
- React 18 with TypeScript 5 (`.tsx`, strict mode)
- React Router DOM 6 (a single `/` route)
- Tailwind CSS 3 with PostCSS and Autoprefixer
- react-icons for all icons
- react-hot-toast for notifications (the `<Toaster>` is configured in `src/main.tsx`)
- @emailjs/browser for the contact form
- ESLint 8 with @typescript-eslint and the react, react-hooks, and react-refresh plugins
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
index.html                  HTML shell, page title, favicon
public/                     Static files served as-is (favicon logo)
src/
  main.tsx                  App entry: router and global Toaster
  vite-env.d.ts             Vite client types (image imports, import.meta.env)
  styles/
    index.css               Tailwind directives and the global Inter and Geist Mono fonts
  layouts/
    MainLayout.tsx          Page wrapper that renders <Outlet />
  pages/
    HomePage.tsx            Puts all sections together in order
  components/
    layout/                 Site chrome shown around the sections (Footer)
    sections/               One file per page section (HeroSection, SkillsSection, ...)
  assets/
    images/
      profile/              Profile photos
      projects/             Project thumbnails and icons
```

**Naming:** folders are lowercase. Component files use PascalCase and match their default export (`ExperienceSection.tsx` exports `ExperienceSection`). Page files end in `Page`, section files end in `Section`, and layout files end in `Layout`. Image files are lowercase and hyphenated.

**pages/** is for composition only. `HomePage.tsx` places the sections in order inside the centered column. It should not contain large UI blocks or data.

**components/sections/** holds one component per section of the page. Each section's root element has an `id` (`Home`, `About` on the intro, `Experience`, `Skills`, `Contact`) so it can be linked with `#id`. There is no navbar.

**components/layout/** holds the fixed `Footer`, which is not a section itself.

**Content data** lives as an array constant at the top of the section component that uses it: `timeline` (jobs, education, and their projects) in `ExperienceSection.tsx`, `skillGroups` in `SkillsSection.tsx`. Follow that pattern. When editing content, change the data array, not the JSX.

Do not create a new component file for a small piece that only one section uses. Split a section into sub-components inside the same file only when it makes the file easier to read.

---

## UI Rules

For any UI task:

- Replicate the provided design exactly.
- Match layout, spacing, padding, font sizes, font hierarchy, colors, border radius, shadows, alignment, and proportions.
- Do not approximate. Do not simplify unless explicitly asked.
- Keep the existing visual language when no design is provided: `canvas` background (#FAF5F5), `ink` headings, `body` text (often at 80% opacity), `mute`/`faint` for secondary text, `rule` for dashed lines, and the blue `accent` only for the timeline rail, lit dots, the CURRENT badge, and focus/hover states (tokens in `tailwind.config.ts`). Inter for text, Geist Mono for small uppercase labels. Everything sits in one centered column, `w-[min(100%_-_3rem,560px)]`. On phones the timeline rail sits inside the column and entries are indented `pl-8`; from `md` up the rail moves into the left gutter with years beside it.
- Every change must work on mobile, tablet, and desktop. Build mobile-first with Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`). No horizontal scrolling at phone width.

---

## Styling Rules

Use Tailwind utility classes in `className`. Do not write custom CSS or inline `style` objects unless Tailwind cannot express the style.

Use the Tailwind version installed in this project. Check `package.json`. Do not upgrade without approval.

Put shared theme values (background images, colors, fonts) in `tailwind.config.ts` under `theme.extend`, not in component files.

### Style Exception List

Use inline styles or `src/styles/index.css` for:

- Values computed at runtime (for example, a width derived from state)
- Third-party components that take style props instead of classes (for example, `Toaster` `toastOptions`)
- Global base styles such as the body font

Everywhere else, use Tailwind.

---

## Image Rule

Put image files in the matching `src/assets/images/` subfolder and import them at the top of the component that uses them:

```tsx
import profileImage from "../../assets/images/profile/shuvajit-maitra-casual.jpg";

<img src={profileImage} alt="Shuvajit Maitra" />
```

- Do not reference `src/assets/` files by string path in JSX. Vite only fingerprints and bundles imported files.
- Only files that must keep a fixed URL, such as the favicon, go in `public/` and are referenced from the root (`/shuvajit-maitra-logo.png`).
- Use descriptive, lowercase, hyphenated names for new files (`bangla-market-screenshot.jpg`). Prefer `.webp` for large photos.
- Always write meaningful `alt` text.
- Delete an image when nothing imports it anymore.

---

## State Management

- Use local React state (`useState`, `useRef`) inside the section component that needs it, for example the rail ref in `ExperienceSection.tsx` and the form in `ContactSection.tsx`.
- There is no global state library. Do not add one. If state must be shared across sections, lift it to `HomePage.tsx` and ask first.
- There is no persistence. Do not add `localStorage` without approval.

---

## TypeScript Rules

- This project is TypeScript with `strict` enabled. Write new files as `.ts` / `.tsx`.
- Type props, state, refs, and event handlers explicitly where inference is not enough. Avoid `any`.
- Define a type for each content data array (for example `TimelineEntry` in `ExperienceSection.tsx`).
- `npm run build` runs `tsc -b` first, so type errors fail the build. Use `npm run typecheck` to check types alone.
- Use function components and hooks. No class components.
- Default-export every component, with the export name matching the file name.
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
6. Make sure the feature works end to end in the browser (`npm run dev`), including the timeline rail filling on scroll and the mobile layout.
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
- The EmailJS service ID, template ID, and public key in `ContactSection.tsx` are public by design. Nothing else sensitive belongs in the frontend.
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
