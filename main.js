
const hamburger = document.querySelector('.hamburger');
const toolbar = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
  toobar.classList.remove('display-mobile');
});
const closeMenu = document.querySelector('header .mobile-menu .close-menu a');
closeMenu.addEventListener('click', () => {
  toolbar.classList.add('display-mobile');
});
const links = document.querySelectorAll('header .mobile-menu ul li a');
for (let i = 0; i < links.length; i += 1) {
  links.addEventListener('click', () => {
    toolbar.classList.add('display-mobile');
  });
}