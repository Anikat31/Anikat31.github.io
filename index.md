---
layout: default
title: Anikat Kankaria
---

<style>
  /* ── Reset & base ── */
  body { font-family: "Linux Libertine", Georgia, "Times New Roman", serif; }

  .av-page { max-width: 860px; margin: 0 auto; padding: 2rem 1.2rem 4rem; }

  /* ── Profile block ── */
  .av-profile { overflow: hidden; margin-bottom: 1.6rem; }

  .av-photo {
    float: right;
    margin: 0 0 1rem 2rem;
    text-align: center;
  }

  .av-photo img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }

  .av-photo-caption {
    font-size: 0.82rem;
    color: #666;
    margin-top: 0.4rem;
  }

  /* ── Name heading ── */
  .av-name {
    font-size: 2rem;
    font-weight: 400;
    margin: 0 0 0.1rem;
    line-height: 1.2;
  }

  .av-name strong { font-weight: 700; }

  .av-name-native {
    font-size: 0.9rem;
    color: #888;
    font-style: italic;
    margin-left: 0.3em;
  }

  /* ── Bio paragraphs ── */
  .av-bio { font-size: 1rem; line-height: 1.8; }
  .av-bio p { margin: 0 0 0.9rem; }
  .av-bio ul { margin: 0 0 0.9rem 1.4rem; padding: 0; }
  .av-bio ul li { margin-bottom: 0.3rem; }
  .av-bio a { color: #0366d6; text-decoration: none; }
  .av-bio a:hover { text-decoration: underline; }

  /* ── Section headings ── */
  .av-section-heading {
    font-size: 1.15rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    border-bottom: 1px solid #e1e4e8;
    padding-bottom: 0.3rem;
    margin: 2rem 0 1rem;
    color: #24292e;
  }

  .av-section-heading a { color: inherit; text-decoration: none; }
  .av-section-heading a:hover { text-decoration: none; }

  /* ── News table ── */
  .av-news-wrap { max-height: 260px; overflow-y: auto; }

  .av-news-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.92rem;
    line-height: 1.6;
  }

  .av-news-table tr { border-bottom: 1px solid #f0f0f0; }
  .av-news-table tr:last-child { border-bottom: none; }

  .av-news-table th {
    font-weight: 400;
    color: #666;
    white-space: nowrap;
    width: 130px;
    padding: 0.55rem 1rem 0.55rem 0;
    vertical-align: top;
  }

  .av-news-table td {
    padding: 0.55rem 0;
    vertical-align: top;
    color: #24292e;
  }

  .av-news-table a { color: #0366d6; text-decoration: none; }
  .av-news-table a:hover { text-decoration: underline; }

  /* ── Publications ── */
  .av-pub { margin-bottom: 1.4rem; }

  .av-pub-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
    line-height: 1.45;
    color: #24292e;
  }

  .av-pub-authors {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.35rem;
  }

  .av-pub-authors b { color: #24292e; font-weight: 600; }

  .av-arxiv {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 600;
    color: #b91c1c;
    border: 1px solid #fca5a5;
    border-radius: 4px;
    padding: 1px 8px;
    text-decoration: none;
    transition: background 0.15s;
  }

  .av-arxiv:hover { background: #fef2f2; text-decoration: none; color: #b91c1c; }

  /* ── Social icons row ── */
  .av-social { margin-top: 1.8rem; }

  .av-social-icons {
    display: flex;
    gap: 14px;
    font-size: 1.25rem;
    align-items: center;
    margin-bottom: 0.35rem;
  }

  .av-social-icons a { color: #555; text-decoration: none; }
  .av-social-icons a:hover { color: #0366d6; }

  .av-contact-note { font-size: 0.88rem; color: #666; }

  /* ── Responsive ── */
  @media (max-width: 560px) {
    .av-photo { float: none; margin: 0 auto 1.2rem; display: block; }
    .av-photo img { width: 150px; height: 150px; }
    .av-name { font-size: 1.5rem; }
  }
</style>

<div class="av-page">

  <!-- ══ PROFILE ══ -->
  <div class="av-profile">

    <div class="av-photo">
      <img src="/assets/Anikat.jpg" alt="Anikat Kankaria">
      <div class="av-photo-caption">anikat.kankaria at icts.res.in</div>
    </div>

    <h1 class="av-name">
      <strong>Anikat</strong> Kankaria
      <span class="av-name-native">अनिकेत कांकरिया</span>
    </h1>

    <div class="av-bio">
      <p>
        I am a Research Scholar at the
        <a href="https://www.icts.res.in/" target="_blank" rel="noopener">International Centre for Theoretical Sciences (ICTS–TIFR)</a>,
        Bengaluru, India. I am currently working with
        <a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank" rel="noopener">Samriddhi Sankar Ray (সমৃদ্ধি শঙ্কর রায়)</a>.
      </p>

      <p>
        My research focuses on <strong>far-from-equilibrium phenomena</strong>, with
        particular emphasis on <strong>turbulence</strong> and its mathematical structure.
        I am broadly interested in how ideas from nonlinear dynamics and stochastic
        processes manifest in complex systems.
      </p>

      <p><strong>Specific interests include:</strong></p>
      <ul>
        <li>Turbulence and non-equilibrium statistical physics</li>
        <li>Dynamical systems and nonlinear phenomena</li>
        <li>Stochastic modeling and random processes</li>
        <li>Complex and interacting systems</li>
      </ul>
    </div>

  </div><!-- /av-profile -->

  <!-- ══ NEWS ══ -->
  <h2 class="av-section-heading">
    <a href="#">news</a>
  </h2>

  <div class="av-news-wrap">
    <table class="av-news-table">
      <tbody>
        <tr>
          <th scope="row">Mar 2025</th>
          <td>
            New preprint on the reduction of triadic interactions and its role in
            suppressing intermittency and anomalous dissipation in turbulence —
            <a href="https://arxiv.org/abs/2603.19180" target="_blank" rel="noopener">arXiv:2603.19180</a>.
          </td>
        </tr>
        <tr>
          <th scope="row">Dec 2024</th>
          <td>
            New preprint on shock trapping and inertial escape of dust particles
            in compressible turbulence —
            <a href="https://arxiv.org/abs/2512.07164" target="_blank" rel="noopener">arXiv:2512.07164</a>.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ══ PUBLICATIONS ══ -->
  <h2 class="av-section-heading">publications</h2>

  <div class="av-pub">
    <div class="av-pub-title">
      2. Reduction of Triadic Interactions Suppresses Intermittency and
      Anomalous Dissipation in Turbulence
    </div>
    <div class="av-pub-authors">
      <b>Anikat Kankaria</b>, Ritwik Mukherjee, Sugan Durai Murugan,
      Marco Edoardo Rosti, Samriddhi Sankar Ray
    </div>
    <a class="av-arxiv" href="https://arxiv.org/abs/2603.19180" target="_blank" rel="noopener">
      arXiv:2603.19180
    </a>
  </div>

  <div class="av-pub">
    <div class="av-pub-title">
      1. Shock trapping and inertial escape: Dust-particle clustering in
      compressible turbulence
    </div>
    <div class="av-pub-authors">
      <b>Anikat Kankaria</b>, Samriddhi Sankar Ray
    </div>
    <a class="av-arxiv" href="https://arxiv.org/abs/2512.07164" target="_blank" rel="noopener">
      arXiv:2512.07164
    </a>
  </div>

  <!-- ══ SOCIAL ══ -->
  <div class="av-social">
    <div class="av-social-icons">
      <a href="mailto:anikat.kankaria@icts.res.in" title="Email (ICTS)">
        <!-- envelope SVG so no Font Awesome dependency needed -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>
      <a href="mailto:anikat.kankaria@gmail.com" title="Email (Gmail)">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 18h-1V8.5l-7 4.5-7-4.5V18H4a2 2 0 0 1-2-2V6l10 6.5L22 6v10a2 2 0 0 1-2 2z"/>
        </svg>
      </a>
    </div>
    <div class="av-contact-note">Best way to reach me is via email.</div>
  </div>

</div><!-- /av-page -->
