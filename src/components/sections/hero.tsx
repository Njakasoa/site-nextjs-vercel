import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ctaNavigation } from '@/content/navigation';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  showCta?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  showCta = true,
}: HeroProps) {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl mx-auto">
          {/* Subtitle badge */}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm font-medium bg-background">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            {subtitle}
          </div>

          {/* Main Title - Responsive sizing */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl">
            {description}
          </p>

          {/* CTAs - Stack on mobile, row on sm+ */}
          {showCta && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href={ctaNavigation.primary.href} className="w-full sm:w-auto">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  {ctaNavigation.primary.name}
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </Button>
              </Link>
              <Link href={ctaNavigation.secondary.href} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {ctaNavigation.secondary.name}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
