function init() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      const breeds = data.message
      console.log(breeds)

      // for ..in ciklas
      // for (const key in breeds) {
      //   const mainBreed = key
      //   const subBreed = breeds[key]

      //   console.log(mainBreed, subBreed)
      // }

      // Object.keys() ir Object.values() metodai
      // const breedKeys = Object.keys(breeds)
      // const breedValues = Object.values(breeds)

      // console.log(breedKeys)
      // console.log(breedValues)

      // breedKeys.forEach((mainBreed, index) => {
      //   const subBreeds = breedValues[index]
      //   console.log(mainBreed, subBreeds)
      // })

      // Object.entries() metodas
      const breedEntries = Object.entries(breeds)
      console.log(breedEntries)

      breedEntries.forEach(entry => {
        const mainBreed = entry[0]
        const subBreeds = entry[1]

        console.log(mainBreed, subBreeds)
      })
    })
}

init()