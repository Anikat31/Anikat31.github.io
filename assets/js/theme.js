(() => {
  const root = document.documentElement;
  const device = window.matchMedia('(prefers-color-scheme: dark)');
  let chosen;
  try { chosen = localStorage.getItem('theme'); } catch {}

  function apply() {
    const theme = chosen === 'light' || chosen === 'dark' ? chosen : device.matches ? 'dark' : 'light';
    root.dataset.theme = theme;
    const toggle = document.querySelector('.theme-toggle');
    const next = theme === 'dark' ? 'light' : 'dark';
    if (toggle) {
      toggle.setAttribute('aria-label', 'Switch to ' + next + ' mode');
      toggle.title = 'Switch to ' + next + ' mode';
    }
    const counter = document.querySelector('.flagcounter source');
    if (counter) counter.media = theme === 'dark' ? 'all' : 'not all';
  }

  apply();
  device.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      chosen = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', chosen); } catch {}
      apply();
    });
  });
})();
