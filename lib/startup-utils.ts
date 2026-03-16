import { startups, Startup } from './startups';

/**
 * Get a startup by ID
 */
export function getStartupById(id: string): Startup | undefined {
  return startups.find((startup) => startup.id === id);
}

/**
 * Get all startups from a specific program
 */
export function getStartupsByProgram(program: 'acceleration' | 'incubation'): Startup[] {
  return startups.filter((startup) => startup.program === program);
}

/**
 * Get all startups in a specific sector
 */
export function getStartupsBySector(sector: string): Startup[] {
  return startups.filter((startup) => startup.sector === sector);
}

/**
 * Get all unique sectors
 */
export function getAllSectors(): string[] {
  return [...new Set(startups.map((startup) => startup.sector))].sort();
}

/**
 * Get related startups (same program but different)
 */
export function getRelatedStartups(startupId: string, limit: number = 3): Startup[] {
  const startup = getStartupById(startupId);
  if (!startup) return [];

  return startups
    .filter((s) => s.program === startup.program && s.id !== startupId)
    .slice(0, limit);
}

/**
 * Search startups by text
 */
export function searchStartups(query: string): Startup[] {
  const lowerQuery = query.toLowerCase();
  return startups.filter((startup) => {
    const matchesName = startup.name.toLowerCase().includes(lowerQuery);
    const matchesDescription = startup.shortDescription.toLowerCase().includes(lowerQuery);
    const matchesFounders = startup.founders.some((founder) =>
      founder.toLowerCase().includes(lowerQuery)
    );
    const matchesSector = startup.sector.toLowerCase().includes(lowerQuery);

    return matchesName || matchesDescription || matchesFounders || matchesSector;
  });
}

/**
 * Filter startups by multiple criteria
 */
export function filterStartups(
  program?: 'acceleration' | 'incubation' | 'all',
  sector?: string,
  searchQuery?: string
): Startup[] {
  let results = [...startups];

  // Filter by program
  if (program && program !== 'all') {
    results = results.filter((s) => s.program === program);
  }

  // Filter by sector
  if (sector && sector !== 'All Sectors') {
    results = results.filter((s) => s.sector === sector);
  }

  // Filter by search query
  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();
    results = results.filter((s) => {
      return (
        s.name.toLowerCase().includes(lowerQuery) ||
        s.shortDescription.toLowerCase().includes(lowerQuery) ||
        s.fullDescription.toLowerCase().includes(lowerQuery) ||
        s.founders.some((f) => f.toLowerCase().includes(lowerQuery)) ||
        s.sector.toLowerCase().includes(lowerQuery)
      );
    });
  }

  return results;
}

/**
 * Get statistics about the portfolio
 */
export interface PortfolioStats {
  totalCompanies: number;
  accelerationCompanies: number;
  incubationCompanies: number;
  totalSectors: number;
  youngestCohort: number;
  oldestCohort: number;
}

export function getPortfolioStats(): PortfolioStats {
  const cohortYears = startups.map((s) => s.cohortYear);

  return {
    totalCompanies: startups.length,
    accelerationCompanies: startups.filter((s) => s.program === 'acceleration').length,
    incubationCompanies: startups.filter((s) => s.program === 'incubation').length,
    totalSectors: getAllSectors().length,
    youngestCohort: Math.max(...cohortYears),
    oldestCohort: Math.min(...cohortYears),
  };
}

/**
 * Get startups by cohort year
 */
export function getStartupsByCohort(year: number): Startup[] {
  return startups.filter((s) => s.cohortYear === year);
}

/**
 * Group startups by program
 */
export function groupStartupsByProgram(): {
  acceleration: Startup[];
  incubation: Startup[];
} {
  return {
    acceleration: getStartupsByProgram('acceleration'),
    incubation: getStartupsByProgram('incubation'),
  };
}

/**
 * Group startups by sector
 */
export function groupStartupsBySector(): Record<string, Startup[]> {
  const grouped: Record<string, Startup[]> = {};

  getAllSectors().forEach((sector) => {
    grouped[sector] = getStartupsBySector(sector);
  });

  return grouped;
}
