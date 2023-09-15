// Masyvai / Arrays
let numsArray = [5, 500, -5, 57.5, 4543, 'du']
//  Indeksai     0   1    2   3      4     5

console.log(numsArray)
console.log(numsArray.length)

// Masyvo narių pasiekimas
// console.log(numsArray[0])
// console.log(numsArray[1])
// console.log(numsArray[2])
// console.log(numsArray[3])
// console.log(numsArray[4])
// console.log(numsArray[5])

for (let i = 0; i < numsArray.length; i++) {
  console.log(numsArray[i])
}

let newArr = ['Vienas', 'Du', 'Du su puse', 5, true, [1, 2, 5]];
//               0       1         2        3    4       5
//                                                    0  1  2

console.log(newArr)
console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])
console.log(newArr[3])
console.log(newArr[4])
// console.log(newArr[5])
// console.log(newArr[5][0])
// console.log(newArr[5][1])
// console.log(newArr[5][2])

console.log(newArr[1])
newArr[1] = 2
newArr[newArr.length] = 444

console.log(newArr)
console.log(typeof newArr)

let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
console.log(cities)

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

// pop() metodas - pašalina paskutinį masyvo narį.
let lastCity = cities.pop()
console.log(lastCity)

cities.pop()
console.log(cities)

// shift() metodas - pašalina pirmą masyvo narį.
let firstCity = cities.shift()
console.log(firstCity)

cities.shift()
console.log(cities)

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.
let updatedCitiesLength = cities.push('Vilnius')
console.log(updatedCitiesLength)

cities.push('Šiauliai')
cities.push('Kaunas', 'Panevėžys')
console.log(cities)

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
let updatedCitiesLength2 = cities.unshift('Nida')
console.log(updatedCitiesLength2)

cities.unshift('Tauragė', 'Palanga')

console.log(cities)



let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index              0          1         2          3         4         5
// Slice (+)    0           1         2         3         4          5        6
// Slice (-)   -6          -5        -4        -3        -2         -1        

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log('------------SLICE-------------')
console.log(countries)

let slicedCountries1 = countries.slice()
console.log(slicedCountries1)

let slicedCountries2 = countries.slice(0)
console.log(slicedCountries2)

let slicedCountries3 = countries.slice(2)
console.log(slicedCountries3)

let slicedCountries4 = countries.slice(2, 4)
console.log(slicedCountries4)

let slicedCountries5 = countries.slice(0, 3)
console.log(slicedCountries5)

let slicedCountries6 = countries.slice(-4)
console.log(slicedCountries6)

let slicedCountries7 = countries.slice(-4, -2)
console.log(slicedCountries7)

let slicedCountries8 = countries.slice(-4, 2)
console.log(slicedCountries8)

let slicedCountries9 = countries.slice(-3, 2)
console.log(slicedCountries9)

let slicedCountries10 = countries.slice(2, -2)
console.log(slicedCountries10)

let slicedCountries11 = countries.slice(-2, -4)
console.log(slicedCountries11)

let slicedCountries12 = countries.slice(4, 2)
console.log(slicedCountries12)

// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [  1  ,   2  ,   3  ,   4  ,   5  ,   6  ,   7  ,   10];
//         0     1      2      3      4      5      6      7     8
//        -8    -7     -6     -5     -4     -3     -2     -1

console.log(nums)

// let splicedNums = nums.splice(2)
// let splicedNums = nums.splice(0, 2)
// let splicedNums = nums.splice(2, 1)
// let splicedNums = nums.splice(2, 3)
// let splicedNums = nums.splice(-1)
// let splicedNums = nums.splice(-3, 2)
// let splicedNums = nums.splice(-3, 2, 2)
// let splicedNums = nums.splice(3, 2, 'Trys')
// let splicedNums = nums.splice(2, 1, 2.5)
// let splicedNums = nums.splice(2, 0, 2.5)
let splicedNums = nums.splice(2, 0, 2.5, 2.8, 2.9)

console.log(splicedNums)
console.log(nums)


let arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(arr)

let firstArrPart = arr.slice(2, 7)
let secondArrPart = arr.slice(-7, -3)

console.log(firstArrPart)
console.log(secondArrPart)

// let mergedArr = firstArrPart.concat(secondArrPart)
// let mergedArr = [firstArrPart, secondArrPart].flat()
let mergedArr = [...firstArrPart, ...secondArrPart]

console.log(mergedArr)



// FILTER

let originalNums = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(originalNums);

// originalNums.filter(function(element, index, array) {
//   console.log(element)
//   console.log(index)
//   console.log(array)
// })

let filteredNums = originalNums.filter(function(num) {
  return num > 5
})
console.log(filteredNums)

let filteredNums2 = originalNums.filter(function(num) {
  return num > 4 && num <= 8
})
console.log(filteredNums2)

let filteredNums3 = originalNums.filter(function(num) {
  return num > 4 && num <= 8 && num % 2 === 0
})
console.log(filteredNums3)

let filteredNums4 = originalNums.filter(function(num) {
  if (num > 4 && num <= 8 && num % 2 === 0) {
    return true
  } else {
    return false
  }
})
console.log(filteredNums4)


// MAP
let numsArr = [1, 4, 9, 12]

for (let i = 0; i < numsArr.length; i++) {
  console.log('Index: ' + i)
  console.log('For ciklas: ' + numsArr[i])
  console.log('Original Array: ', numsArr)
}

numsArr.map(function(num, index, originalArr) {
  console.log('Index: ' + index)
  console.log('Map ciklas: ' + num)
  console.log('Original Array: ', originalArr)
})

// FOREACH

numsArr.forEach(function(num, index, originalArr) {
  console.log('Index: ' + index)
  console.log('forEach ciklas: ' + num)
  console.log('Original Array: ', originalArr)
})

// Map - grąžina reikšmę
// forEach - negrąžina reikšmės

let mapNums = numsArr.map(function(num) {
  return 'Atsakymas: ' + num * num
}).reverse()

console.log(mapNums)

let forEachNums = numsArr.forEach(function(num) {
  return 'Atsakymas: ' + num * num
})

console.log(forEachNums)
