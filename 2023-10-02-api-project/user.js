async function init() {
  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams)
  const userId = urlParams.get('user_id')

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
  const user = await res.json()

  console.log(user)
  console.log(user.name)
  console.log(user.email)
  console.log(user.posts)

  user.posts.forEach(post => {
    console.log(post)
    console.log(post.title)
    console.log(`./post.html?post_id=${post.id}`)
  })

  console.log(user.albums)
  
  user.albums.forEach(album => {
    console.log(album)
    console.log(album.title)
    console.log(`./album.html?album_id=${album.id}`)
  })
}

init()