fetch('movies.json')
  .then(response => response.json())
  .then(movies => {
    const moviesList = document.querySelector('#movies-list')
    
    movies.forEach(movie => {
      const movieItem = document.createElement('div')
      movieItem.classList.add('movie-item')

      moviesList.append(movieItem)

      const movieTitle = document.createElement('h2')
      movieTitle.classList.add('movie-title')
      movieTitle.textContent = `${movie.name} (${movie.releaseDate})`

      const ratingElement = document.createElement('span')
      ratingElement.textContent = `Rating: ${movie.ratings.rate} / ${movie.ratings.rated}`

      const aboutElement = document.createElement('p')
      aboutElement.textContent = movie.about

      const actorsWrapper = renderList(movie.actors, 'Actors')
      const genresWrapper = renderList(movie.genres, 'Genres')
      const producersWrapper = renderList(movie.producers, 'Producers')

      movieItem.append(movieTitle, ratingElement, aboutElement, actorsWrapper, genresWrapper, producersWrapper)
    })
  })

function renderList(list, title) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const wrapperTitle = document.createElement('h3')
  wrapperTitle.textContent = title + ':'

  const listElement = document.createElement('ul')

  list.forEach(item => {
    const itemElement = document.createElement('li')
    itemElement.textContent = item
    listElement.append(itemElement)
  })

  wrapper.append(wrapperTitle, listElement)

  return wrapper
}