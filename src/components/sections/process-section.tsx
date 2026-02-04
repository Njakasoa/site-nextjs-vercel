import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'Nous immersons dans votre univers pour comprendre vos objectifs, vos défis et votre audience cible.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Stratégie',
    description:
      'Nous élaborons une roadmap sur-mesure avec des actions concrètes et des KPIs mesurables.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Exécution',
    description:
      'Nous déployons les campagnes et outils avec une attention obsessionnelle aux détails.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Optimisation',
    description:
      'Nous analysons, testons et ajustons continuellement pour maximiser vos résultats.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Notre Process
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Une méthodologie éprouvée pour des résultats mesurables et reproductibles.
          </p>
        </div>

        {/* Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-5 w-5 sm:h-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm px-2 sm:px-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
