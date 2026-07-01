---
layout: raw
title: Gallery
description: "Photos and simulation visuals from Anikat Kankaria's research and the ICTS Fluid Dynamics Group."
nav: gallery
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gallery · Anikat Kankaria</title>
{% seo title=false %}
<style>body{margin:0;background:#f7f9fc}</style>
</head>
<body>

{% include nav.html %}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');
  .gpg{
    --paper:#f7f9fc;--ink:#1a2332;--ink-soft:#3a4a5e;--ink-muted:#6b7d92;
    --ink-faint:#a5b3c4;--navy:#1e3a6b;--navy-pale:#9fb4d0;--rule-soft:#e2e8f0;--rule:#c8d3e2;
    font-family:"Cormorant Garamond",Georgia,serif;color:var(--ink);
    background:var(--paper);max-width:1100px;margin:0 auto;padding:56px 56px 96px;
  }

  /* ---------- header ---------- */
  .rhead{margin-bottom:8px}
  .rhead h1{
    font-family:"Cormorant Garamond",serif;font-size:2.6rem;font-weight:600;
    letter-spacing:.005em;margin:0;line-height:1.05;color:var(--ink);
  }
  .rhead .rule{width:54px;height:1.5px;background:var(--navy);margin:16px 0 18px}
  .rhead p{
    font-family:"DM Sans",sans-serif;font-size:.92rem;font-weight:300;
    color:var(--ink-soft);max-width:60ch;line-height:1.75;margin:0;
  }

  /* ---------- gallery grid ---------- */
  .ggrid{
    margin-top:40px;
    display:grid;grid-template-columns:repeat(auto-fit, minmax(420px, 1fr));
    gap:40px;
  }
  .gitem{margin:0}
  .gframe{
    border:1px solid var(--rule-soft);border-radius:5px;overflow:hidden;
    background:#fff;box-shadow:0 12px 36px rgba(15,30,55,.10);
    transition:box-shadow .25s ease,transform .25s ease;
  }
  a.gframe:hover{
    box-shadow:0 16px 44px rgba(15,30,55,.16);
    transform:translateY(-2px);
  }
  .gframe img{width:100%;display:block}
  .gcap{
    font-family:"DM Sans",sans-serif;font-size:.74rem;letter-spacing:.04em;
    color:var(--ink-muted);text-align:center;margin:16px 0 0;
  }

  .gfoot{
    margin-top:72px;padding-top:24px;border-top:1px solid var(--rule-soft);
    display:flex;justify-content:space-between;align-items:center;
    font-family:"DM Sans",sans-serif;font-size:.66rem;color:var(--ink-faint);letter-spacing:.06em;
  }
  .gfoot .crest{font-family:"Cormorant Garamond",serif;font-style:italic;font-size:1.4em;color:var(--navy-pale);letter-spacing:.3em}

  @media (max-width:760px){
    .gpg{padding:36px 22px 72px}
    .rhead h1{font-size:2rem}
    .ggrid{grid-template-columns:1fr;gap:28px}
  }
  @media (prefers-reduced-motion:reduce){
    .gframe{transition:none}
  }
</style>

<main class="gpg">

  <header class="rhead">
    <h1>Gallery</h1>
    <div class="rule"></div>
    <p>Snapshots from the group, our simulations, and life at ICTS &mdash; updated as the work moves along.</p>
  </header>

  <div class="ggrid">

    <figure class="gitem">
      <a class="gframe" href="{{ '/assets/ICTS_Fluid_Group_2025_web.jpg' | relative_url }}" target="_blank" rel="noopener" style="display:block">
        <img src="{{ '/assets/ICTS_Fluid_Group_2025_web.jpg' | relative_url }}" alt="ICTS Fluid Dynamics Group, 2025" loading="lazy">
      </a>
      <figcaption class="gcap">ICTS Fluid Dynamics Group · 2025</figcaption>
    </figure>

        <figure class="gitem">
      <a class="gframe" href="{{ '/assets/ICTS_morning.jpg' | relative_url }}" target="_blank" rel="noopener" style="display:block">
        <img src="{{ '/assets/ICTS_morning.jpg' | relative_url }}" alt="Mornings @ ICTS" loading="lazy">
      </a>
      <figcaption class="gcap">ICTS Fluid Dynamics Group · 2025</figcaption>
    </figure>

  </div>

  <div class="ggrid">

    <figure class="gitem">
      <div class="gframe">
        <video controls playsinline preload="metadata" style="width:100%;display:block">
          <source src="{{ '/assets/videos/2D_Navier_stokes.mp4' | relative_url }}" type="video/mp4">
          Your browser doesn't support embedded video.
        </video>
      </div>
      <figcaption class="gcap">2D Turbulence Simulation · 2026</figcaption>
    </figure>


    <figure class="gitem">
      <div class="gframe">
        <video controls playsinline preload="metadata" style="width:100%;display:block">
          <source src="{{ '/assets/videos/stochastic_tracer.mp4' | relative_url }}" type="video/mp4">
          Your browser doesn't support embedded video.
        </video>
      </div>
      <figcaption class="gcap">2D Burgers flow with tracers · 2026</figcaption>
    </figure>


  </div>


  <footer class="gfoot">
    <span>Updated · July 2026</span>
    <span class="crest">· · ·</span>
    <span>Bengaluru · India</span>
  </footer>

</main>

</body>
</html>
