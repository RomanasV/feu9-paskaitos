import { getPosts } from './getData.js'

export default async function postsList() {
  const posts = await getPosts()

  const postsWrapper = document.createElement('div')
  postsWrapper.classList.add('posts-wrapper')

  const sectionTitle = document.createElement('h2')
  sectionTitle.textContent = 'Posts:'

  const postsListElement = document.createElement('ul')
  postsListElement.classList.add('posts-list')

  posts.forEach(post => {
    const userName = post.user.name

    const postItem = document.createElement('li')
    const postLink = document.createElement('a')
    postLink.textContent = `${post.id}. ${post.title} - ${userName}` 
    postLink.href = './post.html?post_id=' + post.id

    postItem.append(postLink)

    postsListElement.append(postItem)
  })

  postsWrapper.append(sectionTitle, postsListElement)

  return postsWrapper
}