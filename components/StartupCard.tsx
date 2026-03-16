'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Startup } from '@/lib/startups';
import { Button } from '@/components/ui/button';

interface StartupCardProps {
  startup: Startup;
}

export function StartupCard({ startup }: StartupCardProps) {
  const sectorColors: Record<string, string> = {
    'HealthTech / MedTech': 'bg-pink-100 text-pink-900 dark:bg-pink-900/30 dark:text-pink-300',
    'AgriTech': 'bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-300',
    'Manufacturing': 'bg-orange-100 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300',
    'IT Hardware': 'bg-indigo-100 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-300',
    'Blockchain / IoT': 'bg-purple-100 text-purple-900 dark:bg-purple-900/30 dark:text-purple-300',
    'AI / Developer Tools': 'bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300',
    'FinTech': 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300',
    'EdTech': 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300',
    'Clean Energy': 'bg-lime-100 text-lime-900 dark:bg-lime-900/30 dark:text-lime-300',
    'E-Commerce': 'bg-rose-100 text-rose-900 dark:bg-rose-900/30 dark:text-rose-300',
    'Cybersecurity': 'bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-300',
    'Analytics / Data': 'bg-cyan-100 text-cyan-900 dark:bg-cyan-900/30 dark:text-cyan-300',
  };

  return (
    <Link href={`/portfolio/${startup.id}`}>
      <div className="h-full group cursor-pointer">
        <div className="relative h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/50 dark:from-blue-900/10 dark:to-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="mb-4 inline-flex w-16 h-16 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
            <img
              src={startup.logo}
              alt={startup.name}
              className="max-h-10 max-w-10 object-contain"
            />
          </div>


          {/* Name */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {startup.name}
          </h3>

          {/* Meta Info */}
          <div className="flex items-center gap-3 mb-4 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {startup.cohortYear}
            </span>
            <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              KAN
            </span>
          </div>

          {/* Sector Badge */}
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${sectorColors[startup.sector] || 'bg-slate-100 text-slate-900 dark:bg-slate-900/30 dark:text-slate-300'}`}>
              {startup.sector}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-700 dark:text-slate-300 flex-1 mb-4 line-clamp-3">
            {startup.shortDescription}
          </p>

          {/* Founders */}
          <div className="mb-4">
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-1">Founders</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 line-clamp-2">
              {startup.founders.join(', ')}
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <Button
              variant="ghost"
              className="w-full justify-between group/btn text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
            >
              View Details
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

    </Link >
  );
}
