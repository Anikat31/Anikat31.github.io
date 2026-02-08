---
layout: page
title: "About Me"
---

<style>
  :root {
    --primary: #1f3a5f;
    --accent: #2563eb;
    --text-main: #111827;
    --text-muted: #4b5563;
    --bg-main: #ffffff;
    --border-soft: #e5e7eb;
  }

  body {
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: "Source Serif 4", "Latin Modern Roman",
                 "Computer Modern Serif", Georgia, "Times New Roman", serif;
    line-height: 1.75;
  }

  .profile-section {
    display: flex;
    align-items: flex-start;
    gap: 48px;
    margin-bottom: 48px;
  }

  .profile-image img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
  }

  .profile-content {
    flex: 1;
  }

  .name-header {
    font-size: 2.2em;
    font-weight: 600;
    margin-bottom: 0.3em;
    letter-spacing: -0.3px;
  }

  .name-native {
    font-size: 0.7em;
    font-weight: 400;
    color: var(--text-muted);
    margin-left: 0.4em;
  }

  .affiliation {
    font-size: 1.05em;
    line-height: 1.7;
    margin-bottom: 1.1em;
  }

  .affiliation a {
    color: var(--accent);
    text-decoration: none;
  }

  .affiliation a:hover {
    text-decoration: underline;
  }

  /* Research section — simple & academic */
  .research-focus {
    font-size: 1.05em;
    margin-top: 1.6em;
  }

  .research-inline-list {
    margin-top: 0.4em;
    padding-left: 20px;
  }

  .research-inline-list li {
    margin-bottom: 4px;
  }

  .section-header {
    font-size: 1.8em;
    font-weight: 600;
    margin-top: 64px;
    margin-bottom: 26px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border-soft);
  }

  .contact-card {
    font-size: 1.05em;
    line-height: 1.8;
  }

  .contact-card a {
    color: var(--accent);
    text-decoration: none;
  }

  .contact-card a:hover {
    text-decoration: underline;
  }

  .publication-item {
    margin-bottom: 28px;
  }

  .publication-title {
    font-size: 1.15em;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .publication-authors {
    font-size: 1em;
    color: var(--text-muted);
    margin-bottom: 8px;
  }

  /* arXiv link styling */
  .publication-item a,
  .publication-item a:link,
  .publication-item a:visited {
    color: #b91c1c !important;
    text-decoration: none;
    font-weight: 500;
  }

  .publication-item a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .profile-section {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .profile-image img {
      width: 360px;
      height: 360px;
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
      I am a Research scholar  at
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
        stochastic processes manifest in complex systems.
      </p>

      <p><strong>Specific interests include:</strong></p>
    </div>
  </div>
</div>

<ul class="research-inline-list">
        <li>Turbulence and non-equilibrium statistical physics</li>
        <li>Dynamical systems and nonlinear phenomena</li>
        <li>Stochastic modeling and random processes</li>
        <li>Complex and interacting systems</li>
      </ul>
      
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
