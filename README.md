# TEK at UMass Amherst

Official website for **TEK (Technology, Empowerment, & Kinship)**  -  the first professional and social technology community at UMass Amherst.

> Let's redefine tech culture.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
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
    community/         # Community page components
    events/            # Events filtering
    resources/         # Resources page components
  lib/
    data/              # Content & copy (easy for officers to update)
    actions/           # Server actions
    validations/       # Zod schemas
public/logos/          # Brand assets
```

## Updating content

Most copy and listings live in `src/lib/data/`. Future officers can update events, board members, stats, and FAQs there without touching layout code.

## Deploy

Deploy on [Vercel](https://vercel.com). Add the environment variables in the project settings, then connect the repository.
