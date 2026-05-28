# Glossaire

Ce glossaire rassemble les termes clés du handbook Copilot (FR). Les entrées sont classées par ordre alphabétique ; les termes anglais conservent leur forme d'origine et leur expansion ou traduction figure dans la définition.

## A

### API

*Application Programming Interface* — interface de programmation. Surface contractuelle exposée par un service (souvent HTTP) ou une librairie pour être consommée par un autre logiciel.

### applyTo

Champ de *frontmatter* d'un fichier d'instruction Copilot qui contient une glob décrivant les fichiers concernés. Quand le fichier ouvert ou évoqué dans la conversation correspond à la glob, l'instruction est chargée ; sinon elle reste inerte. Permet de scoper une règle sans gonfler le contexte global.

### agent mode

Mode de Copilot Chat dans lequel l'assistant agit de manière autonome sur ton workspace : il lit l'arborescence, crée ou modifie plusieurs fichiers et te soumet un diff global à accepter ou refuser. Surface adaptée aux tâches multi-fichiers cadrées.

## C

### chat

Surface conversationnelle de Copilot (panneau dédié dans VS Code) où tu dialogues avec le modèle pour générer, expliquer ou refactorer. Distincte de la suggestion inline et de l'agent mode.

## B

### Biome

Chaîne d'outils (formatter + linter) écrite en Rust pour les projets web, alternative unifiée à Prettier + ESLint.

## D

### diff

Affichage des changements entre deux versions d'un fichier (ajouts en `+`, suppressions en `-`). Format standard du handbook pour montrer les évolutions étape par étape dans les modules.

## E

### ESLint

Linter historique pour JavaScript et TypeScript, extensible via plugins et configurations partagées.

### extension

Module installable qui ajoute des fonctionnalités à VS Code. Copilot lui-même est distribué sous forme d'extension (`GitHub.copilot` + `GitHub.copilot-chat`).

## F

### frontmatter

Bloc de métadonnées YAML placé en tête d'un fichier Markdown, délimité par `---`. Dans le handbook, sert à porter la configuration d'une instruction ou d'un prompt Copilot (par exemple `applyTo`, `description`).

### few-shot prompting

Variante où tu fournis plusieurs exemples (typiquement 2 à 5) avant ta demande. Améliore la cohérence quand le format de sortie est spécifique ou non standard, au prix d'un budget tokens plus élevé.

## G

### glob

Motif de filtrage de chemins de fichiers utilisant des jokers (`*`, `**`, `?`). Sert à désigner un sous-ensemble de fichiers — par exemple `**/*.ts` pour tous les fichiers TypeScript du repo.

### GitHub Copilot

Assistant de programmation propulsé par IA, distribué par GitHub sous forme d'extension pour ton IDE. Il expose plusieurs surfaces (suggestion inline, chat, agent) que tu pilotes via prompts et instructions.

## I

### IDE

*Integrated Development Environment* — environnement de développement intégré. Dans le handbook, désigne presque toujours VS Code, hôte des extensions Copilot.

### instruction scopée

Instruction Copilot dont le chargement est conditionné par une glob (champ `applyTo`), par opposition à l'instruction globale du repo (`.github/copilot-instructions.md`) chargée systématiquement. Elle vit typiquement dans `.github/instructions/`.

### inline suggestion

Surface Copilot qui affiche directement dans l'éditeur, en gris, une complétion à valider avec Tab. Elle ne voit que le fichier ouvert et convient au code local et trivial.

### instruction

Règle persistante chargée automatiquement à chaque interaction Copilot (ex. fichiers `.instructions.md`). Sert à imposer un cadre durable — conventions, librairies préférées, contraintes — sans le répéter dans chaque prompt.

## J

### Jest

Framework de test JavaScript historique de Meta. Cité dans le handbook comme contre-exemple (les instructions de repo y privilégient Vitest).

## L

### lint

Analyse statique du code qui détecte erreurs, styles non conformes ou patterns risqués sans exécuter le programme. Outillage typique : ESLint, Biome, Ruff.

## O

### one-shot prompting

Variante où tu fournis exactement un exemple (paire entrée / sortie attendue) avant ta demande. Le modèle utilise cet exemple comme patron pour produire une sortie de même forme.

## P

### prompt

Demande ponctuelle adressée à Copilot lors d'une interaction (« génère ce test », « explique cette fonction »). Par opposition à une instruction, le prompt n'est pas persistant.

## R

### repo

Abréviation de *repository* — dépôt Git versionnant le code d'un projet. Copilot exploite le contexte du repo ouvert (fichiers, workspace, historique) selon la surface utilisée.

## S

### stack

Ensemble des technologies retenues pour un projet (langage, framework, outils de test, lint, build). Dans une instruction Copilot, expliciter la stack évite que l'assistant propose des librairies hors cadre.

## T

### TypeScript

Sur-ensemble typé de JavaScript, compilé vers JavaScript. Langage par défaut des exemples de code du handbook.

## V

### Vitest

Framework de test JavaScript/TypeScript moderne, alternative à Jest, optimisé pour les projets utilisant Vite. Outil par défaut des exemples de tests dans le handbook.

### VS Code

Éditeur de code gratuit et open-source de Microsoft (Visual Studio Code). Hôte principal des extensions Copilot dans le handbook.

## W

### workspace

Espace de travail ouvert dans VS Code : un ou plusieurs dossiers racines et leurs fichiers, indexés par l'éditeur. Copilot lit le workspace pour construire son contexte (fichiers ouverts, structure du projet) selon la surface utilisée.

## Z

### zero-shot prompting

Technique consistant à donner à Copilot une instruction sans fournir d'exemple. Le modèle produit la réponse en s'appuyant uniquement sur son entraînement et le contexte du workspace (fichiers ouverts, instructions persistantes).
