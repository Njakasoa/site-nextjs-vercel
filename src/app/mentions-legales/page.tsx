import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/content/site';

export const metadata = constructMetadata({
  title: 'Mentions Légales',
  description: 'Mentions légales du site Takamoa Studio.',
  path: '/mentions-legales',
  noIndex: true,
});

export default function LegalPage() {
  return (
    <div className="py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12">Mentions Légales</h1>

        <div className="prose prose-gray max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
            <p className="text-muted-foreground">
              Le site {siteConfig.url} est édité par :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Raison sociale : {siteConfig.name}</li>
              <li>Adresse : {siteConfig.address}, {siteConfig.postalCode} {siteConfig.city}, {siteConfig.country}</li>
              <li>Email : {siteConfig.email}</li>
              <li>Téléphone : {siteConfig.phoneDisplay}</li>
              <li>SIRET : {siteConfig.siret}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
            <p className="text-muted-foreground">
              Ce site est hébergé par :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Vercel Inc.</li>
              <li>440 N Barranca Ave #4133</li>
              <li>Covina, CA 91723, USA</li>
              <li>https://vercel.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L&apos;ensemble de ce site relève de la législation malagasy et internationale 
              sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de 
              reproduction sont réservés, y compris pour les documents téléchargeables et 
              les représentations iconographiques et photographiques.
            </p>
            <p className="text-muted-foreground mt-2">
              La reproduction de tout ou partie de ce site sur un support électronique 
              quel qu&apos;il soit est formellement interdite sauf autorisation expresse du 
              directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Données personnelles</h2>
            <p className="text-muted-foreground">
              Conformément à la loi relative à la protection des données personnelles, 
              vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression 
              des données vous concernant. Pour exercer ce droit, veuillez nous contacter 
              à l&apos;adresse email : {siteConfig.email}
            </p>
            <p className="text-muted-foreground mt-2">
              Pour plus d&apos;informations sur la manière dont nous traitons vos données, 
              veuillez consulter notre{' '}
              <a href="/politique-de-confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p className="text-muted-foreground">
              Ce site utilise des cookies à des fins de mesure d&apos;audience et 
              d&apos;amélioration de l&apos;expérience utilisateur. En naviguant sur ce site, 
              vous acceptez l&apos;utilisation de cookies conformément à notre politique en 
              la matière.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation de responsabilité</h2>
            <p className="text-muted-foreground">
              {siteConfig.name} s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour 
              des informations diffusées sur ce site, mais ne peut garantir l&apos;exactitude, 
              la précision ou l&apos;exhaustivité des informations mises à disposition sur 
              celui-ci.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
