// console.log('- ' + 1)
// console.log('- ' + 2)
// console.log('- ' + 3)
// console.log('- ' + 4)
// console.log('- ' + 5)
// console.log('- ' + 6)
// console.log('- ' + 7)
// console.log('- ' + 8)
// console.log('- ' + 9)
// console.log('- ' + 10)
// console.log('- ' + 11)
// console.log('- ' + 12)
// console.log('- ' + 13)
// console.log('- ' + 14)
// console.log('- ' + 15)
// console.log('- ' + 16)
// console.log('- ' + 17)
// console.log('- ' + 18)
// console.log('- ' + 19)
// console.log('- ' + 20)

function count(num) {
  console.log('- ' + num + ' !!!')
}

// count(1)
// count(2)
// count(3)
// count(4)
// count(5)
// count(6)
// count(7)
// count(8)
// count(9)
// count(10)
// count(11)
// count(12)
// count(13)
// count(14)
// count(15)
// count(16)
// count(17)
// count(18)
// count(19)
// count(20)



// FOR CIKLAS (LOOP)
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės keitimas
// 3. Riestiniai skliaustai - {}

/*

  for (kintamasis; sąlyga; kintamojo keitimas) {

  }

*/

// for (let i = 1; i <= 20; i++) {
//   console.log(i)
// }

// for (let i = 0; i < 20; i++) {
//   console.log(i)
// }


// for (let i = 1; i <= 20; i++) {
//   count(i)
// }


// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:

// 1. Padaugina skaičių iš 2.
function task1(start = 1, end = 100, nth = 1) {
  if (nth <= 0) {
    console.log('Nth parametras privalo būti teigiamas skaičius')
    return
  }

  for (let i = start; i <= end; i += nth) {
    // console.log(i * 2)

    let answer = i * 2
    let output = `${i} * 2 = ${answer}`
    console.log(output)
  }
}

task1(35, 140, 0)

// 2. Padaugina skaičių iš 5.
function task2(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // console.log(i * 5)

    let answer = i * 5
    let output = `${i} * 5 = ${answer}`
    console.log(output)
  }
}

// task2()

// 3. Prideda prie skaičiaus 5.
function task3(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // console.log(i + 5)

    let answer = i + 5
    let output = `${i} + 5 = ${answer}`
    console.log(output)
  }
}

// task3()

// 4. Atima iš skaičiaus 2.
function task4(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // console.log(i - 2)

    let answer = i - 2
    let output = `${i} - 2 = ${answer}`
    console.log(output)
  }
}
// task4()

// 5. Pakelia skaičių kvadratu.
function task5(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // console.log(i * i)

    let answer = i * i
    let output = `${i}**2 = ${answer}`
    console.log(output)
  }
}

// task5()

// 6. Pakelia skaičių kūbu.
function task6(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // console.log(i * i * i)
    // console.log(Math.pow(i, 3))
    // console.log(i**3)

    let answer = i * i
    let output = `${i}**3 = ${answer}`
    console.log(output)
  }
}

// task6()



// 1. Padaugina skaičių iš 2.
function task7(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    console.log(i * 2)
  }
}

// task7()

// 2. Padaugina skaičių iš 5.
function task8(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    console.log(i * 5)
  }
}

// task8()

// 3. Prideda prie skaičiaus 5.
function task9(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    console.log(i + 5)
  }
}

// task9()

// 4. Atima iš skaičiaus 2.
function task10(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    console.log(i - 2)
  }
}
// task10()

// 5. Pakelia skaičių kvadratu.
function task11(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    console.log(i * i)
  }
}

// task11()

// 6. Pakelia skaičių kūbu.
function task12(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    // console.log(i * i * i)
    // console.log(Math.pow(i, 3))
    console.log(i**3)
  }
}

// task12()




function multiply(multiplier = 2, start = 1, end = 100, nth = 1) {
  if (nth <= 0) {
    console.log('Nth parametras privalo būti teigiamas skaičius')
    return
  }

  for (let i = start; i <= end; i += nth) {
    let answer = i * multiplier
    let output = `${i} * ${multiplier} = ${answer}`
    console.log(output)
  }
}

// multiply(4)


function add(number = 2, start = 1, end = 100, nth = 1) {
  if (nth <= 0) {
    console.log('Nth parametras privalo būti teigiamas skaičius')
    return
  }

  let symbol = '+'
  let addNumber = number

  if (number < 0) {
    symbol = '-'
    addNumber = number * -1
  }

  for (let i = start; i <= end; i += nth) {
    let answer = i + number
    let output = `${i} ${symbol} ${addNumber} = ${answer}`
    console.log(output)
  }
}

add(100, 1, 100, 10)