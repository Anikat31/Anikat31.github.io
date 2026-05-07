---
layout: page
title:
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&family=Noto+Serif+Devanagari:wght@400;500&display=swap" rel="stylesheet">

<style>
  :root {
    --ivory: #f8f6f1;
    --paper: #fdfcf9;
    --ink: #1c1917;
    --ink-soft: #44403c;
    --ink-muted: #78716c;
    --crimson: #7c1d1d;
    --crimson-light: #9b2626;
    --rule: #d6d0c8;
    --rule-soft: #e8e4dc;
    --highlight: #f0ebe0;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--paper);
    color: var(--ink);
    font-family: "Cormorant Garamond", "Noto Serif Devanagari", Georgia, serif;
    font-size: 18px;
    line-height: 1.75;
    max-width: 1100px;
    margin: 0 auto;
    padding: 64px 40px 96px;
  }

  /* ── PROFILE SECTION ── */

  .profile {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 56px;
    align-items: start;
    margin-bottom: 72px;
  }

  .profile-photo {
    position: relative;
    padding-top: 12px;
    display: flex;
    justify-content: center;
  }

  .profile-photo img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
    filter: grayscale(12%) contrast(1.03);
    display: block;
    outline: 4px solid var(--paper);
    box-shadow: 0 0 0 1px var(--rule), 0 8px 28px rgba(28,25,23,0.12);
  }

  .profile-content {
    padding-top: 8px;
  }

  /* ── NAME ── */

  .name-block {
    margin-bottom: 28px;
  }

  .name-en {
    font-family: "Cormorant Garamond", serif;
    font-size: 2.6em;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: var(--ink);
    line-height: 1.1;
    display: block;
  }

  .name-deva {
    font-family: "Noto Serif Devanagari", serif;
    font-size: 0.95em;
    font-weight: 400;
    color: var(--ink-muted);
    display: block;
    margin-top: 4px;
    letter-spacing: 0.02em;
  }

  .name-rule {
    width: 48px;
    height: 1px;
    background: var(--crimson);
    margin-top: 16px;
    display: block;
  }

  /* ── METADATA ── */

  .meta {
    font-family: "DM Sans", sans-serif;
    font-size: 0.78em;
    color: var(--ink-soft);
    margin-bottom: 28px;
    line-height: 1.9;
  }

  .meta-label {
    font-weight: 500;
    color: var(--ink-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.82em;
    display: inline-block;
    margin-right: 8px;
  }

  .meta a {
    color: var(--crimson-light);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }

  .meta a:hover { border-bottom-color: var(--crimson-light); }

  /* ── RESEARCH STATEMENT ── */

  .research-statement {
    font-size: 1.05em;
    color: var(--ink-soft);
    font-style: italic;
    line-height: 1.8;
    border-left: 2px solid var(--crimson);
    padding-left: 18px;
    margin-bottom: 24px;
  }

  .research-statement strong {
    font-style: normal;
    font-weight: 600;
    color: var(--ink);
  }

  /* ── INTEREST TAGS ── */

  .interests {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
  }

  .interest-tag {
    font-family: "DM Sans", sans-serif;
    font-size: 0.7em;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: var(--ink-soft);
    background: var(--highlight);
    border: 1px solid var(--rule);
    padding: 4px 12px;
    border-radius: 1px;
  }

  /* ── SECTION HEADERS ── */

  .section {
    margin-top: 64px;
  }

  .section-title {
    font-family: "DM Sans", sans-serif;
    font-size: 0.72em;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink-muted);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--rule-soft);
  }

  /* ── CONTACT ── */

  .contact-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    max-width: 680px;
  }

  .contact-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 20px;
    background: var(--highlight);
    border: 1px solid var(--rule);
    border-radius: 2px;
    text-decoration: none;
    transition: background 0.18s, border-color 0.18s;
    min-width: 0;
  }

  .contact-card:hover {
    background: var(--ivory);
    border-color: var(--ink-muted);
  }

  .contact-card-icon {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: var(--paper);
    border: 1px solid var(--rule);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 14px;
    color: var(--crimson);
  }

  .contact-card-body {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .contact-card-label {
    font-family: "DM Sans", sans-serif;
    font-size: 0.62em;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-muted);
    line-height: 1;
    margin-bottom: 4px;
  }

  .contact-card-value {
    font-family: "DM Sans", sans-serif;
    font-size: 0.76em;
    color: var(--crimson-light);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ── PUBLICATIONS ── */

  .pub-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: 820px;
  }

  .pub-item {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 0 24px;
    padding: 28px 0;
    border-bottom: 1px solid var(--rule-soft);
    position: relative;
  }

  .pub-item:first-child { border-top: 1px solid var(--rule-soft); }

  .pub-num {
    font-family: "DM Sans", sans-serif;
    font-size: 0.72em;
    font-weight: 500;
    color: var(--crimson);
    padding-top: 4px;
    letter-spacing: 0.04em;
  }

  .pub-content {}

  .pub-title {
    font-family: "Cormorant Garamond", serif;
    font-size: 1.1em;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.4;
    margin-bottom: 8px;
  }

  .pub-authors {
    font-family: "DM Sans", sans-serif;
    font-size: 0.72em;
    color: var(--ink-muted);
    line-height: 1.6;
    margin-bottom: 10px;
  }

  .pub-authors .self {
    color: var(--ink-soft);
    font-weight: 500;
  }

  .pub-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: "DM Sans", sans-serif;
    font-size: 0.7em;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--crimson-light);
    text-decoration: none;
    border-bottom: 1px solid var(--rule-soft);
    padding-bottom: 1px;
    transition: border-color 0.2s, color 0.2s;
  }

  .pub-link:hover {
    border-bottom-color: var(--crimson-light);
    color: var(--crimson);
  }

  .pub-link::after {
    content: '↗';
    font-size: 0.9em;
  }

  /* ── MOBILE ── */

  @media (max-width: 680px) {
    body { padding: 40px 22px 72px; font-size: 17px; }

    .profile {
      grid-template-columns: 1fr;
      gap: 32px;
      text-align: center;
    }

    .profile-photo {
      width: 160px;
      margin: 0 auto;
    }

    .name-rule { margin: 16px auto 0; }

    .research-statement { border-left: none; border-top: 2px solid var(--crimson); padding-left: 0; padding-top: 14px; text-align: left; }

    .interests { justify-content: center; }

    .pub-item { grid-template-columns: 1fr; gap: 4px; }
    .pub-num { padding-top: 0; }
  }
</style>

<!-- ═══════════════════════════════════════════ PROFILE ══ -->
<div class="profile">

  <div class="profile-photo">
    <img src="/assets/Anikat.jpg" alt="Anikat Kankaria">
  </div>

  <div class="profile-content">

    <div class="name-block">
      <span class="name-en">Anikat Kankaria</span>
      <span class="name-deva">अनिकेत कांकरिया</span>
      <span class="name-rule"></span>
    </div>

    <div class="meta">
      <div>
        <span class="meta-label">Position</span>
        Research Scholar
      </div>
      <div>
        <span class="meta-label">Institute</span>
        <a href="https://www.icts.res.in/" target="_blank" rel="noopener">
          International Centre for Theoretical Sciences, TIFR
        </a>
        &ensp;·&ensp; Bengaluru, India
      </div>
      <div>
        <span class="meta-label">Advisor</span>
        <a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank" rel="noopener">
          Samriddhi Sankar Ray (সমৃদ্ধি শঙ্কর রায়)
        </a>
      </div>
    </div>

    <p class="research-statement">
      My research centres on <strong>far-from-equilibrium phenomena</strong>,
      with particular emphasis on <strong>turbulence</strong> and its mathematical
      structure. I am broadly interested in how ideas from nonlinear dynamics
      and stochastic processes manifest in complex systems.
    </p>

    <div class="interests">
      <span class="interest-tag">Turbulence</span>
      <span class="interest-tag">Non-equilibrium Statistical Physics</span>
      <span class="interest-tag">Dynamical Systems</span>
      <span class="interest-tag">Stochastic Processes</span>
      <span class="interest-tag">Complex &amp; Interacting Systems</span>
    </div>

  </div>
</div>

<!-- ════════════════════════════════════════════ CONTACT ══ -->
<div class="section">
  <h2 class="section-title">Contact</h2>

  <div class="contact-cards">

    <a class="contact-card" href="mailto:anikat.kankaria@icts.res.in">
      <div class="contact-card-icon">✉</div>
      <div class="contact-card-body">
        <span class="contact-card-label">Institute Email</span>
        <span class="contact-card-value">anikat.kankaria@icts.res.in</span>
      </div>
    </a>

    <a class="contact-card" href="mailto:anikat.kankaria@gmail.com">
      <div class="contact-card-icon">✉</div>
      <div class="contact-card-body">
        <span class="contact-card-label">Personal Email</span>
        <span class="contact-card-value">anikat.kankaria@gmail.com</span>
      </div>
    </a>

    <a class="contact-card" href="tel:+919674850807">
      <div class="contact-card-icon">✆</div>
      <div class="contact-card-body">
        <span class="contact-card-label">Phone</span>
        <span class="contact-card-value">+91 96748 50807</span>
      </div>
    </a>

  </div>
</div>

<!-- ══════════════════════════════════════════ PUBLICATIONS ══ -->
<div class="section">
  <h2 class="section-title">Publications &amp; Preprints</h2>

  <div class="pub-list">

    <div class="pub-item">
      <span class="pub-num">2</span>
      <div class="pub-content">
        <div class="pub-title">
          Reduction of Triadic Interactions Suppresses Intermittency and Anomalous Dissipation in Turbulence
        </div>
        <div class="pub-authors">
          <span class="self">Anikat Kankaria</span>,
          Ritwik Mukherjee, Sugan Durai Murugan,
          Marco Edoardo Rosti, Samriddhi Sankar Ray
        </div>
        <a class="pub-link" href="https://arxiv.org/abs/2603.19180" target="_blank" rel="noopener">
          arXiv:2603.19180
        </a>
      </div>
    </div>

    <div class="pub-item">
      <span class="pub-num">1</span>
      <div class="pub-content">
        <div class="pub-title">
          Shock Trapping and Inertial Escape: Dust-Particle Clustering in Compressible Turbulence
        </div>
        <div class="pub-authors">
          <span class="self">Anikat Kankaria</span>,
          Samriddhi Sankar Ray
        </div>
        <a class="pub-link" href="https://arxiv.org/abs/2512.07164" target="_blank" rel="noopener">
          arXiv:2512.07164
        </a>
      </div>
    </div>

  </div>
</div>
