---
name: cas-client
description: Crée la vidéo motion design d'un cas client Tulco Studio (Hyperframes, HTML + GSAP) et l'intègre dans le carrousel Réalisations du site. À utiliser dès qu'Antoine demande une vidéo de réalisation, un cas client animé, ou cite un client à mettre en vidéo (Nichebloom, Volcom…), même sans dire « skill ». Reprend la méthode, le découpage, la charte et les pièges appris sur la vidéo Studio Muxi.
---

# Cas client · vidéo motion design Tulco Studio

Une vidéo par réalisation, qui montre concrètement ce qui a été mis en place, au lieu de le raconter. Référence aboutie : `motion/studio-muxi/` (composition) et la carte Studio Muxi de `index.html` (section `#realisations`). **Partir de cette référence, ne jamais repartir de zéro.**

## 0. Avant d'écrire une ligne : collecter

Demander à Antoine (en une fois, liste courte) ce qui manque :

1. **Avant / après** : quels outils avant (Excel, site vitrine, autre), quels outils après (Shopify, ERP, emailing, Pennylane…), et d'où vient le gain (quelles tâches).
2. **Captures réelles** : ancien site, nouveau site, admin Shopify (collections, produits), tout écran montrable. Les recadrer **sans barre de navigateur ni icônes d'extension** (`ffmpeg -vf crop=...`), garder juste l'écran.
3. **Logo du client** (PNG ou SVG) et orthographes exactes : marque vs produits (ex. marque Studio **Muxi**, produit Tapis **Muxu**).
4. **Vrais noms** de collections, catégories (types de produit), produits : les lire sur la capture de l'admin Shopify.
5. **Chiffres autorisés** : seuls ceux qu'Antoine valide (brief : aucun chiffre de gain inventé). Tout autre chiffre à l'écran est illustratif : le signaler dans chaque compte rendu.
6. **Prénom** de l'interlocuteur côté client s'il apparaît (ex. « Côté Fanny »).
7. **Indicateur final** : quel résultat business montrer (Studio Muxi : jours récupérés + **EBITDA** en hausse, pas « ventes »).

Remettre en question le storyboard avant de produire : la vidéo doit dire vrai (ex. « la **boutique** passe sur Shopify », pas « tout passe sur Shopify » : le reste vit dans l'outil de pilotage, hors Shopify mais relié).

## 1. Mise en place technique

- Outils : Hyperframes (HTML + GSAP rendu en MP4 par Chrome headless), ffmpeg, Chromium (préinstallés dans les sessions cloud).
- Skills Hyperframes : `git clone --depth 1 https://github.com/heygen-com/hyperframes <scratchpad>/ext/hyperframes`. Lire `skills/hyperframes/SKILL.md`, `references/format.md`, `references/motion.md`.
- Lanceur CLI (jamais `npx hyperframes` direct) :
  ```bash
  export HYPERFRAMES_NO_TELEMETRY=1 DO_NOT_TRACK=1
  HF=<scratchpad>/ext/hyperframes/skills/hyperframes/scripts/plugin-cli.mjs
  node $HF snapshot --at 3.6,12,25    # images clés + contact-sheet à regarder
  node $HF check --json               # lint + mise en page
  node $HF render --quality delivery -o renders/<slug>-fr.mp4
  ```
- Nouveau cas : `cp -r motion/studio-muxi motion/<slug>` puis adapter `index.html`, `assets/`, `meta.json`. `.gitignore` du projet exclut `.hyperframes/` et `*.mp4` (les rendus bruts ne sont pas commités).
- Réseau : l'environnement cloud « tulco-studio » autorise koalary.com, pennylane.com et le stockage des vidéos de référence. Un logo introuvable (pas dans simple-icons ni iconify) se récupère sur le site officiel de la marque, après avoir ajouté l'hôte à l'environnement (`get_environment` puis `update_environment`).
- Logos déjà prêts dans `motion/studio-muxi/assets/` : `excel.svg`, `shopify-bag.svg`, `shopify-logo-mono.svg`, `webflow.svg`, `pennylane.svg`, `pennylane-mark.svg`, police `fonts/Switzer-Variable.ttf`. Logo Tulco : SVG inline (symbole `rect 20,22,60,14 rx5` + `path M28 80 L44 80 L66 38 L50 38 Z`, texte Switzer « Tulco » 600 + « Studio » 400).

## 2. Découpage de la vidéo (modèle Studio Muxi, ≈ 50 s)

L'histoire est écrite sur son horloge (`story`), puis jouée ralentie après l'intro : `temps vidéo = INTRO + temps histoire × SLOW` (Studio Muxi : `INTRO = 4.6`, `SLOW = 1.6`).

| # | Scène | Contenu | Règles apprises |
|---|---|---|---|
| 0 | Intro | Bandeau bleu « CAS CLIENT » (Switzer 700, 40 px, fond #003EC7, texte blanc), logo client × logo Tulco, phrase type tagline du hero : « Une boutique [logo Shopify mono] / et un outil de pilotage sur mesure » | Logos **centrés et de largeur comparable** (mesurer les boîtes sur l'image, recadrer le `viewBox` du SVG Tulco). Phrase en Switzer 600, tracking −0,04 em, ≈ 80 px, logo Shopify mono inline (1,163 em). |
| 1 | Avant | Mur de fichiers Excel reproduits fidèlement + ancien site (capture), titre « Commandes, coûts, marges : tout passait par [Excel] Excel. » | Titre mot par mot sur fond flouté. |
| 2 | Ressaisie | Gros plans caméra sur des cellules, copier (⌘C) / coller d'un fichier à l'autre, panoramiques flous, erreur `#REF!` | **Compteur d'heures** (« Temps de ressaisie · 0 h → 32 h / mois »), gros (58 px), centré en bas. 32 h = les ≈ 4 jours de la fin. |
| 3 | Avant / après | Carte capture ancien site « Avant · Webflow » qui se retourne en « Après · Shopify », titre « La boutique passe sur Shopify. », la carte s'agrandit et devient la boutique | Vignettes en 56 px, logos 58 px. |
| 4 | Côté client | Accueil réel (capture), clic, fiche produit / paiement / merci reproduits **aux couleurs du client** (logo, couleur, police, bandeau) | Légende en carte blanche bas gauche : tag « Côté client » + phrase 46 px. |
| 4 bis | Transition pilotage | « Et derrière la boutique ? » → fichiers Excel serrés au centre qui convergent dans un bloc bleu « Pilotage · <client> · par Tulco », Shopify (boutique) à gauche et l'outil métier (Pennylane, ERP…) à droite, liaisons tracées avec données qui circulent, le bloc s'ouvre sur l'interface | Indispensable : montre que l'outil est **hors Shopify mais relié**. Fichiers rapprochés, pas aux coins. |
| 5 | Côté <prénom> | Interface de pilotage **en charte Tulco** : en-tête logo Tulco « Pilotage / <client> », badge « Connecté à Shopify + Pennylane », onglets Dashboard (actif) · Commandes · Facturation · Inventaire · Produits, 3 cartes à poutre bleue : 01 Commandes synchronisées, 02 Marges contrôlées (en **%**, onglets Produit / Catégorie / Collection, repère 50 %, rouge sous le repère), 03 Facturation électronique automatisée (facture qui se remplit, tampon « [Pennylane] transmise ✓ ») | Caméra qui visite chaque carte (zoom ≈ 1,45). Pas de compteur décoratif (le compteur de factures a été retiré). |
| 6 | Résultat | Aplat **#003EC7** + grille blanche de la charte, « ≈ 4 jours / récupérés chaque mois », 3 cases cochées (les 3 bénéfices), courbe de l'indicateur validé (EBITDA), logos client × Tulco | Jamais de dégradé de bleus inventés. |

Adapter les scènes au cas (ex. Nichebloom : plusieurs outils branchés autour de Shopify, IA sur tâches récurrentes, ventes revendeurs), mais garder la logique : douleur concrète → bascule → outil de pilotage relié → résultat.

## 3. Charte et lisibilité (non négociable)

- Couleurs Tulco : un seul bleu porteur **#003EC7** ; bleus clairs autorisés #D7E0F6 et #EDF1FB ; encre #14171C ; gris bleutés de `_ds/.../tokens/colors.css` ; succès #0E7B63, alerte #B12E44. Les logos des outils restent dans leurs couleurs officielles, la boutique du client dans les siennes.
- Polices : Switzer (titres, légendes, interface Tulco). Mono : JetBrains Mono (le mono système de la charte n'existe pas au rendu). Imitations d'outils : Inter ; boutique du client : sa police (Studio Muxi : Poppins, embarquée par Hyperframes).
- Interface Tulco : angles droits, bordures 1 px #E1E5EC, poutre bleue 4 px en tête de carte, étiquettes mono en capitales, fond quadrillé.
- **Lu sur mobile** : rien d'essentiel sous ≈ 40 px dans le canevas 1920 × 1080 ; titres 76–92 px ; légendes 46 px. Rappeler à chaque livraison que le 16:9 reste petit sur téléphone (version verticale 4:5 à prévoir).
- **Rythme** : si Antoine trouve que ça va vite, augmenter `SLOW` plutôt que de réécrire les temps ; tenir chaque phrase ≈ 0,5 s + 0,3 s par mot.

## 4. Pièges techniques déjà rencontrés

- **Classe `.fill`** réservée aux calques plein cadre (`position: absolute; inset: 0`) : ne pas la réutiliser sur un bouton (le bouton s'est retrouvé collé en haut). Utiliser `.solid`.
- GSAP 3 ne gère pas `className` : animer `boxShadow`, `backgroundColor`…
- Changement de texte réversible : helper `swapText(el, texte, t)` (proxy `{v}` + `onUpdate`), jamais `innerHTML` en `tl.set`.
- Pas de gabarit `${…}` dans `querySelector` (le compilateur Hyperframes plante) : `document.getElementById`.
- Toutes les scènes sont des `.clip` sur toute la durée, visibilité pilotée par `show(id, début, fin)` (opacité) sur l'horloge de l'histoire. Conséquence : `check` remonte de faux `text_occluded` ; vérifier à l'image, pas au lint.
- Décaler un bloc de scènes : timeline imbriquée (`tlCD`, `tlD`) ajoutée avec un décalage (`story.add(tlCD, SHIFT)`), au lieu de réécrire chaque temps.
- Positions de caméra : `centerIn(élément, monde)` mesuré au chargement, puis `cam(échelle, x, y)` ; mesurer avant tout déplacement du contenu (soustraire la largeur d'écran pour les écrans d'un « track »).
- Une cellule qui doit apparaître plus tard (`#REF!`) doit être vide dans les données initiales.
- Débogage navigateur local : servir gsap, React, Babel depuis des paquets npm (`npm pack`) via `page.route` de Playwright ; unpkg et jsdelivr sont bloqués, et lancer un serveur HTTP local est refusé.
- Toujours regarder les images (snapshot + contact-sheet, puis quelques images extraites du MP4 rendu) avant d'annoncer quoi que ce soit.

## 5. Intégration au site

1. Encoder pour le web :
   ```bash
   ffmpeg -i motion/<slug>/renders/<slug>-fr.mp4 -vf scale=1600:-2 -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -movflags +faststart -an assets/video/<slug>-fr.mp4
   ffmpeg -ss <fin-1> -i motion/<slug>/renders/<slug>-fr.mp4 -frames:v 1 -vf scale=1600:-2 -q:v 4 assets/video/<slug>-fr.jpg
   ```
2. Dans `index.html`, section `#realisations` : remplacer le visuel statique de la carte du client par le bloc `<video class="case-video" … muted loop playsinline preload="none">` et la liste d'étapes `<ol class="case-steps">` (modèle : carte Studio Muxi, ids à rendre uniques et à brancher dans `_setupCases`).
3. Temps des étapes (`data-t`) = `INTRO + début de scène (horloge histoire) × SLOW`. Mettre à jour la durée de repli (`video.duration || …`).
4. Tester avec Playwright (lecture auto quand la carte est visible, étape active synchronisée, flèches du carrousel) sur ordinateur et mobile.
5. Page anglaise `en/index.html` : la garder alignée (README) ; la vidéo anglaise demande un rendu avec textes traduits. Le signaler si non fait.

## 6. Livraison

- Commit et push sur la branche de travail de la session (jamais `main` sans accord : `main` = production GitHub Pages).
- Envoyer le MP4 rendu à Antoine (`SendUserFile`, display `render`).
- Compte rendu court, en français : ce qui a changé point par point, puis ce qui reste inventé ou à valider (chiffres, noms, mobile, page EN).
