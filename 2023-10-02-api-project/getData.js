export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50&_start=5&_expand=user')
  const posts = await res.json()

  return posts
}

export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users = await res.json()

  return users
}