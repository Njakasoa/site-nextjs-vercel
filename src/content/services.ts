// Services content - CENTRALIZED

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'strategie-digitale',
    title: 'Stratégie Digitale',
    shortTitle: 'Stratégie',
    description:
      'Élaborez une roadmap digitale claire pour atteindre vos objectifs business avec des actions mesurables et performantes.',
    longDescription: `
      La stratégie digitale est le socle de toute présence en ligne réussie. Nous analysons votre marché, 
      vos concurrents et votre positionnement pour construire un plan d'action sur mesure.
      
      De l'audit initial à la mise en place des KPIs, nous vous accompagnons à chaque étape 
      pour maximiser votre ROI et créer une croissance durable.
    `,
    benefits: [
      'Audit complet de votre présence digitale actuelle',
      'Analyse concurrentielle et positionnement',
      'Définition de KPIs mesurables et alignés avec vos objectifs',
      'Plan d\'action trimestriel avec priorités claires',
      'Reporting régulier et recommandations d\'optimisation',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description: 'Immersion dans votre business, vos objectifs et vos défis actuels.',
      },
      {
        step: 2,
        title: 'Audit & Analyse',
        description: 'Évaluation complète de votre écosystème digital et de la concurrence.',
      },
      {
        step: 3,
        title: 'Stratégie',
        description: 'Élaboration de la roadmap et définition des priorités d\'action.',
      },
      {
        step: 4,
        title: 'Déploiement',
        description: 'Mise en œuvre et suivi des premières actions stratégiques.',
      },
    ],
    faq: [
      {
        question: 'Combien de temps dure une mission de stratégie digitale ?',
        answer:
          'L\'audit et la stratégie initiale se déroulent sur 2-3 semaines. L\'accompagnement peut ensuite être mensuel ou trimestriel selon vos besoins.',
      },
      {
        question: 'Ai-je besoin d\'être présent sur tous les réseaux sociaux ?',
        answer:
          'Non ! Nous identifions les canaux pertinents pour votre cible. Mieux vaut exceller sur 2-3 plateformes que diluer vos efforts sur 10.',
      },
    ],
    image: '/images/service-strategie.jpg',
    icon: 'Target',
  },
  {
    slug: 'publicites-en-ligne',
    title: 'Publicités en Ligne',
    shortTitle: 'Ads',
    description:
      'Générez des leads qualifiés et boostez vos ventes avec des campagnes Meta Ads et Google Ads optimisées.',
    longDescription: `
      Les publicités en ligne sont un levier puissant pour accélérer votre croissance. 
      Nous créons et gérons vos campagnes Facebook, Instagram et Google pour maximiser votre retour sur investissement.
      
      Chaque euro dépensé est optimisé grâce au ciblage précis, au testing continu 
      et à l'analyse des données en temps réel.
    `,
    benefits: [
      'Campagnes Meta Ads (Facebook & Instagram) optimisées',
      'Google Ads : Search, Display, YouTube',
      'Ciblage précis et audiences personnalisées',
      'A/B testing créatifs et copywriting',
      'Optimisation continue du ROI',
      'Rapports hebdomadaires de performance',
    ],
    process: [
      {
        step: 1,
        title: 'Objectifs',
        description: 'Définition des objectifs de conversion et du budget alloué.',
      },
      {
        step: 2,
        title: 'Setup',
        description: 'Configuration des comptes, pixels et audiences.',
      },
      {
        step: 3,
        title: 'Lancement',
        description: 'Mise en ligne des campagnes avec multiples variations créatives.',
      },
      {
        step: 4,
        title: 'Optimisation',
        description: 'Analyse des données, ajustements et scaling des gagnants.',
      },
    ],
    faq: [
      {
        question: 'Quel budget minimum pour démarrer ?',
        answer:
          'Nous recommandons un minimum de 500 000 MGA par mois pour avoir des données significatives et optimiser efficacement.',
      },
      {
        question: 'En combien de temps vois-je des résultats ?',
        answer:
          'Les premiers résultats apparaissent sous 48-72h. L\'optimisation fine nécessite 2-3 semaines de données.',
      },
    ],
    image: '/images/service-ads.jpg',
    icon: 'Megaphone',
  },
  {
    slug: 'creation-de-contenu',
    title: 'Création de Contenu',
    shortTitle: 'Contenu',
    description:
      'Captivez votre audience avec du contenu visuel et écrit qui raconte votre histoire et convertit.',
    longDescription: `
      Le contenu est le cœur de votre communication digitale. Nous produisons des visuels, 
      vidéos et textes qui résonnent avec votre audience et renforcent votre image de marque.
      
      De la charte graphique aux posts quotidiens, nous créons un univers cohérent 
      qui vous démarque et fidélise vos clients.
    `,
    benefits: [
      'Création visuelle : posts, stories, carrousels',
      'Production vidéo : Reels, TikToks, shorts',
      'Copywriting et storytelling de marque',
      'Shooting photo professionnel',
      'Calendrier éditorial et planification',
      'Gestion des réseaux sociaux',
    ],
    process: [
      {
        step: 1,
        title: 'Brief',
        description: 'Définition des lignes éditoriales et des objectifs de contenu.',
      },
      {
        step: 2,
        title: 'Production',
        description: 'Création des visuels, vidéos et copies selon le calendrier.',
      },
      {
        step: 3,
        title: 'Validation',
        description: 'Revue et ajustements avant publication.',
      },
      {
        step: 4,
        title: 'Publication',
        description: 'Mise en ligne, community management et analyse.',
      },
    ],
    faq: [
      {
        question: 'À quelle fréquence dois-je publier ?',
        answer:
          'Cela dépend de votre audience et de vos ressources. Nous recommandons 3-5 posts par semaine minimum sur les principaux réseaux.',
      },
      {
        question: 'Qui fournit les idées de contenu ?',
        answer:
          'Nous proposons un calendrier éditorial complet, mais vos inputs métiers sont précieux pour créer un contenu authentique.',
      },
    ],
    image: '/images/service-contenu.jpg',
    icon: 'Palette',
  },
  {
    slug: 'developpement-web',
    title: 'Développement Web',
    shortTitle: 'Web',
    description:
      'Des sites web performants, rapides et optimisés SEO qui convertissent vos visiteurs en clients.',
    longDescription: `
      Votre site web est votre vitrine 24/7. Nous concevons et développons des expériences 
      digitales sur mesure : vitrines, e-commerce, applications web...
      
      Chaque projet est pensé mobile-first, optimisé pour les moteurs de recherche 
      et construit avec des technologies modernes pour garantir performance et évolutivité.
    `,
    benefits: [
      'Sites vitrines et e-commerce sur mesure',
      'Design responsive et mobile-first',
      'Optimisation SEO technique et on-page',
      'Performance et temps de chargement optimisés',
      'Intégration CMS (WordPress, custom)',
      'Maintenance et support technique',
    ],
    process: [
      {
        step: 1,
        title: 'Spécifications',
        description: 'Définition des besoins, features et architecture du site.',
      },
      {
        step: 2,
        title: 'Design',
        description: 'Maquettes UI/UX et validation du parcours utilisateur.',
      },
      {
        step: 3,
        title: 'Développement',
        description: 'Intégration, développement des fonctionnalités et tests.',
      },
      {
        step: 4,
        title: 'Mise en ligne',
        description: 'Déploiement, configuration SEO et formation.',
      },
    ],
    faq: [
      {
        question: 'Combien de temps pour créer un site web ?',
        answer:
          'Un site vitrine standard prend 3-4 semaines. Un e-commerce ou projet complexe peut nécessiter 6-12 semaines.',
      },
      {
        question: 'Puis-je modifier le contenu moi-même ?',
        answer:
          'Oui, tous nos sites incluent un CMS (WordPress ou solution custom) pour une gestion autonome de votre contenu.',
      },
    ],
    image: '/images/service-web.jpg',
    icon: 'Code',
  },
] as const;

function normalizeSlug(slug: string): string {
  return decodeURIComponent(slug).trim().toLowerCase();
}

export function getServiceBySlug(slug: string): Service | undefined {
  const target = normalizeSlug(slug);
  return services.find((s) => normalizeSlug(s.slug) === target);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
