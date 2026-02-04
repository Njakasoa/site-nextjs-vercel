import { constructMetadata } from '@/lib/seo/metadata';
import { Hero } from '@/components/sections/hero';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/content/site';

export const metadata = constructMetadata({
  title: 'Contact',
  description:
    'Contactez Takamoa Studio pour discuter de votre projet digital. Réponse sous 24h.',
  path: '/contact',
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: `${siteConfig.address}, ${siteConfig.postalCode} ${siteConfig.city}`,
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lun - Ven: 8h30 - 17h30',
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Discutons de votre projet"
        subtitle="Contact"
        description="Remplissez le formulaire ci-dessous et nous vous revenons sous 24h. Ou contactez-nous directement par email ou téléphone."
        showCta={false}
      />

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <Card key={item.label}>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Besoin d&apos;une réponse rapide ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-foreground/90">
                    Pour une demande urgente, appelez-nous directement au{' '}
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="underline"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
