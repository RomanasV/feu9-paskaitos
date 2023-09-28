const randomJokeButton = document.querySelector('#random-joke-button')

randomJokeButton.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(joke => {
      const jokeParagraph = document.querySelector('#joke-paragraph')

      jokeParagraph.textContent = joke.value
    })
})

fetch('https://api.chucknorris.io/jokes/categories')
  .then(res => res.json())
  .then(categories => {
    console.log(categories)
  })

let category = 'career'

fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
  .then(res => res.json())
  .then(joke => {
    console.log(joke)
  })