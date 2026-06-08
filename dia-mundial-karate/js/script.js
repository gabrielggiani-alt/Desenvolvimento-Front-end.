const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav ul');

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

const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('rolou', window.scrollY > 40);
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
