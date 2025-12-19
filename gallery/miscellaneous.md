---
layout: page
title: miscellaneous
permalink: /gallery/miscellaneous/
---

<div style="text-align:center;">

  <!-- Clickable image -->
  <img
    src="{{ '/assets/ICTS_Fluid_Group_2025.JPG' | relative_url }}"
    style="width:90%; max-width:900px; border-radius:12px; cursor: zoom-in;"
    onclick="document.getElementById('zoom-img').showModal();"
  >

  <p style="color:#666;">
    ICTS Fluid Dynamics Group, 2025
  </p>

</div>

<!-- Zoom dialog -->
<dialog id="zoom-img" style="border:none; padding:0; background:transparent;">
  <img
    src="{{ '/assets/ICTS_Fluid_Group_2025.JPG' | relative_url }}"
    style="max-width:95vw; max-height:95vh; border-radius:12px;"
    onclick="this.closest('dialog').close();"
  >
</dialog>
