---
layout: raw
title: Research
nav: research
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Research · Anikat Kankaria</title>
<style>body{margin:0;background:#f7f9fc}</style>
</head>
<body>

{% include nav.html %}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

  .rpg{
    --paper:#f7f9fc; --ink:#1a2332; --ink-soft:#3a4a5e; --ink-muted:#6b7d92;
    --ink-faint:#a5b3c4; --navy:#1e3a6b; --navy-l:#2d5a8a; --navy-pale:#9fb4d0;
    --rule:#c8d3e2; --rule-soft:#e2e8f0; --highlight:#ebf0f7; --highlight-warm:#e6eef8;
    font-family:"Cormorant Garamond",Georgia,serif;
    color:var(--ink); background:var(--paper);
    max-width:1200px; margin:0 auto; padding:56px 56px 96px;
    line-height:1.7;
  }

  /* ---------- header ---------- */
  .rhead{margin-bottom:14px}
  .rhead h1{
    font-family:"Cormorant Garamond",serif;
    font-size:2.6rem;font-weight:600;letter-spacing:.005em;
    margin:0;line-height:1.05;color:var(--ink);
  }
  .rhead .rule{width:54px;height:1.5px;background:var(--navy);margin:16px 0 18px}
  .rhead p{
    font-family:"DM Sans",sans-serif;font-size:.92rem;font-weight:300;
    color:var(--ink-soft);max-width:60ch;line-height:1.75;margin:0;
  }
  .rhead .cue{
    display:inline-flex;align-items:center;gap:8px;margin-top:18px;
    font-family:"DM Sans",sans-serif;font-size:.7rem;font-weight:500;
    letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);
  }
  .rhead .cue::before{
    content:'';width:18px;height:18px;border-radius:50%;
    border:1.5px solid var(--navy-pale);
    background:radial-gradient(circle at 50% 42%, var(--navy) 0 2.5px, transparent 3px);
  }

  /* ---------- plate grid ---------- */
  .plates{
    margin-top:44px;
    display:grid;grid-template-columns:repeat(2,1fr);gap:30px;
  }
  .plate{
    appearance:none;text-align:left;cursor:pointer;
    background:var(--paper);border:1px solid var(--rule-soft);border-radius:4px;
    padding:0;overflow:hidden;display:flex;flex-direction:column;
    transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;
    font:inherit;color:inherit;
  }
  .plate:hover,.plate:focus-visible{
    transform:translateY(-3px);
    border-color:var(--rule);
    box-shadow:0 14px 40px rgba(15,30,55,.14);
    outline:none;
  }
  .plate:focus-visible{box-shadow:0 0 0 2px var(--navy),0 14px 40px rgba(15,30,55,.14)}

  .plate__fig{
    position:relative;aspect-ratio:16/10;width:100%;overflow:hidden;
    background:#0f1d37;
  }
  .plate__fig img{
    width:100%;height:100%;object-fit:cover;display:block;
    transition:transform .5s ease,filter .3s ease;
    filter:saturate(1.02) contrast(1.02);
  }
  .plate:hover .plate__fig img{transform:scale(1.045)}

  /* placeholder when no figure is supplied yet */
  .plate__ph{
    position:absolute;inset:0;display:flex;flex-direction:column;
    align-items:center;justify-content:center;gap:9px;text-align:center;
    background:
      repeating-linear-gradient(45deg,#eef3fa 0 13px,#e6eef7 13px 26px);
    color:var(--navy);
  }
  .plate__ph .g{
    font-family:"Cormorant Garamond",serif;font-style:italic;
    font-size:2.6rem;line-height:1;color:var(--navy-pale);
  }
  .plate__ph .t{
    font-family:"DM Sans",sans-serif;font-size:.64rem;font-weight:600;
    letter-spacing:.14em;text-transform:uppercase;color:var(--navy-l);
  }

  /* thin accent rule between figure and text */
  .plate__fig::after{
    content:'';position:absolute;left:0;right:0;bottom:0;height:3px;
    background:var(--navy);transform:scaleX(0);transform-origin:left;
    transition:transform .3s ease;
  }
  .plate:hover .plate__fig::after,.plate:focus-visible .plate__fig::after{transform:scaleX(1)}

  .plate__body{padding:18px 22px 20px;display:flex;flex-direction:column;gap:9px}
  .plate__meta{
    display:flex;align-items:center;justify-content:space-between;gap:12px;
  }
  .plate__no{
    font-family:"DM Sans",sans-serif;font-size:.64rem;font-weight:600;
    letter-spacing:.14em;text-transform:uppercase;color:var(--navy);
  }
  .plate__status{
    font-family:"DM Sans",sans-serif;font-size:.64rem;font-weight:600;
    letter-spacing:.09em;text-transform:uppercase;
    display:inline-flex;align-items:center;gap:7px;white-space:nowrap;
  }
  .plate__status::before{content:'';width:6px;height:6px;border-radius:50%}
  .plate__status.pub{color:var(--navy-l)}
  .plate__status.pub::before{background:var(--navy)}
  .plate__status.prep{color:var(--ink-soft)}
  .plate__status.prep::before{background:var(--navy-pale)}
  .plate__title{
    font-family:"Cormorant Garamond",serif;font-size:1.34rem;font-weight:600;
    line-height:1.3;color:var(--ink);margin:0;
  }
  .plate__tag{
    font-family:"DM Sans",sans-serif;font-size:.82rem;font-weight:400;
    color:var(--ink-soft);line-height:1.6;margin:0;
  }
  .plate__cue{
    margin-top:6px;
    font-family:"DM Sans",sans-serif;font-size:.68rem;font-weight:600;
    letter-spacing:.07em;text-transform:uppercase;color:var(--navy);
    display:inline-flex;align-items:center;gap:7px;
  }
  .plate__cue::after{content:'\2192';transition:transform .2s ease}
  .plate:hover .plate__cue::after,.plate:focus-visible .plate__cue::after{transform:translateX(4px)}

  /* ---------- modal ---------- */
  .rx{
    position:fixed;inset:0;z-index:120;display:none;
    align-items:flex-start;justify-content:center;
    padding:48px 20px;overflow-y:auto;
    background:rgba(247,249,252,.93);backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);
  }
  .rx.open{display:flex;animation:rxfade .22s ease both}
  @keyframes rxfade{
    from{opacity:0;backdrop-filter:blur(0);-webkit-backdrop-filter:blur(0)}
    to{opacity:1;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
  }
  .rx__panel{
    background:#fff;max-width:760px;width:100%;
    border-radius:6px;border:1px solid var(--rule);
    box-shadow:0 30px 80px rgba(10,20,40,.4);
    overflow:hidden;animation:rxin .26s ease;
  }
  @keyframes rxin{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
  .rx__fig{position:relative;width:100%;aspect-ratio:16/9;background:#0f1d37}
  .rx__fig img{width:100%;height:100%;object-fit:cover;display:block}
  .rx__close{
    position:absolute;top:14px;right:14px;
    width:34px;height:34px;border-radius:50%;cursor:pointer;
    border:none;background:rgba(15,29,55,.6);color:#fff;
    font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;
    backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);
    transition:background .2s;
  }
  .rx__close:hover{background:rgba(15,29,55,.85)}
  .rx__body{padding:30px 38px 36px}
  .rx__status{
    font-family:"DM Sans",sans-serif;font-size:.62rem;font-weight:500;
    letter-spacing:.12em;text-transform:uppercase;color:var(--ink-muted);
    display:inline-flex;align-items:center;gap:7px;margin-bottom:12px;
  }
  .rx__status::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--navy)}
  .rx__title{
    font-family:"Cormorant Garamond",serif;font-size:1.85rem;font-weight:600;
    line-height:1.25;color:var(--ink);margin:0 0 10px;
  }
  .rx__authors{
    font-family:"DM Sans",sans-serif;font-size:.78rem;color:var(--ink-muted);
    line-height:1.6;margin:0 0 22px;
  }
  .rx__authors .me{color:var(--ink);font-weight:500}
  .rx__summary p{
    font-family:"Cormorant Garamond",serif;font-size:1.12rem;line-height:1.75;
    color:var(--ink-soft);margin:0 0 14px;
  }
  .rx__summary sub{font-size:.7em}
  .rx__note{
    font-family:"DM Sans",sans-serif;font-size:.72rem;font-style:normal;
    color:var(--ink-muted);background:var(--highlight);
    border-left:2px solid var(--navy-pale);
    padding:9px 14px;border-radius:2px;margin-top:6px;
  }
  .rx__links{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
  .rx__links a{
    font-family:"DM Sans",sans-serif;font-size:.7rem;font-weight:500;
    letter-spacing:.07em;text-transform:uppercase;text-decoration:none;
    color:var(--navy-l);border:1px solid var(--rule);
    padding:9px 16px;border-radius:2px;
    display:inline-flex;align-items:center;gap:6px;transition:all .2s;
  }
  .rx__links a:hover{background:var(--highlight-warm);border-color:var(--navy-l);color:var(--navy)}
  .rx__links a::after{content:'↗';font-size:.9em}

  .rfoot{
    margin-top:80px;padding-top:24px;border-top:1px solid var(--rule-soft);
    display:flex;justify-content:space-between;align-items:center;
    font-family:"DM Sans",sans-serif;font-size:.66rem;color:var(--ink-faint);
    letter-spacing:.06em;
  }
  .rfoot .crest{font-family:"Cormorant Garamond",serif;font-style:italic;
    font-size:1.4em;color:var(--navy-pale);letter-spacing:.3em}

  @media (max-width:760px){
    .rpg{padding:36px 22px 72px}
    .rhead h1{font-size:2rem}
    .plates{grid-template-columns:1fr;gap:22px}
    .rx{padding:0}
    .rx__panel{min-height:100%;border-radius:0;border:none}
    .rx__body{padding:24px 22px 30px}
    .rx__title{font-size:1.5rem}
  }
  @media (prefers-reduced-motion:reduce){
    .plate,.plate__fig img,.plate__fig::after,.plate__cue::after,.rx.open,.rx__panel{transition:none;animation:none}
  }
</style>

<div class="rpg">
  <header class="rhead">
    <h1>Research</h1>
    <div class="rule"></div>
    <p>A set of plates from ongoing and published work on turbulence, stochastic
       dynamics, and synchronisation. Each is a figure from the work itself &mdash;
       open one to read what it shows.</p>
    <span class="cue">Click a plate to read its summary</span>
  </header>

  <div class="plates" id="plates"></div>

  <div class="rfoot">
    <span>Updated · June 2026</span>
    <span class="crest">· · ·</span>
    <span>Bengaluru · India</span>
  </div>
</div>

<!-- ===================== MODAL ===================== -->
<div class="rx" id="rx" role="dialog" aria-modal="true" aria-labelledby="rxTitle">
  <div class="rx__panel" role="document">
    <div class="rx__fig" id="rxFig"></div>
    <div class="rx__body">
      <div class="rx__status" id="rxStatus"></div>
      <h2 class="rx__title" id="rxTitle"></h2>
      <p class="rx__authors" id="rxAuthors"></p>
      <div class="rx__summary" id="rxSummary"></div>
      <div class="rx__links" id="rxLinks"></div>
    </div>
    <button class="rx__close" id="rxClose" aria-label="Close summary">×</button>
  </div>
</div>

<script>
/* ============================================================
   EDIT HERE.  One entry per research work.
   - image : path under /assets/research/ (a .png, .jpg, or .gif).
             Leave as "" to show a styled placeholder panel.
   - To add an animation, just drop a .gif into assets/research/
     and point `image` at it.
   - summary : array of paragraphs (HTML allowed, e.g. <sub>I</sub>).
   - note    : optional small caption shown under the summary.
   - links   : [{label, url}]
   ============================================================ */
const PROJECTS = [
  {
    image: "/assets/research/trap_escape_particles.png",
    status: "Preprint · arXiv",
    statusKind: "pub",
    title: "Shock Trapping and Inertial Escape",
    sub: "Dust-particle clustering in compressible turbulence",
    tagline: "How inertial grains pile into shocks — and break free.",
    authors: ['<span class="me">Anikat Kankaria</span>', 'Samriddhi Sankar Ray'],
    summary: [
      "How do inertial dust grains organise themselves in a flow riddled with shocks? Using the two-dimensional, stochastically forced Burgers equation as a clean model of compressible turbulence, this work follows particles across a wide range of Stokes numbers.",
      "When inertia is small, grains are caught at shock fronts and collapse into nearly singular clusters, with the correlation dimension dropping toward zero. As inertia grows, particles repeatedly cross shocks in a trap-and-escape cycle and the motion crosses over to a quasi-ballistic regime.",
      "Through the intermediate range, density fluctuations decay as a power law in the Stokes number and the coarse-grained density turns scale-free. The picture is qualitatively unlike clustering in incompressible turbulence and bears directly on where dust concentrates in shock-rich settings such as protoplanetary discs."
    ],
    links: [
      {label:"arXiv:2512.07164", url:"https://arxiv.org/abs/2512.07164"},
      {label:"PDF", url:"https://arxiv.org/pdf/2512.07164"}
    ]
  },
  {
    image: "",
    status: "Preprint · arXiv",
    statusKind: "pub",
    title: "Reduction of Triadic Interactions",
    sub: "Suppressing intermittency and anomalous dissipation",
    tagline: "Cutting triads from Navier–Stokes, one by one.",
    authors: ['<span class="me">Anikat Kankaria</span>','Ritwik Mukherjee','Sugan Durai Murugan','Marco Edoardo Rosti','Samriddhi Sankar Ray'],
    summary: [
      "Which part of the Navier–Stokes nonlinearity is actually responsible for intermittency and anomalous dissipation? This study answers by operating on the equations themselves — systematically thinning the network of triadic interactions in Fourier space — using direct numerical simulations of both fractally and homogeneously decimated dynamics.",
      "As more triads are removed, intermittency steadily weakens and, most strikingly, the mean dissipation rate vanishes in the high-Reynolds-number limit. Structure-function exponents relax to their dimensional (non-intermittent) values, the multifractal spectrum narrows, and the velocity field grows smoother as its analyticity strip widens.",
      "The conclusion: anomalous dissipation is not an automatic property of Navier–Stokes, but instead needs the full combinatorial richness of its triad interactions."
    ],
    links: [
      {label:"arXiv:2603.19180", url:"https://arxiv.org/abs/2603.19180"},
      {label:"PDF", url:"https://arxiv.org/pdf/2603.19180"}
    ]
  },
  {
    image: "",
    status: "Manuscript in preparation",
    statusKind: "prep",
    title: "Voigt-Regularised Turbulence",
    sub: "Dynamical slowdown, bottlenecks, and multiscaling",
    tagline: "What a smoothed inertial term costs the cascade.",
    authors: ['<span class="me">Anikat Kankaria</span>','Bikram Pal','Samriddhi Sankar Ray'],
    summary: [
      "The Voigt regularisation replaces the inertial term of the Navier–Stokes and shell-model dynamics with a smoothed version, yielding a globally well-posed system that still aims to reproduce turbulent statistics.",
      "This work asks what that regularisation changes: how the energy flux scales, where the regularisation sets in — a crossover wavenumber k<sub>I</sub> separating the Navier–Stokes-like cascade from the Voigt-modified scales — and how it reshapes intermittency and multiscaling. The emerging picture is one of dynamical slowdown and a spectral bottleneck near the crossover."
    ],
    note: "Draft summary — manuscript in preparation. Refine before publishing.",
    links: []
  },
  {
    image: "",
    status: "Manuscript in preparation",
    statusKind: "prep",
    title: "Noise in the D-dimensional Kuramoto Model",
    sub: "Observational and environmental fluctuations",
    tagline: "Two kinds of noise, one synchronisation transition.",
    authors: ['<span class="me">Anikat Kankaria</span>','Sarthak Chandra'],
    summary: [
      "Real oscillator networks are noisy in at least two distinct ways: the coupling or measurement is corrupted by observational noise, and each unit feels its own environmental fluctuations.",
      "This project extends the Kuramoto model of synchronisation to D dimensions — oscillators living on spheres, in the Lohe picture — and asks how these two kinds of noise reshape the onset of collective order: where the critical coupling sits, how the order parameter behaves near threshold, and how the dimensionality D enters the transition."
    ],
    note: "Draft summary — manuscript in preparation. Refine before publishing.",
    links: []
  }
];

/* ---------- render plates ---------- */
const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
const grid = document.getElementById("plates");

function figMarkup(p){
  const inner = p.image
    ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
    : `<div class="plate__ph"><span class="g">§</span><span class="t">Add figure or animation</span></div>`;
  return `<div class="plate__fig">${inner}</div>`;
}

PROJECTS.forEach((p, i) => {
  const btn = document.createElement("button");
  btn.className = "plate";
  btn.setAttribute("aria-haspopup","dialog");
  btn.innerHTML = `
    ${figMarkup(p)}
    <div class="plate__body">
      <div class="plate__meta">
        <span class="plate__no">Plate ${ROMAN[i]}</span>
        <span class="plate__status ${p.statusKind}">${p.status}</span>
      </div>
      <h3 class="plate__title">${p.title}</h3>
      <p class="plate__tag">${p.tagline}</p>
      <span class="plate__cue">Read summary</span>
    </div>`;
  btn.addEventListener("click", () => openModal(i, btn));
  grid.appendChild(btn);
});

/* ---------- modal logic ---------- */
const rx = document.getElementById("rx");
const rxFig = document.getElementById("rxFig");
const rxStatus = document.getElementById("rxStatus");
const rxTitle = document.getElementById("rxTitle");
const rxAuthors = document.getElementById("rxAuthors");
const rxSummary = document.getElementById("rxSummary");
const rxLinks = document.getElementById("rxLinks");
const rxClose = document.getElementById("rxClose");
let lastFocus = null;

function openModal(i, trigger){
  const p = PROJECTS[i];
  lastFocus = trigger || null;

  rxFig.innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.title}">`
    : `<div class="plate__ph"><span class="g">§</span><span class="t">Add figure or animation</span></div>`;

  rxStatus.textContent = p.status;
  rxTitle.innerHTML = p.sub ? `${p.title} <span style="font-weight:400;color:var(--ink-muted)">— ${p.sub}</span>` : p.title;
  rxAuthors.innerHTML = p.authors.join(", ");

  let body = p.summary.map(t => `<p>${t}</p>`).join("");
  if (p.note) body += `<div class="rx__note">${p.note}</div>`;
  rxSummary.innerHTML = body;

  rxLinks.innerHTML = p.links && p.links.length
    ? p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")
    : "";

  rx.classList.add("open");
  document.body.style.overflow = "hidden";
  rxClose.focus();
}

function closeModal(){
  rx.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

rxClose.addEventListener("click", closeModal);
rx.addEventListener("click", e => { if (e.target === rx) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && rx.classList.contains("open")) closeModal(); });
</script>

</body>
</html>
