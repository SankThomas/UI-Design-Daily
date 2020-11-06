const navBar = document.querySelector('.navbar')
const menuBtn = document.querySelector('.fa-bars')
const times = document.querySelector('.fa-times')

menuBtn.addEventListener('click', () => {
  if (navBar.style.display === 'block') {
    navBar.style.display = 'none'
    times.style.display = 'none'
  } else {
    navBar.style.display = 'block'
    times.style.display = 'block'
  }
})

times.addEventListener('click', () => {
  navBar.style.display = 'none'
  times.style.display = 'none'
})
