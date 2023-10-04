import { getUsers } from './getData.js'
import header from './header.js'

async function init() {
  const users = await getUsers('?_embed=posts')
  console.log(users)

  const contentElement = document.querySelector('#content')
  
  const headerElement = header()

  const usersList = document.createElement('ul')

  contentElement.append(headerElement, usersList)

  users.forEach(user => {
    console.log(user)
    console.log(user.name)
    console.log(user.posts.length)

    const userItem = document.createElement('li')
    userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name} (${user.posts.length})</a>`

    usersList.append(userItem)
  })
}

init()