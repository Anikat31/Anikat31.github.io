---
layout: raw
title: Gallery
nav: gallery
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gallery · Anikat Kankaria</title>
<style>body{margin:0;background:#f7f9fc}</style>
</head>
<body>

{% include nav.html %}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');
  .gpg{
    --paper:#f7f9fc;--ink:#1a2332;--ink-soft:#3a4a5e;--ink-muted:#6b7d92;
    --ink-faint:#a5b3c4;--navy:#1e3a6b;--rule-soft:#e2e8f0;--rule:#c8d3e2;
    font-family:"Cormorant Garamond",Georgia,serif;color:var(--ink);
    background:var(--paper);max-width:1100px;margin:0 auto;padding:56px 56px 96px;
  }
  .gpg h1{font-family:"Cormorant Garamond",serif;font-size:2.6rem;font-weight:600;margin:0;line-height:1.05}
  .gpg .rule{width:54px;height:1.5px;background:var(--navy);margin:16px 0 36px}
  .gframe{
    border:1px solid var(--rule-soft);border-radius:5px;overflow:hidden;
    background:#fff;box-shadow:0 12px 36px rgba(15,30,55,.10);
  }
  .gframe img{width:100%;display:block}
  .gcap{
    font-family:"DM Sans",sans-serif;font-size:.74rem;letter-spacing:.04em;
    color:var(--ink-muted);text-align:center;margin-top:16px;
  }
  .gfoot{
    margin-top:72px;padding-top:24px;border-top:1px solid var(--rule-soft);
    display:flex;justify-content:space-between;align-items:center;
    font-family:"DM Sans",sans-serif;font-size:.66rem;color:var(--ink-faint);letter-spacing:.06em;
  }
  .gfoot .crest{font-family:"Cormorant Garamond",serif;font-style:italic;font-size:1.4em;color:#9fb4d0;letter-spacing:.3em}
  @media (max-width:760px){.gpg{padding:36px 22px 72px}.gpg h1{font-size:2rem}}
</style>

<div class="gpg">
  <h1>Gallery</h1>
  <div class="rule"></div>

  <a class="gframe" href="{{ '/assets/ICTS_Fluid_Group_2025_web.jpg' | relative_url }}" target="_blank" style="display:block">
    <img src="{{ '/assets/ICTS_Fluid_Group_2025_web.jpg' | relative_url }}" alt="ICTS Fluid Dynamics Group, 2025" loading="lazy">
  </a>
  <p class="gcap">ICTS Fluid Dynamics Group · 2025</p>

  <div class="gfoot">
    <span>Updated · June 2026</span>
    <span class="crest">· · ·</span>
    <span>Bengaluru · India</span>
  </div>
</div>

</body>
</html>
