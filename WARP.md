# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development commands

This is a Next.js (pages router) app managed with npm (see `package-lock.json`). All commands below should be run from the repo root.

### Install dependencies

- `npm install`

### Run the dev server

- `npm run dev`
  - Starts `next dev` on port 3000.
  - Main entry is `pages/index.tsx`; changes in `pages/**` and `components/**` hot-reload automatically.

### Build and run in production mode

- `npm run build`
  - Runs `next build`.
- `npm start`
  - Runs `next start` using the last build.
  - Make sure required environment variables (e.g. `STRIPE_SECRET_KEY`) are set before running.

### Linting

ESLint is configured via `eslint.config.mjs` using `eslint-config-next`.

- Lint the whole project:
  - `npm run lint`
- Lint specific files (examples):
  - `npm run lint -- pages/donate.tsx`
  - `npx eslint components/donate/StripeZellePanel.tsx`

### Tests

There is currently no `test` script in `package.json` and no `*.test.*` / `*.spec.*` files. Automated tests are not yet configured for this project.

## Architecture overview

### Routing and pages (`pages/`)

- Uses the legacy **pages router** (not the `/app` router).
- Top-level routes:
  - `pages/index.tsx` – marketing-style home page composed from sections in `components/home/`.
  - `pages/donate.tsx` – donation landing page; embeds the Stripe donation panel component.
  - `pages/programs.tsx`, `pages/impact.tsx`, `pages/about.tsx`, `pages/get-involved.tsx`, `pages/contact.tsx` – content-heavy pages following a consistent pattern: hero section + one or more content sections using shared animation and design primitives.
  - `pages/api/create-checkout-session.ts` – Next.js API route that creates a Stripe Checkout Session for donations.
  - `pages/api/hello.ts` – default example API route; currently unused by the main site.
- `_app.tsx`:
  - Imports global styles (`styles/globals.css`) and `slick-carousel` CSS.
  - Loads Google fonts (`Inter`, `DM Sans`, `Archivo Black`) via `next/font/google` and exposes them as CSS variables.
  - Wraps every page in the shared `Layout` component.
- `_document.tsx`:
  - Sets up the base HTML document and attaches Tailwind-style body classes.

### Layout, navigation, and design system

- `components/Layout.tsx`
  - Global shell wrapping every page: header, main content, footer.
  - Applies background and text colors using CSS custom properties defined in `styles/globals.css`.
- `components/layout/Header.tsx`
  - Sticky top navigation with desktop and mobile variants.
  - Uses `next/router` to compute the active nav item and apply an underline / color change.
  - "Donate" is treated as a primary CTA with distinct styling on both desktop and mobile.
- `components/layout/Footer.tsx`
  - Repeats the main navigation links and includes concise mission and contact info.
  - Uses `new Date().getFullYear()` to keep the copyright year current.
- `styles/globals.css`
  - Defines brand-level CSS variables (e.g. `--ov-secondary-green`, `--ov-secondary-green-soft`, `--ov-secondary-green-deep`, `--ov-border`).
  - Sets up Tailwind CSS 4 via `@import "tailwindcss";` and `@tailwindcss/postcss` in `postcss.config.mjs`.
  - Provides layout helpers (`.page-container`, `.page-content`, `.page-footer`) and font utility classes (`.heading-display`, `.font-dm-sans`, `.hero-title`).
  - Contains reusable background treatments (e.g. `.hero-pattern`, `.cta-photo`, `.image-frame`).
- **Styling approach:**
  - Components primarily use Tailwind utility classes, often with CSS variable-backed arbitrary values, e.g. `bg-[var(--ov-secondary-green-soft)]`.
  - When adding new UI, prefer reusing the existing CSS variables and utility classes for visual consistency.

### Home page composition (`components/home/`)

- Home sections are split into focused, reusable components:
  - `HeroSection.tsx` – main hero with CTA buttons linking to `/donate` and `/get-involved`, background imagery via `next/image`, and motion wrappers for entrance animations.
  - `ProgramsSection.tsx` – highlights key programs with cards; links through to `/programs`.
  - `ImpactSection.tsx` – summary impact metrics using `react-countup` and lucide icons; mirrored in more detail on `pages/impact.tsx`.
  - `StoriesSlider.tsx` – testimonial carousel using `react-slick` and the global `SlideUp` animation wrapper.
  - Other sections (`HighlightsRow`, `WhyOneVoiceSection`, `HowSupportWorks`, `AboutStrip`, `PartnersStrip`, `BottomCta`) follow the same pattern: layout via Tailwind, entrance animation via motion helpers, content hard-coded as JSX.
- These components are composed in `pages/index.tsx` to form a long, scrollable landing page.

### Animations and motion system (`components/animation/MotionWrappers.tsx`)

- Centralizes scroll-triggered animations using **framer-motion** and **react-intersection-observer**.
- Core implementation:
  - `InViewWrapper` attaches an IntersectionObserver to a `motion.div` and toggles between `hidden` / `visible` variants when the element enters the viewport.
  - `triggerOnce: true` and `threshold: 0.15` ensure animations run once when ~15% of the element is visible.
- Exported helpers:
  - `SlideUp` – fades in and translates up (`y: 40 -> 0`).
  - `SlideInLeft` – fades in from the left (`x: -10 -> 0`).
  - `SlideInRight` – fades in from the right (`x: 10 -> 0`).
  - `FadeIn` – simple opacity fade.
- **Usage pattern:**
  - Most sections wrap content in one of these components and optionally pass a `delay` prop to stagger elements.
  - When creating new animated sections, prefer these wrappers instead of inlining `framer-motion` logic.

### Donation and Stripe integration

- Client-side donation UI:
  - `components/donate/StripeZellePanel.tsx` is a `'use client'` component that:
    - Manages donation amount state (`amount` + optional `customAmount`) with suggested presets `[25, 50, 100]`.
    - POSTs to `/api/create-checkout-session` with `{ amount }` in USD.
    - Redirects the browser to the returned Stripe Checkout `url` on success.
    - Surfaces validation and network errors inline in the UI.
- Server-side Stripe API route:
  - `pages/api/create-checkout-session.ts`:
    - Expects `process.env.STRIPE_SECRET_KEY` to be set; throws at module load time if missing.
    - Validates HTTP method (POST only) and ensures a positive `amount`.
    - Creates a Checkout Session in `payment` mode with a single line item:
      - `unit_amount` in **cents** is computed as `Math.round(amount * 100)`.
      - Product name is fixed: "Donation to One Voice Foundation Inc.".
    - Uses the `Origin` header (defaulting to `http://localhost:3000`) to build `success_url` and `cancel_url` pointing back to `/donate?status=success` or `/donate?status=cancelled`.
- **Environment and secrets:**
  - The Stripe Node SDK is instantiated once at module scope with an explicit `apiVersion`.
  - `STRIPE_SECRET_KEY` must be provided via environment configuration (commonly `.env.local` in development). Do not open or commit env files when editing this project.

### Images and external assets

- `next.config.ts` configures `next/image` to allow remote images from:
  - `images.unsplash.com`
  - `res.cloudinary.com`
- Many sections use `next/image` with Cloudinary URLs; if you need to introduce another image host, update `images.remotePatterns` accordingly.

### TypeScript configuration and module resolution

- `tsconfig.json`:
  - Enables strict TypeScript (`"strict": true`) with no emit.
  - Uses `"moduleResolution": "bundler"` and `"jsx": "react-jsx"` (Next 16 defaults).
  - Defines a root alias: `@/*` -> `./*`.
    - Most imports from project code use this alias, e.g. `"@/components/Layout"`, `"@/components/home/HeroSection"`.
    - When creating new modules, prefer using the `@/` alias instead of long relative paths.

### Other notes

- ESLint configuration (`eslint.config.mjs`) composes Next's `core-web-vitals` and `typescript` configs, and globally ignores build artifacts like `.next/**`, `out/**`, and `build/**`.
- Tailwind is configured via `postcss.config.mjs` using the `"@tailwindcss/postcss"` plugin; there is no standalone `tailwind.config.*` file because Tailwind v4 relies on defaults and inline configuration.
- The `.next/` directory is present for builds; it should be treated as generated output and not edited directly.
