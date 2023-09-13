/*

+ 3 5 7 9
+ 3 5 9
+ 5 7 9
+ 3 5 7
+ 3 5 
+ 3 7
+ 5 7
+ 3 9
+ 5 9
+ 7 9
+ 3
+ 5
+ 7
+ 9

*/


function fizzBuzz1() {
  for (let i = 1; i <= 500; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      console.log('FizzBuzzBiffFuzz')
    } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
      console.log('FizzBuzzFuzz')
    } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      console.log('BuzzBiffFuzz')
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log('FizzBuzzBiff')
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log('FizzBiff')
    } else if (i % 3 === 0 && i % 9 === 0) {
      console.log('FizzFuzz')
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log('BuzzBiff')
    } else if (i % 5 === 0 && i % 9 === 0) {
      console.log('BuzzFuzz')
    } else if (i % 7 === 0 && i % 9 === 0) {
      console.log('BiffFuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else if (i % 7 === 0) {
      console.log('Biff')
    } else if (i % 9 === 0) {
      console.log('Fuzz')
    } else {
      console.log(i)
    }
  }
}

// fizzBuzz1()


function fizzBuzz2() {
  for (let i = 1; i <= 500; i++) {
    let output = ''

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      output = 'FizzBuzzBiffFuzz'
    } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
      output = 'FizzBuzzFuzz'
    } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      output = 'BuzzBiffFuzz'
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      output = 'FizzBuzzBiff'
    } else if (i % 3 === 0 && i % 5 === 0) {
      output = 'FizzBuzz'
    } else if (i % 3 === 0 && i % 7 === 0) {
      output = 'FizzBiff'
    } else if (i % 3 === 0 && i % 9 === 0) {
      output = 'FizzFuzz'
    } else if (i % 5 === 0 && i % 7 === 0) {
      output = 'BuzzBiff'
    } else if (i % 5 === 0 && i % 9 === 0) {
      output = 'BuzzFuzz'
    } else if (i % 7 === 0 && i % 9 === 0) {
      output = 'BiffFuzz'
    } else if (i % 3 === 0) {
      output = 'Fizz'
    } else if (i % 5 === 0) {
      output = 'Buzz'
    } else if (i % 7 === 0) {
      output = 'Biff'
    } else if (i % 9 === 0) {
      output = 'Fuzz'
    } else {
      output = i
    }

    console.log(output)
  }
}

// fizzBuzz2()


function fizzBuzz3() {
  for (let i = 1; i <= 500; i++) {
    let output = ''

    if (i % 3 === 0) {
      output += 'Fizz'
    }

    if (i % 5 === 0) {
      output += 'Buzz'
    }

    if (i % 7 === 0) {
      output += 'Biff'
    }

    if (i % 9 === 0) {
      output += 'Fuzz'
    }

    if (i % 11 === 0) {
      output += 'Bizz'
    } 

    if (i % 13 === 0) {
      output += 'Labas'
    } 

    if (!output) {
      output = i
    }

    console.log(output)
  }
}

// fizzBuzz3()


function fizzBuzz4() {
  for (let i = 1; i <= 500; i++) {
    let output = ''

    if (i % 3 === 0) output += 'Fizz'
    if (i % 5 === 0) output += 'Buzz'
    if (i % 7 === 0) output += 'Biff'
    if (i % 9 === 0) output += 'Fuzz'
    if (i % 11 === 0) output += 'Bizz'
    if (i % 13 === 0) output += 'Labas'
    if (i % 15 === 0) output += 'Sveikas'
    if (i % 18 === 0) output += 'Hello'

    if (!output) output = i

    console.log(output)
  }
}

fizzBuzz4()