const menuButton = document.querySelector('.menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
const closeButton = document.querySelector('.mobile-close');
const overlay = document.querySelector('.menu-overlay');

function setMenu(open) {
  if (!mobileMenu || !menuButton) return;
  mobileMenu.classList.toggle('active', open);
  overlay?.classList.toggle('active', open);
  document.body.classList.toggle('mobile-menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
}

menuButton?.addEventListener('click', () => {
  setMenu(!mobileMenu.classList.contains('active'));
});

closeButton?.addEventListener('click', () => setMenu(false));
overlay?.addEventListener('click', () => setMenu(false));

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenu(false);
});
