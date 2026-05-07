
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&family=Noto+Serif+Devanagari:wght@400;500&display=swap');
  .pg{--ivory:#f8f6f1;--paper:#fdfcf9;--ink:#1c1917;--ink-soft:#44403c;--ink-muted:#78716c;--crimson:#7c1d1d;--crimson-light:#9b2626;--rule:#d6d0c8;--rule-soft:#e8e4dc;--highlight:#f0ebe0;font-family:"Cormorant Garamond","Noto Serif Devanagari",Georgia,serif;font-size:16px;line-height:1.75;background:var(--paper);color:var(--ink);padding:32px 28px 64px;max-width:860px;margin:0 auto}
  .profile{display:grid;grid-template-columns:260px 1fr;gap:48px;align-items:start;margin-bottom:56px}
  .profile-photo{display:flex;justify-content:center;padding-top:8px}
  .profile-photo img{width:220px;height:220px;object-fit:cover;border-radius:50%;filter:grayscale(12%) contrast(1.03);display:block;outline:4px solid var(--paper);box-shadow:0 0 0 1.5px var(--rule),0 12px 36px rgba(28,25,23,0.15)}
  .profile-content{padding-top:8px}
  .name-en{font-family:"Cormorant Garamond",serif;font-size:2.4em;font-weight:600;letter-spacing:.01em;color:var(--ink);line-height:1.1;display:block}
  .name-deva{font-family:"Noto Serif Devanagari",serif;font-size:.9em;font-weight:400;color:var(--ink-muted);display:block;margin-top:4px;letter-spacing:.02em}
  .name-rule{width:48px;height:1px;background:var(--crimson);margin-top:14px;display:block}
  .meta{font-family:"DM Sans",sans-serif;font-size:.76em;color:var(--ink-soft);margin:20px 0 24px;line-height:1.9}
  .meta-label{font-weight:500;color:var(--ink-muted);text-transform:uppercase;letter-spacing:.08em;font-size:.82em;display:inline-block;margin-right:8px}
  .meta a{color:var(--crimson-light);text-decoration:none;border-bottom:1px solid transparent;transition:border-color .2s}
  .meta a:hover{border-bottom-color:var(--crimson-light)}
  .research-statement{font-size:1.02em;color:var(--ink-soft);font-style:italic;line-height:1.8;border-left:2px solid var(--crimson);padding-left:18px;margin-bottom:20px;border-radius:0}
  .research-statement strong{font-style:normal;font-weight:600;color:var(--ink)}
  .interests{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
  .interest-tag{font-family:"DM Sans",sans-serif;font-size:.68em;font-weight:400;letter-spacing:.04em;color:var(--ink-soft);background:var(--highlight);border:1px solid var(--rule);padding:4px 12px;border-radius:1px}
  .section{margin-top:52px}
  .section-title{font-family:"DM Sans",sans-serif;font-size:.7em;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:20px;display:flex;align-items:center;gap:16px}
  .section-title::after{content:'';flex:1;height:1px;background:var(--rule-soft)}
  /* CONTACT REDESIGN */
  .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:620px}
  .contact-card{display:flex;align-items:center;gap:14px;padding:16px 18px;background:var(--paper);border:1px solid var(--rule-soft);border-radius:3px;text-decoration:none;transition:all .18s;position:relative;overflow:hidden}
  .contact-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--crimson);opacity:0;transition:opacity .18s}
  .contact-card:hover{background:var(--highlight);border-color:var(--rule);transform:translateY(-1px);box-shadow:0 4px 16px rgba(28,25,23,.07)}
  .contact-card:hover::before{opacity:1}
  .cc-icon{width:36px;height:36px;border-radius:50%;background:var(--highlight);border:1px solid var(--rule);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:"DM Sans",sans-serif;font-size:15px;color:var(--crimson);line-height:1}
  .cc-body{display:flex;flex-direction:column;min-width:0}
  .cc-label{font-family:"DM Sans",sans-serif;font-size:.6em;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);line-height:1;margin-bottom:5px}
  .cc-value{font-family:"DM Sans",sans-serif;font-size:.75em;color:var(--crimson-light);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400}
  /* PUBS */
  .pub-list{display:flex;flex-direction:column;gap:0;max-width:820px}
  .pub-item{display:grid;grid-template-columns:36px 1fr;gap:0 24px;padding:26px 0;border-bottom:1px solid var(--rule-soft);position:relative}
  .pub-item:first-child{border-top:1px solid var(--rule-soft)}
  .pub-num{font-family:"DM Sans",sans-serif;font-size:.72em;font-weight:500;color:var(--crimson);padding-top:4px;letter-spacing:.04em}
  .pub-title{font-family:"Cormorant Garamond",serif;font-size:1.08em;font-weight:600;color:var(--ink);line-height:1.4;margin-bottom:8px}
  .pub-authors{font-family:"DM Sans",sans-serif;font-size:.71em;color:var(--ink-muted);line-height:1.6;margin-bottom:10px}
  .pub-authors .self{color:var(--ink-soft);font-weight:500}
  .pub-link{display:inline-flex;align-items:center;gap:5px;font-family:"DM Sans",sans-serif;font-size:.69em;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--crimson-light);text-decoration:none;border-bottom:1px solid var(--rule-soft);padding-bottom:1px;transition:border-color .2s,color .2s}
  .pub-link:hover{border-bottom-color:var(--crimson-light);color:var(--crimson)}
  .pub-link::after{content:'↗';font-size:.9em}
</style>

<div class="pg">
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
        <div><span class="meta-label">Position</span>Research Scholar</div>
        <div><span class="meta-label">Institute</span><a href="https://www.icts.res.in/" target="_blank">International Centre for Theoretical Sciences, TIFR</a> &ensp;·&ensp; Bengaluru, India</div>
        <div><span class="meta-label">Advisor</span><a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank">Samriddhi Sankar Ray (সমৃদ্ধি শঙ্কর রায়)</a></div>
      </div>
      <p class="research-statement">My research centres on <strong>far-from-equilibrium phenomena</strong>, with particular emphasis on <strong>turbulence</strong> and its mathematical structure. I am broadly interested in how ideas from nonlinear dynamics and stochastic processes manifest in complex systems.</p>
      <div class="interests">
        <span class="interest-tag">Turbulence</span>
        <span class="interest-tag">Non-equilibrium Statistical Physics</span>
        <span class="interest-tag">Dynamical Systems</span>
        <span class="interest-tag">Stochastic Processes</span>
        <span class="interest-tag">Complex &amp; Interacting Systems</span>
      </div>
    </div>
  </div>

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
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">Publications &amp; Preprints</h2>
    <div class="pub-list">
      <div class="pub-item">
        <span class="pub-num">2</span>
        <div class="pub-content">
          <div class="pub-title">Reduction of Triadic Interactions Suppresses Intermittency and Anomalous Dissipation in Turbulence</div>
          <div class="pub-authors"><span class="self">Anikat Kankaria</span>, Ritwik Mukherjee, Sugan Durai Murugan, Marco Edoardo Rosti, Samriddhi Sankar Ray</div>
          <a class="pub-link" href="https://arxiv.org/abs/2603.19180" target="_blank">arXiv:2603.19180</a>
        </div>
      </div>
      <div class="pub-item">
        <span class="pub-num">1</span>
        <div class="pub-content">
          <div class="pub-title">Shock Trapping and Inertial Escape: Dust-Particle Clustering in Compressible Turbulence</div>
          <div class="pub-authors"><span class="self">Anikat Kankaria</span>, Samriddhi Sankar Ray</div>
          <a class="pub-link" href="https://arxiv.org/abs/2512.07164" target="_blank">arXiv:2512.07164</a>
        </div>
      </div>
    </div>
  </div>
</div>
