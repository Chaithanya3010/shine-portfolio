# SHINE Portfolio Setup Guide

## 🎯 Quick Start

This is a modern portfolio website for SHINE Foundation showcasing startups from two programs:
- **SHINE Acceleration Program (KAN)** - For scaling companies
- **SHINE Incubation Program (Genesis)** - For early-stage startups

## 📋 What's Included

### Pages
1. **Home Page** (`/`) - Introduction with program highlights and startup previews
2. **Portfolio Page** (`/portfolio`) - Browse all startups with filters and search
3. **Startup Detail Page** (`/portfolio/[id]`) - Full details about individual startups

### Features
✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode support
✅ Advanced filtering by program and sector
✅ Full-text search across startups
✅ Program-specific sorting
✅ Related startups recommendations
✅ Professional styling with glass-morphism effects

## 🔧 Configuration

### 1. Update SHINE Information
Edit `components/Navigation.tsx` and `components/Footer.tsx` with:
- Organization contact info
- Social media links
- Address/location
- Email address

### 2. Customize Colors
Edit `app/globals.css` to change the theme:
```css
:root {
  --primary: oklch(...);     /* Main brand color */
  --secondary: oklch(...);   /* Accent color */
  --accent: oklch(...);      /* Highlight color */
}
```

### 3. Add/Edit Startups
Edit `lib/startups.ts` to add or modify startups:
```typescript
{
  id: '10',
  name: 'Startup Name',
  logo: '🚀',
  cohortYear: 2025,
  sector: 'AI / Developer Tools',
  shortDescription: 'Brief description',
  fullDescription: 'Detailed description',
  founders: ['Founder Name'],
  website: 'https://example.com',
  program: 'acceleration' | 'incubation'
}
```

### 4. Update Company Information
- Change logo in `components/Navigation.tsx`
- Update footer links in `components/Footer.tsx`
- Modify hero text in `app/page.tsx`
- Update metadata in `app/layout.tsx`

## 📊 Available Sectors

When adding startups, use one of these sectors:
- AI / Developer Tools
- HealthTech
- AgriTech
- FinTech
- EdTech
- Clean Energy
- E-Commerce
- Cybersecurity
- Analytics / Data

Each sector has a unique badge color for visual distinction.

## 🎨 Design System

### Typography
- **Headings**: Geist (bold, large sizes)
- **Body**: Geist (regular weight)
- **Monospace**: Geist Mono (for code/technical)

### Spacing Scale
- `gap-2` = 0.5rem (8px)
- `gap-4` = 1rem (16px)
- `gap-6` = 1.5rem (24px)
- `gap-8` = 2rem (32px)

### Border Radius
- `rounded-lg` = 0.5rem
- `rounded-xl` = 0.75rem
- `rounded-2xl` = 1rem
- `rounded-3xl` = 1.5rem

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive prefixes:
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

## 🔍 Using Utility Functions

Import from `lib/startup-utils.ts`:

```typescript
// Get a startup by ID
const startup = getStartupById('1');

// Filter startups
const filtered = filterStartups('acceleration', 'FinTech', 'search query');

// Get statistics
const stats = getPortfolioStats();

// Group by program
const grouped = groupStartupsByProgram();
```

## 🚀 Deployment

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Other Platforms
The site works with any Node.js hosting:
```bash
npm run build
npm run start
```

### Environment Variables
Currently no environment variables required. Add as needed for:
- Analytics
- CMS integration
- Contact forms
- Email services

## 📈 Future Enhancements

Consider adding:
- [ ] Blog/news section
- [ ] Event calendar
- [ ] Application form
- [ ] Newsletter signup
- [ ] Team directory
- [ ] Success stories/metrics
- [ ] Mentors directory
- [ ] Funding opportunities page

## 🛠 Common Tasks

### Change Main Color
1. Edit `app/globals.css`
2. Update `--primary` color value
3. Update badge colors in `components/StartupCard.tsx`

### Add Navigation Link
1. Edit `components/Navigation.tsx`
2. Add item to `navItems` array
3. Create corresponding page in `app/`

### Update Program Information
1. Edit `app/page.tsx` (home page)
2. Update program descriptions and benefits
3. Update sector descriptions if needed

### Customize Footer
1. Edit `components/Footer.tsx`
2. Update company info
3. Update footer links

## 📚 File Structure Reference

```
app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout with nav/footer
├── globals.css          # Global styles and theme
└── portfolio/
    ├── page.tsx         # Portfolio listing
    ├── layout.tsx       # Portfolio metadata
    └── [id]/
        ├── page.tsx     # Startup detail
        └── not-found.tsx # 404 page

components/
├── Navigation.tsx       # Top navigation
├── Footer.tsx          # Footer
├── StartupCard.tsx     # Startup card component
└── PortfolioFilters.tsx # Filter sidebar

lib/
├── startups.ts         # Startup data
├── startup-utils.ts    # Helper functions
└── portfolio-index.ts  # Navigation index

public/
└── shine-logo.jpg      # Logo image
```

## ✨ Tips & Tricks

1. **Quick Navigation**: Use `portfolioIndex` from `lib/portfolio-index.ts` for routes
2. **Bulk Updates**: Edit `lib/startups.ts` to add multiple startups at once
3. **Styling**: Use Tailwind classes for custom styling, avoid inline CSS
4. **Mobile Testing**: Use browser dev tools to test responsive design
5. **Dark Mode**: Test both light and dark modes during development

## 🆘 Troubleshooting

**Issue**: Styles not applying
- Solution: Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

**Issue**: Startup not appearing
- Solution: Check startup object is complete in `lib/startups.ts`

**Issue**: Filters not working
- Solution: Ensure program and sector values match exactly (case-sensitive)

**Issue**: Images not loading
- Solution: Check image paths are absolute from `/public/`

## 📞 Support

For questions or issues:
- Check `README.md` for detailed documentation
- Review example startups in `lib/startups.ts`
- Inspect `components/StartupCard.tsx` for component patterns
