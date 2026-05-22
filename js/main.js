/* ============================================================
   Nikshi Foundation for Humanity — Main JS
   ============================================================ */

/* ---------- Navbar scroll behaviour ---------- */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- Hamburger menu ---------- */
(function () {
  const burger = document.getElementById('hamburger');
  const menu   = document.getElementById('mobile-menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  menu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    })
  );
})();

/* ---------- Active nav link ---------- */
(function () {
  const links = document.querySelectorAll('.nav-link');
  const path  = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ---------- Scroll-in fade animations ---------- */
(function () {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
})();

/* ---------- Animated counters ---------- */
(function () {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const format = (n) => {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'K+';
    return n.toLocaleString('en-IN') + '+';
  };

  const animateCounter = (el) => {
    const target  = parseInt(el.dataset.target, 10);
    const suffix  = el.dataset.suffix || '';
    const duration = 2000;
    const start    = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = (target >= 1000 ? format(current).replace('+', '') : current.toLocaleString('en-IN')) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target >= 1000 ? format(target) : target.toLocaleString('en-IN') + suffix;
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ---------- Gallery Lightbox ---------- */
(function () {
  const lightbox   = document.getElementById('lightbox');
  if (!lightbox) return;
  const lbImg      = document.getElementById('lightbox-img');
  const lbCaption  = document.getElementById('lightbox-caption');
  const closeBtn   = document.getElementById('lightbox-close');
  const prevBtn    = document.getElementById('lightbox-prev');
  const nextBtn    = document.getElementById('lightbox-next');
  const items      = document.querySelectorAll('.gallery-item[data-src]');
  let current      = 0;

  const open = (index) => {
    current = index;
    const item = items[current];
    lbImg.src = item.dataset.src;
    lbImg.alt = item.dataset.caption || '';
    lbCaption.textContent = item.dataset.caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  };

  const navigate = (dir) => {
    current = (current + dir + items.length) % items.length;
    const item = items[current];
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = item.dataset.src;
      lbImg.alt = item.dataset.caption || '';
      lbCaption.textContent = item.dataset.caption || '';
      lbImg.style.opacity = '1';
    }, 150);
  };

  lbImg.style.transition = 'opacity 0.15s';

  items.forEach((item, i) => item.addEventListener('click', () => open(i)));
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   navigate(-1);
    if (e.key === 'ArrowRight')  navigate(1);
  });
})();

/* ---------- Donate amount selector ---------- */
(function () {
  const amountBtns   = document.querySelectorAll('.amount-btn');
  const customInput  = document.getElementById('custom-amount');
  const hiddenAmount = document.getElementById('selected-amount');
  if (!amountBtns.length) return;

  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const val = btn.dataset.amount;
      if (val === 'custom') {
        if (customInput) { customInput.style.display = 'block'; customInput.focus(); }
        if (hiddenAmount) hiddenAmount.value = '';
      } else {
        if (customInput) customInput.style.display = 'none';
        if (hiddenAmount) hiddenAmount.value = val;
      }
    });
  });

  if (customInput) {
    customInput.addEventListener('input', () => {
      if (hiddenAmount) hiddenAmount.value = customInput.value;
    });
  }

  // Select first option by default
  if (amountBtns[0]) amountBtns[0].click();
})();

/* ---------- Contact form char count ---------- */
(function () {
  const textarea = document.querySelector('.form-textarea[maxlength]');
  const counter  = document.getElementById('char-count');
  if (!textarea || !counter) return;
  const max = textarea.getAttribute('maxlength');
  textarea.addEventListener('input', () => {
    counter.textContent = `${textarea.value.length}/${max}`;
  });
})();
