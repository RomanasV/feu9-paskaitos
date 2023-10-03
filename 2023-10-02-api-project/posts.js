import { getPosts } from './getData.js'
import postsList from './postsList.js'

async function init() {
  const contentElement = document.querySelector('#content')

  const posts = await getPosts('?_limit=25&_expand=user')

  const postsListElement = postsList(posts)
  
  contentElement.append(postsListElement)
}

init()

