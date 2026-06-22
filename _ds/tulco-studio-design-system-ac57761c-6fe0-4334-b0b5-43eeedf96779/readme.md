# Tulco Studio — Design System

The brand & interface system for **Tulco Studio** — Antoine Luizet's practice building the custom business software that PMEs are currently bricolant in Excel: operations, billing, HR, piloting. Sur-mesure interfaces and automations *qui tiennent*, shipped fast with measurable ROI.

> **tulco** — Quenya for *support / prop / beam* ("étai"). The mark is a beam shouldered by a diagonal strut. That's the whole promise made visual: **structure that holds**. This system turns that idea into a complete engineered visual language — sharp corners, a single load-bearing blue, blueprint grays, and a bespoke icon set built from beams and struts.

---

## 1 · Positioning & context

Tulco Studio sells a **gain chiffré, not hours**. The offer is a three-tier value ladder:

- **Palier 0 — Diagnostic « Ops & Gains »** (paid, 1–2 wks): workflow map + quantified upside (jours-homme/mois, ETP, €) + prioritised build plan.
- **Palier 1 — Build « première version en 6 semaines »** (forfait): one core business tool live and adopted. Cadrage S1 · build S2–5 · déploiement S6.
- **Palier 2 — Régie mensuelle / partenaire produit** (recurring): maintenance + new bricks over time.

**ICP:** TPE/PME of 10–50 with real operational activity; an accessible dirigeant or DAF/DOP, no DSI, fast decisions. **Trigger:** "on croule sous Excel et Airtable, on perd du temps, zéro visibilité, des erreurs de saisie et de facturation."

**Proof points (avant/après):** Joji Prod ≈ 1 ETP économisé · Contentsquare ≈ dizaines de milliers d'€ + ≈ 6 j/mois rendus · Flat Checker — ops & facturation automatisées, CA doublé · Alfred Hub ≈ 2 h/semaine/personne.

**Differentiation to say out loud:** sur-mesure (not just no-code) · operator before builder (terrain retail/merch — Volcom, Spyder) · single senior contact · AI only when the value is real.

### Sources

- `uploads/Offre_V1.md` — the offer & landing brief (FR). The system's content and the landing UI kit are built directly from it.
- `uploads/README.txt` — original brand charter (logo « Étai », Switzer, Tulco Blue).
- Logo package (SVG) → `assets/logos/`; Switzer variable TTFs → `assets/fonts/`.

No GitHub repo, Figma file, or production codebase was attached. The landing is a faithful build of the offer brief, not a recreation of an existing live page.

---

## 2 · Content fundamentals

The voice is **operator-to-operator**: confident, concrete, ROI-anchored, zero jargon.

- **Person.** First-person singular for Antoine ("je conçois", "je construis"), direct second person to the prospect ("vos équipes", "votre back-office"). One human, senior, speaking plainly.
- **Casing.** Sentence case everywhere; the wordmark is **Tulco Studio** — always a capital **T** and **S** (Semibold *Tulco* + Regular *Studio*). Eyebrows/labels are **UPPERCASE MONO** with wide tracking (the blueprint voice). No Title Case in prose.
- **Anchor on the number, never the rate.** Always quantify the gain — *« environ 1 ETP économisé »*, *« ≈ 6 jours par mois rendus »*, *« CA doublé »*. Numbers render in tabular/mono. Never lead with a day-rate.
- **No hype, no fashion.** No "révolutionnaire", no AI-as-gadget. AI is named only when the gain is concrete. Short declarative sentences.
- **Ban "AI" typographic tells.** Never use the long dash (em `—` or en `–`) in brand copy. Use a comma, period, or colon instead; use "à" for number ranges ("2 à 5", "1 500 à 2 500 €"), never "2–5". This is a hard rule across all generated copy.
- **Language.** French. Keep it translatable (short, literal) for an eventual EN version.
- **Emoji.** None, ever.

**Tone examples (from the brief):**

> « Vos équipes vivent dans Excel. Je construis le logiciel qui les en sort. » « Logiciels métier sur-mesure pour PME : opérations, facturation, RH. Une première version en 6 semaines. » « Un back-office qui vous freine ? Réservez un diagnostic Ops & Gains. »

---

## 3 · Visual foundations

The system is **engineered / blueprint**: precise, structural, calm. Everything reads like something that was *built to hold*.

- **Corners are SHARP.** Cards, sections, media — radius `0`. Controls (buttons, inputs) get a minimal `2px` only. No pills except the rare status dot. This is the single most load-bearing rule of the refresh.
- **Color.** One hero — **Tulco Blue `#003EC7`**, the "beam", used sparingly for the mark, primary actions, links, and KPI emphasis. Ink is cool (`#14171C`). Neutrals are **cool, bluish grays** (`#F1F3F7` paper, `#E1E5EC` borders) — a blueprint palette, not warm stone. Semantic: `danger`/`#B3261E` for *douleur*, `success`/`#117A52` for *gain*. No second brand color, no gradients, no bluish-purple.
- **Type.** Switzer for everything human (Semibold titles, Regular body, tight tracking). **Mono** (system) for technical labels, eyebrows, and all data/figures — tabular-nums on. The mono/Switzer pairing is the type signature.
- **The grid.** A faint 24px millimetric grid (`--grid-bg`) is the recurring background device — the page literally sits on graph paper. Use it behind hero/section blocks at low contrast.
- **Backgrounds.** Flat white or `#F1F3F7`, or ink `#14171C` for inversion. No photography by default, no texture, no illustration. The beam symbol may appear oversized, cropped, at \~5% opacity as a structural watermark.
- **Cards.** Square, hairline border, **near-zero shadow** — the border does the structural work. Signature variant `marked` lays a 3px blue beam across the top edge. Hover = blue border (not lift/scale).
- **Borders & shadows.** Hairline `1px #E1E5EC` everywhere; shadows are almost absent (`--shadow-sm`/`md` max). Structure over softness.
- **Motion.** Mechanical and sober — `cubic-bezier(0.2,0,0,1)`, 110–340ms, fades and small orthogonal transl(≤8px). **No bounce, no spring, no parallax.** Respect `prefers-reduced-motion`.
- **Hover / press / focus.** Hover darkens blue (`--accent-hover`) or fills ghost with `--bg-subtle`; never lightens. Press = darken + 1px down nudge, no scale. Focus = `3px` light-blue ring.

---

## 4 · Iconography

**Bespoke set — no third-party library.** Every Tulco icon is constructed from the brand's two structural primitives:

- **Beams** — orthogonal bars (horizontal/vertical).
- **Struts** — 45° diagonals (the étai's diagonal made functional: a magnifier handle, a growth line, a fold, a truss).

Rules: 24px grid, 2px stroke, **squared joins + butt caps (never round)**, `currentColor`, sized on the type scale (16/20/24). Filled "beam" glyphs (`valeur`, `beam`) use solid bars. Mixing in another icon set breaks the language — don't.

The 14 names map to the offer: `diagnostic`, `operations`, `automation`, `facturation`, `rh`, `portail`, `dashboard`, `gain`, `valeur`, `chaos` (the Excel mess — "before"), `structure` (a truss — "after / ça tient"), `methode`, `contact`, `beam`.

Use the `Icon` component (`components/core/Icon.jsx`) in code; standalone SVGs live in `assets/icons/`. The logo/mark is **not** a UI icon — never inline it as a bullet, and never redraw it by hand (use the SVGs in `assets/logos/` or the `Logo` component).

> **Note:** this bespoke set replaces the earlier Lucide placeholder. It is intentionally minimal — extend it by composing new glyphs from the same beam+strut grammar.

---

## 5 · Index / manifest

**Root**

- `styles.css` — global entry (import this one file) → `@import`s the tokens below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/logos/` — logo SVGs · `assets/icons/` — the 14 bespoke icons · `assets/fonts/` — Switzer.
- `readme.md` (this file) · `SKILL.md` — Agent-Skill manifest.

**Foundations** (Design System tab cards) — `guidelines/`

- Colors (primary / neutrals / semantic), Type (display / body / wordmark), Spacing (scale / corners & shadows), Brand (lockups / symbol / clearspace), Icons.

**Components** — `components/core/`

- `Button`, `IconButton`, `Icon`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Card`, `Badge`, `Tag`, `Avatar`, `Logo`.

**UI kits** — `ui_kits/`

- `website/` — the Tulco Studio landing, built section-by-section from the offer brief.

**Templates** — `templates/`

- `landing/` — a reusable landing starting point consuming projects can copy.

Run `check_design_system` after edits to confirm the project compiles and to get the runtime namespace for mounting components in card HTML.
