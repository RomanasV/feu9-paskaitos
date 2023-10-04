import { getPosts } from './getData.js'
import header from './header.js'
import postsList from './postsList.js'

async function init() {
  const contentElement = document.querySelector('#content')
  
  const posts = await getPosts('?_limit=50&_start=5&_expand=user')

  const headerElement = header()
  const postsListElement = postsList(posts)
  
  contentElement.append(headerElement, postsListElement)
}

init()

