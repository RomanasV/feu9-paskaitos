// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// 12. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement('h3')
let minus5Button = document.createElement('button')
let minus2Button = document.createElement('button')
let minusButton = document.createElement('button')
let plusButton = document.createElement('button')
let plus2Button = document.createElement('button')
let plus5Button = document.createElement('button')
let resetButton = document.createElement('button')
let input = document.createElement('input')

numberDisplay.textContent = 5
minus5Button.textContent = '-5'
minus2Button.textContent = '-2'
minusButton.textContent = '-'
plusButton.textContent = '+'
plus2Button.textContent = '+2'
plus5Button.textContent = '+5'
resetButton.textContent = 'Reset'

input.value = 5
input.type = 'number'
// input.setAttribute('type', 'number')
input.min = 1
input.max = 10

numberDisplay.style.color = 'green'

minus5Button.setAttribute('disabled', true)

// numbersWrapper.append(numberDisplay)
// numbersWrapper.append(minusButton)
// numbersWrapper.append(plusButton)

numbersWrapper.append(input, numberDisplay, minus5Button, minus2Button, minusButton, resetButton, plusButton, plus2Button, plus5Button)


minusButton.addEventListener('click', function() {
  numberDisplay.textContent = numberDisplay.textContent - 1
  input.value = numberDisplay.textContent

  if (numberDisplay.textContent <= 1) {
    minusButton.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent <= 2) {
    minus2Button.setAttribute('disabled', true)
  }
  
  if (numberDisplay.textContent <= 5) {
    minus5Button.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent < 10) {
    plusButton.removeAttribute('disabled')
  }

  if (numberDisplay.textContent < 9) {
    plus2Button.removeAttribute('disabled')
  }

  if (numberDisplay.textContent < 6) {
    plus5Button.removeAttribute('disabled')
  }

  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})

minus2Button.addEventListener('click', function() {
  numberDisplay.textContent = numberDisplay.textContent - 2
  input.value = numberDisplay.textContent

  if (numberDisplay.textContent <= 1) {
    minusButton.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent <= 2) {
    minus2Button.setAttribute('disabled', true)
  }
  
  if (numberDisplay.textContent <= 5) {
    minus5Button.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent < 10) {
    plusButton.removeAttribute('disabled')
  }
  
  if (numberDisplay.textContent < 9) {
    plus2Button.removeAttribute('disabled')
  }
  
  if (numberDisplay.textContent < 6) {
    plus5Button.removeAttribute('disabled')
  }

  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})

minus5Button.addEventListener('click', function() {
  numberDisplay.textContent = numberDisplay.textContent - 5
  input.value = numberDisplay.textContent

  if (numberDisplay.textContent <= 1) {
    minusButton.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent <= 2) {
    minus2Button.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent <= 5) {
    minus5Button.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent < 10) {
    plusButton.removeAttribute('disabled')
  }
  
  if (numberDisplay.textContent < 9) {
    plus2Button.removeAttribute('disabled')
  }
  
  if (numberDisplay.textContent < 6) {
    plus5Button.removeAttribute('disabled')
  }

  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})

plusButton.addEventListener('click', function() {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 1
  input.value = numberDisplay.textContent

  if (numberDisplay.textContent >= 10) {
    plusButton.setAttribute('disabled', true)
  }
  
  if (numberDisplay.textContent >= 9) {
    plus2Button.setAttribute('disabled', true)
  }
  
  if (numberDisplay.textContent >= 5) {
    plus5Button.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent > 1) {
    minusButton.removeAttribute('disabled')
  }

  if (numberDisplay.textContent > 2) {
    minus2Button.removeAttribute('disabled')
  }

  if (numberDisplay.textContent > 5) {
    minus5Button.removeAttribute('disabled')
  }

  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})

plus2Button.addEventListener('click', function() {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 2
  input.value = numberDisplay.textContent

  if (numberDisplay.textContent >= 10) {
    plusButton.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent >= 9) {
    plus2Button.setAttribute('disabled', true)
  }
  
  if (numberDisplay.textContent >= 5) {
    plus5Button.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent > 1) {
    minusButton.removeAttribute('disabled')
  }

  if (numberDisplay.textContent > 2) {
    minus2Button.removeAttribute('disabled')
  }
  
  if (numberDisplay.textContent > 5) {
    minus5Button.removeAttribute('disabled')
  }

  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})

plus5Button.addEventListener('click', function() {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 5
  input.value = numberDisplay.textContent

  if (numberDisplay.textContent >= 10) {
    plusButton.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent >= 9) {
    plus2Button.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent >= 5) {
    plus5Button.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent > 1) {
    minusButton.removeAttribute('disabled')
  }

  if (numberDisplay.textContent > 2) {
    minus2Button.removeAttribute('disabled')
  }
  
  if (numberDisplay.textContent > 5) {
    minus5Button.removeAttribute('disabled')
  }

  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})

input.addEventListener('input', function() {
  numberDisplay.textContent = input.value
})

resetButton.addEventListener('click', function() {
  numberDisplay.textContent = 5
  input.value = numberDisplay.textContent
  numberDisplay.style.color = 'green'

  plusButton.removeAttribute('disabled')
  plus2Button.removeAttribute('disabled')
  plus5Button.removeAttribute('disabled')
  minusButton.removeAttribute('disabled')
  minus2Button.removeAttribute('disabled')
  minus5Button.removeAttribute('disabled')
})



// NUMBERS
// let num = 5
// console.log(num)

// console.log(num + 1)

// console.log(num)

// num = 6
// console.log(num)

// num = num + 1
// console.log(num)

// num += 1
// console.log(num)

// num += 2
// console.log(num)

// num++
// console.log(num)

// num = num - 1
// console.log(num)

// num -= 1
// console.log(num)

// num -= 2
// console.log(num)

// num--
// console.log(num)

// num = num * 2
// console.log(num)

// num *= 2
// console.log(num)

// num = num / 2
// console.log(num)

// num /= 2
// console.log(num)

// // String
// let str = 'Labas'
// console.log(str)

// console.log(str + ' vakaras')

// console.log(str)

// str = str + ' vakaras'
// console.log(str)

// str += '.'
// console.log(str)