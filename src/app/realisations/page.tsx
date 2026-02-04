import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/content/projects';
import { constructMetadata } from '@/lib/seo/metadata';
import { generatePortfolioJsonLd, generateProjectJsonLd } from '@/lib/seo/jsonld';
import { Hero } from '@/components/sections/hero';

export const metadata = constructMetadata({
  title: 'Nos Réalisations',
  description:
    'Découvrez nos projets récents : lancements de marque, campagnes d\'acquisition, développement web et plus encore.',
  path: '/realisations',
});

export default function RealisationsPage() {
  const listJsonLd = generatePortfolioJsonLd(projects);
  const projectsJsonLd = projects.map((project) => generateProjectJsonLd(project));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
      {projectsJsonLd.map((jsonLd, index) => (
        <script
          key={`project-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
      <Hero
        title="Des résultats concrets pour des clients ambitieux"
        subtitle="Portfolio"
        description="Chaque projet est une histoire de collaboration, de défis relevés et d'objectifs atteints. Voici quelques exemples récents."
        showCta={false}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project) => (
              <Card
                key={project.slug}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      Image: {project.title}
                    </span>
                  </div>
                </div>

                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{project.client}</CardDescription>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 pt-0 space-y-2 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.services.map((service) => (
                      <Badge key={service} variant="outline" className="text-[10px] sm:text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2 sm:pt-4">
                    <Link href={`/realisations/${project.slug}`}>
                      <Button variant="ghost" size="sm" className="p-0 gap-1.5 sm:gap-2 hover:bg-transparent hover:text-primary">
                        Voir le projet
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
