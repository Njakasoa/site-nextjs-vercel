// Blog content - CENTRALIZED

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readingTime: number;
  category: string;
  image: string;
  tags: string[];
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'comment-optimiser-campagnes-facebook-2024',
    title: 'Comment Optimiser Vos Campagnes Facebook Ads en 2024',
    excerpt:
      'Les meilleures pratiques pour maximiser votre ROAS et réduire vos coûts d\'acquisition sur Meta.',
    content: `
      Les campagnes Facebook Ads évoluent constamment. En 2024, plusieurs facteurs clés déterminent le succès de vos publicités.

      ## 1. L'importance des audiences first-party
      
      Avec la fin progressive des cookies tiers, vos données propriétaires deviennent cruciales. 
      Investissez dans la collecte d'emails et la qualification de votre base de données.

      ## 2. Le creative est le nouveau ciblage

      L'algorithme Advantage+ de Meta fonctionne de mieux en mieux. Votre créatif fait 80% du travail.
      Variez vos formats : vidéos UGC, carrousels éducatifs, images statiques clean.

      ## 3. Structure de campagne simplifiée

      Adoptez la structure ASC (Advantage Shopping Campaign) ou des campagnes simplifiées 
      avec peu d'ad sets pour laisser l'IA optimiser.

      ## 4. Mesure et attribution

      Configurez le CAPI (Conversions API) côté serveur pour un tracking plus fiable 
      que le pixel seul. Intégrez le Enhanced Conversions si vous collectez des leads.
    `,
    author: 'Njakasoa Rakotoarimanana',
    date: '2024-01-15',
    readingTime: 6,
    category: 'Publicités en Ligne',
    image: '/images/blog-facebook-ads.jpg',
    tags: ['facebook ads', 'meta', 'publicité', 'conversion', '2024'],
    published: true,
  },
  {
    slug: 'seo-local-madagascar',
    title: 'SEO Local à Madagascar : Le Guide Complet',
    excerpt:
      'Comment apparaître dans les recherches locales et attirer des clients près de chez vous.',
    content: `
      Le SEO local est souvent négligé par les entreprises malgaches, pourtant c'est un levier 
      puissant pour attirer des clients à proximité.

      ## Optimiser votre Google Business Profile
      
      Créez ou réclamez votre fiche entreprise. Remplissez TOUTES les informations :
      horaires, photos, services, Q&A. Postez régulièrement comme sur un réseau social.

      ## Citations locales

      Assurez-vous que votre NAP (Name, Address, Phone) est identique partout :
      site web, réseaux sociaux, annuaires. Cohérence = crédibilité aux yeux de Google.

      ## Keywords locaux

      Intégrez naturellement dans votre contenu :
      - "[votre service] Antananarivo"
      - "[votre service] près de [quartier]"
      - Mentions de proximité avec points de repère connus

      ## Avis clients
      
      Activement sollicitez les avis Google. Répondez à tous, positifs comme négatifs. 
      50+ avis avec une note >4.5 boostent significativement votre visibilité locale.
    `,
    author: 'Njakasoa Rakotoarimanana',
    date: '2024-02-03',
    readingTime: 8,
    category: 'SEO',
    image: '/images/blog-seo-local.jpg',
    tags: ['seo', 'local', 'google business', 'référencement', 'madagascar'],
    published: true,
  },
  {
    slug: 'contenu-qui-convertit',
    title: '5 Types de Contenu Qui Convertissent Vraiment',
    excerpt:
      'Arrêtez de publier pour publier. Voici les formats de contenu qui génèrent des résultats business.',
    content: `
      Tout contenu ne se vaut pas. Voici les 5 formats qui génèrent le plus de conversions 
      pour nos clients à Madagascar et ailleurs.

      ## 1. Le cas client détaillé

      Pas juste un témoignage. Une histoire complète : le problème, la solution, les résultats chiffrés.
      Format : Before / After. Preuves sociales maximales.

      ## 2. Le comparatif éducatif

      "Crédit immobilier vs crédit renouvelable : que choisir pour votre projet ?"
      Éduquez sans vendre explicitement. Vous créez l'authority et capturez les recherches informatives.

      ## 3. La démonstration produit

      Vidéos ou carrousels qui montrent le produit en action. Usage réel, pas des photos studio.
      Authenticité = confiance.

      ## 4. Le contenu UGC (User Generated)

      Témoignages de clients réels, photos de clients avec vos produits. 
      C'est le contenu le plus performant pour la considération.

      ## 5. Les FAQ structurées

      Répondez aux objections avant qu'elles ne bloquent la conversion. 
      Format direct, sans jargon. On parle comme le client parle.
    `,
    author: 'Njakasoa Rakotoarimanana',
    date: '2024-02-20',
    readingTime: 5,
    category: 'Contenu',
    image: '/images/blog-contenu.jpg',
    tags: ['content marketing', 'conversion', 'stratégie', 'social media'],
    published: true,
  },
  {
    slug: 'changer-site-web-quand',
    title: 'Quand Faut-il Vraiment Changer de Site Web ?',
    excerpt:
      'Les 7 signes qui indiquent que votre site web freine votre croissance.',
    content: `
      Refondre un site web est un investissement. Voici quand c'est vraiment nécessaire 
      versus quand optimiser suffit.

      ## 🚨 Signes critiques : il faut agir

      1. **Temps de chargement > 4s** : Vous perdez 50% des visiteurs avant même qu'ils ne voient quoi que ce soit.
      
      2. **Non responsive** : Plus de 70% du trafic est mobile à Madagascar. Un site non adaptable = invisibilité.

      3. **Pas de HTTPS** : Les navigateurs affichent "Non sécurisé". Crédibilité nulle.

      4. **Impossible à modifier** : Si vous appelez votre développeur pour changer une virgule, le CMS est obsolète.

      ## ⚠️ Signes modérés : optimiser d'abord

      5. **Design daté** : Un redesign partiel suffit souvent. Pas besoin de tout casser.
      
      6. **Taux de conversion faible** : Problème souvent lié au copy ou à l'UX, pas à la technique.

      7. **Peu de trafic** : Un beau nouveau site ne génère pas de trafic magiquement. Travaillez le SEO d'abord.
    `,
    author: 'Njakasoa Rakotoarimanana',
    date: '2024-03-08',
    readingTime: 7,
    category: 'Développement Web',
    image: '/images/blog-website.jpg',
    tags: ['site web', 'refonte', 'croissance', 'performance'],
    published: true,
  },
] as const;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.filter((p) => p.published).map((p) => p.slug);
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.published);
}
