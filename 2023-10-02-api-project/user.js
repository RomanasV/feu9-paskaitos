import header from './header.js'
import postsList from './postsList.js'

async function init() {
  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams)
  const userId = urlParams.get('user_id')

  const contentElement = document.querySelector('#content')

  const headerElement = header()

  contentElement.append(headerElement)

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
  const user = await res.json()
  
  const pageTitle = document.createElement('h1')
  pageTitle.textContent = user.name

  const userParagraph = document.createElement('p')
  userParagraph.innerHTML = `Email: ${user.email}, phone: ${user.phone}`

  const postsListElement = postsList(user.posts)
  

  const albumsWrapper = document.createElement('div')
  albumsWrapper.classList.add('albums-wrapper')

  const albumsTitle = document.createElement('h2')
  albumsTitle.textContent = 'Albums:'

  const albumsList = document.createElement('ul')
  albumsList.classList.add('albums-list')

  albumsWrapper.append(albumsTitle, albumsList)

  user.albums.forEach(album => {
    const albumItem = document.createElement('li')
    const albumLink = document.createElement('a')
    albumLink.textContent = album.title
    albumLink.href = `./album.html?album_id=${album.id}`

    albumItem.append(albumLink)
    albumsList.append(albumItem)
  })

  contentElement.append(pageTitle, userParagraph, postsListElement, albumsWrapper)
}

init()