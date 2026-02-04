import { Hero } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services-section';
import { ProcessSection } from '@/components/sections/process-section';
import { FAQSection } from '@/components/sections/faq-section';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/content/site';

export default function Home() {
  return (
    <>
      <Hero
        title="Transformez votre présence digitale en moteur de croissance"
        subtitle="Agence de Marketing Digital à Madagascar"
        description={`${siteConfig.name} accompagne les entreprises malgaches avec des stratégies digitale, des campagnes publicitaires performantes et des sites web qui convertissent.`}
      />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
