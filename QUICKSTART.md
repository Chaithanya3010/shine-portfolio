# SHINE Portfolio - Quick Start Guide

Get your SHINE Foundation portfolio website running in 5 minutes!

## 🚀 Start in 3 Steps

### 1️⃣ Install & Run
```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

**That's it!** Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 What You'll See

- **Home Page** - Hero section with program highlights and featured startups
- **Portfolio Page** - Grid of 9 sample startups with filters and search
- **Startup Details** - Click any startup card to see full details
- **Navigation** - Top menu with logo and mobile-friendly hamburger

## 🎯 Most Important Files

1. **Add Startups** → Edit `lib/startups.ts`
2. **Change Colors** → Edit `app/globals.css` (look for `:root { ... }`)
3. **Update Hero Text** → Edit `app/page.tsx` (look for `<h1>` tags)
4. **Update Logo/Footer** → Edit `components/Footer.tsx`

## 📝 Quick Customization

### Change Brand Color
In `app/globals.css`, find `:root` and change:
```css
--primary: oklch(0.35 0.18 280); /* Change this color */
```

Try these colors:
- **Blue**: `oklch(0.35 0.18 280)`
- **Red**: `oklch(0.6 0.25 20)`
- **Green**: `oklch(0.55 0.2 140)`
- **Purple**: `oklch(0.55 0.2 280)`

### Add a New Startup
In `lib/startups.ts`, add to the `startups` array:
```typescript
{
  id: '10',
  name: 'Your Startup',
  logo: '🚀',
  cohortYear: 2025,
  sector: 'AI / Developer Tools',
  shortDescription: 'Brief description here',
  fullDescription: 'Longer description here',
  founders: ['Founder Name'],
  website: 'https://example.com',
  program: 'acceleration' | 'incubation'
}
```

### Update Hero Text
In `app/page.tsx`, find and change:
```typescript
<h1>Accelerating Innovation in Mangalore</h1>
<p>Your new tagline here...</p>
```

## 🎨 Available Sectors

Use these exact names when adding startups:
- AI / Developer Tools
- HealthTech
- AgriTech
- FinTech
- EdTech
- Clean Energy
- E-Commerce
- Cybersecurity
- Analytics / Data

Each has a unique badge color automatically!

## 📊 Features Included

✅ **Home Page** with hero section  
✅ **Portfolio Page** with grid layout  
✅ **Startup Details** pages  
✅ **Search** startups by name  
✅ **Filter** by program & sector  
✅ **Dark Mode** auto-detection  
✅ **Mobile** responsive design  
✅ **9 Sample** startups included  

## 🔍 Quick Navigation

| Page | URL | File |
|------|-----|------|
| Home | `/` | `app/page.tsx` |
| Portfolio | `/portfolio` | `app/portfolio/page.tsx` |
| Startup Detail | `/portfolio/1` | `app/portfolio/[id]/page.tsx` |

## 🎯 Next Actions

### Immediately After Running
1. [ ] Open [http://localhost:3000](http://localhost:3000) ✅
2. [ ] Click "View Portfolio" button
3. [ ] Try the search and filters
4. [ ] Click on a startup to see details

### First Customization Tasks
1. [ ] Replace SHINE logo (edit `components/Navigation.tsx`)
2. [ ] Update company info in footer (`components/Footer.tsx`)
3. [ ] Change hero text (`app/page.tsx`)
4. [ ] Update brand color (`app/globals.css`)

### Before Going Live
1. [ ] Replace all 9 sample startups with real data
2. [ ] Add real company information
3. [ ] Update contact details
4. [ ] Test on mobile devices
5. [ ] Deploy to Vercel or your hosting

## 🛠 Common Questions

**Q: Where do I add startups?**  
A: Edit `lib/startups.ts` - just add items to the `startups` array

**Q: How do I change the main color?**  
A: Edit `app/globals.css` and change the `--primary` CSS variable

**Q: Can I add more pages?**  
A: Yes! Create files in `app/` directory (e.g., `app/blog/page.tsx`)

**Q: How do I deploy?**  
A: Run `vercel deploy` for Vercel, or `npm run build && npm run start`

**Q: Can I use a different font?**  
A: Yes, edit `app/layout.tsx` to import different Google Fonts

**Q: How do I add links to navigation?**  
A: Edit `components/Navigation.tsx` - modify the `navItems` array

## 📚 Learn More

- **Full Guide**: Read `README.md` for complete documentation
- **Setup Details**: See `SETUP.md` for configuration options  
- **Code Examples**: Check `EXAMPLES.md` for how to extend
- **What's Included**: See `BUILD_SUMMARY.md` for feature list

## 🎓 Project Structure (Simplified)

```
app/
├── page.tsx              ← Home page (edit here)
└── portfolio/
    ├── page.tsx          ← Startup listing (keep as-is)
    └── [id]/page.tsx     ← Details page (keep as-is)

components/
├── Navigation.tsx        ← Top bar (edit here)
├── Footer.tsx           ← Footer (edit here)
├── StartupCard.tsx      ← Card design (keep as-is)
└── PortfolioFilters.tsx ← Filters (keep as-is)

lib/
├── startups.ts          ← EDIT THIS! Add your startups
└── startup-utils.ts     ← Helper functions

globals.css              ← EDIT THIS! Change colors here
```

## 💡 Pro Tips

1. **Use Emojis** - Startup logos are emojis (🚀, 💳, 📚, etc.)
2. **Keep Descriptions Short** - Short descriptions show better on cards
3. **Real Data** - Replace sample startups with real companies early
4. **Test Dark Mode** - Check appearance in dark mode too
5. **Mobile First** - Design looks great on phones automatically

## 🚀 Deploy in 2 Minutes

### To Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### To Other Services
```bash
npm run build
npm start
# Deploy the `.next` folder and `node_modules`
```

## ✨ That's It!

You have a **production-ready portfolio website**. 

- Edit `lib/startups.ts` to add your startups
- Edit `app/globals.css` to change colors
- Edit `app/page.tsx` to change hero text
- Deploy when ready!

## 📞 Need Help?

1. Check `SETUP.md` for detailed instructions
2. Look at `EXAMPLES.md` for code examples
3. Read inline comments in components
4. Check component files for patterns

---

**Ready to customize?** Start by editing `lib/startups.ts` to add your first real startup! 🎉
