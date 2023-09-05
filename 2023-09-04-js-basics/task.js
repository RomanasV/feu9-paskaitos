// SLAPTAŽODIS

// SLAPTAŽODIS:
// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."
// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"


let originalPassword = 'fs#'
let password = originalPassword.trim()
let passwordLength = password.length

// if (passwordLength < 16) {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
// } else if (passwordLength > 15) {
//   if (passwordLength > 20) {
//     console.log('Slaptažodis tinkamas')
//   } else {
//     console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
//   }
// }

// if (passwordLength < 16) {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
// } else {
//   if (passwordLength >= 21) {
//     console.log('Slaptažodis tinkamas')
//   } else {
//     console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
//   }
// }

if (!password.includes('#')) {
  console.log('Slaptažodis privalo turėti grotažymes')
} else if (passwordLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
} else if (passwordLength < 21) {
  console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
} else {
  console.log('Slaptažodis tinkamas')
}



// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.4. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."

// 9. Panaudoti prompt funkciją amžiui įvesti.

// AMŽIUS
// let age = prompt('Iveskite savo amziu')
let age = 100
// console.log(age)

// if (age < 7) {
//   console.log('Į mokyklą neina')
// } else if (age >= 7 && age < 11) {
//   console.log('Pradinukas')
// } else if (age >= 11 && age < 15) {
//   console.log('Pagrindinė')
// } else if (age >= 15 && age < 19) {
//   console.log('Gimnazija')
// } else if (age >= 19) {
//   console.log('Mokyklą baigė')
// } else {
//   console.log('Nurodytas amžius nėra tinkamas')
// }


// if (age < 0) {
//   console.log('Įvestas amžius yra per mažas')
// } else if (age < 7) {
//   if (age === 6) {
//     console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
//   } else {
//     console.log('Į mokyklą neina')
//   }
// } else if (age < 11) {
//   console.log('Pradinukas')
// } else if (age < 15) {
//   console.log('Pagrindinė')
// } else if (age < 19) {
//   console.log('Gimnazija')
// } else if (age < 120) {
//   console.log('Mokyklą baigė')
// } else {
//   console.log('Įvestas amžius yra per didelis')
// } 

// age = prompt('Įvesti amžių')
age = 15

if (isNaN(age)) {
  console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
} else if (age < 0) {
  console.log('Įvestas amžius yra per mažas')
} else if (age < 6) {
  console.log('Į mokyklą neina')
} else if (age < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (age < 10) {
  console.log('Pradinukas')
} else if (age < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (age < 14) {
  console.log('Pagrindinė')
} else if (age < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (age < 18) {
  console.log('Gimnazija')
} else if (age < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (age < 120) {
  console.log('Mokyklą baigė')
} else {
  console.log('Įvestas amžius yra per didelis')
} 




























// ŽAIDIMAS

// Artimiausia nuo Žemės esanti Žvaigždė?
let correctAnswer11 = 'sun'
let playerAnswer11 = 'sun'

// 123 + 456 = 579
let correctAnswer12 = 579
let playerAnswer12 = 4546

// console.log(correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12)
// console.log(correctAnswer11 === playerAnswer11 || correctAnswer12 === playerAnswer12)


// PASISVEIKINIMAS
let isLoggedIn = false
let userName = 'John'
let time = 16
let isBirthday = false