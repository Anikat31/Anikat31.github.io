---
layout: page
title: 
---

<meta charset="UTF-8">

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:wght@400;600&family=Noto+Serif+Devanagari:wght@400;600&display=swap');

:root {
  --primary: #0f172a;
  --accent: #2563eb;
  --text-main: #111827;
  --text-muted: #6b7280;
  --bg-main: #ffffff;
  --bg-soft: #f9fafb;
  --border-soft: #e5e7eb;
}

body {
  background-color: var(--bg-main);
  color: var(--text-main);
  font-family: "Source Serif 4", "Noto Serif Devanagari", Georgia, serif;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 56px;
  margin-bottom: 64px;
}

.profile-image img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.profile-content {
  flex: 1;
}

.name-header {
  font-family: "Inter", sans-serif;
  font-size: 2.6em;
  font-weight: 600;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: var(--primary);
}

.name-native {
  font-size: 0.6em;
  font-weight: 400;
  color: var(--text-muted);
  margin-left: 0.4em;
  font-family: "Noto Serif Devanagari", serif;
}

.affiliation {
  font-size: 1.05em;
  margin-bottom: 1.2em;
  color: var(--text-muted);
}

.affiliation a {
  color: var(--accent);
  text-decoration: none;
}

.affiliation a:hover {
  text-decoration: underline;
}

.research-focus {
  font-size: 1.05em;
  margin-top: 1.4em;
}

.research-inline-list {
  margin-top: 10px;
  padding-left: 20px;
}

.research-inline-list li {
  margin-bottom: 6px;
}

.section-header {
  font-family: "Inter", sans-serif;
  font-size: 1.6em;
  font-weight: 600;
  margin-top: 72px;
  margin-bottom: 24px;
  padding-bottom: 6px;
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
  margin-bottom: 24px;
  padding: 18px 20px;
  background: var(--bg-soft);
  border-radius: 12px;
  border: 1px solid var(--border-soft);
  transition: all 0.2s ease;
}

.publication-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

.publication-title {
  font-family: "Inter", sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 6px;
}

.publication-authors {
  font-size: 0.95em;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.publication-item a {
  color: #b91c1c;
  text-decoration: none;
  font-weight: 500;
}

.publication-item a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }

  .profile-image img {
    width: 260px;
    height: 260px;
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
      I am a Research scholar at
      International Centre for Theoretical Sciences <br>
      Tata Institute of Fundamental Research
      <a href="https://www.icts.res.in/" target="_blank" rel="noopener">(ICTS–TIFR)</a> <br>
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
    </div>
  </div>
</div>

<h3><strong>Specific interests include:</strong></h3>
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
    2. Reduction of Triadic Interactions Suppresses Intermittency and Anomalous Dissipation in Turbulence
  </div>
  <div class="publication-authors">
    <b>Anikat Kankaria</b>, Ritwik Mukherjee, Sugan Durai Murugan, Marco Edoardo Rosti, Samriddhi Sankar Ray
  </div>
  <a href="https://arxiv.org/abs/2603.19180" target="_blank" rel="noopener">
    arXiv:2603.19180
  </a>
</div>

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
