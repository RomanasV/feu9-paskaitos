export async function getPosts(params = '') {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts' + params)
  const posts = await res.json()

  return posts
}

export async function getUsers(params = '') {
  const res = await fetch('https://jsonplaceholder.typicode.com/users' + params)
  const users = await res.json()

  return users
}

export async function getAlbums(params = '') {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums' + params)
  const albums = await res.json()

  return albums
}

export async function fetchData(endpoint, params = '') {
  if (!endpoint) {
    return
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/' + endpoint + params)
  const data = await res.json()

  return data
}

