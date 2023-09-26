localStorage.setItem('test', 'labas')
console.log(localStorage.getItem('test'))

localStorage.removeItem('test')
console.log(localStorage.getItem('test'))

const input = document.querySelector('#test')
input.value = localStorage.getItem('input-field')

input.addEventListener('input', () => {
  localStorage.setItem('input-field', input.value)
})

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  localStorage.removeItem('input-field')
  form.reset()
})

// localStorage.setItem('vienas', 'vienas')
// localStorage.setItem('du', 'du')
// localStorage.setItem('trys', 'trys')
// localStorage.clear()

let personAge = 25
console.log(personAge, typeof personAge)
localStorage.setItem('age', personAge)

let personAgeStorage = localStorage.getItem('age')
console.log(personAgeStorage, typeof personAgeStorage)

let person = {
  age: 30,
  name: 'John',
}
console.log(person, typeof person)

let personObjStr = JSON.stringify(person)
console.log(personObjStr, typeof personObjStr)

localStorage.setItem('person', personObjStr)

let personLocal = localStorage.getItem('person')
console.log(personLocal, typeof personLocal)

let personLocalObj = JSON.parse(personLocal)

console.log(personLocalObj, typeof personLocalObj)
console.log(personLocalObj.name)
console.log(personLocalObj.age)

let arr = [5, 15, 89, 'tekstas', [5, 10, 8], { test: 'labas' }, true]
localStorage.setItem('arr', JSON.stringify(arr))

let arrLocal = JSON.parse(localStorage.getItem('arr'))
console.log(arrLocal)
console.log(arrLocal[1])