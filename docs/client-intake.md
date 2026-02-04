# Client Intake — Informations à Collecter (Contenu + Images)

Ce document liste **toutes les informations variables** à demander au client pour remplacer les placeholders et alimenter le site.

---

## 1) Identité de marque (site.ts)
- **Nom de marque**
- **Slogan / tagline**
- **Description courte** (1–2 phrases)

## 2) Localisation & Contact
- **Adresse complète**
- **Ville / Pays**
- **Code postal**
- **Email principal**
- **Téléphone** (format international)
- **Horaires d’ouverture**

## 3) Légal
- **Raison sociale**
- **N° légal** (SIRET / NIF / STAT)
- **Année de création**
- **Hébergeur** (ex: Vercel)

## 4) URLs & Réseaux
- **Nom de domaine**
- **URL complète** (https://...)
- **Facebook**
- **Instagram**
- **LinkedIn**
- **Twitter/X**
- **TikTok / YouTube** (si dispo)

## 5) Navigation
- **Liens menu principal** (texte + URL)
- **Liens footer** (texte + URL)
- **CTA principal** (texte + URL)
- **CTA secondaire** (texte + URL)

## 6) Services (services.ts)
Pour **chaque service** :
- **Nom du service**
- **Slug (URL)**
- **Description courte** (1 phrase)
- **Description longue** (2–3 paragraphes)
- **Bénéfices** (3–6 points)
- **Process** (3–5 étapes : titre + description)
- **FAQ** (3–6 Q/R)
- **Image** (si disponible)
- **Icône** (optionnel)

## 7) Projets / Réalisations (projects.ts)
Pour **chaque projet** :
- **Nom du projet**
- **Client**
- **Catégorie**
- **Année**
- **Description courte**
- **Challenge** (problème)
- **Solution** (approche)
- **Résultats** (3–6 points chiffrés si possible)
- **Services utilisés**
- **Images / Galerie**
- **URL publique** (si existe)

## 8) Blog (blog.ts)
Pour **chaque article** :
- **Titre**
- **Slug**
- **Extrait** (1–2 phrases)
- **Contenu complet**
- **Auteur**
- **Date**
- **Temps de lecture**
- **Catégorie**
- **Tags**
- **Image**

## 9) Pages fixes
### À propos
- **Histoire** (2–3 paragraphes)
- **Valeurs** (3–5)
- **Stats clés** (ex: clients, années, projets)

### Contact
- **Intro courte**
- **Numéro d’urgence** (optionnel)

### Mentions légales
- **Éditeur**
- **Responsable publication**
- **Hébergeur**
- **Email support légal**

### Politique de confidentialité
- **Email DPO / contact**
- **Données collectées**
- **Finalité traitement**
- **Durée conservation**
- **Droits utilisateur**

---

# Images — Formats & Spécifications

## Formats recommandés
- **Photos/visuels** : `.jpg` / `.webp`
- **Logos / icônes** : `.svg` (idéal) ou `.png` transparent
- **OpenGraph** : `.jpg` ou `.png`
- **Favicon** : `.ico` + `.png`

## Tailles idéales

| Usage | Format | Taille conseillée | Poids max |
|------|--------|------------------|-----------|
| Logo | SVG/PNG | 300–600px de large | < 100 KB |
| Hero / section principale | JPG/WebP | 1600×900 | < 250 KB |
| Services | JPG/WebP | 1200×800 | < 200 KB |
| Projets | JPG/WebP | 1200×800 | < 250 KB |
| Blog header | JPG/WebP | 1200×630 | < 200 KB |
| OpenGraph | JPG/PNG | 1200×630 | < 300 KB |
| Favicon | ICO/PNG | 32×32 + 192×192 | < 50 KB |
| Équipe / bureau | JPG/WebP | 1200×800 | < 250 KB |

## Nommage conseillé (SEO)
- **Services** : `service-<slug>.jpg`
- **Projets** : `project-<nomclient>.jpg`
- **Blog** : `blog-<slug>.jpg`

## Structure dossier (public/)
```
public/
├── logo.svg
├── logo.png
├── og-image.jpg
├── favicon.ico
├── images/
│   ├── services/
│   ├── projects/
│   ├── blog/
│   └── team/
```

---

## Format de réponse client (copiable)
```
[IDENTITÉ]
Nom:
Slogan:
Description:

[CONTACT]
Email:
Téléphone:
Adresse:
Ville/Pays:
Horaires:

[DOMAIN]
URL:

[RÉSEAUX]
Facebook:
Instagram:
LinkedIn:
Twitter:
TikTok:
YouTube:

[SERVICES]
1)
2)

[PROJETS]
1)
2)

[BLOG]
1)
2)

[ASSETS]
Logo:
Images services:
Images projets:
Images blog:

[SEO]
Mots-clés:
Cibles géographiques:
Concurrents:
Tone of voice:
```
