import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Startup Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We couldn't find the startup you're looking for. It might have been moved or the link may be incorrect.
        </p>
        <Link href="/portfolio">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>
    </div>
  );
}
