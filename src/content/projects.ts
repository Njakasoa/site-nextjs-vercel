// Projects/Portfolio content - CENTRALIZED

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  gallery?: string[];
  services: string[];
  year: number;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: 'label-gasy',
    title: 'Lancement Digital Label Gasy',
    client: 'Label Gasy',
    category: 'Lancement de marque',
    description:
      'Accompagnement complet du lancement d\'une nouvelle marque de mode éthique made in Madagascar.',
    challenge:
      'Label Gasy, startup malgache dans la mode éthique, avait besoin d\'une présence digitale forte pour son lancement. Zero notoriété, budget marketing limité à la phase initiale.',
    solution:
      'Stratégie de lancement en deux phases : pré-lancement pour créer l\'attente, puis lancement avec campagnes d\'acquisition ciblées. Création d\'un univers visuel fort et cohérent.',
    results: [
      '+15 000 followers Instagram en 3 mois',
      '1500 pré-inscrits avant le lancement',
      'ROAS de 4.2 sur les campagnes de lancement',
      'Ventes sold out sur la première collection',
    ],
    image: '/images/project-labelgasy.jpg',
    services: ['Stratégie Digitale', 'Publicités en Ligne', 'Création de Contenu'],
    year: 2023,
    link: 'https://labelgasy.mg',
  },
  {
    slug: 'mada-gourmet',
    title: 'E-commerce Mada Gourmet',
    client: 'Mada Gourmet',
    category: 'E-commerce',
    description:
      'Création d\'une boutique en ligne pour un traiteur premium d\'Antananarivo.',
    challenge:
      'Mada Gourmet, traiteur haut de gamme, voyait ses demandes exploser par téléphone. Besoin d\'automatiser les commandes et de proposer un parcours d\'achat fluide.',
    solution:
      'Développement d\'un e-commerce sur mesure avec système de réservation de créneaux de livraison, paiement mobile money, et back-office de gestion des commandes.',
    results: [
      'Site livré en 4 semaines',
      '+200% de commandes en ligne le premier mois',
      'Panier moyen augmenté de 35%',
      'Temps de traitement des commandes divisé par 3',
    ],
    image: '/images/project-madagourmet.jpg',
    services: ['Développement Web', 'Stratégie Digitale'],
    year: 2023,
  },
  {
    slug: 'immobiliere-madagascar',
    title: 'Génération de Leads Immobilier',
    client: 'Immobilière Madagascar',
    category: 'Publicités en Ligne',
    description:
      'Campagnes Meta Ads pour générer des leads qualifiés dans l\'immobilier neuf.',
    challenge:
      'L\'agence immobilière peinait à atteindre une audience qualifiée pour son programme neuf. Les leads coûtaient cher et étaient peu convertis.',
    solution:
      'Mise en place d\'un entonnoir de conversion avec landing pages dédiées, campagnes Facebook ciblées sur les intérêtes immobilier, et nurture email automatique.',
    results: [
      'Coût par lead réduit de 60%',
      '120 leads qualifiés par mois',
      'Taux de conversion visite→lead : 8.5%',
      '15 réservations directes attribuées aux campagnes',
    ],
    image: '/images/project-immobilier.jpg',
    services: ['Publicités en Ligne', 'Développement Web'],
    year: 2024,
  },
  {
    slug: 'tech-startup-fintech',
    title: 'Branding Digital Fintech',
    client: 'PayMada',
    category: 'Stratégie & Contenu',
    description:
      'Construction de l\'identité digitale et de la communauté pour une fintech malgache.',
    challenge:
      'Startup fintech en phase de levée de fonds, besoin de créer une image innovative et trustworthy auprès des investisseurs et utilisateurs early adopters.',
    solution:
      'Refonte complète de la présence digitale : site web, contenu éducatif sur la finance, campagnes de confiance, et établissement d\'authority via du contenu thought leadership.',
    results: [
      'Présence établie sur 5 canaux digitaux',
      '50 000 utilisateurs inscrits en 6 mois',
      'Engagement rate de 8% sur LinkedIn',
      'Mention dans 3 publications tech africaines',
    ],
    image: '/images/project-fintech.jpg',
    services: ['Stratégie Digitale', 'Création de Contenu', 'Développement Web'],
    year: 2024,
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
