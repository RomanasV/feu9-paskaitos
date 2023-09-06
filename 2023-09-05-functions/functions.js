function checkPassword(originalPassword) {
  let password = originalPassword.trim()
  let passwordLength = password.length
  
  let output = ''

  if (!password.includes('#')) {
    output = 'Slaptažodis privalo turėti grotažymes'
  } else if (passwordLength < 16) {
    output = 'Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.'
  } else if (passwordLength < 21) {
    output = 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.'
  } else {
    output = 'Slaptažodis tinkamas'
  }
  
  return output
  
  console.log('gsdjgdkjfg')
}

console.log(checkPassword('afjhslfksjdlkfsdgj'))
// alert(checkPassword('afjhslfksj#dlkfsdgj'))
// document.querySelector('h1').textContent = checkPassword('gskjfksdjhfkljdfkj')
// let passwordAnswer = 'Slaptažodžio statusas: ' + checkPassword('sjkfkdjfg')
// console.log(passwordAnswer)






function checkAge(age) {
  let output = ''

  if (isNaN(age)) {
    output = 'Netinkamai nurodytas amžius, amžius privalo būti skaičius.'
  } else if (age < 0) {
    output = 'Įvestas amžius yra per mažas'
  } else if (age < 6) {
    output = 'Į mokyklą neina'
  } else if (age < 7) {
    output = 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.'
  } else if (age < 10) {
    output = 'Pradinukas'
  } else if (age < 11) {
    output = 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.'
  } else if (age < 14) {
    output = 'Pagrindinė'
  } else if (age < 15) {
    output = 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.'
  } else if (age < 18) {
    output = 'Gimnazija'
  } else if (age < 19) {
    output = 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.'
  } else if (age < 120) {
    output = 'Mokyklą baigė'
  } else {
    output = 'Įvestas amžius yra per didelis'
  } 

  return output
}

// console.log(checkAge(15))
// document.querySelector('h1').textContent = checkAge(100)
// console.log(checkAge('labas'))



function firstGameLevel() {
  let correctAnswer1 = 'sun'
  let correctAnswer2 = 579

  let playerAnswer1 = prompt('Arčiausiai Žemės esanti žvaigždė')
  let playerAnswer2 = prompt('123 + 456?')
  
  if (correctAnswer1 == playerAnswer1 && correctAnswer2 == playerAnswer2) {
    alert('Patekai i kita lygi: abu atsakymai teisingi.')
    secondGameLevel()
  } else if (correctAnswer2 == playerAnswer2) {
    alert('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
    secondGameLevel()
  } else if (correctAnswer1 == playerAnswer1) {
    alert('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
    secondGameLevel()
  } else {
    alert('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
  }
}

// firstGameLevel()

function secondGameLevel() {
  let correctAnswer1 = 1
  let correctAnswer2 = 1

  let playerAnswer1 = prompt('Antras lygis, pirmas klausimas')
  let playerAnswer2 = prompt('Antras lygis, antras klausimas')
  
  if (correctAnswer1 == playerAnswer1 && correctAnswer2 == playerAnswer2) {
    alert('Patekai i kita lygi: abu atsakymai teisingi.')
    thirdGameLevel()
  } else if (correctAnswer2 == playerAnswer2) {
    alert('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
  } else if (correctAnswer1 == playerAnswer1) {
    alert('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
  } else {
    alert('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
  }
}

function thirdGameLevel() {
  let correctAnswer1 = 1
  let correctAnswer2 = 1
  let correctAnswer3 = 1

  let playerAnswer1 = prompt('Trečias lygis, pirmas klausimas')
  let playerAnswer2 = prompt('Trečias lygis, antras klausimas')
  let playerAnswer3 = prompt('Trečias lygis, trečias klausimas')

  let answer1 = correctAnswer1 == playerAnswer1
  let answer2 = correctAnswer2 == playerAnswer2
  let answer3 = correctAnswer3 == playerAnswer3

  let output = ''

  if (answer1 && answer2 && answer3) {
    output = 'Patekai: visi teisingi'
  } else if (answer1 && answer2) {
    output = 'Patekai: bet trečias neteisingas'
  } else if (answer1 && answer3) {
    output = 'Patekai: bet antras neteisingas'
  } else if (answer2 && answer3) {
    output = 'Patekai: bet pirmas neteisingas'
  } else if (answer1) {
    output = 'Nepatekai: bet pirmas teisingas'
  } else if (answer2) {
    output = 'Nepatekai: bet antras teisingas'
  } else if (answer3) {
    output = 'Nepatekai: bet trečias teisingas'
  } else {
    output = 'Nepatekai: visi neteisingi :('
  }

  alert(output)
}

function greeting(time, isLoggedIn = false, userName = '', isBirthday = false) {
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
  
  return greetingOutput
}

// console.log(greeting(20, true, 'John', true))
// document.querySelector('h1').textContent = greeting(14)