<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Anikat Kankaria · ICTS-TIFR</title>
<style>body{margin:0;background:#f7f9fc}</style>
</head>
<body>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&family=Noto+Serif+Devanagari:wght@400;500&display=swap');

  .pg{
    --ivory:#eef3fa;
    --paper:#f7f9fc;
    --paper-warm:#eef3fa;
    --ink:#1a2332;
    --ink-soft:#3a4a5e;
    --ink-muted:#6b7d92;
    --ink-faint:#a5b3c4;
    --crimson:#1e3a6b;
    --crimson-light:#2d5a8a;
    --crimson-pale:#9fb4d0;
    --rule:#c8d3e2;
    --rule-soft:#e2e8f0;
    --highlight:#ebf0f7;
    --highlight-warm:#e6eef8;
    font-family:"Cormorant Garamond","Noto Serif Devanagari",Georgia,serif;
    font-size:16px;
    line-height:1.75;
    background:var(--paper);
    color:var(--ink);
    padding:48px 28px 80px;
    max-width:880px;
    margin:0 auto;
  }

  /* ========== PROFILE ========== */
  .profile{
    display:grid;
    grid-template-columns:240px 1fr;
    gap:52px;
    align-items:start;
    margin-bottom:64px;
  }
  .profile-photo{display:flex;justify-content:center;padding-top:6px;position:relative}
  .profile-photo img{
    width:220px;height:220px;
    object-fit:cover;border-radius:50%;
    filter:grayscale(15%) contrast(1.04);
    display:block;
    outline:5px solid var(--paper);
    box-shadow:0 0 0 1.5px var(--rule),0 16px 44px rgba(15,30,55,.16);
  }
  .photo-ornament{
    position:absolute;bottom:6px;left:50%;transform:translateX(-50%) translateY(50%);
    font-family:"Cormorant Garamond",serif;font-size:22px;color:var(--crimson);
    background:var(--paper);padding:0 10px;line-height:1;letter-spacing:.4em;
  }
  .profile-content{padding-top:4px}
  .name-en{
    font-family:"Cormorant Garamond",serif;
    font-size:2.55em;font-weight:600;
    letter-spacing:.005em;color:var(--ink);
    line-height:1.05;display:block;
  }
  .name-deva{
    font-family:"Noto Serif Devanagari",serif;
    font-size:.92em;font-weight:400;
    color:var(--ink-muted);display:block;
    margin-top:6px;letter-spacing:.02em;
  }
  .name-rule{
    width:54px;height:1.5px;background:var(--crimson);
    margin-top:16px;display:block;
  }

  .meta{
    font-family:"DM Sans",sans-serif;font-size:.78em;
    color:var(--ink-soft);margin:22px 0 26px;line-height:1.95;
  }
  .meta-row{display:flex;gap:0;align-items:baseline;margin-bottom:2px}
  .meta-label{
    font-weight:500;color:var(--ink-muted);
    text-transform:uppercase;letter-spacing:.1em;
    font-size:.82em;display:inline-block;
    width:84px;flex-shrink:0;
  }
  .meta-value{color:var(--ink-soft)}
  .meta a{
    color:var(--crimson-light);text-decoration:none;
    border-bottom:1px solid transparent;transition:border-color .2s;
  }
  .meta a:hover{border-bottom-color:var(--crimson-light)}

  .research-statement{
    font-size:1.04em;color:var(--ink-soft);
    font-style:italic;line-height:1.8;
    border-left:2px solid var(--crimson);
    padding:2px 0 2px 20px;margin:0 0 22px;
    position:relative;
  }
  .research-statement strong{font-style:normal;font-weight:600;color:var(--ink)}

  .interests{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
  .interest-tag{
    font-family:"DM Sans",sans-serif;
    font-size:.7em;font-weight:400;
    letter-spacing:.04em;color:var(--ink-soft);
    background:var(--highlight);
    border:1px solid var(--rule);
    padding:5px 13px;border-radius:1px;
  }

  /* ========== SECTIONS ========== */
  .section{margin-top:60px}
  .section-title{
    font-family:"DM Sans",sans-serif;
    font-size:.72em;font-weight:500;
    letter-spacing:.16em;text-transform:uppercase;
    color:var(--ink-muted);
    margin-bottom:28px;
    display:flex;align-items:center;gap:18px;
  }
  .section-title::before{
    content:'§';font-family:"Cormorant Garamond",serif;
    font-size:1.6em;color:var(--crimson);
    font-style:italic;font-weight:400;
    letter-spacing:0;line-height:1;
    transform:translateY(1px);
  }
  .section-title::after{
    content:'';flex:1;height:1px;background:var(--rule-soft);
  }

  /* ========== CONTACT ========== */
  .contact-grid{
    display:grid;grid-template-columns:1fr 1fr;
    gap:10px;max-width:680px;
  }
  .contact-card{
    display:flex;align-items:center;gap:14px;
    padding:16px 18px;background:var(--paper);
    border:1px solid var(--rule-soft);border-radius:3px;
    text-decoration:none;transition:all .2s;
    position:relative;overflow:hidden;
  }
  .contact-card::before{
    content:'';position:absolute;left:0;top:0;bottom:0;
    width:2px;background:var(--crimson);
    opacity:0;transition:opacity .2s;
  }
  .contact-card:hover{
    background:var(--highlight-warm);
    border-color:var(--rule);
    transform:translateY(-1px);
    box-shadow:0 4px 16px rgba(15,30,55,.08);
  }
  .contact-card:hover::before{opacity:1}
  .cc-icon{
    width:36px;height:36px;border-radius:50%;
    background:var(--highlight);
    border:1px solid var(--rule);
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;font-family:"DM Sans",sans-serif;
    font-size:15px;color:var(--crimson);line-height:1;
  }
  .cc-body{display:flex;flex-direction:column;min-width:0}
  .cc-label{
    font-family:"DM Sans",sans-serif;
    font-size:.6em;font-weight:500;
    letter-spacing:.11em;text-transform:uppercase;
    color:var(--ink-muted);line-height:1;margin-bottom:5px;
  }
  .cc-value{
    font-family:"DM Sans",sans-serif;
    font-size:.76em;color:var(--crimson-light);
    white-space:nowrap;overflow:hidden;
    text-overflow:ellipsis;font-weight:400;
  }

  /* ========== EDUCATION ========== */
  .edu-list{
    max-width:760px;
    display:flex;flex-direction:column;gap:0;
    border-left:1px solid var(--rule-soft);
    padding-left:0;margin-left:8px;
  }
  .edu-item{
    display:grid;
    grid-template-columns:148px 1fr;
    gap:32px;
    padding:22px 0 22px 28px;
    position:relative;
    border-bottom:1px solid var(--rule-soft);
  }
  .edu-item:last-child{border-bottom:none}
  .edu-item::before{
    content:'';position:absolute;
    left:-5px;top:30px;
    width:9px;height:9px;border-radius:50%;
    background:var(--paper);
    border:1.5px solid var(--crimson-pale);
  }
  .edu-item.current::before{
    background:var(--crimson);
    border-color:var(--crimson);
    box-shadow:0 0 0 4px rgba(30,58,107,.12);
  }
  .edu-years{
    font-family:"DM Sans",sans-serif;
    font-size:.74em;font-weight:500;
    color:var(--crimson);
    letter-spacing:.04em;
    padding-top:4px;
    line-height:1.5;
  }
  .edu-years .current-mark{
    display:inline-block;
    font-size:.78em;font-weight:400;
    color:var(--ink-muted);
    font-style:italic;
    font-family:"Cormorant Garamond",serif;
    letter-spacing:0;
    margin-left:2px;
  }
  .edu-body{min-width:0}
  .edu-degree{
    font-family:"Cormorant Garamond",serif;
    font-size:1.12em;font-weight:600;
    color:var(--ink);line-height:1.35;
    margin-bottom:4px;
  }
  .edu-inst{
    font-family:"DM Sans",sans-serif;
    font-size:.78em;color:var(--ink-soft);
    line-height:1.55;font-weight:400;
  }
  .edu-detail{
    font-family:"DM Sans",sans-serif;
    font-size:.7em;color:var(--ink-muted);
    line-height:1.55;font-weight:400;
    margin-top:6px;
    display:flex;flex-wrap:wrap;gap:14px;
  }
  .edu-detail span{display:inline-flex;align-items:center;gap:6px}
  .edu-detail .dot{color:var(--ink-faint);font-size:.9em}
  .edu-detail .key{
    text-transform:uppercase;letter-spacing:.08em;
    font-size:.86em;color:var(--ink-muted);font-weight:500;
  }
  .edu-detail .val{color:var(--ink-soft)}

  /* ========== PUBLICATIONS ========== */
  .pub-list{display:flex;flex-direction:column;gap:0;max-width:820px}
  .pub-item{
    display:grid;
    grid-template-columns:36px 1fr;
    gap:0 24px;padding:28px 0;
    border-bottom:1px solid var(--rule-soft);
    position:relative;
  }
  .pub-item:first-child{border-top:1px solid var(--rule-soft)}
  .pub-num{
    font-family:"DM Sans",sans-serif;
    font-size:.72em;font-weight:500;
    color:var(--crimson);padding-top:4px;
    letter-spacing:.04em;
  }
  .pub-title{
    font-family:"Cormorant Garamond",serif;
    font-size:1.12em;font-weight:600;
    color:var(--ink);line-height:1.4;
    margin-bottom:8px;
  }
  .pub-authors{
    font-family:"DM Sans",sans-serif;
    font-size:.72em;color:var(--ink-muted);
    line-height:1.65;margin-bottom:12px;
  }
  .pub-authors .self{color:var(--ink-soft);font-weight:500}
  .pub-link{
    display:inline-flex;align-items:center;gap:5px;
    font-family:"DM Sans",sans-serif;
    font-size:.69em;font-weight:500;
    letter-spacing:.07em;text-transform:uppercase;
    color:var(--crimson-light);text-decoration:none;
    border-bottom:1px solid var(--rule-soft);
    padding-bottom:1px;
    transition:border-color .2s,color .2s;
  }
  .pub-link:hover{
    border-bottom-color:var(--crimson-light);
    color:var(--crimson);
  }
  .pub-link::after{content:'↗';font-size:.9em}
  .pub-status{
    display:inline-flex;align-items:center;gap:6px;
    font-family:"DM Sans",sans-serif;
    font-size:.68em;font-weight:500;
    letter-spacing:.08em;text-transform:uppercase;
    color:var(--ink-muted);
    font-style:normal;
  }
  .pub-status::before{
    content:'';width:6px;height:6px;border-radius:50%;
    background:var(--crimson-pale);
    display:inline-block;
  }

  /* ========== FOOTER ========== */
  .pg-footer{
    margin-top:80px;padding-top:24px;
    border-top:1px solid var(--rule-soft);
    display:flex;justify-content:space-between;
    align-items:center;
    font-family:"DM Sans",sans-serif;
    font-size:.66em;color:var(--ink-faint);
    letter-spacing:.06em;
  }
  .pg-footer .crest{
    font-family:"Cormorant Garamond",serif;
    font-style:italic;font-size:1.4em;
    color:var(--crimson-pale);
    letter-spacing:.3em;line-height:1;
  }

  @media (max-width: 640px){
    .profile{grid-template-columns:1fr;gap:32px;text-align:center}
    .profile-photo{justify-content:center}
    .name-rule{margin-left:auto;margin-right:auto}
    .meta-row{justify-content:center;flex-wrap:wrap}
    .interests{justify-content:center}
    .research-statement{text-align:left}
    .contact-grid{grid-template-columns:1fr}
    .edu-item{grid-template-columns:1fr;gap:6px;padding-left:24px}
    .edu-years{padding-top:0}
  }
</style>

<div class="pg">

  <!-- ==================== PROFILE ==================== -->
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
        <div class="meta-row"><span class="meta-label">Position</span><span class="meta-value">PhD Candidate, Physics</span></div>
        <div class="meta-row"><span class="meta-label">Institute</span><span class="meta-value"><a href="https://www.icts.res.in/" target="_blank">International Centre for Theoretical Sciences, TIFR</a>&ensp;·&ensp;Bengaluru, India</span></div>
        <div class="meta-row"><span class="meta-label">Advisor</span><span class="meta-value"><a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank">Prof. Samriddhi Sankar Ray (সমৃদ্ধি শঙ্কর রায়)</a></span></div>
      </div>
      <p class="research-statement">My research centres on <strong>far-from-equilibrium phenomena</strong>, with particular emphasis on <strong>turbulence</strong> and its mathematical structure. I am broadly interested in how ideas from nonlinear dynamics and stochastic processes manifest in complex systems.</p>
      <div class="interests">
        <span class="interest-tag">Turbulence &amp; Fluid Dynamics</span>
        <span class="interest-tag">Compressible Turbulence</span>
        <span class="interest-tag">Non-equilibrium Statistical Physics</span>
        <span class="interest-tag">Stochastic Processes</span>
        <span class="interest-tag">Dynamical Systems</span>
        <span class="interest-tag">High-Performance Scientific Computing</span>
      </div>
    </div>
  </div>

  <!-- ==================== CONTACT ==================== -->
  <div class="section">
    <h2 class="section-title">Contact</h2>
    <div class="contact-grid">
      <a class="contact-card" href="mailto:anikat.kankaria@icts.res.in">
        <div class="cc-icon">✉</div>
        <div class="cc-body">
          <span class="cc-label">Institute Email</span>
          <span class="cc-value">anikat.kankaria@icts.res.in</span>
        </div>
      </a>
      <a class="contact-card" href="mailto:anikat.kankaria@gmail.com">
        <div class="cc-icon">✉</div>
        <div class="cc-body">
          <span class="cc-label">Personal Email</span>
          <span class="cc-value">anikat.kankaria@gmail.com</span>
        </div>
      </a>
      <a class="contact-card" href="tel:+919674850807">
        <div class="cc-icon">✆</div>
        <div class="cc-body">
          <span class="cc-label">Phone</span>
          <span class="cc-value">+91 96748 50807</span>
        </div>
      </a>
      <a class="contact-card" href="https://anikat31.github.io" target="_blank">
        <div class="cc-icon">⌘</div>
        <div class="cc-body">
          <span class="cc-label">Website</span>
          <span class="cc-value">anikat31.github.io</span>
        </div>
      </a>
    </div>
  </div>

  <!-- ==================== EDUCATION ==================== -->
  <div class="section">
    <h2 class="section-title">Education</h2>
    <div class="edu-list">

      <div class="edu-item current">
        <div class="edu-years">2025 — <span class="current-mark">Present</span></div>
        <div class="edu-body">
          <div class="edu-degree">Doctor of Philosophy in Physics</div>
          <div class="edu-inst">International Centre for Theoretical Sciences, TIFR&ensp;·&ensp;Bengaluru</div>
          <div class="edu-detail">
            <span><span class="key">Advisor</span><span class="val">Prof. Samriddhi Sankar Ray</span></span>
          </div>
        </div>
      </div>

      <div class="edu-item">
        <div class="edu-years">2022 — 2025</div>
        <div class="edu-body">
          <div class="edu-degree">Master of Science in Physics</div>
          <div class="edu-inst">International Centre for Theoretical Sciences, TIFR&ensp;·&ensp;Bengaluru</div>
        </div>
      </div>

      <div class="edu-item">
        <div class="edu-years">2019 — 2022</div>
        <div class="edu-body">
          <div class="edu-degree">Bachelor of Science in Physics</div>
          <div class="edu-inst">University of Calcutta&ensp;·&ensp;Calcutta</div>
          <div class="edu-detail">
            <span><span class="key">CGPA</span><span class="val">8.99 / 10</span></span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- ==================== PUBLICATIONS ==================== -->
  <div class="section">
    <h2 class="section-title">Publications &amp; Preprints</h2>
    <div class="pub-list">

      <div class="pub-item">
        <span class="pub-num">3</span>
        <div class="pub-content">
          <div class="pub-title">Dynamical Slowdown, Bottlenecks, and Multiscaling in Voigt-Regularised Turbulence</div>
          <div class="pub-authors"><span class="self">Anikat Kankaria</span>, Bikram Pal, Samriddhi Sankar Ray</div>
          <span class="pub-status">Manuscript in preparation</span>
        </div>
      </div>

      <div class="pub-item">
        <span class="pub-num">2</span>
        <div class="pub-content">
          <div class="pub-title">Reduction of Triadic Interactions Suppresses Intermittency and Anomalous Dissipation in Turbulence</div>
          <div class="pub-authors"><span class="self">Anikat Kankaria</span>, Samriddhi Sankar Ray</div>
          <a class="pub-link" href="https://arxiv.org/abs/2603.19180" target="_blank">arXiv:2603.19180</a>
        </div>
      </div>

      <div class="pub-item">
        <span class="pub-num">1</span>
        <div class="pub-content">
          <div class="pub-title">Shock Trapping and Inertial Escape: Dust-Particle Clustering in Compressible Turbulence</div>
          <div class="pub-authors"><span class="self">Anikat Kankaria</span>, Ritwik Mukherjee, Sugan Durai Murugan, Marco Edoardo Rosti, Samriddhi Sankar Ray</div>
          <a class="pub-link" href="https://arxiv.org/abs/2512.07164" target="_blank">arXiv:2512.07164</a>
        </div>
      </div>

    </div>
  </div>

  <div class="pg-footer">
    <span>Last updated · May 2026</span>
    <span class="crest">· · ·</span>
    <span>Bengaluru · India</span>
  </div>

</div>
</body>
</html>
