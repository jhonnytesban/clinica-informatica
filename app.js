const menu = document.getElementById('menu')
const nav = document.getElementById('nav')
const reparaciones = document.getElementById('linkReparaciones')
const catalogo = document.getElementById('linkCatalogo')
menu.addEventListener('click', () => {
  nav.classList.toggle('nav-activated')
  nav.classList.toggle('nav-disabled')
})
reparaciones.addEventListener('click', () => {
  nav.classList.toggle('nav-activated')
  nav.classList.toggle('nav-disabled')
})
catalogo.addEventListener('click', () => {
  nav.classList.toggle('nav-activated')
  nav.classList.toggle('nav-disabled')
})