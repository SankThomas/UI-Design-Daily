const question1 = document.querySelector('.question-1')
const question2 = document.querySelector('.question-2')
const question3 = document.querySelector('.question-3')
const question4 = document.querySelector('.question-4')
const question5 = document.querySelector('.question-5')
const question6 = document.querySelector('.question-6')
const answer1 = document.querySelector('.answer-1')
const answer2 = document.querySelector('.answer-2')
const answer3 = document.querySelector('.answer-3')
const answer4 = document.querySelector('.answer-4')
const answer5 = document.querySelector('.answer-5')
const answer6 = document.querySelector('.answer-6')

question1.addEventListener('click', () => {
  if (answer1.style.display === 'block') {
    answer1.style.display = 'none'
  } else {
    answer1.style.display = 'block'
  }
})

question2.addEventListener('click', () => {
  if (answer2.style.display === 'block') {
    answer2.style.display = 'none'
  } else {
    answer2.style.display = 'block'
  }
})

question3.addEventListener('click', () => {
  if (answer3.style.display === 'block') {
    answer3.style.display = 'none'
  } else {
    answer3.style.display = 'block'
  }
})

question4.addEventListener('click', () => {
  if (answer4.style.display === 'block') {
    answer4.style.display = 'none'
  } else {
    answer4.style.display = 'block'
  }
})

question5.addEventListener('click', () => {
  if (answer5.style.display === 'block') {
    answer5.style.display = 'none'
  } else {
    answer5.style.display = 'block'
  }
})

question6.addEventListener('click', () => {
  if (answer6.style.display === 'block') {
    answer6.style.display = 'none'
  } else {
    answer6.style.display = 'block'
  }
})

const plus1 = document.querySelector('.plus-1')

plus1.addEventListener('click', () => {
  if (answer1.style.display === 'block') {
    plus1.classList.add('plus-1')
  }
})
