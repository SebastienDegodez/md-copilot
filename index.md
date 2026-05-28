---
layout: default
title: "GitHub Copilot — Learning Path"
---
<style>
  .landing-hero {
    position: relative;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 2rem 4rem;
  }
  .landing-hero h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 900;
    letter-spacing: 2px;
    color: var(--color-foreground);
    line-height: 1.1;
  }
  .landing-hero h1 span { color: var(--color-highlight); }
  .landing-hero p {
    font-size: 1.1rem;
    color: var(--color-dimmed);
    margin-top: 1rem;
    max-width: 600px;
    font-style: italic;
  }

  .track-grid {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .track-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-card);
    box-shadow: var(--glass-shadow);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1.75rem;
    transition: border-color var(--motion-fast), box-shadow var(--motion-fast), transform var(--motion-fast);
  }
  .track-card:hover {
    border-color: var(--glass-border-strong);
    box-shadow: var(--glass-shadow-hover);
    transform: translateY(-2px);
  }
  .track-card__icon {
    font-size: 1.5rem;
    color: var(--color-highlight);
    margin-bottom: 0.75rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(139, 229, 177, 0.1);
    border-radius: var(--radius);
  }
  .track-card h2 {
    font-size: 1.15rem;
    font-weight: 900;
    color: var(--color-foreground);
    margin-bottom: 0.5rem;
  }
  .track-card p {
    font-size: 0.9rem;
    color: var(--color-dimmed);
    line-height: 1.55;
    margin-bottom: 1rem;
  }
  .track-card__modules {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .track-card__modules li a {
    display: block;
    font-size: 0.82rem;
    color: var(--color-dimmed);
    padding: 0.3em 0.6em;
    border-radius: var(--radius);
    transition: color var(--motion-fast), background var(--motion-fast);
  }
  .track-card__modules li a:hover {
    color: var(--color-highlight);
    background: rgba(139, 229, 177, 0.08);
    text-decoration: none;
    opacity: 1;
  }
</style>

<section class="landing-hero">
  <h1><i class="fa-brands fa-github" aria-hidden="true"></i> Copilot <span>Learning Path</span></h1>
  <p>Guide francophone pour maîtriser GitHub Copilot — des fondations aux patterns avancés d'ingénierie de contexte.</p>
</section>

{% assign all_docs = site.pages
   | where_exp: "p", "p.path contains 'docs/learning-path/'"
   | where_exp: "p", "p.name != '_category.json'"
   | sort: "sidebar_position" %}

{% assign bloc1 = all_docs | where_exp: "p", "p.path contains '01-fondations'" %}
{% assign bloc2 = all_docs | where_exp: "p", "p.path contains '02-composition'" %}
{% assign bloc3 = all_docs | where_exp: "p", "p.path contains '03-ingenierie-de-contexte'" %}

<div class="track-grid">
  <div class="track-card">
    <div class="track-card__icon"><i class="fa-solid fa-cube"></i></div>
    <h2>Bloc 1 — Fondations</h2>
    <p>Primitives individuelles : instructions, prompts, agents, skills, hooks, MCP.</p>
    <ul class="track-card__modules">
      {% for doc in bloc1 %}
      <li><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></li>
      {% endfor %}
    </ul>
  </div>

  <div class="track-card">
    <div class="track-card__icon"><i class="fa-solid fa-puzzle-piece"></i></div>
    <h2>Bloc 2 — Composition</h2>
    <p>Distribution et orchestration : APM, plugins, workflows, CLI.</p>
    <ul class="track-card__modules">
      {% for doc in bloc2 %}
      <li><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></li>
      {% endfor %}
    </ul>
  </div>

  <div class="track-card">
    <div class="track-card__icon"><i class="fa-solid fa-brain"></i></div>
    <h2>Bloc 3 — Ingénierie de contexte</h2>
    <p>Tokens, patterns de sobriété, évaluations et outils de réduction.</p>
    <ul class="track-card__modules">
      {% for doc in bloc3 %}
      <li><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>
