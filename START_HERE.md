# 🎉 SHINE Foundation Portfolio - START HERE

Welcome! You have a complete, production-ready portfolio website for SHINE Foundation.

## ⚡ Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
# or: pnpm install
```

### 2. Run Development Server
```bash
npm run dev
# or: pnpm dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000) 🎉

**That's it!** You now have a running website with:
- ✅ Home page with hero section
- ✅ Portfolio with 9 sample startups
- ✅ Advanced filtering and search
- ✅ Individual startup detail pages
- ✅ Dark mode support
- ✅ Mobile responsive design

## 📚 Choose Your Path

### 👤 I'm New Here
→ Start with **QUICKSTART.md** (5 minute read)
- Get it running
- Make your first changes
- Understand the basics

### 🔧 I'm Ready to Customize
→ Go to **SETUP.md** (detailed guide)
- Configuration options
- Color customization
- Adding your startups
- Common tasks

### 💻 I Want to Code
→ Check **EXAMPLES.md** (code snippets)
- 15+ working examples
- Component patterns
- How to extend

### 📖 I Want Full Documentation
→ Read **README.md** (complete guide)
- Features explained
- Architecture overview
- Project structure
- Best practices

## 🎯 Most Important Files to Edit

### Add Your Startups
**File**: `lib/startups.ts`

Replace the 9 sample startups with your real companies. Each startup needs:
```typescript
{
  id: 'unique-id',
  name: 'Company Name',
  logo: '🚀',  // Use emoji
  cohortYear: 2025,
  sector: 'FinTech',  // Pick from available sectors
  shortDescription: 'Brief description',
  fullDescription: 'Longer description',
  founders: ['Founder 1', 'Founder 2'],
  website: 'https://example.com',
  program: 'acceleration' | 'incubation'
}
```

### Change Brand Colors
**File**: `app/globals.css`

Find `:root {` and edit:
```css
--primary: oklch(0.35 0.18 280);      /* Main brand color */
--secondary: oklch(0.75 0.15 35);     /* Accent color */
--accent: oklch(0.55 0.2 280);        /* Highlight color */
```

### Update Hero Section
**File**: `app/page.tsx`

Find and edit:
```typescript
<h1>Accelerating Innovation in Mangalore</h1>
<p>Your tagline here</p>
```

### Update Navigation & Footer
**Files**: `components/Navigation.tsx` and `components/Footer.tsx`

Edit your company name, contact info, social links, etc.

## 📋 What's Included

### Pages
- ✅ **Home** - Hero, programs, startup previews
- ✅ **Portfolio** - Searchable grid of startups
- ✅ **Details** - Individual startup profiles
- ✅ **404** - Error handling

### Features
- ✅ **Search** - Find startups by name, description, founders
- ✅ **Filters** - Filter by program (Acceleration/Incubation) and sector
- ✅ **Responsive** - Works on phone, tablet, desktop
- ✅ **Dark Mode** - Automatic system preference detection
- ✅ **SEO** - Dynamic metadata on all pages

### Components
- ✅ **Navigation** - Top bar with logo and menu
- ✅ **Footer** - Company info and links
- ✅ **Startup Cards** - Beautiful card design
- ✅ **Filters** - Advanced filtering sidebar

## 🎨 Available Sectors

When adding startups, choose from:
- AI / Developer Tools
- HealthTech
- AgriTech
- FinTech
- EdTech
- Clean Energy
- E-Commerce
- Cybersecurity
- Analytics / Data

Each sector automatically gets a unique badge color!

## 🚀 Quick Customization Tasks

### Change Logo (2 minutes)
Edit `components/Navigation.tsx`:
```typescript
<div className="...">SHINE</div>  // Change this text or add image
```

### Update Footer Info (5 minutes)
Edit `components/Footer.tsx`:
- Company name
- Address
- Email
- Phone
- Links

### Change Homepage Text (5 minutes)
Edit `app/page.tsx`:
- Hero heading
- Hero subtitle
- Program descriptions
- CTA buttons

### Add 5 Real Startups (15 minutes)
Edit `lib/startups.ts`:
- Copy one of the sample startups
- Change the values
- Paste 5 times with different data
- Save and reload browser

## 📊 File Overview

```
Key files to edit:
  lib/startups.ts              ← Add your startups HERE
  app/globals.css              ← Change colors HERE
  app/page.tsx                 ← Update hero text HERE
  components/Navigation.tsx    ← Update logo/nav HERE
  components/Footer.tsx        ← Update contact info HERE

Files to keep as-is:
  app/portfolio/page.tsx       ← Portfolio listing (automated)
  app/portfolio/[id]/page.tsx  ← Detail pages (automated)
  components/StartupCard.tsx   ← Card design (works automatically)
  components/PortfolioFilters.tsx ← Filters (works automatically)
```

## ✨ Tips & Tricks

1. **Use Emojis for Logos** - 🚀 🏥 💳 🌾 📚 ⚡
2. **Keep Descriptions Short** - 2-3 lines on cards, full on details
3. **Real Data First** - Replace samples quickly to see true design
4. **Test on Mobile** - Use browser dev tools (F12)
5. **Dark Mode** - Check both light and dark appearance

## 🌐 Deploy When Ready

### To Vercel (1-click)
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Auto-deploys on push

### To Other Hosts
```bash
npm run build
npm start
```

## 📚 Documentation

- **QUICKSTART.md** - Get running (5 min)
- **README.md** - Full overview (15 min)
- **SETUP.md** - Configuration (20 min)
- **EXAMPLES.md** - Code examples (reference)
- **BUILD_SUMMARY.md** - What's included
- **FILE_STRUCTURE.md** - File organization
- **DOCUMENTATION.md** - Doc index

## ❓ Quick FAQs

**Q: Where do I add startups?**  
A: File `lib/startups.ts` - add to the `startups` array

**Q: How do I change colors?**  
A: File `app/globals.css` - edit CSS variables in `:root {}`

**Q: Can I add my own pages?**  
A: Yes! Create files in `app/` directory (e.g., `app/about/page.tsx`)

**Q: How do I deploy?**  
A: Run `npm run build` then `npm start` - or push to GitHub and use Vercel

**Q: What if something breaks?**  
A: Run `rm -rf .next && npm run build` to rebuild

## 🎯 Your First 30 Minutes

- [ ] **5 min** - Run `npm install && npm run dev`
- [ ] **5 min** - Browse the website at http://localhost:3000
- [ ] **10 min** - Edit `lib/startups.ts` and add 2 real startups
- [ ] **5 min** - Edit `app/globals.css` and change the brand color
- [ ] **5 min** - Edit `app/page.tsx` and update the hero text
- [ ] **Refresh** browser and see your changes live! 🎉

## 🎓 Next Steps

1. ✅ Get it running (you're here!)
2. → Read QUICKSTART.md (5 minutes)
3. → Add your startup data (20 minutes)
4. → Customize branding (15 minutes)
5. → Deploy to production (10 minutes)

## 💡 Pro Tips

- **Changes are live** - No rebuild needed for most changes
- **Dark mode works** - Check both themes
- **Mobile responsive** - Test on phone too
- **SEO ready** - All pages have metadata
- **Type safe** - Full TypeScript support

## 🚀 You're All Set!

Everything is ready. No additional setup needed.

**Next action**: Open QUICKSTART.md and follow the 5-minute guide.

---

## Quick Links

- 🏃 **Want to run it?** → `npm run dev`
- 📖 **Want to learn?** → Start with QUICKSTART.md
- 📝 **Want to customize?** → Edit files listed above
- 🚀 **Want to deploy?** → See QUICKSTART.md
- 💻 **Want code examples?** → See EXAMPLES.md

**Enjoy building with SHINE! 🌟**
