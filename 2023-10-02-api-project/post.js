import header from './header.js'

function init() {
  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams)
  const postId = urlParams.get('post_id')

  const contentElement = document.querySelector('#content')

  const headerElement = header()
  contentElement.append(headerElement)

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
    .then(res => res.json())
    .then(post => {
      console.log(post)
      console.log(post.comments)
      


      const userName = post.user.name
      const userId = post.userId

      const postTitle = document.createElement('h1')
      postTitle.textContent = `${post.id}. ${post.title}`

      const author = document.createElement('span')
      const authorLink = document.createElement('a')
      authorLink.textContent = userName
      authorLink.href = './user.html?user_id=' + userId

      author.append('Author: ', authorLink)

      const postBody = document.createElement('p')
      postBody.textContent = post.body

      const commentsWrapper = document.createElement('div')
      commentsWrapper.classList.add('comments-wrapper')

      const commentsTitle = document.createElement('h2')
      commentsTitle.textContent = 'Comments:'

      const commentsList = document.createElement('div')
      commentsList.classList.add('comments-list')

      post.comments.forEach(comment => {
        const commentItem = document.createElement('div')
        commentItem.classList.add('comment-item')

        commentItem.innerHTML = `<h3>${comment.name}</h3>
                                 <span>Commented by: ${comment.email}</span>
                                 <p>${comment.body}</p>`

        commentsList.append(commentItem)
      })

      commentsWrapper.append(commentsTitle, commentsList)

      contentElement.append(postTitle, author, postBody, commentsWrapper)
    })
}

init()