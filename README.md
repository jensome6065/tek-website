# TEK at UMass Amherst

Official website for **TEK (Technology, Empowerment, & Kinship)**  -  the first professional and social technology community at UMass Amherst.

> Let's redefine tech culture.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes (light / dark)
- Lucide Icons
- Resend + Server Actions (contact form)
- Zod validation

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Resend API key for contact form delivery |
| `CONTACT_TO_EMAIL` | Inbox for form submissions |
| `CONTACT_FROM_EMAIL` | Verified Resend sender |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO metadata |

Without `RESEND_API_KEY`, the contact form still validates and shows success (submissions are logged server-side) so local development works out of the box.

## Project structure

```
src/
  app/                 # Routes (App Router pages)
  components/
    ui/                # Base UI primitives
    layout/            # Navbar, footer
    shared/            # Reusable section components
    home/              # Homepage sections
    contact/           # Contact form
    members/           # Member directory & cards
    events/            # Events filtering
    theme/             # Theme provider & toggle
  lib/
    data/              # Content & copy (easy for officers to update)
    actions/           # Server actions
    validations/       # Zod schemas
public/
  logos/               # Brand assets
  photos/moments/      # Community photo gallery
  videos/instagram/    # Reel MP4s + posters/
  hero.jpg             # Homepage hero image
```

## Updating content

Most copy and listings live in `src/lib/data/`. Officers can update these without touching layout code:

| File | What it controls |
| --- | --- |
| `events.ts` | Events page listings |
| `members.ts` | Executive board & member directory |
| `recruitment.ts` | Recruitment copy, timeline, FAQs |
| `sponsors.ts` / `companies.ts` | Sponsor & company logos |
| `stats.ts` / `about.ts` | Homepage stats & about copy |
| `moments.ts` | Photo gallery (`public/photos/moments/`) |
| `moment-videos.ts` | Video reel (`public/videos/instagram/` + `posters/`) |
| `navigation.ts` | Navbar / footer links |

For photos and videos: add the asset under `public/`, then register it in the matching data file (`src`, `alt`/`label`, dimensions or poster path).

## Deploy

Deploy on [Vercel](https://vercel.com). Add the environment variables in the project settings, then connect the repository.
