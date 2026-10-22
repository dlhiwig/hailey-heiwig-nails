// Mobile menu + smooth scroll animations
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Scroll animations
  const animateElements = document.querySelectorAll(
    'section, .gallery-item, .service-card, .about-content, h2, .section-subtitle'
  );

  animateElements.forEach((el, index) => {
    el.classList.add('animate-on-scroll');
    // Stagger gallery and card items slightly
    if (el.classList.contains('gallery-item') || el.classList.contains('service-card')) {
      const delayClass = `animate-delay-${(index % 4) + 1}`;
      el.classList.add(delayClass);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  animateElements.forEach(el => observer.observe(el));
});
