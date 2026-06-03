# Student Dashboard

A futuristic student learning dashboard built for the Frontend Intern Challenge.

## Tech Stack

* Next.js App Router
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React
* Vercel

## Features

* Dark mode dashboard UI
* Bento-style grid layout
* Dynamic course cards from Supabase
* Server Component data fetching
* Loading skeleton using loading.tsx
* Graceful error handling
* Framer Motion card animations
* Responsive layout

## Architecture

The dashboard uses Next.js App Router and Server Components for data fetching. Course data is fetched from Supabase and displayed dynamically. Framer Motion is used for animations through reusable components.

## Environment Variables

Create a `.env.local` file and add:

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

## Deployment

The application is deployed using Vercel.

## Challenges Faced

The main challenges were configuring Supabase environment variables correctly, integrating database data with Server Components, and deploying the application on Vercel.
