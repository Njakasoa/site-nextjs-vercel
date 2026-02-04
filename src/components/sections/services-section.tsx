import Link from 'next/link';
import { ArrowRight, Target, Megaphone, Palette, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/content/services';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
  Megaphone: <Megaphone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
  Palette: <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
  Code: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
};

export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Nos Services
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Des solutions digitales complètes pour faire croître votre business,
            de la stratégie à l&apos;exécution.
          </p>
        </div>

        {/* Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => (
            <Card key={service.slug} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">{iconMap[service.icon]}</div>
                <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <Link href={`/services/${service.slug}`}>
                  <Button variant="ghost" size="sm" className="group/btn gap-2 p-0 hover:bg-transparent hover:text-primary">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <Link href="/services">
            <Button size="default" className="sm:size-lg" variant="outline">
              Voir tous nos services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
