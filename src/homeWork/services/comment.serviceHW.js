function getComments(){
    return fetch(`https://jsonplaceholder.typicode.com/comments`).then(value => value.json())
}

function getComment(id){

}

export {getComments,getComment}