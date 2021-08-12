function getPosts(){
   return  fetch(`https://jsonplaceholder.typicode.com/posts`).then(value => value.json())
}

function getPost(id){
}

export {getPosts,getPost}