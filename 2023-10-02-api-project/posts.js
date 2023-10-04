import { getPosts } from './getData.js'
import postsList from './postsList.js'
import header from './header.js'

async function init() {
  const contentElement = document.querySelector('#content')

  const posts = await getPosts('?_limit=25&_expand=user')

  const headerElement = header()
  const postsListElement = postsList(posts)
  
  contentElement.append(headerElement, postsListElement)
}

init()

