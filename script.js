// Smooth scroll for anchor links (backup; CSS scroll-behavior: smooth covers most cases)
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var targetId = this.getAttribute('href');
    if (targetId === '#') return;
    var target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Subtle reveal animation for sections/cards on scroll
var revealTargets = document.querySelectorAll(
  ".hero, .section, .card, .project-card, .how-card, .footer"
);

revealTargets.forEach(function (node) {
  node.classList.add("reveal-init");
});

if ("IntersectionObserver" in window) {
  var revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach(function (node) {
    revealObserver.observe(node);
  });
} else {
  revealTargets.forEach(function (node) {
    node.classList.add("is-visible");
  });
}
