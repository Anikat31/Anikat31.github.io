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
    margin-bottom: 64px;
  }

  .profile-image img {
    width: 260px;
    height: 260px;
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

  .section-header {
    font-size: 1.9em;
    font-weight: 600;
    color: var(--text-main);
    margin-top: 70px;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--border-soft);
  }

  .interests-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 18px;
  }

  .interests-list li {
    background: #ffffff;
    border: 1px solid var(--border-soft);
    padding: 18px 22px;
    border-radius: 10px;
    font-size: 1.03em;
    line-height: 1.6;
    color: #333;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .interests-list li:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  .interests-list li::before {
    content: "▸";
    color: var(--primary);
    font-weight: bold;
    margin-right: 10px;
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

  .publication-link {
    display: inline-block;
    font-size: 0.95em;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    padding: 7px 16px;
    background: #eff6ff;
    border-radius: 999px;
    transition: background 0.2s ease;
  }

  .publication-link:hover {
    background: #dbeafe;
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
      I am currently Working with
      <a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank" rel="noopener">
        Samriddhi Sankar Ray (সমৃদ্ধি শঙ্কর রায়)
      </a>
    </div>
    <div class="research-focus">
      My research focuses on <strong>far-from-equilibrium phenomena</strong>,
      with particular emphasis on <strong>turbulence</strong> and its mathematical
      structure. I am broadly interested in how ideas from nonlinear dynamics and
      stochastic processes manifest across complex systems.
    </div>
  </div>
</div>

<h2 class="section-header">Research Interests</h2>

<ul>
  <li>Turbulence and non-equilibrium statistical physics</li>
  <li>Dynamical systems and nonlinear phenomena</li>
  <li>Stochastic modeling and random processes</li>
  <li>Complex and interacting systems</li>
</ul>

<h2 class="section-header">Publications</h2>

<div class="publication-item">
  <div class="publication-title">
   1. Shock trapping and inertial escape: Dust-particle clustering in compressible turbulence
  </div>
  <div class="publication-authors">
    Anikat Kankaria, Samriddhi Sankar Ray
  </div>
  <a href="https://arxiv.org/abs/2512.07164" class="publication-link" target="_blank" rel="noopener">
    arXiv:2512.07164
  </a>
</div>
