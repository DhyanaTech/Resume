# Steve Dickens Resume Website

**From Building Structures to Building Software**

A modern, professional resume website showcasing Steve Dickens' unique journey from construction to software development. Built with Next.js 16, TypeScript, and optimized for both recruiters and search engines.

## ✨ Features

### Architecture
- **Multi-Page Application**: Hybrid approach with dedicated pages for About, Experience, and Projects
- **SEO Optimized**: Structured data (JSON-LD), dynamic sitemap, robots.txt, and comprehensive meta tags
- **Fast & Responsive**: Server-side rendering, optimized images, and mobile-first design
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels

### User Experience
- **Smooth Animations**: Lenis smooth scrolling + Framer Motion scroll-triggered animations
- **Interactive Navigation**: Active page indicators and smooth transitions
- **Content-Driven**: All content sourced from Markdown files for easy updates
- **Professional Design**: Clean, modern interface with consistent branding

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion + Lenis
- **Content**: Markdown processing with gray-matter + remark/rehype
- **Icons**: Lucide React
- **Hosting**: Vercel

## Color Palette

- **Denim Blue** (#457B9D) - Primary/Anchor
- **Sunflower Yellow** (#F4D35E) - Accent/Energy
- **Bamboo Green** (#2A9D8F) - Secondary/Natural
- **Cream** (#F5F5E0) - Base/Background

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles with custom color palette
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with contact info
│   ├── HeroSection.tsx     # Hero with headshot placeholder
│   ├── AboutSection.tsx    # About section
│   ├── TimelineSection.tsx # Career timeline
│   ├── TimelineNav.tsx     # Scroll progress navigation
│   ├── ProjectsSection.tsx # Portfolio projects
│   ├── ContentSection.tsx  # Reusable content sections
│   └── SmoothScroll.tsx    # Lenis smooth scroll provider
├── lib/
│   ├── markdown.ts         # Markdown processing utilities
│   ├── types.ts            # TypeScript type definitions
│   └── constants.ts        # Contact info and site config
├── docs/
│   ├── 0-resume.md         # Resume/CV
│   ├── 1-intro.md          # Introduction
│   ├── 2-about.md          # About section
│   ├── 3-15-*.md           # Career timeline entries
│   ├── 16-thoughts-on-ai.md
│   ├── 17-future.md
│   ├── 18-summary.md
│   └── implementation-plan.md  # Development tracking
└── public/
    └── headshot.jpg        # (Add your headshot here)
```

## Adding Your Headshot

To add your headshot photo:

1. Place your image at `/public/headshot.jpg`
2. The image will automatically appear in the Hero section
3. Recommended size: 1000x1000px (square aspect ratio)
4. Supported formats: JPG, PNG, WebP

## Customizing Content

All content is stored in Markdown files in the `/docs` folder:

- Edit existing `.md` files to update content
- Content is automatically processed and displayed
- Files are sorted by the number prefix (e.g., `1-intro.md`, `2-about.md`)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure the custom domain: `stevedickensresume.com`
4. Deploy automatically on every push to main

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Development Notes

- **Smooth Scroll**: Uses the `lenis` package for buttery-smooth scrolling
- **Animations**: Framer Motion with `useInView` hooks for scroll-triggered animations
- **Color System**: Custom colors are defined in `app/globals.css` using Tailwind CSS v4 syntax
- **Timeline Navigation**: Fixed sidebar visible on desktop, hidden on mobile
- **Contact Form**: Skipped - contact info (email/phone) displayed in footer

## Implementation Progress

See `docs/implementation-plan.md` for detailed development progress and changelog.

## 📫 Contact

- **Email**: stevedickens865@gmail.com
- **LinkedIn**: [Steven Dickens](https://www.linkedin.com/in/steven-dickens-1b1652218/)
- **Location**: Hickory, NC

## 🚀 Featured Projects

- **[DhyanaTech](https://www.dhyanatech.com)** - Parent company and ecosystem of mindful business software
- **[DhyanaPM](https://pm.dhyanatech.app)** - Project management application emphasizing clarity over complexity
- **[DhyanaCFO](https://cfo.dhyanatech.app)** - Financial management tool for small businesses with intuitive dashboards

---

© 2025 Steve Dickens. All rights reserved.
