# Tulco Studio — Landing Page

Landing page d'Antoine Luizet / Tulco Studio : logiciels métier sur-mesure pour PME.

## Live

Publiée via GitHub Pages : <https://alproductbuilding.github.io/tulco-studio/>

## Structure

- `index.html` — la page (composants React via `support.js`, design system local).
- `support.js` — runtime DC (charge React 18 depuis unpkg, monte `<x-dc>`).
- `_ds/` — design system Tulco Studio (tokens, fonts, bundle JS, styles).
- `assets/` — images utilisées dans la page (photo + logos clients).
- `uploads/` — sources et brief de rédaction (`landing-tulco-studio.md`).

## Lancer en local

Aucun build. Servir le dossier en HTTP suffit (les chemins relatifs requièrent un serveur, pas `file://`).

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

## Déploiement

GitHub Pages sert la branche `main` à la racine du repo. Tout push sur `main` met la prod à jour.
