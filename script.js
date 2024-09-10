// Smooth scrolling for section navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Fade-in animation effect when scrolling
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
      if (!entry.isIntersecting) {
          return;
      } else {
          entry.target.classList.add('visible');
          appearOnScroll.unobserve(entry.target);
      }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});