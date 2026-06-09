document.addEventListener('DOMContentLoaded', function () {
  const fill = document.getElementById('progress-fill');
  const text = document.getElementById('progress-text');
  const bar = document.getElementById('progress-bar');
  const totalMs = 10000; // 10 seconds
  const start = performance.now();

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
