function init() {
  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams)
  const postId = urlParams.get('post_id')

  const contentElement = document.querySelector('#content') 

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
    .then(res => res.json())
    .then(post => {
      console.log(post)
      console.log(post.comments)
      
      post.comments.forEach(comment => {
        console.log(comment)
        console.log(comment.name)
        console.log(comment.email)
        console.log(comment.body)
      })

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

      contentElement.append(postTitle, author, postBody)
    })
}

init()