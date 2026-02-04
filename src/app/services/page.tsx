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
import { constructMetadata } from '@/lib/seo/metadata';
import { Hero } from '@/components/sections/hero';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
  Megaphone: <Megaphone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
  Palette: <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
  Code: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
};

export const metadata = constructMetadata({
  title: 'Nos Services',
  description:
    'Découvrez nos services de marketing digital : stratégie, publicités en ligne, création de contenu et développement web.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Des services digitaux pour chaque étape de votre croissance"
        subtitle="Expertise complète"
        description="De la stratégie à l'exécution, nous vous accompagnons sur tous les leviers du digital pour atteindre vos objectifs business."
        showCta={false}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* 1 col mobile, 2 cols tablet/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service) => (
              <Card key={service.slug} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">{iconMap[service.icon]}</div>
                  <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.benefits.slice(0, 4).map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start text-xs sm:text-sm text-muted-foreground"
                      >
                        <span className="mr-2 text-primary flex-shrink-0">•</span>
                        <span className="leading-tight sm:leading-normal">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`}>
                    <Button size="sm" className="group/btn gap-2">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
