import { firsLetterUppercase, createOptionElement } from './utils.js'

function init() {
  const dogsForm = document.querySelector('#dogs-form')
  const breedSelect = dogsForm['breed-select']

  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      const breeds = data.message

      // for ..in ciklas
      // for (const key in breeds) {
      //   const mainBreed = key
      //   const subBreed = breeds[key]

      //   console.log(mainBreed, subBreed)
      // }

      // Object.keys() ir Object.values() metodai
      // const breedKeys = Object.keys(breeds)
      // const breedValues = Object.values(breeds)

      // console.log(breedKeys)
      // console.log(breedValues)

      // breedKeys.forEach((mainBreed, index) => {
      //   const subBreeds = breedValues[index]
      //   console.log(mainBreed, subBreeds)
      // })

      // Object.entries() metodas
      const breedEntries = Object.entries(breeds)

      const submitButton = dogsForm['breed-submit']

      breedEntries.forEach(entry => {
        const mainBreed = entry[0]
        const subBreeds = entry[1]
        
        if (subBreeds.length > 0) {
          subBreeds.forEach(subBreed => {
            // const breedOption = document.createElement('option')
            // breedOption.textContent = `${firsLetterUppercase(mainBreed)} (${firsLetterUppercase(subBreed)})`
            // breedOption.value = mainBreed + '/' + subBreed

            const breedElementText = `${firsLetterUppercase(mainBreed)} (${firsLetterUppercase(subBreed)})`

            const breedOption = createOptionElement(breedElementText, mainBreed + '/' + subBreed)

            breedSelect.append(breedOption)
          })
        } else {
          // const breedOption = document.createElement('option')
          // breedOption.textContent = firsLetterUppercase(mainBreed)
          // breedOption.value = mainBreed
  
          const breedOption = createOptionElement(firsLetterUppercase(mainBreed), mainBreed)

          breedSelect.append(breedOption)
        }
      })

      submitButton.removeAttribute('disabled')
    })

  dogsForm.addEventListener('submit', event => {
    event.preventDefault()
    const selectedBreed = breedSelect.value

    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
      .then(res => res.json())
      .then(data => {
        const imageSrc = data.message
        const imageElement = document.querySelector('#dog-image')

        imageElement.src = imageSrc
        imageElement.width = 300
        imageElement.alt = selectedBreed
      })
  })
}

init()
