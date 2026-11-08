async function enableCitationCopy() {
  const links = document.querySelectorAll('[data-cite]');
  if (!links.length) return;

  // Keep the existing bibliography link usable if a citation is unavailable.
  const response = await fetch(links[0].href);
  if (!response.ok) return;
  const entries = new Map();
  for (const entry of (await response.text()).split(/(?=^@\w+\s*[{(])/m)) {
    const id = entry.match(/^\s*eprint\s*=\s*[{"]([^}"]+)[}"]/im);
    if (id) entries.set(id[1].trim(), entry.trim());
  }

  for (const link of links) {
    const citation = entries.get(link.dataset.cite);
    if (!citation) continue;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-citation';
    button.textContent = 'Copy BibTeX';
    const status = document.createElement('span');
    status.className = 'citation-status';
    status.setAttribute('role', 'status');
    link.replaceWith(button, status);
    let timer;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(citation);
        status.textContent = 'Copied';
        clearTimeout(timer);
        timer = setTimeout(() => { status.textContent = ''; }, 2200);
      } catch {
        let field = button.closest('.pub').querySelector('.citation-text');
        if (!field) {
          field = document.createElement('textarea');
          field.className = 'citation-text';
          field.readOnly = true;
          field.rows = 6;
          field.setAttribute('aria-label', 'BibTeX citation');
          field.value = citation;
          button.closest('.pub-meta').after(field);
        }
        status.textContent = 'Select and copy below';
        field.focus();
        field.select();
      }
    });
  }
}

enableCitationCopy().catch(() => { /* The bibliography links remain available offline. */ });
