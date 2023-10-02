async function init() {
  const posts = await getPosts()
  const users = await getUsers()
  
  const contentElement = document.querySelector('#content')

  const postsWrapper = document.createElement('div')
  postsWrapper.classList.add('posts-wrapper')

  const sectionTitle = document.createElement('h2')
  sectionTitle.textContent = 'Posts:'

  const postsList = document.createElement('ul')
  postsList.classList.add('posts-list')

  posts.forEach(post => {
    const userName = post.user.name

    const postItem = document.createElement('li')
    const postLink = document.createElement('a')
    postLink.textContent = `${post.id}. ${post.title} - ${userName}` 
    postLink.href = './post.html?post_id=' + post.id

    postItem.append(postLink)

    postsList.append(postItem)
  })

  postsWrapper.append(sectionTitle, postsList)
  
  contentElement.append(postsWrapper)
}

init()

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50&_start=5&_expand=user')
  const posts = await res.json()

  return posts
}

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users = await res.json()

  return users
}