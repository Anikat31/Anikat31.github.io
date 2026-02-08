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
    --bg-main: #ffffff;
    --shadow-color: rgba(0, 0, 0, 0.14);
    --shadow-hover: rgba(0, 0, 0, 0.18);
  }

  [data-theme="dark"] {
    --primary: #60a5fa;
    --accent: #3b82f6;
    --text-main: #e5e7eb;
    --text-muted: #9ca3af;
    --bg-soft: #1a1a1a;
    --border-soft: #2a2a2a;
    --bg-main: #0d0d0d;
    --shadow-color: rgba(0, 0, 0, 0.5);
    --shadow-hover: rgba(0, 0, 0, 0.7);
  }

  body {
    background-color: var(--bg-main);
    color: var(--text-main);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--bg-soft);
    border: 1px solid var(--border-soft);
    border-radius: 999px;
    padding: 10px 16px;
    cursor: pointer;
    font-size: 1.2em;
    box-shadow: 0 2px 8px var(--shadow-color);
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .theme-toggle:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px var(--shadow-hover);
  }

  .profile-section {
    display: flex;
    align-items: flex-start;
    gap: 48px;
    margin-bottom: 48px;
  }

  .profile-image img {
    width: 320px;
    height: 320px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 10px 28px var(--shadow-color);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }

  .profile-image img:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px var(--shadow-hover);
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
    color: var(--text-main);
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
    background: var(--bg-soft);
    border: 1px solid var(--border-soft);
    border-radius: 10px;
    padding: 22px 26px;
    box-shadow: 0 2px 6px var(--shadow-color);
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
    background: var(--bg-soft);
    border: 1px solid var(--border-soft);
    border-radius: 10px;
    padding: 26px 28px;
    margin-bottom: 26px;
    box-shadow: 0 2px 6px var(--shadow-color);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .publication-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px var(--shadow-hover);
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

  /* arXiv link styling */
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

  [data-theme="dark"] .publication-item a,
  [data-theme="dark"] .publication-item a:link,
  [data-theme="dark"] .publication-item a:visited {
    color: #fca5a5 !important;
    background: #7f1d1d;
  }

  .publication-item a:hover {
    color: #7f1d1d !important;
    background: #fecaca;
  }

  [data-theme="dark"] .publication-item a:hover {
    color: #fee2e2 !important;
    background: #991b1b;
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

    .theme-toggle {
      top: 10px;
      right: 10px;
      padding: 8px 12px;
      font-size: 1em;
    }
  }
</style>

<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">
  <span class="theme-icon">🌙</span>
</button>

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

<script>
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  }

  function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
</script>
