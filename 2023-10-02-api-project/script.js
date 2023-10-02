import { getUsers } from './getData.js'
import postsList from './postsList.js'

async function init() {
  const users = await getUsers()
  
  const contentElement = document.querySelector('#content')
  const postsListElement = await postsList()
  
  contentElement.append(postsListElement)
}

init()

