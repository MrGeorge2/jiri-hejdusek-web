/* ── Scroll Progress Bar ── */
(function() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

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

  // Parallax mouse with depth
  document.addEventListener('mousemove', function(e) {
    const mx = (e.clientX / w - 0.5) * 30;
    const my = (e.clientY / h - 0.5) * 30;
    canvas.style.transform = `translate(${mx}px, ${my}px)`;
  }, { passive: true });

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ── Hero Parallax ── */
(function() {
  const hero = document.querySelector('.hero-content');
  if (!hero) return;

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      hero.style.transform = `translateY(${scrollY * 0.3}px)`;
      hero.style.opacity = 1 - (scrollY / window.innerHeight) * 0.8;
    }
  }, { passive: true });
})();

/* ── Scroll Animations ── */
const observer = new IntersectionObserver(function(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.anim-up, .anim-scale, .section-label').forEach(function(el) {
  observer.observe(el);
});

/* ── Stack items cascade reveal ── */
(function() {
  const stackItems = document.querySelectorAll('.stack-item');
  const stackObserver = new IntersectionObserver(function(entries) {
    let delay = 0;
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('visible');
        }, delay);
        delay += 60;
      }
    }
  }, { threshold: 0.1 });

  stackItems.forEach(function(item) {
    item.classList.add('anim-scale');
    stackObserver.observe(item);
  });
})();

/* ── Glow orbs follow scroll with depth ── */
window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const orb1 = document.querySelector('.glow-orb-1');
  const orb2 = document.querySelector('.glow-orb-2');
  if (orb1) orb1.style.transform = `translateY(${scrollY * 0.25}px) translateX(${-scrollY * 0.05}px)`;
  if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.2}px) translateX(${scrollY * 0.08}px)`;
}, { passive: true });

/* ── Smooth number counter for experience years ── */
(function() {
  const hero = document.querySelector('.hero-subtitle');
  if (!hero) return;

  const yearsObs = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      const el = entries[0].target;
      const text = el.textContent;
      // Highlight the years
      el.innerHTML = text.replace(
        '6 lety',
        '<span style=\"background: linear-gradient(135deg, var(--accent), var(--accent-glow)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700;\">6 lety</span>'
      );
      yearsObs.unobserve(el);
    }
  }, { threshold: 0.5 });

  yearsObs.observe(hero);
})();

/* ── Section divider glow on scroll ── */
(function() {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(function(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'box-shadow 0.8s ease';
      }
    }
  }, { threshold: 0.3 });

  sections.forEach(function(s) { observer.observe(s); });
})();

/* ── Scroll hint: "Scroll" → "Konec" ── */
(function() {
  const label = document.getElementById('scroll-label');
  if (!label) return;

  window.addEventListener('scroll', function() {
    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    if (docHeight - scrollBottom < 120) {
      label.textContent = 'Konec';
    } else {
      label.textContent = 'Scroll';
    }
  }, { passive: true });
})();

/* ── Timeline dots positioning & active state ── */
(function() {
  const dots = document.querySelectorAll('.timeline-dot');
  if (!dots.length) return;

  function positionDots() {
    const vh = window.innerHeight;
    dots.forEach(function(dot) {
      const sectionId = dot.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const posPct = (sectionTop / (document.documentElement.scrollHeight - vh)) * 100;
        dot.style.top = Math.max(10, Math.min(90, posPct)) + '%';
      }
    });
  }

  const sectionObserver = new IntersectionObserver(function(entries) {
    for (const entry of entries) {
      const dot = document.querySelector(`[data-section="${entry.target.id}"]`);
      if (!dot) continue;
      if (entry.isIntersecting) {
        dots.forEach(function(d) { d.classList.remove('active'); });
        dot.classList.add('active');
      }
    }
  }, { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' });

  dots.forEach(function(dot) {
    const section = document.getElementById(dot.getAttribute('data-section'));
    if (section) sectionObserver.observe(section);
  });

  positionDots();
  window.addEventListener('resize', positionDots);
})();
