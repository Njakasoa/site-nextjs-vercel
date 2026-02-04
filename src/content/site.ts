// Site configuration - CENTRALIZED CONTENT
// Modify this file to update all site-wide content

export const siteConfig = {
  // Brand
  name: 'Takamoa Studio',
  tagline: 'Agence de Marketing Digital à Madagascar',
  description:
    'Takamoa Studio accompagne les entreprises malgaches dans leur transformation digitale. Stratégie, création de contenu, publicités en ligne et développement web.',

  // Location
  city: 'Antananarivo',
  country: 'Madagascar',
  address: 'Lot II M 45 Bis, Ankorondrano',
  postalCode: '101',

  // Contact
  email: 'contact@takamoa.com',
  phone: '+261 34 00 000 00',
  phoneDisplay: '+261 34 00 000 00',

  // URLs
  url: 'https://takamoa.com',
  domain: 'takamoa.com',

  // Social
  social: {
    facebook: 'https://facebook.com/takamoa',
    instagram: 'https://instagram.com/takamoa',
    linkedin: 'https://linkedin.com/company/takamoa',
    twitter: 'https://twitter.com/takamoa',
  },

  // Business
  foundedYear: 2019,
  siret: 'XXX XXX XXX 00010', // Remplace par ton vrai numéro

  // Meta
  author: 'Takamoa Studio',
  keywords: [
    'agence marketing',
    'digital marketing',
    'Madagascar',
    'Antananarivo',
    'publicité Facebook',
    'SEO',
    'création site web',
    'branding',
  ],

  // OG Image
  ogImage: '/og-image.jpg',
} as const;

export type SiteConfig = typeof siteConfig;
