/* shared.js — injects nav + footer into every page */
(function(){
  const s = document.currentScript || document.querySelector('script[src*="shared"]');
  const ROOT = s ? s.src.replace(/shared\.js$/, '') : '';
  const isSvc = window.location.pathname.includes('/services/');
  const r = isSvc ? '../' : '';
  const path = window.location.pathname;

  /* ── inject CSS ── */
  if (!document.querySelector('link[href*="shared.css"]')) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = ROOT + 'shared.css';
    document.head.appendChild(l);
  }

  /* ── active page ── */
  function act(id) { const a = document.getElementById(id); if (a) a.classList.add('act'); }

  /* ── NAV HTML ── */
  const NAV = `
<nav id="nav">
  <div class="container ni">
    <a href="${r}index.html" class="nlogo">
      <img src="${r}logo.png" alt="JREMD Technologies" class="logo-img"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="logo-fallback" style="display:none">
        <div class="lmark">JT</div>
        <div class="lw">
          <strong>JREMD Technologies</strong>
          <small>Security · Solar · Communication</small>
        </div>
      </div>
    </a>
    <ul class="nl">
      <li><a href="${r}index.html" id="nav-home">Home</a></li>
      <li>
        <a href="#" id="nav-svc">Services
          <svg viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5"/></svg>
        </a>
        <div class="drop">
          <div class="dh">Security</div>
          <a href="${r}services/cctv.html"><span class="di"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.383.0/icons/camera.svg" alt="CCTV" width="18" height="18" style="filter: invert(30%) sepia(80%) saturate(500%) hue-rotate(190deg);"></span> CCTV &amp; Surveillance</a>
          <a href="${r}services/fire-alarm.html"><span class="di"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.383.0/icons/flame.svg" alt="Fire" width="18" height="18" style="filter: invert(30%) sepia(80%) saturate(500%) hue-rotate(190deg);"></span> Fire Detection &amp; Alarm</a>
          <a href="${r}services/biometrics.html"><span class="di"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.383.0/icons/fingerprint.svg" alt="Biometrics" width="18" height="18" style="filter: invert(30%) sepia(80%) saturate(500%) hue-rotate(190deg);"></span> Biometrics &amp; Access Control</a>
          <hr>
          <div class="dh">Energy &amp; Communication</div>
          <a href="${r}services/solar.html"><span class="di"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.383.0/icons/sun.svg" alt="Solar" width="18" height="18" style="filter: invert(30%) sepia(80%) saturate(500%) hue-rotate(190deg);"></span> Solar Energy Systems</a>
          <a href="${r}services/pabx.html"><span class="di"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.383.0/icons/phone-call.svg" alt="PABX" width="18" height="18" style="filter: invert(30%) sepia(80%) saturate(500%) hue-rotate(190deg);"></span> PABX &amp; IP Phone Systems</a>
          <a href="${r}services/lan.html"><span class="di"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.383.0/icons/network.svg" alt="LAN" width="18" height="18" style="filter: invert(30%) sepia(80%) saturate(500%) hue-rotate(190deg);"></span> LAN &amp; Network Cabling</a>
        </div>
      </li>
      <li><a href="${r}clients.html" id="nav-clients">Clients</a></li>
      <li><a href="${r}works.html" id="nav-works">Our Works</a></li>
      <li><a href="${r}about.html" id="nav-about">About</a></li>
      <li><a href="${r}contact.html" id="nav-contact">Contact</a></li>
    </ul>
    <div class="na">
      <a href="${r}contact.html" class="btn btn-primary btn-sm">Get Free Quote</a>
      <button class="hbtn" id="hbtn" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="mobov" id="mobov">
  <div class="mobt">
    <a href="${r}index.html">
      <img src="${r}logo.png" alt="JREMD" style="height:60px;object-fit:contain"
           onerror="this.style.display='none'">
      <div class="lmark" style="display:none">JT</div>
    </a>
    <button class="mobc" id="mobc">✕</button>
  </div>
  <div class="moblinks">
    <a href="${r}index.html">Home</a>
    <a href="#">Services</a>
    <a href="${r}services/cctv.html" class="mob-sub">CCTV &amp; Surveillance</a>
    <a href="${r}services/fire-alarm.html" class="mob-sub">Fire Detection &amp; Alarm</a>
    <a href="${r}services/biometrics.html" class="mob-sub">Biometrics &amp; Access</a>
    <a href="${r}services/solar.html" class="mob-sub">Solar Energy</a>
    <a href="${r}services/pabx.html" class="mob-sub">PABX &amp; IP Phone</a>
    <a href="${r}services/lan.html" class="mob-sub">LAN &amp; Cabling</a>
    <a href="${r}clients.html">Clients</a>
    <a href="${r}works.html">Our Works</a>
    <a href="${r}about.html">About</a>
    <a href="${r}contact.html">Contact</a>
  </div>
  <div class="mobf">
    <a href="${r}contact.html" class="btn btn-primary" style="width:100%;justify-content:center;">Get Free Quote</a>
    <a href="${r}contact.html" class="btn btn-outline" style="width:100%;justify-content:center;">Book Inspection</a>
  </div>
</div>`;

  /* ── FOOTER HTML (slim) ── */
  const FOOTER = `
<footer class="footer-slim">
  <div class="container" style="display:flex;align-items:center;justify-content:space-between;padding-top:14px;padding-bottom:14px">
    <a href="${r}index.html" style="display:inline-flex;align-items:center">
      <img src="${r}logo.png" alt="JREMD Technologies" style="height:60px;object-fit:contain"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div style="display:none;align-items:center;gap:8px">
        <div class="lmark" style="background:var(--sky)">JT</div>
        <div class="lw"><strong style="color:white;font-size:14px">JREMD Technologies</strong></div>
      </div>
    </a>
    <span class="footer-copy" style="margin-right:auto;margin-left:20px">© 2025 JREMD Technologies, Inc.</span>
    <div style="display:flex;align-items:center;gap:16px">
      <a href="https://www.facebook.com/jremdtechinc" target="_blank" rel="noopener" class="fsc fsc-slim" title="Facebook" aria-label="Visit our Facebook page">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
      </a>
    </div>
  </div>
</footer>`;
  /* ── inject into page ── */
  const header = document.getElementById('page-header') || document.body;
  header.insertAdjacentHTML('afterbegin', NAV);
  const footerTarget = document.getElementById('page-footer') || document.body;
  footerTarget.insertAdjacentHTML('beforeend', FOOTER);

  /* ── active nav states ── */
  if (path.endsWith('index.html') || path.endsWith('/')) act('nav-home');
  if (path.includes('/services/')) act('nav-svc');
  if (path.includes('clients')) act('nav-clients');
  if (path.includes('works')) act('nav-works');
  if (path.includes('about')) act('nav-about');
  if (path.includes('contact')) act('nav-contact');

  /* ── mobile menu ── */
  document.addEventListener('click', function(e) {
    const hb = document.getElementById('hbtn');
    const mob = document.getElementById('mobov');
    const mc = document.getElementById('mobc');
    if (!hb || !mob) return;
    if (e.target === hb || hb.contains(e.target)) mob.classList.add('open');
    if (e.target === mc) mob.classList.remove('open');
    if (mob.classList.contains('open') && mob.contains(e.target) && e.target.tagName === 'A')
      setTimeout(() => mob.classList.remove('open'), 80);
  });

  /* ── scroll reveal ── */
  const ro = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 70);
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.rev').forEach(el => ro.observe(el));

})();
