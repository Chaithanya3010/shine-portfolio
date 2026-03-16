import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                ✨
              </div>
              <span className="font-bold text-foreground">SHINE Foundation</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sahyadri Hub for Innovations and Entrepreneurship supporting startups in the Mangalore region.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio?program=acceleration" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Acceleration Program
                </Link>
              </li>
              <li>
                <Link href="/portfolio?program=incubation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Incubation Program
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Sahyadri College of Engineering & Management
              </li>
              <li className="text-sm text-muted-foreground">
                Mangalore, Karnataka
              </li>
              <li>
                <a href="mailto:info@shine.org" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@shine.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SHINE Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
