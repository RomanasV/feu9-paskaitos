// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement('h3')
let minusButton = document.createElement('button')
let plusButton = document.createElement('button')

numberDisplay.textContent = 5
minusButton.textContent = '-'
plusButton.textContent = '+'

// numbersWrapper.append(numberDisplay)
// numbersWrapper.append(minusButton)
// numbersWrapper.append(plusButton)

numbersWrapper.append(numberDisplay, minusButton, plusButton)


minusButton.addEventListener('click', function() {
  numberDisplay.textContent = numberDisplay.textContent - 1

  if (numberDisplay.textContent <= 1) {
    minusButton.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent < 10) {
    plusButton.removeAttribute('disabled')
  }
})

plusButton.addEventListener('click', function() {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 1

  if (numberDisplay.textContent >= 10) {
    plusButton.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent > 1) {
    minusButton.removeAttribute('disabled')
  }
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