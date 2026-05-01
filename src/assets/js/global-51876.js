(function() {
  const init = () => {
    const items = document.querySelectorAll('.grit-reveal');

    items.forEach((item) => {
      item.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out');
    });

    const reveal = (item) => {
      item.classList.remove('opacity-0', 'translate-y-6');
      item.classList.add('opacity-100', 'translate-y-0');
    };

    if (!('IntersectionObserver' in window)) {
      items.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    items.forEach((item) => observer.observe(item));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();