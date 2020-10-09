const subBtn = document.getElementById('sub')
const modal = document.getElementById('modal')
const times = document.getElementById('times')

subBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})

times.addEventListener('click', () => {
  modal.style.display = 'none'
})
