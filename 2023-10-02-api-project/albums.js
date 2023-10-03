import { getAlbums } from './getData.js'

async function init() {
  const albums = await getAlbums('?_limit=25&_expand=user&_embed=photos')

  console.log(albums)
  albums.forEach(album => {
    console.log(album)
    console.log(album.title)
    console.log(`./album.html?album_id=${album.id}`)
    
    console.log(album.user)
    console.log(album.user.name)

    console.log(album.photos)
    console.log(album.photos.length)

    console.log(Math.floor(Math.random() * album.photos.length))

    console.log(album.photos[0])
    console.log(album.photos[0].url)
  })
}

init()