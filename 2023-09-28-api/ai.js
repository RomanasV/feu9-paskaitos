import { firsLetterUppercase } from './utils.js'

function init() {
  const nameForm = document.querySelector('#name-form')
  nameForm.addEventListener('submit', nameFormSubmit)
}

init()

async function nameFormSubmit(event) {
  event.preventDefault()
  
  const enteredName = event.target.name.value
  
  const ageOutput = await getAgeByName(enteredName)
  const countryOutput = await getCountryByName(enteredName)
  const genderOutput = await getGenderByName(enteredName)
  
  const outputParagraph = document.querySelector('#output-paragraph')
  outputParagraph.textContent = `${ageOutput} ${countryOutput} ${genderOutput}`
}

async function getAgeByName(enteredName) {
  const res = await fetch('https://api.agify.io?name=' + enteredName)
  const data = await res.json()

  const age = data.age
  const output = `${firsLetterUppercase(enteredName)} is ${age} years old.`
  
  return output
}

async function getCountryByName(enteredName) {
  const res = await fetch('https://api.nationalize.io?name=' + enteredName)
  const data = await res.json()
  
  const countryId = data.country[0].country_id
  const output = `${firsLetterUppercase(enteredName)} is from ${countryId}.`

  return output
}

async function getGenderByName(enteredName) {
  // fetch('https://api.genderize.io/?name=john')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })

  const res = await fetch('https://api.genderize.io/?name=' + enteredName)
  const data = await res.json()

  const gender = data.gender
  const output = `${firsLetterUppercase(enteredName)} is a ${gender}.`
  
  return output
}