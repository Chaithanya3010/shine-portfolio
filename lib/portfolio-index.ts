// Portfolio Navigation and Index
// Quick reference for all available routes and features

export const portfolioIndex = {
  // Main Pages
  pages: {
    home: '/',
    portfolio: '/portfolio',
    accelerationProgram: '/portfolio?program=acceleration',
    incubationProgram: '/portfolio?program=incubation',
  },

  // Filter Examples
  filters: {
    byProgram: {
      acceleration: '/portfolio?program=acceleration',
      incubation: '/portfolio?program=incubation',
    },
    bySector: {
      aiDeveloperTools: '/portfolio?sector=AI%20%2F%20Developer%20Tools',
      healthtech: '/portfolio?sector=HealthTech',
      agritech: '/portfolio?sector=AgriTech',
      fintech: '/portfolio?sector=FinTech',
      edtech: '/portfolio?sector=EdTech',
      cleanEnergy: '/portfolio?sector=Clean%20Energy',
      ecommerce: '/portfolio?sector=E-Commerce',
      cybersecurity: '/portfolio?sector=Cybersecurity',
      analyticsData: '/portfolio?sector=Analytics%20%2F%20Data',
    },
  },

  // Individual Startup Routes
  startups: {
    devflow: '/portfolio/1',
    medicare: '/portfolio/2',
    farmsync: '/portfolio/3',
    payflow: '/portfolio/4',
    learnhub: '/portfolio/5',
    greenenergy: '/portfolio/6',
    tradehub: '/portfolio/7',
    securevault: '/portfolio/8',
    datainsight: '/portfolio/9',
  },

  // Statistics
  stats: {
    totalCompanies: 9,
    accelerationProgram: 5,
    incubationProgram: 4,
    sectors: [
      'AI / Developer Tools',
      'HealthTech',
      'AgriTech',
      'FinTech',
      'EdTech',
      'Clean Energy',
      'E-Commerce',
      'Cybersecurity',
      'Analytics / Data',
    ],
  },

  // Navigation Structure
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
  ],

  // Footer Links
  footerLinks: {
    programs: [
      { label: 'Acceleration Program', href: '/portfolio?program=acceleration' },
      { label: 'Incubation Program', href: '/portfolio?program=incubation' },
    ],
    company: [
      { label: 'Home', href: '/' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact', href: '#' },
    ],
  },
};

// Useful Helper Functions
export function getStartupRoute(startupId: string): string {
  return `/portfolio/${startupId}`;
}

export function getFilterUrl(type: 'program' | 'sector', value: string): string {
  const params = new URLSearchParams();
  if (type === 'program') {
    params.set('program', value);
  } else if (type === 'sector') {
    params.set('sector', value);
  }
  return `/portfolio?${params.toString()}`;
}

export function getCombinedFilterUrl(program?: string, sector?: string): string {
  const params = new URLSearchParams();
  if (program) params.set('program', program);
  if (sector) params.set('sector', sector);
  return `/portfolio${params.toString() ? '?' + params.toString() : ''}`;
}
