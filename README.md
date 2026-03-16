# SHINE Foundation Portfolio Website

A modern, premium portfolio website showcasing startups from SHINE Foundation's Acceleration (KAN) and Incubation (Genesis) programs.

## 🎯 Features

### Programs
- **Acceleration Program (KAN)**: For growth-stage startups ready to scale
- **Incubation Program (Genesis)**: For early-stage startups validating their ideas

### Startup Portfolio
- Beautiful, responsive startup cards with logos, sectors, descriptions, and founder info
- Detailed startup profiles with full descriptions and website links
- Advanced filtering by program and sector
- Full-text search across startup names, descriptions, and founders
- Mobile-first responsive design
- Dark/Light theme support

### Design
- Premium, modern aesthetic inspired by Accel Atoms
- Smooth animations and transitions
- Glass-morphism effects and gradients
- Custom color scheme (Deep Blue & Gold)
- Semantic design tokens with CSS variables

## 📁 Project Structure

```
app/
├── page.tsx                 # Home page with program previews
├── portfolio/
│   ├── page.tsx            # Portfolio listing with filters
│   ├── layout.tsx          # Portfolio layout metadata
│   └── [id]/
│       ├── page.tsx        # Individual startup detail page
│       └── not-found.tsx   # 404 page for invalid startups
├── layout.tsx              # Root layout with navigation and footer
└── globals.css             # Global styles and theme tokens

components/
├── Navigation.tsx          # Top navigation bar with mobile menu
├── Footer.tsx              # Footer with links and info
├── StartupCard.tsx         # Reusable startup card component
└── PortfolioFilters.tsx    # Filter sidebar component

lib/
└── startups.ts             # Startup data and TypeScript interfaces

public/
└── shine-logo.jpg          # SHINE Foundation logo
```

## 🎨 Design System

### Colors
- **Primary**: Deep Blue (`oklch(0.35 0.18 280)`)
- **Secondary**: Gold (`oklch(0.75 0.15 35)`)
- **Accent**: Purple (`oklch(0.55 0.2 280)`)
- **Neutral**: Grays and off-whites with proper dark mode support

### Typography
- **Font Family**: Geist (sans-serif), Geist Mono (monospace)
- **Headings**: Bold weights, larger sizes
- **Body**: Regular weight, optimized line-height for readability

## 🚀 Getting Started

### Installation
```bash
npm install
# or
pnpm install
```

### Running Locally
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

## 📝 Adding Startups

Edit `lib/startups.ts` to add new startups:

```typescript
{
  id: '10',
  name: 'StartupName',
  logo: '🚀', // Emoji or icon
  cohortYear: 2025,
  sector: 'AI / Developer Tools', // Choose from predefined sectors
  shortDescription: '2-3 line description',
  fullDescription: 'Detailed description for the detail page',
  founders: ['Founder Name'],
  website: 'https://website.com',
  program: 'acceleration' | 'incubation', // Which program
}
```

### Available Sectors
- AI / Developer Tools
- HealthTech
- AgriTech
- FinTech
- EdTech
- Clean Energy
- E-Commerce
- Cybersecurity
- Analytics / Data

## 🔧 Customization

### Changing Colors
Edit the color tokens in `app/globals.css`:
```css
:root {
  --primary: oklch(...);
  --secondary: oklch(...);
  --accent: oklch(...);
}
```

### Adding New Pages
Create new routes in `app/`:
```
app/events/page.tsx
app/partnership/page.tsx
app/about/page.tsx
```

### Updating Navigation
Edit the `navItems` array in `components/Navigation.tsx`

## 📱 Responsive Design

- **Mobile**: Single column cards, hamburger menu
- **Tablet**: Two column grid, adjustable sidebar
- **Desktop**: Three column grid, sticky sidebar filters

## 🎭 Dark/Light Mode

The site includes built-in dark mode support via CSS custom properties. The theme automatically adapts to system preferences.

## 🔍 SEO

- Dynamic metadata for all pages
- Open Graph meta tags for social sharing
- Semantic HTML structure
- Mobile-friendly responsive design

## 📊 Performance

- Next.js 16 with Turbopack
- Optimized images with Next.js Image component
- Client-side filtering for instant search results
- Minimal JavaScript bundle

## 🛠 Technologies

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4.2
- **UI Components**: shadcn/ui
- **Typography**: Geist (Next.js default)
- **State**: React hooks (useState, useMemo)
- **Routing**: Next.js App Router with dynamic segments

## 📄 License

All rights reserved © SHINE Foundation

## 📞 Support

For questions or issues, contact: info@shine.org
