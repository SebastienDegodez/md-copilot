# Spec 11 — Conventions

**But** : Règles transverses qui s'appliquent à toute la production : langue, ton, code, mermaid, terminologie. Centralise ce qui était dispersé.

---

## 1. Langue

- **Français** systématique pour tout texte narratif.
- **Tutoiement** systématique pour s'adresser à l'apprenant.
- Anglicismes techniques tolérés (prompt, skill, agent, MCP, autoresearch) — italique à la première occurrence d'une page.
- Pas de franglais inutile (« je vais review ce code » → « je vais relire ce code »).
- Acronymes développés à la première occurrence : APM (*Agent Package Manager*), MCP (*Model Context Protocol*).

## 2. Ton

- Voix active.
- Phrases courtes (cible : < 25 mots).
- Pas de promesses (« tu vas adorer », « c'est génial »).
- Pas d'auto-référence (« comme on l'a vu plus haut »). Préfère un lien direct.

## 3. Pas d'emojis

Sauf :
- ⭐ pour la complexité (échelle 1–3)
- ✅ / ❌ dans les tableaux comparatifs et dans les checklists de validation
- 📦 / 🔧 / ⚠️ interdits

## 4. Diffs git

Format imposé (cf. spec 01 §5) :

````markdown
```diff
  # chemin/du/fichier
  
  ligne contexte
+ ligne ajoutée
- ligne supprimée
  ligne contexte
```
````

Une seule intention par diff. Si plusieurs intentions, plusieurs diffs successifs.

## 5. Mermaid

- Toujours `flowchart TB`, `flowchart LR`, `sequenceDiagram` ou `stateDiagram-v2`.
- Pas de couleurs personnalisées (préfère style par défaut Docusaurus).
- < 12 nœuds par diagramme — split sinon.
- Pour les agents : sequenceDiagram > flowchart.

## 6. Code blocks

- Langage **toujours** spécifié (` ```bash `, ` ```ts `, ` ```yaml `, ` ```diff `, ` ```mermaid `).
- Commandes shell sans `$` initial.
- Sortie de commande dans un bloc séparé (pas mélangée avec la commande).

## 7. Liens internes

- Préférer les liens relatifs (`../reference/skill-anatomy.md`).
- Format : `[texte explicite](chemin)`. Pas de « cliquer ici ».

## 8. Frontmatter Docusaurus

Minimum systématique :

```yaml
---
id: <slug-sans-numéro>
title: "<numéro si module> — <Titre humain>"
sidebar_position: <n>
description: "<phrase de 1 ligne pour la meta et la card>"
---
```

## 9. Glossaire FR

Tableau centralisé dans `docs/ressources/glossaire-fr.md`. Référence quand un terme apparaît pour la première fois sur le site. Exemples :

| Terme FR | Équivalent EN | Définition courte |
|---|---|---|
| Instruction | Custom instruction | Règle persistante chargée automatiquement par Copilot. |
| Compétence | Skill | Procédure conditionnelle déclenchée par sa description sémantique. |
| Agent | Agent | Persona configurable avec frontmatter `.agent.md` + outils. |
| Évaluation binaire | Binary eval | Assertion booléenne d'un comportement attendu. |

(Le glossaire complet est livré, ce tableau est un extrait.)

## 10. Anti-patterns transverses

- Capture d'écran de l'UI Copilot (le diff suffit, et résiste mieux au temps).
- Vidéo embarquée (rend le site non-autonome).
- « Inspirez-vous de ce gist » : si on a besoin du contenu, on l'embarque inline.
- Émettre du contenu généré par Copilot sans validation humaine (hypocrisie pédagogique).
- Lien externe en sortie OBLIGATOIRE d'un exercice.

## 11. Format des dates

ISO `YYYY-MM-DD`. Heures (changelog autoresearch) en `YYYY-MM-DD HH:MM` (24h).

## 12. Numérotation et noms de fichiers

- Modules learning-path : `NN-slug.md` (NN sur 2 chiffres).
- Reference / Cookbook / Méthodologie : pas de préfixe numérique, kebab-case.
- Specs : préfixe numérique pour ordonner (`00-overview.md` … `11-conventions.md`).

## 13. Crédits

Section « Crédits » uniquement dans `docs/ressources/credits.md`. Pas de remerciement diffus en bas de chaque page (bruit).
