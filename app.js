document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel, .menu-card, .card');

  panels.forEach((item) => {
    item.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  panels.forEach((item) => observer.observe(item));
});