/* ── Starfield Canvas ── */
(function() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    initStars();
  }

  function initStars() {
    const count = Math.floor((w * h) / 1800);
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.15 + 0.03,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,170,255,${s.opacity})`;
      ctx.fill();
      s.y += s.speed;
      if (s.y > h + 5) { s.y = -5; s.x = Math.random() * w; }
    }
    requestAnimationFrame(draw);
  }

  // Parallax mouse movement
  document.addEventListener('mousemove', function(e) {
    const mx = (e.clientX / w - 0.5) * 20;
    const my = (e.clientY / h - 0.5) * 20;
    canvas.style.transform = `translate(${mx}px, ${my}px)`;
  }, { passive: true });

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ── Scroll Animations ── */
const observer = new IntersectionObserver(function(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  }
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.anim-up, .anim-scale, .section-label').forEach(function(el) {
  observer.observe(el);
});

/* ── Glow orbs parallax ── */
window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const orb1 = document.querySelector('.glow-orb-1');
  const orb2 = document.querySelector('.glow-orb-2');
  if (orb1) orb1.style.transform = `translateY(${scrollY * 0.15}px)`;
  if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.1}px)`;
}, { passive: true });
