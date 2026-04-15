# Portfolio Next.js — Developer Guide

Personal portfolio website for Louis Nguyen, built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15.1.3 (App Router, React 19)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v3 with custom dark theme + `tailwindcss-animate`
- **Animations**: Framer Motion — `whileInView` + `viewport={{ once: true }}` for scroll animations
- **Icons**: Lucide React
- **UI primitives**: Shadcn/ui (Button, Input, Textarea) via Radix UI
- **Contact form**: Formspree endpoint `f/mleagwej`
- **Fonts**: Poppins (body), Playfair Display (headings/serif)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout — Navbar, SocialLinks, Footer, font vars
│   ├── page.tsx          # Main page — composes all section components in order
│   └── globals.css       # Tailwind directives + HSL CSS variable theme (light/dark)
├── components/
│   ├── navbar.tsx        # Fixed top nav with mobile hamburger ('use client')
│   ├── hero.tsx          # Hero section with animated greeting ('use client')
│   ├── about.tsx         # Profile photo + bio with slide-in animations ('use client')
│   ├── education.tsx     # Education history cards ('use client')
│   ├── skills.tsx        # 4-category skill grid with hover lift ('use client')
│   ├── experience.tsx    # Work experience bullet cards ('use client')
│   ├── projects.tsx      # Personal projects grid ('use client')
│   ├── contact.tsx       # Formspree contact form ('use client')
│   ├── social-links.tsx  # GitHub & LinkedIn icon links
│   └── ui/
│       ├── button.tsx    # Shadcn button (CVA variants)
│       ├── input.tsx     # Shadcn input
│       └── textarea.tsx  # Shadcn textarea
└── lib/
    └── utils.ts          # cn() — clsx + tailwind-merge helper
```

## Page Sections (in render order)

| Section | Component | Background |
|---|---|---|
| Hero | `hero.tsx` | `from-purple-900 via-indigo-900 to-gray-900` gradient |
| About | `about.tsx` | `bg-gray-800` |
| Education | `education.tsx` | `bg-gray-900` |
| Skills | `skills.tsx` | `bg-gray-800` |
| Experience | `experience.tsx` | `bg-gray-900` |
| Projects | `projects.tsx` | `bg-gray-800` |
| Contact | `contact.tsx` | `bg-gray-900` |

Sections intentionally alternate between `gray-800` and `gray-900` for visual separation.

## Animation Patterns

All animated components use `'use client'` and import from `framer-motion`.

- **Hero** — `initial/animate` (visible on load): text fades up with stagger delays
- **Sections** — `whileInView` + `viewport={{ once: true }}`: triggers once on scroll entry
- **Cards** — `initial={{ opacity: 0, y: 40 }}` staggered by index (`delay: i * 0.1`)
- **Experience bullets** — secondary stagger within each card (`delay: i * 0.15 + j * 0.07`)
- **Skill/Project cards** — `whileHover={{ y: -6 }}` for lift effect

## Development

```bash
npm run dev    # Dev server with Turbopack (http://localhost:3000)
npm run build  # Production build — run before deploying
npm run lint   # ESLint check
```

## Theming

Dark mode is applied globally via `className="dark"` on `<html>` in `layout.tsx`. Colors are
HSL CSS variables defined in `globals.css`. The purple accent color is applied directly via
Tailwind (`text-purple-400`, `bg-purple-600`, etc.) rather than through CSS variables.

## Adding a New Section

1. Create `src/components/my-section.tsx` with `'use client'` and `motion.*` wrappers
2. Import and render it in `src/app/page.tsx` (maintain alternating bg-gray-800/900 pattern)
3. Add a nav anchor to the `navItems` array in `src/components/navbar.tsx`
4. Give the `<section>` an `id` matching the navbar `href`
