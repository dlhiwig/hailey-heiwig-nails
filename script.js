// Simple enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Optional: simple form feedback (Formspree handles submission)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', () => {
      // Formspree will handle the actual submission
      // You can add a thank-you message redirect later
    });
  }
});
