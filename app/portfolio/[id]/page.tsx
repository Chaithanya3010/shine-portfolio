import { notFound } from 'next/navigation';
import Link from 'next/link';
import { startups } from '@/lib/startups';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface StartupDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return startups.map((startup) => ({
    id: startup.id,
  }));
}

export default async function StartupDetailPage({ params }: StartupDetailPageProps) {
  const { id } = await params;
  const startup = startups.find((s) => s.id === id);

  if (!startup) {
    notFound();
  }

  const sectorColorMap: Record<string, { bg: string; text: string }> = {
    'AI / Developer Tools': { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-900 dark:text-blue-300' },
    'HealthTech': { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-900 dark:text-pink-300' },
    'AgriTech': { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-900 dark:text-green-300' },
    'FinTech': { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-900 dark:text-purple-300' },
    'EdTech': { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-900 dark:text-amber-300' },
    'Clean Energy': { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-900 dark:text-emerald-300' },
    'E-Commerce': { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-900 dark:text-orange-300' },
    'Cybersecurity': { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-900 dark:text-red-300' },
    'Analytics / Data': { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-900 dark:text-indigo-300' },
  };

  const sectorColors = sectorColorMap[startup.sector] || { bg: 'bg-gray-100 dark:bg-gray-900/30', text: 'text-gray-900 dark:text-gray-300' };
  const programName = startup.program === 'acceleration' ? 'SHINE Acceleration Program (KAN)' : 'SHINE Incubation Program (Genesis)';
  const programBg = startup.program === 'acceleration' ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-purple-50 dark:bg-purple-900/20';
  const programBorder = startup.program === 'acceleration' ? 'border-blue-200 dark:border-blue-800' : 'border-purple-200 dark:border-purple-800';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link href="/portfolio">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Main Content */}
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12">
          {/* Header with Logo */}
          <div className="flex flex-col sm:flex-row items-start gap-8 mb-10 pb-10 border-b border-border">
            <div className="flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-muted/50 flex-shrink-0">
              <img
                src={startup.logo}
                alt={startup.name}
                className="max-h-16 max-w-16 object-contain"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{startup.name}</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline" className={`${sectorColors.bg} ${sectorColors.text} border-0 text-sm font-medium`}>
                  {startup.sector}
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Cohort {startup.cohortYear}
                </Badge>
              </div>
              <p className="text-muted-foreground text-lg">{startup.shortDescription}</p>
            </div>
          </div>

          {/* Program Info */}
          <div className={`${programBg} border ${programBorder} rounded-2xl p-6 mb-10`}>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Program</p>
            <p className="text-xl font-bold text-foreground">{programName}</p>
          </div>

          {/* About Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">About {startup.name}</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {startup.fullDescription}
            </p>
          </div>

          {/* Founders Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-foreground mb-4">Founders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {startup.founders.map((founder, index) => (
                <div key={index} className="bg-muted/50 rounded-xl p-4 border border-border">
                  <p className="font-semibold text-foreground">{founder}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Ready to learn more?</h3>
              <p className="text-muted-foreground">
                Visit {startup.name}'s website to explore their innovation.
              </p>
            </div>
            <a href={startup.website} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                Visit Website
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        {/* Related Startups */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Other Companies in {startup.program === 'acceleration' ? 'Acceleration' : 'Incubation'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {startups
              .filter((s) => s.program === startup.program && s.id !== startup.id)
              .slice(0, 3)
              .map((relatedStartup) => (
                <Link key={relatedStartup.id} href={`/portfolio/${relatedStartup.id}`}>
                  <div className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer h-full">
                    <img
                      src={relatedStartup.logo}
                      alt={relatedStartup.name}
                      className="w-12 h-12 object-contain mb-3"
                    />
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedStartup.name}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedStartup.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
