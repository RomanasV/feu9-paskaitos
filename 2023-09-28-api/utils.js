export function firsLetterUppercase(str) {
  return str.at().toUpperCase() + str.slice(1)
}

export function createOptionElement(text, value, className) {
  const optionElement = document.createElement('option')
  optionElement.textContent = text
  optionElement.value = value

  if (className) {
    optionElement.classList.add(className)
  }

  return optionElement
}