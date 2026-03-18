/* =============================================================
   MAIN — Nav scroll spy + section entry animations
   ============================================================= */

(function () {
  'use strict';

  // --- Nav scroll border ---
  const nav = document.querySelector('.site-nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.site-nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    // Close on link click
    links.querySelectorAll('.site-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Active nav link (scroll spy) ---
  const navLinks = document.querySelectorAll('.site-nav__link[data-section]');
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    },
    {
      rootMargin: `-${56 + 32}px 0px -60% 0px`,
      threshold: 0,
    }
  );

  sections.forEach(s => sectionObserver.observe(s));

  // --- Section entry animations ---
  const fadeTargets = document.querySelectorAll('.section, .hero, .project-card');

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.05,
    }
  );

  fadeTargets.forEach(el => fadeObserver.observe(el));
})();
