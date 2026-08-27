# SHE

The public website for SHE, a nonprofit/community organization. It's a Next.js site with pages for About, Events (with Square-checkout ticketing), Donate, and a Founder profile.

## What this is

SHE is a public marketing site for a nonprofit/community organization, built with Next.js. It has a home page plus four content pages: About, Events, Donate, and Founder. Ticket sales for events are handled through external Square checkout links — each event in `src/lib/events.ts` carries a `squareCheckoutUrl` field pointing to a `checkout.square.site` page — rather than any in-app payment flow, so no payment code lives in this repo.

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

## Notable details

- The `image` field on every seed event in `src/lib/events.ts` is currently an empty string. `EventCard.tsx` checks `event.image` and, when it's falsy, renders a "SHE" script-text fallback instead of an `<Image>` — so the blank images are expected placeholder state, not a bug.
- `Reveal.tsx` (with its `RevealGroup`/`RevealChild` siblings) is a framer-motion wrapper used across pages for scroll-triggered fade/rise entrance animations. `Ornament.tsx` renders the decorative corner SVG motifs (plus a `DividerOrnament` variant) seen on section headers and cards like `EventCard.tsx`.
