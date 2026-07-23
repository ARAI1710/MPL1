# MPL1 - Portfolio CMS

A production-ready portfolio and case study CMS built with Next.js 15, Sanity CMS, and TypeScript.

## Features

- ✅ Strict TypeScript configuration
- ✅ Server Components and Server Actions
- ✅ Sanity CMS integration
- ✅ Responsive design with Tailwind CSS
- ✅ Motion and animations with Framer Motion
- ✅ Smooth scrolling with Lenis
- ✅ Email templates with React Email + Resend
- ✅ SEO optimized
- ✅ Zero configuration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/ARAI1710/MPL1.git
cd MPL1
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-07-23
SANITY_API_TOKEN=your_api_token
RESEND_API_KEY=your_resend_key
```

### Development

```bash
# Start Next.js dev server
npm run dev

# In another terminal, start Sanity studio
npm run sanity:dev
```

Open [http://localhost:3000](http://localhost:3000) and [http://localhost:3333](http://localhost:3333).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   ├── portfolio/         # Portfolio components
│   ├── forms/             # Form components
│   ├── motion/            # Motion/animation components
│   ├── seo/               # SEO components
│   └── providers/         # Context/providers
├── sanity/                # CMS configuration
│   ├── schemas/           # Document schemas
│   ├── queries/           # GROQ queries
│   ├── lib/               # Sanity utilities
│   └── studio/            # Studio configuration
├── types/                 # TypeScript types
├── hooks/                 # React hooks
├── lib/                   # Utility functions
├── styles/                # Global styles
└── constants/             # Application constants
```

## Build Status

```
✓ npm run build
✓ 0 TypeScript Errors
✓ 0 ESLint Errors
```

## License

MIT
