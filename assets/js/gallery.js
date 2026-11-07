const filters = document.querySelector('.gallery-filters');
const gallery = document.querySelector('.gallery');
if (filters && gallery) {
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const selected = event.target.closest('[data-filter]');
    if (!selected) return;
    const group = selected.dataset.filter;
    for (const button of filters.querySelectorAll('[data-filter]')) {
      button.setAttribute('aria-pressed', String(button === selected));
    }
    for (const figure of gallery.querySelectorAll('[data-group]')) {
      figure.hidden = group !== 'All' && figure.dataset.group !== group;
      if (figure.hidden) figure.querySelector('video')?.pause();
    }
    for (const pair of gallery.querySelectorAll('.pair')) {
      pair.hidden = !pair.querySelector('figure:not([hidden])');
    }
  });
}

const viewer = document.querySelector('#lightbox');
if (gallery && viewer && typeof viewer.showModal === 'function') {
  const image = viewer.querySelector('img');
  const caption = viewer.querySelector('p');
  gallery.addEventListener('click', event => {
    const link = event.target.closest('a[data-full]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    caption.textContent = link.closest('figure').querySelector('figcaption').textContent;
    viewer.showModal();
  });
  viewer.querySelector('button').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => image.removeAttribute('src'));
}
