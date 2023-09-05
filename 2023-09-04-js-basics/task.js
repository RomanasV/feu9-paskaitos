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

// PIRMAS LYGIS
// Artimiausia nuo Žemės esanti Žvaigždė?
let correctAnswer11 = 'sun'
let playerAnswer11 = 'moon'

// 123 + 456 = 579
let correctAnswer12 = 579
let playerAnswer12 = 444

// if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
//   console.log('Patekai i kita lygi: abu atsakymai teisingi.')
// } else if (correctAnswer11 !== playerAnswer11 && correctAnswer12 === playerAnswer12) {
//   console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
// } else if (correctAnswer11 === playerAnswer11 && correctAnswer12 !== playerAnswer12) {
//   console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
// } else if (correctAnswer11 !== playerAnswer11 && correctAnswer12 !== playerAnswer12) {
//   console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
// }

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer12 === playerAnswer12) {
  console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (correctAnswer11 === playerAnswer11) {
  console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}



// ANTRAS LYGIS
let correctAnswer21 = 1
let correctAnswer22 = 1

let playerAnswer21 = 1
let playerAnswer22 = 1

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer22 === playerAnswer22) {
  console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (correctAnswer21 === playerAnswer21) {
  console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}


// TREČIAS LYGIS
let correctAnswer31 = 1
let correctAnswer32 = 1
let correctAnswer33 = 1

let playerAnswer31 = 0
let playerAnswer32 = 0
let playerAnswer33 = 0

// if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai: visi teisingi')
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
//   console.log('Patekai: bet trečias neteisingas')
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai: bet antras neteisingas')
// } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai: bet pirmas neteisingas')
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33) {
//   console.log('Nepatekai: bet pirmas teisingas')
// } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
//   console.log('Nepatekai: bet antras teisingas')
// } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Nepatekai: bet trečias teisingas')
// } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33) {
//   console.log('Nepatekai: visi neteisingi :(')
// }

let answer31 = correctAnswer31 === playerAnswer31
let answer32 = correctAnswer32 === playerAnswer32
let answer33 = correctAnswer33 === playerAnswer33

let output = ''

if (answer31 && answer32 && answer33) {
  output = 'Patekai: visi teisingi'
} else if (answer31 && answer32) {
  output = 'Patekai: bet trečias neteisingas'
} else if (answer31 && answer33) {
  output = 'Patekai: bet antras neteisingas'
} else if (answer32 && answer33) {
  output = 'Patekai: bet pirmas neteisingas'
} else if (answer31) {
  output = 'Nepatekai: bet pirmas teisingas'
} else if (answer32) {
  output = 'Nepatekai: bet antras teisingas'
} else if (answer33) {
  output = 'Nepatekai: bet trečias teisingas'
} else {
  output = 'Nepatekai: visi neteisingi :('
}

console.log(output)


// PASISVEIKINIMAS:
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

// PASISVEIKINIMAS
// let isLoggedIn = true
// let userName = 'John'
// let time = 4
// let isBirthday = true

// if (time >= 5 && time < 13) {

//   if (isLoggedIn) {
//     if (isBirthday) {
//       console.log('Good Morning, ' + userName + ' and have a great birthday!')
//     } else {
//       console.log('Good Morning, ' + userName)
//     }
//   } else {
//     console.log('Good Morning')
//   }

// } else if (time >= 13 && time < 19) {

//   if (isLoggedIn) {
//     if (isBirthday) {
//       console.log('Good Afternoon, ' + userName + ' and have a great birthday!')
//     } else {
//       console.log('Good Afternoon, ' + userName)
//     }
//   } else {
//     console.log('Good Afternoon')
//   }

// } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {

//   if (isLoggedIn) {
//     if (isBirthday) {
//       console.log('Good Evening, ' + userName + ' and have a great birthday!')
//     } else {
//       console.log('Good Evening, ' + userName)
//     }
//   } else {
//     console.log('Good Evening')
//   }

// } else {

//   if (isLoggedIn) {
//     if (isBirthday) {
//       console.log('Hello, ' + userName + ' and have a great birthday!')
//     } else {
//       console.log('Hello, ' + userName)
//     }
//   } else {
//     console.log('Hello')
//   }

// }

// let isLoggedIn = true
// let userName = 'John'
// let time = 220
// let isBirthday = false

// let greetingText = ''

// if (time >= 5 && time < 13) {
//   greetingText = 'Good Morning'
// } else if (time >= 13 && time < 19) {
//   greetingText = 'Good Afternoon'
// } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
//   greetingText = 'Good Evening'
// } else {
//   greetingText = 'Hello'
// }

// let nameText = ''
// if (isLoggedIn && userName) {
//   nameText = `, ${userName}`
// }

// let birthdayText = '.'
// if (isLoggedIn && isBirthday) {
//   birthdayText = ' and have a great birthday!'
// }

// let greetingOutput = greetingText + nameText + birthdayText

// console.log(greetingOutput)


let isLoggedIn = true
let userName = 'John'
let time = 220
let isBirthday = false

let greetingText = ''
let nameText = (isLoggedIn && userName) ? `, ${userName}` : ''
let birthdayText = (isLoggedIn && isBirthday) ? ' and have a great birthday!' : '.'

if (time >= 5 && time < 13) {
  greetingText = 'Good Morning'
} else if (time >= 13 && time < 19) {
  greetingText = 'Good Afternoon'
} else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
  greetingText = 'Good Evening'
} else {
  greetingText = 'Hello'
}

let greetingOutput = greetingText + nameText + birthdayText

console.log(greetingOutput)