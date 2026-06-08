# Full Stack Developer - Marketing Website

A polished, production-ready marketing website for a full-stack developer, built with modern web technologies.

## 🚀 Tech Stack

- **Vite** - Lightning fast build tool
- **React 18** - Latest React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful, consistent icons

## 🎨 Design System

### Color Palette
- **Primary:** #0F172A (slate-900) - Headings, navigation
- **Secondary:** #1E40AF (blue-800) - Links, secondary buttons
- **Accent:** #0EA5E9 (sky-500) - CTA buttons, highlights
- **Background:** #FFFFFF - Page background
- **Surface:** #F8FAFC (slate-50) - Cards, alternating sections
- **Text:** #1E293B (slate-800) - Body text
- **Text Muted:** #64748B (slate-500) - Captions, labels

### Typography
- **Font Family:** Inter (Google Fonts)
- **Hero Heading:** text-5xl → text-7xl (responsive)
- **Section Heading:** text-4xl → text-5xl (responsive)
- **Body Text:** text-lg (18px)

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation with mobile menu
│   ├── HeroSection.tsx  # Hero with tech stack badges
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ProcessSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── lib/
│   └── siteContent.ts   # All site copy and data (typed)
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind
```

## ✨ Features

- **Responsive Design** - Mobile-first approach, perfect on all devices
- **Smooth Scrolling** - Anchor navigation with smooth scroll
- **Scroll Animations** - Subtle reveal animations on scroll
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- **Type-Safe** - Full TypeScript coverage
- **Performance Optimized** - Fast load times, optimized assets
- **SEO Ready** - Proper meta tags, Open Graph, semantic structure

## 🎯 Sections

1. **Hero** - Headline, subtext, dual CTAs, tech stack badges, credibility proof
2. **Services** - 5 service offerings with icons and use cases
3. **Projects** - 3 case studies with problem/solution/results
4. **Process** - 4-step timeline from discovery to launch
5. **About** - Personal narrative + expertise breakdown
6. **Contact** - Full contact form with timeline/budget selectors
7. **Footer** - Quick links and social media

## 🎨 Anti-AI-Slop Principles

This site avoids common AI design tells:
- ✅ Asymmetric, left-aligned layouts (not everything centered)
- ✅ Specific, benefit-led copy (no vague "innovative solutions")
- ✅ Varied card sizes and layouts (not uniform grids)
- ✅ Restrained color usage (accent used strategically)
- ✅ Real depth and detail (shadows, borders, hover states)
- ✅ Generous white space and vertical rhythm
- ✅ Strong typographic hierarchy

## 📝 Content Management

All site content is centralized in `src/lib/siteContent.ts`. To update:
- Headings, descriptions, CTAs
- Service offerings and use cases
- Project case studies
- Process steps
- Contact form configuration

Simply edit the content file - no need to touch component code.

## 🚀 Deployment

This site is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting provider

Build command: `npm run build`  
Output directory: `dist/`

---

**Built with craft, not just code.** 🎨
