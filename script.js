/* ═══════════════════════════════════════════════════════
   Překladový systém — detekce jazyka prohlížeče
   cs/sk → čeština | de/de-* → němčina | ostatní → angličtina
   ═══════════════════════════════════════════════════════ */

var TRANSLATIONS = {
  en: {
    title: "Jiří Hejdušek — .NET Developer",
    greeting: "Hello, I am",
    subtitle: ".NET developer with 6 years of enterprise experience. I build scalable backends, web applications, and systems that last.",
    cta_contact: "Send a message",
    cta_stack: "What I can do",
    scroll: "Scroll",
    end: "End",
    section_tech: "Technology",
    stack_title: "The stack I work with",
    stack_subtitle: "6 years of experience across the Microsoft enterprise ecosystem and beyond.",
    section_experience: "Experience",
    exp_title: "Where I learned the craft",
    exp_subtitle: "Enterprise projects for leading clients.",
    exp_favorlogic_period: "2021 — present",
    exp_favorlogic_title: "Enterprise solution development for leading clients",
    exp_favorlogic_desc: "As a developer at Favorlogic, I worked on key projects for Škoda Digital and Safeboxes. Backend systems, integrations, microservices and everything that needs to run reliably.",
    exp_tesco_period: "2019 — 2021",
    exp_tesco_title: "Software development for retail",
    exp_tesco_desc: "Backend systems and integrations at enterprise scale for one of the largest retail players.",
    projects_tesco_heading: "Projects — Tesco SW",
    fama_name: "FaMa+",
    fama_desc: "Facility Management system for building administration, maintenance and operations across the retail network. Planning, reporting and asset management.",
    portal_name: "Tenant Portal",
    portal_desc: "Self-service portal for commercial space tenants. Contracts, invoicing, defect reporting and communication with site management.",
    projects_favorlogic_heading: "Projects — Favorlogic",
    skoda_name: "Škoda Digital",
    skoda_desc: "Enterprise backends for rail vehicles. Distributed systems, event-driven architecture, high load.",
    safeboxes_name: "Safeboxes",
    safeboxes_desc: "Secure web applications. Fullstack development from database to frontend with focus on reliability.",
    section_services: "Services",
    services_title: "What I can do for you",
    services_subtitle: "Contracts under one month, fully remote. No agency nonsense.",
    offer_ai_title: "Personal AI Assistants",
    offer_ai_desc: "I'll set up your own custom AI assistant — handling emails, sorting data, tracking deadlines. Your digital partner working 24/7.",
    offer_backend_title: "Backend & API Development",
    offer_backend_desc: "REST APIs, microservices, event-driven systems on .NET. Performant, testable, well-documented.",
    offer_web_title: "Web Applications",
    offer_web_desc: "Modern websites and apps in ASP.NET and Blazor. Fast, responsive, connected to your backend.",
    offer_redesign_title: "Redesign & Modernization",
    offer_redesign_desc: "Got an old website or system? I'll rewrite it into a modern stack that can be developed further.",
    offer_automation_title: "AI & Automation",
    offer_automation_desc: "Smart chatbots, document search, routine process automation. Custom AI tools that save time and money.",
    section_contact: "Contact",
    contact_title: "Let's grab a coffee",
    contact_subtitle: "Tell me what you need. Offers and estimates are free, no strings attached.",
    contact_email: "jiri@hejdusek.com",
    contact_linkedin: "LinkedIn",
    footer: "© 2026 Jiří Hejdušek",
    footer_info: "ID 14253518 &nbsp;|&nbsp; Slatinická 261, 783 49 Lutín<br>Entrepreneur registered in the Trade Register.",
    cookie_title: "This website uses cookies",
    cookie_desc: "I use analytics cookies to understand how the site performs and what to improve. I don't sell or share any data.",
    cookie_accept: "Accept all",
    cookie_necessary: "Essential only",
    cookie_settings: "Settings",
    cookie_prefs_title: "Cookie settings",
    cookie_save: "Save settings",
    cookie_necessary_title: "Essential cookies",
    cookie_necessary_desc: "Required for the website to function. Cannot be disabled.",
    cookie_analytics_title: "Analytics cookies",
    cookie_analytics_desc: "Google Analytics — anonymous visitor statistics.",
    nav_stack: "Technology",
    nav_experience: "Experience",
    nav_services: "Services",
    nav_contact: "Contact"
  },
  de: {
    title: "Jiří Hejdušek — .NET-Entwickler",
    greeting: "Guten Tag, ich bin",
    subtitle: ".NET-Entwickler mit 6 Jahren Erfahrung im Enterprise-Umfeld. Ich baue skalierbare Backends, Webanwendungen und Systeme, die halten.",
    cta_contact: "Nachricht senden",
    cta_stack: "Was ich kann",
    scroll: "Scrollen",
    end: "Ende",
    section_tech: "Technologie",
    stack_title: "Mein Tech-Stack",
    stack_subtitle: "6 Jahre Erfahrung im Microsoft Enterprise-Ökosystem und darüber hinaus.",
    section_experience: "Erfahrung",
    exp_title: "Wo ich das Handwerk gelernt habe",
    exp_subtitle: "Enterprise-Projekte für führende Kunden.",
    exp_favorlogic_period: "2021 — heute",
    exp_favorlogic_title: "Entwicklung von Enterprise-Lösungen für führende Kunden",
    exp_favorlogic_desc: "Als Entwickler bei Favorlogic habe ich an Schlüsselprojekten für Škoda Digital und Safeboxes gearbeitet. Backend-Systeme, Integrationen, Microservices und alles, was zuverlässig laufen muss.",
    exp_tesco_period: "2019 — 2021",
    exp_tesco_title: "Softwareentwicklung für den Einzelhandel",
    exp_tesco_desc: "Backend-Systeme und Integrationen im Enterprise-Maßstab für einen der größten Einzelhandelsanbieter.",
    projects_tesco_heading: "Projekte — Tesco SW",
    fama_name: "FaMa+",
    fama_desc: "Facility-Management-System für Gebäudeverwaltung, Instandhaltung und Betrieb im gesamten Einzelhandelsnetz. Planung, Berichterstattung und Anlagenverwaltung.",
    portal_name: "Mieterportal",
    portal_desc: "Self-Service-Portal für Mieter von Geschäftsflächen. Verträge, Abrechnung, Mängelmeldung und Kommunikation mit der Standortverwaltung.",
    projects_favorlogic_heading: "Projekte — Favorlogic",
    skoda_name: "Škoda Digital",
    skoda_desc: "Enterprise-Backends für Schienenfahrzeuge. Verteilte Systeme, ereignisgesteuerte Architektur, hohe Last.",
    safeboxes_name: "Safeboxes",
    safeboxes_desc: "Sichere Webanwendungen. Fullstack-Entwicklung von der Datenbank bis zum Frontend mit Fokus auf Zuverlässigkeit.",
    section_services: "Dienstleistungen",
    services_title: "Was ich für Sie tun kann",
    services_subtitle: "Aufträge unter einem Monat, komplett remote. Ohne Agentur-Unsinn.",
    offer_ai_title: "Persönliche KI-Assistenten",
    offer_ai_desc: "Ich richte Ihren eigenen KI-Assistenten ein — beantwortet E-Mails, sortiert Daten, überwacht Fristen. Ihr digitaler Partner, der rund um die Uhr arbeitet.",
    offer_backend_title: "Backend- & API-Entwicklung",
    offer_backend_desc: "REST-APIs, Microservices, ereignisgesteuerte Systeme auf .NET. Leistungsstark, testbar, gut dokumentiert.",
    offer_web_title: "Webanwendungen",
    offer_web_desc: "Moderne Websites und Apps in ASP.NET und Blazor. Schnell, responsiv, mit Ihrem Backend verbunden.",
    offer_redesign_title: "Redesign & Modernisierung",
    offer_redesign_desc: "Haben Sie eine alte Website oder ein altes System? Ich schreibe es in einen modernen Stack um, der weiterentwickelt werden kann.",
    offer_automation_title: "KI & Automatisierung",
    offer_automation_desc: "Intelligente Chatbots, Dokumentensuche, Automatisierung von Routineprozessen. Maßgeschneiderte KI-Tools, die Zeit und Geld sparen.",
    section_contact: "Kontakt",
    contact_title: "Lassen Sie uns einen Kaffee trinken",
    contact_subtitle: "Schreiben Sie mir, was Sie brauchen. Angebote und Schätzungen sind kostenlos und unverbindlich.",
    contact_email: "jiri@hejdusek.com",
    contact_linkedin: "LinkedIn",
    footer: "© 2026 Jiří Hejdušek",
    footer_info: "ID 14253518 &nbsp;|&nbsp; Slatinická 261, 783 49 Lutín<br>Unternehmer, eingetragen im Gewerberegister.",
    cookie_title: "Diese Website verwendet Cookies",
    cookie_desc: "Ich verwende Analyse-Cookies, um zu verstehen, wie die Website funktioniert und was verbessert werden kann. Ich verkaufe oder teile keine Daten.",
    cookie_accept: "Alle akzeptieren",
    cookie_necessary: "Nur notwendige",
    cookie_settings: "Einstellungen",
    cookie_prefs_title: "Cookie-Einstellungen",
    cookie_save: "Einstellungen speichern",
    cookie_necessary_title: "Notwendige Cookies",
    cookie_necessary_desc: "Für den Betrieb der Website erforderlich. Können nicht deaktiviert werden.",
    cookie_analytics_title: "Analyse-Cookies",
    cookie_analytics_desc: "Google Analytics — anonyme Besucherstatistiken.",
    nav_stack: "Technologie",
    nav_experience: "Erfahrung",
    nav_services: "Dienstleistungen",
    nav_contact: "Kontakt"
  }
};

function detectLanguage() {
  var lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (lang === 'cs' || lang === 'sk') return 'cs';
  if (lang === 'de' || lang.indexOf('de-') === 0) return 'de';
  return 'en';
}

function i18n_t(key, lang) {
  if (lang === 'cs') return null; // default text in HTML
  var dict = TRANSLATIONS[lang];
  return dict && dict[key] ? dict[key] : null;
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;

  // Save original texts on first run
  if (!applyTranslations._origSaved) {
    applyTranslations._origTitle = 'Jiří Hejdušek — .NET vývojář';
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      elements[i].setAttribute('data-i18n-orig', elements[i].textContent);
    }
    var htmlElements = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlElements.length; j++) {
      htmlElements[j].setAttribute('data-i18n-html-orig', htmlElements[j].innerHTML);
    }
    var dots = document.querySelectorAll('.timeline-dot');
    for (var k = 0; k < dots.length; k++) {
      dots[k].setAttribute('aria-label-orig', dots[k].getAttribute('aria-label'));
    }
    applyTranslations._origSaved = true;
  }

  // Restore originals for CS, translate for others
  var useOrig = (lang === 'cs');

  // Page title
  document.title = useOrig ? applyTranslations._origTitle : (TRANSLATIONS[lang] && TRANSLATIONS[lang].title ? TRANSLATIONS[lang].title : applyTranslations._origTitle);

  // All elements with data-i18n
  var elements2 = document.querySelectorAll('[data-i18n]');
  for (var i2 = 0; i2 < elements2.length; i2++) {
    var el = elements2[i2];
    if (useOrig) {
      el.textContent = el.getAttribute('data-i18n-orig');
    } else {
      var key = el.getAttribute('data-i18n');
      var text = i18n_t(key, lang);
      if (text) el.textContent = text;
    }
  }

  // Elements with data-i18n-html
  var htmlElements2 = document.querySelectorAll('[data-i18n-html]');
  for (var j2 = 0; j2 < htmlElements2.length; j2++) {
    var hel = htmlElements2[j2];
    if (useOrig) {
      hel.innerHTML = hel.getAttribute('data-i18n-html-orig');
    } else {
      var hkey = hel.getAttribute('data-i18n-html');
      var htext = i18n_t(hkey, lang);
      if (htext) hel.innerHTML = htext;
    }
  }

  // aria-labels on nav dots
  var dots2 = document.querySelectorAll('.timeline-dot');
  for (var k2 = 0; k2 < dots2.length; k2++) {
    if (useOrig) {
      dots2[k2].setAttribute('aria-label', dots2[k2].getAttribute('aria-label-orig'));
    } else {
      var section = dots2[k2].getAttribute('data-section');
      var ariaKey = 'nav_' + section;
      var ariaText = i18n_t(ariaKey, lang);
      if (ariaText) dots2[k2].setAttribute('aria-label', ariaText);
    }
  }
}

var currentLang = localStorage.getItem('lang') || detectLanguage();

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  // Update active button
  var buttons = document.querySelectorAll('.lang-btn');
  for (var b = 0; b < buttons.length; b++) {
    buttons[b].classList.toggle('active', buttons[b].getAttribute('data-lang') === lang);
  }
}

// Apply immediately before DOMContentLoaded for title
if (currentLang !== 'cs') {
  document.documentElement.lang = currentLang;
  if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].title) {
    document.title = TRANSLATIONS[currentLang].title;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  applyTranslations(currentLang);

  // Language switcher buttons
  var buttons = document.querySelectorAll('.lang-btn');
  for (var b = 0; b < buttons.length; b++) {
    buttons[b].classList.toggle('active', buttons[b].getAttribute('data-lang') === currentLang);
    buttons[b].addEventListener('click', function() {
      setLang(this.getAttribute('data-lang'));
    });
  }
});

/* ═══════════════════════════════════════════════════════
   Níže původní script.js — zachováno beze změny
   ═══════════════════════════════════════════════════════ */

/* ── Scroll Progress Bar ── */
(function() {
  var bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

/* ── Starfield Canvas ── */
(function() {
  var canvas = document.getElementById('starfield');
  var ctx = canvas.getContext('2d');
  var stars = [];
  var w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    initStars();
  }

  function initStars() {
    var count = Math.floor((w * h) / 1800);
    stars = [];
    for (var i = 0; i < count; i++) {
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
    for (var s = 0; s < stars.length; s++) {
      var star = stars[s];
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(180,170,255,' + star.opacity + ')';
      ctx.fill();
      star.y += star.speed;
      if (star.y > h + 5) { star.y = -5; star.x = Math.random() * w; }
    }
    requestAnimationFrame(draw);
  }

  document.addEventListener('mousemove', function(e) {
    var mx = (e.clientX / w - 0.5) * 30;
    var my = (e.clientY / h - 0.5) * 30;
    canvas.style.transform = 'translate(' + mx + 'px, ' + my + 'px)';
  }, { passive: true });

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ── Hero Parallax ── */
(function() {
  var hero = document.querySelector('.hero-content');
  if (!hero) return;

  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      hero.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
      hero.style.opacity = 1 - (scrollY / window.innerHeight) * 0.8;
    }
  }, { passive: true });
})();

/* ── Scroll Animations ── */
var observer = new IntersectionObserver(function(entries) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('visible');
    }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.anim-up, .anim-scale, .section-label').forEach(function(el) {
  observer.observe(el);
});

/* ── Stack items cascade reveal ── */
(function() {
  var stackItems = document.querySelectorAll('.stack-item');
  var stackObserver = new IntersectionObserver(function(entries) {
    var delay = 0;
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        (function(target) {
          setTimeout(function() {
            target.classList.add('visible');
          }, delay);
        })(entries[i].target);
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
  var scrollY = window.scrollY;
  var orb1 = document.querySelector('.glow-orb-1');
  var orb2 = document.querySelector('.glow-orb-2');
  if (orb1) orb1.style.transform = 'translateY(' + (scrollY * 0.25) + 'px) translateX(' + (-scrollY * 0.05) + 'px)';
  if (orb2) orb2.style.transform = 'translateY(' + (-scrollY * 0.2) + 'px) translateX(' + (scrollY * 0.08) + 'px)';
}, { passive: true });

/* ── Smooth number counter for experience years ── */
(function() {
  var hero = document.querySelector('.hero-subtitle');
  if (!hero) return;

  var yearsObs = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      var el = entries[0].target;
      el.innerHTML = el.innerHTML.replace(
        '6 lety',
        '<span style="background: linear-gradient(135deg, var(--accent), var(--accent-glow)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700;">6 lety</span>'
      );
      el.innerHTML = el.innerHTML.replace(
        '6 years',
        '<span style="background: linear-gradient(135deg, var(--accent), var(--accent-glow)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700;">6 years</span>'
      );
      el.innerHTML = el.innerHTML.replace(
        '6 Jahren',
        '<span style="background: linear-gradient(135deg, var(--accent), var(--accent-glow)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700;">6 Jahren</span>'
      );
      yearsObs.unobserve(el);
    }
  }, { threshold: 0.5 });

  yearsObs.observe(hero);
})();

/* ── Section divider glow on scroll ── */
(function() {
  var sections = document.querySelectorAll('section[id]');
  var sectionObs = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.style.transition = 'box-shadow 0.8s ease';
      }
    }
  }, { threshold: 0.3 });

  sections.forEach(function(s) { sectionObs.observe(s); });
})();

/* ── Scroll hint: "Scroll" → localized end text ── */
(function() {
  var label = document.getElementById('scroll-label');
  if (!label) return;

  window.addEventListener('scroll', function() {
    var scrollBottom = window.scrollY + window.innerHeight;
    var docHeight = document.documentElement.scrollHeight;
    if (docHeight - scrollBottom < 120) {
      label.textContent = i18n_t('end', currentLang) || 'Konec';
    } else {
      label.textContent = i18n_t('scroll', currentLang) || 'Scroll';
    }
  }, { passive: true });
})();

/* ── Timeline dots positioning & active state ── */
(function() {
  var dots = document.querySelectorAll('.timeline-dot');
  if (!dots.length) return;

  function positionDots() {
    var vh = window.innerHeight;
    dots.forEach(function(dot) {
      var sectionId = dot.getAttribute('data-section');
      var section = document.getElementById(sectionId);
      if (section) {
        var rect = section.getBoundingClientRect();
        var sectionTop = rect.top + window.scrollY;
        var posPct = (sectionTop / (document.documentElement.scrollHeight - vh)) * 100;
        dot.style.top = Math.max(10, Math.min(90, posPct)) + '%';
      }
    });
  }

  var sectionObserver2 = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var dot = document.querySelector('[data-section="' + entry.target.id + '"]');
      if (!dot) continue;
      if (entry.isIntersecting) {
        dots.forEach(function(d) { d.classList.remove('active'); });
        dot.classList.add('active');
      }
    }
  }, { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' });

  dots.forEach(function(dot) {
    var section = document.getElementById(dot.getAttribute('data-section'));
    if (section) sectionObserver2.observe(section);
  });

  positionDots();
  window.addEventListener('resize', positionDots);
})();
