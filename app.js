const menu = document.getElementById('menu')
const nav = document.getElementById('nav')
menu.addEventListener('click', () => {
  nav.classList.toggle('nav-activated')
  nav.classList.toggle('nav-disabled')
})