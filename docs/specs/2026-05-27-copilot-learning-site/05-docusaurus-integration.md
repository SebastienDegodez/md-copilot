# Spec 05 — Intégration Docusaurus et distribution APM

**But** : Décrire comment l'utilisateur final merge ce contenu dans son Docusaurus, et comment les agents sont distribués via APM.

---

## 1. Livrable

À la fin du projet, un répertoire racine contient :

```
copilot-learning-site/
├── docs/                          # à copier dans docs/ du Docusaurus user
├── sidebars.ts.fragment.js        # à merger à la main
├── .github/agents/                # les 4 .agent.md
├── apm.yml.fragment.yml           # fragment à merger dans le apm.yml user
└── README.md                      # instructions de merge
```

## 2. Mode d'emploi (côté utilisateur)

### 2.1 Copier la doc

```bash
cp -r copilot-learning-site/docs/* mon-docusaurus/docs/
```

### 2.2 Merger la sidebar

Ouvrir `sidebars.ts` côté utilisateur et insérer la catégorie exportée par `sidebars.ts.fragment.js` :

```ts
const { copilotLearningSidebar } = require('./sidebars.ts.fragment.js');

const sidebars = {
  tutorialSidebar: [
    // … contenu existant
    copilotLearningSidebar,
  ],
};
```

### 2.3 Installer les agents (APM)

```bash
apm install <owner>/<repo>/agents/copilot-mentor --target copilot
apm install <owner>/<repo>/agents/exercise-grader --target copilot
apm install <owner>/<repo>/agents/track-planner --target copilot
apm install <owner>/<repo>/agents/skill-auditor --target copilot
```

Ou alternative : copier directement `.github/agents/*.agent.md`.

### 2.4 Vérifier

```bash
npm run start  # docusaurus
```

→ La nouvelle catégorie « GitHub Copilot — Apprentissage » apparaît dans la sidebar.

## 3. README.md (gabarit livré)

Le `README.md` à la racine du livrable contient :

1. Le but du contenu (1 paragraphe).
2. Les 4 étapes ci-dessus.
3. Les pré-requis (Docusaurus v2 ou v3, Node 18+, optionnel APM CLI).
4. Comment contribuer (renvoie vers les specs de ce dossier).
5. Crédits (référence non-bloquante, spec 00 §6).

## 4. Versionning du contenu

- Tag Git par release : `v1.0.0` à la première publication complète.
- Les modules sont stables après v1.
- Les agents évoluent indépendamment (versionnés par leur fichier `.agent.md` propre + changelog inline).

## 5. apm.yml — fragment

```yaml
# apm.yml.fragment.yml
includes: auto

dependencies:
  # Les 4 agents publiés depuis ce repo
  - <owner>/<repo>/agents/copilot-mentor
  - <owner>/<repo>/agents/exercise-grader
  - <owner>/<repo>/agents/track-planner
  - <owner>/<repo>/agents/skill-auditor
```

Le fragment est à merger dans le `apm.yml` du repo cible (rajouter sous `dependencies:` existant).

## 6. Validation finale

Avant tag `v1.0.0` :

- [ ] `npm run build` du Docusaurus passe sur un repo neuf après merge.
- [ ] Les 4 agents s'installent via `apm install` sans erreur.
- [ ] Chaque agent a son eval (spec 09) qui passe à 100 %.
- [ ] Le README permet à un dev qui découvre le repo de tout installer en < 15 minutes.

## 7. Non-objectifs

- Plugin Docusaurus dédié (overkill).
- Theme custom.
- CI/CD du repo livrable (à la charge de l'utilisateur).
- Hébergement (à la charge de l'utilisateur).
