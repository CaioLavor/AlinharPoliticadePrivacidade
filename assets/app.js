(function () {
  const root = document.documentElement;
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav-links]');

  const savedTheme = localStorage.getItem('alinhar-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;

  function syncThemeLabel() {
    if (!themeBtn) return;
    const isDark = root.dataset.theme === 'dark' || (!root.dataset.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    themeBtn.setAttribute('aria-label', isDark ? 'Usar tema claro' : 'Usar tema escuro');
    themeBtn.textContent = isDark ? '☀' : '☾';
  }

  if (themeBtn) {
    syncThemeLabel();
    themeBtn.addEventListener('click', () => {
      const isDark = root.dataset.theme === 'dark' || (!root.dataset.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      root.dataset.theme = isDark ? 'light' : 'dark';
      localStorage.setItem('alinhar-theme', root.dataset.theme);
      syncThemeLabel();
    });
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const target = document.getElementById(btn.dataset.copy);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.innerText);
        const previous = btn.textContent;
        btn.textContent = 'Copiado ✓';
        setTimeout(() => { btn.textContent = previous; }, 1800);
      } catch (_) {
        target.focus?.();
      }
    });
  });
})();
