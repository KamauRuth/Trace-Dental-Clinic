# Trace Dental Clinic

Trace Dental Clinic has been migrated from a static HTML + Express + MongoDB stack to a Next.js app with Supabase-backed persistence.

## What changed

- Frontend is now built with Next.js App Router.
- Appointment and callback submissions now write to Supabase tables.
- MongoDB models and Express routes are legacy only and no longer used by the active app.
- The chatbot remains available through a Next.js API route.

## Tech stack

- Next.js 15
- React 19
- Supabase
- Resend
- Mistral API for the chatbot

## Local setup

1. Install dependencies.
2. Copy `.env.example` to `.env.local` and fill in the values.
3. Create the Supabase tables.
4. Run the app.

The app requires valid `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` values in `.env.local` before appointment or callback submissions will work.

```bash
npm install
npm run dev
```

## Supabase schema

Run the SQL in `supabase/schema.sql` to create:

- `appointments`
- `callback_requests`

## Routes

- `/` - home page
- `/appointment` - appointment form
- `/blogs` - blog page
- `/api/appointment` - appointment submission
- `/api/callback` - callback submission
- `/api/chatbot` - chatbot response endpoint

## Notes on the migration

The active app now lives at the repository root under `app/`, `lib/`, `public/`, and `supabase/`.

