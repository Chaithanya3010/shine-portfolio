# 🎨 SHINE Portfolio - Visual & Design Guide

Complete visual design system for the SHINE Foundation portfolio website.

## 🎯 Brand Identity

### Logo
- **Name**: SHINE Foundation
- **Full Name**: Sahyadri Hub for Innovations and Entrepreneurship
- **Symbol**: ✨ (sparkle emoji)
- **Location**: Top-left of navigation

### Color System

#### Primary Colors
```
┌─────────────────────────────────┐
│  Primary (Deep Blue)            │
│  oklch(0.35 0.18 280)          │
│  Used for: Buttons, accents     │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  Secondary (Gold)               │
│  oklch(0.75 0.15 35)           │
│  Used for: Highlights, badges   │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  Accent (Purple)                │
│  oklch(0.55 0.2 280)           │
│  Used for: Special elements     │
└─────────────────────────────────┘
```

#### Neutral Colors
```
Background: oklch(0.98 0.001 0)      # Light off-white
Foreground: oklch(0.15 0.04 280)     # Dark text
Muted:      oklch(0.88 0.01 0)       # Light gray
Border:     oklch(0.92 0.01 0)       # Light border

Dark Mode:
Background: oklch(0.1 0.02 280)      # Dark blue-black
Foreground: oklch(0.95 0.01 0)       # White text
Muted:      oklch(0.3 0.02 280)      # Dark gray
Border:     oklch(0.25 0.03 280)     # Dark border
```

### Sector Badge Colors

```
AI / Developer Tools     🔵 Blue         bg-blue-100, dark:bg-blue-900/30
HealthTech              💗 Pink         bg-pink-100, dark:bg-pink-900/30
AgriTech                💚 Green        bg-green-100, dark:bg-green-900/30
FinTech                 💜 Purple       bg-purple-100, dark:bg-purple-900/30
EdTech                  🟠 Amber        bg-amber-100, dark:bg-amber-900/30
Clean Energy            💚 Emerald      bg-emerald-100, dark:bg-emerald-900/30
E-Commerce              🟠 Orange       bg-orange-100, dark:bg-orange-900/30
Cybersecurity           🔴 Red          bg-red-100, dark:bg-red-900/30
Analytics / Data        🟣 Indigo       bg-indigo-100, dark:bg-indigo-900/30
```

## 📐 Layout System

### Spacing Scale (Based on Tailwind)
```
2px    = space-0.5
4px    = space-1
8px    = space-2     (gap-2)
12px   = space-3
16px   = space-4     (gap-4) ← Most common
20px   = space-5
24px   = space-6     (gap-6)
28px   = space-7
32px   = space-8     (gap-8) ← Large sections
```

### Border Radius
```
8px   = rounded-lg      (small elements)
12px  = rounded-xl      (cards)
16px  = rounded-2xl     (larger cards)  ← Most common
24px  = rounded-3xl     (major sections)
```

### Responsive Grid

```
MOBILE (< 640px)
┌─────────────┐
│  Startup 1  │
├─────────────┤
│  Startup 2  │
├─────────────┤
│  Startup 3  │
└─────────────┘
(1 column)

TABLET (640px - 1024px)
┌────────────┬────────────┐
│ Startup 1  │ Startup 2  │
├────────────┼────────────┤
│ Startup 3  │ Startup 4  │
├────────────┼────────────┤
│ Startup 5  │ Startup 6  │
└────────────┴────────────┘
(2 columns)

DESKTOP (> 1024px)
┌────────────┬────────────┬────────────┐
│ Startup 1  │ Startup 2  │ Startup 3  │
├────────────┼────────────┼────────────┤
│ Startup 4  │ Startup 5  │ Startup 6  │
├────────────┼────────────┼────────────┤
│ Startup 7  │ Startup 8  │ Startup 9  │
└────────────┴────────────┴────────────┘
(3 columns + sidebar)
```

## 🎯 Page Layouts

### Home Page Structure
```
┌──────────────────────────────────┐
│       Navigation Bar             │
├──────────────────────────────────┤
│                                  │
│      HERO SECTION                │
│   Welcome Heading                │
│   Subheading                     │
│   [CTA Button] [Learn More]     │
│                                  │
├──────────────────────────────────┤
│                                  │
│      STATS CARDS (3)             │
│   Total | Acceleration | Incub.  │
│                                  │
├──────────────────────────────────┤
│                                  │
│    PROGRAMS SECTION (2 COLS)     │
│  [Acceleration] [Incubation]     │
│                                  │
├──────────────────────────────────┤
│                                  │
│  ACCELERATION PREVIEW (3 CARDS)  │
│  [Card] [Card] [Card]            │
│         [View All Button]        │
│                                  │
├──────────────────────────────────┤
│                                  │
│  INCUBATION PREVIEW (3 CARDS)    │
│  [Card] [Card] [Card]            │
│         [View All Button]        │
│                                  │
├──────────────────────────────────┤
│                                  │
│      CTA SECTION                 │
│   Ready to innovate?             │
│      [Apply Now Button]          │
│                                  │
├──────────────────────────────────┤
│       Footer                     │
└──────────────────────────────────┘
```

### Portfolio Page Structure
```
┌──────────────────────────────────┐
│     Navigation Bar               │
├──────────────────────────────────┤
│                                  │
│    HEADER SECTION                │
│  Portfolio | Our Portfolio       │
│  Subtitle text                   │
│                                  │
├──────────────────────────────────┤
│                                  │
│    STATS (3 CARDS)               │
│  Total | Acceleration | Incub.   │
│                                  │
├──────────────────────────────────┤
│┌─────────────┐┌──────────────────┐
││  SIDEBAR    ││  STARTUP GRID    │
││             ││                  │
││ - Search    ││  [Card] [Card]   │
││ - Programs  ││  [Card] [Card]   │
││ - Sectors   ││  [Card] [Card]   │
││ - Clear     ││  [Card] [Card]   │
││             ││  [Card]          │
│└─────────────┘└──────────────────┘
│                                  │
├──────────────────────────────────┤
│       Footer                     │
└──────────────────────────────────┘
```

### Startup Detail Page Structure
```
┌──────────────────────────────────┐
│     Navigation Bar               │
├──────────────────────────────────┤
│                                  │
│  [← Back to Portfolio]           │
│                                  │
│  ┌──────────────────────────────┐│
│  │ [Logo] Company Name          ││
│  │        Cohort 2025 | Sector  ││
│  │        Short description     ││
│  └──────────────────────────────┘│
│                                  │
│  PROGRAM CARD                    │
│  SHINE Acceleration Program      │
│                                  │
│  ABOUT SECTION                   │
│  Full description...             │
│                                  │
│  FOUNDERS SECTION                │
│  [Founder 1] [Founder 2]         │
│                                  │
│  CTA SECTION                     │
│  [Visit Website →]               │
│                                  │
│  RELATED STARTUPS                │
│  [Card] [Card] [Card]            │
│                                  │
├──────────────────────────────────┤
│       Footer                     │
└──────────────────────────────────┘
```

## 🃏 Startup Card Design

### Card Structure
```
┌────────────────────────────────┐
│ ┌──────────────────────────────┐ (Hover: slight lift, glow)
│ │ [🚀 Logo]  16px margin       │
│ │                              │
│ │ Company Name (18px bold)     │
│ │ 2025 [Sector Badge]          │
│ │                              │
│ │ Short description...         │
│ │ (Line clamped to 3)         │
│ │                              │
│ │ Founders:                    │
│ │ Founder Name, Founder Name   │
│ │                              │
│ │ ┌──────────────────────────┐ │
│ │ │ View Details →           │ │
│ │ └──────────────────────────┘ │
│ └──────────────────────────────┘
└────────────────────────────────┘

Hover Effect:
- Border color: muted → primary
- Shadow: none → lg
- Transform: none → -translate-y-1
- Overlay: none → gradient fade-in
```

## 📱 Responsive Breakpoints

```
Mobile
──────
< 640px

Tablet
──────
640px - 1024px

Desktop
──────
> 1024px
```

## 🌙 Dark Mode Colors

All colors automatically switch between light and dark modes:

```
Light Mode          Dark Mode
──────────          ────────────
White bg            Dark blue-black bg
Dark text           Light text
Light borders       Dark borders
Light cards         Dark gray cards
```

No additional CSS needed - uses CSS variables!

## ✨ Visual Effects

### Hover States
```
Cards:          Border glow + slight lift + shadow
Buttons:        Background color change + scale
Links:          Color change + underline
```

### Transitions
```
Duration: 300ms
Timing: ease-in-out
Properties: all (color, border, shadow, transform)
```

### Gradients
```
Used for:
- Page backgrounds (subtle)
- CTA sections (gradient overlay)
- NO heavy gradients (design rule)

Example:
  from-background via-background to-muted/30
```

## 🎭 Component Sizes

### Typography
```
Display (h1):   text-5xl   (48px)  sm:text-7xl
Title (h2):     text-4xl   (36px)  sm:text-5xl
Heading (h3):   text-2xl   (24px)
Subheading:     text-xl    (20px)
Body:           text-base  (16px)  ← default
Small:          text-sm    (14px)
Tiny:           text-xs    (12px)
```

### Button Sizes
```
Icon only:      24px × 24px
Small:          8px × 24px (icon/text)
Default:        12px × 32px (icon/text)
Large:          16px × 40px (icon/text)
```

### Card Sizes
```
Width:          Full width on mobile
                2 columns on tablet
                3 columns on desktop
                Max container: 84rem (1344px)

Height:         Auto (content-driven)
                Min: 200px (logo + title)
                Max: flexible
```

## 🎨 Design Tokens (CSS Variables)

```css
/* Colors */
--primary: oklch(...)           /* Main brand */
--secondary: oklch(...)         /* Accent */
--accent: oklch(...)            /* Highlight */
--background: oklch(...)        /* Page bg */
--foreground: oklch(...)        /* Text */
--muted: oklch(...)             /* Gray */
--border: oklch(...)            /* Borders */

/* Spacing */
--radius: 0.75rem               /* Border radius */

/* Fonts (in tailwind) */
font-sans: 'Geist'              /* Body text */
font-mono: 'Geist Mono'         /* Code */
```

## 🔄 Component States

### Startup Card States
```
Default:    Border: border
Hover:      Border: primary, Shadow: lg, Lift: -translate-y-1
Active:     (Click navigates to detail)
Disabled:   (N/A for cards)
```

### Button States
```
Default:    Background: color, Text: contrast
Hover:      Background: darker, Scale: 1.02
Active:     Background: darkest
Disabled:   Background: muted, Opacity: 0.5
```

### Input States
```
Default:    Border: border, Background: input
Focus:      Border: primary, Ring: primary/50
Error:      Border: destructive, Background: destructive/5
Disabled:   Background: muted, Opacity: 0.5
```

## 📐 Accessibility Features

### Color Contrast
- All text meets WCAG AA standards
- No color-only information
- Sufficient contrast in both light and dark modes

### Typography
- Semantic HTML heading hierarchy
- Line-height: 1.5-1.6 (readable)
- Font size: minimum 14px

### Spacing
- Touch targets: minimum 44×44px
- Adequate padding for readability
- Logical grouping with spacing

## 🎯 Visual Hierarchy

### Primary Elements
1. Main headings (h1, h2)
2. Hero CTA buttons
3. Startup logos in cards

### Secondary Elements
1. Subheadings (h3, h4)
2. Card descriptions
3. Filter buttons
4. Navigation links

### Tertiary Elements
1. Small text
2. Metadata (dates, sectors)
3. Footer information

## 🖼️ Asset Guidelines

### Logos/Emojis for Startups
- Use 1-2 character emojis
- Consistent 5xl size in cards
- Color-blind safe colors

### Images
- Optimized for web (JPEG, WebP)
- Responsive sizes
- Clear alt text

### Icons
- From lucide-react
- Consistent 16px-24px sizes
- Color-coordinated with text

---

**For detailed usage, see SETUP.md and EXAMPLES.md**
