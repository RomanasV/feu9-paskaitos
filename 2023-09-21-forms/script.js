function init() {
  const studentForm = document.querySelector('#student-form')

  studentForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const form = event.target

    const name = form.name.value
    const surname = form.surname.value
    const age = form.age.value
    const phone = form.phone.value
    const email = form.email.value
    const itKnowledge = form.elements['it-knowledge'].value
    const group = form.group.value
    const interests = form.querySelectorAll('input[name="interest"]:checked')

    const studentsList = document.querySelector('#students-list')

    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')

    const nameElement = document.createElement('h2')
    nameElement.textContent = `${name} ${surname}`

    const ageElement = document.createElement('p')
    ageElement.innerHTML = `<strong>Age:</strong> ${age}`

    const phoneElement = document.createElement('p')
    phoneElement.innerHTML = `<strong>Phone:</strong> ${phone}`

    const emailElement = document.createElement('p')
    emailElement.innerHTML = `<strong>Email:</strong> ${email}`

    const itKnowledgeElement = document.createElement('p')
    itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${itKnowledge}/10`

    const groupElement = document.createElement('p')
    groupElement.innerHTML = `<strong>Group:</strong> ${group}`

    const interestsWrapperElement = document.createElement('div')
    const interestsHeaderElement = document.createElement('h3')
    interestsHeaderElement.textContent = 'Interests:'

    const interestsList = document.createElement('ul')

    interests.forEach(interest => {
      const interestItem = document.createElement('li')
      interestItem.textContent = interest.value
      interestsList.append(interestItem)
    })

    interestsWrapperElement.append(interestsHeaderElement, interestsList)

    studentItem.append(nameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapperElement)
    studentsList.prepend(studentItem)
  })
}

init()