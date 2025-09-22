# Bengal Fish & Bengal Grill — Landing Page

A fast, single-page website for two locations (Surrey & Abbotsford), built with Next.js + Tailwind. Ready for GitHub + Vercel.

## Tech
- Next.js (App Router, TS)
- Tailwind CSS
- Data-driven sections in `/data`

## Setup
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Deploy (Vercel)
1. Push this repo to GitHub.
2. Import to Vercel → Framework: Next.js → Deploy.

## Edit Content
- Locations: `/data/locations.ts`
- Menu highlights: `/data/menu-highlights.ts`
- Reviews: `/data/reviews.ts`
- Branding text: `/data/site.ts`

## Notes
- Replace placeholder images in components with real photos under `/public/images` and switch <div> placeholders to <Image> as needed.
- Add Google Business review links per location in `/data/locations.ts` (field: `reviewsUrl`).

---
© Bengal Fish & Bengal Grill. Built by GrowEasy.
