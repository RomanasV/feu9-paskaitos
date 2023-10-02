import { firsLetterUppercase } from './utils.js'

function init() {
  const nameForm = document.querySelector('#name-form')
  const outputParagraph = document.querySelector('#output-paragraph')
  
  nameForm.addEventListener('submit', event => {
    event.preventDefault()

    outputParagraph.textContent = ''

    const enteredName = event.target.name.value

    fetch('https://api.agify.io?name=' + enteredName)
      .then(res => res.json())
      .then(data => {
        const age = data.age

        outputParagraph.textContent += `${firsLetterUppercase(enteredName)} is ${age} years old. `
      })

    fetch('https://api.nationalize.io?name=' + enteredName)
      .then(res => res.json())
      .then(data => {
        const countryId = data.country[0].country_id

        outputParagraph.textContent += `${firsLetterUppercase(enteredName)} is  from ${countryId}. `
      })

    fetch('https://api.genderize.io/?name=' + enteredName)
      .then(res => res.json())
      .then(data => {
        const gender = data.gender

        outputParagraph.textContent += `${firsLetterUppercase(enteredName)} is  a ${gender}. `
      })

      
  })
}

init()