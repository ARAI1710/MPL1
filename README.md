# MPL1 - Production Portfolio CMS

> A production-ready portfolio CMS built with **Next.js 15**, **Sanity 3**, and **TypeScript 5** with strict type safety.

## ✨ Features

- **Strict TypeScript** - No `any` types, full type safety
- **Next.js App Router** - Server Components & Server Actions
- **Sanity CMS** - Flexible, headless content management
- **Responsive Design** - Mobile-first with Tailwind CSS
- **Motion & Animation** - Framer Motion + Lenis smooth scroll
- **SEO Optimized** - Complete meta tags and structured data
- **Zero Configuration** - Just add env vars and deploy
- **Production Ready** - Passes `npm run build` with 0 errors

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/ARAI1710/MPL1.git
cd MPL1
npm install
```

### 2. Set Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-07-23
SANITY_API_TOKEN=your_api_token
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Development

```bash
# Terminal 1: Next.js dev server
npm run dev

# Terminal 2: Sanity Studio
npm run sanity:dev
```

Open:
- [http://localhost:3000](http://localhost:3000) - Frontend
- [http://localhost:3333](http://localhost:3333) - Sanity Studio

### 4. Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (site)/                  # Main site routes
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Homepage
│   │   ├── work/                # Portfolio
│   │   ├── services/            # Services
│   │   ├── journal/             # Blog
│   │   └── contact/             # Contact form
│   └── not-found.tsx            # 404 page
│
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Heading.tsx
│   │   └── Text.tsx
│   │
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── StatisticsSection.tsx
│   │   ├── FeaturedProjectsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── ClientsSection.tsx
│   │   └── CTASection.tsx
│   │
│   ├── motion/                  # Animation components
│   │   ├── FadeIn.tsx
│   │   └── StatisticCard.tsx
│   │
│   └── seo/                     # SEO utilities
│       ├── MetadataGenerator.tsx
│       └── SEOHead.tsx
│
├── sanity/
│   ├── config.ts                # Studio configuration
│   ├── schemas/                 # Document schemas
│   │   ├── homepage.ts
│   │   ├── blocks.ts
│   │   ├── documents.ts
│   │   ├── organizations.ts
│   │   ├── settings.ts
│   │   ├── common.ts
│   │   └── index.ts
│   ├── queries/                 # GROQ queries
│   │   └── index.ts
│   └── lib/                     # Sanity utilities
│       ├── client.ts
│       ├── image.ts
│       └── index.ts
│
├── types/
│   ├── sanity.ts                # CMS document types
│   ├── common.ts                # Common types
│   └── index.ts
│
├── hooks/                       # React hooks
│   ├── useScrollFade.ts
│   ├── useMotionValue.ts
│   └── index.ts
│
├── lib/                         # Utilities
│   ├── cn.ts                   # Class name utility
│   ├── utils.ts                # Helper functions
│   └── index.ts
│
├── styles/
│   └── globals.css             # Global styles
│
└── constants/
    └── index.ts                 # App constants
```

## 🛠 Scripts

```bash
# Development
npm run dev              # Start dev server
npm run sanity:dev      # Start Sanity Studio

# Build
npm run build           # Production build
npm start               # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run format          # Format with Prettier
npm run type-check      # Check TypeScript

# Sanity
npm run sanity:build    # Build Sanity Studio
```

## 📦 Tech Stack

| Layer | Tech |
|-------|------|
| **Framework** | Next.js 15 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3 |
| **CMS** | Sanity 3 |
| **Motion** | Framer Motion 11 |
| **Email** | Resend + React Email |
| **Validation** | Zod |
| **Linting** | ESLint 8 |
| **Formatting** | Prettier 3 |

## 📝 CMS Models

### Documents
- **Homepage** - Flexible blocks-based homepage
- **Project** - Portfolio projects with rich content
- **Service** - Service offerings
- **Team** - Team members
- **Journal** - Blog articles
- **Award** - Awards and recognition
- **Client** - Client logos

### Settings
- **Site Settings** - Global configuration
- **Navigation** - Main navigation menu
- **Footer** - Footer configuration

### Blocks
- **Hero Block** - Large hero section
- **Statistics Block** - Stats display
- **Featured Projects Block** - Project showcase
- **Services Block** - Services grid
- **Awards Block** - Awards list
- **Clients Block** - Client logos
- **CTA Block** - Call to action

## ✅ Production Checklist

- ✅ Strict TypeScript (no `any` types)
- ✅ 0 ESLint Errors
- ✅ Clean Build (`npm run build`)
- ✅ Sanity CMS integrated
- ✅ Environment variables configured
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Server Components
- ✅ Static Generation (ISR)
- ✅ Image optimization

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Set environment variables in Vercel dashboard.

### Other Platforms

Any Node.js 18+ hosting works:
- AWS
- Railway
- Render
- DigitalOcean
- Heroku

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 📄 License

MIT

## 👨‍💻 Author

**ARAI1710**
- GitHub: [@ARAI1710](https://github.com/ARAI1710)

---

**Built with ❤️ for production.**
