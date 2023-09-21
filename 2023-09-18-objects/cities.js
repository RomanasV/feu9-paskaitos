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
  console.log(cities)
  let citiesList = document.querySelector('#cities-list')

  cities.forEach((city) => {
    // 1.6. Visus miestų masyvų narius išvesti į konsolę.
    console.log(city)
    // 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
    console.log(city.name)
    // 1.6.2. Visų miestų populiaciją išvesti į konsolę.
    console.log(city.population)
    console.log(city.location)
    // 1.6.3. Visų miestų žemyną išvesti į konsolę.
    console.log(city.location.continent)
    // 1.6.4. Visų miestų šalį išvesti į konsolę.
    console.log(city.location.country)
    // 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
    console.log(city.isCapital)
    // 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.
    console.log(city.touristAttractions)

    city.touristAttractions.forEach((touristAttraction) => {
      console.log(touristAttraction)
    })

    let cityItem = document.createElement('div')
    cityItem.classList.add('city-item')
    citiesList.append(cityItem)
    
    let capitalDescriptionText = ''
    let capitalNameText = ''

    if (city.isCapital) {
      // 3.1. Jeigu miestas yra sostinė, tai:
      //  3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
      capitalNameText = ' (capital)'

      //  3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
      capitalDescriptionText = ` ${city.name} is the capital of ${city.location.country}.`
      
      //  3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".
      cityItem.classList.add('capital')
    }

    let cityNameElement = document.createElement('h2')
    cityNameElement.textContent = city.name + capitalNameText

    let cityDescriptionElement = document.createElement('p')
    cityDescriptionElement.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.${capitalDescriptionText}`

    cityItem.append(cityNameElement, cityDescriptionElement)

    // 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
    //  4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.
    if (city.touristAttractions.length > 0) {
      let touristAttractionsWrapper = document.createElement('div')
      touristAttractionsWrapper.classList.add('tourists-attractions-wrapper')
  
      let touristAttractionsTitle = document.createElement('h3')
      //  4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
      touristAttractionsTitle.textContent = `Main Tourist attractions of ${city.name} are:`

      //  4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
      if (city.touristAttractions.length === 1) {
        touristAttractionsTitle.textContent = `Main Tourist attraction of ${city.name} is:`
      }
  
      let touristAttractionsList = document.createElement('ul')
  
      city.touristAttractions.forEach((touristAttraction) => {
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