let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')
let h5 = document.querySelector('h5')
let button = document.querySelector('button')

h1.addEventListener('click', function() {
  h1.style.backgroundColor = 'pink'
  h1.style.color = 'green'
  h1.textContent = 'Clicked'
})

h2.addEventListener('click', function() {
  h2.style.fontSize = '40px'
})

h3.addEventListener('click', function() {
  h3.style.color = 'purple'
  h1.style.color = 'purple'
})

// h4.addEventListener('click', function() {
//   h4.style.border = '2px dashed black'
//   h1.style.border = '2px dashed black'
// })

// h5.addEventListener('click', function() {
//   h4.style.border = '2px dashed black'
//   h1.style.border = '2px dashed black'
// })

h4.addEventListener('click', changeBorder)
h5.addEventListener('click', changeBorder)

function changeBorder() {
  h4.style.border = '2px dashed orange'
  h1.style.border = '2px dashed orange'
}

button.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode')
  button.classList.toggle('active')
})