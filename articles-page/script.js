const menuBtn = document.querySelector('.menu-btn')
const header = document.querySelector('.header')

menuBtn.addEventListener('click', () => {
  header.classList.toggle('open')
})
