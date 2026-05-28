# Spec 04 — Architecture du site

**But** : Définir l'arborescence complète des fichiers `docs/` à produire.

---

## Arborescence cible

```
docs/
├── intro.md                              # Landing FR
├── learning-path/
│   ├── index.md                          # Index + cartes des tracks
│   ├── 00-setup.md
│   ├── 01-instructions.md
│   ├── 02-prompts.md
│   ├── 03-skills.md
│   ├── 04-agents.md
│   ├── 05-apm.md
│   ├── 06-mcp.md
│   ├── 07-autoresearch.md
│   ├── 08-workflows.md
│   ├── 09-evals.md
│   ├── 10-copilot-cli.md
│   └── 11-tokens-et-hallucinations.md
├── reference/
│   ├── index.md
│   ├── instructions-frontmatter.md       # applyTo, description, etc.
│   ├── skill-anatomy.md                  # SKILL.md complet
│   ├── agent-frontmatter.md              # .agent.md complet
│   ├── apm-yml.md                        # apm.yml complet
│   ├── mcp-json.md                       # mcp.json complet
│   └── copilot-cli.md                    # commandes gh copilot
├── cookbook/
│   ├── index.md
│   ├── skill-conventional-commits.md
│   ├── skill-vitest-test.md
│   ├── agent-pair-reviewer.md
│   ├── agent-skill-auditor.md            # le notre — vitrine
│   ├── workflow-issue-to-pr.md
│   └── eval-binaire-template.md
├── methodologie/
│   ├── index.md
│   ├── autoresearch.md                   # cycle draft/eval/changelog
│   ├── tdd-pour-skills.md
│   ├── tokens-efficacite.md              # synthèse module 11
│   └── object-calisthenics-pour-ia.md
└── ressources/
    ├── index.md
    ├── glossaire-fr.md                   # termes français + équivalents anglais
    ├── liens-officiels.md
    └── credits.md                        # crédits spec 00 §6
```

## Sidebar

Fragment à merger dans `sidebars.ts` de l'utilisateur :

```ts
// sidebars.ts.fragment.js — généré par ce projet
const copilotLearningSidebar = {
  type: 'category',
  label: 'GitHub Copilot — Apprentissage',
  items: [
    'intro',
    {
      type: 'category',
      label: 'Parcours',
      items: [
        'learning-path/index',
        'learning-path/00-setup',
        'learning-path/01-instructions',
        // … jusqu'à 11
      ],
    },
    {
      type: 'category',
      label: 'Référence',
      items: [/* …reference/* */],
    },
    {
      type: 'category',
      label: 'Cookbook',
      items: [/* …cookbook/* */],
    },
    {
      type: 'category',
      label: 'Méthodologie',
      items: [/* …methodologie/* */],
    },
    {
      type: 'category',
      label: 'Ressources',
      items: [/* …ressources/* */],
    },
  ],
};

module.exports = { copilotLearningSidebar };
```

## Pages charnières

### `docs/intro.md`

Page d'accueil. Présente :
- Pourquoi le site existe.
- Les 4 grandes parties (Parcours, Référence, Cookbook, Méthodologie).
- Lien direct vers `learning-path/index.md`.

### `docs/learning-path/index.md`

- Carte des 7 tracks (spec 03).
- Pour chaque track : durée, modules, profil cible, CTA « Commencer ».

### `docs/reference/index.md`

Liste des pages de référence avec une ligne par page (pas un sommaire généré, écrit à la main pour la qualité).

### `docs/cookbook/index.md`

Pareil : liste de recettes, chacune avec son objectif en une ligne.

### `docs/methodologie/index.md`

Présentation de la posture (TDD pour skills, autoresearch, sobriété).

### `docs/ressources/index.md`

Pointeurs : glossaire, liens, crédits.

## Pages de référence (détail)

Chacune doit être **exhaustive** sur sa primitive (toutes les clés, tous les types) et tenir en 1 page lisible. Format :

```markdown
# Référence — <primitive>

## Frontmatter / schema
…
## Exemples
…
## Pièges courants
…
## Voir aussi
- Module xx — apprentissage
- Cookbook yy — recette
```

## Pages de cookbook (détail)

Une recette = un objectif concret, un fichier complet copiable, et un mini-mode d'emploi. Format :

```markdown
# Recette — <objectif>

**Quand l'utiliser** : …

**Fichier complet** :
```yaml
…
```

**Mise en place** :
1. …
2. …

**Vérification** : …
```

## Conventions de nommage

- Tout en kebab-case.
- Préfixe numérique pour les modules learning-path (ordre fixe).
- Pas de préfixe numérique ailleurs (ordre via sidebar).
- Extension `.md` exclusivement (pas de `.mdx` sauf raison forte — préserve la portabilité).
