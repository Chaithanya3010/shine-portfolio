# SHINE Portfolio - Code Examples

Quick examples for common tasks in the SHINE portfolio website.

## Adding a New Startup

### In `lib/startups.ts`:

```typescript
{
  id: '10',
  name: 'TechVision AI',
  logo: '🤖',
  cohortYear: 2025,
  sector: 'AI / Developer Tools',
  shortDescription: 'AI-powered computer vision platform for enterprise automation.',
  fullDescription: 'TechVision AI provides enterprise-grade computer vision solutions using cutting-edge deep learning. Our platform helps companies automate visual inspection, quality control, and content analysis at scale. We serve manufacturing, retail, and logistics sectors.',
  founders: ['Amith Sharma', 'Sneha Patel'],
  website: 'https://techvision-ai.io',
  program: 'acceleration',
}
```

## Using Startup Utilities

### Get a specific startup:
```typescript
import { getStartupById } from '@/lib/startup-utils';

const startup = getStartupById('1');
console.log(startup?.name); // "DevFlow"
```

### Search for startups:
```typescript
import { searchStartups } from '@/lib/startup-utils';

const results = searchStartups('AI');
// Returns all startups with 'AI' in name, description, founders, or sector
```

### Filter by multiple criteria:
```typescript
import { filterStartups } from '@/lib/startup-utils';

const acceleration = filterStartups('acceleration', undefined, undefined);
// Get all acceleration program startups

const fintech = filterStartups(undefined, 'FinTech', undefined);
// Get all FinTech startups

const aiAccel = filterStartups('acceleration', 'AI / Developer Tools', undefined);
// Get acceleration program companies in AI sector

const search = filterStartups('all', undefined, 'payment');
// Get all startups with 'payment' in them
```

### Get portfolio statistics:
```typescript
import { getPortfolioStats } from '@/lib/startup-utils';

const stats = getPortfolioStats();
// {
//   totalCompanies: 9,
//   accelerationCompanies: 5,
//   incubationCompanies: 4,
//   totalSectors: 9,
//   youngestCohort: 2025,
//   oldestCohort: 2024
// }
```

### Group startups:
```typescript
import { groupStartupsByProgram, groupStartupsBySector } from '@/lib/startup-utils';

const byProgram = groupStartupsByProgram();
// { acceleration: [...], incubation: [...] }

const bySector = groupStartupsBySector();
// { "FinTech": [...], "AI / Developer Tools": [...], ... }
```

## Creating a Custom Component

### Using StartupCard component:

```typescript
import { StartupCard } from '@/components/StartupCard';
import { startups } from '@/lib/startups';

export function FeaturedStartups() {
  const featured = startups.slice(0, 3);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featured.map((startup) => (
        <StartupCard key={startup.id} startup={startup} />
      ))}
    </div>
  );
}
```

## Building a Custom List Page

```typescript
// app/acceleration/page.tsx
'use client';

import { useState } from 'react';
import { getStartupsByProgram } from '@/lib/startup-utils';
import { StartupCard } from '@/components/StartupCard';
import { Badge } from '@/components/ui/badge';

export default function AccelerationPage() {
  const startups = getStartupsByProgram('acceleration');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <Badge className="mb-4">ACCELERATION PROGRAM</Badge>
      <h1 className="text-4xl font-bold mb-8">KAN Companies</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  );
}
```

## Creating a Featured Section

```typescript
// components/FeaturedCompanies.tsx
import Link from 'next/link';
import { getStartupsBySector } from '@/lib/startup-utils';
import { StartupCard } from './StartupCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function FeaturedCompanies() {
  const featured = getStartupsBySector('FinTech');

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-4">Featured in FinTech</h2>
      <p className="text-muted-foreground mb-8">
        Innovative financial technology companies transforming the industry
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featured.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>

      <Link href="/portfolio?sector=FinTech">
        <Button variant="outline">
          View All FinTech Companies
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </section>
  );
}
```

## Custom Filter Component

```typescript
// components/SectorFilter.tsx
'use client';

import { useState } from 'react';
import { filterStartups } from '@/lib/startup-utils';
import { getAllSectors } from '@/lib/startup-utils';
import { Button } from './ui/button';
import { StartupCard } from './StartupCard';

export function SectorFilter() {
  const [selectedSector, setSelectedSector] = useState<string>('All Sectors');
  const sectors = ['All Sectors', ...getAllSectors()];
  const results = filterStartups(undefined, selectedSector === 'All Sectors' ? undefined : selectedSector);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {sectors.map((sector) => (
          <Button
            key={sector}
            onClick={() => setSelectedSector(sector)}
            variant={selectedSector === sector ? 'default' : 'outline'}
          >
            {sector}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  );
}
```

## Creating a Stats Widget

```typescript
// components/PortfolioStats.tsx
import { getPortfolioStats } from '@/lib/startup-utils';

export function PortfolioStats() {
  const stats = getPortfolioStats();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard 
        label="Total Companies" 
        value={stats.totalCompanies}
        color="primary"
      />
      <StatCard 
        label="Acceleration" 
        value={stats.accelerationCompanies}
        color="secondary"
      />
      <StatCard 
        label="Incubation" 
        value={stats.incubationCompanies}
        color="accent"
      />
      <StatCard 
        label="Sectors" 
        value={stats.totalSectors}
        color="muted"
      />
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </div>
  );
}
```

## Search Implementation

```typescript
// components/StartupSearch.tsx
'use client';

import { useState, useMemo } from 'react';
import { searchStartups } from '@/lib/startup-utils';
import { Input } from './ui/input';
import { StartupCard } from './StartupCard';

export function StartupSearch() {
  const [query, setQuery] = useState('');
  
  const results = useMemo(() => {
    return query ? searchStartups(query) : [];
  }, [query]);

  return (
    <div>
      <Input
        placeholder="Search startups, founders, sectors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-8"
      />

      {query && (
        <div>
          <p className="text-sm text-muted-foreground mb-4">
            Found {results.length} result{results.length !== 1 ? 's' : ''}
          </p>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((startup) => (
                <StartupCard key={startup.id} startup={startup} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No startups found matching "{query}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

## Navigation Links

Using the portfolio index for consistent routing:

```typescript
import { portfolioIndex } from '@/lib/portfolio-index';

// In a component:
<Link href={portfolioIndex.pages.portfolio}>
  View Portfolio
</Link>

<Link href={portfolioIndex.pages.accelerationProgram}>
  Acceleration Companies
</Link>

<Link href={portfolioIndex.startups.devflow}>
  DevFlow Details
</Link>

<Link href={portfolioIndex.filters.bySector.fintech}>
  FinTech Companies
</Link>
```

## Styling Custom Startup Lists

```typescript
// Custom styling for startup cards
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {startups.map((startup) => (
    <div 
      key={startup.id}
      className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1"
    >
      <div className="text-5xl mb-4">{startup.logo}</div>
      <h3 className="text-xl font-bold text-foreground mb-2">
        {startup.name}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-3">
        {startup.shortDescription}
      </p>
    </div>
  ))}
</div>
```

## Adding Dark Mode Support

The site includes automatic dark mode support. To test:

```html
<!-- Force dark mode for testing -->
<html class="dark">

<!-- Or use system preference (default) -->
<html>
```

All colors automatically adapt via CSS variables in `app/globals.css`.

---

More examples and documentation available in `README.md` and `SETUP.md`
