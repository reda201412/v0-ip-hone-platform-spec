# Plan d'exécution ecommerce iPhone — Checklist détaillée

> Objectif: référentiel de tâches avec cases à cocher, structuré par priorités (P0/P1/P2) et domaines (Tech, UX, SEO, Sécurité, Paiements, Logistique, Observabilité). Chaque section est découpée en tâches et sous‑tâches actionnables.

## P0 — Technique (Fondations)
- [ ] Catalogue et données produits
  - [ ] Concevoir schéma Supabase
    - [ ] `products` (slug, name, description, brand, model, release_year)
    - [ ] `variants` (product_id, storage, color, condition, sku)
    - [ ] `prices` (variant_id, currency, amount, original_amount, active)
    - [ ] `inventory` (variant_id, stock, safety_stock, backorderable)
    - [ ] `images` (product_id/variant_id, url, alt, sort)
    - [ ] `reviews` (product_id, rating, title, body, author, verified)
  - [ ] Scripts SQL init (`scripts/`) et migrations
  - [ ] Seed minimal (iPhone 17 Pro, iPhone Air, iPhone 17, iPhone 16, 16e)

- [ ] API / Server Actions
  - [ ] PLP (listing) paginée
    - [ ] Filtres: modèle, storage, couleur, état, prix min/max
    - [ ] Tri: prix, nouveauté, popularité
    - [ ] Sérialisation ISR friendly
  - [ ] PDP (fiche produit)
    - [ ] Fetch par `slug` + résolution `variant`
    - [ ] Disponibilité stock + prix dynamique
    - [ ] Estimation livraison (placeholder calcul)
  - [ ] Endpoints utilitaires
    - [ ] Recherche par mot‑clé
    - [ ] Stock check idempotent

- [ ] Panier
  - [ ] État panier côté client (guest) persistant (localStorage)
  - [ ] Panier serveur lié au compte (merge à la connexion)
  - [ ] Opérations: add/update/remove, validation stock/prix
  - [ ] UI: Drawer + page `/panier`

- [ ] Checkout (Stripe + Apple Pay)
  - [ ] Créer `orders`, `order_items`, `payments`
  - [ ] Intentions de paiement (Payment Intents, mode `automatic`)
  - [ ] Apple Pay via Payment Request Button
  - [ ] Webhooks Stripe (idempotents + signature)
  - [ ] Gestion états: requires_action, succeeded, failed, canceled
  - [ ] Émission facture (placeholder), envoi email (plus tard)

- [ ] Cache / ISR / Performance
  - [ ] ISR PLP (60–120s), PDP (120–300s)
  - [ ] En‑têtes cache CDN (stale‑while‑revalidate)
  - [ ] Optimisation images (Next/Image + CDN) et formats WebP/AVIF
  - [ ] Budgets Web Vitals (LCP, TTI, CLS)

## P0 — UX/UI (Parcours critiques)
- [ ] PLP
  - [ ] Barre de filtres + Drawer mobile
  - [ ] Chips actives + reset
  - [ ] Skeletons et empty state
- [ ] PDP
  - [ ] Sélecteurs de variantes (storage, couleur) avec swatches
  - [ ] Prix barré + % économie, badge Neuf/Refurb
  - [ ] Estimation livraison (CP), garantie 24 mois (texte)
  - [ ] Upsell (coque, verre trempé) placeholder
- [ ] Panier
  - [ ] Lignes avec variation, quantité, total dynamique
  - [ ] Codes promo (placeholder désactivé)
  - [ ] CTA Checkout + Apple Pay express
- [ ] Checkout 1‑page (MVP)
  - [ ] Adresse, options livraison, récap sticky
  - [ ] Validation inline (Zod + react-hook-form)
  - [ ] CTA payer (Stripe)

## P0 — Sécurité & conformité
- [ ] Politiques et enforcements
  - [ ] CSP stricte (frame‑ancestors, script‑src, connect‑src Stripe)
  - [ ] HSTS activé
  - [ ] Cookies secure/httponly/samesite
  - [ ] Rate limiting middleware (auth/checkout)
  - [ ] Validation Zod pour inputs server/client
- [ ] Auth
  - [ ] Gardes route pour `/compte` et checkout
  - [ ] Rotation JWT via Supabase (déjà middleware)
- [ ] Anti‑fraude (v1)
  - [ ] Stripe Radar par défaut + règles de base (panier élevé, pays à risque)

## P0 — SEO
- [ ] Schema.org
  - [ ] Product/Offer/AggregateRating JSON‑LD sur PDP
  - [ ] BreadcrumbList
- [ ] Métadonnées
  - [ ] Title/description par variant
  - [ ] Canonical + gestion indexation variantes
- [ ] Sitemaps
  - [ ] Sitemap produits/variantes + images

## P0 — Observabilité
- [ ] Sentry (client + server) avec source maps
- [ ] Logs structurés (niveau, corrélation requête)
- [ ] Web Vitals + analytics d’événements clés (PLP/PDP/cart/checkout)

## Quality Gate (CI/CD, linters, sécurité)
- [ ] CI GitHub Actions
  - [ ] Install + `tsc --noEmit`
  - [ ] `next lint` (réactiver erreurs build)
  - [ ] `next build`
  - [ ] `pnpm audit --audit-level=high`
  - [ ] `gitleaks detect` (secrets)
  - [ ] Lighthouse CI sur PR (budgets perf)
- [ ] Conventions
  - [ ] PR template (DoD, tests, perf, sécurité, screenshots)
  - [ ] CODEOWNERS (`app/**`, `components/**`, `lib/**`)
  - [ ] Conventional commits (feat/fix/chore)
- [ ] Runtime
  - [ ] Schéma d’env Zod au boot (fail fast)
  - [ ] Middleware rate limit

## Design System minimal (Tailwind + Radix)
- [ ] Design tokens
  - [ ] Couleurs (primary, success, warning, danger, grays)
  - [ ] Typographie (échelle, weights)
  - [ ] Spacing/radius/shadows
- [ ] Composants
  - [ ] Card produit (image, badges, prix, note, CTA)
  - [ ] Sélecteurs de variantes (storage, couleur swatches)
  - [ ] Filtres (sidebar + Drawer mobile)
  - [ ] Panier (drawer + page)
  - [ ] Checkout (inputs, résumé sticky, Apple Pay button)
  - [ ] Toasters, skeletons, empty states
- [ ] Accessibilité
  - [ ] Focus visibles, ARIA, labels, navigation clavier
  - [ ] Contrastes conformes WCAG AA

## P1 — Fonctionnalités étendues
- [ ] Recherche instantanée (Algolia/Meilisearch)
- [ ] Avis vérifiés (submission + modération)
- [ ] Emails/SMS transactionnels (commande, expédition)
- [ ] NPS post‑achat
- [ ] Retours & SAV (RMA simple)

## P2 — Croissance et différenciation
- [ ] Trade‑In (reprise)
- [ ] Bundles dynamiques
- [ ] Assurance/extension de garantie
- [ ] Multi‑entrepôts + règles d’allocation
- [ ] A/B testing à l’échelle

## Paiements (détails)
- [ ] Stripe
  - [ ] Création PaymentIntent côté serveur
  - [ ] Payment Request Button (Apple Pay/Google Pay)
  - [ ] Confirmation + gestion `requires_action`
  - [ ] Webhooks: `payment_intent.succeeded/failed/processing`
  - [ ] Idempotency keys, retries, DLQ (journalisation)

## Logistique (détails)
- [ ] Transporteurs (placeholder v1)
  - [ ] Options: J+1, relais, standard
  - [ ] Calcul ETA (règles simples)
  - [ ] Webhooks tracking (v2 P1)

## SEO (détails)
- [ ] Perf SEO
  - [ ] Critical CSS, preconnect/preload, lazy images
  - [ ] Edge caching et revalidation
- [ ] Contenu
  - [ ] Pages catégorie/intent (ex: iPhone 17 Pro 256 Go)
  - [ ] Micro‑copie conversion (USP, confiance, garanties)

---

### Notes d’implémentation
- Prioriser P0 end‑to‑end (PLP → PDP → Panier → Checkout) avec données dynamiques.
- Mesurer en continu: conversion, auth success, abandon panier, temps PSP, erreurs webhook.
- Réduire dette: réactiver `eslint`/TypeScript en CI, retirer `ignoreDuringBuilds`/`ignoreBuildErrors` à court terme.


