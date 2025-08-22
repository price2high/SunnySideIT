(function(){
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const plus = document.getElementById('fontPlus');
  const minus = document.getElementById('fontMinus');
  let size = 18;
  function setSize(px){ document.documentElement.style.fontSize = px + 'px'; }
  if (plus) plus.addEventListener('click', ()=>{ size = Math.min(size+1, 22); setSize(size); });
  if (minus) minus.addEventListener('click', ()=>{ size = Math.max(size-1, 14); setSize(size); });
  const hc = document.getElementById('highContrast');
  if (hc) hc.addEventListener('click', ()=>{
    const pressed = hc.getAttribute('aria-pressed') === 'true';
    hc.setAttribute('aria-pressed', (!pressed).toString());
    document.body.classList.toggle('high-contrast');
  });
  // Seminar filter
  const filterEls = document.querySelectorAll('[data-filter]');
  const rows = document.querySelectorAll('tbody tr[data-type]');
  function applyFilters(){
    const filters = {};
    filterEls.forEach(el => { filters[el.name] = el.value.toLowerCase(); });
    rows.forEach(r => {
      const type = r.dataset.type.toLowerCase();
      const loc = r.dataset.location.toLowerCase();
      const show = (!filters.type || filters.type === 'all' || type === filters.type)
                && (!filters.location || filters.location === 'all' || loc.includes(filters.location));
      r.style.display = show ? '' : 'none';
    });
  }
  filterEls.forEach(el => el.addEventListener('input', applyFilters));
})();
