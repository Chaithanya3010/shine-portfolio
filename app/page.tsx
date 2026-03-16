import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';
import { startups } from '@/lib/startups';
import { StartupCard } from '@/components/StartupCard';

export default function HomePage() {
  const accelerationStartups = startups.filter(s => s.program === 'acceleration').slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 dark:bg-amber-900/30 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="text-center mb-16">
          <Badge className="mb-6 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-700">
            Scale Faster. Grow Smarter. Lead the Market.
          </Badge>
          <h1 className="text-6xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-6 text-balance leading-tight">
            SHINE Acceleration Program
          </h1>
          <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 text-balance font-medium">
            Empower your startup journey with expert mentorship, market access, and investor readiness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto">
                View Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#program">
              <Button size="lg" variant="outline" className="border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-8">About SHINE Foundation</h2>
          <div className="max-w-4xl space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Sahyadri Hub for Innovations and Entrepreneurship (SHINE) Foundation is a Section 8 company set up by Sahyadri College of Engineering & Management to emphasize innovation and entrepreneurship. The Foundation supports startups and industries emerging from the region to drive community-based innovations and practices for the region's growth.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Over the last few years, the foundation currently houses 22 companies, consisting of 3 MSMEs and 19 startups, and has 20 more ideas in the pre-incubation stage from the college. This initiative aims to create a strong entrepreneurial ecosystem on campus. SHINE has earmarked close to INR 2.3 crore in seed funding to promote these ideas and launch them as products.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Through its various initiatives, SHINE is striving to build a strong startup ecosystem in the region.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Vision</h3>
            <p className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
              To enable, nurture, incubate, and invest in individuals and organizations that focus on community-centric and inclusive innovation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-200 dark:border-amber-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-4">Our Mission</h3>
            <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
              To empower communities and stakeholders to solve problems by sensitizing them to local challenges, educating them to develop problem-solving skills, and equipping them with the resources needed to build impactful solutions.
            </p>
          </div>
        </div>
      </div>

      {/* KAN Program Section */}
      <div id="program" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="mb-16">
          <Badge className="mb-6 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-700">
            ACCELERATION PROGRAM
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">KAN – Karnataka Acceleration Network</h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
            A flagship startup acceleration program by the Government of Karnataka and KDEM, designed to help early-stage startups scale faster through expert mentorship, market access, and investor readiness.
          </p>
        </div>

        {/* Program Benefits */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">What You Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Expert Mentorship</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">1:1 sessions + group workshops with seasoned leaders</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Growth Modules</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">Strategy, finance, Go-To-Market and operational scaling</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Market Access</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">Pilot opportunities with industry & government partners</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Investor Bootcamp</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">Pitch coaching + curated investor connects + Demo Day</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Workspace Access</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">Premium incubation facilities across Karnataka</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Structured 4-Module Program</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">Build → Validate → Scale under expert supervision</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cohorts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cohort 1 */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-2xl p-8">
            <Badge className="mb-4 bg-blue-600 text-white border-0">KAN COHORT 1</Badge>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">First Cohort</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-6">Inaugural batch of the SHINE Acceleration Program featuring our early innovation leaders.</p>
            <div className="space-y-3 mb-6 text-sm text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Premium workspace facilities</p>
              <p className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Dedicated mentor support</p>
              <p className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Industry partnerships</p>
              <p className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Investor network access</p>
            </div>
          </div>

          {/* Cohort 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-300 dark:border-amber-700 rounded-2xl p-8">
            <Badge className="mb-4 bg-amber-600 text-white border-0">KAN COHORT 2</Badge>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Latest Cohort</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-6">The second cohort running at Mangalore Cluster with enhanced support and expanded network.</p>
            <div className="space-y-3 mb-6 text-sm text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-2"><span className="text-amber-600 font-bold">•</span> 4-module structured program</p>
              <p className="flex items-center gap-2"><span className="text-amber-600 font-bold">•</span> Weekly mentorship reviews</p>
              <p className="flex items-center gap-2"><span className="text-amber-600 font-bold">•</span> Local market pilots</p>
              <p className="flex items-center gap-2"><span className="text-amber-600 font-bold">•</span> Application Deadline: Dec 24, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Preview */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">KAN Portfolio</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
            Meet the innovative startups in our acceleration program, scaling rapidly across diverse sectors in 2 cohorts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {accelerationStartups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-xl">
              View All Companies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">Active Cohorts</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl border border-amber-200 dark:border-amber-800">
            <h3 className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2">2</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">Acceleration Programs</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl border border-green-200 dark:border-green-800">
            <h3 className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">5</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">Key Sectors</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Scale Your Startup?</h2>
          <p className="text-lg mb-2 text-blue-100">Contact SHINE Foundation for more information</p>
          <div className="space-y-2 text-blue-100 mb-8">
            <p>Email: <a href="mailto:shine@sahyadri.edu.in" className="font-semibold hover:text-white transition">shine@sahyadri.edu.in</a></p>
            <p>Phone: <a href="tel:+919606993940" className="font-semibold hover:text-white transition">+91 96069 93940</a></p>
            <p>Website: <a href="http://www.shine.sahyadri.edu.in" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white transition">www.shine.sahyadri.edu.in</a></p>
          </div>
          <p className="text-sm text-blue-100 italic">Next Application Deadline: December 24, 2025</p>
        </div>
      </div>
    </div>
  );
}
