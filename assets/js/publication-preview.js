const preview = document.createElement('img');
preview.className = 'pub-fig-preview';
preview.alt = '';
preview.hidden = true;
document.body.append(preview);

let activeFigure;

function hidePreview() {
  preview.hidden = true;
  activeFigure = null;
}

function positionPreview() {
  if (!activeFigure) return;
  const figure = activeFigure.getBoundingClientRect();
  const { clientWidth, clientHeight } = document.documentElement;
  if (figure.bottom <= 0 || figure.top >= clientHeight) {
    hidePreview();
    return;
  }

  const gap = 12;
  const { width, height } = preview.getBoundingClientRect();
  const right = figure.right + gap;
  const left = right + width <= clientWidth - gap ? right : figure.left - gap - width;
  const top = figure.top + (figure.height - height) / 2;
  preview.style.left = Math.max(gap, Math.min(left, clientWidth - width - gap)) + 'px';
  preview.style.top = Math.max(gap, Math.min(top, clientHeight - height - gap)) + 'px';
}

function showPreview(link) {
  const image = link.querySelector('img');
  activeFigure = link;
  preview.src = image.currentSrc || image.src;
  preview.hidden = false;
  positionPreview();
}

for (const link of document.querySelectorAll('#publications .pub-fig')) {
  link.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'touch' && matchMedia('(any-hover: hover)').matches) showPreview(link);
  });
  link.addEventListener('focus', () => {
    if (link.matches(':focus-visible')) showPreview(link);
  });
  for (const event of ['pointerleave', 'pointercancel', 'blur']) {
    link.addEventListener(event, () => {
      if (activeFigure === link) hidePreview();
    });
  }
}

preview.addEventListener('load', positionPreview);
preview.addEventListener('error', hidePreview);
window.addEventListener('scroll', positionPreview, { passive: true });
window.addEventListener('resize', positionPreview);
window.addEventListener('blur', hidePreview);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') hidePreview();
});
