// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears(humanYears) {
  let dogYears = humanYears * 7
  let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai.`
  return output
}

console.log(humanToDogYears(25))
console.log(humanToDogYears(10))