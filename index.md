---
layout: page
title:
---

<style>
  :root {
    --primary: #1f3a5f;
    --accent: #2563eb;
    --accent-dark: #1d4ed8;
    --text-main: #111827;
    --text-muted: #4b5563;
    --bg-main: #ffffff;
    --bg-soft: #f9fafb;
    --border-soft: #e5e7eb;
    --red-link: #b91c1c;
  }

  body {
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: "Source Serif 4", Georgia, "Times New Roman", serif;
    line-height: 1.75;
    font-size: 1rem;
  }

  /* ── Profile row ── */
  .profile-wrapper {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    margin-bottom: 36px;
  }

  .profile-photo img {
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid var(--border-soft);
    display: block;
  }

  .profile-meta {
    flex: 1;
  }

  .name-line {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.3px;
    margin: 0 0 2px 0;
    line-height: 1.2;
  }

  .name-native {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-muted);
    margin-left: 0.5em;
    font-style: italic;
  }

  .position-line {
    font-size: 1rem;
    color: var(--text-muted);
    margin: 0 0 16px 0;
  }

  .position-line a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }

  .position-line a:hover { text-decoration: underline; }

  /* icon-row: email / phone / scholar etc */
  .contact-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    margin-bottom: 20px;
    font-size: 0.9rem;
  }

  .contact-icons a {
    color: var(--text-muted);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.15s;
  }

  .contact-icons a:hover { color: var(--accent); }

  .contact-icons svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    fill: currentColor;
  }

  /* bio paragraph */
  .bio {
    font-size: 1rem;
    line-height: 1.8;
    margin: 0;
  }

  /* ── Two-column layout ── */
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 48px;
    align-items: start;
  }

  /* ── Section headings ── */
  .section-title {
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 4px;
    margin: 36px 0 16px 0;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* ── Interests / sidebar ── */
  .sidebar .section-title { margin-top: 0; }

  .interest-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .interest-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 6px;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .interest-list li::before {
    content: "›";
    color: var(--accent);
    font-weight: 700;
    margin-top: 1px;
    flex-shrink: 0;
  }

  /* ── News ── */
  .news-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  .news-table tr {
    border-bottom: 1px solid var(--border-soft);
  }

  .news-table td {
    padding: 8px 6px;
    vertical-align: top;
  }

  .news-date {
    white-space: nowrap;
    color: var(--text-muted);
    font-size: 0.85rem;
    padding-right: 16px;
    width: 100px;
  }

  /* ── Publications ── */
  .pub-list { list-style: none; padding: 0; margin: 0; }

  .pub-item {
    display: flex;
    gap: 14px;
    margin-bottom: 22px;
    align-items: flex-start;
  }

  .pub-number {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--accent);
    min-width: 24px;
    padding-top: 2px;
  }

  .pub-body { flex: 1; }

  .pub-title {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 3px;
    line-height: 1.45;
  }

  .pub-authors {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 5px;
  }

  .pub-authors strong { color: var(--text-main); font-weight: 600; }

  .arxiv-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--red-link);
    text-decoration: none;
    border: 1px solid #fca5a5;
    border-radius: 4px;
    padding: 1px 7px;
    transition: background 0.15s;
  }

  .arxiv-badge:hover {
    background: #fef2f2;
  }

  /* ── Education (sidebar) ── */
  .edu-list { list-style: none; padding: 0; margin: 0; }

  .edu-item {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
    font-size: 0.9rem;
    align-items: flex-start;
  }

  .edu-icon {
    width: 18px;
    height: 18px;
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 3px;
  }

  .edu-degree { font-weight: 600; line-height: 1.3; }
  .edu-inst { color: var(--text-muted); font-size: 0.85rem; }

  /* ── Responsive ── */
  @media (max-width: 800px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
    .sidebar { order: -1; }
    .profile-wrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .contact-icons { justify-content: center; }
  }

  @media (max-width: 500px) {
    .profile-photo img { width: 160px; height: 160px; }
    .name-line { font-size: 1.5rem; }
  }
</style>

<!-- ══════════════ PROFILE ══════════════ -->
<div class="profile-wrapper">
  <div class="profile-photo">
    <img src="/assets/Anikat.jpg" alt="Anikat Kankaria">
  </div>

  <div class="profile-meta">
    <h1 class="name-line">
      Anikat Kankaria
      <span class="name-native">अनिकेत कांकरिया</span>
    </h1>

    <p class="position-line">
      Research Scholar &middot;
      <a href="https://www.icts.res.in/" target="_blank" rel="noopener">ICTS–TIFR</a>,
      Bengaluru, India
    </p>

    <!-- Icon row -->
    <div class="contact-icons">
      <a href="mailto:anikat.kankaria@icts.res.in">
        <!-- email icon -->
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
        anikat.kankaria@icts.res.in
      </a>
      <a href="tel:+919674850807">
        <!-- phone icon -->
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
        +91-9674850807
      </a>
    </div>

    <p class="bio">
      I am a research scholar at the
      <a href="https://www.icts.res.in/" target="_blank" rel="noopener">International Centre for Theoretical Sciences (ICTS–TIFR)</a>,
      Bengaluru, working with
      <a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank" rel="noopener">Samriddhi Sankar Ray</a>.
      My research focuses on <strong>far-from-equilibrium phenomena</strong>, with particular emphasis on
      <strong>turbulence</strong> and its mathematical structure. I am broadly interested in how ideas
      from nonlinear dynamics and stochastic processes manifest in complex systems.
    </p>
  </div>
</div>

<!-- ══════════════ TWO-COLUMN BODY ══════════════ -->
<div class="content-grid">

  <!-- ── LEFT: News + Publications ── -->
  <div class="main-col">

    <!-- NEWS -->
    <h2 class="section-title">News</h2>
    <table class="news-table">
      <tbody>
        <tr>
          <td class="news-date">Mar 2025</td>
          <td>New preprint: <em>Reduction of Triadic Interactions Suppresses Intermittency and Anomalous Dissipation in Turbulence</em> — <a href="https://arxiv.org/abs/2603.19180" target="_blank" rel="noopener" style="color:var(--red-link)">arXiv:2603.19180</a></td>
        </tr>
        <tr>
          <td class="news-date">Dec 2024</td>
          <td>New preprint: <em>Shock trapping and inertial escape: Dust-particle clustering in compressible turbulence</em> — <a href="https://arxiv.org/abs/2512.07164" target="_blank" rel="noopener" style="color:var(--red-link)">arXiv:2512.07164</a></td>
        </tr>
      </tbody>
    </table>

    <!-- PUBLICATIONS -->
    <h2 class="section-title">Publications</h2>
    <ul class="pub-list">

      <li class="pub-item">
        <div class="pub-number">2.</div>
        <div class="pub-body">
          <div class="pub-title">
            Reduction of Triadic Interactions Suppresses Intermittency and Anomalous Dissipation in Turbulence
          </div>
          <div class="pub-authors">
            <strong>Anikat Kankaria</strong>, Ritwik Mukherjee, Sugan Durai Murugan,
            Marco Edoardo Rosti, Samriddhi Sankar Ray
          </div>
          <a class="arxiv-badge" href="https://arxiv.org/abs/2603.19180" target="_blank" rel="noopener">
            arXiv:2603.19180
          </a>
        </div>
      </li>

      <li class="pub-item">
        <div class="pub-number">1.</div>
        <div class="pub-body">
          <div class="pub-title">
            Shock trapping and inertial escape: Dust-particle clustering in compressible turbulence
          </div>
          <div class="pub-authors">
            <strong>Anikat Kankaria</strong>, Samriddhi Sankar Ray
          </div>
          <a class="arxiv-badge" href="https://arxiv.org/abs/2512.07164" target="_blank" rel="noopener">
            arXiv:2512.07164
          </a>
        </div>
      </li>

    </ul>
  </div><!-- /main-col -->

  <!-- ── RIGHT: Interests + Education ── -->
  <div class="sidebar">

    <h2 class="section-title">Research Interests</h2>
    <ul class="interest-list">
      <li>Turbulence and non-equilibrium statistical physics</li>
      <li>Dynamical systems and nonlinear phenomena</li>
      <li>Stochastic modeling and random processes</li>
      <li>Complex and interacting systems</li>
    </ul>

    <h2 class="section-title">Education</h2>
    <ul class="edu-list">
      <li class="edu-item">
        <!-- graduation cap SVG -->
        <svg class="edu-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm-7 9.5V17l7 3.82L19 17v-4.5L12 16l-7-3.5z"/>
        </svg>
        <div>
          <div class="edu-degree">Ph.D. in Physics (ongoing)</div>
          <div class="edu-inst">ICTS–TIFR, Bengaluru</div>
        </div>
      </li>
    </ul>

  </div><!-- /sidebar -->

</div><!-- /content-grid -->
