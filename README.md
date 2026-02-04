# Takamoa Studio - Site Vitrine Next.js

Site vitrine production-ready en Next.js 14 avec App Router, Tailwind CSS et shadcn/ui.

## 📋 Table des matières

- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Modifications du contenu](#modifications-du-contenu)
- [SEO et métadonnées](#seo-et-métadonnées)
- [Formulaire de contact](#formulaire-de-contact)
- [Déploiement Vercel](#déploiement-vercel)
- [Client Intake](#client-intake)

## 🚀 Installation

### Prérequis
- Node.js 18.x ou supérieur
- pnpm (recommandé) ou npm

### Commandes

```bash
# 1. Cloner le projet
cd takamoa-site

# 2. Installer les dépendances
pnpm install

# 3. Lancer le serveur de développement
pnpm dev

# 4. Build de production
pnpm build

# 5. Démarrer la version de production
pnpm start
```

Le site sera disponible à l'adresse `http://localhost:3000`

## 📁 Structure du projet

```
takamoa-site/
├── README.md                 # Ce fichier
├── package.json              # Dépendances et scripts
├── tsconfig.json             # Config TypeScript
├── tailwind.config.ts        # Config Tailwind
├── postcss.config.mjs        # Config PostCSS
├── next.config.mjs           # Config Next.js
├── .env.example              # Exemple de variables d'environnement
├── .eslintrc.json            # Config ESLint
├── .prettierrc               # Config Prettier
├── public/                   # Assets statiques
│   ├── logo.png
│   ├── og-image.jpg
│   └── images/
├── src/
│   ├── app/                  # App Router (pages)
│   │   ├── layout.tsx        # Layout principal
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── globals.css       # Styles globaux
│   │   ├── sitemap.ts        # Sitemap dynamique
│   │   ├── robots.ts         # Robots.txt
│   │   ├── icon.tsx          # Favicon généré
│   │   ├── api/contact/route.ts  # API contact
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── realisations/
│   │   │   └── page.tsx
│   │   ├── a-propos/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── mentions-legales/
│   │   │   └── page.tsx
│   │   ├── politique-de-confidentialite/
│   │   │   └── page.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/               # Composants shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── label.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── separator.tsx
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── contact-form.tsx
│   │   └── sections/
│   │       ├── hero.tsx
│   │       ├── services-section.tsx
│   │       ├── process-section.tsx
│   │       ├── faq-section.tsx
│   │       └── cta-section.tsx
│   ├── content/              # CONTENU CENTRALISÉ (à modifier)
│   │   ├── site.ts           # Config générale
│   │   ├── navigation.ts     # Menus
│   │   ├── services.ts       # Services détaillés
│   │   ├── projects.ts       # Portfolio
│   │   └── blog.ts           # Articles
│   └── lib/
│       ├── utils.ts          # Fonctions utilitaires
│       ├── validations/
│       │   └── contact.ts    # Validation Zod
│       └── seo/
│           ├── metadata.ts   # Helper metadata
│           └── jsonld.ts     # JSON-LD schemas
```

## ✏️ Modification du contenu

### 1. Infos générales du site
**Fichier :** `src/content/site.ts`

```typescript
export const siteConfig = {
  name: 'Votre Nom',          // ← Nom de marque
  tagline: 'Votre slogan',    // ← Slogan
  email: 'vous@email.com',    // ← Email de contact
  phone: '+261 XX XX XXX XX', // ← Téléphone
  // ... etc
};
```

### 2. Navigation (menus)
**Fichier :** `src/content/navigation.ts`

```typescript
export const mainNavigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  // Ajoutez/modifiez ici
];
```

### 3. Services
**Fichier :** `src/content/services.ts`

Chaque service a une fiche complète avec :
- slug (identifiant pour l'URL)
- title, description
- benefits (liste d'avantages)
- process (étapes)
- faq (questions/réponses)

### 4. Portfolio / Réalisations
**Fichier :** `src/content/projects.ts`

### 5. Blog
**Fichier :** `src/content/blog.ts`

## 🔍 SEO et métadonnées

### ✅ Structure SEO-friendly
Le projet est **SEO-ready par défaut** :
- **App Router + SSR** (HTML complet)
- **metadata** Next.js par page
- **Open Graph / Twitter Cards**
- **Canonical URL**
- **JSON‑LD Schema.org** (Organization, LocalBusiness, WebSite, BlogPosting)
- **sitemap.xml** et **robots.txt** auto-générés

### Automatic SEO
Chaque page génère automatiquement :
- Title et meta description
- Open Graph tags (Facebook/LinkedIn)
- Twitter Cards
- Canonical URL
- JSON-LD Schema.org

### Pour personnaliser une page :
```typescript
export const metadata = constructMetadata({
  title: 'Mon Titre',
  description: 'Ma description',
  path: '/ma-page',
});
```

### Sitemap et Robots
- Sitemap : généré automatiquement via `src/app/sitemap.ts`
- Robots.txt : généré automatiquement via `src/app/robots.ts`
- Mise à jour automatique des dates et priorités

### ✅ Ajouts SEO conseillés (optionnels)
- **OpenGraph image** dynamique (`src/app/opengraph-image.tsx`) ✅ ajouté
- **OpenGraph image** statique (`/public/og-image.jpg`) si tu préfères
- **favicon** personnalisé (`/public/favicon.ico` ou `src/app/icon.tsx`)
- **Analytics** (GTM/GA4) dans `layout.tsx`
- **Schema LocalBusiness** ajusté aux vraies coordonnées
- **Schema Service** sur pages services ✅ ajouté
- **Schema Portfolio (ItemList)** sur /realisations ✅ ajouté

## 📧 Formulaire de contact

### Actuellement
Le formulaire logue les messages en console (simulation).

### Intégrer Resend (recommandé)
1. Créer un compte sur [resend.com](https://resend.com)
2. Copier `.env.example` en `.env.local`
3. Ajouter votre clé API :
```bash
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=votre@email.com
```
4. Décommenter le code dans `src/app/api/contact/route.ts`

### Intégrer SendGrid
Similaire, utiliser `@sendgrid/mail` à la place.

## 🚀 Déploiement Vercel

### 1. Connecter le projet
```bash
# Installer Vercel CLI si pas déjà fait
pnpm i -g vercel

# Déployer
vercel
```

### 2. Via GitHub (recommandé)
1. Push sur un repo GitHub
2. Connecter à [vercel.com](https://vercel.com)
3. Sélectionner le repo
4. Configurer les variables d'environnement
5. Déployer automatiquement sur chaque push

### 3. Variables d'environnement sur Vercel
```
NEXT_PUBLIC_SITE_URL=https://www.votresite.com
RESEND_API_KEY=(votre clé)
CONTACT_EMAIL=(email de réception)
```

## 🧪 Checklist avant mise en production

- [ ] Modifier `src/content/site.ts` avec vos infos
- [ ] Remplacer les images placeholder dans `public/images/`
- [ ] Créer `public/og-image.jpg` (1200x630px)
- [ ] Configurer le formulaire de contact (API Resend)
- [ ] Mettre à jour les mentions légales
- [ ] Tester le build local : `pnpm build`
- [ ] Vérifier Google PageSpeed
- [ ] Tester sur mobile
- [ ] Ajouter Google Analytics (optionnel)

## 🧾 Client Intake

Deux fichiers sont prêts pour collecter toutes les infos client :
- `docs/client-intake.md` (liste exhaustive + spécifications images)
- `prompts/client-intake-assistant.md` (prompt d’assistant pour poser les questions au client)

---

## 📞 Support

Pour toute question ou personnalisation avancée, contactez l'équipe de développement.

---

**Projet généré avec ❤️ par Floppy**
