const initialData = [
  {
    name: 'Steve',
    surname: 'fasdasd'
  },
  {

  },
  {

  }
]

function init() {
  rangeOutputDisplay()
  renderInitialData()

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
    phoneElement.innerHTML = `<strong>Phone:</strong> `

    const phoneSpanElement = document.createElement('span')
    phoneSpanElement.textContent = '****'

    phoneElement.append(phoneSpanElement)

    const emailElement = document.createElement('p')
    emailElement.innerHTML = `<strong>Email:</strong> `

    const emailSpanElement = document.createElement('span')
    emailSpanElement.textContent = '****'

    emailElement.append(emailSpanElement)

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

    const privateInfoButton = document.createElement('button')
    privateInfoButton.textContent = 'Show private info'

    let showPrivateInfo = false

    privateInfoButton.addEventListener('click', () => {
      showPrivateInfo = !showPrivateInfo

      if (showPrivateInfo) {
        privateInfoButton.textContent = 'Hide private info'
        phoneSpanElement.textContent = phone
        emailSpanElement.textContent = email
      } else {
        privateInfoButton.textContent = 'Show private info'
        phoneSpanElement.textContent = '****'
        emailSpanElement.textContent = '****'
      }
    })

    const deleteStudentButton = document.createElement('button')
    deleteStudentButton.textContent = 'Remove Student'

    deleteStudentButton.addEventListener('click', () => {
      studentItem.remove()

      alertMessage(`Student (${name} ${surname}) successfully removed`, 'danger')
    })

    studentItem.append(nameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapperElement, privateInfoButton, deleteStudentButton)
    studentsList.prepend(studentItem)
    form.reset()

    alertMessage(`Student (${name} ${surname}) successfully created`, 'success')
    rangeOutputDisplay()
  })
}

init()

function renderInitialData() {
  console.log('Kuriami studentai is initialData masyvo')
}

function alertMessage(text, elementClass) {
  const alertMessageElement = document.querySelector('#alert-message')
  alertMessageElement.classList.add(elementClass)
  alertMessageElement.textContent = text

  setTimeout(() => {
    alertMessageElement.textContent = ''
    alertMessageElement.classList.remove(elementClass)
  }, 5000);
}

function rangeOutputDisplay() {
  const input = document.querySelector('#student-it-knowledge')
  const output = document.querySelector('#it-knowledge-output')

  output.textContent = input.value

  input.addEventListener('input', (event) => {
    output.textContent = event.target.value
  })
}