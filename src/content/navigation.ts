// Navigation configuration - CENTRALIZED

export const mainNavigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'Blog', href: '/blog' },
  { name: 'À propos', href: '/a-propos' },
] as const;

export const footerNavigation = {
  services: [
    { name: 'Stratégie Digitale', href: '/services/strategie-digitale' },
    { name: 'Publicités en Ligne', href: '/services/publicites-en-ligne' },
    { name: 'Création de Contenu', href: '/services/creation-de-contenu' },
    { name: 'Développement Web', href: '/services/developpement-web' },
  ],
  company: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  ],
} as const;

export const ctaNavigation = {
  primary: { name: 'Demander un devis', href: '/contact' },
  secondary: { name: 'Découvrir nos services', href: '/services' },
} as const;
