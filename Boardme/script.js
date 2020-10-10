const skip = document.querySelector('.skip')
const times = document.querySelector('.times')
const mainTooltip = document.querySelector('.main-tooltip')

skip.addEventListener('click', () => {
  mainTooltip.style.display = 'none'
})

times.addEventListener('click', () => {
  mainTooltip.style.display = 'none'
})
