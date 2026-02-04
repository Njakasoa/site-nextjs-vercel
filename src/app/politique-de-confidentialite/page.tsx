import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/content/site';

export const metadata = constructMetadata({
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données de Takamoa Studio.',
  path: '/politique-de-confidentialite',
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12">Politique de Confidentialité</h1>

        <div className="prose prose-gray max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              {siteConfig.name} s&apos;engage à protéger la vie privée des utilisateurs 
              de son site web. Cette politique de confidentialité décrit comment 
              nous collectons, utilisons et protégeons vos informations personnelles 
              conformément aux réglementations en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Responsable du traitement</h2>
            <p className="text-muted-foreground">
              Le responsable du traitement des données est :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>{siteConfig.name}</li>
              <li>Adresse : {siteConfig.address}</li>
              <li>Email : {siteConfig.email}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Données collectées</h2>
            <p className="text-muted-foreground">
              Nous collectons les données suivantes :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>
                <strong>Via le formulaire de contact :</strong> nom, email, téléphone, 
                sujet et contenu de votre message
              </li>
              <li>
                <strong>Données de navigation :</strong> adresse IP, type de navigateur, 
                pages consultées (via cookies analytiques)
              </li>
              <li>
                <strong>Cookies :</strong> données de session et préférences utilisateur
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Finalités du traitement</h2>
            <p className="text-muted-foreground">
              Vos données sont collectées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Gérer la relation client et le suivi commercial</li>
              <li>Améliorer notre site et nos services</li>
              <li>Établir des statistiques d&apos;utilisation anonymisées</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Base légale du traitement</h2>
            <p className="text-muted-foreground">
              Le traitement de vos données repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Consentement (pour les cookies et le formulaire de contact)</li>
              <li>Exécution d&apos;un contrat ou de mesures précontractuelles</li>
              <li>Intérêt légitime (amélioration de nos services)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Durée de conservation</h2>
            <p className="text-muted-foreground">
              Nous conservons vos données personnelles pendant :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Données de contact : 3 ans après le dernier contact</li>
              <li>Données de navigation : 13 mois maximum</li>
              <li>Cookies : durée variable selon le type (session ou persistant)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
            <p className="text-muted-foreground">
              Conformément au réglement sur la protection des données, vous disposez 
              des droits suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, contactez-nous à l&apos;adresse : {siteConfig.email}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Sécurité</h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre des mesures techniques et organisationnelles 
              appropriées pour protéger vos données contre tout accès non autorisé, 
              modification, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p className="text-muted-foreground">
              Nous nous réservons le droit de modifier cette politique de 
              confidentialité à tout moment. Les modifications prendront effet 
              immédiatement après leur publication sur le site.
            </p>
            <p className="text-muted-foreground mt-2">
              Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant cette politique de confidentialité 
              ou le traitement de vos données, contactez-nous :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Email : {siteConfig.email}</li>
              <li>Adresse : {siteConfig.address}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
