import header from './header.js'

async function init() {
  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams)
  const albumId = urlParams.get('album_id')

  const contentElement = document.querySelector('#content')

  const headerElement = header()

  contentElement.append(headerElement)

  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`)
  const album = await res.json()
  
  const albumTitle = document.createElement('h1')
  albumTitle.textContent = album.title

  const albumAuthor = document.createElement('span')
  albumAuthor.innerHTML = `Created by: <a href="./user.html?user_id=${album.userId}">${album.user.name}</a>`

  const photosList = document.createElement('div')
  photosList.classList.add('photos-list')

  album.photos.forEach(photo => {
    const image = document.createElement('img')
    image.src = photo.thumbnailUrl
    image.alt = photo.title

    photosList.append(image)
  })

  contentElement.append(albumTitle, albumAuthor, photosList)
}

init()