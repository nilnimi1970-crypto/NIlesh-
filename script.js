document.addEventListener('DOMContentLoaded', function () {
  const fill = document.getElementById('progress-fill');
  const text = document.getElementById('progress-text');
  const bar = document.getElementById('progress-bar');
  const totalMs = 10000; // 10 seconds
  const start = performance.now();

  // Theme handling
  const themeToggle = document.getElementById('theme-toggle');
  function applyTheme(theme){
    if(theme === 'dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
  }
  const saved = localStorage.getItem('swet-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);
  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('swet-theme', next);
    });
  }

  function tick(now) {
    const elapsed = now - start;
    const pct = Math.min(100, Math.round((elapsed / totalMs) * 100));
    fill.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', String(pct));
    text.textContent = pct < 100 ? `Loading... ${pct}%` : 'Ready — Welcome to Swet Finserve';
    if (pct < 100) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});
