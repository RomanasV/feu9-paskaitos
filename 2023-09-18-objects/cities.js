// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

let citiesData = [
  {
      name: 'Vilnius',
      population: 500000,
      location: {
          continent: 'Europe',
          country: 'Lietuva',
      },
      touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
      isCapital: true,
  },
  {
      name: 'New York',
      population: 8500000,
      location: {
          continent: 'North America',
          country: 'United States',
      },
      touristAttractions: [],
      isCapital: false,
  },
  {
      name: 'Tokyo',
      population: 14000000,
      location: {
          continent: 'Asia',
          country: 'Japan',
      },
      touristAttractions: ['Sensō-ji'],
      isCapital: true,
  },
  {
      name: 'Amsterdam',
      population: 1400000,
      location: {
          continent: 'Europe',
          country: 'Netherlands',
      },
      touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
      isCapital: true,
  },
  {
      name: 'Monaco',
      population: 40000,
      location: {
          continent: 'Europe',
          country: 'Monaco',
      },
      touristAttractions: [],
      isCapital: true,
  },
  {
      name: 'Havana',
      population: 2400000,
      location: {
          continent: 'North America',
          country: 'Cuba',
      },
      touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
      isCapital: true,
  },
  {
      name: 'Singapore',
      population: 5600000,
      location: {
          continent: 'Asia',
          country: 'Singapore',
      },
      touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
      isCapital: true,
  },
  {
      name: 'Melbourne',
      population: 5000000,
      location: {
          continent: 'Australia',
          country: 'Australia',
      },
      touristAttractions: ['Melbourne Skydeck'],
      isCapital: false,
  },
  {
      name: 'Sapporo',
      population: 1900000,
      location: {
          continent: 'Asia',
          country: 'Japan',
      },
      touristAttractions: ['Hokkaido Jingu'],
      isCapital: false,
  },
  {
      name: 'Miami',
      population: 400000,
      location: {
          continent: 'North America',
          country: 'United States',
      },
      touristAttractions: ['Miami Zoo', 'Ocean drive', 'Little Havana', 'Vizcaya Museum & Gardens'],
      isCapital: false,
  },
];

function renderCities(cities) {
  let citiesList = document.querySelector('#cities-list')

  cities.forEach(city => {
    // let name = city.name
    // let population = city.population
    // let isCapital = city.isCapital
    // let touristAttractions = city.touristAttractions

    let { name, population, isCapital, touristAttractions } = city

    // let continent = city.location.continent
    // let country = city.location.country

    let { continent, country } = city.location

    let cityItem = document.createElement('div')
    cityItem.classList.add('city-item')
    citiesList.append(cityItem)
    
    let capitalDescriptionText = ''
    let capitalNameText = ''

    if (isCapital) {
      capitalNameText = ' (capital)'
      capitalDescriptionText = ` ${name} is the capital of ${country}.`
      cityItem.classList.add('capital')
    }

    let cityNameElement = document.createElement('h2')
    cityNameElement.textContent = name + capitalNameText

    let cityDescriptionElement = document.createElement('p')
    cityDescriptionElement.textContent = `${name} city is located in ${continent}, ${country} and has population of ${population} people.${capitalDescriptionText}`

    cityItem.append(cityNameElement, cityDescriptionElement)

    if (touristAttractions.length > 0) {
      let touristAttractionsWrapper = document.createElement('div')
      touristAttractionsWrapper.classList.add('tourists-attractions-wrapper')
  
      let touristAttractionsTitle = document.createElement('h3')
      touristAttractionsTitle.textContent = `Main Tourist attractions of ${name} are:`

      if (touristAttractions.length === 1) {
        touristAttractionsTitle.textContent = `Main Tourist attraction of ${name} is:`
      }
  
      let touristAttractionsList = document.createElement('ul')
  
      touristAttractions.forEach(touristAttraction => {
        let touristAttractionItem = document.createElement('li')
        touristAttractionItem.textContent = touristAttraction
  
        touristAttractionsList.append(touristAttractionItem)
      })
  
      touristAttractionsWrapper.append(touristAttractionsTitle, touristAttractionsList)

      cityItem.append(touristAttractionsWrapper)
    }
  })
}

renderCities(citiesData)


//  2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.

// 5. Naudojant tik JavaScript:
//  5.1. Pakeisti visų sostinių teksto spalvą.
//  5.2. Pakeisti kas antro miesto fono spalvą.
 
//  5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
//  5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.

// 6. Miestų plotis turi būti 50%.
// 6.1. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%.