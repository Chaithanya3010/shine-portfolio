'use client';
import { Suspense } from 'react';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { startups } from '@/lib/startups';
import { StartupCard } from '@/components/StartupCard';
import { PortfolioFilters } from '@/components/PortfolioFilters';
import { Badge } from '@/components/ui/badge';

function PortfolioContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedSector, setSelectedSector] = useState('All Sectors');

  // Initialize from URL params
  useEffect(() => {
    const program = searchParams.get('program');
    if (program) {
      setSelectedProgram(program);
    }
  }, [searchParams]);

  // Filter startups based on search and filters
  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.founders.some(founder => founder.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesProgram = selectedProgram === 'all' || startup.program === selectedProgram;

      const matchesSector = selectedSector === 'All Sectors' || startup.sector === selectedSector;

      return matchesSearch && matchesProgram && matchesSector;
    });
  }, [searchTerm, selectedProgram, selectedSector]);

  // Count by program
  const accelerationCount = 2;
  const incubationCount = startups.filter(s => s.program === 'incubation').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
              Portfolio
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Portfolio Companies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Meet the innovative startups in the SHINE Acceleration and Incubation programs. Each company is driving transformation in their respective sectors.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Companies</p>
            <p className="text-4xl font-bold text-primary">{startups.length}</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground mb-2">Acceleration Program</p>
            <p className="text-4xl font-bold text-secondary">{accelerationCount}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-card border border-border rounded-2xl p-6 h-fit">
              <h2 className="text-lg font-bold text-foreground mb-6">Filters</h2>
              <PortfolioFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedProgram={selectedProgram}
                setSelectedProgram={setSelectedProgram}
                selectedSector={selectedSector}
                setSelectedSector={setSelectedSector}
              />
            </div>
          </div>

          {/* Startup Grid */}
          <div className="lg:col-span-3">
            {filteredStartups.length > 0 ? (
              <>
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredStartups.length}</span> of{' '}
                    <span className="font-semibold text-foreground">{startups.length}</span> companies
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredStartups.map((startup) => (
                    <StartupCard key={startup.id} startup={startup} />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 bg-card border border-border rounded-2xl">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No startups found</h3>
                <p className="text-muted-foreground text-center max-w-sm">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function PortfolioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}