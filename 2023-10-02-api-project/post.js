function init() {
  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams)
  const postId = urlParams.get('post_id')

  const contentElement = document.querySelector('#content') 

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
    .then(res => res.json())
    .then(post => {
      console.log(post)
      const userName = post.user.name
      const userId = post.userId

      const postTitle = document.createElement('h1')
      postTitle.textContent = `${post.id}. ${post.title}`

      const author = document.createElement('span')
      const authorLink = document.createElement('a')
      authorLink.textContent = userName
      authorLink.href = './user.html?user_id=' + userId

      author.append('Author: ', authorLink)

      contentElement.append(postTitle, author)
    })
}

init()