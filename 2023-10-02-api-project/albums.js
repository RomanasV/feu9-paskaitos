import { getAlbums } from './getData.js'
import header from './header.js'

async function init() {
  const contentElement = document.querySelector('#content')

  const headerElement = header()
  
  const pageTitle = document.createElement('h1')
  pageTitle.textContent = 'Albums'

  const albumsList = document.createElement('div')
  albumsList.classList.add('albums-list')
  
  contentElement.append(headerElement, pageTitle, albumsList)

  const albums = await getAlbums('?_limit=25&_expand=user&_embed=photos')

  albums.forEach(album => {
    const albumItem = document.createElement('div')
    albumItem.classList.add('album-item')

    const albumLink = document.createElement('a')
    albumLink.href = `./album.html?album_id=${album.id}`

    const albumTitle = document.createElement('h2')
    albumTitle.textContent = `${album.title} (${album.photos.length})`

    const authorElement = document.createElement('span')
    authorElement.textContent = `Created by: ${album.user.name}`

    const albumImage = document.createElement('img')
    const randomImageIndex = Math.floor(Math.random() * album.photos.length)
    albumImage.src = album.photos[randomImageIndex].thumbnailUrl

    albumLink.append(albumTitle, authorElement, albumImage)
    albumItem.append(albumLink)
    albumsList.append(albumItem)
  })
}

init()