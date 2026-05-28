# Plan — Site d'apprentissage GitHub Copilot (FR)

**Date** : 2026-05-27
**Spec racine** : [`../specs/2026-05-27-copilot-learning-site/00-overview.md`](../specs/2026-05-27-copilot-learning-site/00-overview.md)
**Estimation totale** : ~35 h de production

---

## Vue d'ensemble

| Phase | Périmètre | Tâches | Durée |
|---|---|---|---|
| 0 | Échafaudage | 1–3 | ~1 h |
| 1 | Conventions + landing (squelettes) | 4–6 | ~2 h |
| 2 | **Agents d'authoring (bootstrap)** | 7–10 | ~3 h |
| 3 | Modules 00–05 — *produits avec les agents d'authoring* | 11–16 | ~8 h |
| 4 | Modules 06–11 — *produits avec les agents d'authoring* | 17–22 | ~10 h |
| 5 | Tracks + cartographie | 23–24 | ~1 h |
| 6 | Reference / Cookbook / Méthodologie / Ressources | 25–30 | ~5 h |
| 7 | Agents publics Genesis Steps 7–8 | 31–38 | ~4 h |
| 8 | Docusaurus packaging + README + tag v1 | 39–41 | ~1 h |

**Bootstrap inversé** : la Phase 2 crée les 4 agents d'authoring (`handbook-module-writer`, `handbook-linter`, `handbook-eval-builder`, `handbook-glossary-keeper`) **avant** la production de contenu, de sorte que tous les modules (Phases 3–4) et le glossaire (Phase 6) sont rédigés et vérifiés via ces agents — le site devient sa propre vitrine.

Chaque tâche référence sa spec source.

---

## Phase 0 — Échafaudage (1 h)

### Task 1 — Créer l'arborescence cible
- **Spec** : 04-site-architecture
- **Sortie** : tous les dossiers de `docs/learning-path/`, `docs/reference/`, `docs/cookbook/`, `docs/methodologie/`, `docs/ressources/` créés avec un `index.md` placeholder chacun.

### Task 2 — Créer le sidebar fragment vide
- **Spec** : 04, 05
- **Sortie** : `sidebars.ts.fragment.js` avec la structure de catégories, items vides.

### Task 3 — Créer `apm.yml.fragment.yml` et `README.md` squelettes
- **Spec** : 05
- **Sortie** : fichiers à la racine du livrable avec sections présentes, contenu TBD.

---

## Phase 1 — Conventions et page d'accueil (2 h)

### Task 4 — `docs/intro.md`
- **Spec** : 00, 04 §pages charnières
- **Sortie** : landing FR (pourquoi le site, 4 grandes parties, CTA vers learning-path).

### Task 5 — `docs/ressources/glossaire-fr.md` (squelette minimal)
- **Spec** : 11 §9
- **Sortie** : entête + 5 termes pivots (APM, skill, eval, agent, FORCED). Le glossaire complet sera enrichi par `handbook-glossary-keeper` après chaque phase modules.

### Task 6 — `docs/ressources/credits.md` + `liens-officiels.md`
- **Spec** : 00 §6, 11 §13
- **Sortie** : page crédits (Bruniaux, Degodez, Genesis, SebastienDegodez/copilot-instructions) + liens officiels GitHub Copilot.

---

## Phase 2 — Agents d'authoring (bootstrap, 3 h)

**But** : produire les 4 agents qui rédigeront/lintèrent ensuite les modules. Genesis Steps 7–8 sur les handoff packets specs 13–16.

### Task 7 — `handbook-module-writer` (Steps 7b + 8)
- **Spec** : 13
- **Sortie** :
  - `.github/agents/handbook-module-writer.agent.md` (body ≤ 200 lignes, description = 992 chars validée).
  - Écrit en mode draft non-destructif vers `docs/_drafts/learning-path/`.
  - Evals : `evals/handbook-module-writer/triggers.yml` (≥ 16, 60/40 split) + `content.yml` (3 fixtures ⭐ / ⭐⭐ / ⭐⭐⭐).
- **Critère ship** : 100 % val triggers + 3/3 content fixtures produisent un draft conforme spec 01.

### Task 8 — `handbook-linter` (Steps 7b + 8)
- **Spec** : 14
- **Sortie** :
  - `.github/agents/handbook-linter.agent.md` (read-only, 9 checks).
  - Evals : 3 fixtures (module conforme / module avec 3 défauts / module sans front-matter) + ~20 triggers.
- **Critère ship** : détecte tous les défauts injectés des fixtures, n'invente pas de défauts sur le module conforme.

### Task 9 — `handbook-eval-builder` (Steps 7b + 8)
- **Spec** : 15
- **Sortie** :
  - `.github/agents/handbook-eval-builder.agent.md`.
  - Generates `evals/<agent>/triggers.yml` (60/40) + `content.yml` à partir d'un packet spec.
  - Self-eval : génère ses propres evals pour spec 08 (`exercise-grader`) en vitrine, vérifié manuellement.
- **Critère ship** : refuse poliment si packet < 2 fixtures content (anti-pattern garde-fou).

### Task 10 — `handbook-glossary-keeper` (Steps 7b + 8)
- **Spec** : 16
- **Sortie** :
  - `.github/agents/handbook-glossary-keeper.agent.md`.
  - Démarche scan → confirmation → édition seule de `glossaire-fr.md`.
  - Evals : 3 fixtures corpus + ~16 triggers.
- **Critère ship** : ne modifie aucun autre fichier que `glossaire-fr.md`.

**Sortie de phase** : 4 `.agent.md` opérationnels, 8 fichiers d'evals, tous au vert. Les agents NE sont PAS ajoutés à `apm.yml` (local-only, spec 12 §6).

---

## Phase 3 — Modules 00 à 05 (8 h) — *produits via `handbook-module-writer`*

Workflow par module : (1) invoquer `handbook-module-writer` avec spec 02 §module → draft dans `docs/_drafts/`. (2) Revue humaine + édition. (3) `handbook-linter` en revue read-only. (4) Déplacement vers `docs/learning-path/`. (5) Re-lint final.

### Task 11 — Module 00 — Setup & posture
### Task 12 — Module 01 — Instructions personnalisées
### Task 13 — Module 02 — Prompts personnalisés
### Task 14 — Module 03 — Skills
### Task 15 — Module 04 — Agents (`.agent.md`)
### Task 16 — Module 05 — APM

Pas de captures d'écran (spec 11 §10). Chaque module passe le lint avant merge.

---

## Phase 4 — Modules 06 à 11 (10 h) — *produits via `handbook-module-writer`*

### Task 17 — Module 06 — MCP
### Task 18 — Module 07 — Autoresearch
### Task 19 — Module 08 — Workflows
### Task 20 — Module 09 — Evals binaires
### Task 21 — Module 10 — Copilot CLI
### Task 22 — Module 11 — Tokens et hallucinations
- **Spec** : 02 §Module 11 (9 sous-sections, incl. SNIP, minimal-context-tools, runSubagent)
- **Sortie** : module le plus long (~2 000 mots), sert de référence pour la section heuristiques d'audit.

---

## Phase 5 — Tracks (1 h)

### Task 23 — `docs/learning-path/index.md`
- **Spec** : 03 §Page d'index
- **Sortie** : cartes des 7 tracks (A–G).

### Task 24 — Pied de page « Ce module fait partie de » sur les 12 pages module
- **Spec** : 03 §Mapping inverse

---

## Phase 6 — Reference, Cookbook, Méthodologie, glossaire complet (5 h)

### Task 25 — `docs/reference/instructions-frontmatter.md`
### Task 26 — `docs/reference/skill-anatomy.md`
### Task 27 — `docs/reference/agent-frontmatter.md` + `apm-yml.md` + `mcp-json.md` + `copilot-cli.md`
### Task 28 — `docs/cookbook/` : 6 recettes (cf spec 04)
### Task 29 — `docs/methodologie/` : 4 pages (autoresearch, tdd-pour-skills, tokens-efficacite, object-calisthenics-pour-ia)
### Task 30 — Glossaire complet via `handbook-glossary-keeper` + indices `reference/` / `cookbook/` / `methodologie/` finalisés.

---

## Phase 7 — Agents publics : Genesis Steps 7–8 (4 h)

Les 4 agents distribués via APM (specs 07–10) finalisés et evalués.

### Task 31 — `.github/agents/copilot-mentor.agent.md` (Step 7b)
- **Spec** : 07
### Task 32 — Evals copilot-mentor (content + trigger) via `handbook-eval-builder`
### Task 33 — `.github/agents/exercise-grader.agent.md`
- **Spec** : 08
### Task 34 — Evals exercise-grader + 3 fixtures repos
### Task 35 — `.github/agents/track-planner.agent.md`
- **Spec** : 09
### Task 36 — Evals track-planner (3 dialogues fixtures)
### Task 37 — `.github/agents/skill-auditor.agent.md`
- **Spec** : 10
- **Sortie** : body avec grille de scoring C1–C4 + template rapport. Vitrine dans `docs/cookbook/agent-skill-auditor.md`.
### Task 38 — Evals skill-auditor (4 fixtures repos audités)

---

## Phase 8 — Packaging et release (1 h)

### Task 39 — Finaliser `apm.yml.fragment.yml` avec les **4 agents publics seulement**
- **Spec** : 05 §5, spec 12 §6 (les 4 `handbook-*` restent locaux)

### Task 40 — Finaliser `README.md` du livrable
- **Spec** : 05 §3 — mentionner les agents d'authoring + leur emplacement.

### Task 41 — Validation finale (spec 05 §6)
- [ ] `npm run build` sur Docusaurus neuf passe.
- [ ] `apm install` des 4 agents publics OK.
- [ ] Toutes les evals (12 fichiers : 4 authoring + 4 publics + 4 self-eval) passent à 100 %.
- [ ] Onboarding new dev < 15 min.
- → Tag git `v1.0.0`.

---

## Récap

- **11 modules** (00–11), gabarit autonome (spec 01), **produits via `handbook-module-writer`**.
- **4 agents publics** Genesis (specs 07–10), distribués via APM.
- **4 agents d'authoring** (specs 13–16), locaux, bootstrappent toute la production.
- **7 tracks** (spec 03).
- **Reference (6) + Cookbook (6) + Méthodologie (4) + Ressources (4)** pages annexes.
- **Patch Docusaurus mergeable** + agents publics distribuables via APM.
- **Aucune dépendance externe bloquante** — site reconstructible depuis ces 17 specs.

## Ordre d'exécution recommandé

Phases 0 → 1 → **2 (bootstrap agents authoring)** → 3 → 4 → 5 → 6 → 7 → 8.

La Phase 2 est le verrou : aucun contenu de module n'est produit avant que les 4 agents d'authoring soient au vert sur leurs evals. Les Phases 6 et 7 peuvent commencer dès que les modules concernés sont livrés (6 dépend des modules pour les renvois, 7 dépend des modules pour les ground-truth d'evals).
