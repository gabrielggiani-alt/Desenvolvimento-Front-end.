const toggle = document.querySelector('.side-toggle');
const menu = document.querySelector('.side-nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('aberto');
    menu.classList.toggle('aberto');
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('aberto');
      menu.classList.remove('aberto');
    });
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
