async function init() {
  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams)
  const albumId = urlParams.get('album_id')

  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`)
  const album = await res.json()
  
  console.log(album)
  console.log(album.title)
  
  console.log(album.user)
  console.log(album.user.name)
  console.log(`./user.html?user_id=${album.userId}`)
  
  console.log(album.photos)

  album.photos.forEach(photo => {
    console.log(photo)
    console.log(photo.thumbnailUrl)
    console.log(photo.title)

    const image = document.createElement('img')
    image.src = photo.thumbnailUrl
    image.alt = photo.title

    console.log(image)
  })
}

init()