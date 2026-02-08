---
layout: page
title: "About Me"
---

<style>
  :root {
    --primary: #1f3a5f;
    --accent: #2563eb;
    --text-main: #1a1a1a;
    --text-muted: #555;
    --bg-soft: #f8fafc;
    --border-soft: #e5e7eb;
  }

  .profile-section {
    display: flex;
    align-items: flex-start;
    gap: 48px;
    margin-bottom: 48px;
  }

  .profile-image img {
    width: 560px;
    height: 560px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }

  .profile-image img:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  }

  .profile-content {
    flex: 1;
  }

  .name-header {
    font-size: 2.3em;
    font-weight: 700;
    color: var(--text-main);
    margin-bottom: 0.25em;
    letter-spacing: -0.5px;
  }

  .name-native {
    font-size: 0.7em;
    font-weight: 400;
    color: var(--text-muted);
    margin-left: 0.4em;
  }

  .affiliation {
    font-size: 1.08em;
    line-height: 1.75;
    color: var(--text-main);
    margin-bottom: 1.2em;
  }

  .affiliation a {
    color: var(--accent);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }

  .affiliation a:hover {
    border-bottom-color: var(--accent);
  }

  .research-focus {
    font-size: 1.05em;
    line-height: 1.85;
    color: #133;
    background: var(--bg-soft);
    padding: 22px 26px;
    border-left: 4px solid var(--primary);
    border-radius: 6px;
    margin-top: 1.6em;
  }

  .research-inline-list {
    margin: 0;
    padding-left: 18px;
  }

  .research-inline-list li {
    margin-bottom: 6px;
    line-height: 1.6;
  }

  .section-header {
    font-size: 1.9em;
    font-weight: 600;
    color: var(--text-main);
    margin-top: 64px;
    margin-bottom: 28px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--border-soft);
  }

  .contact-card {
    background: #ffffff;
    border: 1px solid var(--border-soft);
    border-radius: 10px;
    padding: 22px 26px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    font-size: 1.05em;
    line-height: 1.8;
  }

  .contact-card a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }

  .contact-card a:hover {
    text-decoration: underline;
  }

  .publication-item {
    background: #ffffff;
    border: 1px solid var(--border-soft);
    border-radius: 10px;
    padding: 26px 28px;
    margin-bottom: 26px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .publication-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  .publication-title {
    font-size: 1.18em;
    font-weight: 600;
    color: var(--text-main);
    line-height: 1.55;
    margin-bottom: 10px;
  }

  .publication-authors {
    font-size: 1em;
    color: var(--text-muted);
    margin-bottom: 14px;
  }

  /* 🔴 FORCE arXiv link to light red */
  .publication-item a,
  .publication-item a:link,
  .publication-item a:visited {
    color: #b91c1c !important;
    background: #fee2e2;
    text-decoration: none;
    font-weight: 500;
    padding: 7px 16px;
    border-radius: 999px;
    display: inline-block;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .publication-item a:hover {
    color: #7f1d1d !important;
    background: #fecaca;
  }

  @media (max-width: 768px) {
    .profile-section {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .profile-image img {
      width: 420px;
      height: 420px;
    }

    .name-header {
      font-size: 1.9em;
    }
  }
</style>

<div class="profile-section">
  <div class="profile-image">
    <img src="/assets/Anikat.jpg" alt="Anikat Kankaria">
  </div>

  <div class="profile-content">
    <h1 class="name-header">
      Anikat Kankaria
      <span class="name-native">अनिकेत कांकरिया</span>
    </h1>

    <div class="affiliation">
      Researcher at
      <a href="https://www.icts.res.in/" target="_blank" rel="noopener">
        International Centre for Theoretical Sciences
      </a><br>
      Tata Institute of Fundamental Research (ICTS–TIFR)<br>
      Bengaluru, India
    </div>

    <div class="affiliation">
      I am currently working with
      <a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank" rel="noopener">
        Samriddhi Sankar Ray (সমৃদ্ধি শঙ্কর রায়)
      </a>
    </div>

    <div class="research-focus">
      <p>
        My research focuses on <strong>far-from-equilibrium phenomena</strong>,
        with particular emphasis on <strong>turbulence</strong> and its mathematical
        structure. I am broadly interested in how ideas from nonlinear dynamics and
        stochastic processes manifest across complex systems.
      </p>

      <p style="margin-top: 1em; margin-bottom: 0.4em;">
        <strong>Specific interests include:</strong>
      </p>

      <ul class="research-inline-list">
        <li>Turbulence and non-equilibrium statistical physics</li>
        <li>Dynamical systems and nonlinear phenomena</li>
        <li>Stochastic modeling and random processes</li>
        <li>Complex and interacting systems</li>
      </ul>
    </div>
  </div>
</div>

<h2 class="section-header">Contact</h2>

<div class="contact-card">
  📧 <a href="mailto:anikat.kankaria@icts.res.in">anikat.kankaria@icts.res.in</a> |
  <a href="mailto:anikat.kankaria@gmail.com">anikat.kankaria@gmail.com</a><br>
  📞 <a href="tel:+919674850807">+91-9674850807</a>
</div>

<h2 class="section-header">Publications</h2>

<div class="publication-item">
  <div class="publication-title">
    1. Shock trapping and inertial escape: Dust-particle clustering in compressible turbulence
  </div>
  <div class="publication-authors">
    <b>Anikat Kankaria</b>, Samriddhi Sankar Ray
  </div>
  <a href="https://arxiv.org/abs/2512.07164" target="_blank" rel="noopener">
    arXiv:2512.07164
  </a>
</div>
