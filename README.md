# Tulco Studio · Landing Page

Landing page d'Antoine Luizet / Tulco Studio : j'outille les marques sur Shopify pour gagner du temps et grandir (produit, ventes, pilotage).

## Live

Publiée via GitHub Pages : <https://alproductbuilding.github.io/tulco-studio/>

## Structure

- `index.html` : la page en français (composants React via `support.js`, design system local).
- `en/index.html` : la version anglaise (chemins relatifs en `../`), à garder alignée à chaque modification de la page FR.
- `og-card.html` / `og-card-en.html` : sources des images de partage `og.png` / `og-en.png`.
- `tulco-prefs.js` : bandeau cookies (FR/EN, conforme CNIL) ; charge Google Tag Manager (GTM-55KFWB5S) uniquement après « Tout accepter ». Lien « Gestion des cookies » en pied de page pour revenir sur son choix.
- `confidentialite.html` / `en/privacy.html` : politique de confidentialité (à mettre à jour si un outil de suivi est ajouté dans GTM).
- `support.js` : runtime DC (charge React 18 depuis unpkg, monte `<x-dc>`).
- `_ds/` : design system Tulco Studio (tokens, fonts, bundle JS, styles).
- `assets/` : images utilisées dans la page (photo, logos clients).
- `uploads/` : sources et brief de rédaction (`landing-tulco-studio-v3.md`, la V2 `landing-tulco-studio.md` est archivée).

## Lancer en local

Aucun build. Servir le dossier en HTTP suffit (les chemins relatifs requièrent un serveur, pas `file://`).

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

## Déploiement

GitHub Pages sert la branche `main` à la racine du repo. Tout push sur `main` met la prod à jour.
