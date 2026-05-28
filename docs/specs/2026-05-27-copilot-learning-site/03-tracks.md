# Spec 03 — Tracks (parcours)

**But** : Définir des parcours thématiques traversant les modules pour des objectifs précis.

---

## Principe

Un track est une **séquence ordonnée de modules** qui répond à un objectif d'apprentissage. Un apprenant choisit son track selon son besoin et son budget temps.

Les tracks sont **non-exclusifs** : on peut compléter plusieurs tracks (les modules partagés ne sont faits qu'une fois).

## Catalogue

| ID | Nom | Modules | Durée | Profil cible |
|---|---|---|---|---|
| A | Découverte rapide | 00 → 01 → 02 | 1 h 30 | Curieux, veut goûter |
| B | Productivité quotidienne | 00 → 01 → 02 → 10 | 2 h | Dev qui veut accélérer son flux |
| C | Skill creator | 03 → 07 → 09 | 4 h 30 | Référent qui veut produire des skills *qui marchent* |
| D | Architecte d'agents | 03 → 04 → 08 → 05 | 4 h 30 | Tech lead qui orchestre une équipe |
| E | Complet | 00 → 11 (tous) | 13 h 30 | Veut tout connaître |
| F | Terminal-first | 00 → 02 → 10 | 1 h 20 | Dev qui vit dans le terminal |
| G | Sobriété LLM | 03 → 07 → 11 | 5 h 30 | Veut maîtriser coûts, modèles et hallucinations |

## Page d'index des tracks

Le site présente les tracks dans `docs/learning-path/index.md` sous forme de cartes avec :

- Nom + durée + complexité moyenne
- Une phrase « tu repars avec… »
- Lien vers le premier module

## Critère de complétion d'un track

Un track est considéré complété quand **tous ses modules** sont validés (checklists « Tu es prêt si… » cochées mentalement).

Pas de système de progression interactif (YAGNI — voir spec 00 §7).

## Mapping inverse module → tracks

Pour aider l'apprenant à se situer, chaque page de module a en pied de page :

```markdown
**Ce module fait partie de** : Découverte rapide (A), Productivité (B), Complet (E)
```

## Anti-pattern

Ne pas créer de track « avancé » fourre-tout. Si on veut un track avancé, l'attacher à un objectif concret (ex : « Sobriété LLM », pas « Avancé »).
