import { CheckCircle2 } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { Hero } from '@/components/sections/hero';
import { siteConfig } from '@/content/site';

const values = [
  {
    title: 'Résultats avant tout',
    description:
      'Nous ne vendons pas du beau. Nous vendons des solutions qui génèrent des leads, des ventes et de la croissance.',
  },
  {
    title: 'Transparence totale',
    description:
      'Vous avez accès à toutes les données. Pas de jargon, pas de chiffres maquillés. On vous dit la vérité, même quand elle est déplaisante.',
  },
  {
    title: 'Excellence malgache',
    description:
      'Nous prouvons chaque jour que le talent malgache peut rivaliser international. Notre rigueur est notre fierté.',
  },
];

const stats = [
  { number: '5+', label: 'Années d\'expérience' },
  { number: '50+', label: 'Projets réalisés' },
  { number: '30+', label: 'Clients satisfaits' },
  { number: '4M+', label: 'Budget ads géré (MGA)' },
];

export const metadata = constructMetadata({
  title: 'À Propos',
  description: `Découvrez ${siteConfig.name}, agence de marketing digital à Madagascar. Notre histoire, nos valeurs et notre équipe.`,
  path: '/a-propos',
});

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Une agence née à Madagascar, conçue pour performer"
        subtitle="Notre histoire"
        description={`Fondée en ${siteConfig.foundedYear} à ${siteConfig.city}, ${siteConfig.name} accompagne les entreprises locales et internationales dans leur croissance digitale.`}
        showCta={false}
      />

      {/* Stats - 2 cols mobile, 4 cols desktop */}
      <section className="py-8 sm:py-10 lg:py-12 border-y bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Notre approche</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Nous croyons que le digital n&apos;est pas une fin en soi, mais un
                  levier au service de vos objectifs business. Chaque euro investi
                  doit être justifiable, chaque action mesurable.
                </p>
                <p>
                  Notre différence ? Une connaissance fine du marché malgache
                  couplée à des standards internationaux. Nous avons travaillé avec
                  des startups locales comme des PME en croissance, toujours avec
                  la même obsession : les résultats.
                </p>
              </div>
            </div>
            <div className="aspect-video md:aspect-square rounded-lg bg-muted relative overflow-hidden order-first md:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs sm:text-sm text-muted-foreground">Photo équipe / Bureau</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - 1 col mobile, 3 cols desktop */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">Nos valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-4 sm:p-6 rounded-lg">
                <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
