function getPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json())
}
function getPost(id){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(value => value.json())
}

export {getPosts,getPost}