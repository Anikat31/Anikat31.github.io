---
layout: page
title: "About Me"
---

<style>
  .profile-section {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 50px;
  }
  
  .profile-image {
    flex-shrink: 0;
  }
  
  .profile-image img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .profile-image img:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
  
  .profile-content {
    flex: 1;
  }
  
  .name-header {
    font-size: 2.2em;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 0.3em;
    line-height: 1.3;
  }
  
  .name-native {
    font-size: 0.75em;
    font-weight: 400;
    color: #555;
    margin-left: 0.3em;
  }
  
  .affiliation {
    font-size: 1.1em;
    line-height: 1.7;
    color: #333;
    margin-bottom: 1.5em;
  }
  
  .affiliation a {
    color: #2563eb;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.2s ease;
  }
  
  .affiliation a:hover {
    border-bottom-color: #2563eb;
  }
  
  .research-focus {
    font-size: 1.05em;
    line-height: 1.8;
    color: #444;
    background: #f8fafc;
    padding: 20px 24px;
    border-left: 4px solid #2563eb;
    border-radius: 4px;
    margin-top: 1.5em;
  }
  
  .section-header {
    font-size: 1.8em;
    font-weight: 600;
    color: #1a1a1a;
    margin-top: 50px;
    margin-bottom: 25px;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 10px;
  }
  
  .interests-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
    margin-bottom: 40px;
  }
  
  .interests-list li {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    font-size: 1.02em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .interests-list li:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
  
  .interests-list li::before {
    content: "▸";
    margin-right: 10px;
    font-weight: bold;
  }
  
  .publication-item {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  
  .publication-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  .publication-title {
    font-size: 1.15em;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  
  .publication-authors {
    color: #555;
    font-size: 1em;
    margin-bottom: 8px;
  }
  
  .publication-link {
    display: inline-block;
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    padding: 6px 14px;
    background: #eff6ff;
    border-radius: 4px;
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
      width: 220px;
      height: 220px;
    }
    
    .name-header {
      font-size: 1.8em;
    }
    
    .interests-list {
      grid-template-columns: 1fr;
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
      Researcher at <a href="https://www.icts.res.in/" target="_blank" rel="noopener">International Centre for Theoretical Sciences</a><br>
      Tata Institute of Fundamental Research (ICTS-TIFR)<br>
      Bengaluru, India
    </div>
    
    <p class="affiliation">
      Working with <a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank" rel="noopener">Samriddhi Sankar Ray (সমৃদ্ধি শঙ্কর রায়)</a>
    </p>
    
    <div class="research-focus">
      My research focuses on <strong>far-from-equilibrium phenomena</strong>, with particular emphasis on <strong>turbulence</strong> and its mathematical structure. I am broadly interested in how ideas from nonlinear dynamics and stochastic processes manifest across complex systems.
    </div>
  </div>
</div>

<h2 class="section-header">Research Interests</h2>

<ul class="interests-list">
  <li>Turbulence and non-equilibrium statistical physics</li>
  <li>Dynamical systems and nonlinear phenomena</li>
  <li>Stochastic modeling and random processes</li>
  <li>Complex networks and interacting systems</li>
</ul>

<h2 class="section-header">Publications</h2>

<div class="publication-item">
  <div class="publication-title">
    Shock trapping and inertial escape: Dust-particle clustering in compressible turbulence
  </div>
  <div class="publication-authors">
    A. Kankaria and Samriddhi Sankar Ray
  </div>
  <a href="https://arxiv.org/abs/2512.07164" class="publication-link" target="_blank" rel="noopener">
    arXiv:2512.07164
  </a>
</div>
