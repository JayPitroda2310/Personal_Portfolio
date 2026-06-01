# Jay Pitroda — Portfolio ✦

A cozy, cosmic single-page portfolio for **Jay Pitroda** — UI/UX Designer & Generative AI Developer.
Dreamy night-sky theme (twinkling starfield, drifting planets, a stargazing-cat mascot) inspired by
the HackMIT 2024 aesthetic.

## Tech

- **React 18** + **TypeScript**
- **Vite 5** (build tool / dev server)
- Zero UI dependencies — the starfield, planets, mascot and animations are all hand-built
  (canvas + SVG + CSS), with scroll-reveal via `IntersectionObserver`.

## Develop

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build locally
```

## Structure

```
src/
  data.ts                  # all portfolio content (single source of truth)
  App.tsx                  # composes the page
  index.css                # cosmic theme
  hooks/                   # useInView, useScrollY, usePrefersReducedMotion
  components/
    Starfield.tsx          # canvas twinkling stars + shooting stars
    CosmicDecor.tsx        # parallax planets, moon, sparkles
    Mascot.tsx             # the stargazing-cat SVG
    Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
```

## Editing content

Everything (bio, roles, experience, projects, skills, contact) lives in
[`src/data.ts`](src/data.ts) — edit there, no component changes needed.

## Notes

- The **Download Resume** link points to `Jay_Pitroda_ATS_Resume.pdf` — drop that PDF in
  `public/` (or the project root) so the build includes it.
- LinkedIn / GitHub links in the contact section are placeholders (`#`) — add real URLs in
  `src/components/Contact.tsx`.
