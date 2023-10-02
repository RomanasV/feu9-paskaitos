import { createOptionElement, firsLetterUppercase } from './utils.js'

function getRandomJoke() {
  const randomJokeButton = document.querySelector('#random-joke-button')

  randomJokeButton.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(joke => {
        const jokeParagraph = document.querySelector('#joke-paragraph')
  
        jokeParagraph.textContent = joke.value
      })
  })
}

getRandomJoke()

// 1. Sukurti mygtuką, kurį paspaudus ekrane atvaizduojamas atsitiktinis juokelis.

// 2. Sukurti galimybę pasirinkti juokelių kategoriją:
//   2.1. Sukurti formą, kurioje bus <select> elementas. 
//   2.2. <select> elementas savyje turės <option> elementus. Juose galima pasirinkti juokelių kategoriją. Šie elementai turi susigeneruoti automatiškai, priklausomai nuo to, kokias kategorijas turi API.

//   2.3. Sukurti mygtuką, kurį paspaudus, sugeneruotų atsitiktinį juokelį pagal pasirinktą kategoriją.


function getJokeByCategory() {
  fetch('https://api.chucknorris.io/jokes/categories')
    .then(res => res.json())
    .then(categories => {
      const categoryForm = document.querySelector('#category-form')
      const categorySelectElement = categoryForm['category-select']

      categories.forEach(category => {
        // const categoryOptionElement = document.createElement('option')
        // categoryOptionElement.textContent = '- ' + firsLetterUppercase(category)
        // categoryOptionElement.value = category

        const categoryOptionElement = createOptionElement('- ' + firsLetterUppercase(category), category)

        categorySelectElement.append(categoryOptionElement)
      })

      categoryForm.addEventListener('submit', event => {
        event.preventDefault()

        const selectedCategory = categorySelectElement.value

        const requestUrl = 'https://api.chucknorris.io/jokes/random?category=' + selectedCategory
        
        fetch(requestUrl)
          .then(res => res.json())
          .then(joke => {
            const jokeParagraph = document.querySelector('#joke-paragraph')
            jokeParagraph.textContent = joke.value
          })
      })
    })
}

getJokeByCategory()

// 3. Sukurti galimybę ieškoti juokelių pagal užklausos frazę.

function getJokeByPhrase() {
  const searchForm = document.querySelector('#search-form')

  searchForm.addEventListener('submit', event => {
    event.preventDefault()

    const searchPhrase = event.target['search-input'].value
    const searchUrl = `https://api.chucknorris.io/jokes/search?query=${searchPhrase}`

    fetch(searchUrl)
      .then(res => res.json())
      .then(data => {
        const total = data.total
        const jokeParagraph = document.querySelector('#joke-paragraph')

        if (total > 0) {
          const index = Math.floor(Math.random() * total)
          const selectedJoke = data.result[index].value

          jokeParagraph.textContent = selectedJoke
        } else {
          jokeParagraph.textContent = 'No joke found :('
        }
      })
  })
}

getJokeByPhrase()