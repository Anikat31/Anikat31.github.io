<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anikat Kankaria</title>
  <meta name="description" content="Research Scholar at ICTS–TIFR, Bengaluru. Working on turbulence, far-from-equilibrium phenomena, and nonlinear dynamics.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">

  <style>
    /* ── Variables ── */
    :root {
      --ink:       #1a1612;
      --ink-mid:   #5a5248;
      --ink-light: #9a9088;
      --paper:     #f7f4ef;
      --paper-2:   #eeebe4;
      --rule:      #d8d3ca;
      --red:       #9b2020;
      --red-light: #f5e8e8;
      --accent:    #1f4e8c;
      --serif:     'EB Garamond', Georgia, serif;
      --mono:      'DM Mono', 'Courier New', monospace;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: var(--paper);
      color: var(--ink);
      font-family: var(--serif);
      font-size: 18px;
      line-height: 1.75;
      -webkit-font-smoothing: antialiased;
    }

    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; text-underline-offset: 3px; }

    /* ── Page layout ── */
    .site {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 260px 1fr;
      grid-template-rows: auto 1fr auto;
    }

    /* ── Sidebar ── */
    .sidebar {
      grid-column: 1;
      grid-row: 1 / 3;
      background: var(--ink);
      color: var(--paper);
      padding: 3rem 2rem;
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    .sidebar-photo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid rgba(247,244,239,0.2);
      flex-shrink: 0;
    }

    .sidebar-photo img {
      width: 100%; height: 100%;
      object-fit: cover; display: block;
    }

    .sidebar-photo-placeholder {
      width: 120px; height: 120px;
      border-radius: 50%;
      background: rgba(247,244,239,0.08);
      border: 2px solid rgba(247,244,239,0.2);
      display: flex; align-items: center; justify-content: center;
      font-size: 2.4rem; font-weight: 500;
      color: rgba(247,244,239,0.5);
      letter-spacing: -0.02em;
      flex-shrink: 0;
    }

    .sidebar-name {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.25;
      color: var(--paper);
    }

    .sidebar-name-native {
      display: block;
      font-size: 0.85rem;
      font-style: italic;
      color: rgba(247,244,239,0.45);
      margin-top: 0.2rem;
    }

    .sidebar-role {
      font-size: 0.82rem;
      font-family: var(--mono);
      color: rgba(247,244,239,0.5);
      line-height: 1.6;
      margin-top: 0.5rem;
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      margin-top: auto;
    }

    .sidebar-nav a {
      font-family: var(--mono);
      font-size: 0.78rem;
      color: rgba(247,244,239,0.45);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 0.4rem 0;
      border-bottom: 1px solid rgba(247,244,239,0.07);
      transition: color 0.2s;
    }

    .sidebar-nav a:hover { color: var(--paper); text-decoration: none; }

    .sidebar-contact {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .sidebar-contact a {
      font-size: 0.8rem;
      font-family: var(--mono);
      color: rgba(247,244,239,0.5);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.2s;
      word-break: break-all;
    }

    .sidebar-contact a:hover { color: var(--paper); text-decoration: none; }

    .sidebar-contact svg {
      width: 13px; height: 13px;
      fill: currentColor; flex-shrink: 0;
    }

    /* ── Main content ── */
    .main {
      grid-column: 2;
      padding: 5rem 5rem 5rem 5rem;
      max-width: 820px;
    }

    /* ── Section ── */
    .section { margin-bottom: 5rem; }

    .section-label {
      font-family: var(--mono);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink-light);
      margin-bottom: 1.8rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .section-label::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--rule);
    }

    /* ── Hero / About ── */
    #about .lead {
      font-size: 1.15rem;
      line-height: 1.85;
      color: var(--ink);
    }

    #about .lead + .lead { margin-top: 1.2rem; }

    #about .interests {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.6rem 2rem;
    }

    #about .interest-item {
      font-size: 0.95rem;
      color: var(--ink-mid);
      display: flex;
      align-items: baseline;
      gap: 0.6rem;
    }

    #about .interest-item::before {
      content: '—';
      color: var(--ink-light);
      font-family: var(--mono);
      font-size: 0.75rem;
      flex-shrink: 0;
    }

    /* ── News ── */
    .news-list {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .news-item {
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 1.5rem;
      padding: 1rem 0;
      border-bottom: 1px solid var(--rule);
      font-size: 0.97rem;
      line-height: 1.65;
      opacity: 0;
      transform: translateY(12px);
      animation: fadeUp 0.5s ease forwards;
    }

    .news-item:first-child { border-top: 1px solid var(--rule); }

    .news-item:nth-child(1) { animation-delay: 0.05s; }
    .news-item:nth-child(2) { animation-delay: 0.12s; }
    .news-item:nth-child(3) { animation-delay: 0.19s; }

    .news-date {
      font-family: var(--mono);
      font-size: 0.75rem;
      color: var(--ink-light);
      padding-top: 0.1rem;
      white-space: nowrap;
    }

    /* ── Publications ── */
    .pub-list {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .pub-item {
      padding: 1.8rem 0;
      border-bottom: 1px solid var(--rule);
      display: grid;
      grid-template-columns: 36px 1fr;
      gap: 1.2rem;
      align-items: start;
      opacity: 0;
      transform: translateY(12px);
      animation: fadeUp 0.5s ease forwards;
    }

    .pub-item:first-child { border-top: 1px solid var(--rule); }
    .pub-item:nth-child(1) { animation-delay: 0.05s; }
    .pub-item:nth-child(2) { animation-delay: 0.15s; }

    .pub-num {
      font-family: var(--mono);
      font-size: 0.78rem;
      color: var(--ink-light);
      padding-top: 0.2rem;
      text-align: right;
    }

    .pub-body {}

    .pub-title {
      font-size: 1.05rem;
      font-weight: 500;
      line-height: 1.45;
      margin-bottom: 0.4rem;
      color: var(--ink);
    }

    .pub-authors {
      font-size: 0.9rem;
      color: var(--ink-mid);
      font-style: italic;
      margin-bottom: 0.6rem;
      line-height: 1.55;
    }

    .pub-authors strong {
      font-style: normal;
      font-weight: 600;
      color: var(--ink);
    }

    .pub-links { display: flex; gap: 0.6rem; flex-wrap: wrap; }

    .badge-arxiv {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: var(--mono);
      font-size: 0.72rem;
      font-weight: 500;
      color: var(--red);
      background: var(--red-light);
      border: 1px solid #e8c0c0;
      border-radius: 3px;
      padding: 2px 10px;
      text-decoration: none;
      letter-spacing: 0.02em;
      transition: background 0.15s;
    }

    .badge-arxiv:hover {
      background: #efd4d4;
      text-decoration: none;
      color: var(--red);
    }

    /* ── Footer ── */
    footer {
      grid-column: 2;
      padding: 2rem 5rem;
      border-top: 1px solid var(--rule);
      font-family: var(--mono);
      font-size: 0.72rem;
      color: var(--ink-light);
      letter-spacing: 0.04em;
    }

    /* ── Animations ── */
    @keyframes fadeUp {
      to { opacity: 1; transform: translateY(0); }
    }

    .hero-enter {
      opacity: 0;
      animation: fadeUp 0.7s ease 0.1s forwards;
    }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      .site { grid-template-columns: 1fr; grid-template-rows: auto auto 1fr auto; }

      .sidebar {
        grid-column: 1; grid-row: 1;
        position: static; height: auto;
        flex-direction: row; flex-wrap: wrap;
        align-items: center;
        padding: 1.5rem 2rem;
        gap: 1.5rem;
      }

      .sidebar-photo, .sidebar-photo-placeholder { width: 70px; height: 70px; font-size: 1.4rem; }
      .sidebar-name { font-size: 1.1rem; }
      .sidebar-role { display: none; }
      .sidebar-nav { flex-direction: row; margin-top: 0; flex-wrap: wrap; gap: 0; }
      .sidebar-nav a { border-bottom: none; padding: 0.2rem 0.6rem 0.2rem 0; }
      .sidebar-contact { flex-direction: row; flex-wrap: wrap; gap: 0.8rem; }
      .sidebar-contact a { word-break: normal; }

      .main { grid-column: 1; grid-row: 2; padding: 3rem 2rem 3rem; max-width: 100%; }
      footer { grid-column: 1; grid-row: 3; padding: 1.5rem 2rem; }
      #about .interests { grid-template-columns: 1fr; }
    }

    @media (max-width: 560px) {
      .sidebar { padding: 1.2rem 1.2rem; }
      .main { padding: 2.5rem 1.2rem; }
      footer { padding: 1.2rem; }
      .news-item { grid-template-columns: 1fr; gap: 0.2rem; }
      .news-date { padding-top: 0; }
      .pub-item { grid-template-columns: 28px 1fr; gap: 0.8rem; }
    }
  </style>
</head>

<body>
<div class="site">

  <!-- ══════════ SIDEBAR ══════════ -->
  <aside class="sidebar">

    <div class="sidebar-photo">
      <img src="assets/Anikat.jpg" alt="Anikat Kankaria"
           onerror="this.parentElement.outerHTML='<div class=\'sidebar-photo-placeholder\'>AK</div>'">
    </div>

    <div>
      <div class="sidebar-name">
        Anikat Kankaria
        <span class="sidebar-name-native">अनिकेत कांकरिया</span>
      </div>
      <div class="sidebar-role">
        Research Scholar<br>
        ICTS – TIFR<br>
        Bengaluru, India
      </div>
    </div>

    <nav class="sidebar-nav">
      <a href="#about">About</a>
      <a href="#news">News</a>
      <a href="#publications">Publications</a>
    </nav>

    <div class="sidebar-contact">
      <a href="mailto:anikat.kankaria@icts.res.in">
        <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
        anikat.kankaria@icts.res.in
      </a>
      <a href="mailto:anikat.kankaria@gmail.com">
        <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
        anikat.kankaria@gmail.com
      </a>
      <a href="tel:+919674850807">
        <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
        +91-9674850807
      </a>
    </div>

  </aside>

  <!-- ══════════ MAIN ══════════ -->
  <main class="main">

    <!-- About -->
    <section class="section" id="about">
      <div class="section-label">About</div>

      <div class="hero-enter">
        <p class="lead">
          I am a Research Scholar at the
          <a href="https://www.icts.res.in/" target="_blank" rel="noopener">International Centre for Theoretical Sciences (ICTS–TIFR)</a>,
          Bengaluru, working with
          <a href="https://www.icts.res.in/people/samriddhi-sankar-ray" target="_blank" rel="noopener">Samriddhi Sankar Ray</a>.
        </p>

        <p class="lead">
          My research focuses on <em>far-from-equilibrium phenomena</em>, with particular
          emphasis on <em>turbulence</em> and its mathematical structure. I am broadly
          interested in how ideas from nonlinear dynamics and stochastic processes
          manifest in complex systems.
        </p>

        <div class="interests">
          <div class="interest-item">Turbulence &amp; non-equilibrium statistical physics</div>
          <div class="interest-item">Dynamical systems &amp; nonlinear phenomena</div>
          <div class="interest-item">Stochastic modeling &amp; random processes</div>
          <div class="interest-item">Complex &amp; interacting systems</div>
        </div>
      </div>
    </section>

    <!-- News -->
    <section class="section" id="news">
      <div class="section-label">News</div>

      <div class="news-list">

        <div class="news-item">
          <div class="news-date">Mar 2025</div>
          <div>
            New preprint on the reduction of triadic interactions and its role in
            suppressing intermittency and anomalous dissipation in turbulence —
            <a href="https://arxiv.org/abs/2603.19180" target="_blank" rel="noopener">arXiv:2603.19180</a>.
          </div>
        </div>

        <div class="news-item">
          <div class="news-date">Dec 2024</div>
          <div>
            New preprint on shock trapping and inertial escape of dust particles
            in compressible turbulence —
            <a href="https://arxiv.org/abs/2512.07164" target="_blank" rel="noopener">arXiv:2512.07164</a>.
          </div>
        </div>

      </div>
    </section>

    <!-- Publications -->
    <section class="section" id="publications">
      <div class="section-label">Publications</div>

      <div class="pub-list">

        <div class="pub-item">
          <div class="pub-num">2</div>
          <div class="pub-body">
            <div class="pub-title">
              Reduction of Triadic Interactions Suppresses Intermittency and
              Anomalous Dissipation in Turbulence
            </div>
            <div class="pub-authors">
              <strong>Anikat Kankaria</strong>, Ritwik Mukherjee, Sugan Durai Murugan,
              Marco Edoardo Rosti, Samriddhi Sankar Ray
            </div>
            <div class="pub-links">
              <a class="badge-arxiv" href="https://arxiv.org/abs/2603.19180" target="_blank" rel="noopener">
                arXiv · 2603.19180
              </a>
            </div>
          </div>
        </div>

        <div class="pub-item">
          <div class="pub-num">1</div>
          <div class="pub-body">
            <div class="pub-title">
              Shock Trapping and Inertial Escape: Dust-Particle Clustering
              in Compressible Turbulence
            </div>
            <div class="pub-authors">
              <strong>Anikat Kankaria</strong>, Samriddhi Sankar Ray
            </div>
            <div class="pub-links">
              <a class="badge-arxiv" href="https://arxiv.org/abs/2512.07164" target="_blank" rel="noopener">
                arXiv · 2512.07164
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

  </main>

  <!-- ══════════ FOOTER ══════════ -->
  <footer>
    Anikat Kankaria &nbsp;·&nbsp; ICTS–TIFR, Bengaluru &nbsp;·&nbsp; 2025
  </footer>

</div>
</body>
</html>
