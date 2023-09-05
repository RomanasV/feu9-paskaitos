// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// console.log('Perimetras: ' + (10 + 10) * 2 + ' cm.')
// console.log('Perimetras: ' + (10 + 25) * 2 + ' cm.')
// console.log('Perimetras: ' + (10 + 30) * 2 + ' cm.')
// console.log('Perimetras: ' + (10 + 35) * 2 + ' cm.')
// console.log('Perimetras: ' + (10 + 40) * 2 + ' cm.')
// console.log('Perimetras: ' + (10 + 45) * 2 + ' cm.')
// console.log('Perimetras: ' + (10 + 50) * 2 + ' cm.')
// console.log('Perimetras: ' + (10 + 55) * 2 + ' cm.')
// console.log('Perimetras: ' + (10 + 60) * 2 + ' cm.')
// console.log('Perimetras: ' + (10 + 120) * 2 + ' cm.')

// DRY - Don't Repeat Yourself

// FUNKCIJOS

// Funkcijos sukūrimas:
// 1. Iniciavimo žodelis (function)
// 2. Pavadinimas
// 3. Paprasti skliaustai () - funkcijos parametrams
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas

function hello() {
  console.log('Hello, John!')
}

// Funkcijos iškvietimas:
// 1. Funkcijos pavadinimas
// 2. Paprasti skliaustai ()

hello()


function helloWithName(personName) {
  console.log(`Hello, ${personName}.`)
}

helloWithName('John')
helloWithName('Steve')
helloWithName('Peter')

function getPerimeter(height, width, units = 'vnt') {
  // let unitsText = 'vnt'

  // if (units) {
  //   unitsText = units
  // }

  // let unitsText = units ? units : 'vnt'

  let perimeter = (height + width) * 2
  let output = `Perimeter: ${perimeter} ${units}.`
  console.log(output)
}

getPerimeter(10, 10)
getPerimeter(10, 25, 'cm')
getPerimeter(10, 30, 'm')
getPerimeter(10, 35)
getPerimeter(10, 45, 'km')
getPerimeter(10, 55, 'dm')