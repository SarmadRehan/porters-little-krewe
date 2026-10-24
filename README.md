# Porters Little Krewe Daycare: Landing Page Prototype

A demo site for Porters Little Krewe Daycare, a child-care center opening soon at 8819 S Claiborne
Ave in New Orleans, owned by Cody Porter. It is built as a client prototype and is not the official
website; banners at the top and bottom of the page say so. It is unlisted (`noindex`) and meant to be
shared only with Porters Little Krewe.

Live demo: https://sarmadrehan.github.io/porters-little-krewe/

## Main features

- **"Ask the Krewe" chatbot** (the main feature). A floating, scripted helper with suggested-question
  chips and free text, answered by simple keyword matching (`src/lib/kreweBot.ts`). There is no AI
  model, no API key and no network call on the page.
  - Ages, hours, location and opening ("opening soon, licensing pending") come from the brief's facts.
  - Tuition: "We'll share tuition with families on our waitlist", plus a waitlist button. It never
    gives a number.
  - "Can I tour?" opens the tour form.
  - Anything else, including questions about meals, staff, ratios, curriculum or capacity: "Great
    question! Leave your name and number and Cody will get back to you", then the demo panel.
- **Demo waitlist and tour form** (`src/components/WaitlistForm.tsx`). Parent name, child's age,
  desired start (or tour) date, preferred contact and "What matters most to you in a daycare?", which
  echoes their Sept 30 Instagram post. The form has no action and makes no network request:
  submitting only opens the demo panel.
- **One honest demo panel** (`src/components/KreweProvider.tsx`) for the form, the chat and any
  dead end: "This is a demo. For now, call or text 504-947-5082 or DM @porterslittlekrewe", with
  Call, Text and Instagram buttons.
- Cody's story, the toddler-classroom photos with a "Preschool room coming next" card, the age groups,
  and hours and location with a map embedded by street address.

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript (strict) and Tailwind CSS v4
- Fonts via `next/font`: Fredoka (headings, rounded like the logo lettering) and Nunito (body)
- Hosted on GitHub Pages from the `gh-pages` branch

## Project layout

```
src/
  app/            layout, page, global styles (palette, flyer stripe, sunny glow), icons
  assets/images/  logo and the two toddler-classroom photos from their Instagram, imported statically
  components/     one component per page section, plus the chatbot, the demo panel and illustrations
  data/           krewe.ts: facts, age groups, story, photos (with the source of each)
  lib/            kreweBot.ts: the scripted chatbot's answers and keyword rules
```

## Content sources

Facts come from the verified table in the demo brief (checked 2026-10-24):

| Fact | Source |
| --- | --- |
| Porters Little Krewe Daycare, New Orleans | IG bio; City of New Orleans business license (Child Day Care Services, start 2026-09-01) |
| 8819 S Claiborne Ave, New Orleans, LA 70118 | City license data; Google Maps (building only) |
| Ages 6 weeks to 10 years | IG bio |
| Hours 6:30 AM – 6:00 PM | IG post, 2026-09-26 (days of the week not given, so none are shown) |
| "Opening Soon \| Licensing Pending" | IG bio |
| Phone 504-947-5082 | IG bio (the city license lists (504) 319-3160; the brief says to use the IG number) |
| Cody Porter's story: helping their nanny with a home daycare, then the dream of a center | IG post, 2026-10-01 |
| Toddler classroom being set up, preschool classroom next | IG post, 2026-10-06 |
| "From tiny first steps to big learning adventures" | IG post, 2026-09-26 |
| Asking parents what matters most when choosing a daycare | IG post, 2026-09-30 |

- **Name**: written "Porters" without an apostrophe, as on their logo, flyers and Instagram name
  (Sarmad's choice; the brief wrote "Porter's").
- **Photos**: only the two toddler-classroom photos from their own Instagram carousel (no children
  in them) and their logo. Cody's "meet the owner" photo is left out, per the brief's photo list.
  Everything else is a flat illustration drawn in the logo's colors, never a photo of a child.
- **Left out on purpose**: tuition, staff-to-child ratios, curriculum, meals, capacity, the
  unconfirmed "110 children" figure, and any "licensed" claim beyond "Licensing pending". Their
  flyers mention meals and staff and give two different toddler age ranges (1–3 and 2–3 years), so
  the age groups are names only. Their parent-testimonial post is not used.
- **Colors**: brand colors only, from the logo: royal blue `#062f8f`, red `#cf1519`, sunshine yellow
  `#fbc10a` and white, matching the ❤️💙💛 the brief asks for.

No prices, tuition, ratings, review quotes or testimonials are shown.

## Development

```bash
npm ci
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static site in ./out
npm run preview   # serve ./out locally
```

## Deployment (GitHub Pages)

```bash
npm run deploy
```

This builds with `NEXT_PUBLIC_BASE_PATH=/porters-little-krewe` (the Pages project path), adds
`.nojekyll` so the `_next/` folder is served, and pushes `./out` to the `gh-pages` branch. If the
repository is renamed, update the base path in the `deploy` script.

## Notes

- Nothing on the page sends data anywhere. The only third-party request is the Google Maps embed of
  the street address; fonts are self-hosted by `next/font`.
- The daycare isn't open yet, so there is no live "open now" status; the page says "Opening soon ·
  Licensing pending" instead.
- Yellow fails contrast as text on white, so it is only used as a fill under blue text (7:1); red
  text on white is 5.6:1.
- The page is marked `noindex` so the demo never competes with the business's own listings.
