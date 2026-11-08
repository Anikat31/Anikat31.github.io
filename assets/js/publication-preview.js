const preview = document.createElement('img');
preview.className = 'pub-fig-preview';
preview.alt = '';
preview.hidden = true;
document.body.append(preview);

let activeFigure;
const figureViewer = document.querySelector('#publication-viewer');

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
  let pointerType = '';
  link.addEventListener('pointerdown', event => { pointerType = event.pointerType; });
  link.addEventListener('click', event => {
    const pointer = event.pointerType || pointerType;
    const touch = pointer === 'touch' || (!pointer && matchMedia('(hover: none)').matches);
    if ((!touch && event.detail !== 0) || !figureViewer?.showModal ||
        event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    event.preventDefault();
    hidePreview();
    const original = link.querySelector('img');
    figureViewer.querySelector('img').src = original.currentSrc || original.src;
    figureViewer.querySelector('p').textContent = original.alt;
    figureViewer.showModal();
  });
  link.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'touch' && matchMedia('(any-hover: hover)').matches) showPreview(link);
  });
  link.addEventListener('focus', () => {
    if (!figureViewer?.open && link.matches(':focus-visible')) showPreview(link);
  });
  for (const event of ['pointerleave', 'pointercancel', 'blur']) {
    link.addEventListener(event, () => {
      if (activeFigure === link) hidePreview();
    });
  }
}

figureViewer.querySelector('button').addEventListener('click', () => figureViewer.close());
figureViewer.addEventListener('click', event => {
  if (event.target === figureViewer) figureViewer.close();
});
figureViewer.addEventListener('close', () => {
  hidePreview();
  figureViewer.querySelector('img').removeAttribute('src');
});

preview.addEventListener('load', positionPreview);
preview.addEventListener('error', hidePreview);
window.addEventListener('scroll', positionPreview, { passive: true });
window.addEventListener('resize', positionPreview);
window.addEventListener('blur', hidePreview);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') hidePreview();
});
