import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ctaNavigation } from '@/content/navigation';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="relative rounded-2xl bg-primary px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-12 lg:py-20 text-center text-primary-foreground overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Prêt à accélérer votre croissance ?
            </h2>
            <p className="text-primary-foreground/90 mb-6 sm:mb-8 text-base sm:text-lg">
              Discutons de vos objectifs et voyons comment Takamoa Studio peut
              vous aider à les atteindre plus vite.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href={ctaNavigation.primary.href} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 w-full sm:w-auto"
                >
                  {ctaNavigation.primary.name}
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                >
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
