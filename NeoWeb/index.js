const menubtn = document.getElementById('menubtn');
const navlinks = document.getElementById('nav-links');

menubtn.addEventListener("click", (e) => {
  navlinks.classList.toggle("active");
  e.stopPropagation();
});

navlinks.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  navlinks.classList.remove("active");
});

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

// Scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll(
    '.home-content, .home-section p, .btn, .about-section h2, .about-section p, .services-section h2, .service, .contact-section h2, .contact-section p, .contact-form, .footersection h3, .projects-section h2, .projects-intro, .project-card'
  );
  
  elementsToAnimate.forEach(el => {
    el.classList.add('animate-element');
    observer.observe(el);
  });
});