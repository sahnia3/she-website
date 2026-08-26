# SHE

The public website for SHE, a nonprofit/community organization. It's a Next.js site with pages for About, Events (with Square-checkout ticketing), Donate, and a Founder profile.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [framer-motion](https://motion.dev)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Other scripts:

```bash
npm run build
npm run lint
```

## Project Structure

- `src/app/` — routes, using the App Router: `page.tsx` (home), `about/`, `donate/`, `events/`, `founder/`
- `src/components/` — shared UI: `Button.tsx`, `EventCard.tsx`, `Footer.tsx`, `Logo.tsx` (SVG logo), `Nav.tsx`, `Ornament.tsx`, `Reveal.tsx` (motion wrapper), `SectionHeading.tsx`
- `src/lib/events.ts` — the typed `Event[]` array that drives the events page (id, title, date, location, description, image, price, `squareCheckoutUrl` for Square checkout links)
