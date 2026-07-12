// Main JS: dark mode, AOS init, back-to-top, loading screen
document.addEventListener('DOMContentLoaded', function(){
  // Loading screen
  const loader = document.getElementById('loading-screen');
  setTimeout(()=>{ if(loader) loader.style.display='none'; },600);

  // AOS
  if(window.AOS) AOS.init({duration:800,once:true});

  // Dark mode toggle
  const darkToggle = document.getElementById('darkToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('javas-dark');
  if(saved==='1' || (!saved && prefersDark)) document.documentElement.classList.add('dark-mode');
  darkToggle && darkToggle.addEventListener('click', ()=>{
    const enabled = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('javas-dark', enabled ? '1' : '0');
  });

  // Back to top
  const back = document.getElementById('backToTop');
  window.addEventListener('scroll', ()=>{ if(window.scrollY>300) back.style.display='flex'; else back.style.display='none'; });
  back && back.addEventListener('click', e=>{ e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });

  // Live search stub (for articles/regulations)
  document.querySelectorAll('input[placeholder*="Cari"]').forEach(inp=>{
    inp.addEventListener('input', ()=>{/* client-side filtering implemented per page */});
  });
});
