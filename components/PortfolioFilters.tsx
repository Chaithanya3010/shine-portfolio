'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, ChevronDown } from 'lucide-react';

interface PortfolioFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedProgram: string;
  setSelectedProgram: (program: string) => void;
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
}

const sectors = [
  'All Sectors',
  'HealthTech / MedTech',
  'AgriTech',
  'Manufacturing',
  'IT Hardware',
  'Blockchain / IoT',
];

export function PortfolioFilters({
  searchTerm,
  setSearchTerm,
  selectedProgram,
  setSelectedProgram,
  selectedSector,
  setSelectedSector,
}: PortfolioFiltersProps) {
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const hasActiveFilters = searchTerm || selectedSector !== 'All Sectors';

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-600" />
        <Input
          placeholder="Search startups..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 h-11 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-blue-600"
        />
      </div>

      {/* Sector Filter Dropdown */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-900 dark:text-white block">Filter by Sector</label>
        <div className="relative">
          <button
            onClick={() => setIsSectorOpen(!isSectorOpen)}
            className="w-full px-4 py-2.5 h-11 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex items-center justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <span className="text-sm font-medium">{selectedSector}</span>
            <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isSectorOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isSectorOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg z-10">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => {
                    setSelectedSector(sector);
                    setIsSectorOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    selectedSector === sector
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          onClick={() => {
            setSearchTerm('');
            setSelectedSector('All Sectors');
          }}
          variant="ghost"
          className="w-full text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <X className="w-4 h-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}
