import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getServiceBySlug, getAllServiceSlugs } from '@/content/services';
import { constructMetadata } from '@/lib/seo/metadata';
import { generateServiceJsonLd } from '@/lib/seo/jsonld';

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return constructMetadata({
      title: 'Service non trouvé',
      description: 'Le service demandé n\'existe pas.',
    });
  }

  return constructMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const jsonLd = generateServiceJsonLd(service);

  return (
    <div className="py-20">
      <div className="container px-4 md:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Back Link */}
        <Link href="/services">
          <Button variant="ghost" className="mb-8 gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Retour aux services
          </Button>
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {service.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Description longue */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">En détail</h2>
              <div className="prose prose-gray max-w-none">
                {service.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </section>

            {/* Bénéfices */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Ce que vous obtenez</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Notre process</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="flex gap-4 p-4 rounded-lg border"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faq.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* CTA Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-lg bg-muted/50 border">
              <h3 className="font-semibold text-lg mb-2">
                Intéressé par ce service ?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Discutons de votre projet et voyons comment nous pouvons vous aider à atteindre vos objectifs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Demander un devis
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Réponse sous 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
