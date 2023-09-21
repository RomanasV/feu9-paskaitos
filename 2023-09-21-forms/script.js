function init() {
  const testForm = document.querySelector('#test-form')

  testForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // const personName = document.querySelector('#person-name').value
    // const personName = document.getElementById('person-name').value
    // const personName = testForm.querySelector('#person-name').value

    // const personAge = testForm.elements.age.value
    // const personAge = testForm.elements['person-age'].value
    
    // const personAge = testForm['person-age'].value
    const personAge = testForm.age.value
    const personName = testForm.name.value

    const personDescription = document.createElement('p')
    personDescription.textContent = `Person name is ${personName} and age is ${personAge}`

    testForm.after(personDescription)
  })
}

init()