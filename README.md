# Umar Shahid — Personal Portfolio

A modern, premium personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

Update your personal links and details in:

- **`src/config/site.ts`** — Email, LinkedIn, GitHub, Upwork, site URL, OG image
- **`src/data/projects.ts`** — Project GitHub and live demo URLs

## Project Structure

```
src/
├── app/              # Next.js app router (layout, page, styles)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   └── ui/           # Reusable UI components
├── config/           # Site configuration & placeholders
├── data/             # Content data (projects, skills, experience)
└── lib/              # Utilities
```

## Features

- Dark modern premium design
- Fully responsive with mobile navigation
- Smooth scroll animations (Framer Motion)
- SEO-friendly metadata & Open Graph tags
- Accessible markup and keyboard navigation
- Configurable contact links and project URLs

## Deploy

Deploy easily on [Vercel](https://vercel.com):

```bash
npm run build
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons
