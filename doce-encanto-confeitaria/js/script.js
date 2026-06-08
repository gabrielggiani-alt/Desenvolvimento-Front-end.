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

const filtros = document.querySelectorAll('.filtro');
const itens = document.querySelectorAll('.galeria-grid .item');

filtros.forEach(btn => {
  btn.addEventListener('click', () => {
    filtros.forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    const cat = btn.dataset.cat;
    itens.forEach(item => {
      const mostra = cat === 'todos' || item.dataset.cat === cat;
      item.classList.toggle('escondido', !mostra);
    });
  });
});

const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  const fechar = lightbox.querySelector('.fechar');
  const prev = lightbox.querySelector('.prev');
  const next = lightbox.querySelector('.next');
  let atual = 0;

  const visiveis = () => [...itens].filter(i => !i.classList.contains('escondido'));

  function abrir(i) {
    const lista = visiveis();
    atual = i;
    lbImg.src = lista[atual].querySelector('img').src;
    lightbox.classList.add('aberto');
  }

  itens.forEach(item => {
    item.addEventListener('click', () => {
      const lista = visiveis();
      abrir(lista.indexOf(item));
    });
  });

  function navega(passo) {
    const lista = visiveis();
    atual = (atual + passo + lista.length) % lista.length;
    lbImg.src = lista[atual].querySelector('img').src;
  }

  fechar.addEventListener('click', () => lightbox.classList.remove('aberto'));
  prev.addEventListener('click', () => navega(-1));
  next.addEventListener('click', () => navega(1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('aberto');
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('aberto')) return;
    if (e.key === 'Escape') lightbox.classList.remove('aberto');
    if (e.key === 'ArrowLeft') navega(-1);
    if (e.key === 'ArrowRight') navega(1);
  });
}

const form = document.querySelector('.form-card form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = form.querySelector('.form-msg');
    if (msg) msg.style.display = 'block';
    form.reset();
  });
}
