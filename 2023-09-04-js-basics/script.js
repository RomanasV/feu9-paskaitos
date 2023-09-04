console.groupCollapsed('Basics')

// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = 'Steve' // String (tekstas) duomenų tipas
let pavarde = "Doe" // String (tekstas) duomenų tipas
let miestas = `Vilnius` // String (tekstas) duomenų tipas
let amzius = 25 // Number (skaičius) duomenų tipas
let yraStudentas = true // Boolean (true/false) duomenų tipas
const asmensKodas = 388564487834 // Number (skaičius) duomenų tipas

console.log(vardas)
console.log(pavarde)
console.log(miestas)
console.log(amzius)
console.log(yraStudentas)
console.log(asmensKodas)

pavarde = 'Steve'
// amzius = 26
amzius = amzius + 1

console.log(pavarde)
console.log(amzius)

console.log(vardas, typeof vardas)
console.log(amzius, typeof amzius)
console.log(yraStudentas, typeof yraStudentas)

console.log('Hello, ' + vardas + '.')
console.log("Hello, " + vardas + ".")
console.log(`Hello, ${vardas}.`)


// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log('John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.')

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.')

console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".")

console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`)

// John said: "Good morning".
console.log('John said: "Good morning".')
console.log(`John said: "Good morning".`)

console.log("John said: \"Good morning\".")

// That's my car.
console.log("That's my car.")
console.log(`That's my car.`)

console.log('That\'s my car.')

// John said: "That's my car".
console.log(`John said: "That's my car".`)
console.log('John said: "That' + "'s my car" + '".')

console.log("John said: \"That's my car\".")
console.log('John said: "That\'s my car".')

// John `said`: "That's my car".
console.log('John `said`: ' + `"That's my car".`)

console.log('John `said`: "That\'s my car".')
console.log("John `said`: \"That's my car\".")
console.log(`John \`said\`: "That's my car".`)

// John \`said\`: "That's my car".
console.log('John \\`said\\`: "That\'s my car".')
console.log("John \\`said\\`: \"That's my car\".")
console.log(`John \\\`said\\\`: "That's my car".`)

let sentence = 'Lorem ipsum DOLOR sit Amet consectetur adipisicing elit.'

console.log(sentence)
console.log(sentence.length) // String simbilių skaičius
console.log(sentence[0])
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())
console.log(sentence.replaceAll('i', 'o'))

console.groupEnd()

console.groupCollapsed('Math Operators')

// Matematiniai operatoriai
let num1 = 22
let num2 = 10
let num3 = '10'

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

console.log(num1 + num2 * num2)
console.log((num1 + num2) * num2)

console.log(num1 + num3)
console.log(num1 - num3)
console.log(num1 * num3)
console.log(num1 / num3)
console.log(num1 % num3)

console.log(num1 + num3 * num2)
console.log(22 + '10' * '10')
console.log(22 + 100)
console.log(122)

console.log((num1 + num3) * num2)
console.log((22 + '10') * '10')
console.log('2210' * '10')
console.log(22100)

console.groupEnd()

// SĄLYGOS
// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10 == 10) // true
console.log('vienas' == 'vienas') // true
console.log('10' == '10') // true
console.log(10 == '10') // true

// Triguba lygybė (strictly qual ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.
console.log(10 === 10) // true
console.log('vienas' === 'vienas') // true
console.log('10' === '10') // true
console.log(10 === '10') // false

console.log(10 > 10) // false
console.log(10 < 10) // false
console.log(10 >= 10) // true
console.log(10 <= 10) // true

console.log(10 == 10) // true
console.log(10 != 10) // false

console.log(10 === 10) // true
console.log(10 !== 10) // false

console.log(true)
console.log(!true)
console.log(false)
console.log(!false)
console.log(!!true)

// IF, ELSE IF, ELSE
let originalLight = 'YeLlOw'
let light = originalLight.toLowerCase()

console.log(light)

if (light === 'green') {
  console.log('Galima eiti!')
} else if (light === 'yellow') {
  console.log('Pasiruošk')
} else if (light === 'red') {
  console.log('STOP')
} else {
  console.log('Sugedo')
}


// let word = 'TREE'.toLowerCase()

let originalWord = 'sun'
let word = originalWord.toLowerCase()
console.log(word)
// console.log(word[0])
// console.log(word[1])
// console.log(word[2])
// console.log(word[3])

let firstLetter = word[0]
let thirdLetter = word[2]
console.log(thirdLetter)

// AND operator - &&

// Žodis: tips
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('t' === 't' && 'p' === 'p')
// console.log(true && true)
// console.log(true)

// Žodis: tree
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('t' === 't' && 'e' === 'p')
// console.log(true && false)
// console.log(false)

// Žodis: house
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('h' === 't' && 'u' === 'p')
// console.log(false && false)
// console.log(false)

if (firstLetter === 't' && thirdLetter === 'p') {
  console.log(`Žodis ${word} prasideda raide t ir trečia raidė yra p`)
} else {
  console.log(`Žodis ${word} neprasideda raide t arba trečia raidė nėra p`)
}


// OR operator - ||

// Žodis: tips
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('t' === 't' && 'p' === 'p')
// console.log(true && true)
// console.log(true)

// Žodis: tree
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('t' === 't' && 'e' === 'p')
// console.log(true && false)
// console.log(true)

// Žodis: house
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('h' === 't' && 'u' === 'p')
// console.log(false && false)
// console.log(false)

if (firstLetter === 't' || firstLetter === 'h') {
  console.log(`Žodis ${word} prasideda raide t arba raide h`)
} else {
  console.log(`Žodis ${word} neprasideda raide t arba h`)
}


let personAge = 17

if (personAge >= 18) {
  console.log('Pirkti bilieta galima')
} else {
  console.log('Pirkti bilieto negali')
}

if (personAge < 18) {
  console.log('Pirkti bilieto negali')
} else {
  console.log('Pirkti bilieta galima')
}


if (personAge > 17) {
  console.log('Pirkti bilieta galima')
} else {
  console.log('Pirkti bilieto negali')
}

if (personAge <= 17) {
  console.log('Pirkti bilieto negali')
} else {
  console.log('Pirkti bilieta galima')
}




personAge = 17

// if (personAge < 16) {
//   console.log('Pirkti bilieto negali')
// } else if (personAge >= 16 && personAge < 18) {
//   console.log('Gali pirkti su tevu sutikimu')
// } else if (personAge >= 18) {
//   console.log('Pirkti bilieta galima')
// }

if (personAge < 16) {
  console.log('Pirkti bilieto negali')
} else if (personAge < 18) {
  console.log('Gali pirkti su tevu sutikimu')
} else {
  console.log('Pirkti bilieta galima')
}

if (personAge >= 18) {
  console.log('Pirkti bilieta galima')
} else if (personAge >= 16) {
  console.log('Gali pirkti su tevu sutikimu')
} else {
  console.log('Pirkti bilieto negali')
}


// Nesting

personAge = 16

if (personAge >= 16) {

  if (personAge >= 18) {
    console.log('Pirkti bilieta galima')
  } else {
    console.log('Gali pirkti su tevu sutikimu')
  }

} else {
  console.log('Pirkti bilieto negali')
}