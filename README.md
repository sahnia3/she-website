# SHE — Shakti Through Harmony & Empowerment

A marketing site for SHE, a nonprofit dedicated to women's empowerment. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion, with pages for Home, About, Events, Donate, and Founder.

## Tech Stack

- [Next.js](https://nextjs.org) 16.2.4 (App Router)
- [React](https://react.dev) 19.2.4
- [TypeScript](https://www.typescriptlang.org) 5
- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://www.framer.com/motion/) 12

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
npm run build   # production build
npm run lint    # run ESLint
```

## Project Structure

- `src/app` — pages, one per route: Home, About, Events, Donate, Founder
- `src/components` — shared UI: `Nav`, `Footer`, `Button`, `EventCard`, `Logo`, `Ornament`, `Reveal`, `SectionHeading`
- `src/lib/events.ts` — event data used by the Events page
