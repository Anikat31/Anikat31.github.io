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
    --card-bg: #ffffff;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --text-main: #e5e7eb;
      --text-muted: #9ca3af;
      --bg-soft: #111827;
      --border-soft: #1f2933;
      --card-bg: #020617;
    }
  }

  body {
    color: var(--text-main);
  }

  .profile-section {
    display: flex;
    gap: 48px;
    margin-bottom: 48px;
  }

  .profile-image img {
    width: 560px;
    height: 560px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 10px 28px rgba(0,0,0,0.14);
  }

  .profile-content {
    flex: 1;
  }

  .name-header {
    font-size: 2.3em;
    font-weight: 700;
  }

  .name-native {
    font-size: 0.7em;
    color: var(--text-muted);
    margin-left: 0.4em;
  }

  .affiliation {
    font-size: 1.08em;
    line-height: 1.75;
    margin-bottom: 1.2em;
  }

  .affiliation a {
    color: var(--accent);
    text-decoration: none;
  }

  .research-focus {
    background: var(--bg-soft);
    padding: 22px 26px;
    border-left: 4px solid var(--primary);
    border-radius: 6px;
  }

  .research-inline-list {
    padding-left: 18px;
  }

  .section-header {
    font-size: 1.9em;
    margin-top: 64px;
    border-bottom: 2px solid var(--border-soft);
    padding-bottom: 10px;
  }

  /* ===== CONTACT ===== */

  .contact-card {
    background: var(--card-bg);
    border: 1px solid var(--border-soft);
    border-radius: 10px;
    padding: 22px 26px;
    line-height: 1.9;
  }

  .contact-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .copy-btn {
    font-size: 0.85em;
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid var(--border-soft);
    cursor: pointer;
    background: transparent;
    color: var(--text-muted);
  }

  .copy-btn:hover {
    background: var(--bg-soft);
  }

  .social-links {
    margin-top: 14px;
    display: flex;
    gap: 18px;
  }

  .social-links a {
    font-weight: 500;
    text-decoration: none;
    color: var(--accent);
  }

  /* hide phone on small screens */
  @media (max-width: 600px) {
    .phone {
      display: none;
    }
  }

  /* ===== PUBLICATIONS ===== */

  .publication-item {
    background: var(--card-bg);
    border: 1px solid var(--border-soft);
    border-radius: 10px;
    padding: 26px 28px;
    margin-bottom: 26px;
  }

  .publication-title {
    font-weight: 600;
    margin-bottom: 10px;
  }

  .publication-authors {
    color: var(--text-muted);
    margin-bottom: 14px;
  }

  /* 🔴 arXiv forced red */
  .publication-item a,
  .publication-item a:visited {
    color: #b91c1c !important;
    background: #fee2e2;
    padding: 7px 16px;
    border-radius: 999px;
    text-decoration: none;
    display: inline-block;
  }

  .publication-item a:hover {
    background: #fecaca;
    color: #7f1d1d !important;
  }
</style>

<script>
  function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  }
</script>

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
      <a href="https://www.icts.res.in/" target="_blank">ICTS–TIFR</a>, Bengaluru
    </div>

    <div class="affiliation">
      Working with
      <a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank">
        Samriddhi Sankar Ray
      </a>
    </div>

    <div class="research-focus">
      <p>
        My research focuses on <strong>far-from-equilibrium phenomena</strong>,
        particularly <strong>turbulence</strong>, nonlinear dynamics, and stochastic processes.
      </p>

      <ul class="research-inline-list">
        <li>Turbulence and non-equilibrium statistical physics</li>
        <li>Dynamical systems and nonlinear phenomena</li>
        <li>Stochastic modeling</li>
        <li>Complex systems</li>
      </ul>
    </div>
  </div>
</div>

<h2 class="section-header">Contact</h2>

<div class="contact-card">
  <div class="contact-row">
    📧 anikat.kankaria@icts.res.in
    <button class="copy-btn" onclick="copyText('anikat.kankaria@icts.res.in')">Copy</button>
  </div>

  <div class="contact-row">
    📧 anikat.kankaria@gmail.com
    <button class="copy-btn" onclick="copyText('anikat.kankaria@gmail.com')">Copy</button>
  </div>

  <div class="contact-row phone">
    📞 +91-9674850807
  </div>

  <div class="social-links">
    <a href="https://scholar.google.com/" target="_blank">Google Scholar</a>
    <a href="https://orcid.org/" target="_blank">ORCID</a>
    <a href="https://github.com/" target="_blank">GitHub</a>
  </div>
</div>

<h2 class="section-header">Publications</h2>

<div class="publication-item">
  <div class="publication-title">
    Shock trapping and inertial escape: Dust-particle clustering in compressible turbulence
  </div>
  <div class="publication-authors">
    <b>Anikat Kankaria</b>, Samriddhi Sankar Ray
  </div>
  <a href="https://arxiv.org/abs/2512.07164" target="_blank">
    arXiv:2512.07164
  </a>
</div>
