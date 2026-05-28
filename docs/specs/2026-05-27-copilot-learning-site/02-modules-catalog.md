# Spec 02 — Catalogue des modules

**But** : Définir le contenu, durée, complexité, exercice et critère de validation de chaque module. Conforme au gabarit défini en spec 01.

**Numérotation** : `{bloc}{numéro}` — bloc 1 = Fondations (primitives), bloc 2 = Composition (distribution/orchestration), bloc 3 = Ingénierie de Contexte (optimisation/mesure). Chemin cible : `docs/learning-path/{bloc}-{nom-bloc}/{NNN}-slug.md`.

**Progression** : Opérateur → Architecte → Context Engineer.

---

## Vue d'ensemble

### Bloc 1 — Fondations (primitives individuelles)

| # | Titre | Durée | Complexité | Pré-requis |
|---|---|---|---|---|
| 100 | Setup & posture | 20 min | ⭐ | — |
| 101 | Instructions personnalisées | 45 min | ⭐⭐ | 100 |
| 102 | Prompts personnalisés | 30 min | ⭐ | 101 |
| 103 | Agents personnalisés | 1 h | ⭐⭐ | 101 |
| 104 | Skills — savoir-faire procéduraux | 1 h 30 | ⭐⭐ | 101 |
| 105 | Hooks — automatismes événementiels | 30 min | ⭐⭐ | 104 |
| 106 | MCP — extensions outils | 1 h 30 | ⭐⭐⭐ | 103 |

### Bloc 2 — Composition (distribution & orchestration)

| # | Titre | Durée | Complexité | Pré-requis |
|---|---|---|---|---|
| 207 | APM — installer et partager | 1 h | ⭐⭐ | 103 |
| 208 | Workflows — orchestrer plusieurs primitives | 1 h | ⭐⭐ | 103, 104 |
| 209 | Plugins — découvrir et installer des extensions | 45 min | ⭐⭐ | 207, 208 |
| 210 | Copilot CLI — automatiser depuis le terminal | 30 min | ⭐ | 100 |

### Bloc 3 — Ingénierie de Contexte (optimisation & mesure)

| # | Titre | Durée | Complexité | Pré-requis |
|---|---|---|---|---|
| 311 | Tokens & fenêtre de contexte | 45 min | ⭐⭐⭐ | 104, 208 |
| 312 | Patterns de sobriété | 45 min | ⭐⭐⭐ | 311 |
| 313 | Outils de réduction (snip, minimal-context-tools) | 1 h | ⭐⭐⭐ | 311 |
| 314 | Autoresearch — méthodologie de skill | 2 h | ⭐⭐⭐ | 104, 106 |
| 315 | Tester ses primitives (evals binaires) | 1 h | ⭐⭐⭐ | 104 |

**Total** : ~15 h.

---

## Module 100 — Setup & posture

**Objectif** : installer Copilot dans VS Code, connecter son compte, comprendre la différence entre suggestion inline / chat / agent mode.

**Contenu** :
- Installation de l'extension VS Code Copilot.
- Connexion compte GitHub.
- Tour rapide des 3 surfaces (inline, chat, agent).
- Notion de *prompt* vs *instruction*.

**Exercice** : faire générer une fonction `fizzBuzz` en TypeScript via les 3 surfaces et observer les différences.

**Validation** : tu sais quand utiliser inline / chat / agent.

---

## Module 101 — Instructions personnalisées

**Objectif** : créer et scoper des instructions persistantes.

**Contenu** :
- `.github/copilot-instructions.md` (global repo).
- `.instructions.md` avec frontmatter `applyTo: "**/*.ts"`.
- Bonnes pratiques de rédaction : tutoiement, contraintes explicites, exemples positifs **et** négatifs.

**Diff progressif** : du repo vide → instruction globale → instruction scopée TypeScript.

**Exercice** : ajouter une instruction qui force `vitest` au lieu de `jest` dans un repo.

**Validation** : Copilot suggère désormais `vitest` en autocomplete.

---

## Module 102 — Prompts personnalisés

**Objectif** : créer des `.prompt.md` réutilisables.

**Contenu** :
- Frontmatter `mode: agent | ask | edit`, `description`, `tools`.
- Variables `${selection}`, `${file}`, `${input:name}`.
- Quand un prompt > une instruction (one-shot vs persistant).

**Exercice** : prompt « génère un test Vitest pour la sélection ».

**Validation** : le prompt apparaît dans la palette et fonctionne sur 2 fichiers différents.

---

## Module 104 — Skills (savoir-faire procéduraux)

**Objectif** : comprendre le format `SKILL.md`, sa découverte automatique, le triplet *quand / quoi / comment*.

**Contenu** :
- Anatomie d'un skill : `name`, `description`, `applyTo`, contenu procédural.
- Description = trigger sémantique (≠ documentation).
- Placement : `.agents/skills/<name>/SKILL.md`.
- Skills vs instructions : skill = procédure conditionnelle, instruction = règle permanente.

**Diff progressif** : transformer une instruction « toujours faire X » en skill « quand on demande Y, faire X ».

**Exercice** : créer un skill `writing-commit-message` qui force le format Conventional Commits.

**Validation** : Copilot active le skill quand on lui demande un commit, pas sinon.

---

## Module 103 — Agents personnalisés (`.agent.md`)

**Objectif** : packager un rôle/persona réutilisable.

**Contenu** :
- Frontmatter `.agent.md` : `name`, `description`, `tools`, `model`.
- Différence agent VS Code chatmode (obsolète) — on utilise uniquement `.agent.md`.
- Délégation via l'outil `agent`.
- Quand un agent > un skill (longue conversation, identité, jeu d'outils restreint).

**Exercice** : créer un agent `pair-reviewer` qui ne fait que de la review et n'écrit jamais de code.

**Validation** : l'outil `agent` peut invoquer l'agent et il refuse poliment les demandes d'écriture.

---

## Module 105 — Hooks — automatismes événementiels

**Objectif** : déclencher des actions automatiques sur événements IDE (sauvegarde, commit, appel d'outil).

**Contenu** :
- Concept de hook : code exécuté en réponse à un événement.
- Types : `onSave`, `preCommit`, `postToolUse`.
- Placement : `.github/hooks/` ou via plugin.
- Cas d'usage : lint au save, changelog au commit, validation post-tool.

**Exercice** : créer un hook `onSave` qui exécute un linter et un hook `preCommit` qui valide le format du message.

**Validation** : le hook se déclenche bien sur l'événement, sans intervention manuelle.

---

## Module 207 — APM — installer et partager

**Objectif** : utiliser `apm.yml` pour distribuer skills/agents/prompts.

**Contenu** :
- `apm.yml` à la racine : `includes: auto` + `dependencies:`.
- `apm install <owner>/<repo>/<kind>/<name> --target copilot`.
- Cycle : créer → publier → consommer.
- Versioning par commit SHA / tag.

**Exercice** : installer `danielmeppiel/genesis/skills/genesis` dans un repo neuf et l'utiliser.

**Validation** : `apm install` réussit et le skill apparaît dans `.agents/skills/`.

---

## Module 106 — MCP — extensions outils

**Objectif** : connecter un serveur MCP et exposer ses outils à Copilot.

**Contenu** :
- `mcp.json` dans VS Code.
- Serveurs MCP courants : filesystem, GitHub, fetch, playwright.
- Sécurité : permissions, scopes, secrets.
- Quand MCP > skill (besoin d'un outil exécutable, pas d'une procédure).

**Exercice** : connecter le serveur MCP `github` et faire lister les issues du repo courant.

**Validation** : Copilot peut appeler l'outil et retourne une vraie réponse de l'API.

---

## Module 314 — Autoresearch — méthodologie de skill

**Objectif** : appliquer une discipline rigoureuse pour créer un skill *qui marche* (au lieu de stub).

**Contenu** :
- Cycle : draft → eval binaire (≥10 cas) → changelog → re-eval.
- Format changelog : `## YYYY-MM-DD HH:MM — vN — observation → mutation`.
- Critères de bon eval : binaire, indépendant, reproductible, dérivé du domaine.
- Quand arrêter : 100 % sur 2 passes consécutives.

**Exercice** : refactor un skill existant pour ajouter 10 evals binaires + un changelog initial.

**Validation** : les evals passent à 100 % et le changelog explique chaque mutation.

---

## Module 208 — Workflows — orchestrer plusieurs primitives

**Objectif** : composer instructions + skills + agents pour un objectif métier.

**Contenu** :
- Workflow = séquence orchestrée par un prompt ou un agent.
- Pattern *Outside-In* : agent racine délègue à sous-agents.
- Anti-pattern : super-agent monolithique.

**Diff progressif** : un super-agent → 1 orchestrateur + 3 sous-agents.

**Exercice** : workflow « depuis une issue GitHub, générer specs + plan + code ».

**Validation** : l'orchestrateur enchaîne 3 sous-agents et chacun a un scope clair.

---

## Module 209 — Plugins — découvrir et installer des extensions

**Objectif** : installer des plugins tiers pour étendre Copilot avec des skills, agents et outils pré-packagés.

**Contenu** :
- Concept de plugin : un bundle de skills, agents, hooks et/ou serveurs MCP, distribué via un dépôt Git.
- Marketplace officiel Copilot : `github/awesome-copilot` (60+ plugins).
- Anatomie d'un plugin : `.github/plugin/plugin.json`, dossiers `agents/`, `skills/`.
- Installation : VS Code command palette, `installed.json`, scopes (user / project).
- Plugins communautaires notables : `obra/superpowers`, `SebastienDegodez/copilot-instructions`.
- Comparaison avec Claude Code (`/plugin install`) et Cursor (`.cursor-plugin`).
- Créer son propre plugin : packager ses primitives pour la distribution.
- Sécurité : les plugins exécutent du code (skills + agents) — audit avant installation.

**Exercice** : installer un plugin depuis `awesome-copilot`, l'utiliser sur un cas concret, puis créer un plugin minimal contenant un skill et un agent.

**Validation** : le plugin installé apparaît dans l'espace de travail, le skill qu'il contient se déclenche correctement, et ton propre plugin est installable par un collègue.

---

## Module 315 — Tester ses primitives (evals binaires)

**Objectif** : industrialiser le test des skills/agents.

**Contenu** :
- Eval binaire = assertion booléenne (« le skill a-t-il déclenché ? »).
- Fixtures de prompts + sorties attendues.
- `with_skill` vs `without_skill` : mesurer le delta.
- Stocker les evals dans `evals/` et les versionner.

**Exercice** : 10 evals pour un skill `commit-message`, mesurer le delta avant/après.

**Validation** : le rapport montre `with_skill: 9/10`, `without_skill: 2/10`.

---

## Module 210 — Copilot CLI

**Objectif** : utiliser Copilot depuis le terminal.

**Contenu** :
- `gh extension install github/gh-copilot`.
- `gh copilot suggest "trouve les fichiers > 1MB"`.
- `gh copilot explain "tar -xzf …"`.
- Alias `ghcs` et `ghce`.
- Quand CLI > IDE (scripting, CI, terminal-first).

**Exercice** : créer 3 alias `ghcs` dans son shell et utiliser `gh copilot suggest` pour résoudre une vraie tâche.

**Validation** : tu utilises `ghcs` sans aide-mémoire.

---

## Module 311 — Tokens & fenêtre de contexte

**Objectif** : comprendre comment ton code et tes primitives consomment des tokens, et pourquoi la fenêtre de contexte est une ressource à gérer.

**Contenu** :

### Pourquoi les tokens comptent
- Coût direct, latence, fenêtre de contexte limitée, dilution du signal.
- Référence : article GitHub blog sur token efficiency (cité comme source d'inspiration uniquement).

### Choisir le bon modèle
- Grille de décision : plus petit modèle qui passe les evals.
- Raisonner en prix d'entrée + sortie par 1 M tokens.
- Pattern *generate-then-refine* : puissant pour drafter, petit pour itérer.

### Audit pratique
- Lister ses skills + classer en *garde / fusionne / supprime*.
- Pour chaque agent, vérifier que le `model:` est le plus petit qui passe ses evals.

**Exercice** : auditer 5 skills d'un repo réel et mesurer le delta coût entre modèle actuel et un cran en-dessous.

**Validation** : au moins un agent a vu son modèle abaissé sans dégrader ses evals.

---

## Module 312 — Patterns de sobriété

**Objectif** : appliquer des principes de design qui réduisent naturellement la consommation de tokens.

**Contenu** :

### DDD et Ubiquitous Language
- Un domaine bien nommé = moins de tokens d'explication.

### Object Calisthenics
- Petites classes, un niveau d'indentation, no else, wrap primitives.
- L'IA *comprend* mieux du code à granularité fine → moins de re-prompting.

### SOLID, en particulier SRP / ISP / DIP
- SRP : un fichier = une intention → l'IA charge moins de contexte.
- ISP : interfaces minimales → l'IA hallucine moins de méthodes.
- DIP : abstractions stables → l'IA suggère le bon port.

### Agents très précis vs agents généralistes
- Agent scopé : meilleur signal, moins de drift, tokens d'instructions plus rentables.
- Agent généraliste : à éviter sauf au sommet de l'orchestration.

### Trop de skills nuit
- Skill qui ré-explique ce que le modèle sait déjà = pollution.
- Heuristique : si `without_skill` ≥ 80 % de succès, le skill est probablement inutile.

**Exercice** : refactorer un codebase pour appliquer 3 principes Object Calisthenics et observer le delta de tokens consommés.

**Validation** : le ratio skills/effets a été divisé par 2 et tu as documenté pourquoi.

---

## Module 313 — Outils de réduction (snip, minimal-context-tools)

**Objectif** : utiliser les outils CLI et plugins pour réduire concrètement la consommation de tokens.

**Contenu** :

### Sous-agents plutôt que tout faire en main thread
- Déléguer lecture/recherche à un sous-agent libère le contexte principal.
- Pattern : *raconter à l'orchestrateur, lire dans le sous-agent*.
- Anti-pattern : sous-agent qui copie-colle 500 lignes.

### Outils ciblés (philosophie minimal-context-tools)

| Besoin | Outil naïf | Outil sobre |
|---|---|---|
| Trouver une fonction | `read_file` complet | `extracting-code-structure` |
| Rechercher un pattern | `read_file` puis lecture | `searching-text` (rg) |
| Naviguer une grosse JSON | `read_file` 5000 lignes | `querying-json` (jq) |
| Compter / mesurer | LLM compte (faux) | `analyzing-code` (tokei) |

### SNIP — réduction de tokens au niveau du shell
- CLI Go qui intercepte les sorties terminal et les résume avant renvoi au modèle.
- `brew install edouard-claude/tap/snip` + `snip init --agent copilot`.
- Gain mesuré : 60 à 85 % de tokens en moins sur les sessions CLI intensives.
- Pipelines YAML configurables.

**Exercice** : installer `snip` via `setup-snip-hooks` et comparer la taille de transcript d'une même session avant/après.

**Validation** : tu as une mesure chiffrée du gain SNIP sur ta session de référence.
