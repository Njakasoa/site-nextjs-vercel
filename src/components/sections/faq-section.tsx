'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Combien coûte une mission avec Takamoa Studio ?',
    answer:
      'Nos tarifs dépendent de la scope de votre projet. Une campagne publicitaire démarre à 1 500 000 MGA/mois, un site vitrine à partir de 3 500 000 MGA, et un accompagnement stratégique sur-mesure est devisé selon vos besoins. Contactez-nous pour un devis personnalisé.',
  },
  {
    question: 'Combien de temps faut-il pour voir des résultats ?',
    answer:
      'Pour les publicités en ligne, les premiers résultats sont visibles sous 48-72h. L\'optimisation fine nécessite 2-3 semaines. Pour le SEO, comptez 3-6 mois pour des résultats significatifs. Un site web est généralement livré en 3-6 semaines.',
  },
  {
    question: 'Travaillez-vous avec tous types d\'entreprises ?',
    answer:
      'Nous sommes spécialisés dans les PME malgaches et les startups ambitieuses. Nous excellons particulièrement dans l\'e-commerce, le service, l\'immobilier et la tech. Si vous cherchez à accélérer votre croissance digitale, nous sommes faits pour collaborer.',
  },
  {
    question: 'Proposez-vous des contrats sans engagement ?',
    answer:
      'Oui ! Nos campagnes ads sont mensuelles sans engagement long terme. Pour les projets web et stratégiques, nous proposons des jalons clairs avec des paiements étalés selon l\'avancement du projet.',
  },
  {
    question: 'Comment se déroule le suivi de projet ?',
    answer:
      'Chaque client a un interlocuteur dédié et accès à un dashboard de suivi en temps réel. Nous faisons des points hebdomadaires ou bi-mensuels selon l\'intensité du projet, et vous recevez des rapports détaillés avec analyses et recommandations.',
  },
];

export function FAQSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Tout ce que vous devez savoir avant de démarrer
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-sm sm:text-base py-3 sm:py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
